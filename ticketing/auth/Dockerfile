FROM node:alpine

WORKDIR /var/www/html
COPY package.json .
RUN npm install
COPY . .

CMD ["npm","start"]