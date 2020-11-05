
class Operation {
  constructor(num1, operator, num2) {
    this.num1 = num1;
    this.operator = operator;
    this.num2 = num2;
  }

  get result() {
    switch (this.operator) {
      case '+':
        return this.num1 + this.num2

      case '-':
        return this.num1 - this.num2

      default:
        return this.num1 + this.num2
    }
  };

  get misleadingResult() {
    const errorRange = 8;
    const min = Math.ceil(this.result - errorRange);
    const max = Math.floor(this.result + errorRange);

    let misleadingResult = Math.floor(Math.random() * (max - min + 1)) + min;
    if (misleadingResult === this.result) {
      console.log("Creating misleading result, it created a random number that is the same as the true result");
      return misleadingResult + errorRange;

    }
    return misleadingResult;

  }
}





//   const getRandomNum = num => {
//     return Math.floor(Math.random() * num);
//   }


//   const createMisleadingResult = result => {
//     // Increase this to make the game harder
//     const errorRange = 2;
//     const min = Math.ceil(result - errorRange);
//     const max = Math.floor(result + errorRange);
//     let misleadingResult = Math.floor(Math.random() * (max - min + 1)) + min;
//     if (misleadingResult === result) {
//       return misleadingResult + 1;

//     }
//     return misleadingResult;
//   };









export default Operation;


