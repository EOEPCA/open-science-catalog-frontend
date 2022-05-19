FROM node:16-alpine3.14

ENV NUXT_VERSION=2.15.8

WORKDIR /app

ADD . ./
RUN : \
  && npm install \
  && npm run build --standalone \
  # && rm -rf node_modules \
  # && rm package.json \
  # && npm install "nuxt-start@${NUXT_VERSION}" \
  && npm cache clean –force \
  && :

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000
EXPOSE 3000
ENTRYPOINT ["npx", "nuxt", "start"]
