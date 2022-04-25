const express = require('express') // โหลด module express
const app = express() // สร้าง Instance express
app.get('/', (req, res) => res.send('Arnon muangsan')) // กำหนด path url ในการเข้าเว็บ
app.listen(5000, () => console.log('Example app listening on port 5000!')) // Start Server ที่ localhost Port 5000