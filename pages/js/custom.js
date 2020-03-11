// $("#playlistBtn").click(function(){
//   var html = '<div class="card social-card share share-other col1" data-social="item">' +
//                 '<div class="card-content">' +
//                  ' <img alt="Quote" src="assets/img/songs/song1.png">' +
//                 '</div>' +
//                 '<div class="card-description">' +
//                   '<p>Song Name</p>' +
//                 '</div>' +
//                 '<div class="card-footer clearfix">' +
//                   '<div class="time"><a href="#"><i class="fa fa-play-circle" style="font-size: large;"></i></a></div>' +
//                   '<ul class="reactions">' +
//                     '<li><a href="#">5,345 <i class="fa fa-comment-o"></i></a>' +
//                     '</li>' +
//                     '<li><a href="#" data-toggle="modal" data-target="#shoutModal">20k <i class="fa fa-share-square-o"></i></a>' +
//                     '</li>' +
//                     '<li><a href="#">23K <i class="fa fa-heart-o"></i></a>' +
//                     '</li>' +
//                   '</ul>' +
//                 '</div>' +
//               '</div>';
//   // $("#playlists").preappend(html);
// })

$('#btnSearch').on('click', function(){
  var page = $("input[name='destination']:checked"). val();
  window.location.href = page + '.html'
})

$('.display-notification').on('click', function(){
  var message = $(this).data('message')
  $('body').pgNotification({
      style: 'flip',
      message: message,
      position: 'top-right',
      timeout: 3500,
      // type: 'success'
  }).show();
})

// Setup the player
const player = new Plyr('#player', { controls: [
  'play-large', // The large play button in the center
  'restart', // Restart playback
  'rewind', // Rewind by the seek time (default 10 seconds)
  'play', // Play/pause playback
  'fast-forward', // Fast forward by the seek time (default 10 seconds)
  'progress', // The progress bar and scrubber for playback and buffering
  'current-time', // The current time of playback
  // 'duration', // The full duration of the media
  'mute', // Toggle mute
  'volume', // Volume control
  'captions', // Toggle captions
  'settings', // Settings menu
  'pip', // Picture-in-picture (currently Safari only)
  'airplay', // Airplay (currently Safari only)
  'download', // Show a download button with a link to either the current source or a custom URL you specify in your options
  'fullscreen', // Toggle fullscreen
] });

$('.page-container').on('click', '.btn-play', function(){
  $('.btn-pause').each(function(){
    $(this).attr('data-is-played', 0)
    $(this).find('i').removeClass('fa-pause').addClass('fa-play-circle');
    $(this).removeClass('btn-pause').addClass('btn-play');
  })
  

  var isPlayed = $(this).attr('data-is-played');
  if(isPlayed == false) {
    var song = $(this).data('song');
    $(this).attr('data-is-played', 1)
    $('.btn-pause').each(function(){
      $(this).attr('data-is-played', 0)
    })

    player.source = {
        type: 'audio',
        title: 'Example title',
        sources: [
            {
                src: 'assets/audios/' + song + '.mp3',
                type: 'audio/mp3',
            }
        ],
    };
  }

  $(this).find('i').removeClass('fa-play-circle').addClass('fa-pause');
  $(this).removeClass('btn-play').addClass('btn-pause');

  player.play();
})

$('.page-container').on('click', '.btn-pause', function(){
  $(this).find('i').removeClass('fa-pause').addClass('fa-play-circle');
  $(this).removeClass('btn-pause').addClass('btn-play');
  player.pause();
})

$('.btn-like').on('click', function(){
  if($(this).find('i').hasClass('fa-heart-o')){
    $(this).find('i').removeClass('fa-heart-o').addClass('fa-heart');
  }
  else{
    $(this).find('i').removeClass('fa-heart').addClass('fa-heart-o');
  }
})

$('.add-friend').on('click', function(){
  if($(this).text() == 'Add Friend')
    $(this).text('Waiting');
  else
    $(this).text('Add Friend');
})
