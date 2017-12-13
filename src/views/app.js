var AppView = Backbone.View.extend({
  
  el: '#app',
  
  // vidListView: 0,

  initialize: function() {
    this.render();
    // this.vidListView.on('select', function() {
    //   console.log('hello'
    // });
    // this.listenTo(this.vidListView, 'select2', function() {
    //   console.log('hi!');
    // });
    
  },


  render: function() {
    this.$el.html(this.template());

    var searchView = new SearchView().render();   

    var videoListView = new VideoListView({
      collection: this.collection,
      el: '.list'
    });
    // this.vidListView = videoListView;
    
    var videoPlayerView = new VideoPlayerView({
      collection: this.collection,
      model: this.collection.at(0),
      el: '.player'
    });
    
    
    this.$el.find('.search').html(searchView.$el);
    // this.$el.find('.player').html(videoPlayerView.$el);
    return this;
  },

  template: templateURL('src/templates/app.html')

});
