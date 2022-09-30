//Type1: -x+a=b, where x is unknown, a and b are constants
function simpleEquationType1(){
  do{
    var x = getRndInteger(2,12);
    var a = getRndInteger(1,10);
    var b = -x + a;
  }while(b<=0)
  var question = "$$-x" + value2Constant(a) + "=" + b + "$$";
  var answer = x;
  var fractionOfAnswer = [];
  var numerator = "";
  var denominator = "";
  return{question, answer, numerator, denominator};
}

//Type2: -ax+b=c, where x is unknown, a, b and c are constants
function simpleEquationType2(){
    var a = getRndInteger(-2,-6);
    var b = getRndInteger(-12,-1);
    var c = getRndInteger(2, 15);
    var x = (c-b)/a;
    var question = "$$" + value2FirstCoe(a) + "x" + value2Constant(b) + "=" + c + "$$";
    var answer = x;
    var numerator = (c-b)/gcd_two_numbers(c-b,a);
    var denominator = a/gcd_two_numbers(c-b,a);
    return{question, answer, numerator, denominator};
}

//Type3: a-x=b, where x is unknown, a and b are constants
function simpleEquationType3(){
  var unknowns = [
    "a", "b", "d", "h", "m", "n", "p", "r", "s", "t", "x", "x", "x", "x", "x", "y", "z"
  ];
  var unknownNumber = getRndInteger(0, 16);
  do{
    var a = getRndInteger(1,15);
    var b = getRndInteger(2,15);
    var x = a-b;
  }while(x==0)
    var question = "$$" + a + "-" + unknowns[unknownNumber] + "=" + b + "$$";
    var answer = x;
    var numerator = x;
    var denominator = 1;
    return{question, answer, numerator, denominator};
}

//Type4: a-bx=c, where x is unknown, a, b and c are constants
function simpleEquationType4(){
  var unknowns = [
    "a", "b", "d", "h", "m", "n", "p", "r", "s", "t", "x", "x", "x", "x", "x", "y", "z"
  ];
  var unknownNumber = getRndInteger(0,16);
  do{
    var a = getRndInteger(4,24);
    var b = getRndInteger(2,6);
    var x = getRndInteger(-6,-2);
    var c = a-b*x;
  }while(c<=0)
    var question = "$$" + a + "-" + b + unknowns[unknownNumber] + "=" + c + "$$";
    var answer = x;
    var numerator = x;
    var denominator = 1;
    return{question, answer, numerator, denominator};
}

//Type5: a-bx=c, where x is unknown, a, b and (c<0) are constants
function simpleEquationType5(){
  var unknowns = [
    "a", "b", "d", "h", "m", "n", "p", "r", "s", "t", "x", "x", "x", "x", "x", "y", "z"
  ];
  var unknownNumber = getRndInteger(0,16);
  do{
    var a = getRndInteger(4,24);
    var b = getRndInteger(2,6);
    var x = getRndInteger(2,8);
    var c = a-b*x;
  }while(c>=0)
    var question = "$$" + a + "-" + b + unknowns[unknownNumber] + "=" + c + "$$";
    var answer = x;
    var numerator = x;
    var denominator = 1;
    return{question, answer, numerator, denominator};
}

//Type6: (x-a)/b=c, where x is unknown, a, b and c are constants
function simpleEquationType6(){
  var unknowns = [
    "a", "b", "d", "h", "m", "n", "p", "r", "s", "t", "x", "x", "x", "x", "x", "y", "z"
  ];
  var unknownNumber = getRndInteger(0,16);
    var a = getRndInteger(2,15);
    var b = getRndInteger(2,6);
    var c = getRndInteger(3,10);
    var x = b*c+a;
    var question = "$$\\frac{x-" + a + "}{" + b + "}=" + c + "$$";
    var answer = x;
    var numerator = x;
    var denominator = 1;
    return{question, answer, numerator, denominator};
}

