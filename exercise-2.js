// Paste the complete MQL here
// Ex.2
// ให้เขียน Query โดยมีรายละเอียดดังนี้
// หายอดขายทั้งหมดและจำนวนของ Pizza ในแต่ละ Size
// โดยที่ให้เรียงผลลัพธ์ตามยอดขายที่มากที่สุด
db.pizzaOrders.aggregate([
  {
    $group: {
      _id: "$size",
      totalPrice: { $sum: "$total_price" },
      totalQuantity: { $sum: "$quantity" },
    },
  },
  { $sort: { totalPrice: -1 } },
]);
