# Using node js 18 alpine as the base image
FROM node:18-alpine


# Setup the working directory to /usr/src/app
WORKDIR /usr/src/app


## Copying all files 
COPY . .

# Install all dependencies
RUN npm install

# build the react app
RUN npm run build

EXPOSE 3000


CMD ["npm","start"]




