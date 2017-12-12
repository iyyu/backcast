var VideoListEntryView = Backbone.View.extend({

  model: Video,
  
  initialize: function() {
    var context = this;
    this.render();
    this.$el.on('click', '.video-list-entry-title', function() {
      context.model.select();
    });
  },
  
  render: function() {
    this.$el.html(this.template(this.model.attributes));
    // need to fix the template
    // this.model.attributes shows individual video nodes
    return this.$el;
  },
  
  template: templateURL('src/templates/videoListEntry.html')

});
