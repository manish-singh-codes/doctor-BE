FROM node:20-alpine
WORKDIR /app

# Install OpenSSL and other required dependencies
RUN apk add --no-cache openssl openssl-dev

COPY . .
RUN yarn add copyfiles
RUN yarn install
COPY . .
RUN yarn build
EXPOSE 5050

RUN ["chmod", "+x", "./entrypoint.sh"]
ENTRYPOINT [ "sh", "./entrypoint.sh" ]