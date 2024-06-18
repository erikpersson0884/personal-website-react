# Use an official Node.js LTS version as a base image
FROM node:lts-alpine

# Set the working directory
WORKDIR /app

# Install dependencies using npm
COPY frontend/package.json frontend/package-lock.json ./frontend/
RUN cd frontend && npm install

# Copy the rest of the frontend code
COPY frontend/ ./frontend/

# Expose the port the app runs on
EXPOSE 3000

# Build the frontend
RUN cd frontend && npm run build

# Start the application when the Docker container is run
CMD ["npm", "--prefix", "./frontend", "start"]
