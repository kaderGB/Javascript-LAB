//function, Array, obf:

const giveMe4=(a,b,c,d) => {
    console.log('a',a);
    console.log('b',b);
    console.log('c',c);
    console.log('d',d);
}

const testArr = ["red","green","yellow","purple"];
giveMe4(2,3,2,5);
giveMe4(...testArr);  //...Spread operator 