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
    var firstName = $("#userFirstName").val();
    var lastName = $("#userLastName").val();
    var fullName = firstName + " " + lastName;
    var userAge = parseInt($("#age").val());
    var poundsGoal = parseInt($("#userPoundInput").val());
    var preferredActivity = $("#userActivityChoice").val();
    var userWeight = parseInt($("#userScaleWeight").val());
    var calsGoal = poundsToCalories(poundsGoal);
    var kiloWeight = convertPounds(userWeight);
    var timeNeededToWorkout = Math.ceil(activityChoice(preferredActivity, kiloWeight, calsGoal));

    if ((firstName === "") || (lastName === "") || ($("#userScaleWeight").val()==="") || (preferredActivity === "") || ($("#userPoundInput").val()==="") || ($("#age").val()==="")){
      alert ("Oops, please enter values in all fields.");
    } else {
      if (userAge < 50){
        var weeksOfWorkout = parseInt(timeNeededToWorkout/6);
        var hoursLeftOver = timeNeededToWorkout%6;
        $("#result").empty();
        $("#result").show();
        $("#result").append('<h3>Congratulations, ' + fullName + '!</h3><p>We are here to help you meet your goals. To lose ' + poundsGoal + 'lbs, you will want to go ' + preferredActivity + ' for a total of ' + timeNeededToWorkout + ' hours. This can be broken up into ' + weeksOfWorkout + ' weeks and ' + hoursLeftOver + ' hours for 3 times a week and 2 hours per day.</p>');
      } else if (userAge >= 50) {
        $("#result").empty();
        $("#result").show();
        var weeksOfWorkout = parseInt(timeNeededToWorkout/4);
        var hoursLeftOver = timeNeededToWorkout%4;
        $("#result").append('<h3>Congratulations, ' + fullName + '!</h3><p>We are here to help you meet your goals. To lose ' + poundsGoal + 'lbs, you will want to go ' + preferredActivity + ' for a total of ' + timeNeededToWorkout + ' hours. This can be broken up into ' + weeksOfWorkout + ' weeks and ' + hoursLeftOver + ' hours for 2 times a week and 2 hours per day.</p>');
      };
    };
  });
});
