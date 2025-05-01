#Specify a base image
FROM node:alpine

WORKDIR /var/www/html

#Install some dependencies
COPY ./package.json ./
RUN npm install
COPY ./ ./

#Default command
CMD ["npm", "start"]