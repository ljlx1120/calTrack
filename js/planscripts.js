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
    $("img#bike").animate({
            left: '250px',
            opacity: '.75',
            height: '150px',
            width: '150px'
        }, 2000);
    var biking = new Activity ("biking", 8.0, kiloWeight);
    return biking.timeCalculator(calsGoal);
  } else if (userActivity === "rockclimbing"){
    $("img#climb").animate({
            left: '250px',
            opacity: '.75',
            height: '150px',
            width: '150px'
        }, 2000);
    var rockclimbing = new Activity ("climbing", 9.5, kiloWeight);
    return rockclimbing.timeCalculator(calsGoal);
  } else if (userActivity === "hiking") {
    $("img#hike").animate({
            left: '250px',
            opacity: '.75',
            height: '150px',
            width: '150px'
        }, 2000);
    var hiking = new Activity ("hiking", 6.0, kiloWeight);
    return hiking.timeCalculator(calsGoal);
  } else if (userActivity === "running"){
    $("img#run").animate({
            left: '250px',
            opacity: '.75',
            height: '150px',
            width: '150px'
        }, 2000);
    var running = new Activity ("running", 7.5, kiloWeight);
    return running.timeCalculator(calsGoal);
  } else if (userActivity === "walking"){
    $("img#walk").animate({
            left: '250px',
            opacity: '.75',
            height: '150px',
            width: '150px'
        }, 2000);
    var walking = new Activity ("walking", 3.8, kiloWeight);
    return walking.timeCalculator(calsGoal);
  } else if (userActivity === "do yoga"){
    $("img#yoga").animate({
            left: '250px',
            opacity: '.75',
            height: '150px',
            width: '150px'
        }, 2000);
    var yoga = new Activity ("yoga", 3.0, kiloWeight);
    return yoga.timeCalculator(calsGoal);
  } else if (userActivity === "snowboarding"){
    $("img#snowboard").animate({
            left: '250px',
            opacity: '.75',
            height: '150px',
            width: '150px'
        }, 2000);
    var snowboarding = new Activity ("snowboarding", 7.0, kiloWeight);
    return snowboarding.timeCalculator(calsGoal);
  } else if (userActivity === "watch sports"){
    $("img#watch").animate({
            left: '250px',
            opacity: '.75',
            height: '150px',
            width: '150px'
        }, 2000);
    var watchingSports = new Activity ("watching", 1.5, kiloWeight);
    return watchingSports.timeCalculator(calsGoal);
  } else if (userActivity === "grocery shopping"){
    $("img#grocery").animate({
            left: '250px',
            opacity: '.75',
            height: '150px',
            width: '150px'
        }, 2000);
    var groceryShopping = new Activity ("grocery", 2.10, kiloWeight);
    return groceryShopping.timeCalculator(calsGoal);
  } else if (userActivity === "to epicodus class"){
    $("img#epicodus").animate({
            left: '250px',
            opacity: '.75',
            height: '150px',
            width: '150px'
        }, 2000);
    var takingEpicodusClass = new Activity ("epicodus", 2.17, kiloWeight);
    return takingEpicodusClass.timeCalculator(calsGoal);
  };
};
function bmr (gender, weight, height, age) {
  if (gender === "male"){
    var maleBmr = (66 +(6.23*weight)+(12.7 * height) - (6.8* age));
    return maleBmr;
  } else if (gender ==="female"){
    var femaleBmr = (655 +(4.35*weight)+(4.7 * height) - (4.7 * age));
    return femaleBmr;
  } else if (gender === "other") {
    var otherBmr = (655 +(4.35*weight)+(4.7 * height) - (4.7 * age));
    return otherBmr;
  };
};

function bmi (weight, height) {
  var userBmi = (weight * 703)/(height*height);
  console.log(userBmi);
  return userBmi;
};


$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    $(".thumb").addClass(".thumb");
    var userAge = parseInt($("#userAge").val());
    var userHeight = $("#userHeight").val();
    var userGender = $('input[name=group1]:checked').val();
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
    var userBMR = Math.ceil(bmr(userGender,userWeight,userHeight,userAge));
    console.log(userBMR);
    var userBMI = Math.ceil(bmi(userWeight,userHeight));
    console.log(userBMI);
    if ((firstName === "") || (lastName === "") || ($("#userScaleWeight").val()==="") || (preferredActivity === "") || ($("#userPoundInput").val()==="") || ($("#age").val()==="")){
      alert ("Oops, please enter values in all fields.");
    } else {
      if (userAge < 50){
        var weeksOfWorkout = parseInt(timeNeededToWorkout/6);
        var hoursLeftOver = timeNeededToWorkout%6;
        $("#result").empty();
        $("#result").show();
        $("#result").append('<h3>Congratulations, ' + fullName + "!</h3><p>We're here to help you meet your goals! Given your goal of losing " + poundsGoal + ' pounds, you will want to go ' + preferredActivity + ' for a total of ' + timeNeededToWorkout + " hours. Don't worry!  This can be broken up into three sessions a week for two hours per session.  Keep this up for " + weeksOfWorkout + ' weeks and ' + hoursLeftOver + " hours and you'll reach your goal!  However, we've also calculated your Basal Metabolic Rate and BMI (<strong>" + userBMI + "</strong>) so be sure to maintain a healthy diet and never exceed " + userBMR + " calories per day!</p><p>Note: <br><ul><li>BMI < 18.5: underweight</li> <li>18.5 < BMI < 24.9: normal</li><li>25 < BMI < 29.9: overweight</li><li>BMI > 30: obese</li></p>");
      } else if (userAge >= 50) {
        $("#result").empty();
        $("#result").show();
        var weeksOfWorkout = parseInt(timeNeededToWorkout/4);
        var hoursLeftOver = timeNeededToWorkout%4;
        $("#result").append('<h3>Congratulations, ' + fullName + "!</h3><p>We're here to help you meet your goals! Given your goal of losing " + poundsGoal + ' pounds, you will want to go ' + preferredActivity + ' for a total of ' + timeNeededToWorkout + " hours. Don't worry!  This can be broken up into two sessions a week for two hours per session.  Keep this up for " + weeksOfWorkout + ' weeks and ' + hoursLeftOver + " hours and you'll reach your goal!  However, we've also calculated your Basal Metabolic Rate and BMI (<strong>" + userBMI + "</strong>) so be sure to maintain a healthy diet and never exceed " + userBMR + " calories per day!</p><p>Note: <br><ul><li>BMI < 18.5: underweight</li> <li>18.5 < BMI < 24.9: normal</li><li>25 < BMI < 29.9: overweight</li><li>BMI > 30: obese</li></p>");
      };
    };
  });

  $("#clickme").click(function(event){
  event.preventDefault();
  $("#mealpics").toggle();
  });
});
