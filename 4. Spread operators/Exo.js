// 1. Make a clone of "arr1,arr2" by using spread operator ;
const Arr1 = ["a","b"];
const Arr2 = ["a","b"];
const Arr3 = [...Arr1,...Arr2];
console.log(Arr3);

// 2. make a clone of "user" object by using spread operator;
const user = {
    username:"kadergb",
    password: 3990900,
}
console.log(user);
const cloneUser = {...user};
console.log(cloneUser);

