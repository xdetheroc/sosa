import * as dotenv from 'dotenv';
dotenv.config({
  path: './.env',
});

export const environment = {
    production: false,
    region: 'ap-southeast-1',
    db: {
        host: process.env.DB_HOST ?? '',
        username: process.env.DB_USERNAME ?? '',
        password: process.env.DB_PASSWORD ?? '',
        name: process.env.DB_NAME ?? '',
        dialect: 'mysql',
        port: 3306,
      },
    ...process.env,
}