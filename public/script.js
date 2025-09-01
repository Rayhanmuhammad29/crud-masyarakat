const form = document.getElementById('formMasyarakat');
const tableBody = document.getElementById('tableBody');
const idInput = document.getElementById('id');
const namaInput = document.getElementById('nama');
const alamatInput = document.getElementById('alamat');
const umurInput = document.getElementById('umur');

// Load data
async function loadData() {
  const res = await fetch('/api/masyarakat');
  const data = await res.json();
  tableBody.innerHTML = '';

  data.forEach(item => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${item.nama}</td>
      <td>${item.alamat}</td>
      <td>${item.umur}</td>
      <td>
        <button class="action-btn edit-btn" onclick="editData(${item.id}, '${item.nama}', '${item.alamat}', ${item.umur})">Edit</button>
        <button class="action-btn delete-btn" onclick="deleteData(${item.id})">Hapus</button>
      </td>
    `;
    tableBody.appendChild(tr);
  });
}

// Tambah / Update data
form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const id = idInput.value;
  const nama = namaInput.value;
  const alamat = alamatInput.value;
  const umur = parseInt(umurInput.value);

  if (id) {
    // Update
    await fetch(`/api/masyarakat/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nama, alamat, umur })
    });
  } else {
    // Tambah
    await fetch('/api/masyarakat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nama, alamat, umur })
    });
  }

  form.reset();
  loadData();
});

// Edit data
function editData(id, nama, alamat, umur) {
  idInput.value = id;
  namaInput.value = nama;
  alamatInput.value = alamat;
  umurInput.value = umur;
}

// Hapus data
async function deleteData(id) {
  if (confirm('Yakin ingin menghapus data ini?')) {
    await fetch(`/api/masyarakat/${id}`, { method: 'DELETE' });
    loadData();
  }
}

// Load pertama kali
loadData();
