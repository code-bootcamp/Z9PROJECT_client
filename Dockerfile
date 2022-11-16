FROM node:16-alpine

WORKDIR /zero9/
COPY ./package.json /zero9/
# COPY ./yarn.lock /zero9/
RUN yarn install --force --network-timeout 1000000

COPY . /zero9/

RUN yarn build
CMD yarn start