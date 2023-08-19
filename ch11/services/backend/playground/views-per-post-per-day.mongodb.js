/* global use, db */
// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use('ch10')

// Search for documents in the current collection.
db.getCollection('events').aggregate([
  {
    $match: { action: 'startView' },
  },
  {
    $project: {
      post: '$post',
      day: { $dateTrunc: { date: '$date', unit: 'day' } },
    },
  },
  {
    $group: {
      _id: { post: '$post', day: '$day' },
      views: { $count: {} },
    },
  },
])
