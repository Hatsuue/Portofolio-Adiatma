const clockEl = document.getElementById('clock');

// Animasi saat muncul
anime({
  targets: clockEl,
  opacity: [0, 1],
  translateY: [-30, 0],
  duration: 1000,
  easing: 'easeOutExpo'
});

function updateClock() {
  const now = new Date();

  const hari = ['Minggu','Senin','Selasa','Rabu','Kamis','Jumat','Sabtu'];
  const bulan = ['Januari','Februari','Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','November','Desember'];

  const hariIni = hari[now.getDay()];
  const tanggal = now.getDate();
  const namaBulan = bulan[now.getMonth()];
  const tahun = now.getFullYear();

  const jam = String(now.getHours()).padStart(2, '0');
  const menit = String(now.getMinutes()).padStart(2, '0');
  const detik = String(now.getSeconds()).padStart(2, '0');

  clockEl.textContent = `${hariIni}, ${tanggal} ${namaBulan} ${tahun} | ${jam}:${menit}:${detik}`;
}

updateClock();
setInterval(updateClock, 1000);

