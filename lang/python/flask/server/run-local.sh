#!/bin/bash

DB_PATH="../venv/data/db"
MONGO_LOG="../venv/mongodb.log"
GUNICORN_LOG="../venv/gunicorn.error.log"
PORT=8001
DB_NAME=$$$
ENV="dev"
VENV_PATH="../venv"
# ENV="prod"

setup_venv() {
    if [ ! -d "$VENV_PATH" ]; then
        echo "0. 가상 환경 생성중..."
        python3 -m venv "$VENV_PATH"
        echo "1. 가상 환경 활성화"
        source "$VENV_PATH/bin/activate"
        echo "2. 패키지 설치중..."
        pip install -r requirements.txt
        cd src && npm install && cd ..
    else
        echo "가상 환경 활성화"
        source "$VENV_PATH/bin/activate"
    fi
}

init_db_dir() {
    [ ! -d "$DB_PATH" ] && mkdir -p "$DB_PATH"
}

start_mongodb() {
    mongod --dbpath "$DB_PATH" --fork --logpath "$MONGO_LOG"
    [ $? -ne 0 ] && echo "MongoDB failed to start. Check $MONGO_LOG for details." && exit 1
}

insert_document() {
    sleep 2
    mongosh "localhost:27017/$DB_NAME" --eval '
        if (!db.users.findOne({"username": "$$$"})) {
            db.users.insert({"username": "$$$", "password": "$$$"});
            print("✅ Successfully inserted user $$$");
        } else {
            print("✅ User $$$ already exists");
        }
    '
}

start_gunicorn() {
    export FLASK_ENV=$ENV
    sleep 3
    gunicorn -D -w 4 -b "0.0.0.0:$PORT" --log-file "$GUNICORN_LOG" 'flask_app:app'
    echo "✅ Gunicorn is running at http://localhost:$PORT/admin"
    [ $? -ne 0 ] && echo "Gunicorn failed to start." && exit 1
}

cleanup_services() {
    echo "----서비스 종료 중..."
    pkill -9 -i "gunicorn"
    mongosh admin --eval "db.shutdownServer()" || true
}

run_services() {
    trap cleanup_services EXIT
    
    setup_venv
    init_db_dir
    start_mongodb
    insert_document
    start_gunicorn
    npm run dev
}

run_services
