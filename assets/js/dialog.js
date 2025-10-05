// Dialog data
const dialogs = [
  {
    name: "Rascal",
    text: "Selamat ulang tahun, Octavia! Hari ini adalah hari yang spesial buat kamu. Aku udah nyiapin sesuatu yang seru!",
  },
  {
    name: "Octavia",
    text: "Terima kasih, Rascal! Seriusan? Apa itu? Aku jadi penasaran nih!",
  },
  {
    name: "Rascal",
    text: "Oke, sebelum aku kasih tahu semuanya, aku punya teka-teki kecil buat kamu. Siap?",
  },
  {
    name: "Octavia",
    text: "Tentu saja! Aku siap. Ayo mulai teka-tekinya!",
  },
  {
    name: "Rascal",
    text: "Teka-teki pertama: 'Lagu apa yang selalu ngingetin kita saat awal-awal kenal dulu?'",
  },
  {
    name: "Octavia",
    text: "Hmmm, aku rasa aku tahu! Aku boleh coba jawab sekarang?",
  },
  {
    name: "Rascal",
    text: "Tentu saja! Aku udah nggak sabar dengar jawabanmu!",
  },
  {
    name: "Octavia",
    text: "Oke, jawabanku... Apakah itu Alexandra?",
  },
  {
    name: "Rascal",
    text: "Yoi! Alexandra, walaupun lagunya ga relate tapi ngingetin aku tentang kamu. Sekarang, mari kita dengerin lagunya!",
  },
  {
    name: "Octavia",
    text: "...",
  },
  {
    name: "Rascal",
    text: "Seiring dengan lagu Alexandra ini, kita inget-inget lagi gimana semuanya dimulai.",
  },
  {
    name: "Rascal",
    text: "Awalnya cuma dari chattingan di TikTok. Ada orang yang baru patah hati, curhat semua hal tentang dunianya.",
  },
  {
    name: "Octavia",
    text: "...",
  },
  {
    name: "Rascal",
    text: "Tapi ternyata dari obrolan-obrolan random dan ga jelas itu, aku jadi penasaran. Penasaran buat lebih kenal kamu.",
  },
  {
    name: "Rascal",
    text: "Dan lihat kita sekarang. Kita ngelewatin semuanya bareng-bareng. Dari photobooth setiap bulan, jalan-jalan keliling Bandung tanpa arah, ngobrol di sumur setiap malam, sampai cuma tidur-tiduran aja, aku tetep nyaman banget sama kamu.",
  },
  {
    name: "Rascal",
    text: "Semakin aku kenal kamu, semakin aku sadar, kamu tuh benar-benar ngelengkapin kekurangan aku. Kamu bikin aku ngerasa jadi versi terbaik diriku.",
  },
  {
    name: "Rascal",
    text: "Selama ada kamu, aku selalu happy. Selalu ada rasa percaya diri buat ngejalanin hari-hariku.",
  },
  {
    name: "Rascal",
    text: "Kamu emang orang yang spesial buat aku.",
  },
  {
    name: "Rascal",
    text: "Semoga kita bareng-bareng terus ya, Moonlight! Love you ya <3",
  },
  {
    name: "Octavia",
    text: "...",
  },
  {
    name: "",
    text: "Mereka terdiam diiringi alunan Alexandra by Hindia",
  },
  {
    name: "Octavia",
    text: "Lucu juga ya masa-masa itu!",
  },
  {
    name: "Rascal",
    text: "Aku berharap kita selalu bersama, melewati setiap momen bahagia.",
  },
  {
    name: "Octavia",
    text: "Aku juga. Rasanya seperti mimpi yang indah.",
  },
  {
    name: "Rascal",
    text: "Kamu punya harapan lain nggak?",
  },
  {
    name: "Octavia",
    text: "Mungkin aku punya satu... tapi ingin berbagi itu dengan kamu.",
  },
  {
    name: "",
    text: "Mereka tersenyum, mata saling bertemu.",
  },
  {
    name: "",
    text: 'Rascal, dengan penuh kasih, mengajukan satu pertanyaan: "Make a wish, Moonlight."',
  },
  {
    name: "Rascal",
    text: "Sekarang giliran kamu untuk membuat harapan.",
  },
];

