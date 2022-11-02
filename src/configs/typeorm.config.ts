import {TypeOrmModuleOptions } from "@nestjs/typeorm";

export const typeORMConfig : TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '4432',
    database: 'board-test',
    entities: ['../**/*.entity.js'],
    synchronize: true
}