function Activity (participatedActivity, metValue, weight) {
  this.participatedActivity = participatedActivity;
  this.metValue = metValue;
  this.weight = weight;
};

Activity.prototype.timeCalculator = function(calories) {
  var timeInHours = calories/(this.metValue * this.weight);
  return timeInHours;
};

function poundsToCalories (pounds) {
  var calories = pounds * 3500;
  return calories;
};

function convertPounds(userWeight) {
  var weightInKilos = userWeight * .453592;
  return weightInKilos;
};

function activityChoice (userActivity, kiloWeight, calsGoal) {
  if(userActivity === "biking"){
    var biking = new Activity ("biking", 8.0, kiloWeight);
    return biking.timeCalculator(calsGoal);
  } else if (userActivity === "rockclimbing"){
    var rockclimbing = new Activity ("climbing", 9.5, kiloWeight);
    return rockclimbing.timeCalculator(calsGoal);
  } else if (userActivity === "hiking") {
    var hiking = new Activity ("hiking", 6.0, kiloWeight);
    return hiking.timeCalculator(calsGoal);
  } else if (userActivity === "running"){
    var running = new Activity ("running", 7.5, kiloWeight);
    return running.timeCalculator(calsGoal);
  } else if (userActivity === "walking"){
    var walking = new Activity ("walking", 3.8, kiloWeight);
    return walking.timeCalculator(calsGoal);
  } else if (userActivity === "yoga"){
    var yoga = new Activity ("yoga", 3.0, kiloWeight);
    return yoga.timeCalculator(calsGoal);
  } else if (userActivity === "snowboarding"){
    var snowboarding = new Activity ("snowboarding", 7.0, kiloWeight);
    return snowboarding.timeCalculator(calsGoal);
  } else if (userActivity === "watching"){
    var watchingSports = new Activity ("watching", 1.5, kiloWeight);
    return watchingSports.timeCalculator(calsGoal);
  } else if (userActivity === "grocery"){
    var groceryShopping = new Activity ("grocery", 2.10, kiloWeight);
    return groceryShopping.timeCalculator(calsGoal);
  } else if (userActivity === "epicodus"){
    var takingEpicodusClass = new Activity ("epicodus", 2.17, kiloWeight);
    return takingEpicodusClass.timeCalculator(calsGoal);
  };
};




$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var poundsGoal = parseInt($("#userPoundInput").val());
    var preferredActivity = $("#userActivityChoice").val();
    var userWeight = parseInt($("#userScaleWeight").val());
    var calsGoal = poundsToCalories(poundsGoal);
    var kiloWeight = convertPounds(userWeight);
    console.log(convertPounds(userWeight));
    console.log(poundsToCalories(poundsGoal));
    var timeNeededToWorkout = activityChoice(preferredActivity, kiloWeight, calsGoal);
    console.log(timeNeededToWorkout);

  });
});
