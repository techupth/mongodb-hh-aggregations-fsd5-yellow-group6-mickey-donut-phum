// Ex.1
// ให้ใช้ Repository อันเดิมจาก Hack Hours ในหัวข้อ Aggregation
// ตรวจสอบระยะเวลาการทำงานของ Query ด้วย `executionStats`
// ให้ Query ข้อมูล Pizza ที่มี `size` เป็น `medium`
// โดยให้ตรวจสอบ Query ดูว่าใช้เวลาในการ Execute ตัว Query เท่าไหร่ผ่านการใช้ `executionStats`
db.pizzaOrders.find({ size: "medium" }).explain("executionStats");

// พัฒนาประสิทธิภาพของการ Query ด้วยการ Indexing
// ให้ลองสร้าง Index ใน Collection `pizzaOrders` ที่ Field `size` ของ Document
// แล้วให้ Query ข้อมูล Pizza ที่มี `size` เป็น `medium` อีกครั้ง
// แล้วตรวจสอบ Query ดูว่าใช้เวลาในการ Execute ตัว Query เท่าไหร่ผ่านการใช้ `executionStats`
db.pizzaOrders.createIndex({ size: 1 });
db.pizzaOrders.find({ size: "medium" }).explain("executionStats");
