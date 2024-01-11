// Paste the complete MQL here
// Ex.3
// ให้เขียน Query กรอง Document ที่ได้จาก **Exercise #2**
// ให้แสดงผลแค่ข้อมูลยอดขายทั้งหมดและจำนวนของ Pizza ใน Size `medium`
db.pizzaOrders.aggregate([
  {
    $group: {
      _id: "$size",
      totalPrice: { $sum: "$total_price" },
      totalQuantity: { $sum: "$quantity" },
    },
  },
  { $match: { _id: "medium" } },
  { $sort: { totalPrice: -1 } },
]);
