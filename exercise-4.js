// Paste the complete MQL here
db.pizzaOrders.aggregate([
  {
    $match: { created_at: { $exists: true, $type: "date" } },
  },
  {
    $group: {
      _id: { $year: "$created_at" },
      total_paid: { $sum: "$total_price" },
    },
  },
  { $sort: { year: -1 } },
]);