//Type7: (x+a)/b=c, where x is unknown, a, b and c are constants
function simpleEquationType7(){
  var unknowns = [
    "a", "b", "d", "h", "m", "n", "p", "r", "s", "t", "x", "x", "x", "x", "x", "y", "z"
  ];
  var unknownNumber = getRndInteger(0,16);
  do{
    var a = getRndInteger(2,15);
    var b = getRndInteger(2,6);
    var c = getRndInteger(-10,10);
    var x = b*c-a;
  }while(Math.abs(c)<=3)
    var question = "$$\\frac{x+" + a + "}{" + b + "}=" + c + "$$";
    var answer = x;
    var numerator = x;
    var denominator = 1;
    return{question, answer, numerator, denominator};
}

//Type8: x/a+b=c, where x is unknown, a, b and c are constants
function simpleEquationType8(){
  var unknowns = [
    "a", "b", "d", "h", "m", "n", "p", "r", "s", "t", "x", "x", "x", "x", "x", "y", "z"
  ];
  var unknownNumber = getRndInteger(0,16);
  do{
    var a = getRndInteger(2,8);
    var b = getRndInteger(-15,15);
    var c = getRndInteger(2,12);
    var x = (c-b)*a;
  }while(Math.abs(b)<=2 || b==c)
    var question = "$$\\frac{" + unknowns[unknownNumber] + "}{" + a + "}" + value2Constant(b) + "=" + c + "$$";
    var answer = x;
    var numerator = x;
    var denominator = 1;
    return{question, answer, numerator, denominator};
}

//Type9: ax/b+c=d, where x is unknown, a, b, c and d are constants
function simpleEquationType9(){
  var unknowns = [
    "a", "b", "d", "h", "m", "n", "p", "r", "s", "t", "x", "x", "x", "x", "x", "y", "z"
  ];
  var unknownNumber = getRndInteger(0,16);
  do{
    var a = getRndInteger(2,8);
    var b = getRndInteger(2,8);
    var c = getRndInteger(-12,12);
    var d = getRndInteger(-15,15)
    var x = (d-c)*b/a;
  }while(c==0 || d==0 || c==d || gcd_two_numbers(a,b)!=1)
    var question = "$$\\frac{" + a + unknowns[unknownNumber] + "}{" + b + "}" + value2Constant(c) + "=" + d + "$$";
    var answer = x;
    var numerator = (d-c)*b/gcd_two_numbers((d-c)*b,a);
    var denominator = a/gcd_two_numbers((d-c)*b,a);
    return{question, answer, numerator, denominator};
}

//Type10: a(x+b)=ac, where x is unknown, a, b, c and d are constants
function simpleEquationType10(){
  var unknowns = [
    "a", "b", "d", "h", "m", "n", "p", "r", "s", "t", "x", "x", "x", "x", "x", "y", "z"
  ];
  var unknownNumber = getRndInteger(0,16);
  do{
    var a = getRndInteger(2,8);
    var b = getRndInteger(-12,12);
    var c = getRndInteger(2,10);
    var x = c-b;
  }while(b==0)
    var question = "$$" + a + "(" + unknowns[unknownNumber] + value2Constant(b) + ")=" + a*c + "$$";
    var answer = x;
    var numerator = x;
    var denominator = 1;
    return{question, answer, numerator, denominator};
}

//Type11: ab(x+c)=ad, where x is unknown, a, b, c and d are constants
function simpleEquationType11(){
  var unknowns = [
    "a", "b", "d", "h", "m", "n", "p", "r", "s", "t", "x", "x", "x", "x", "x", "y", "z"
  ];
  var unknownNumber = getRndInteger(0,16);
  do{
    var a = getRndInteger(2,5);
    var b = getRndInteger(-5,5);
    var c = getRndInteger(-12,12);
    var d = getRndInteger(2,9);
    var x = (d-b*c)/b;
  }while(Math.abs(b)<=2 || x==0 || c==0 || b==d || gcd_two_numbers(b,d)!=1)
    var question = "$$" + a*b + "(" + unknowns[unknownNumber] + value2Constant(c) + ")=" + a*d + "$$";
    var answer = x;
    var numerator = d-b*c;
    var denominator = b;
    return{question, answer, numerator, denominator};
}

