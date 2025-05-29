from flask import request, session, redirect, url_for, render_template
from functools import wraps
from .db_service import authenticate_user, get_filtered_data, get_age_fields, get_profile_data
from . import app

def login_required(f):
    @wraps(f)
    def decorated_function(*args, **kwargs):
        if 'user_id' not in session:
            return redirect(url_for('login'))
        return f(*args, **kwargs)
    return decorated_function

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        
        user = authenticate_user(username, password)

        if user:
            session['user_id'] = str(user['_id'])
            return redirect(url_for('admin'))
        return 'Invalid username or password'
    return render_template('login.html')

def build_query(filter_type, selected_filters):
    query = {
        'updatedAt': {'$exists': True},
        'content': {'$exists': True}
    }
    
    filter_type_queries = {
        'female': {'gender': 'female', 'score': {"$gte": 60}},
        'femaleCheck': {'processed': 'femaleCheck'},
        'possibly': {'processed': 'possibly'},
        'mustBeChild': {'processed': 'mustBeChild'},
        'maybeChild': {'processed': 'maybeChild'},
        'retry': {'processed': 'retry'},
        'search': {'fbUid': request.args.get('fbUid')}
    }
    
    if filter_type in filter_type_queries:
        query.update(filter_type_queries[filter_type])
    
    # 선택된 필터 적용
    if selected_filters:
        gender, good_score, age_filters, processed = selected_filters
        
        if gender:
            query['gender'] = {"$in": gender}
        
        if good_score:
            query['score'] = {"$gte": int(good_score)}
        
        if age_filters:
            if 'etc' in age_filters:
                top_10 = [item['_id'] for item in get_age_fields()]
                query['age'] = {"$nin": top_10}
                non_etc_filters = [age for age in age_filters if age != 'etc']
                if non_etc_filters:
                    query['age']['$nin'] = [age for age in top_10 if age not in non_etc_filters]
            else:
                query['age'] = {"$in": age_filters}
        
        if processed:
            query['processed'] = {"$in": processed}
    
    return query

@app.route('/admin', defaults={'filter_type': 'all'}, methods=['GET', 'POST'])
@app.route('/admin/<filter_type>', methods=['GET', 'POST'])
@login_required
def admin(filter_type):
    selected_filters = []
    if request.method == 'POST':
        selected_filters = [
            request.form.getlist('gender'),
            request.form.get('goodScore', 0),
            request.form.getlist('age_filter'),
            request.form.getlist('processed')
        ]

    page = int(request.args.get('page', 1))
    limit = int(request.args.get('limit', 2000))
    
    if filter_type == 'female':
        limit = 100_000
    elif selected_filters:
        limit = 5000
        
    skips = limit * (page - 1)

    query = build_query(filter_type, selected_filters)
    data = get_filtered_data(query, skips, limit)
    return render_template('admin.html', data=data, total_documents=0, selected_filters=selected_filters)

@app.route('/admin/chart', methods=['GET'])
@login_required
def chart():
    return render_template('chart.html')

@app.route('/admin/profile', methods=['GET'])
@app.route('/admin/profile/<filter_type>', methods=['GET'])
@login_required
def profile(filter_type='all'):
    query = {
        'updatedAt': {'$exists': True},
        'content': {'$exists': True}
    }
    
    if filter_type == 'search':
        fbUid = request.args.get('fbUid')
        if fbUid:
            query['fbUid'] = fbUid
    
    page = int(request.args.get('page', 1))
    limit = int(request.args.get('limit', 2000))
    skips = limit * (page - 1)
    
    data = get_profile_data(query, skips, limit)
    return render_template('profile.html', data=data, total_documents=0, selected_filters=[])