FROM node:18 AS build
ARG VITE_BACKEND_URL="http://localhost:3001/api/v1"
WORKDIR /build
COPY package.json .
COPY package-lock.json .
RUN npm ci
COPY . .
RUN npm run build

FROM nginx AS final
WORKDIR /usr/share/nginx/html
COPY --from=build /build/dist .