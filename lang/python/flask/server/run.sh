#!/bin/bash

export FLASK_ENV=prod

mongod --fork --logpath /var/log/mongodb.log

sleep 5

gunicorn -D -w 4 -b 0.0.0.0:8001 --log-file /var/log/gunicorn.error.log 'flask_app:app'

npm run start
