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
RUN rm -rf ./node_modules
RUN npm install -g serve

# new
EXPOSE 8080
CMD ["serve", "-s", "build", "-p", "8080"]
