const numbers = [12,78897,7678778,90];
sum=0;

box = function adder (number){
    sum +=number;
}

numbers.forEach(box);
console.log(sum);