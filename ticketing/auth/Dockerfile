FROM node:alpine

WORKDIR /var/www/html
COPY package.json .
RUN npm install --omit=dev
COPY . .

CMD ["npm","start"]