#!/bin/bash

# Variables
IMAGE_NAME="watcher"
DATE_TAG=$(date +"%Y%m%d_%H%M%S")
SCRIPT_DIR="$(dirname "$(readlink -f "$0")")"
LOG_FILE="$SCRIPT_DIR/logs/build.log"
DB_VOLUME="/home/junha/work/db:/data/db"
LOG_VOLUME="/home/junha/work/log/gunicorn.error.log:/var/log/gunicorn.error.log"

# Stop the existing container (ignore errors if not running)
docker stop $IMAGE_NAME || true

# Build the new image
docker build -t $IMAGE_NAME:$DATE_TAG .
if [ $? -ne 0 ]; then
    echo "Docker build failed. Exiting..."
    exit 1
fi

# Run the new container
docker run -d --rm --name $IMAGE_NAME --network host -v $DB_VOLUME -v $LOG_VOLUME $IMAGE_NAME:$DATE_TAG

# Log the build time
echo "Build and run at: $(date)" >> $LOG_FILE
echo "Image tag: $DATE_TAG" >> $LOG_FILE
echo "-----------------------" >> $LOG_FILE

# Create container log file
CONTAINER_LOG_FILE="$SCRIPT_DIR/logs/containers/${DATE_TAG}.log"
touch $CONTAINER_LOG_FILE

# Start logging the container logs
docker logs -f $IMAGE_NAME &> $CONTAINER_LOG_FILE &

# Display recent build logs and Docker container status for debugging
tail -n 21 $LOG_FILE
docker ps -a
