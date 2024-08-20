# Stage 1: Build
FROM node:20-alpine AS build

# Create app directory
WORKDIR /usr/src/app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm ci

# Copy the rest of the application source
COPY . .

# Stage 2: Create the production image
FROM node:20-alpine

# Create app directory
WORKDIR /usr/src/app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm ci --omit=dev

# Copy the application source code
COPY . .

# Set the working directory for the application
WORKDIR /usr/src/app/src

# Command to run the application
CMD [ "node", "index.js" ]
