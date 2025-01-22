// Check the current date
const currentDate = new Date();
const accessDate = new Date(2025, 9, 7); // October is month 9 (0-indexed)

if (currentDate < accessDate) {
  // Hide the main content
  document.body.innerHTML = `
      <div style="text-align: center; padding: 50px; font-family: Arial, sans-serif; color: white; background: black; height: 100vh; width: 100vw; display: flex; flex-direction: column; justify-content: center; align-items: center;">
        <h1>Akses Belum Dibuka</h1>
        <p>Halaman ini akan tersedia setelah 7 Oktober 2025.</p>
      </div>`;
}
