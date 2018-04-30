


function Start() {

    $('#test').on({

    mouseenter: function () { $('#DasBild').prop('src', 'https://jepen84.github.io/github.io/images/ice_t.gif') },
    mouseleave: function () { $('#DasBild').prop('src', 'https://jepen84.github.io/github.io/images/static_ice.png') }

  });
    
    $('#zicht').on({

    mouseenter: function () { $('#Bild').prop('src', 'https://jepen84.github.io/github.io/images/flag1500.gif') },
    mouseleave: function () { $('#Bild').prop('src', 'https://jepen84.github.io/github.io/images/static_ice.png') }
 });
}

$(Start);




