//BATTERY BY CHAT GPT
  (function() {
    let batteryLevel = document.getElementById("battery-level");
    let chargingStatus = document.getElementById("charging-status");

    navigator.getBattery()
      .then(battery => {
        if (battery) {
          function setStatus() {
            batteryLevel.innerHTML = Math.round(battery.level * 100) + "%";
            chargingStatus.innerHTML = battery.charging ? "⚡⚡" : "discharging";
            console.log("Set status " + batteryLevel.innerHTML + " " + chargingStatus.innerHTML);
          }

          setStatus();
          battery.addEventListener("levelchange", setStatus, false);
          battery.addEventListener("chargingchange", setStatus, false);
        } else {
          throw new Error('Battery API not supported on your device/computer');
        }
      })
      .catch(error => {
        // batterySupported.innerHTML = error.message;
      });
  })();





//UCAPAN WAKTU
let text_el = document.querySelector('h6#browser_info');
  let hSalam = document.querySelector('span#browser_sholat');
  setInterval(() => {
    const d = new Date();
    const jam = d.getHours().toString().padStart(2, '0');
    const menit = d.getMinutes().toString().padStart(2, '0');
    const detik = d.getSeconds().toString().padStart(2, '0');
    const ucapan = getGreeting(jam);

    hSalam.innerHTML = ucapan;
    text_el.innerHTML = `${jam}:${menit}:${detik}`;
  }, 250);

  function getGreeting(jam) {
    if (jam >= '04:00' && jam <= '06:00') {
      return 'Subuh!';
    } else if (jam >= '06:00' && jam <= '10:00') {
      return 'Selamat pagi kak, jangan lupa awali hari dengan secangkir kopi ☕ !';
    } else if (jam >= '10:00' && jam <= '14:00') {
      return 'Selamat Siang kak!';
    } else if (jam >= '14:00' && jam <= '17:00') {
      return 'Selamat Sorre kak!';
    } else if (jam >= '17:00' && jam <= '17:30') {
      return 'Petang!';
    } else if (jam >= '17:30' && jam <= '18:10') {
      return 'Maghrib!';
    } else {
      return 'Selamat Malam kak!';
    }
  }
  
  
  
  
  
//JAM, HARI, TANGGAL-BULAN-TAHUN BY ARDA
        // Array nama-nama hari
        var namaHari = ["| Minggu", "| Senin", "| Selasa", "| Rabu", "| Kamis", "| Jumat", "| Sabtu"];
        // Mendapatkan hari saat ini
        var hariSaatIni = new Date().getDay();
        // Menampilkan hari pada elemen dengan id "hari"
        document.getElementById("ThisDay").innerHTML = namaHari[hariSaatIni];
 
        // Mendapatkan tanggal saat ini
        var tanggalSaatIni = new Date();
        // Mendapatkan hari, bulan, dan tahun
        var hari = tanggalSaatIni.getDate();
        var bulan = tanggalSaatIni.getMonth() + 1; // Perhatikan: Januari dimulai dari indeks 0
        var tahun = tanggalSaatIni.getFullYear();
        // Format tanggal menjadi "dd/mm/yyyy"
        var tanggalFormat = ("0" + hari).slice(-2) + "/" + ("0" + bulan).slice(-2) + "/" + tahun;
        // Menampilkan tanggal pada elemen dengan id "tanggal"
        document.getElementById("clockstyle4").innerHTML = tanggalFormat;



//FULL SCREEN BY ARDA
    const fullScreenElement = document.getElementById('fullScreenElement');
    const fullscreenButton = document.getElementById('fullscreenButton');

    fullscreenButton.addEventListener('click', () => {
      if (fullScreenElement.requestFullscreen) {
        fullScreenElement.requestFullscreen();
      } else if (fullScreenElement.mozRequestFullScreen) { /* Firefox */
        fullScreenElement.mozRequestFullScreen();
      } else if (fullScreenElement.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
        fullScreenElement.webkitRequestFullscreen();
      } else if (fullScreenElement.msRequestFullscreen) { /* IE/Edge */
        fullScreenElement.msRequestFullscreen();
      }
    });