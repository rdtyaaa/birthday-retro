// script.js
const messages = [
  // "Happy Birthday, Love! 🎉",
  // "You light up my world like no other! ✨",
  // "Here's to more adventures together! 🚀",
  // "You're my favorite person in the universe! 🌌",
  // "I love you to infinity and beyond! ❤️",
  "Blur In - Blur Out",
  "Bounce - Fade Zoom",
  "Rotate Zoom - Bounce Out",
  "Slide In - Slide Out",
  "Flip - Flip Out",
  "Zoom Rotate Blur - Zoom Rotate Blur Out",
  "Scale Swing - Scale Shrink",
  "Spin In - Spin Out",
  "Drop In - Drop Out",
];

const messageElement = document.getElementById("message");
let index = 0;

function showNextMessage() {
  if (index < messages.length) {
    // Set text and entrance animation
    messageElement.textContent = messages[index];
    const entranceAnimation = getEntranceAnimation(index);
    messageElement.className = entranceAnimation;

    // After entrance animation, add idle animation
    setTimeout(() => {
      messageElement.classList.remove(entranceAnimation);
      messageElement.classList.add("idle");
    }, 1500); // Entrance animation duration

    // After idle, add exit animation
    setTimeout(() => {
      messageElement.classList.remove("idle");
      const exitAnimation = getExitAnimation(index);
      messageElement.classList.add(exitAnimation);

      // Move to next message after exit animation
      setTimeout(() => {
        index++;
        showNextMessage();
      }, 1500); // Exit animation duration
    }, 4500); // Time for idle + entrance
  }
}

function getEntranceAnimation(index) {
  const animations = [
    "animate-blur",
    "animate-bounce",
    "animate-rotate-zoom",
    "animate-slide-in",
    "animate-flip",
    "animate-zoom-rotate-blur",
    "animate-scale-swing",
    "animate-spin-in",
    "animate-drop-in",
  ];
  return animations[index % animations.length];
}

function getExitAnimation(index) {
  const animations = [
    "exit-blur",
    "exit-fade-zoom",
    "exit-bounce-out",
    "exit-slide-out",
    "exit-flip-out",
    "exit-zoom-rotate-blur",
    "exit-scale-shrink",
    "exit-spin-out",
    "exit-drop-out",
  ];
  return animations[index % animations.length];
}

// Start the animation sequence
showNextMessage();

const particleImages = [
  "assets/img/couple1.jpg",
  "assets/img/couple2.jpg",
  "assets/img/couple3.jpg",
  "assets/img/couple4.jpg",
  "assets/img/couple5.jpg",
];

const particlesContainer = document.getElementById("particles-container");

function createParticle(image) {
  const particle = document.createElement("div");
  particle.classList.add("particle");
  particle.style.backgroundImage = `url(${image})`;

  // Randomize starting position and animation duration
  particle.style.left = `${Math.random() * 100}%`;
  particle.style.animationDuration = `${4 + Math.random() * 2}s`;

  particlesContainer.appendChild(particle);

  // Remove particle after animation ends
  particle.addEventListener("animationend", () => {
    particlesContainer.removeChild(particle);
  });
}

// Generate particles at intervals
setInterval(() => {
  const image =
    particleImages[Math.floor(Math.random() * particleImages.length)];
  createParticle(image);
}, 1000);

// Kenapa dia?

// Karena di antara banyaknya orang, dia yang paling gua rasa tepat.
// Dia paham gua tanpa gua harus banyak bicara.
// Dia ngetreat gua dengan cara yang nggak semua orang bisa.
// Dia bukan sekadar ada, tapi benar-benar jadi tempat pulang.

// Gua ini penakut.
// Takut gagal, takut nggak siap, takut kecewa.
// Pengen daftar magang, tapi takut ditolak.
// Bisa nyetir, tapi kepikiran kalau ada apa-apa.
// Punya ide, tapi buat mulai aja gua takut.

// Terus, kenapa dia?

// Karena dia yang tanpa sadar bikin gua melangkah.
// Bukan dengan paksaan, bukan dengan kata-kata besar.
// Tapi dengan caranya sendiri, pelan-pelan dia narik gua keluar dari ketakutan.

// Dan mungkin, dia pun nggak sadar…
// Kalau dia udah ngebantu gua sejauh ini.
// Kalau tanpa dia, gua mungkin masih diam di tempat.

// Terima kasih, Afifa Nur Octaviani.
// Udah jadi seseorang yang tanpa sadar, begitu banyak berarti.
