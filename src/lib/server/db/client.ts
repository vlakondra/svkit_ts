// import Database from 'better-sqlite3'
// import * as dotenv from 'dotenv'
// import {drizzle} from 'drizzle-orm/better-sqlite3'

// const client = new Database(process.env.SQLITE_DB_PATH)
// const db = drizzle(client)
// export {client,db}

import { drizzle } from 'drizzle-orm/libsql';

// const db = drizzle({ connection: {
//   url: './src/chinook.db', 
//   authToken: ''
// }});
// export {db};  // export the db object