//Type12: a(bx+c)=a*d, where x is unknown, a, b, c and d are constants
function simpleEquationType12(){
  var unknowns = [
    "a", "b", "d", "h", "m", "n", "p", "r", "s", "t", "x", "x", "x", "x", "x", "y", "z"
  ];
  var unknownNumber = getRndInteger(0,16);
  do{
    var a = getRndInteger(2,8);
    var b = getRndInteger(2,6);
    var c = getRndInteger(-10,10);
    var d = getRndInteger(-9,9);
    var x = (d-c)/b;
  }while(Math.abs(d)<=1 || x==0 || c==0 || gcd_two_numbers(b,c)!=1)
    var question = "$$" + a + "(" + value2FirstCoe(b) + unknowns[unknownNumber] + value2Constant(c) + ")=" + a*d + "$$";
    var answer = x;
    var numerator = d-c;
    var denominator = b;
    return{question, answer, numerator, denominator};
}

//Type13: a-(bx+c)=d, where x is unknown, a, b, c and d are constants
function simpleEquationType13(){
  var unknowns = [
    "a", "b", "d", "h", "m", "n", "p", "r", "s", "t", "x", "x", "x", "x", "x", "y", "z"
  ];
  var unknownNumber = getRndInteger(0,16);
  do{
    var a = getRndInteger(3,9);
    var b = getRndInteger(2,5);
    var c = getRndInteger(-10,10);
    var d = getRndInteger(3,12);
    var x = (a-d-c)/b;
  }while(Math.abs(c)<=1 || x==0 || gcd_two_numbers(b,c)!=1 || a==d)
    var question = "$$" + a + "-(" + value2FirstCoe(b) + unknowns[unknownNumber] + value2Constant(c) + ")=" + d + "$$";
    var answer = x;
    var numerator = a-d-c;
    var denominator = b;
    return{question, answer, numerator, denominator};
}

//Type14: a-(c+bx)=d, where x is unknown, a, b<0, c and d are constants
function simpleEquationType14(){
  var unknowns = [
    "a", "b", "d", "h", "m", "n", "p", "r", "s", "t", "x", "x", "x", "x", "x", "y", "z"
  ];
  var unknownNumber = getRndInteger(0,16);
  do{
    var a = getRndInteger(3,9);
    var b = getRndInteger(-5,-2);
    var c = getRndInteger(2,10);
    var d = getRndInteger(3,12);
    var x = (a-d-c)/b;
  }while(x==0 || gcd_two_numbers(b,c)!=1)
    var question = "$$" + a + "-(" + c + value2Coe(b) + unknowns[unknownNumber] + ")=" + d + "$$";
    var answer = x;
    var numerator = a-d-c;
    var denominator = b;
    return{question, answer, numerator, denominator};
}

//Type15: a(x+b)/c=a*d, where x is unknown, a, b<0, c and d are constants
function simpleEquationType15(){
  var unknowns = [
    "a", "b", "d", "h", "m", "n", "p", "r", "s", "t", "x", "x", "x", "x", "x", "y", "z"
  ];
  var unknownNumber = getRndInteger(0,16);
  do{
    var a = getRndInteger(2,8);
    var b = getRndInteger(-10,10);
    var c = getRndInteger(2,8);
    var d = getRndInteger(-6,6);
    var x = c*d-b;
  }while(b==0 || x==0 || gcd_two_numbers(a,c)!=1 || d==0)
    var question = "$$\\frac{" + a + "(" + unknowns[unknownNumber] + value2Constant(b) + ")}{" + c + "}=" + a*d + "$$";
    var answer = x;
    var numerator = x;
    var denominator = 1;
    return{question, answer, numerator, denominator};
}

