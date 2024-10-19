$(function() {
  // jQuery goes here...

  // Uncomment this line to fade out the red box on page load
  // $(".red-box").fadeOut(2000);
  // $(".green-box").fadeOut(2000);
  // $(".red-box").fadeIn(2000); 
  // $(".red-box").fadeTo(2000, 0.5);


  // Q. I want you to fade them from left to right to 20% opacity for the red box, then 50% opacity for the

// green box and 80% opacity for the blue box.

// $(".red-box").fadeOut(2000);
// $(".blue-box").fadeOut(2000);
// $(".green-box").fadeOut(2000);

// $(".red-box").fadeIn(2000);
// $(".blue-box").fadeIn(2000);
// $(".green-box").fadeIn(2000);

// $(".red-box").fadeTo(2000, 0.2);
// $(".blue-box").fadeTo(2000 , 0.8);
// $(".green-box").fadeTo(2000, 0.5);

// $(".red-box").fadeToggle();
// $(".red-box").fadeToggle(); 

// $(".green-box").fadeOut(2000); // fadepout and realign
// $(".red-box").fadeTo(2000, 0); // invisible  - other arangement does't change


// $(".red-box").hide();  // Its hide it by display= none.
// $(".red-box").show();
// $(".blue-box").show();  //Its show by removing

// $(".blue-box").toggle();  // it was show oposite

// $(".blue-box").hide(1000);
// $(".blue-box").show(1000);

// $("p").hide();
// $("p").slideDown(2000); 

//animation


  // $(".blue-box").animate({
  //   "margin-left" : "+=200px"
  // }, 1000, "linear");  // snack walk due to linear

  // $(".blue-box").animate({
  //   "margin-left" : "-=200px"
  // }, 1000, "linear");


  //Move left and fade

  // $(".blue-box").animate({
  //   "margin-left" : "200px",
  //   "opacity" : "0",
  //   "height" : "50px",
  //   "width" : "50px",
  //   "top-margin" : "25px"

  // }, 1000, "linear");

  // $(".blue-box").animate({
  //   marginLeft : "200px",
  //   opacity : "0",
  //   height : "50px",
  //   width : "50px",
  //   topMargin : "25px"

  // }, 1000, "linear");

  //Increase paragraph font size in 1 sec

  // $("p").animate({
  //   fontSize : "25px"
  // }, 1000); 

  

  //DELAYING AND CHAINING

  // $(".red-box").fadeTo(1000, 0.2);
  // $(".green-box").delay(1000).fadeTo(1000, 0.5);
  // $(".blue-box").delay(2000).fadeTo(1000, 0.8).fadeOut().delay(500).fadeIn();


  //CALLBACK FUNCTION

  // $(".red-box").fadeTo(1000,0, function(){
  //   $(".green-box").fadeTo(1000,0, function(){
  //     $(".blue-box").fadeTo(1000,0, function(){

  //     });
  //   });
  // });
  


  //LIGHT BOX

  // $(".lightbox").delay(500).fadeIn(1000);

  // $("p").css("background-color", "rgba(180,180,30,0.8)"); // color the paragraph

    //  $("#list").css("background-color", "rgba(180,180,30,0.8)"); 

    //ACCept type

//  $("input:text").css("background-color", "rgba(180,180,30,0.8)"); 

//  $("input:email").css("background-color", "rgba(180,180,30,0.8)"); // not work but work in square breacket

// $("input[type ='email']").css("background-color", "rgba(180,180,30,0.8)");   // now it will work with square bracket

// $("#list").find("li").css("background-color", "rgba(180,180,30,0.8");

// $("#list").children("li").css("background-color", "rgba(180,180,30,0.8"); // all main method

// $("#list").parents().css("background-color", "rgba(180,180,30,0.8");

// $("#list").siblings().css("background-color", "rgba(180,180,30,0.8");  // item on same level

// $("#list").siblings("p").css("background-color", "rgba(180,180,30,0.8"); // paragraph on same level

// $("#list").prev().css("background-color", "rgba(180,180,30,0.8");  // previous of list

  // $("#list").next().css("background-color", "rgba(180,180,30,0.8");  // next to list

  // $("#list").prev().next().css("background-color", "rgba(180,180,30,0.8");  // original 


  //jQuery methods for filtering

  // $("#list").find("li").filter(":even").css("background-color", "rgba(180,180,30,0.8"); //select every second list item
  $("#list").children("li").filter(":even").css("background-color", "rgba(180,180,30,0.8");  


 });

 //Reverse an string using aray

//  let str = "hello this is dhiraj";
//  str = str.split(" ")   // str to aray using split()
// let ar =[];

//  for( let i of str)
//  {
//   ar.unshift(i);
//  }
//  console.log(ar.join(' '));  // arrey to string using  join




