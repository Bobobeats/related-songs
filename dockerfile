FROM node:10.15.3-alpine
RUN mkdir -p /src/app
WORKDIR /src/app
COPY . /src/app
RUN npm install
RUN apk add mongodb
RUN apk add mongodb-tools
RUN npm run seed
EXPOSE 3000
CMD ["npm","start"]
