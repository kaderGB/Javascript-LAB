const Arr1 = ["one","two","three"];
const Arr2 = ["four","five"];
const concat = [...Arr1,...Arr2];
console.log(concat);



//ADD ELEMENT ON ARRAY WITH SPREAD
let peoples = ["aziz","rema","chris"];
let Allpeps = ["ali",...peoples,"antoine"];
console.log(Allpeps);