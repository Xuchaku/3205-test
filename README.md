# Тествое задание 3205.team

## Технологии бекенд

- NodeJS, Express, Typescript

## Технологии фронтенд

- Vite
- React, Typescript
- Chackra UI
- Yup

## Особенности

Реализована валидация как на клиенте так и на сервере с помощью Yup. В задание размыто понятие "опциональности поля number". Это можно понимать, как поле number имеет пустую строку или вовсе остутствует в теле запроса. Поэтому обработаны были реализованы и обработаны оба случая.

## Развертывание

- npm clone https://github.com/Xuchaku/3205-test.git
- cd ./client && npm i
- cd ./server && npm i

- client -> npm run dev
- server -> npm run start

Клиент стартует на порте 5173 -> http://localhost:5173/
Сервер стартует на порте 5000

- Приложение открыть http://localhost:5173/
