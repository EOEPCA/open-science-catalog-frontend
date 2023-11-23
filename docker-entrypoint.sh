#!/bin/sh

sed -i "s| catalogUrl:.*| catalogUrl: '${STATIC_ENDPOINT}/catalog.json'|" static/stac-browser/config.js
npx nuxt start
