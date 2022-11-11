var ParkingSystem = function(big, medium, small) {
    this.count = [big, medium, small];
};


ParkingSystem.prototype.addCar = function(carType) {
  return this.count[carType - 1]-- > 0;
};
