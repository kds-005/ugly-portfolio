import { Pool } from "pg";

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    max: 5,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 5000
});

async function testDBConnection() {
    let client;
    try{
        client = await pool.connect();
        const result = await client.query('SELECT NOW()');
        if (result.rows[0].now){
            console.log("DB CONNECTED and returned: ", result.rows[0].now)
        }else{
            console.err("CONNECTED DB but not returning anything")
        }
    }catch (err){
        console.error("DB CONNECTION ERROR: ", err.stack)
    }finally{
        if (client) client.release();
    }
}
testDBConnection()
export default pool;