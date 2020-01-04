FROM node:10.18.0-alpine

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json /app/package.json


RUN npm install
RUN npm install @vue/cli@3.7.0 -g

COPY . /app

CMD ["npm","run","serve"]

