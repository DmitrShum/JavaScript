  'use strict';
  // function sum(a) {
  //     return function (b) {
  //         return function (c) {
  //         	console.log(a.lenght);
  //             return a + b + c;
  //         }
  //     }
  // }
  // console.log(sum(5)(10)(1));

 const sum = fn => {
 const next = (...args) => {
   return x => {
     if (!x) {
       return args.reduce((acc, a) => {
         return fn.call(fn, acc, a)
       }, 0);
     }
     return next(...args, x);
   };
 };
 return next();
};

const sSum = sum((x, y) => x + y);
console.log(sSum(1)(3)(4)(2)(5)());