# Stage 1: ARM64 Build
FROM --platform=linux/arm64 node:18-alpine AS arm64-build
WORKDIR /var/www/html
COPY package.json .
RUN npm install --arch=arm64 --platform=linux

# Stage 2: AMD64 Build
# FROM --platform=linux/amd64 node:18-alpine AS amd64-build
# WORKDIR /var/www/html
# COPY package.json .
# RUN npm install --arch=amd64 --platform=linux

# Final Stage: Copy the appropriate platform files depending on your build context
FROM node:16-alpine
WORKDIR /var/www/html
COPY --from=arm64-build /var/www/html .
# Alternatively, if you're building for amd64, copy from amd64-build
# COPY --from=amd64-build /var/www/html .
CMD ["npm", "start"]
