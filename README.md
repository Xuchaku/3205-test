# Тествое задание 3205.team

## Технологии бекенд

- NodeJS, Express, Typescript

Requirements: NodeJS(v18.17.1^)

## Технологии фронтенд

- Vite
- React, Typescript
- Chackra UI
- Formik
- Yup

## Особенности

Реализована валидация как на клиенте так и на сервере с помощью Yup. В задание размыто понятие "опциональности поля number". Это можно понимать, как поле number имеет пустую строку или вовсе остутствует в теле запроса. Поэтому были реализованы и обработаны оба случая.

## Развертывание

- git clone https://github.com/Xuchaku/3205-test.git
- cd ./3205-test/client && npm i
- cd ./3205-test/server && npm i

- client -> npm run dev
- server -> npm run start

Клиент стартует на порте 5173 -> http://localhost:5173/
Сервер стартует на порте 5000

- Приложение открыть http://localhost:5173/