//Type16: ax+b/c=d, where x is unknown, a, b<0, c and d are constants
function simpleEquationType16(){
  var unknowns = [
    "a", "b", "d", "h", "m", "n", "p", "r", "s", "t", "x", "x", "x", "x", "x", "y", "z"
  ];
  var unknownNumber = getRndInteger(0,16);
  do{
    var a = getRndInteger(2,9);
    var b = getRndInteger(-25,25);
    var c = getRndInteger(2,8);
    var d = getRndInteger(3,12);
    var x = (c*d-b)/a;
  }while(b==0 || x==0 || gcd_two_numbers(a,b)!=1)
    var question = "$$\\frac{" + a + unknowns[unknownNumber] + value2Constant(b) + "}{" + c + "}=" + d + "$$";
    var answer = x;
    var numerator = (c*d-b)/gcd_two_numbers(c*d-b,a);
    var denominator = a/gcd_two_numbers(c*d-b,a);
    return{question, answer, numerator, denominator};
}

//Type17: ax+b/c=d/e, where x is unknown, a, b<0, c and d are constants
function simpleEquationType17(){
  var unknowns = [
    "a", "b", "d", "h", "m", "n", "p", "r", "s", "t", "x", "x", "x", "x", "x", "y", "z"
  ];
  var unknownNumber = getRndInteger(0,16);
  do{
    var a = getRndInteger(2,9);
    var b = getRndInteger(-25,25);
    var c = getRndInteger(2,8);
    var d = getRndInteger(1,5);
    var e = getRndInteger(2,6);
    var x = (c*d-b*e)/(a*e);
  }while(b==0 || x==0 || gcd_two_numbers(a,b)!=1 || gcd_two_numbers(d,e)!=1 || c==e)
    var question = "$$\\frac{" + a + unknowns[unknownNumber] + value2Constant(b) + "}{" + c + "}=\\frac{" + d + "}{" + e + "}$$";
    var answer = x;
    var numerator = (c*d-b*e)/gcd_two_numbers(c*d-b*e,a*e);
    var denominator = (a*e)/gcd_two_numbers(c*d-b*e,a*e);
    return{question, answer, numerator, denominator};
}

//Type18: ax+b/c=-d/e, where x is unknown, a, b<0, c and d are constants
function simpleEquationType18(){
  var unknowns = [
    "a", "b", "d", "h", "m", "n", "p", "r", "s", "t", "x", "x", "x", "x", "x", "y", "z"
  ];
  var unknownNumber = getRndInteger(0,16);
  do{
    var a = getRndInteger(2,9);
    var b = getRndInteger(-25,25);
    var c = getRndInteger(2,8);
    var d = getRndInteger(1,5);
    var e = getRndInteger(2,6);
    var x = (-c*d-b*e)/(a*e);
  }while(b==0 || x==0 || gcd_two_numbers(a,b)!=1 || gcd_two_numbers(d,e)!=1 || c==e)
    var question = "$$\\frac{" + a + unknowns[unknownNumber] + value2Constant(b) + "}{" + c + "}=-\\frac{" + d + "}{" + e + "}$$";
    var answer = x;
    var numerator = (-c*d-b*e)/(gcd_two_numbers((-c*d-b*e),a*e));
    var denominator = (a*e)/(gcd_two_numbers((-c*d-b*e),a*e));
    return{question, answer, numerator, denominator};
}

//Type19: (1/a)*(b-x)=c
function simpleEquationType19(){
  var unknowns = [
    "a", "b", "d", "h", "m", "n", "p", "r", "s", "t", "x", "x", "x", "x", "x", "y", "z"
  ];
  var unknownNumber = getRndInteger(0,16);
  do{
    var a = getRndInteger(2,8);
    var b = getRndInteger(1,9);
    var c = getRndInteger(-8,8);
    var x = b-a*c;
  }while(c==0 || x==0)
    var question = "$$\\frac{" + 1 + "}{" + a + "}" + "(" + b +　"-" + unknowns[unknownNumber] + ")=" + c + "$$";
    var answer = x;
    var numerator = x;
    var denominator = 1;
    return{question, answer, numerator, denominator};
}

