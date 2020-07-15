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
    });
  } catch (err) {
    return res.status(400).send({
      message: err.message,
    });
  }
}

// function get detail by ID
const get_detail_by_id = async (req, res) => {
  try {
    // function dari sequelize books.findByPk(params)
    // adalah untuk mencari satu data berdasarkan PK ID
    const resp = await books.findByPk(req.params.id);
    return res.status(200).send({
      data: resp,
    });
  } catch (err) {
    return res.status(400).send({
      message: err.message,
    });
  }
}

const updated_by_id = async (req, res) => {
  try {
    const params = req.body;
    // sebelum melakukan update,
    // findByPk dahulu
    const db = await books.findByPk(req.params.id);
    // handling jika data tidak ditemukan di database
    if (!db) {
      return res.status(200).send({
        message: 'Data tidak ditemukan'
      });
    }
    // jika data ditemukan,
    // kita lalukan update lewat resp.set(params)
    db.set(params);

    // langkah selanjutnya adalah save (update)
    // di database
    db.save();

    // get data yang sudah di update
    db.get();

    // lalu di return ke API untuk ditampilkan
    return res.status(200).send({
      data: db,
    });
  } catch (err) {
    return res.status(400).send({
      message: err.message,
    });
  }
}

const delete_by_id = async (req, res) => {
  try {
    const db = await books.findByPk(req.params.id);
    if (!db) {
      return res.status(400).send({
        message: 'ID tidak ditemukan'
      });
    }
    // ini fungsi untuk delete data dari sequelize
    db.destroy();
    db.save();
    db.get();

    return res.status(200).send({
      data: db,
    });
  } catch (err) {
    return res.status(400).send({
      message: err.message,
    });
  }
}

const delete_bulk_by_judul = async (req, res) => {
  try {
    const params = req.body;
    const find = await books.destroy({
      where: params
    });
    return res.status(200).send({
      data: find
    });
  } catch (err) {
    return res.status(400).send({
      message: err.message,
    });
  }
}

module.exports = {
  getAll,
  createBook,
  get_detail_by_id,
  updated_by_id,
  delete_by_id,
  delete_bulk_by_judul
}