var VideoPlayerView = Backbone.View.extend({
  
  
  initialize: function() {
    this.render();
    this.collection.on('select', function(video) {
      this.model = video;
      this.render();
    }, this);
  },

  render: function() {
    console.log(this.model);
    this.$el.html(this.template(this.model.attributes));
    // console.log('id: ', this.model.attributes.id);
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});

//trigger
//listenTo
//collections

//use collection to listen for entry selection
//videoPlayer uses listenTo listen to collection?