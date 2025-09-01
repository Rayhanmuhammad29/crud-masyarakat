'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Masyarakat', [
      {
        nik: '3171010100000001',
        nama: 'Budi Santoso',
        jenis_kelamin: 'Laki-laki',
        tanggal_lahir: new Date('1998-05-10'),
        alamat: 'Jl. Merdeka No. 1, Jakarta',
        pekerjaan: 'Karyawan Swasta',
        no_hp: '081234567890',
        email: 'budi@example.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nik: '3204010200000002',
        nama: 'Siti Aminah',
        jenis_kelamin: 'Perempuan',
        tanggal_lahir: new Date('1995-08-21'),
        alamat: 'Jl. Asia Afrika No. 10, Bandung',
        pekerjaan: 'Guru',
        no_hp: '082345678901',
        email: 'siti@example.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nik: '3512010300000003',
        nama: 'Agus Pratama',
        jenis_kelamin: 'Laki-laki',
        tanggal_lahir: new Date('1997-02-14'),
        alamat: 'Jl. Pahlawan No. 5, Surabaya',
        pekerjaan: 'Wiraswasta',
        no_hp: '083456789012',
        email: 'agus@example.com',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Masyarakat', null, {});
  }
};
