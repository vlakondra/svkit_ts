import 'dotenv/config' // from 'dotenv'
import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client';

//config()

const client = createClient({ url: process.env.SQLITE_DB_PATH });

const db = drizzle({ client }); //Это тоже интересно и м.б. проще в использовании

export async function load() {
    const rows2 = await client.execute('SELECT "TrackId","Name","AlbumId" FROM tracks limit 5');
    const cols = rows2.toJSON().columns
    const rr  = rows2.toJSON().rows
    //const rows = await db.all('SELECT * FROM tracks limit 10')
    return {c:cols, r:rr}
}