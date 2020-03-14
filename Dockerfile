FROM node

RUN mkdir -p /opt/app

WORKDIR /opt/app

COPY package.json .
RUN yarn

RUN yarn global add nodemon --quiet

COPY . .

EXPOSE 8000

CMD nodemon -L --watch . src/index.js