FROM node:16.8.0

MAINTAINER SIGUI Kessé Emmanuel (https://sikessem.com/) <contact@sikessem.com>

WORKDIR /app

EXPOSE 3000

ADD . .

RUN npm i || yarn install

CMD ["npm", "start"]