// Audio for background sound
const dialogSound = new Audio("assets/sound/type-ui-38782.mp3");
const alexandraSong = new Audio(
  "assets/sound/Hindia - Alexandra (Official Lyric Video) [ ezmp3.cc ].mp3"
);
const bgm = new Audio("assets/sound/centaur-forest-60695.mp3");

let currentDialogIndex = 0;
let selectedCharacter = "";

// DOM elements
const gameBody = document.getElementById("game-body");
const characterSelection = document.getElementById("character-selection");
const dialogBox = document.getElementById("dialog-box");
const warningDialog = document.getElementById("warning-dialog");
const characterNameElement = document.getElementById("character-name");
const dialogTextElement = document.getElementById("dialog-text");
const characterImageElement = document.getElementById("character-image");
const passwordInput = document.getElementById("password-input");
const dialogButtons = document.querySelector(".dialog-buttons");
const answerButton = document.getElementById("answer-button");
const nextButton = document.getElementById("next-button");

function playClickSound() {
  const audio = new Audio("assets/sound/retro-click-236673.mp3");
  audio.play();
}

function fadeOutAudio(audio, callback) {
  const fadeOutInterval = setInterval(() => {
    if (audio.volume > 0.05) {
      audio.volume -= 0.05; // Gradually decrease volume
    } else {
      clearInterval(fadeOutInterval);
      audio.pause();
      audio.volume = 0.6; // Reset volume for future playbacks
      if (callback) callback();
    }
  }, 200); // Adjust the interval for smoother fading
}

gameBody.classList.add("bg-sunset");

// Function to select character
function selectCharacter(character) {
  if (character === "Rascal") {
    // Show warning dialog
    warningDialog.classList.remove("hidden");
  } else {
    // Hide character selection and show dialog
    selectedCharacter = character;
    characterSelection.classList.add("hidden");

    // Add the background active class
    gameBody.classList.remove("bg-sunset");
    gameBody.classList.add("bg-room");
    bgm.volume = 0.6;
    bgm.loop = true;
    bgm.play();

    // Wait for 5 seconds (5000 milliseconds), then add the dialog-active class
    setTimeout(() => {
      gameBody.classList.add("dialog-active");
      dialogBox.classList.remove("hidden");

      // Display first dialog
      displayDialog(currentDialogIndex);
    }, 5000); // Delay for 5 seconds
  }
}

// Function to close the warning dialog
function closeWarning() {
  warningDialog.classList.add("hidden");
}

// Function for typewriter effect
function typeWriterEffect(text, element) {
  let i = 0;
  const interval = setInterval(() => {
    element.textContent += text[i];
    i++;
    if (i >= text.length) {
      clearInterval(interval);
      nextButton.disabled = false; // Enable next button after typewriter effect finishes
    }
  }, 50);
}

