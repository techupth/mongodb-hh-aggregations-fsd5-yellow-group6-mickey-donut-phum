// Paste the complete MQL here
// Ex.4
// ให้เขียน Query หายอดขายทั้งหมดในแต่ละปี
// โดยที่เรียงจากปีล่าสุดไปเก่าที่สุด
db.pizzaOrders.aggregate([
  {
    $group: {
      _id: { $year: "$created_at" },
      totalPrice: { $sum: "$total_price" },
    },
  },
  { $sort: { _id: -1 } },
]);
