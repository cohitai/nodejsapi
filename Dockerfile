FROM node:14


#install nginx to reverse-proxy
RUN apt-get clean \
    && apt-get -y update

RUN apt-get -y install \
    nginx \
    build-essential


# Replace with our own nginx.conf
COPY nginx.conf /etc/nginx

#create app directory
WORKDIR /app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY REST-mongdb/package*.json ./

RUN npm install
# If you are building your code for production
RUN npm ci --only=production

# Bundle app source
ADD ./REST-mongdb /app

RUN chmod +x ./startup.sh

EXPOSE 80

CMD ["./startup.sh"]

#CMD ["node", "app.js"]




