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
  var poundsBurned = caloriesBurned/3500;
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
    $("img#bike").animate({
            left: '250px',
            opacity: '.75',
            height: '150px',
            width: '150px'
        }, 2000);
    var biking = new Activity ("biking", 8.0, weight, time);
    return biking.calCalculator();
  } else if (userActivity === "rockclimbing"){
    $("img#climb").animate({
            left: '250px',
            opacity: '.75',
            height: '150px',
            width: '150px'
        }, 2000);
    var rockclimbing = new Activity ("climbing", 9.5, weight, time);
    return rockclimbing.calCalculator();
  } else if (userActivity === "hiking") {
    $("img#hike").animate({
            left: '250px',
            opacity: '.75',
            height: '150px',
            width: '150px'
        }, 2000);
    var hiking = new Activity ("hiking", 6.0, weight, time);
    return hiking.calCalculator();
  } else if (userActivity === "running"){
    $("img#run").animate({
            left: '250px',
            opacity: '.75',
            height: '150px',
            width: '150px'
        }, 2000);
    var running = new Activity ("running", 7.5, weight, time);
    return running.calCalculator();
  } else if (userActivity === "walking"){
    $("img#walk").animate({
            left: '250px',
            opacity: '.75',
            height: '150px',
            width: '150px'
        }, 2000);
    var walking = new Activity ("walking", 3.8, weight, time);
    return walking.calCalculator();
  } else if (userActivity === "yoga"){
    $("img#yoga").animate({
            left: '250px',
            opacity: '.75',
            height: '150px',
            width: '150px'
        }, 2000);
    var yoga = new Activity ("yoga", 3.0, weight, time);
    return yoga.calCalculator();
  } else if (userActivity === "snowboarding"){
    $("img#snowboard").animate({
            left: '250px',
            opacity: '.75',
            height: '150px',
            width: '150px'
        }, 2000);
    var snowboarding = new Activity ("snowboarding", 7.0, weight, time);
    return snowboarding.calCalculator();
  } else if (userActivity === "watching"){
    $("img#watch").animate({
            left: '250px',
            opacity: '.75',
            height: '150px',
            width: '150px'
        }, 2000);
    var watchingSports = new Activity ("watching", 1.5, weight, time);
    return watchingSports.calCalculator();
  } else if (userActivity === "grocery"){
    $("img#grocery").animate({
            left: '250px',
            opacity: '.75',
            height: '150px',
            width: '150px'
        }, 2000);
    var groceryShopping = new Activity ("grocery", 2.10, weight, time);
    return groceryShopping.calCalculator();
  } else if (userActivity === "epicodus"){
    $("img#epicodus").animate({
            left: '250px',
            opacity: '.75',
            height: '150px',
            width: '150px'
        }, 2000);
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
    var poundsBurned = caloriesToPounds(caloriesExpended);
    var finalLbsBurned = poundsBurned.toFixed(2);
    if ((userFirstName === "") || (userLastName === "") || ($("#userWeight").val()==="") || (userActivity === "")){
      alert ("Oops, please enter values in all fields.");
    } else {
      $("#show").empty();
      $("#show").show();
      $("#show").append('<h3>Congratulations, ' + userFullName + '!</h3>' + '<h4>During your ' + hours.toFixed(2) + ' hour(s) ' + userActivity + ' session, you burned ' + finalCalsBurned + ' calories! This translates to ' + finalLbsBurned + ' pounds!</h4>');
    };
  });
});
