FROM node:20

WORKDIR /app

COPY . /app/

RUN npm install

RUN npx prisma generate

EXPOSE 3000

CMD ["sh", "-c", "npm run build && npm start"]

