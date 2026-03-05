const simbolos = ['🍒', '🍋', '💎', '7️⃣', '🍀'];

function jogar() {
    // Sorteia um símbolo aleatório para cada slot
    const s1 = simbolos[Math.floor(Math.random() * simbolos.length)];
    const s2 = simbolos[Math.floor(Math.random() * simbolos.length)];
    const s3 = simbolos[Math.floor(Math.random() * simbolos.length)];

    // Atualiza a tela
    document.getElementById('slot1').innerText = s1;
    document.getElementById('slot2').innerText = s2;
    document.getElementById('slot3').innerText = s3;

    // Lógica de vitória
    const msg = document.getElementById('resultado');
    if (s1 === s2 && s2 === s3) {
        msg.innerText = "JACKPOT! Você venceu! 🎉";
    } else {
        msg.innerText = "Tente novamente...";
    }
}