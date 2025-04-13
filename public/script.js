function checkAnswer() {
    const userAnswer = document.getElementById("answer").value;
    const result = document.getElementById("result");
  
    if (userAnswer === "4") {
      result.textContent = "🎉 Correct! Well done!";
      result.style.color = "green";
    } else {
      result.textContent = "❌ Oops! Try again.";
      result.style.color = "red";
    }
  }
  
 
  function toggleMenu() {
    const navLinks = document.getElementById("nav-links");
    navLinks.classList.toggle("show");
  }

  // Optional: close menu on link click (mobile)
  document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
      document.getElementById("nav-links").classList.remove("show");
    });
  });

