// Only enable if the document has a long scroll bar
// Note the window height + offset
if ( ($(window).height() + 100) < $(document).height() ) {
    $('#top-link-block').removeClass('hidden').affix({
        // how far to scroll down before link "slides" into view
        offset: {top:100}
    });
}
 $('#top').click(function(){
        $('html,body').animate({scrollTop:0},'fast');return false;
    });
// swap images on home page

var myImage = document.getElementById("mainImage1");

var imageArray = ["images/dice-jobs-widget.png","images/top-ads-rail.png","images/polls-min.png","images/slashdot.png"];
var imageIndex = 0;

function changeImage() {
	myImage.setAttribute("src",imageArray[imageIndex]);
	imageIndex++;
	if (imageIndex >= imageArray.length) {
		imageIndex = 0;
	}
}

// setInterval is also in milliseconds
var intervalHandle = setInterval(changeImage,5000);

myImage.onclick =  function() {
	clearInterval(intervalHandle);
};