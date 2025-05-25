// write a function to create a users table in your database.
import { Client } from 'pg'
 
const client = new Client({
  connectionString: "postgresql://postgres:developer@localhost/postgres"
})

async function insertUserData(username: string, password: string, email: string) {
    await client.connect()

    // SQL Injection
    
    // const result = await client.query(`
    //     INSERT INTO users (username, password, email)
    //     VALUES ('${username}', '${password}', '${email}')
    // `)
    // console.log(result)
    

    // Safe SQL Query
    const result = await client.query(`
        INSERT INTO users (username, password, email)
        VALUES ($1, $2, $3)
    `, [username, password, email])
    console.log(result)
}

insertUserData(
    "useasdf11",
    "1asdf23",
    "prathaasdfm@gmail.com"
);

// async function createUsers2Table() {
//     await client.connect()
//     const result = await client.query(`
//         CREATE TABLE users2 (
//             id SERIAL PRIMARY KEY,
//             username VARCHAR(50) UNIQUE NOT NULL,
//             email VARCHAR(255) UNIQUE NOT NULL,
//             password VARCHAR(255) NOT NULL,
//             created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
//         );
//     `)
//     console.log(result)
// }

// createUsers2Table();