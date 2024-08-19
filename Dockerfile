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

# Create a new user with UID 10014
RUN addgroup -g 10014 choreo && \
    adduser --disabled-password --no-create-home --uid 10014 --ingroup choreo choreouser

# Set a non-root user
USER 10014

# Set the working directory for the application
WORKDIR /usr/src/app/src

# Command to run the application
CMD [ "node", "index.js" ]
