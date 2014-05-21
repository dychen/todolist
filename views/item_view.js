var ItemView = Backbone.View.extend({
  tagName: "tr",
  template: _.template($("#itemtemplate").html()),

  events: {
    "click      ": "edit",
    "focus #edit": "onFocus",
    "blur  #edit": "onBlur",
  },

  initialize : function() {
    this.$el.html(this.template(this.model.toJSON()));
    this.model.on("change:editing", this.render, this);
    this.render();
  },

  render : function() {
    if (this.model.get("editing") === true) {
      this.$("#show").hide();
      this.$("#edit").show();
      this.$("#edit").focus();
      this.$("#edit").val(this.model.get("text"));
      this.$("#edit").select();
    }
    else {
      this.$("#edit").hide();
      this.$("#show").show();
      this.$("#show").text(this.model.get("text"));
    }
  },

  edit : function() {
    this.model.set({ editing: true });
  },

  onFocus : function() {
    this.$el.keypress($.proxy(this.save, this));
  },

  onBlur : function() {
    this.model.set({ editing: false });
    this.off("keypress");
  },

  save : function(e) {
    if (e.which === ENTER_KEY) {
      var text = this.$("#edit").val().trim();
      if (text !== "") {
        this.model.set({ editing: false, text: text });
      }
    }
  },
});
