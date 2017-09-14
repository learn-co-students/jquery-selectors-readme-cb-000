$(document).ready(function() {


  function paragraphSelector() {

    var p = $('p');
    console.log(p);
    return p;
  }

  function lastImageSelector() {
    var img = $('img').last();
    console.log(img);
    return img;
  }

  function ninjaBabySelector() {
    var ninja = $('#baby-ninja');
    console.log(ninja);
    return ninja;

  }

  function divSelector() {
    var div = $('div.pics');
    console.log(div);
    return div;

  }

  function firstListItem() {
    var li = $('ul li').first();
    console.log(li);
    return li;
  }


});
