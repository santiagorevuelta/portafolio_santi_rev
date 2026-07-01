FROM node:16.11.0-alpine

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
# ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package*.json ./

RUN npm install --silent

# add app
COPY . ./

RUN npm run build

# Install only production dependencies
RUN npm install --production --legacy-peer-deps

# new
EXPOSE 8080
CMD ["node", "server.js"]
