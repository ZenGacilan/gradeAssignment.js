function gradeAssignment() {
  const score = parseInt(prompt("Enter your score:"));

  if (score >= 100) {
    alert("Excellent");
  } else if (score >= 85) {
    alert("Good");
  } else if (score >= 50) {
    alert("Fair");
  } else {
    alert("Needs Improvement");
  }
}

gradeAssignment(85);
