

Biking 8.0
Rock-climbing 9.5
Hiking 6.0
Running 7.5
Walking 3.8
Yoga 3.0
Skiing, Snowboarding 7.0
Watching sports 1.5
Grocery shopping 2.10
Taking Epicodus class 2.17


function Activity (participatedActivity, metValue) {
  this.participatedActivity = participatedActivity;
  this.metValue = metValue;
}

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

$(document)
