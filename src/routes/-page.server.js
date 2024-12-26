
import { config } from 'dotenv'
config()


import Database from 'better-sqlite3';
import { error } from '@sveltejs/kit';
console.log('!!!',process.env.HELLO,   process.env.SQLITE_DB_PATH)

//const db = new Database('src/lib/server/chinook.db',{verbose:console.log})
const db = new Database(process.env.SQLITE_DB_PATH,{verbose:console.log})

db.pragma('journal_mode = WAL');
//  OK-> 'src/lib/server/chinook.db
//https://hartenfeller.dev/blog/sveltekit-with-sqlite


export function load() {
	const stmnt = db.prepare('SELECT * FROM tracks limit 10');
	stmnt.run
	 const rows2 = stmnt.all();
	 return {rows2}; //as Track[];
}