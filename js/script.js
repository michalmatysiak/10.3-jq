
$(function(){

  var carouselList = $("#slider ul");
  setInterval(changeSlide, 4000);
  function changeSlide(){
    carouselList.animate({'marginLeft':-600}, 500, moveFirstSlide)
  };
  
  function moveFirstSlide(){
    var firstItem = carouselList.find("li:first");
    var lastItem = carouselList.find("li:last");
    lastItem.after(firstItem);
    carouselList.css({marginLeft:0});
  };


  $(".next").click(changeSlide);
  
  
});
