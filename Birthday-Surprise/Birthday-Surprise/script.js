/*
  EASY CUSTOMIZATION
  1. Change recipientName and senderName below.
  2. Edit secretMessage to change the hidden letter.
  3. Replace the gallery photo URLs and captions with your own photos.
  For your own pictures, upload them to an "assets" folder and use paths like:
  "assets/vikas-photo-1.jpg"
*/
const birthdayConfig = {
  recipientName: "Vikas",
  senderName: "Arsad",
  secretMessage: "Happy Birthday, Vikas! I hope your day is full of laughter, good surprises, and all the things that make you happy. Thanks for being the kind of friend who makes life better just by being in it. Keep smiling, keep shining, and never stop being you. Here's to more memories, more madness, and many more birthdays together!",
  gallery: [
    {
      image: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=900&q=85",
      alt: "Friends celebrating together",
      caption: "The celebrations"
    },
    {
      image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=85",
      alt: "Friends spending time together",
      caption: "The good times"
    },
    {
      image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=900&q=85",
      alt: "A group of friends sharing a moment",
      caption: "The little moments"
    }
  ]
};

const byId = (id) => document.getElementById(id);

function applyConfig() {
  document.title = `${birthdayConfig.recipientName}'s Birthday Surprise 🎂`;
  ["recipient-name", "letter-recipient", "footer-recipient"].forEach(id => {
    const el = byId(id);
    if (el) el.textContent = birthdayConfig.recipientName;
  });
  ["sender-name-label", "letter-sender", "footer-sender"].forEach(id => {
    const el = byId(id);
    if (el) el.textContent = birthdayConfig.senderName;
  });
  byId("secret-message").textContent = birthdayConfig.secretMessage;

  const gallery = byId("gallery");
  gallery.innerHTML = "";
  birthdayConfig.gallery.forEach((photo, index) => {
    const figure = document.createElement("figure");
    figure.className = "memory-card" + (index === 0 ? " card-tall" : index === 1 ? " card-offset" : "");
    const img = document.createElement("img");
    img.src = photo.image;
    img.alt = photo.alt || `Friendship memory ${index + 1}`;
    img.loading = "lazy";
    const caption = document.createElement("figcaption");
    const number = document.createElement("span");
    number.textContent = String(index + 1).padStart(2, "0");
    caption.append(number, document.createTextNode(` ${photo.caption || "A favourite memory"}`));
    figure.append(img, caption);
    gallery.append(figure);
  });
}

let opened = false;
const giftButton = byId("gift-button");
const letterCard = byId("letter-card");
const giftHint = byId("gift-hint");

function openGift() {
  if (!opened) {
    opened = true;
    giftButton.classList.add("opened");
    giftHint.textContent = "SURPRISE UNLOCKED ✨";
    window.setTimeout(() => {
      letterCard.hidden = false;
      letterCard.scrollIntoView({ behavior: "smooth", block: "center" });
      celebrate();
    }, 450);
  } else {
    letterCard.hidden = false;
    letterCard.scrollIntoView({ behavior: "smooth", block: "center" });
  }
}

giftButton.addEventListener("click", openGift);
byId("open-surprise").addEventListener("click", () => {
  byId("surprise").scrollIntoView({ behavior: "smooth" });
  window.setTimeout(() => giftButton.focus({ preventScroll: true }), 500);
});
byId("confetti-button").addEventListener("click", () => {
  celebrate();
  showToast("One more birthday cheer for " + birthdayConfig.recipientName + "! 🎉");
});
byId("final-celebrate").addEventListener("click", () => {
  celebrate();
  showToast("Make a wish, " + birthdayConfig.recipientName + "! 🎂");
});

let toastTimer;
function showToast(message) {
  const toast = byId("toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => toast.classList.remove("show"), 2600);
}

// Lightweight confetti animation; no extra libraries required.
const canvas = byId("confetti-canvas");
const ctx = canvas.getContext("2d");
let confettiPieces = [];
let animationFrame = null;

function resizeCanvas() {
  const ratio = window.devicePixelRatio || 1;
  canvas.width = Math.floor(window.innerWidth * ratio);
  canvas.height = Math.floor(window.innerHeight * ratio);
  canvas.style.width = window.innerWidth + "px";
  canvas.style.height = window.innerHeight + "px";
  ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
}
window.addEventListener("resize", resizeCanvas);
resizeCanvas();

function celebrate() {
  const colors = ["#f0abfc", "#c4b5fd", "#f9a8d4", "#fde68a", "#ffffff", "#a7f3d0"];
  for (let i = 0; i < 150; i++) {
    confettiPieces.push({
      x: Math.random() * window.innerWidth,
      y: -20 - Math.random() * window.innerHeight * 0.45,
      size: 4 + Math.random() * 6,
      speed: 2 + Math.random() * 4,
      drift: (Math.random() - 0.5) * 2.4,
      rotation: Math.random() * Math.PI,
      spin: (Math.random() - 0.5) * 0.15,
      color: colors[Math.floor(Math.random() * colors.length)],
      life: 150 + Math.random() * 80
    });
  }
  if (!animationFrame) animateConfetti();
}

function animateConfetti() {
  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
  confettiPieces = confettiPieces.filter(p => p.life > 0 && p.y < window.innerHeight + 30);
  confettiPieces.forEach(p => {
    p.x += p.drift;
    p.y += p.speed;
    p.rotation += p.spin;
    p.life -= 1;
    ctx.save();
    ctx.translate(p.x, p.y);
    ctx.rotate(p.rotation);
    ctx.fillStyle = p.color;
    ctx.globalAlpha = Math.min(1, p.life / 25);
    ctx.fillRect(-p.size / 2, -p.size / 3, p.size, p.size * 0.65);
    ctx.restore();
  });
  if (confettiPieces.length) {
    animationFrame = requestAnimationFrame(animateConfetti);
  } else {
    cancelAnimationFrame(animationFrame);
    animationFrame = null;
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
  }
}

applyConfig();