//Type20: (a/b)*(c-dx)=e
function simpleEquationType20(){
  var unknowns = [
    "a", "b", "d", "h", "m", "n", "p", "r", "s", "t", "x", "x", "x", "x", "x", "y", "z"
  ];
  var unknownNumber = getRndInteger(0,16);
  do{
    var a = getRndInteger(1,5);
    var b = getRndInteger(2,8);
    var c = getRndInteger(1,12);
    var d = getRndInteger(2,6);
    var e = getRndInteger(1,15);
    var x = (b*e-a*c)/(-a*d);
  }while(x==0 || gcd_two_numbers(c,d)!=1 || gcd_two_numbers(a,b)!=1 || a==e)
    var question = "$$\\frac{" + a + "}{" + b + "}" + "(" + c +　"-" + d + unknowns[unknownNumber] + ")=" + e + "$$";
    var answer = x;
    var numerator = (b*e-a*c)/gcd_two_numbers(b*e-a*c,-a*d);
    var denominator = (-a*d)/gcd_two_numbers(b*e-a*c,-a*d);
    return{question, answer, numerator, denominator};
}

//Type21: a(bx+c)/d=e
function simpleEquationType21(){
  var unknowns = [
    "a", "b", "d", "h", "m", "n", "p", "r", "s", "t", "x", "x", "x", "x", "x", "y", "z"
  ];
  var unknownNumber = getRndInteger(0,16);
  do{
    var a = getRndInteger(2,6);
    var b = getRndInteger(2,6);
    var c = getRndInteger(-12,12);
    var d = getRndInteger(2,5);
    var e = getRndInteger(-20,20)
    var x = (d*e-a*c)/(a*b);
  }while(c==0 || e==0 || x==0 || gcd_two_numbers(b,c)!=1 || gcd_two_numbers(a,d)!=1)
    var question = "$$" + "\\frac{" + a + "(" + b + unknowns[unknownNumber] + value2Constant(c) + ")}{" + d + "}=" + e + "$$";
    var answer = x;
    var numerator = (d*e-a*c)/gcd_two_numbers(d*e-a*c,a*b);
    var denominator = (a*b)/gcd_two_numbers(d*e-a*c,a*b);
    return{question, answer, numerator, denominator};
}

//Type22: a(b-cx)/d=e
function simpleEquationType22(){
  var unknowns = [
    "a", "b", "d", "h", "m", "n", "p", "r", "s", "t", "x", "x", "x", "x", "x", "y", "z"
  ];
  var unknownNumber = getRndInteger(0,16);
  do{
    var a = getRndInteger(2,6);
    var b = getRndInteger(2,12);
    var c = getRndInteger(2,6);
    var d = getRndInteger(2,5);
    var e = getRndInteger(-20,20)
    var x = (d*e-a*b)/(-a*c);
  }while(e==0 || x==0 || gcd_two_numbers(b,c)!=1 || gcd_two_numbers(a,d)!=1)
    var question = "$$" + "\\frac{" + a + "(" + b + "-" + c + unknowns[unknownNumber] + ")}{" + d + "}=" + e + "$$";
    var answer = x;
    var numerator = (d*e-a*b)/gcd_two_numbers(d*e-a*b,-a*c);
    var denominator = (-a*c)/gcd_two_numbers(d*e-a*b,-a*c);
    return{question, answer, numerator, denominator};
}

//Type23: (x+a)/b+c=d
function simpleEquationType23(){
  var unknowns = [
    "a", "b", "d", "h", "m", "n", "p", "r", "s", "t", "x", "x", "x", "x", "x", "y", "z"
  ];
  var unknownNumber = getRndInteger(0,16);
  do{
    var a = getRndInteger(-12,12);
    var b = getRndInteger(2,6);
    var c = getRndInteger(-18,18);
    var d = getRndInteger(1,24);
    var x = (d-c)*b-a;
  }while(a==0 || x==0 || c==0 || c==d)
    var question = "$$" + "\\frac{" + unknowns[unknownNumber] + value2Constant(a) + "}{" + b + "}" + value2Constant(c) + "=" + d + "$$";
    var answer = x;
    var numerator = x;
    var denominator = 1;
    return{question, answer, numerator, denominator};
}

