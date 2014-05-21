var Item = Backbone.Model.extend({
  defaults: {
    editing: false,
    text: "New task",
    finished: false,
    created_at: "",
    completed_at: "",
    priority: 0
  }
});
