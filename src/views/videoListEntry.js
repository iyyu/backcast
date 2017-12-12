var VideoListEntryView = Backbone.View.extend({

  model: Video,
  
  render: function() {
    console.log(this.model.attributes);
    this.$el.html(this.template(this.model.attributes));
    // need to fix the template
    // this.model.attributes shows individual video nodes
    return this.$el;
  },
  
  template: templateURL('src/templates/videoListEntry.html')

});
