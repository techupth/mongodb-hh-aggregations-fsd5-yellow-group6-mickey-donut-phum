// Paste the complete MQL here
// Ex.6
// ให้ Query หายอดขายทั้งหมดในเดือน 7 ของปี 2021
db.pizzaOrders.aggregate([
  {
    $group: {
      _id: { year: { $year: "$created_at" }, month: { $month: "$created_at" } },
      totalPrice: { $sum: "$total_price" },
    },
  },
  { $match: { "_id.year": 2021, "_id.month": 7 } },
]);
