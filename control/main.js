$(".draggable").draggable({
  revert: true,
});

$(".avatar").droppable({
  accept: ".draggable",
  drop: function (event, ui) {
    if ($(ui.draggable).hasClass("black")) {
      $(ui.draggable).hide();
      $(".avatar .black").show();
    }
    if ($(ui.draggable).hasClass("cottage")) {
      $(ui.draggable).hide();
      $(".avatar .cottage").show();
    }
    if ($(ui.draggable).hasClass("pink")) {
      $(ui.draggable).hide();
      $(".avatar .pink").show();
    }
  },
});

$(".return").droppable({
  accept: ".draggable",
  drop: function (event, ui) {
    if ($(ui.draggable).hasClass("black")) {
      $(ui.draggable).hide();
      $(".return .black").show();
    }
    if ($(ui.draggable).hasClass("cotttage")) {
      $(ui.draggable).hide();
      $(".return .cottage").show();
    }
    if ($(ui.draggable).hasClass("pink")) {
      $(ui.draggable).hide();
      $(".return .pink").show();
    }
  },
});