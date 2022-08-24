# Project bootstrapping

npx sequelize-cli init

# Creating the first Model (and Migration)

npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string

This will:
Create a model file user in models folder;
Create a migration file with name like XXXXXXXXXXXXXX-create-user.js in migrations folder.

# Running Migrations

npx sequelize-cli db:migrate

This command will execute these steps:

Will ensure a table called SequelizeMeta in database. This table is used to record which migrations have run on the current database
Start looking for any migration files which haven't run yet. This is possible by checking SequelizeMeta table. In this case it will run XXXXXXXXXXXXXX-create-user.js migration, which we created in last step.
Creates a table called Users with all columns as specified in its migration file.

# Creating the first Seed

npx sequelize-cli seed:generate --name demo-user

This command will create a seed file in seeders folder. File name will look something like XXXXXXXXXXXXXX-demo-user.js. It follows the same up / down semantics as the migration files.

# Running Seeds

npx sequelize-cli db:seed:all

# Start Project

npm start
