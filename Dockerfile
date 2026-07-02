FROM alpine:latest AS clone-project

WORKDIR /files
RUN apk add git
RUN git clone https://github.com/almarufh/Koda-B8-React .

FROM node:alpine AS create
WORKDIR /create
COPY --from=clone-project /files/ .
RUN npm install
RUN npm run build

FROM nginx:alpine

WORKDIR /usr/share/nginx/html
COPY --from=create /create/dist/ .
COPY --from=create /create/nginx.conf /etc/nginx/conf.d/default.conf