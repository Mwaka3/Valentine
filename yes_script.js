const messageLines = [
  "𝑳𝒐𝒗𝒆 𝒊𝒔𝒏’𝒕 𝒐𝒏𝒍𝒚 𝒂𝒃𝒐𝒖𝒕 𝒍𝒂𝒖𝒈𝒉𝒊𝒏𝒈 𝒂𝒏𝒅 𝒉𝒂𝒑𝒑𝒚 𝒅𝒂𝒚𝒔 😫",
  "𝑺𝒐𝒎𝒆𝒕𝒊𝒎𝒆𝒔 𝒊𝒕’𝒔 𝒂𝒃𝒐𝒖𝒕 𝒔𝒕𝒂𝒚𝒊𝒏𝒈 𝒘𝒉𝒆𝒏 𝒂𝒍𝒍 𝒐𝒕𝒉𝒆𝒓𝒔 𝒘𝒐𝒖𝒍𝒅 𝒍𝒆𝒕 𝒈𝒐 💔",
  "𝑰𝒕 𝒊𝒔 𝒉𝒐𝒍𝒅𝒊𝒏𝒈 𝒉𝒂𝒏𝒅𝒔 𝒂𝒇𝒕𝒆𝒓 𝒎𝒊𝒔𝒖𝒏𝒅𝒆𝒓𝒔𝒕𝒂𝒏𝒅𝒊𝒏𝒈𝒔 𝒂𝒏𝒅 𝒏𝒆𝒗𝒆𝒓 𝒍𝒆𝒕𝒕𝒊𝒏𝒈 𝒈𝒐 🥲",
  "𝑰𝒕 𝒊𝒔 𝒍𝒊𝒔𝒕𝒆𝒏𝒊𝒏𝒈 𝒕𝒐 𝒆𝒂𝒄𝒉 𝒐𝒕𝒉𝒆𝒓’𝒔 𝒉𝒆𝒂𝒓𝒕𝒔 𝒂𝒏𝒅 𝒏𝒆𝒆𝒅𝒔 𝒆𝒗𝒆𝒏 𝒘𝒉𝒆𝒏 𝒊𝒕 𝒉𝒖𝒓𝒕𝒔 😭",
  "𝑻𝒓𝒖𝒆 𝒍𝒐𝒗𝒆 𝒊𝒔 𝒒𝒖𝒊𝒆𝒕, 𝒅𝒆𝒆𝒑, 𝒂𝒏𝒅 𝒉𝒆𝒂𝒍𝒊𝒏𝒈 ❤️",
  "HAPPY ANNIVERSARY BABE ❤️"
];

const container = document.getElementById("anniversary-message");
const header = document.getElementById("main-header");

const fireworkColors = ['#ff004c', '#00eaff', '#ffe600', '#ff7a00', '#ffffff'];

/* LONG-LASTING FIREWORKS */
function launchFireworks(duration = 8000) {
  const end = Date.now() + duration;

  (function fireworksFrame() {
    confetti({
      particleCount: 50,
      startVelocity: 55,
      spread: 360,
      ticks: 90,
      gravity: 0.85,
      decay: 0.91,
      colors: fireworkColors,
      origin: {
        x: Math.random(),
        y: Math.random() * 0.4
      }
    });

    if (Date.now() < end) {
      setTimeout(fireworksFrame, 600);
    }
  })();
}

/* BIG FINAL EXPLOSION */
function finalExplosion() {
  confetti({
    particleCount: 220,
    startVelocity: 70,
    spread: 360,
    ticks: 120,
    gravity: 0.8,
    colors: fireworkColors,
    origin: { x: 0.5, y: 0.4 }
  });
}

/* SLOW, DRAMATIC MESSAGE REVEAL */
function revealMessageSlow() {
  let index = 0;

  const interval = setInterval(() => {
    const p = document.createElement("p");
    p.textContent = messageLines[index];
    p.classList.add("message-line");

    if (index === messageLines.length - 1) {
      p.classList.add("final-line");
      setTimeout(finalExplosion, 500);
    }

    container.appendChild(p);
    index++;

    if (index === messageLines.length) {
      clearInterval(interval);
    }
  }, 1800); // slower reveal = more drama
}

/* MASTER SEQUENCE */
setTimeout(() => {
  header.classList.add("fade-out");

  setTimeout(() => {
    launchFireworks();
    revealMessageSlow();
  }, 1500);

}, 2000);
