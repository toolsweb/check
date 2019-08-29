const seeder = require('mongoose-seed');

// Data array containing seed data - documents organized by Model
var data = [
  {
    model: 'User',
    documents: [
      {
        login: 'tutu',
        email: 'tutu@gmail.com'
      },
      {
        login: 'titi',
        email: 'titi@gmail.com'
      },
    ]
  }
];
module.exports = function() {
  // Connect to MongoDB via Mongoose
  seeder.connect('mongodb://localhost/mean', function() {
    // Load Mongoose models
    seeder.loadModels(['./models/User.js']);

    // Clear specified collections
    seeder.clearModels(['User'], function() {
      // Callback to populate DB once collections have been cleared
      seeder.populateModels(data, function() {
        seeder.disconnect();
      });
    });
  });
};