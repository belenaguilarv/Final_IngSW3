import {createPool} from 'mysql2/promise'

export const db = createPool({
    host:'localhost',
    user: 'root',
    password: 'root',
    port: 3306,
    database: 'supermarketdb'
});

