$(document).ready(function() {
  $('#journal').submit(function(event) {
    event.preventDefault();
    var title = $('#title').val();
    var body = $('#body').val();
    var newPost = new Post(title, body);
    $('#posts').prepend("<li>" + newPost.read() + "</li>")
  })
})
