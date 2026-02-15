function switchView(idx) {
    document.getElementById('viewport').style.transform = `translateY(-${idx * 100}vh)`;
    if(idx === 1) buildOcean();
}

function startAction() {
    const player = document.getElementById('player');
    const arm = document.getElementById('arm');
    
    gsap.to(player, { left: "45%", duration: 2, onComplete: () => {
        gsap.to(arm, { rotation: -130, duration: 0.5, onComplete: () => {
            alert("Botol Terlempar!");
            gsap.to(player, { left: "120%", duration: 2 });
            setTimeout(() => switchView(1), 1000);
        }});
    }});
}

function buildOcean() {
    const ocean = document.getElementById('ocean-inner');
    ocean.innerHTML = '<div style="font-size:100px; position:absolute; bottom:20px;">🪸 🐚 🌿</div>';
    
    for(let i=0; i<20; i++) {
        let f = document.createElement('div');
        f.className = 'fish';
        f.innerText = '🐠';
        f.style.left = Math.random() * 1500 + 'px';
        f.style.top = Math.random() * 1500 + 'px';
        ocean.appendChild(f);
    }
}
