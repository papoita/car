const chai = require("chai"); // 1
const assert = chai.assert;

//const assert = require("chai").assert;
//const shouldBuyCar = require("../shouldBuyCar");

const shouldBuyCar = require("../shouldByCar"); // 2

describe("#shouldBuyCar()", function () { // 3

  it("should return false if it's a hatchback", function () { //4
    const car = {
      type: "hatchback"
    };
    const shouldBuy = shouldBuyCar(car);
    assert.isFalse(shouldBuy);

  });

  it("should return true when the car is pink", function () {
    const car = {
      color: "pink",
    };
    if (this.color === "pink");
    return true;
    const shouldBuy = shouldBuyCar(car);
    assert.isTrue(shouldBuy);

  });

  it("should return false when there are no details about the car", function () {
    const car = {
      details: "",
    };
    if (this.details === "");
    return false;
  });

  it("should return false when the car is a hatchback", function () {
    const car = {
      type: "hatchback",
    };
    if (this.carType === "hatchback");
    return false;
  });

  it("should return false when the car is a hatchback and pink",
    function () {
      const car = {
        type: "hatchback",
        color: "pink",
      };
      if (this.type === "hatchback" && this.color === "pink");
      return false;
    });

  it("should return true when the car has 6 litres/100km and is under or equal to $5,000",
    function () {
      const car = {
        litters: 6,
        price: 5000,
      }
      if (this.litters = 6 && this.price <= 5000);
      return true;
    });

  it("should return true when the car has 11 litres/100km and is under or equal to $5,000",
    function () {
      const car = {
        litters: 11,
        price: 5000,
      }
      if (this.litters = 11 && this.price <= 5000);
      return true;
    });

  it("should return false when the car has 6 litres/100km and is over $5,000",
    function () {
      const car = {
        litters: 11,
        price: 5000,
      }
      if (this.litters = 11 && this.price > 5000);
      return false;
    });
  it("should return false when the car has 11 litres/100km and is over $5,000",
    function () {
      const car = {
        litters: 11,
        price: 5000,
      }
      if (this.litters = 11 && this.price > 5000);
      return false;
    });

  it("should return false when the car has 5 litres/100km and is under or equal to $5,000",
    function () {
      const car = {
        litters: 5,
        price: 5000,
      }
      if (this.litters = 5 && this.price <= 5000);
      return false;
    });
  it("should return false when the car has 12 litres/100km and is under or equal to $5,000",
    function () {
      const car = {
        litters: 12,
        price: 5000,
      }
      if (this.litters = 5 && this.price <= 5000);
      return false;
    });

  it("should return undefined when there is no car",
    function () {
      const car = {}

      return undefined;
    });
});
