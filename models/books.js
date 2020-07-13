const Sequelize = require('sequelize');
const connection = require('../config/sequelize');

class Model extends Sequelize.Model {};

// init model (indexData, option)
Model.init(
  {
    id: {
      type: Sequelize.INTEGER, // inisialisasi sebagai integer
      primaryKey: true, // inisialisasi sebagai primary key (PK)
      autoIncrement: true // inisialiasi agar auto increment
    },
    // jika tidak ada tambahan param,
    // bisa langsung define typedata dari column
    judul: Sequelize.STRING(128),
    deskripsi: Sequelize.STRING(256),
    harga: Sequelize.INTEGER(11),
    author: Sequelize.STRING(256),
    isbn_no: Sequelize.STRING(128),
    created_at: Sequelize.DATE, // inisialisasi database DATETIME
    updated_at: Sequelize.DATE,
    deleted_at: Sequelize.DATE, // ini flagging delete

  }, {
    createdAt: 'created_at', // mapping column sequelize
    deletedAt: 'deleted_at', // mapping columnn sequelize
    updatedAt: 'updated_at',
    freezeTableName: true, // freeze table name
    timestamps: true, // option untuk timestamp (created_at, updated_at, deleted_at)
    paranoid: true, // option untuk paranoid
    underscored: true,
    sequelize: connection,
    modelName: 'books',
    tableName: 'books'
  }
);

module.exports = Model;