FROM node:16.8

ENV APP /usr/src/app
RUN mkdir $APP
WORKDIR $APP

COPY package.json package-lock.json $APP/
RUN npm install
CMD ["npm", "run", "dev"]
