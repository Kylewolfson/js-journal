var Post = require('./../js/post.js').Post;

$(document).ready(function() {
  $('#journal').submit(function(event) {
    event.preventDefault();
    var title = $('#title').val();
    var body = $('#body').val();

    var newPost = new Post(title, body);
    $('#posts').prepend("<li>" + newPost.read() + "</li>");
  });
});

exports.Post = function(title, body) {
  this.title = title;
  this.body = body;
  this.wordCount = body.split(" ").length;
};

exports.Post.prototype.read = function() {
  return "<h1>" + this.title + "</h1><br>" + this.body + "<br> Word count: " + this.wordCount;
};
