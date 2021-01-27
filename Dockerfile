# Dockerfile
FROM node:12 AS base

WORKDIR /app
# ARG SLACK_TOKEN=unset
RUN touch /app/.env
# RUN echo "SLACK_TOKEN=$SLACK_TOKEN" >> /app/.env
RUN cat /app/.env

COPY package*.json ./
RUN npm ci

FROM node:12-alpine
WORKDIR /app
COPY --from=base /app .
COPY . .
RUN npm run build

CMD npm start