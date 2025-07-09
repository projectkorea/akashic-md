#!/bin/bash

mongod --fork --logpath /var/log/mongodb.log

sleep 5

gunicorn --timeout 60 -D -w 4 -b 0.0.0.0:8001 --log-file /var/log/gunicorn.error.log admin_server:app

node watcher.js
