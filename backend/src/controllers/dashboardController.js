const Record = require('../models/Record');

// ✅ Dashboard Summary
exports.getDashboard = async (req, res) => {
  try {
    const records = await Record.find();

    const totalIncome = records
      .filter((r) => r.type === 'income')
      .reduce((sum, r) => sum + r.amount, 0);

    const totalExpense = records
      .filter((r) => r.type === 'expense')
      .reduce((sum, r) => sum + r.amount, 0);

    const netBalance = totalIncome - totalExpense;

    res.json({
      totalIncome,
      totalExpense,
      netBalance,
      totalRecords: records.length,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getCategoryBreakdown = async (req, res) => {
  try {
    const records = await Record.find();

    const breakdown = {};

    records.forEach((r) => {
      if (!breakdown[r.category]) {
        breakdown[r.category] = 0;
      }
      breakdown[r.category] += r.amount;
    });

    res.json(breakdown);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getMonthlyTrends = async (req, res) => {
  try {
    const records = await Record.find();

    const monthly = {};

    records.forEach((r) => {
      const month = new Date(r.date).toLocaleString('default', {
        month: 'short',
      });

      if (!monthly[month]) {
        monthly[month] = 0;
      }

      monthly[month] += r.amount;
    });

    res.json(monthly);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getRecentTransactions = async (req, res) => {
  try {
    const records = await Record.find().sort({ createdAt: -1 }).limit(5);

    res.json(records);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getIncomeVsExpense = async (req, res) => {
  try {
    const records = await Record.find();

    let income = 0;
    let expense = 0;

    records.forEach((r) => {
      if (r.type === 'income') income += r.amount;
      else expense += r.amount;
    });

    res.json({ income, expense });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
