var moment = require('moment');

exports.Post = function(title, body) {
  this.title = title;
  this.body = body;
  this.wordCount = body.split(" ").length;
  this.timestamp = moment().format('MMMM Do YYYY, h:mm:ss a');
};

exports.Post.prototype.read = function() {
  return "<h1>" + this.title + "</h1><br>" + this.body + "<br> Word count: " + this.wordCount + "<br>Timestamp: " + this.timestamp;
};
