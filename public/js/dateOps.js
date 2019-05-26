var my_date = new Date(2016, 9, 20);

Date.prototype.addDay = function(days){
  this.setDate( this.getDate() + days);
  return this;
}
Date.prototype.addYear = function(years){
  this.setFullYear( this.getFullYear() + years);
  return this;
}
console.log(my_date);
console.log(my_date.addDay(42));
console.log(my_date.addYear(10));

