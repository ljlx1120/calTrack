function Activity (participatedActivity, metValue) {
  this.participatedActivity = participatedActivity;
  this.metValue = metValue;
};

var biking = new Activity ("biking", 8.0);
var rockclimbing = new Activity ("rockclimbing", 9.5);
var hiking = new Activity ("hiking", 6.0);
var running = new Activity ("running", 7.5);
var walking = new Activity ("walking", 3.8);
var yoga = new Activity ("yoga", 3.0);
var skiing = new Activity ("skiing", 7.0);
var snowboarding = new Activity ("snowboarding", 7.0);
var watchingSports = new Activity ("watching sports", 1.5);
var groceryShopping = new Activity ("grocery shopping", 2.10);
var takingEpicodusClass = new Activity ("taking epicodus class", 2.17);




Activity.prototype.calCalculator = function() {
  var caloriesBurned = this.metValue * weightInKilos * hoursOfExcercise;
  return caloriesBurned;
};

function convertMinToHours(minutes) {
  var hoursOfExcercise = minutes/60;
  return hoursOfExcercise;
};

function convertPounds(pounds) {
  var weightInKilos = pounds * .453592;
  return weightInKilos;
};




$(document).ready(function(){
  $().submit(function(event){
    event.preventDefault();


  });
});
