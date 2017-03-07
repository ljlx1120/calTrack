Calories = METS x weight (kg) x time (hours) Notes: Because 1 MET is equal to 1 kcal / kg / hour it is relatively easy to calculate energy expenditure of different physical activities. Using the formula above, you can estimate the energy expenditure value for any activity as long as you know the METS.



function calorieCalculator() {
  var caloriesBurned = mets * weightInKilos * hoursOfExcercise;
  return caloriesBurned
};









function convertMinToHours(minutes) {
  var hoursOfExcercise = minutes/60;
  return hoursOfExcercise;
};

function convertPounds(pounds) {
  var weightInKilos = pounds * .453592;
  return weightInKilos;
};
