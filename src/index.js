// yarn init => tạo file package.json : quản lý tất cả các thư viện thông qua định dạng json

// yarn add express => cài đặt framework express 
// yarn install => cài đặt thư viện và tạo thư mục node_modules cho dự án 

// tạo server BE bằng express


// khởi động server => node index.js

// yarn start => cấu hình ở file package.json

// yarn add nodemon => auto reset server : dùng cho code localhost

// tạo API
// Url => path , Method 

// /demo , GET
// app.get("/demo/:id", (req, res) => {

//     // 3 cách
//     // - lấy từ url: 
//     //    + query params => /:[tên biến]
//     // localhost:8080/demo/hello node
//     let { id } = req.params; // => destructering

//     //    + query string => ?[tên biến] = [data] & [tên biến thứ 2] = [data 2]
//     // localhost:8080/demo/1 ?id2=123
//     let { id2 } = req.query;

//     // - lấy từ body: json

//     let { hoTen, email, phone, diaChi } = req.body;



//     res.status(500).send(diaChi); // trả tất cả định dạng trừ number cho FE

// }) // tham số Rest params

// StatusCode


// yarn add mysql2

// kết nối CSDL => 5 thông tin login vào hệ CSDL
// const mysql2 = require('mysql2');
// const connect = mysql2.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "1234",
//     port: 3306,
//     database: "db_food"
// })
// lấy danh sách user







const express = require('express'); // import thư viện
const app = express();
// middleware
// chuyển dữ liệu sang dạng json để req.body có thể hiểu
app.use(express.json());

// cho phép FE truy cập vào API của source BE
const cors = require('cors');
app.use(cors());

// khởi tạo server với port bất kỳ
app.listen(8080);


const {getUser} = require('./Controllers/userController');

//const userRouter = require('./Routers/userRouter');

const rootRouter = require('./Routers/rootRouter');


app.use("/api", rootRouter)



// ORM: sequelize => findAll, prisma => findMany

