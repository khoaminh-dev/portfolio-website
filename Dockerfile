FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files
COPY package.json package-lock.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the application
COPY . .

# Build the project
RUN npm run build

# Production stage using Nginx
FROM nginx:alpine

# Copy built assets to Nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy custom nginx configuration if needed, using default for now
# Expose port 80
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
