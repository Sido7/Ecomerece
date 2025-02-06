FROM node:18

WORKDIR /app

COPY . /app/

RUN npm install

RUN npm run build

RUN npx prisma generate

EXPOSE 3000

CMD ["node", "build/index.js"]