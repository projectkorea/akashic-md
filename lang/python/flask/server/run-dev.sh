#!/bin/bash

export FLASK_ENV=dev

mongod --fork --logpath /var/log/mongodb.log

sleep 5

gunicorn -D -w 4 -b 0.0.0.0:80 --log-file /var/log/gunicorn.error.log 'flask_app:app'

npm run dev


# 0. 인스턴스 셋업
# sudo apt-get update
# sudo apt-get install git mongodb mongodb-clients docker.io

# 1. sudo groupadd docker
# sudo usermod -aG docker $USER
# newgrp docker

# 2. Mongo debug
# mongo
# use $$$
# show collections
# db.users.find()
# db.users.find().pretty()
# db.users.insertOne({ "username": "$$$", "password": "$$$" })
# db.users.find()

# 3. build
# docker build -t base_ubuntu_python312_node20_mongodb7 -f Dockerfile.base .

# 4. debug
# docker exec -it ai_watcher_image bash
# sudo apt install net-tools
# netstat -tulpn | grep :80
# kill -9 `pgrep -f gunicorn`
