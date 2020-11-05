// const Operation = (num1, operator, num2) => {

//   result = () => {
//     switch (operator) {
//       case '+':
//         return num1 + num2
//         break;

//       case '-':
//         return num1 - num2
//         break;

//       default:
//         return num1 + num2
//         break;
//     }
//   };

//   return ({
//     num1,
//     operator,
//     num2,
//     result: result()
//   })

// }

// export default Operation;

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
        break;

      case '-':
        return this.num1 - this.num2
        break;

      default:
        return this.num1 + this.num2
        break;
    }
  };
}

export default Operation;


