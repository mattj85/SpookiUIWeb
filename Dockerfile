# syntax=docker/dockerfile:1

# ---- Build stage: compile the static site with Vite ----
FROM node:22-alpine AS build
WORKDIR /app

# Install dependencies against the lockfile for reproducible builds.
COPY package.json package-lock.json ./
RUN npm ci

# Build the production bundle into /app/dist.
COPY . .
RUN npm run build

# ---- Serve stage: ship the static files with nginx ----
FROM nginx:1.27-alpine AS serve

# Site config (server_name, SPA fallback, gzip, cache headers).
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Static assets produced by the build stage.
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget -q --spider http://localhost/ || exit 1

CMD ["nginx", "-g", "daemon off;"]
