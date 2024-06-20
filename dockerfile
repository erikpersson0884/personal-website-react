# Use a Node.js LTS version as a base image that supports multiple platforms
FROM --platform=${BUILDPLATFORM:-linux/amd64} node:lts-alpine AS builder

# Set the working directory
WORKDIR /app

# Install dependencies using npm
COPY frontend/package.json frontend/package-lock.json ./frontend/
RUN cd frontend && npm install

# Copy the rest of the frontend code
COPY frontend/ ./frontend/

# Build the frontend
RUN cd frontend && npm run build

# Final production image
FROM --platform=linux/arm/v7 node:lts-alpine

# Set the working directory
WORKDIR /app

# Copy built frontend from builder stage
COPY --from=builder /app/frontend/build ./frontend/build

# Expose the port the app runs on
EXPOSE 3000

# Start the application when the Docker container is run
CMD ["npm", "--prefix", "./frontend", "start"]
