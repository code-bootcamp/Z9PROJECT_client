FROM node:16

COPY ./package.json /zeor9/
COPY ./yarn.lock /zeor9/
WORKDIR /zeor9/
RUN yarn install

COPY . /zeor9/
RUN yarn build
CMD yarn start