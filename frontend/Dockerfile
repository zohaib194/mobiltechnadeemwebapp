# base image
FROM node:12.2.0-alpine

# set working directory
COPY . /usr/src/app
WORKDIR /usr/src/app

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH

# install and cache app dependencies
RUN npm install --silent

# run build
RUN npm run build

# set up production environment
# the base image for this is an alpine based nginx image
FROM node:alpine
RUN yarn global add serve
WORKDIR /app
# copy the build folder from react to the root of nginx (www)
COPY --from=builder /usr/src/app/build .
# --------- only for those using react router ----------
# if you are using react router 
# you need to overwrite the default nginx configurations
# remove default nginx configuration file
RUN rm /etc/nginx/conf.d/default.conf
# replace with custom one
COPY nginx/nginx.conf /etc/nginx/conf.d
# --------- /only for those using react router ----------
# expose port 80 to the outer world
EXPOSE 3000
# start nginx 
CMD ["serve", "-p", "3000", "-s", "."]