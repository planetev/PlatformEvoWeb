# Stage 1: Install dependencies
FROM node:22 AS deps
WORKDIR /app

RUN npm install -g npm
COPY package.json yarn.lock* ./
RUN npm install

# Stage 2: Build the app
FROM node:22 AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN npm run build

# Stage 3: Run the production
FROM node:22 AS runner
WORKDIR /app

ENV NODE_ENV production
ENV NEXT_SHARP_PATH /app/node_modules/sharp

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

ENV PORT 5173

# copy assets and the generated standalone server
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 5173


CMD ["node", "server.js"]


# CMD ["yarn", "start"]