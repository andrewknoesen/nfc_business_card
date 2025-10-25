# Stage 1: Install dependencies and build
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package files first for better layer caching
# This layer only rebuilds when package.json or package-lock.json changes
COPY package*.json ./

# Use npm ci for faster, deterministic installs in Docker
# npm ci is 2-3x faster than npm install in CI/CD environments
RUN npm ci

# Copy source code
# This comes after npm ci so code changes don't invalidate the dependency layer
COPY . .

# Build the application
RUN npm run build

# Stage 2: Production image with nginx
FROM nginx:alpine

# Remove default nginx static assets
RUN rm -rf /usr/share/nginx/html/*

# Copy built files from builder stage
# Adjust the path if your build outputs to a different directory
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost/ || exit 1

CMD ["nginx", "-g", "daemon off;"]

