// script.js
const ocean = document.getElementById('ocean-inner');

// 1. Fungsi Membuat Ikan Berwarna Secara Acak
function spawnEcosystem() {
    const fishEmojis = ['🐠', '🐟', '🐡', '🦈', '🐬', '🐙'];
    const corals = ['🪸', '🌿', '🐚', '🦀'];

    // Tambah Terumbu Karang di Dasar
    for (let i = 0; i < 50; i++) {
        let coral = document.createElement('div');
        coral.className = 'coral-item';
        coral.style.position = 'absolute';
        coral.style.left = Math.random() * 3000 + 'px';
        coral.style.top = (2000 + Math.random() * 900) + 'px';
        coral.style.fontSize = (30 + Math.random() * 50) + 'px';
        coral.innerText = corals[Math.floor(Math.random() * corals.length)];
        ocean.appendChild(coral);
    }

    // Tambah Ikan yang Berenang
    setInterval(() => {
        let fish = document.createElement('div');
        fish.innerText = fishEmojis[Math.floor(Math.random() * fishEmojis.length)];
        fish.style.position = 'absolute';
        fish.style.fontSize = '25px';
        fish.style.left = '-50px';
        fish.style.top = Math.random() * 3000 + 'px';
        
        ocean.appendChild(fish);

        // Animasi Ikan Menyebrang
        gsap.to(fish, {
            x: 3100,
            y: "+=100",
            duration: 10 + Math.random() * 20,
            ease: "none",
            onComplete: () => fish.remove()
        });
    }, 2000);
}

// 2. Logika Animasi Orang (Karakter Berwarna)
function characterThrowAnimation() {
    const player = document.getElementById('player'); // Pastikan ID ini ada di HTML
    const hand = document.getElementById('arm-hand');

    // Timeline GSAP untuk pergerakan halus
    const tl = gsap.timeline();

    tl.to(player, { left: "45%", duration: 2, ease: "power1.inOut" })
      .to(hand, { rotation: -140, duration: 0.4, ease: "back.out" })
      .add(() => {
          // Fungsi lempar botol dipanggil di sini
          console.log("Botol Dilepas!");
      })
      .to(hand, { rotation: 0, duration: 0.4 })
      .to(player, { left: "110%", duration: 2, delay: 0.5 });
}
