$(document).ready(function() {
  jQuery("abbr.timeago").timeago();
  jQuery.timeago.settings.allowFuture = true;
  'user strict';

//expands the textarea and tweet button when clicked
$('.tweet-compose').on('click', function() {
  $(this).animate({height: "5em"}, 500)
  $('#tweet-controls').fadeIn(800)
});

// <---------------------------------------------------------->
//counts the text being inputted
$('.tweet-compose').on('keydown', function(){
    var max_characters = 140;
    var total_used = parseInt($(this).text());
    var remaining = max_characters - ($(this).val().length);
    $('#char-count').text(remaining);

//changes counter color to red if < 10 chars remaining
    if (remaining <= 10) {
      $('#char-count').css('color', 'red')
    };
    if (remaining >= 11) {
      $('#char-count').css('color', 'black')
    };

//diables Tweet button if input below 0
    if (remaining <= 0) {
        $('button').prop('disabled', true);
    };
    if (remaining >= 1) {
        $('button').prop('disabled', false);
    };

});
// <---------------------------------------------------------->

//creates a function that takes in the input from the tweet-compose box
// function addNewTweet() {
//     var newTweetText = $('.tweet-compose').val();

//lays out the template for the new tweet
//     var newTweet = '<div class="tweet">' +
//         '<div class="content">' +
//         '<img class="avatar" src="img/alagoon.jpg">' +
//         '<strong class="fullname">kejcbsn  </strong>' +
//         '<span class="username">@kejcbsn</span>' +
//         '<p class ="tweet-text">' + newTweetText + '</p>' +
//         '<div class="tweet-actions">' +
//           '<ul>' +
//           '<li><span class="icon action-reply"></span> Reply</li>' +
//             '<li><span class="icon action-retweet"></span> Retweet</li>' +
//             '<li><span class="icon action-favorite"></span> Favorite</li>' +
//             '<li><span class="icon action-more"></span> More</li>' +
//           '</ul>' +
//         '</div>' +
//         '<div class="stats">' +
//           '<div class="retweets">' +
//             '<p class="num-retweets">1</p>' +
//             '<p>RETWEETS</p>' +
//           '</div>' +
//           '<div class="favorites">' +
//             '<p class="num-favorites">3</p>' +
//             '<p>FAVORITES</p>' +
//           '</div>' +
//           '<div class="users-interact">' +
//             '<div>' +
//               '<img src="img/jennyshen.jpg" />' +
//               '<img src="img/damenleeturks.jpg" />' +
//             '</div>' +
//           '</div>' +
//           '<div class="time">' +
//             jQuery.timeago(new Date()) +
//           '</div>' +
//         '</div>' +
//         '<div class="reply">' +
//           '<img class="avatar" src="img/alagoon.jpg" />' +
//           '<textarea class="tweet-compose" placeholder="Reply to @mybff"/></textarea>' +
//         '</div>' +
//       '</div>' +
//     '</div></div>';
//     return newTweet;
// }

//creates the on click function for the tweet-compose button
$('#tweet-submit').on('click', function() {
        var tweet = $('.tweet-compose').val();

        // This clones the first tweet that is already there and then updates the info in it.
        var userProfile = $('.tweet:first').clone(true);
        userProfile.find('.avatar').prop('src', 'http://mimg.ugo.com/200912/34487/cuts/hulk1_288x288.jpg');
        userProfile.find('.fullname').html('HHogan');
        userProfile.find('.username').html('@HulkamaniaBrother');
        userProfile.find('.tweet-text').html(tweet);
        userProfile.find('.time').html('<time>' + jQuery.timeago(new Date()) + '</time>');
        // userProfile.find('.num-retweets').html(retweetCounter.getRetweetCounter());
        // userProfile.find('.num-favorites').html(favCounter.getFavCounter());
        $('#stream').prepend(userProfile);
      });

//This was my code for the submit button. Worked but did not
//apply the settings to the new tweet
//prepends the template to the post when tweet button is clicked
// $('.button').on('click', function () {
//     $('#stream').prepend(addNewTweet);
// });
// <---------------------------------------------------------->

//makes the tweet actions show up on mouseover
// $('.tweet').mouseover(function() {
//   $('.tweet-actions').fadeIn(300);
// })

//makes the tweet actions disappear on mouseout
// $('.tweet').mouseout(function() {
//   $('.tweet-actions').fadeOut(300);
// });

$('.tweet').on('mouseenter', function() {
  $(this).find('.tweet-actions').show();
});

$('.tweet').on('mouseleave', function() {
    $(this).find('.tweet-actions').hide();
});

// <---------------------------------------------------------->

$('.tweet').on('mouseenter', function() {
  $(this).find('.stats').show();

});

$('.tweet').on('mouseleave', function() {
  $(this).find('.stats').hide();
});







});
