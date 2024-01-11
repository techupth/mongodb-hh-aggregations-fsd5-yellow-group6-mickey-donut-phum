// Paste the complete MQL here
// Ex.5
// ให้เขียน Query หายอดขายทั้งหมดในแต่ละเดือนและปี
// โดยที่เรียงจากปีและเดือนล่าสุดไปเก่าที่สุด
db.pizzaOrders.aggregate([
  {
    $group: {
      _id: { year: "$created_at", month: "$created_at" },
      totalPrice: { $sum: "$total_price" },
    },
  },
  { $sort: { "_id.year": -1, "_id.month": -1 } },
]);
