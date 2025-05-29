from flask import Flask
from flask_session import Session
from pymongo import MongoClient
from .html_utils import nl2br, escape_html, js_escape

app = Flask(__name__)
app.secret_key = '$$$'
app.config['SESSION_TYPE'] = 'mongodb'
app.config['SESSION_MONGODB'] = MongoClient('mongodb://localhost:27017/')
app.config['SESSION_MONGODB_DB'] = '$$$'
app.config['SESSION_MONGODB_COLLECT'] = 'users'

app.jinja_env.filters['nl2br'] = nl2br
app.jinja_env.filters['escape_html'] = escape_html
app.jinja_env.filters['js_escape'] = js_escape


Session(app)

print('Flask app initialized')

# Import the routes
from .app import * 