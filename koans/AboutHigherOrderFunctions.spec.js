describe("About Higher Order Functions", function () {

  it("should use filter to return array items that meet a criteria", function () {
    var numbers = [1,2,3];
    var odd = numbers.filter(function (x) { return x % 2 !== 0 });

    expect(odd).toEqual(FILL_ME_IN);
    expect(odd.length).toBe(FILL_ME_IN);
    expect(numbers.length).toBe(FILL_ME_IN);
  });

  it("should use 'map' to transform each element", function () {
    var numbers = [1, 2, 3];
    var numbersPlus1 = numbers.map(function(x) { return x + 1 });

    expect(numbersPlus1).toEqual(FILL_ME_IN);
    expect(numbers).toEqual(FILL_ME_IN);
  });

  it("should use 'reduce' to update the same result on each iteration", function () {
    var numbers = [1, 2, 3];
    var reduction = numbers.reduce(
            function(/* result from last call */ memo, /* current */ x) { return memo + x }, /* initial */ 0);

    expect(reduction).toBe(FILL_ME_IN);
    expect(numbers).toEqual(FILL_ME_IN);
  });

  it("should use 'forEach' for simple iteration", function () {
    var numbers = [1,2,3];
    var msg = "";
    var isEven = function (item) {
      msg += (item % 2) === 0;
    };

    numbers.forEach(isEven);

    expect(msg).toEqual(FILL_ME_IN);
    expect(numbers).toEqual(FILL_ME_IN);
  });

  function flattenArray(arr) {
    return arr.reduce(function(prev, curr) {
      if (Array.isArray(curr)) {
        return [...prev, ...curr];
      }

      return [...prev, curr];
    }, []);
  }

  it("should use flatten to make nested arrays easy to work with", function() {
      expect(flattenArray([ [1, 2], [3, 4] , 5])).toEqual(FILL_ME_IN);
  });

  it("should chain multiple higher order functions", function() {
      var result = flattenArray([ [0, 1], [2, 3] ])
        .filter(function(x) { return x % 2 === 0 })
        .map(function(x) { return x + 1 } )
        .reduce(function (sum, x) { return sum + x });

      expect(result).toEqual(FILL_ME_IN);
  });

});

