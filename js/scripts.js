function Activity (participatedActivity, metValue, weight, time) {
  this.participatedActivity = participatedActivity;
  this.metValue = metValue;
  this.weight = weight;
  this.time = time;
};


Activity.prototype.calCalculator = function() {
  var caloriesBurned = this.metValue * this.weight * this.time;
  return caloriesBurned;
};

function caloriesToPounds (caloriesBurned) {
  var poundsBurned = caloriesBurned/4000;
  return poundsBurned;
};

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
    var biking = new Activity ("biking", 8.0, weight, time);
    return biking.calCalculator();
  } else if (userActivity === "rockclimbing"){
    var rockclimbing = new Activity ("climbing", 9.5, weight, time);
    return rockclimbing.calCalculator();
  } else if (userActivity === "hiking") {
    var hiking = new Activity ("hiking", 6.0, weight, time);
    return hiking.calCalculator();
  } else if (userActivity === "running"){
    var running = new Activity ("running", 7.5, weight, time);
    return running.calCalculator();
  } else if (userActivity === "walking"){
    var walking = new Activity ("walking", 3.8, weight, time);
    return walking.calCalculator();
  } else if (userActivity === "yoga"){
    var yoga = new Activity ("yoga", 3.0, weight, time);
    return yoga.calCalculator();
  } else if (userActivity === "snowboarding"){
    var snowboarding = new Activity ("snowboarding", 7.0, weight, time);
    return snowboarding.calCalculator();
  } else if (userActivity === "watching"){
    var watchingSports = new Activity ("watching", 1.5, weight, time);
    return watchingSports.calCalculator();
  } else if (userActivity === "grocery"){
    var groceryShopping = new Activity ("grocery", 2.10, weight, time);
    return groceryShopping.calCalculator();
  } else if (userActivity === "epicodus"){
    var takingEpicodusClass = new Activity ("epicodus", 2.17, weight, time);
    return takingEpicodusClass.calCalculator();
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
    var caloriesExpended = activityChoice(userActivity, kilos, hours);
    var finalCalsBurned = Math.ceil(caloriesExpended);
    console.log(finalCalsBurned)
    var poundsBurned = caloriesToPounds(caloriesExpended);
    var finalLbsBurned = poundsBurned.toFixed(2);
    console.log(finalLbsBurned);





  });
});