//Type24: (ax+b)/c+d=e
function simpleEquationType24(){
  var unknowns = [
    "a", "b", "d", "h", "m", "n", "p", "r", "s", "t", "x", "x", "x", "x", "x", "y", "z"
  ];
  var unknownNumber = getRndInteger(0,16);
  do{
    var a = getRndInteger(2,6);
    var b = getRndInteger(-18,18);
    var c = getRndInteger(2,8);
    var d = getRndInteger(-24,24);
    var e = getRndInteger(1,24);
    var x = ((e-d)*c-b)/a;
  }while(b==0 || d==0 || gcd_two_numbers(a,b)!=1 || d==e)
    var question = "$$" + "\\frac{" + a + unknowns[unknownNumber] + value2Constant(b) + "}{" + c + "}" + value2Constant(d) + "=" + e + "$$";
    var answer = x;
    var numerator = ((e-d)*c-b)/gcd_two_numbers((e-d)*c-b,a);
    var denominator = a/gcd_two_numbers((e-d)*c-b,a);
    return{question, answer, numerator, denominator};
}

//Type25: a-(x+b)/c=d
function simpleEquationType25(){
  var unknowns = [
    "a", "b", "d", "h", "m", "n", "p", "r", "s", "t", "x", "x", "x", "x", "x", "y", "z"
  ];
  var unknownNumber = getRndInteger(0,16);
  do{
    var a = getRndInteger(2,18);
    var b = getRndInteger(-12,12);
    var c = getRndInteger(2,8);
    var d = getRndInteger(1,24);
    var x = (a-d)*c-b;
  }while(b==0 || x==0 || a==d)
    var question = "$$" + a + "-\\frac{" + unknowns[unknownNumber] + value2Constant(b) + "}{" + c + "}" + "=" + d + "$$";
    var answer = x;
    var numerator = x;
    var denominator = 1;
    return{question, answer, numerator, denominator};
}

//Type26: a-(b-cx)/d=e
function simpleEquationType26(){
  var unknowns = [
    "a", "b", "d", "h", "m", "n", "p", "r", "s", "t", "x", "x", "x", "x", "x", "y", "z"
  ];
  var unknownNumber = getRndInteger(0,16);
  do{
    var a = getRndInteger(2,18);
    var b = getRndInteger(1,12);
    var c = getRndInteger(2,6);
    var d = getRndInteger(2,8);
    var e = getRndInteger(-12,12);
    var x = ((a-e)*d-b)/(-c);
  }while(e==0 || x==0 || gcd_two_numbers(b,c)!=1 || a==e)
    var question = "$$" + a + "-\\frac{" + b + "-" + c + unknowns[unknownNumber] + "}{" + d + "}" + "=" + e + "$$";
    var answer = x;
    var numerator = ((a-e)*d-b)/gcd_two_numbers((a-e)*d-b,-c);
    var denominator = -c/gcd_two_numbers((a-e)*d-b,-c);
    return{question, answer, numerator, denominator};
}

//Type1: x+x=a
function advancedSimpleEquationType1(){
  var unknowns = [
    "a", "b", "d", "h", "m", "n", "p", "r", "s", "t", "x", "x", "x", "x", "x", "y", "z"
  ];
  var unknownNumber = getRndInteger(0,16);
    var a = getRndInteger(2,32);
    var x = a/2;
    var question = "$$" + unknowns[unknownNumber] + "+" + unknowns[unknownNumber] + "=" + a + "$$";
    var answer = x;
    var numerator = a/gcd_two_numbers(a,2);
    var denominator = 2/gcd_two_numbers(a,2);
    return{question, answer, numerator, denominator};
}

//Type2: ax+bx+c=0
function advancedSimpleEquationType2(){
  var unknowns = [
    "a", "b", "d", "h", "m", "n", "p", "r", "s", "t", "x", "x", "x", "x", "x", "y", "z"
  ];
  var unknownNumber = getRndInteger(0,16);
  do{
    var a = getRndInteger(2,6);
    var b = getRndInteger(-5,5);
    var x = getRndInteger(-8,-1);
    var c = (-a-b)*x;
  }while(a==b || c<=0)
    var question = "$$" + a + unknowns[unknownNumber] + value2Coe(b) + unknowns[unknownNumber] + value2Constant(c) + "=0" + "$$";
    var answer = x;
    var numerator = x;
    var denominator = 1;
    return{question, answer, numerator, denominator};
}

