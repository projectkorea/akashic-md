#!/bin/bash

IMAGE_NAME="ai_watcher_image"
DATE_TAG=$(date +"%Y%m%d_%H%M%S")
SCRIPT_DIR="$(dirname "$(readlink -f "$0")")"
LOG_FILE="$SCRIPT_DIR/logs/build.log"
DB_VOLUME="/home/$$$/work/db:/data/db"
LOG_VOLUME="/home/$$$/work/log:/var/log"

docker stop $IMAGE_NAME || true

docker build -t $IMAGE_NAME:$DATE_TAG .
if [ $? -ne 0 ]; then
    echo "Docker build failed. Exiting..."
    exit 1
fi

docker run -d --rm --name $IMAGE_NAME --network host -v $DB_VOLUME -v $LOG_VOLUME $IMAGE_NAME:$DATE_TAG

echo "Build and run at: $(date)" >> $LOG_FILE
echo "Image tag: $DATE_TAG" >> $LOG_FILE
echo "-----------------------" >> $LOG_FILE

CONTAINER_LOG_FILE="$SCRIPT_DIR/logs/containers/${DATE_TAG}.log"
touch $CONTAINER_LOG_FILE

docker logs -f $IMAGE_NAME &> $CONTAINER_LOG_FILE &
tail -n 21 $LOG_FILE
docker ps -a
