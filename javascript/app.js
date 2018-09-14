/*
a parameter is the names listed in the function definition where as
a argument are the values passed into the function

a return is a value that is passed back to the original function call
where as a console log is a output produced to the console that does not
effect the actual code

The function needs to return a value that is within the fuction
*/

const checkPalidrome=(str)=>{
strLower=str.toLowerCase();

  for(let i=0;i<strLower.length/2;i++){
    console.log(i,strLower.length/2);
    if((strLower.length%2!=0) && (i== Math.floor(strLower.length/2))){
      console.log(strLower[i]);
      return true;
    }
    else if(strLower[i] != strLower[str.length-(i+1)]){
      return false;
    }
  }
  return true;
}
console.log(checkPalidrome('Radar'));
const sumDigits=(num)=>{
let str=""+num;
let add=0;
for(let i=0;i<str.length;i++){
    add+= parseInt(str[i]);
}
return(add);
}
console.log(sumDigits(11));

const caculateSide=(sideA,sideB)=>{
  return(Math.sqrt((sideA*sideA)+(sideB*sideB)))
}
console.log(caculateSide(8,6));
const sumArray=(sumFun)=>{
let num=0;
for (let i = 0; i < sumFun.length; i++) {
      num+=sumFun[i]
}
return num;
}
console.log(sumArray([1, 2, 3, 4, 5, 6]));

const checkPrime=(optimus)=>{
  for (let i = 2; i<=Math.sqrt(optimus); i++) {

    if(optimus%i==0){

      return false;
    }



  }
  return true;
}
console.log(checkPrime(89));
const printPrime=(prtprime)=>{
  for (let i = 2; i<=prtprime; i++) {

    if(checkPrime(i)){

      console.log(i);
    }
  }
}
printPrime(100);
