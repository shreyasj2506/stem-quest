function startQuiz() {
  const q = prompt("What is 5 + 7?");
  if (q == "12") {
    alert("✅ Correct! You earn 10 points!");
  } else {
    alert("❌ Try again!");
  }
}