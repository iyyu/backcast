var VideoListEntryView = Backbone.View.extend({

  model: Video,
  
  render: function() {
    console.log('before: ', this.$el.html());
    this.$el.html(this.template(this.model.attributes));
    console.log('after: ', this.$el.html());
    // need to fix the template
    // this.model.attributes shows individual video nodes
    return this.$el;
  },
  
  template: templateURL('src/templates/videoListEntry.html')

});
