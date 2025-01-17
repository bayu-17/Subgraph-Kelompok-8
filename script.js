function showSection(sectionId) {
    // Sembunyikan semua section
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.display = 'none';
    });
    // Tampilkan section yang dipilih
    document.getElementById(sectionId).style.display = 'block';
}

function calculate() {
    const nilai1 = parseFloat(document.getElementById('nilai1').value);
    const nilai2 = parseFloat(document.getElementById('nilai2').value);
    const hasil = nilai1 + nilai2; // Contoh operasi
    document.getElementById('hasil').innerText = 'Hasil: ' + hasil;
}

var swiper = new Swiper(".mySwiper", {
    effect: "cube",
    grabCursor: true,
    cubeEffect: {
      shadow: true,
      slideShadows: true,
      shadowOffset: 20,
      shadowScale: 0.94,
    },
    loop:true,
    pagination: {
      el: ".swiper-pagination",
      clickable:true,
    },
  });

  