FROM node:10.15.3-alpine
RUN mkdir -p /src/app
WORKDIR /src/app
COPY . /src/app
RUN npm install -P \
  && apk add mongodb \
  && apk add mongodb-tools \
  && npm run build
EXPOSE 3000
CMD ["npm","start"]