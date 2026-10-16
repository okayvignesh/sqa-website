# syntax=docker/dockerfile:1

# ============================================================
# SimplifyQA website, Next.js 15 production image.
#
# The site is a Next.js App Router server app (SSR, route handlers
# under app/api, and middleware.ts), so the runtime is a Node server
# rather than a static nginx image.
#
# Uses Next.js "standalone" output (see next.config.js) so the runtime
# ships only the traced server bundle instead of the whole node_modules.
#
# Listens on port 80 to preserve the container port contract used by the
# deployment (the previous nginx image also served on 80). Binding 80 needs
# privilege, so the process runs as root; to harden, run as the "node" user
# and either grant NET_BIND_SERVICE in the pod securityContext or move the
# app to port 3000 and point the Service targetPort at it.
# ============================================================

# ---------- deps: install once, cached on the lockfile ----------
FROM node:20-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

# ---------- builder: compile the Next.js app ----------
FROM node:20-alpine AS builder
WORKDIR /app
ENV NEXT_TELEMETRY_DISABLED=1
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# ---------- runner: minimal production image ----------
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production \
    NEXT_TELEMETRY_DISABLED=1 \
    PORT=80 \
    HOSTNAME=0.0.0.0

# The standalone server bundle, plus the static assets it serves.
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

EXPOSE 80

# Serves SSR pages, API routes, and middleware.
CMD ["node", "server.js"]
