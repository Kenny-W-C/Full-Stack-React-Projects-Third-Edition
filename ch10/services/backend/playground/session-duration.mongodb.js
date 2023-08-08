/* global use, db */
// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use('ch10')

// Search for documents in the current collection.
db.getCollection('events').aggregate([
  {
    $project: {
      session: '$session',
      startDate: {
        $cond: [{ $eq: ['$action', 'startView'] }, '$date', undefined],
      },
      endDate: { $cond: [{ $eq: ['$action', 'endView'] }, '$date', undefined] },
    },
  },
  {
    $group: {
      _id: '$session',
      startDate: { $min: '$startDate' },
      endDate: { $max: '$endDate' },
    },
  },
  {
    $project: {
      session: '$_id',
      duration: { $subtract: ['$endDate', '$startDate'] },
    },
  },
])
