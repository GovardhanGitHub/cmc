

### STAGE 1: Build ###
FROM node:16-alpine3.12 AS build
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm install --save --legacy-peer-deps
COPY . .
RUN export NODE_OPTIONS=--openssl-legacy-provider
RUN npm run build


### STAGE 2: Run ###
FROM nginx:1.17.1-alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /usr/src/app/dist/globing /usr/share/nginx/html





# Expose port 80 to the Docker host, so we can access it
# from the outside.
EXPOSE 80

ENTRYPOINT ["nginx","-g","daemon off;"]
