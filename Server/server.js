const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const cors = require('cors');

// Tạo ứng dụng Express
const app = express();
app.use(bodyParser.json());
app.use(cors());

// Cấu hình kết nối với SQL Server
const dbConfig = {
    host: '127.0.0.1',      // Địa chỉ máy chủ MySQL
    user: 'root',           // Tên người dùng MySQL
    password: 'Mysqlkhai89@',           // Mật khẩu MySQL
    database: 'QLTrasua',
};
// Kết nối với SQL Server
const connection = mysql.createConnection(dbConfig);

// Kiểm tra kết nối
connection.connect(err => {
    if (err) {
        console.error('Error connecting to MySQL:', err.message);
        return;
    }
    console.log('Connected to MySQL database!');
});

// API: Lấy danh sách dữ liệu từ bảng `users`
app.get('/trasua', (req, res) => {
    const query = 'SELECT * FROM trasua'; // Thay `users` bằng tên bảng của bạn
    connection.query(query, (err, results) => {
        if (err) {
            return res.status(500).send(err.message);
        }
        res.status(200).json(results);
    });
});

// API: Thêm dữ liệu vào bảng `users`
app.post('/trasua', (req, res) => {
    const { name, email } = req.body;
    if (!name || !email) {
        return res.status(400).send('Name and Email are required.');
    }
    const query = 'INSERT INTO trasua (name, email) VALUES (?, ?)';
    connection.query(query, [name, email], (err, result) => {
        if (err) {
            return res.status(500).send(err.message);
        }
        res.status(201).send('User added successfully!');
    });
});

// API: Xóa dữ liệu từ bảng `users`
app.delete('/users/:id', (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM users WHERE id = ?';
    connection.query(query, [id], (err, result) => {
        if (err) {
            return res.status(500).send(err.message);
        }
        res.status(200).send('User deleted successfully!');
    });
});

// Chạy server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});