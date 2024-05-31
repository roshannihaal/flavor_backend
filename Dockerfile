FROM node:20.13-bookworm-slim as base

RUN apt-get update -y && apt-get install -y openssl

FROM base as development

WORKDIR /usr/src/app

COPY package.*json .

RUN npm install

COPY . .

RUN npm run build

FROM base as production

WORKDIR /usr/src/app

COPY package.json .

RUN npm install --omit=dev --ignore-scripts

COPY --from=development /usr/src/app/dist ./dist

CMD ["npm","run","start"]