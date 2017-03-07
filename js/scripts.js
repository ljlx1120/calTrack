function Activity (participatedActivity, metValue, weight, time) {
  this.participatedActivity = participatedActivity;
  this.metValue = metValue;
  this.weight = weight;
  this.time = time;
};


Activity.prototype.calCalculator = function() {
  console.log("calCalculator")
  var caloriesBurned = this.metValue * this.weight * this.time;
  console.log(caloriesBurned);
  return caloriesBurned;
};

Activity.prototype.lbCalculator = function() {
  var poundsBurned = caloriesBurned/4000;
  return poundsBurned;
}

function convertMinToHours(hours, minutes) {
  var hoursOfExcercise = hours + minutes/60;
  return hoursOfExcercise;
};

function convertPounds(pounds) {
  var weightInKilos = pounds * .453592;
  return weightInKilos;
};

function activityChoice (userActivity, weight, time) {
  if(userActivity === "biking"){
    console.log("Made it in the if")
    var biking = new Activity ("biking", 8.0, weight, time);
    biking.calCalculator();
    console.log(biking.weight);
    console.log(biking.time);
    console.log(biking.calCalculator());

  } else {
    console.log("at end of activityChoice");
  };
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
    var kilos = convertPounds(userWeight);
    var hours = convertMinToHours(userTimeHours, userTimeMinutes);
    console.log(kilos);
    console.log(hours);
    activityChoice(userActivity, kilos, hours);


    // var rockclimbing = new Activity ("climbing", 9.5, weightInKilos, hoursOfExcercise);
    // var hiking = new Activity ("hiking", 6.0, weightInKilos, hoursOfExcercise);
    // var running = new Activity ("running", 7.5, weightInKilos, hoursOfExcercise);
    // var walking = new Activity ("walking", 3.8, weightInKilos, hoursOfExcercise);
    // var yoga = new Activity ("yoga", 3.0, weightInKilos, hoursOfExcercise);
    // var skiing = new Activity ("skiing", 7.0, weightInKilos, hoursOfExcercise);
    // var snowboarding = new Activity ("snowboarding", 7.0, weightInKilos, hoursOfExcercise);
    // var watchingSports = new Activity ("watching", 1.5, weightInKilos, hoursOfExcercise);
    // var groceryShopping = new Activity ("grocery", 2.10, weightInKilos, hoursOfExcercise);
    // var takingEpicodusClass = new Activity ("epicodus", 2.17, weightInKilos, hoursOfExcercise);


  });
});