// Function to display the current dialog
function displayDialog(index) {
  if (index < dialogs.length) {
    const dialog = dialogs[index];

    // Update character name and reset dialog text before starting typewriter
    characterNameElement.textContent = dialog.name;
    dialogTextElement.textContent = ""; // Reset the text before starting typewriter effect

    // Disable next button before starting typewriter
    nextButton.disabled = true;

    gameBody.classList.remove("bg-rascal", "bg-octavia");

    if (index < 8) {
      // Hide character image
      gameBody.classList.remove("dialog-active");
      gameBody.classList.remove("bg-room");
      characterImageElement.classList.add("hidden");

      // Set full background via class
      if (dialog.name === "Rascal") {
        gameBody.classList.remove("bg-octavia");
        gameBody.classList.add("bg-rascal");
      } else if (dialog.name === "Octavia") {
        gameBody.classList.remove("bg-rascal");
        gameBody.classList.add("bg-octavia");
      }
    } else if (index === 8) {
      // Fade out BGM and play Alexandra
      fadeOutAudio(bgm, () => {
        alexandraSong.volume = 1.0;
        alexandraSong.play();

        gameBody.classList.remove("bg-rascal", "bg-octavia", "bg-room");
        gameBody.classList.add("dialog-active");

        // Play background video
        const bgVideo = document.getElementById("bg-video");
        bgVideo.style.display = "block"; // Show the video
        bgVideo.play();

        // Show lyrics (assuming showLyrics is defined elsewhere)
        showLyrics();

        alexandraSong.onended = () => {
          nextButton.classList.remove("hidden"); // Show the next button
          const lyricsContainerDiv =
            document.getElementById("lyrics-container");
          lyricsContainerDiv.classList.add("hidden"); // Hide the lyrics container
          lyricsContainerDiv.innerHTML = ""; // Clear lyrics content

          // Stop and hide the video after the song ends
          gameBody.classList.add("dialog-active");
          bgVideo.pause();
          bgVideo.currentTime = 0; // Reset video to the start
          bgVideo.style.display = "none"; // Hide the video
        };
      });
    } else if (index > 8 && index <= 19) {
      // Remove next button during dialogs 9-16
      nextButton.classList.add("hidden");

      // Reset background class
      gameBody.classList.remove("bg-rascal", "bg-octavia");

      // Show character image
      characterImageElement.classList.remove("hidden");

      if (dialog.name === "Octavia") {
        characterImageElement.src =
          "assets/img/character/Octavia/Octavia-Transparent.png";
        characterImageElement.classList.add("left");
        characterImageElement.classList.remove("right");
      } else if (dialog.name === "Rascal") {
        characterImageElement.src =
          "assets/img/character/Rascal/Rascal-Transparent.png";
        characterImageElement.classList.add("right");
        characterImageElement.classList.remove("left");
      } else {
        characterImageElement.classList.add("hidden");
      }

      // Automatically go to the next dialog after 2 seconds
      setTimeout(() => {
        nextDialog();
      }, 15000); // Wait 2 seconds after dialog ends
    } else {
      // After index 19, show full background again
      characterImageElement.classList.add("hidden");

      if (dialog.name === "Rascal") {
        gameBody.classList.add("bg-rascal");
      } else if (dialog.name === "Octavia") {
        gameBody.classList.add("bg-octavia");
      }
    }

    // Play sound effect for dialog
    dialogSound.volume = 0.3;
    dialogSound.play();
    dialogSound.currentTime = 1;
    dialogSound.play();

    // Start typewriter effect
    typeWriterEffect(dialog.text, dialogTextElement);

    // Update character image position
    // if (dialog.name === "Octavia") {
    //   characterImageElement.classList.remove("hidden");
    //   characterImageElement.src =
    //     "assets/img/character/Octavia/Octavia-Transparent.png";
    //   characterImageElement.classList.add("left");
    //   characterImageElement.classList.remove("right");
    // } else if (dialog.name === "Rascal") {
    //   characterImageElement.classList.remove("hidden");
    //   characterImageElement.src = "assets/img/character/Rascal/Neutral.png";
    //   characterImageElement.classList.add("right");
    //   characterImageElement.classList.remove("left");
    // } else {
    //   characterImageElement.src = ""; // or use a placeholder image
    //   characterImageElement.classList.remove("left", "right");
    //   characterImageElement.classList.add("hidden");
    // }

    // If it's Octavia's turn and the dialogue asks for an answer, show the answer input
    if (dialog.name === "Rascal" && dialog.text.includes("dengar jawabanmu!")) {
      nextButton.classList.add("hidden");
      showPasswordInput();
    }

    // if (dialog.text.includes("Make a wish, Moonlight.")) {
    //   // Show particles
    //   document.querySelector(".shooting-star").style.display = "block"; // Show the particles background
    //   document.getElementById("particles-js").style.display = "block"; // Show the particles background
    // } else {
    //   document.querySelector(".shooting-star").style.display = "none"; // Show the particles background
    //   document.getElementById("particles-js").style.display = "none"; // Show the particles background
    // }
  } else {
    const wishButton = document.getElementById("wish-button");
    nextButton.classList.add("hidden");
    wishButton.classList.remove("hidden");
  }
}

// Function to move to the next dialog
function nextDialog() {
  currentDialogIndex++;
  displayDialog(currentDialogIndex);
}

// Function to show the password input
function showPasswordInput() {
  passwordInput.classList.remove("hidden");
  passwordInput.focus(); // Focus the input field for better UX
}

