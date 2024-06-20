# Use a Node.js LTS version as a base image that supports multiple platforms
FROM node:lts-alpine AS builder

# Set the working directory
WORKDIR /app

# Install dependencies and build frontend
COPY frontend/package.json frontend/package-lock.json ./frontend/
RUN cd frontend && npm install && npm run build

# Copy backend files
# COPY backend/ ./backend/

# Install backend dependencies
# WORKDIR /app/backend
# RUN npm install

# Expose the port the app runs on
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
