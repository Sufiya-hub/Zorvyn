const Record = require('../models/Record');

exports.createRecord = async (req, res) => {
  try {
    const record = await Record.create({
      ...req.body,
      createdBy: req.user.id,
    });

    res.status(201).json(record);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getAllRecords = async (req, res) => {
  try {
    const records = await Record.find().populate(
      'createdBy',
      'name email role'
    );

    res.json(records);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateRecord = async (req, res) => {
  try {
    const record = await Record.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!record) {
      return res.status(404).json({ message: 'Record not found' });
    }

    res.json(record);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deleteRecord = async (req, res) => {
  try {
    const record = await Record.findByIdAndDelete(req.params.id);

    if (!record) {
      return res.status(404).json({ message: 'Record not found' });
    }

    res.json({ message: 'Record deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
