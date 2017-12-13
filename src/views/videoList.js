var VideoListView = Backbone.View.extend({
  

  initialize: function() {
    this.render();
    this.collection.on('sync', this.render);
  },

  render: function() {
    this.$el.children().detach();
    // IY commment: .detach clears the container which we want to do 
    // in the beginning before rendering any more movies
    this.$el.html(this.template());
    console.log(this.collection);
    this.collection.forEach(this.renderVideo, this);
    
    return this;
  },
  
  renderVideo: function(video) {
    var videoListEntryView = new VideoListEntryView({model: video});
    this.$el.append(videoListEntryView.$el);
  },

  template: templateURL('src/templates/videoList.html')

});
