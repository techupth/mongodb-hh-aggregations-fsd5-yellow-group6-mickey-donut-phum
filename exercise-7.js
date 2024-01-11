// Paste the complete MQL here
// Ex.7
// ให้ Query หาเดือนที่มียอดขายรวมต่ำสุดในปี 2021
db.pizzaOrders.aggregate([
  {
    $group: {
      _id: { year: { $year: "$created_at" }, month: { $month: "$created_at" } },
      totalPrice: { $sum: "$total_price" },
    },
  },
  { $match: { "_id.year": 2021 } },
  { $sort: { totalPrice: 1 } },
  { $limit: 1 },
]);
