#Specify a base image
FROM node:alpine

WORKDIR /var/www/html

#Copy files
COPY ./ ./

#Install some dependencies
RUN npm install

#Default command
CMD ["npm", "start"]