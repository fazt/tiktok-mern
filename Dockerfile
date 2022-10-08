FROM node

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .

RUN npm run build

RUN npm run build:front

EXPOSE 3000

CMD [ "npm", "start" ]