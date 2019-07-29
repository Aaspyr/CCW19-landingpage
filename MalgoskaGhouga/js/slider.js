$(document).ready(function() {
  $(".navigation-btn").on("click", function() {
    $(this)
      .addClass("active")
      .siblings("button")
      .removeClass("active");

    const btnClass = $(this)
      .attr("class")
      .split(" ")[1];

    $(`.${btnClass}-section`)
      .addClass("active-section")
      .siblings("section")
      .removeClass("active-section");
  });
});
