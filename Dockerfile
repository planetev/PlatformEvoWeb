FROM node:22-alpine AS deps
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

FROM node:22-alpine AS builder
WORKDIR /app
COPY . .
COPY --from=deps /app/node_modules ./node_modules
RUN yarn build

FROM node:22-alpine AS runner
WORKDIR /app

ENV NODE_ENV development
ENV NEXT_PUBLIC_API=http://137.59.112.61:3001/api/v1/
ENV NEXT_PUBLIC_IMG=http://137.59.112.61:3001/
ENV NEXT_PUBLIC_API_PDF=http://localhost:4432/
ENV NEXTAUTH_SECRET='$argon2id$v=19$m=16,t=2,p=1$WWNpcjZYZm11TVRtczdOMg$rGioT108CRn21BwwplPVZg'
ENV JWT_SECRET='$argon2id$v=19$m=16,t=2,p=1$WWNpcjZYZm11TVRtczdOMg$rGioT108CRn21BwwplPVZg'
ENV NEXTAUTH_URL=http://137.59.112.61/:5173

COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json

EXPOSE 5173

# CMD ["yarn", "start"]
