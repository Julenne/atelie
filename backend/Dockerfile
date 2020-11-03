#o alpine é melhor pois gasta menos mb que node:latest
FROM node:alpine

WORKDIR /usr/app
COPY package*.json ./

RUN npm install 

#FROM scratch
COPY . . 

EXPOSE 3333
CMD ["npm", "start"]