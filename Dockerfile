FROM node:8.11-alpine

RUN apk update && apk upgrade && \
    apk add --no-cache bash git openssh

ENV TZ=Asia/Shanghai

WORKDIR /app
COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json

RUN npm install --only=production

COPY . /app

RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && \
        echo $TZ > /etc/timezone && \
        npm run prod

EXPOSE 3000

CMD npm run start
