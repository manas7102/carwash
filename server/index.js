const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');


const db = mysql.createPool({
    host:"localhost",
    user:"root",
    password:"mysqlN7@",
    database:"carwash"
})

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));


app.get("/",(req,res)=>{
    const sqlInsert = "INSERT INTO Users(FirstName,LastName,City,Pincode,MobileNo) VALUES ('John' , 'Doe' , 'Jabalpur' , '487880' , '7788997979')";
    db.query(sqlInsert,(err,result)=>{
        console.log(err);
        console.log(result);
    })
    res.send("Hello Express");
})



app.listen(5000,() => {
    console.log("Server is Running on Port 5000")
})

