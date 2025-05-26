import pool from '../lib/db'

export default async function handler(req, res) {
    let client;
    try{
        client = await pool.connect();
        const project = await client.query(`
            SELECT
                id,
                name,
                description,
                tags
            FROM app.projects
            `);
        res.json(project.rows);
    }catch (err){
        console.error("DB Error: ", err)
    }finally{
        client.release();
    }
}