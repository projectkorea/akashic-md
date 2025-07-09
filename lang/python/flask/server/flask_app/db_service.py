from pymongo import MongoClient
import certifi
import os

env = os.getenv('FLASK_ENV', 'dev') 

local = MongoClient('mongodb://localhost:27017/')
local_db = local['$$$']
local_users = local_db['users']
store = None

if env == 'dev':
    store = MongoClient(
        "$$$",
        tlsCAFile=certifi.where()
    )
else:
    store = MongoClient(
        "$$$",
        tlsCAFile=certifi.where()
    )

store_db = store['$$$']
store_face = store_db['$$$.face']
store_profile = store_db['$$$.profile']

def authenticate_user(username, password):
    return local_users.find_one({'username': username, 'password': password})

def get_total_docs(query):
    return store_face.count_documents(query)

def get_age_fields():
    """상위 10개의 age 필드와 그 외의 나머지 항목을 'etc'로 반환
        Returns:
        List[Dict[str, Union[str, int]]]: 상위 10개의 age 그룹과 나머지를 합한 'etc'를 포함한 리스트
        각 항목은 _id(나이 또는 'etc')와 count(등장 횟수)를 포함한 딕셔너리
    """
    
    top_10 = list(store_face.aggregate([
        {'$group': {'_id': '$age', 'count': {'$sum': 1}}},
        {'$sort': {'count': -1}},
        {'$limit': 10}
    ]))
    
    other_ages_count = list(store_face.aggregate([
        {'$group': {'_id': '$age', 'count': {'$sum': 1}}},
        {'$match': {'_id': {'$nin': [item['_id'] for item in top_10]}}},
        {'$group': {'_id': 'etc', 'count': {'$sum': '$count'}}}
    ]))
    
    if other_ages_count:
        top_10.append(other_ages_count[-1])
    
    return top_10

def get_filtered_data(query, skips=0, limit=1000):
    return list(store_face.find(query).sort('updatedAt', -1).skip(skips).limit(limit))

def get_profile_data(query, skips=0, limit=1000):
    return list(store_profile.find(query).sort('updatedAt', -1).skip(skips).limit(limit))
