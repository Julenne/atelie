FROM node:14.15

WORKDIR /atelie/back
COPY package*.json ./

RUN npm install 

FROM scratch
COPY . . 

EXPOSE 3333
CMD ["npm", "start"]