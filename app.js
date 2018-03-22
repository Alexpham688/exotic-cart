$(function() {

  var itemCount = 0;
  var priceTotal = 0;
  //adding item to cart
  $('.add').on('click', function() {
    //fly to cart animate
    var cart = $('.open');
    //targeting each image seperately
    var imgdrag = $(this).parent('.item').find('img').eq(0);
    if(imgdrag) {
      //cloning image ad offset to where cloned image goes
      var imgclone = imgdrag.clone().offset({
        top: imgdrag.offset().top,
        left: imgdrag.offset().left
        //setting css properties to image when cloned
      }).css({
        'opacity': '0.6',
        'position': 'absolute',
        'height': '300px',
        'width': '300px',
        'z-index': '999'
        //setting image size and appending cloned imaged to cart
      }).appendTo($('body')).animate({
        'top': cart.offset().top + 5,
        'left': cart.offset().left + 7,
        'width': 100,
        'height': 100
      }, 1000, 'easeInOutExpo');
      //setting effect to cart and time that effects takes place
      setTimeout(function(){
        cart.effect('shake', {
          times: 3
        }, 200);
      }, 1500);
      //setting animate cloned image size right before going to cart
      imgclone.animate({
        'width': 10,
        'height': 10
      }, function(){
        $(this).detach()
      });
    }
    //setting time where item count appears
    setTimeout(function(){
      itemCount++;
      $('.item-count').html(itemCount).css('display', 'block')
    }, 1600);

    //appending remove button to cart
    $(this).siblings().clone().appendTo('.cart-items').append
    ('<button class="remove-item">Remove Item</button>');

    //calculating total price
    var price = parseInt($(this).siblings().find('.price').html());
    priceTotal += price;
    $('.cart-total').html('Total: $ ' + priceTotal);
 });
    //open cart
    $('.open').on('click', function() {
      $('#shopping-cart').fadeIn(600);
    });
    //close cart
    $('.close').on('click', function() {
      $('#shopping-cart').fadeOut();
    });
    //empty cart
    $('#empty-cart').on('click', function() {
      itemCount = 0;
      priceTotal = 0;
      $('.item-count').html("").css('display', 'none');
      $('.cart-items').html('');
      $('.cart-total').html('Total: $ ' + priceTotal);
    });

    //removing item from cart-total
    $('#shopping-cart').on('click','.remove-item', function() {
      $(this).parent().fadeOut(500);
      itemCount-- ;
      $('.item-count').html(itemCount);


    //remove cost of deleleted items
    var price = parseInt($(this).siblings().find('.price').html());
    priceTotal -= price;
    $('.cart-total').html('Total: $ ' + priceTotal);

    // if(itemCount === 1) {
    //   $('.open').css('color', 'blue');
    // }

    if(itemCount === 1) {
      $('.open').css('color', 'white' );

    } else if (itemCount === 0 ){
      $('.item-count').css('display', 'none');
      $('.cart-total').html('BUY SOMETHING!');
      $('.open').css('color', 'grey');
    }

  });
  //filtering out each element by class
  $('nav li a').on('click', function() {
    var exotic = $(this).attr('class');
    //reset the active on all buttons
    $('nav li a').removeClass('active');
    //then update active to clicked button
    $(this).parent().addClass('active');
    if(exotic === 'all-exotics') {
      //show all elements
      $('#item-container').children('.item').show(500);
    } else {
      //hide all elements that don't share class
      $('#item-container').children('.item:not(.' + exotic +')').hide(300);
      // then show all elements that share class
      $('#item-container').children('div.' + exotic).show(500);
    }
    return false;
  });
});
