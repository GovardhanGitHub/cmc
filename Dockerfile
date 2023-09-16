# Use an official Node.js runtime as the base image
FROM node:14 as build

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install Angular CLI globally
RUN npm install -g @angular/cli

# Install project dependencies
RUN npm install

# Copy the entire project to the container
COPY . .

# Build the Angular application
RUN ng build --prod

# Use an official Apache HTTP Server image as the base image
FROM httpd:2.4

# Copy your Angular application's built files to the Apache document root
COPY dist/ /usr/local/apache2/htdocs/

# Expose port 80 for incoming HTTP requests
EXPOSE 80
