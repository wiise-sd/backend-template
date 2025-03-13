FROM node:22.8.0-slim

RUN apt update && \
   apt install -y curl 

COPY start.sh /
RUN chmod +x /start.sh

USER node

WORKDIR /home/node/app

CMD [ "/start.sh" ]