var AppView = Backbone.View.extend({
  
  el: '#app',

  initialize: function() {
    this.videos = new Videos();
    //new VideoPlayer View
    this.render();
  },


  render: function() {
    this.$el.html(this.template());
    new VideoPlayerView().render();
    new VideoListView().render();
    return this;
  },

  template: templateURL('src/templates/app.html')

});
