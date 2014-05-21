$(document).ready(function() {
  /* Other event bindings. */
  $("#create").click(function() {
    var item = new Item({ created_at: Date.now() });
    var itemView = new ItemView({ model: item });
    items.add(item);
    $("#todolist").append(itemView.el);
  });

  var items = new Items();
  var itemsView = new ItemsView({ collection: items });
});

/* Global declarations. */
if (!Date.now) {
  Date.now = function() { return new Date().getTime(); };
}
var ENTER_KEY = 13;