//Type3: ax+bx-c=0
function advancedSimpleEquationType3(){
  var unknowns = [
    "a", "b", "d", "h", "m", "n", "p", "r", "s", "t", "x", "x", "x", "x", "x", "y", "z"
  ];
  var unknownNumber = getRndInteger(0,16);
  do{
    var a = getRndInteger(2,6);
    var b = getRndInteger(-5,5);
    var x = getRndInteger(-8,-1);
    var c = (-a-b)*x;
  }while(a==b || c>=0)
    var question = "$$" + a + unknowns[unknownNumber] + value2Coe(b) + unknowns[unknownNumber] + value2Constant(c) + "=0" + "$$";
    var answer = x;
    var numerator = x;
    var denominator = 1;
    return{question, answer, numerator, denominator};
}

//Type4: ax+b+cx=d
function advancedSimpleEquationType4(){
  var unknowns = [
    "a", "b", "d", "h", "m", "n", "p", "r", "s", "t", "x", "x", "x", "x", "x", "y", "z"
  ];
  var unknownNumber = getRndInteger(0,16);
  do{
    var a = getRndInteger(1,6);
    var b = getRndInteger(-12,12);
    var c = getRndInteger(-9,-2);
    var d = getRndInteger(2,18);
    var x = (d-b)/(a+c)
  }while(b==0 || x==0 || ((gcd_two_numbers(a,b)!=1 && gcd_two_numbers(c,d)!=1) && (gcd_two_numbers(a,b)==gcd_two_numbers(c,d))))
    var question = "$$" + a + unknowns[unknownNumber] + value2Constant(b) + value2Coe(c) + unknowns[unknownNumber] + "=" + d + "$$";
    var answer = x;
    var numerator = (d-b)/gcd_two_numbers(d-b,a+c);
    var denominator = (a+c)/gcd_two_numbers(d-b,a+c);
    return{question, answer, numerator, denominator};
}

//Type5: ax+b=cx
function advancedSimpleEquationType5(){
  var unknowns = [
    "a", "b", "d", "h", "m", "n", "p", "r", "s", "t", "x", "x", "x", "x", "x", "y", "z"
  ];
  var unknownNumber = getRndInteger(0,16);
  do{
    var a = getRndInteger(1,8);
    var x = getRndInteger(-6,6);
    var c = getRndInteger(1,4);
    var b = (c-a)*x;
  }while(a==c || Math.abs(x)<=1 || ((gcd_two_numbers(a,b)!=1 && gcd_two_numbers(b,c)!=1) && (gcd_two_numbers(a,b)==gcd_two_numbers(b,c))))
    var question = "$$" + value2FirstCoe(a) + unknowns[unknownNumber] + value2Constant(b) + "=" + value2FirstCoe(c) + unknowns[unknownNumber] + "$$";
    var answer = x;
    var numerator = x;
    var denominator = 1;
    return{question, answer, numerator, denominator};
}

//Type6: a+bx=cx
function advancedSimpleEquationType6(){
  var unknowns = [
    "a", "b", "d", "h", "m", "n", "p", "r", "s", "t", "x", "x", "x", "x", "x", "y", "z"
  ];
  var unknownNumber = getRndInteger(0,16);
  do{
    var a = getRndInteger(1,8);
    var x = getRndInteger(-6,6);
    var c = getRndInteger(1,4);
    var b = (c-a)*x;
  }while(a==c || Math.abs(x)<=1 || ((gcd_two_numbers(a,b)!=1 && gcd_two_numbers(b,c)!=1) && (gcd_two_numbers(a,b)==gcd_two_numbers(b,c))))
    var question = "$$" + value2FirstCoe(a) + unknowns[unknownNumber] + value2Constant(b) + "=" + value2FirstCoe(c) + unknowns[unknownNumber] + "$$";
    var answer = x;
    var numerator = x;
    var denominator = 1;
    return{question, answer, numerator, denominator};
}

