function Activity (participatedActivity, metValue, weight) {
  this.participatedActivity = participatedActivity;
  this.metValue = metValue;
  this.weight = weight;
};

Activity.prototype.timeCalculator = function() {
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





$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var poundsGoal = $("#userPoundInput").val();
    var preferredActivity = $("#userActivityChoice").val();
    var userWeight = $("#userScaleWeight").val();
    var
    poundsToCalories(poundsGoal);
    console.log(poundsGoal);
  });
});
