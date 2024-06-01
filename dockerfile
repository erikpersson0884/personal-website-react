FROM node:lts-slim
WORKDIR /app 
COPY . .
RUN npm install
CMD npm start