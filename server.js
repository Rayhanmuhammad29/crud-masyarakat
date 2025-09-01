const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public")); // supaya bisa akses index.html & form.html

// Koneksi ke MySQL
const db = mysql.createConnection({
  host: "localhost",
  user: "root",       // ganti sesuai user MySQL kamu
  password: "",       // ganti kalau ada password
  database: "crud_db"
});

db.connect((err) => {
  if (err) {
    console.error("Koneksi database gagal:", err);
    process.exit(1);
  }
  console.log("Terhubung ke MySQL ✅");
});

// ====== API CRUD ======

// CREATE - Simpan data masyarakat
app.post("/api/masyarakat", (req, res) => {
  const data = req.body;
  console.log("Data diterima:", data);

  const sql = `
    INSERT INTO masyarakat 
    (nik, nama, jenis_kelamin, tanggal_lahir, alamat, pekerjaan, no_hp, email) 
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `;
  const values = [
    data.nik,
    data.nama,
    data.jenis_kelamin,
    data.tanggal_lahir,
    data.alamat,
    data.pekerjaan,
    data.no_hp,
    data.email,
  ];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error("Error MySQL:", err);
      return res.status(500).json({ success: false, message: "Gagal menyimpan data!" });
    }
    res.json({ success: true, message: "Data berhasil disimpan!" });
  });
});

// READ - Ambil semua data
app.get("/api/masyarakat", (req, res) => {
  const sql = "SELECT * FROM masyarakat ORDER BY id DESC";
  db.query(sql, (err, results) => {
    if (err) {
      console.error("Error MySQL:", err);
      return res.status(500).json({ success: false, message: "Gagal mengambil data!" });
    }
    res.json(results);
  });
});

// UPDATE - Edit data berdasarkan ID
app.put("/api/masyarakat/:id", (req, res) => {
  const { id } = req.params;
  const data = req.body;

  const sql = `
    UPDATE masyarakat SET 
      nik=?, nama=?, jenis_kelamin=?, tanggal_lahir=?, alamat=?, pekerjaan=?, no_hp=?, email=?
    WHERE id=?
  `;
  const values = [
    data.nik,
    data.nama,
    data.jenis_kelamin,
    data.tanggal_lahir,
    data.alamat,
    data.pekerjaan,
    data.no_hp,
    data.email,
    id,
  ];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error("Error MySQL:", err);
      return res.status(500).json({ success: false, message: "Gagal mengupdate data!" });
    }
    res.json({ success: true, message: "Data berhasil diperbarui!" });
  });
});

// DELETE - Hapus data berdasarkan ID
app.delete("/api/masyarakat/:id", (req, res) => {
  const { id } = req.params;
  const sql = "DELETE FROM masyarakat WHERE id=?";
  db.query(sql, [id], (err, result) => {
    if (err) {
      console.error("Error MySQL:", err);
      return res.status(500).json({ success: false, message: "Gagal menghapus data!" });
    }
    res.json({ success: true, message: "Data berhasil dihapus!" });
  });
});

// Jalankan server
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
