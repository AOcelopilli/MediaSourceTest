const d = document,
  $hiddenLink = d.querySelector(".a-to-show"),
  $firedLink = d.querySelector(".show-a"),
  $btnTeamA = d.getElementById("teamA"),
  $btnTeamB = d.getElementById("teamB"),
  $elTeamA = d.getElementsByClassName("teamA"),
  $elTeamB = d.getElementsByClassName("teamB"),
  $questions = d.getElementsByClassName("question");

d.addEventListener("mouseover", (e) => {
  if (e.target.matches(".show-a") || e.target.matches(".show-a *")) {
    $hiddenLink.style.display = "block";
  }
});

d.addEventListener("mouseout", (e) => {
  if (e.target.matches(".a-to-show") || e.target.matches(".a-to-show *")) {
    $hiddenLink.style.display = "none";
  }
});

d.addEventListener("click", (e) => {
  if (e.target.id == "teamA") {
    $elTeamB[0].style.visibility = "visible";
    $elTeamB[1].style.visibility = "visible";

    $elTeamA[0].style.visibility = "hidden";
    $elTeamA[1].style.visibility = "hidden";
  }

  if (e.target.id == "teamB") {
    $elTeamA[0].style.visibility = "visible";
    $elTeamA[1].style.visibility = "visible";

    $elTeamB[0].style.visibility = "hidden";
    $elTeamB[1].style.visibility = "hidden";
  }

  if (e.target.classList.contains("circle")) {
    Array.from($questions).forEach((el) => {
      el.classList.remove("active");
    });

    e.target.parentNode.parentNode.classList.add("active");
  }
});
