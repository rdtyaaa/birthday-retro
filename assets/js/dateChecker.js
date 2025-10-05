// Tanggal akses diset di satu variabel
const accessDate = new Date("2025-10-07"); // format YYYY-MM-DD

// Cek tanggal sekarang
const currentDate = new Date();

// Bandingkan
if (currentDate < accessDate) {
  // Sembunyikan konten utama
  document.body.innerHTML = `
    <div style="
      text-align: center;
      padding: 50px;
      font-family: Arial, sans-serif;
      color: white;
      background: black;
      height: 100vh;
      width: 100vw;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;">
      <h1>Akses Belum Dibuka</h1>
      <p>Halaman ini akan tersedia setelah ${accessDate.toLocaleDateString(
        "id-ID",
        {
          day: "numeric",
          month: "long",
          year: "numeric",
        }
      )}.</p>
    </div>`;
}
