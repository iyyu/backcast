var VideoListView = Backbone.View.extend({

  render: function() {
    this.$el.children().detach(); 
    // IY commment: .detach clears the container which we want to do 
    // in the beginning before rendering any more movies
    this.$el.html(this.template());
    
    this.collection.forEach(this.renderVideo, this);
    
    
    return this;
  },
  
  renderVideo: function(video) {
     //instantiate a new view for a video model
    var videoListEntryView = new VideoListEntryView({model: video});
    // console.log('vlev', videoListEntryView.html());
    this.$el.append(videoListEntryView.render());
      //render the view which takes the model's attributes and returns a DOM node
      //add the model DOM node to the collection $el
  },

  template: templateURL('src/templates/videoList.html')

});
