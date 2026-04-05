const mongoose = require('mongoose');
const Record = require('../src/models/Record');

mongoose
  .connect('mongodb://localhost:27017/financeDB')
  .then(() => console.log('✅ DB Connected'));

const records = [
  {
    amount: 5000,
    type: 'income',
    category: 'salary',
    notes: 'Monthly salary',
    date: new Date(),
  },
  {
    amount: 200,
    type: 'expense',
    category: 'food',
    notes: 'Lunch',
    date: new Date(),
  },
  {
    amount: 1500,
    type: 'income',
    category: 'freelance',
    notes: 'Project payment',
    date: new Date(),
  },
  {
    amount: 300,
    type: 'expense',
    category: 'travel',
    notes: 'Bus fare',
    date: new Date(),
  },
  {
    amount: 700,
    type: 'expense',
    category: 'shopping',
    notes: 'Clothes',
    date: new Date(),
  },
  {
    amount: 8000,
    type: 'income',
    category: 'salary',
    notes: 'Bonus',
    date: new Date(),
  },
  {
    amount: 1200,
    type: 'expense',
    category: 'rent',
    notes: 'Room rent',
    date: new Date(),
  },
  {
    amount: 400,
    type: 'expense',
    category: 'food',
    notes: 'Dinner',
    date: new Date(),
  },
  {
    amount: 2500,
    type: 'income',
    category: 'freelance',
    notes: 'Client work',
    date: new Date(),
  },
  {
    amount: 600,
    type: 'expense',
    category: 'shopping',
    notes: 'Groceries',
    date: new Date(),
  },

  {
    amount: 4500,
    type: 'income',
    category: 'salary',
    notes: 'Partial salary',
    date: new Date(),
  },
  {
    amount: 300,
    type: 'expense',
    category: 'food',
    notes: 'Snacks',
    date: new Date(),
  },
  {
    amount: 900,
    type: 'expense',
    category: 'travel',
    notes: 'Train ticket',
    date: new Date(),
  },
  {
    amount: 10000,
    type: 'income',
    category: 'salary',
    notes: 'Full salary',
    date: new Date(),
  },
  {
    amount: 350,
    type: 'expense',
    category: 'food',
    notes: 'Lunch',
    date: new Date(),
  },
  {
    amount: 2000,
    type: 'income',
    category: 'freelance',
    notes: 'Side project',
    date: new Date(),
  },
  {
    amount: 1500,
    type: 'expense',
    category: 'rent',
    notes: 'Apartment rent',
    date: new Date(),
  },
  {
    amount: 700,
    type: 'expense',
    category: 'shopping',
    notes: 'Accessories',
    date: new Date(),
  },
  {
    amount: 500,
    type: 'income',
    category: 'other',
    notes: 'Gift',
    date: new Date(),
  },
  {
    amount: 300,
    type: 'expense',
    category: 'food',
    notes: 'Dinner',
    date: new Date(),
  },

  {
    amount: 8000,
    type: 'income',
    category: 'salary',
    notes: 'Salary',
    date: new Date(),
  },
  {
    amount: 600,
    type: 'expense',
    category: 'travel',
    notes: 'Taxi',
    date: new Date(),
  },
  {
    amount: 200,
    type: 'expense',
    category: 'food',
    notes: 'Tea',
    date: new Date(),
  },
  {
    amount: 1200,
    type: 'income',
    category: 'freelance',
    notes: 'Quick task',
    date: new Date(),
  },
  {
    amount: 900,
    type: 'expense',
    category: 'shopping',
    notes: 'Shoes',
    date: new Date(),
  },
  {
    amount: 1500,
    type: 'income',
    category: 'other',
    notes: 'Refund',
    date: new Date(),
  },
  {
    amount: 700,
    type: 'expense',
    category: 'food',
    notes: 'Dinner',
    date: new Date(),
  },
  {
    amount: 4000,
    type: 'income',
    category: 'salary',
    notes: 'Advance salary',
    date: new Date(),
  },
  {
    amount: 1000,
    type: 'expense',
    category: 'rent',
    notes: 'Partial rent',
    date: new Date(),
  },
  {
    amount: 300,
    type: 'expense',
    category: 'travel',
    notes: 'Fuel',
    date: new Date(),
  },

  {
    amount: 2000,
    type: 'income',
    category: 'freelance',
    notes: 'Work',
    date: new Date(),
  },
  {
    amount: 450,
    type: 'expense',
    category: 'food',
    notes: 'Lunch',
    date: new Date(),
  },
  {
    amount: 7000,
    type: 'income',
    category: 'salary',
    notes: 'Salary',
    date: new Date(),
  },
  {
    amount: 800,
    type: 'expense',
    category: 'shopping',
    notes: 'Clothes',
    date: new Date(),
  },
  {
    amount: 600,
    type: 'expense',
    category: 'travel',
    notes: 'Uber',
    date: new Date(),
  },
  {
    amount: 900,
    type: 'income',
    category: 'other',
    notes: 'Gift',
    date: new Date(),
  },
  {
    amount: 500,
    type: 'expense',
    category: 'food',
    notes: 'Dinner',
    date: new Date(),
  },
  {
    amount: 3000,
    type: 'income',
    category: 'freelance',
    notes: 'Project',
    date: new Date(),
  },
  {
    amount: 1000,
    type: 'expense',
    category: 'rent',
    notes: 'Rent',
    date: new Date(),
  },
  {
    amount: 400,
    type: 'expense',
    category: 'shopping',
    notes: 'Items',
    date: new Date(),
  },
];

const insertRecords = async () => {
  try {
    await Record.deleteMany(); // optional clean
    await Record.insertMany(records);

    console.log('✅ 40 records inserted successfully!');
    mongoose.connection.close();
  } catch (err) {
    console.log('❌ Error:', err);
  }
};

insertRecords();
