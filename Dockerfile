FROM node:16-alpine3.14 as browser
RUN apk --no-cache add git

RUN git clone https://github.com/A-Behairi/open-science-catalog-stac-browser.git
WORKDIR /open-science-catalog-stac-browser
RUN \
npm i \
&& npm run build



FROM node:16-alpine3.14
ENV NUXT_VERSION=2.15.8

WORKDIR /app

ADD . ./
COPY --from=browser /open-science-catalog-stac-browser/dist/* /static/stac-browser/
COPY  static/stac-browser/stac-browser-config.js static/stac-browser/config.js

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
