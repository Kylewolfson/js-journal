var Post = require('./post.js').Post;

var post = new Post("Title", "This is the body");

console.log(post.read());
