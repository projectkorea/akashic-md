FROM base_ubuntu_python312_node20_mongodb7:latest

WORKDIR /work

COPY package.json requirements.txt /work/

RUN npm install \
    && pip install -r requirements.txt

COPY flask_app /work/flask_app
COPY src /work/src

COPY run.sh /work/
RUN chmod +x run.sh
CMD ["/work/run.sh"]

# You can just use only this 3 lines for dev environment
# COPY run-dev.sh /work/
# RUN chmod +x run-dev.sh
# CMD ["/work/run-dev.sh"]
