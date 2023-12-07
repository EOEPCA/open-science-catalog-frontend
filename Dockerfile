FROM node:20-alpine3.18 as browser
RUN apk --no-cache add git

RUN git clone https://github.com/EOEPCA/open-science-catalog-stac-browser.git
WORKDIR /open-science-catalog-stac-browser
RUN \
npm i \
&& npm run build



FROM node:20-alpine3.18
ENV NUXT_VERSION=2.15.8

WORKDIR /app

ADD . ./
COPY --from=browser /open-science-catalog-stac-browser/dist/ static/stac-browser/
COPY  static/stac-browser/stac-browser-config.js static/stac-browser/config.js

RUN : \
  && npm install \
  && npm run build --standalone \
  # && rm -rf node_modules \
  # && rm package.json \
  # && npm install "nuxt-start@${NUXT_VERSION}" \
  && npm cache clean –force \
  && :
RUN chmod +x ./docker-entrypoint.sh
ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000
EXPOSE 3000
ENTRYPOINT ["/app/docker-entrypoint.sh"]
