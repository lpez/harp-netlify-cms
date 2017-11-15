jQuery ($) ->
	$(document).ready ->
		today = new Date();
		months = new Array(12);
		months[0] = "Jan";
		months[1] = "Feb";
		months[2] = "Mar";
		months[3] = "Apr";
		months[4] = "May";
		months[5] = "Jun";
		months[6] = "Jul";
		months[7] = "Aug";
		months[8] = "Sep";
		months[9] = "Oct";
		months[10] = "Nov";
		months[11] = "Dec";
		dd = today.getDate()
		mm = today.getMonth()
		$('.calendar-container').html('<p class="calendar">'+dd+'<em>'+months[mm]+'</em></p>')
  $('.carousel').carousel()
  #Enable swiping...
  $(".carousel-inner").swipe
    #Generic swipe handler for all directions
    swipeLeft: (event, direction, distance, duration, fingerCount) ->
      $(this).parent().carousel "next"
    swipeRight: ->
      $(this).parent().carousel "prev"
    #Default is 75px, set to 0 for demo so any distance triggers swipe
    threshold: 0
  $(".lb-outerContainer").swipe
    #Generic swipe handler for all directions
    swipeLeft: (event, direction, distance, duration, fingerCount) ->
      $(this).first "lb-next"
    swipeRight: ->
      $(this).first "lb-prev"
    #Default is 75px, set to 0 for demo so any distance triggers swipe
    threshold: 0
jQuery ($) ->
	$(document).ready ->
		togglePanel = ->
			w = $(window).width()
			if w <= 599
				$('.features').removeClass 'in'
			else
				$('.features').addClass 'in'
			return
	
		$(window).resize ->
			togglePanel()
			return
		togglePanel()
$ ->
  $allVideos = $('iframe[src^=\'//player.vimeo.com\'], iframe[src^=\'//www.youtube.com\'], object, embed')
  $fluidEl = $('figure')
  $allVideos.each ->
    $(this).attr('data-aspectRatio', @height / @width).removeAttr('height').removeAttr 'width'
    return
  $(window).resize(->
    newWidth = $fluidEl.width()
    $allVideos.each ->
      $el = $(this)
      $el.width(newWidth).height newWidth * $el.attr('data-aspectRatio')
      return
    return
  ).resize()
  return
