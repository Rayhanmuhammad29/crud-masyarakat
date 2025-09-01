'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('masyarakat', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      nik: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      nama: {
        type: Sequelize.STRING,
        allowNull: false
      },
      jenis_kelamin: {
        type: Sequelize.STRING,
        allowNull: false
      },
      tanggal_lahir: {
        type: Sequelize.DATEONLY,
        allowNull: false
      },
      alamat: {
        type: Sequelize.STRING
      },
      pekerjaan: {
        type: Sequelize.STRING
      },
      no_hp: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('masyarakat');
  }
};
