/**
 * ================================================
 * JAVASCRIPT UNTUK WEBSITE SERVICE MOBIL PANGGILAN
 * File: script.js
 * ================================================
 */

// ========== 1. IMAGE SLIDER VERTIKAL ==========
// Slider 1: dari atas ke bawah
// Slider 2: dari bawah ke atas

function initVerticalSlider(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  
  const slides = container.querySelectorAll('.slide-img');
  if (slides.length === 0) return;
  
  // Aktifkan gambar pertama
  slides.forEach((img, idx) => {
    if (idx === 0) {
      img.classList.add('active');
    } else {
      img.classList.remove('active');
    }
  });
  
  let currentIndex = 0;
  
  function showSlide(index) {
    if (index >= slides.length) index = 0;
    if (index < 0) index = slides.length - 1;
    
    slides.forEach(slide => slide.classList.remove('active'));
    slides[index].classList.add('active');
    currentIndex = index;
  }
  
  function nextSlide() {
    let newIndex = currentIndex + 1;
    if (newIndex >= slides.length) newIndex = 0;
    showSlide(newIndex);
  }
  
  // Ganti gambar setiap 3 detik
  setInterval(nextSlide, 3000);
}

// Jalankan slider saat halaman siap
document.addEventListener('DOMContentLoaded', function() {
  initVerticalSlider('sliderDown');  // Atas ke bawah
  initVerticalSlider('sliderUp');    // Bawah ke atas
});

// ========== 2. TOMBOL PANGGIL SERVICE ==========
const callBtn = document.getElementById('callBtn');
if (callBtn) {
  callBtn.addEventListener('click', function() {
    alert("📞 Layanan darurat 24 jam: +62 812-3456-7890\n\nTim kami akan segera datang ke lokasi Anda!");
  });
}

// ========== 3. TOMBOL LIHAT SEMUA LAYANAN ==========
const viewAllBtn = document.getElementById('viewAllBtn');
if (viewAllBtn) {
  viewAllBtn.addEventListener('click', function() {
    alert("🔧 Layanan Lengkap Auto Rescue:\n\n• Ganti Oli Mesin & Transmisi\n• Jump Start Aki (24 jam)\n• Diagnosa Mesin Elektronik\n• Tambal / Ganti Ban Bocor\n• Service AC Mobil\n• Derekan Darurat\n\nHubungi WhatsApp untuk booking!");
  });
}

// ========== 4. NAMA KAMU (bisa diubah di HTML juga) ==========
// Tidak perlu edit JS, cukup ganti di HTML bagian <span id="namaKamu">

// ========== 5. PEMBERITAHUAN LETAK LINK WA ==========
console.log("==========================================");
console.log("📍 CARA LETAKKAN LINK WA:");
console.log("Buka file index.html, cari baris:");
console.log("<a href='https://wa.me/6281234567890?...' class='wa-float'>");
console.log("Ganti angka 6281234567890 dengan nomor WA Anda.");
console.log("Contoh: https://wa.me/6282112345678?text=Halo");
console.log("==========================================");