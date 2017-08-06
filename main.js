$(document).ready(function(){

  let total = 0
  let increase = 1
  let cost = 10
  let clickCost = 100
  let clicks = 0
  let cookie = [total, increase, clicks]

  if (total < cost) {
     $('#left_button')
     .prop('disabled', true)
  }
  if (total < clickCost) {
     $('#right_button')
     .prop('disabled', true)
  }

  if (Cookies.get('game')) {
    cookie = Cookies.getJSON('game')
    total = cookie[0]
    increase = cookie[1]
    clicks = cookie[2]
    $('#total_score')
    .html('Total: ' + total)
    }
    if (total === 0 && increase === 1 && clicks === 0) {
       $('#reset_button')
       .prop('disabled', true)
       .css({
         'background-color': 'rgba(160, 160, 160, 0.87)'
       })
    }
   setInterval (() => {
     Cookies.set('game', [total, increase, clicks], {expires: 7, path: ''}),
    1000 })

   $('#reset_button').click(() => {
     Cookies.remove('game', { secure: true });
     total = 0
     increase = 1
     clicks = 0
    $('#total_score')
    .html('Total: ' + total)
    $('#numberClicker')
    .html('Autoclickers: ' + clicks)
    $('#button')
    .html('+' + increase)
    $('#reset_button')
     .prop('disabled', true)
     .css({
       'background-color': 'rgba(160, 160, 160, 0.87)'
     })
   $('#left_button')
    .prop('disabled', true)
 .css({
   'animation-name': 'none',
   'animation-duration': 'none',
   'animation-iteration-count': 'none',
   'animation-direction': 'none',
   'background-color': 'rgba(160, 160, 160, 0.87)'
 });
 $('#right_button')
  .prop('disabled', true)
 .css({
   'animation-name': 'none',
   'animation-duration': 'none',
   'animation-iteration-count': 'none',
   'animation-direction': 'none',
   'background-color': 'rgba(160, 160, 160, 0.87)'
 }
 )
   })
   $('#left_button').click(() => {
     $('#reset_button')
      .prop('disabled', false)
      .css({
      'background-color': 'white'
      })
     if (cost <= total) {
       total = total - cost
     $('#total_score')
     .html('Total: ' + total)
       increase = increase * 1.2
     $('#button')
     .html('+' + increase)
     }
     if (total < cost) {
       this.animated = false
        $('#left_button')
         .prop('disabled', true)
      .css({
        'animation-name': 'none',
        'animation-duration': 'none',
        'animation-iteration-count': 'none',
        'animation-direction': 'none',
        'background-color': 'rgba(160, 160, 160, 0.87)'
      })
     }
   })
  $('#right_button').click(() => {
    $('#reset_button')
      .prop('disabled', false)
      .css({
      'background-color': 'white'
      })
    if (clickCost <= total) {
      total = total - clickCost
      $('#total_score')
     .html('Total: ' + total)
      clicks++
      $('#numberClicker')
     .html('Autoclickers: ' + clicks)
      setInterval(function () { document.getElementById('button').click() }, 1000)
    }
    if (total < clickCost * 2) {
      $('#right_button')
       .prop('disabled', true)
      .css({
        'animation-name': 'none',
        'animation-duration': 'none',
        'animation-iteration-count': 'none',
        'animation-direction': 'none',
        'background-color': 'rgba(160, 160, 160, 0.87)'
      }
      )
    }
  })
    $('#button').click(() => {
      $('#reset_button')
       .prop('disabled', false)
       .css({
       'background-color': 'white'
       })
      total = total + increase
      $('#total_score')
      .html('Total: ' + total)
      if (cost <= total) {
        this.animated = true
        $('#left_button')
        .prop('disabled', false)
        .css({
          'animation-name': 'colors',
          'animation-duration': '0.5s',
          'animation-iteration-count': 'infinite',
          'animation-direction': 'alternate',
          'background-color': 'white'
        }
        )
      }
      if (clickCost <= total) {
        $('#right_button')
          .prop('disabled', false)
        .css({
          'animation-name': 'colors',
          'animation-duration': '0.5s',
          'animation-iteration-count': 'infinite',
          'animation-direction': 'alternate',
          'background-color': 'white'
        }
        )
      }
    })
})
