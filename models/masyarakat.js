'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Masyarakat extends Model {
    static associate(models) {
      // jika ada relasi, taruh di sini
    }
  }

  Masyarakat.init({
  nama: DataTypes.STRING,
  alamat: DataTypes.STRING,
  umur: DataTypes.INTEGER,
  nik: DataTypes.STRING,
  jenis_kelamin: DataTypes.STRING,
  tanggal_lahir: DataTypes.DATEONLY,
  pekerjaan: DataTypes.STRING,
  no_hp: DataTypes.STRING,
  email: DataTypes.STRING
}, {
  sequelize,
  modelName: 'Masyarakat',
  tableName: 'masyarakat',
  timestamps: false
});


  return Masyarakat;
};
