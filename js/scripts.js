function Activity (participatedActivity, metValue) {
  this.participatedActivity = participatedActivity;
  this.metValue = metValue;
};


var biking = new Activity ("biking", 8.0);
var rockclimbing = new Activity ("climbing", 9.5);
var hiking = new Activity ("hiking", 6.0);
var running = new Activity ("running", 7.5);
var walking = new Activity ("walking", 3.8);
var yoga = new Activity ("yoga", 3.0);
var skiing = new Activity ("skiing", 7.0);
var snowboarding = new Activity ("snowboarding", 7.0);
var watchingSports = new Activity ("watching", 1.5);
var groceryShopping = new Activity ("grocery", 2.10);
var takingEpicodusClass = new Activity ("epicodus", 2.17);




Activity.prototype.calCalculator = function() {
  var caloriesBurned = this.metValue * weightInKilos * hoursOfExcercise;
  return caloriesBurned;
};

Activity.prototype.lbCalculator = function() {
  var poundsBurned = caloriesBurned/4000;
  return poundsBurned;
}

function convertMinToHours(hours, minutes) {
  var hoursOfExcercise = hours + minutes/60;
  console.log(hoursOfExcercise);
  return hoursOfExcercise;
};

function convertPounds(pounds) {
  var weightInKilos = pounds * .453592;
  console.log(weightInKilos);
  return weightInKilos;
};




$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var userFirstName = $("#userFirstName").val();
    var userLastName = $("#userLastName").val();
    var userFullName = userFirstName + " " + userLastName;
    var userWeight = parseInt($("#userWeight").val());
    var userActivity = $("#userActivity").val();
    var userTimeHours = parseInt($("#userTimeHours").val());
    var userTimeMinutes = parseInt($("#userTimeMinutes").val());
    convertPounds(userWeight);
    convertMinToHours(userTimeHours, userTimeMinutes);


  });
});
