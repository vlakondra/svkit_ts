25.12.24
1. Установил tsx по https://tsx.is/getting-started
   Добавил package.json "start": "tsx ./src/file.ts"
   Вызов - npm run start или npx tsx ./src/file.ts
   C tsx и tsc более-менее понятно. Попробовать с  Drizzle.

2. dotenv: файл .env должен быть в корне проекта. Путь к DB должен быть относительным:
   src/lib/server/chinook.db  НО с прямыми слешами "/"
   Не понятно с dotenv и dotenvx. (https://dotenvx.com/docs/install) Что использовать.

26.12.24   
1. Начал разбираться с drizzle libsql. Интересна функция createClient.
   В отличие от объекта db возвращает имена столбцов, их типы и данные РАЗДЕЛЬНО,
   но требует применения toJson(). Может пригодиться в SQL-validator  
