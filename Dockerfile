#Build Stage
FROM node:16.17.0-alpine AS dependencies

WORKDIR /app

COPY package*.json ./

COPY . .

RUN npm install --force

RUN npm run build


#RUntime Stage
FROM node:16.17.0-alpine as server

WORKDIR /app

COPY . .

COPY --from=dependencies /app/build ./build

RUN npm install --production --force

EXPOSE 3000

CMD npm run start
