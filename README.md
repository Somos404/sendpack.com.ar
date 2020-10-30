yarn init
yarn install

////mysql
yarn add express
yarn add mysql
yarn add nodemon
yarn add body-parser

yarn add sequelize
yarn add cors

yarn add mysql2
npx sequelize-cli init
npx sequelize-cli model:generate --name Users --attributes name:string,last_name:string,email:string,password:string
npx sequelize-cli db:migrate
npx sequelize-cli seed:generate --name user

npx sequelize-cli db:seed:all

npx sequelize-cli model:generate --name Role --attributes name:string

npx sequelize-cli model:generate --name Packages --attributes km:integer,price:integer,weight:integer,size:integer

npx sequelize-cli model:generate --name initial_address --attributes city:string,street:string,number:integer,department:string
npx sequelize-cli model:generate --name final_address --attributes city:string,street:string,number:integer,department:string

npx sequelize-cli model:generate --name transport --attributes size:integer,price:integer

npx sequelize-cli model:generate --name service --attributes name:integer,price:integer

yarn add bcrypt-nodejs
yarn add express-validator
yarn add jwt-simple