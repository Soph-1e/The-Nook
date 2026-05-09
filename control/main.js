$(".draggable").draggable({
  revert: true,
});

$(".avatar").droppable({
  accept: ".draggable",
  drop: function (event, ui) {
    if ($(ui.draggable).hasClass("pants")) {
      $(ui.draggable).hide();
      $(".avatar .pants").show();
    }
    if ($(ui.draggable).hasClass("shirt")) {
      $(ui.draggable).hide();
      $(".avatar .shirt").show();
    }
    if ($(ui.draggable).hasClass("hat")) {
      $(ui.draggable).hide();
      $(".avatar .hat").show();
    }
  },
});

$(".return").droppable({
  accept: ".draggable",
  drop: function (event, ui) {
    if ($(ui.draggable).hasClass("pants")) {
      $(ui.draggable).hide();
      $(".return .pants").show();
    }
    if ($(ui.draggable).hasClass("shirt")) {
      $(ui.draggable).hide();
      $(".return .shirt").show();
    }
    if ($(ui.draggable).hasClass("hat")) {
      $(ui.draggable).hide();
      $(".return .hat").show();
    }
  },
});
