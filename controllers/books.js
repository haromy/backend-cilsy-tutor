const {
  books
} = require('../models');

const getAll = async (req, res) => {
  try {
    // ini untuk get all books dari database
    const get = await books.findAll();
    return res.status(200).send({
      data: get,
    })
  } catch (err) {
    return res.status(400).send({
      messsage: err.message,
    })
  }
}

const createBook = async (req, res) => {
  try {
    // capture body dari FE
    const params = req.body;

    // ini untuk insert record ke dalam database
    const resp = await books.create(params);
    
    return res.status(200).send({
      data:resp,
    })
  } catch (err) {
    return res.status(400).send({
      message: err.message,
    })
  }
}

module.exports = {
  getAll,
  createBook
}