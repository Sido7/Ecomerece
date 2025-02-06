FROM node:20

WORKDIR /app

COPY package*.json /app/

RUN npm install

COPY . /app/

RUN npx prisma generate

EXPOSE 3000

CMD ["sh", "-c", "npm run build && npm start"]