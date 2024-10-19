// function fizzBuzz(n) {
//     for (let i = 1; i <= n; i++) {
//       if (i % 15 === 0) {
//         console.log('FizzBuzz');
//       } else if (i % 3 === 0) {
//         console.log('Fizz');
//       } else if (i % 5 === 0) {
//         console.log('Buzz');
//       } else {
//         console.log(i);
//       }
//     }
//   }


// fizzBuzz(20);

function fizzBuzz(n) {
  for (let i = 0; i < n; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
      console.log("fizzBuzz");
    }
    else if (i % 3 === 0) {
      console.log("fizz");
    }
    else if (i % 5 === 0) {
      console.log("buzz");
    }
    else {
      console.log(i);
    }

    switch (n) {
      case 1: (n % 3 === 0 && n % 5 === 0)
        {
          console.log("FizzBuzz");
        }
      case 2: (n % 3 === 0)
        {
          console.lof(Fizz);

        }

      case 3: (n % 5 === 0)
        {
          console.log("Buzz");

        }
      default:
        {
          console.log(n);
        }
    }

  }

}

fizzBuzz(65);

