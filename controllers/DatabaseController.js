const mysql = require('mysql')

export default class DatabaseController {

    constructor(){
        this.connection = mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME
        })

    }

    test(){
        this.connection.connect()
        this.connection.query('SELECT * FROM users', (error, results, fields) => {
            if (error) throw error;
            console.log(results)
        })
    }
    
}
