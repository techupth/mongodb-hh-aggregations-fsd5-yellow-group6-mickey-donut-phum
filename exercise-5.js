// Paste the complete MQL here
db.pizzaOrders.aggregate([
  {
    $match: { created_at: { $exists: true, $type: "date" } },
  },
  {
    $group: {
      _id: {
        month: { $month: "$created_at" },
        year: { $year: "$created_at" },
      },
      total_sales: { $sum: "$total_price" },
    },
  },
  {
    $sort: {
      "_id.year": -1,
      "_id.month": -1,
    },
  },
]);