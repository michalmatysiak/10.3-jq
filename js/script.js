$(function(){

  var carouselList = $("#slider ul");
  setInterval(changeSlidePrev, 4000);
  function changeSlidePrev(){
    carouselList.animate({'marginLeft':-1200}, 500, moveFirstSlide)
  };
 
  
  function moveFirstSlide(){
    var firstItem = carouselList.find("li:first");
    var lastItem = carouselList.find("li:last");
    lastItem.after(firstItem);
    carouselList.css({marginLeft:-600});
  };

  function changeSlideNext(){
    carouselList.animate({'marginLeft':0}, 500, moveLastSlide)
  };
 
  
  function moveLastSlide(){
    var firstItem = carouselList.find("li:first");
    var lastItem = carouselList.find("li:last");
    firstItem.before(lastItem);
    carouselList.css({marginLeft:-600});
  };

  $(".prev").click(changeSlidePrev);
  $(".next").click(changeSlideNext);
  
});
