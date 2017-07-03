

var image1 = new Image();
image1.src = "https://jepen84.github.io/github.io/images/ice_t.gif";
var image2 = new Image();
image2.src = "https://jepen84.github.io/github.io/images/ice_t.gif";



$("#hover a span").hover(function () {
    $("#img1").show().attr('src', image1.src);
    $("#img2").show(true).attr('src', image2.src);
}, function () {
    $("#img1").hide();
    $("#img2").hide();

});

