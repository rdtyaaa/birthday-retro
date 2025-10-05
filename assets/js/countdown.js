function playLoopedSong() {
  const audio = new Audio(
    "assets/sound/Amin Paling Serius - Sal Priadi ft. Nadin Amizah _ Piano Instrumental by Andre Panggabean [ ezmp3.cc ].mp3"
  );
  audio.loop = false; // Jangan loop otomatis di audio
  audio.play().catch((error) => {
    console.log("Error playing audio: ", error);
  });

  // Event listener untuk mendeteksi ketika lagu selesai
  audio.addEventListener("ended", () => {
    playLoopedSong(); // Mainkan lagu lagi
    showLyrics(); // Tampilkan lirik lagi
  });
}

function showLyrics() {
  // Menghapus lirik yang sudah ada sebelumnya
  document.getElementById("lyrics").textContent = "";

  document.getElementById("lyrics-container").style.display = "block";

  let lyrics = [
    { text: "[Music]", time: 2000 },
    { text: "Aku tahu, kamu lahir dari", time: 34000 },
    { text: "Cantik utuh cahaya rembulan", time: 40000 },
    { text: "Sedang aku dari badai marah riuh yang berisik", time: 46000 },
    { text: "Juga banyak hal-hal yang sedih", time: 55000 },
    { text: "Tapi menurut aku, kamu cemerlang", time: 61000 },
    { text: "Mampu melahirkan bintang-bintang", time: 69000 },
    { text: "Menurutku, ini juga kar'na hebatnya badaimu", time: 75000 },
    { text: "Juga kar'na lembutnya tuturmu", time: 82000 },
    { text: "'Tuk petualangan ini", time: 89000 },
    { text: "Mari kita ketuk pintu yang sama", time: 93000 },
    { text: "Membawa amin paling serius", time: 100000 },
    { text: "Seluruh dunia", time: 104000 },
    { text: "Bayangkan betapa cantik dan lucunya", time: 107000 },
    { text: "Gemuruh petir ini", time: 114000 },
    { text: "Disanding rintik-rintik yang gemas", time: 118000 },
    { text: "Dan merayakan", time: 124000 },
    { text: "Amin paling serius seluruh dunia", time: 130000 },
    { text: "Aku tahu, kamu tumbuh dari", time: 164000 },
    { text: "Keras kasar sebuah kerutan", time: 171000 },
    { text: "Sedang aku dari pilu, aman yang ternyata palsu", time: 177000 },
    { text: "Juga semua yang terlalu baik", time: 185000 },
    { text: "Tapi menurut aku, kamu cemerlang", time: 192000 },
    { text: "Mampu melahirkan bintang-bintang", time: 200000 },
    { text: "Menurutku, ini juga kar'na lembutnya sikapmu", time: 207000 },
    { text: "Juga sabarmu yang nomor satu", time: 213000 },
    { text: "'Tuk petualangan ini", time: 220000 },
    { text: "Mari kita ketuk pintu yang sama", time: 224000 },
    { text: "Membawa amin paling serius", time: 231000 },
    { text: "Seluruh dunia", time: 234000 },
    { text: "Bayangkan betapa cantik dan lucunya", time: 239000 },
    { text: "Gemuruh petir ini", time: 245000 },
    { text: "Disanding rintik-rintik yang gemas", time: 250000 },
    { text: "Dan merayakan", time: 255000 },
    { text: "Amin paling serius seluruh dunia", time: 260000 },
    { text: "Bayangkan betapa cantik dan lucunya", time: 267000 },
    { text: "Gemuruh petir ini", time: 273000 },
    { text: "Disanding rintik-rintik yang gemas", time: 275000 },
    { text: "Dan merayakan", time: 281000 },
    { text: "Amin paling serius seluruh dunia", time: 286000 },
    { text: "Amin paling serius seluruh dunia", time: 300000 },
    { text: "Amin Paling Serius - Sal Priadi ft Nadin Amizah", time: 315000 },
  ];

  // Menampilkan lirik sesuai waktu yang ditentukan
  lyrics.forEach((line) => {
    setTimeout(() => {
      document.getElementById("lyrics").textContent = line.text;
    }, line.time);
  });
}

// Event listener untuk tombol start
document.getElementById("startButton").addEventListener("click", () => {
  playLoopedSong(); // Mainkan lagu saat tombol di klik
  showLyrics(); // Tampilkan lirik dengan timing

  document.getElementById("startButton").style.display = "none";
});

// const targetDate = new Date("October 7, 2025 00:00:00").getTime();
const targetDate = new Date("October 7, 2025 00:00:00").getTime();

// Update the countdown every second
const countdownInterval = setInterval(() => {
  const now = new Date().getTime();
  const timeDifference = targetDate - now;

  // Calculate time components
  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  // Update the HTML elements
  document.getElementById("days").textContent = days >= 0 ? days : "00";
  document.getElementById("hours").textContent = hours >= 0 ? hours : "00";
  document.getElementById("minutes").textContent =
    minutes >= 0 ? minutes : "00";
  document.getElementById("seconds").textContent =
    seconds >= 0 ? seconds : "00";

  // Stop the countdown when the target date is reached
  if (timeDifference < 0) {
    clearInterval(countdownInterval);

    // Hide the countdown
    document.querySelector(".countdown-container").style.display = "none";

    // Create a container for all elements
    const container = document.createElement("div");
    container.className = "container";
    document.body.appendChild(container);

    // Show "Happy Birthday!" with animation
    const birthdayMessage = document.createElement("div");
    birthdayMessage.className = "birthday-message";
    birthdayMessage.textContent = "Happy Birthday!";
    container.appendChild(birthdayMessage);

    // Add a paragraph with the message
    const messageParagraph = document.createElement("p");
    messageParagraph.className = "message-paragraph";
    messageParagraph.textContent =
      "Walaupun kita LDR dan aku belum bisa kasih kado, tapi ini aku coba kasih yang terbaik buat kamu. Semoga kamu suka ya.";
    container.appendChild(messageParagraph);

    // Add a button to play the game
    const playButton = document.createElement("button");
    playButton.className = "play-button";
    playButton.textContent = "Play Game";
    playButton.onclick = () => {
      const audio = new Audio("assets/sound/retro-click-236673.mp3");
      audio.play();

      // Tunggu 1 detik setelah audio dimainkan sebelum redirect
      audio.onended = () => {
        setTimeout(() => {
          window.location.href = "congrats.html"; // Redirect ke halaman game
        }, 2000); // Jeda 1 detik (1000 ms)
      };
    };
    container.appendChild(playButton);

    // Trigger confetti effect
    startConfetti();
  }
}, 1000);

// Confetti effect using Confetti.js
function startConfetti() {
  const confettiSettings = {
    target: "my-canvas",
    max: 100,
    clock: 50,
    start_from_edge: true,
  };
  const confetti = new ConfettiGenerator(confettiSettings);
  confetti.render();

  // Stop confetti after 5 seconds
  setTimeout(() => {
    confetti.clear(); // Clear the confetti
  }, 5000);
}

function playClickSound() {
  const audio = new Audio("assets/sound/retro-click-236673.mp3");
  audio.play();
}