//Type7: ax=b+cx

//Type8: -ax=bx+c

//Type9: a+bx=cx+d

//Type10: ax+b=c+dx

//Type11: ax+(bx+c)=0

//Type12: ax+(bx+c)=d

//Type13: ax-(bx+c)=d

//Type14: ax-(c-bx)=d

//Type15: a(x+b)=c

//Type16: a(b-cx)=a*d

//Type17: a(b-cx)+d=0

//Type18: a-b(c+dx)=0

//Type19: ax=b(c+dx)

//Type20: a(bx+c)=dx

//Type21: a(x+b)=cx+d

//Type22: a(bx+c)=d-ex

//Type23: a(b-cx)=dx-e

//Type24: ax+b=-(c-dx)

//Type25: x+x/a=b

//Type26: x-(1/a)*x=b

//Type27: x/a+x/b=c

//Type28: x/a-x/b=c

//Type29: x=a-bx/c

//Type30: x=(a/b)*x+c

//Type31: a+bx=cx/d

//Type32: ax/b+c=d+ex/f

//Type33: ax+b=cx+d+ex

//Type34: ax+b+cx=d+ex+f

//Type35: a(bx+c)+d(e-fx)=g

//Type36: a(b-cx)=d(x+f)

//Type37: a(b-cx)=d(e-fx)

//Type38: a(b-cx)+d=x+e

//Type39: a(b+cx)+d=e(fx+g)+h

//Type40: a[x+b(c+dx)]=e

//Type41: a[bx+c(d+x)]+e=0

//Type42: a[x+b(c+x)]=dx

//Type43: a[b(x+c)+dx]=ex

//Type44: (x+a)/b=x

//Type45: (x+a)/b = (c/d)*x

//Type46: (x+a)/b = (x+c)/d

//Type47: (ax+b)/c = (d+ex)/f

//Type48: ax/b + c = (dx+e)/f

//Type49: (ax+b)/c-(d/e)*x=f

//Type50: (a-x)/b + (x+c)/d = (x+e)/f

//Type51: x/a + (b+cx)/d = (ex+f)/g + h

// returns H.C.F. of x and y
function gcd_two_numbers(x,y) {
  if ((typeof x !== 'number') || (typeof y !== 'number'))
    return false;
  x = Math.abs(x);
  y = Math.abs(y);
  while(y) {
    var t = y;
    y = x % y;
    x = t;
  }
  return x;
}

// returns a random integer between min and max (both included)
function getRndInteger(min,max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function value2FirstCoe(n){
  if(n<0)
    if(n!=-1)
      return n;
    else
      return "-";
  else if(n>0)
    if(n!=1)
      return n;
    else
      return "";
}

function value2Constant(n){
  if(n>0)
    return "+" + n;
  else if(n<0)
    return "-" + Math.abs(n);
  else
    return "";
}

function value2Coe(n){
  if(n<0)
    if(n!=-1)
      return n;
    else
      return "-";
  else if(n>0)
    if(n!=1)
      return "+" + n;
    else
      return "+";
}

function value2Index(n){
  if(n==1)
    return "";
  else if (n>1)
    return ("^" + n);
}

function checkPrime(n){
  for(let i = 2, s = Math.sqrt(n); i <= s; i++)
        if(n % i === 0) return false;
    return n > 1;
}

//return factors of an integer in accending order
function getFactors(n){
  var str = [];
  var j = 0;
    for (var i = 1; i <= n; i++) {
        if (n % i == 0) {
            str[j] = i;
            j++;
        }
    }
    return str;
}

//return factor combinations of an integer
function getFactorsCombination(num){
  var factorCom = [];
    for(var i=0; i<num.length/2; i++)
      factorCom[i] = [num[i], num[num.length-1-i]];
  return factorCom;
}
