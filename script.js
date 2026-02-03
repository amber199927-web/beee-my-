document.addEventListener("DOMContentLoaded", () => {
  const envelope = document.getElementById("icon-mail");
  const letter = document.getElementById("letter-container");
  const noBtn = document.querySelector(".no-btn");
  const yesBtn = document.querySelector(".yes-btn");

  const title = document.getElementById("letter-title");
  const dogImg = document.getElementById("letter-dog");
  const buttons = document.getElementById("letter-buttons");
  const finalText = document.getElementById("final-text");

  // Open envelope
  envelope.addEventListener("click", () => {
    document.getElementById("envelope-container").style.display = "none";
    letter.style.display = "flex";

    setTimeout(() => {
      document.querySelector(".letter-window").classList.add("open");
    }, 50);
  });

  // Move NO button
  noBtn.addEventListener("mouseover", () => {
    const distance = 200;
    const angle = Math.random() * Math.PI * 2;
    const moveX = Math.cos(angle) * distance;
    const moveY = Math.sin(angle) * distance;
    noBtn.style.transform = `translate(${moveX}px, ${moveY}px)`;
  });

  // YES clicked
  yesBtn.addEventListener("click", () => {
    title.textContent = "Yippeeee!";
    dogImg.src = "e02c71f0ce70f019d23280052d4b8da4.gif";
    document.querySelector(".letter-window").classList.add("final");
    buttons.style.display = "none";
    finalText.style.display = "block";
  });
});
