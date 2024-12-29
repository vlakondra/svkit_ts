import 'dotenv/config' // from 'dotenv'
import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client';

//config() это не работает -> https://www.npmjs.com/package/dotenv/v/14.0.0 ?
// const result = dotenv.config()


console.log(parseInt(process.env.NEW_TEST!)**2)


const client = createClient({ url: process.env.SQLITE_DB_PATH! }); //https://stackoverflow.com/questions/54496398/typescript-type-string-undefined-is-not-assignable-to-type-string

const db = drizzle({ client }); //Это тоже интересно и м.б. проще в использовании


export async function load() {

    const rows2 = await client.execute('SELECT "TrackId" as ПК ,"Name" as имя,"AlbumId" FROM tracks limit 5');
    const cols = rows2.toJSON().columns
    const rr  = rows2.toJSON().rows
    //const rows = await db.all('SELECT * FROM tracks limit 10')
    return {c:cols, r:rr}
}