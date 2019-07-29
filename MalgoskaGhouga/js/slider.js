window.onload = function() {
  const btns = document.getElementsByClassName("navigation-btn");

  for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
      const current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    });
  }
};
