$(function() {
  $.ajax({
    url: 'https://www.codeschool.com/users/1122673.json',
    dataType: 'jsonp',
    success: function(response) {
      // handle response
      handleBadges(response.courses.completed);
    }
  });

  function handleBadges(badges) {
    $.each(badges, function(index, item) {
      var batchDiv = '<div class="course">';
      batchDiv += "<h3>" + item.title + "</h3>";
      batchDiv += '<img src="' + item.badge + '">';
      batchDiv += '<a href="' + item.url + '" target="_blank" class="btn btn-primary">See Course</a>';
      batchDiv += "</div>";

      $('#badges').append(batchDiv);
    });
  }
});
