# Use a Node.js LTS version as a base image that supports multiple platforms
FROM node:lts-alpine AS builder

# Set the working directory
WORKDIR /app

# Copy frontend dependencies definition
COPY frontend/package.json frontend/package-lock.json ./frontend/

# Install dependencies
RUN cd frontend && npm install

# Expose the port the app runs on
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
