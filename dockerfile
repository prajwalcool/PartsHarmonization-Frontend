# base image
FROM node:lts-alpine

# set working directory
WORKDIR /app


# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install and cache dependencies
COPY package*.json ./

RUN yarn
#build the project for production

COPY . /app
EXPOSE 80
RUN yarn build

# start app
CMD ["yarn", "serve"]