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

var imageArray = ["images/polls-min.png","images/polls-chart.png","images/slashdot.png"];
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


 function launchWS(winName) {
  //window height and width
  myHeight = screen.height*.80;
  myWidth = 784;

  //widow height bounds
  if ( myHeight < 556 ) {
   myHeight = 556;
  } else if (myHeight>700) {
   myHeight = 700;
  }

  //get screen size, and cacl center screen positioning
  var height = screen.height;
  var width = screen.width;
  var leftpos = width / 2 - myWidth / 2;
  var toppos = (height / 2 - myHeight / 2) - 40;

  //open window
  msgWindow=window.open(winName,"ws_window","toolbar=no,location=no,directories=no,resizable=yes,menubar=no,scrollbars=no,status=yes,width="+ myWidth + ",height="+ myHeight + ", left="+ leftpos + ",top=" + toppos);

  //focus window
  setTimeout('msgWindow.focus()',1);
 }
