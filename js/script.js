// var foo = 'bar';

// function bar() {
//     var foo = 'baz';
//     function baz(foo) {
//         foo = 'bam';
//         bam = 'yay';
//     }
//     baz();
// }

// bar();
// console.log(foo);  //
// console.log(bam);  //

















// kek = 'kek';

// var foo = function bar() {
//     var food = 'baz';

//     function baz() {
//         kek = '123';
//     }
//     baz();

// }

// foo();

















// function foo() {
//     console.log(bar);
// }

// function baz() {
//     var bar = 'bar';
//     foo();
// }

// baz();
















// a;
// b;
// var a = b;
// var b = 2;
// b;
// a;


// result :

// var a;
// var b;
// a;
// b;
// a = b;
// b = 2;
// a;
// b;























// var a = b();

// a;
// c;

// function b() {
//     return c;
// };

// var d = function() {
//     return b();
// };





























// function foo() {
//     var bar = 'bar1';
//     baz();
// }

// function baz() {
//     console.log(this.bar);
// }

// var bar = 'bar2';

// foo();


























// function foo() {
//     var bar = 'bar1';
//     this.baz = baz;
//     this.baz();
// }

// function baz() {
//     console.log(this.bar);
// }

// var bar = 'bar2';

// foo();



















































// function bind(fn, o) {
//     return function() {
//         fn.call(o);
//     };
// };




// if (!Function.prototype.bind2) {
//     Function.prototype.bind2 = function(o) {
//         var fn = this;
//         console.log(fn);
//         return function() {
//             return fn.apply(o, arguments);
//         };
//     };
// }

































// function foo() {
//     this.baz = 'baz';
//     console.log(this.bar + ' ' + baz);
// }

// var baz = 'bar';
// var baz = new foo(); 


























// function foo() {
//     var bar = 'bar';

//     return function() {
//         console.log(bar);
//     }
// }

// function bam() {
//     foo()();
// }

// bam();





























