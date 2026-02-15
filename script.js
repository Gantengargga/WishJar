// script.js
const ocean = document.getElementById('ocean-inner');

// 1. GENERATE IKAN DENGAN GERAKAN NATURAL
function spawnRealFish() {
    const fishAssets = [
        'https://cdn-icons-png.flaticon.com/512/2316/2316688.png', // Ikan 1
        'https://cdn-icons-png.flaticon.com/512/2205/2205021.png', // Ikan 2
        'https://cdn-icons-png.flaticon.com/512/3063/3063811.png'  // Ikan 3
    ];

    setInterval(() => {
        const fish = document.createElement('img');
        fish.src = fishAssets[Math.floor(Math.random() * fishAssets.length)];
        fish.style.position = 'absolute';
        fish.style.width = (30 + Math.random() * 40) + 'px';
        fish.style.left = '-100px';
        fish.style.top = Math.random() * 2000 + 'px';
        fish.style.opacity = 0.8;
        ocean.appendChild(fish);

        // Gerakan Zig-zag Natural
        gsap.to(fish, {
            x: 3200,
            y: `+=${Math.random() * 200 - 100}`,
            duration: 15 + Math.random() * 10,
            ease: "sine.inOut",
            onComplete: () => fish.remove()
        });
    }, 3000);
}

// 2. ANIMASI KARAKTER BERWARNA (Melempar)
function triggerThrow() {
    const char = document.getElementById('player');
    const arm = document.getElementById('arm');
    
    const tl = gsap.timeline();
    
    // Jalan santai ke tepi
    tl.to(char, { left: "45%", duration: 2, ease: "power1.inOut" })
      // Ayunan badan sedikit ke belakang (ancang-ancang)
      .to(char, { rotation: -5, duration: 0.3 })
      // Lemparan kuat
      .to(arm, { rotation: -150, duration: 0.4, ease: "back.out(2)" })
      .add(() => {
          createBottlePhysics(); // Panggil fungsi lempar fisik
      })
      .to(arm, { rotation: 0, duration: 0.6 })
      .to(char, { left: "120%", duration: 2, delay: 1 });
}
