const message = `i understand u're afraid. love can feel heavy when the past still echoes in all the quiet places inside u. maybe one day, when the trembling settles and u finally feel safe again, we’ll get the chance to take that step we never finished. i'm not asking u to choose now, i just want u to know that i'm here, just staying where ur presence once felt at home. i'm sorry for what i've done. u told me not to try, not to wait, not to fight for something that scares u. but the truth is, i can’t unfeel what i feel. and u’re the kind of person someone naturally chooses to fight for, even in silence, even when u think u’re not worth the effort. so i'm here. simply because waiting for someone like u never feels like a burden. it feels like hope. remember i begged the universe to let it be u`;

function showLetter() {
  document.getElementById("introText").style.opacity = 0;
  document.querySelector(".btn").style.display = "none";

  setTimeout(() => {
    const letterBox = document.getElementById("letterBox");
    const typedText = document.getElementById("typedText");
    letterBox.style.display = "block";
    let i = 0;

    function typeWriter() {
      if (i < message.length) {
        typedText.innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 30);
      }
    }

    typeWriter();
  }, 600);
}
