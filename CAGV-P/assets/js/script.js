$(document).ready(function () {
  $(".card").hover(function () {
    $(this).toggleClass("shadow-lg");
  });

  $(".btn").click(function (e) {
    e.preventDefault();
    alert(
      "Iría al proyecto: " + $(this).closest(".card").find(".card-title").text()
    );
  });
});