// Function to check password
passwordInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    const answer = passwordInput.value.toLowerCase();
    let correctAnswer = "";

    if (currentDialogIndex === 6) {
      // First question "alexandra"
      correctAnswer = "alexandra";
    }

    if (answer === correctAnswer) {
      nextDialog();
      passwordInput.classList.add("hidden");
      nextButton.classList.remove("hidden");
    } else {
      characterImageElement.src = "assets/img/character/Rascal/Sad.png";
      characterImageElement.classList.add("right");
      characterImageElement.classList.remove("left");
      characterNameElement.textContent = "Rascal";
      dialogTextElement.textContent = "Salah. Coba lagi!";
    }
  }
});

const lyricsData = {
  lyrics: [
    { text: "Sasa, malam ini mau pergi ke mana?", time: 9 },
    { text: "Masih bisakah kau dan teman-temanmu rayakan dunia?", time: 16 },
    { text: "Tengah malam ini 'kan bertemu siapa?", time: 24 },
    { text: "Bisakah Ia tersenyum menyikapi dunia?", time: 31 },
    { text: "Maukah kalian memaafkan kami semua?", time: 40 },
    { text: "Kami rampas berbagai hal yang bisa buatmu bahagia", time: 48 },
    { text: "Jalanmu berat, seumur hidup", time: 57 },
    { text: "Semoga ada bara yang tersisa", time: 65 },
    { text: "Pun kata maaf, jauh terlambat datang", time: 73 },
    { text: "Salahkan kami", time: 86 },
    { text: "Jika suatu saat kau jadi Ibu juga", time: 89 },
    { text: "Paman harap kau ajarkan Ia tuk merayakan dunia", time: 94 },
    { text: "Semoga Ia tak ulangi lalai kami semua", time: 104 },
    { text: "Bisakah tak kau rampas api itu dari dalam dirinya?", time: 111 },
    { text: "Jalanmu berat, seumur hidup", time: 121 },
    { text: "Semoga ada bara yang tersisa", time: 131 },
    { text: "Pun kata maaf, jauh terlambat datang", time: 139 },
    { text: "Salahkan kami", time: 151 },
    { text: "Salahkan kami, kami mengerti", time: 156 },
    {
      text: "Satu hal yang bisa kau tiru hanya perihal merusak diri",
      time: 163,
    },
    { text: "Berharap hal baik yang kau temui hari ini berarti", time: 171 },
    { text: "Saat kau dewasa nanti", time: 179 },
    { text: "Jalanmu berat, seumur hidup", time: 189 },
    { text: "Semoga ada bara yang tersisa", time: 198 },
    { text: "Pun kata maaf, jauh terlambat datang", time: 206 },
    { text: "Salahkan kami", time: 217 },
    { text: "Jalanmu berat, seumur hidup", time: 221 },
    { text: "Semoga ada bara yang tersisa", time: 230 },
    { text: "Pun kata maaf, jauh terlambat datang", time: 238 },
    { text: "Salahkan kami", time: 251 },
    { text: "Alexandra by Hindia", time: 257 },
  ],
};

// Function to show lyrics with animation
function showLyrics() {
  const lyricsContainer = document.getElementById("lyrics-text");

  // Clear previous lyrics if any
  lyricsContainer.innerHTML = "";

  // Add lyrics to container based on time
  lyricsData.lyrics.forEach((lyric, index) => {
    // Create a new p element for each lyric
    const p = document.createElement("p");
    p.textContent = lyric.text;
    lyricsContainer.appendChild(p);

    // Set animation delay based on the lyric's time
    p.style.animationDelay = `${lyric.time}s`;
  });

  // Show lyrics container
  const lyricsContainerDiv = document.getElementById("lyrics-container");
  lyricsContainerDiv.classList.remove("hidden");

  // Start the lyrics transition when the song begins or after a delay
  lyricsData.lyrics.forEach((lyric, index) => {
    setTimeout(() => {
      // Replace previous lyric text with the current one
      lyricsContainer.innerHTML = `<p>${lyric.text}</p>`;
    }, lyric.time * 1000); // Time delay in milliseconds
  });
}