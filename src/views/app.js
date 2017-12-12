var AppView = Backbone.View.extend({
  
  el: '#app',

  initialize: function() {
    this.videos = new Videos();
    //new VideoPlayer View
    this.render();
  },


  render: function() {
    this.$el.html(this.template());
    
    var searchView = new SearchView().render();   
    var videoPlayerView = new VideoPlayerView().render();
    
    var videoListView = new VideoListView({
      collection: this.collection,
      el: '.list'
    }).render();
    
    this.$el.find('.search').html(searchView.$el);
    this.$el.find('.player').html(videoPlayerView.$el);
    return this;
  },

  template: templateURL('src/templates/app.html')

});
