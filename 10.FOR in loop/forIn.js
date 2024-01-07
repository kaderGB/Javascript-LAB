const Object = {a:1,b:2,c:3};

for(keys in Object){
    console.log(keys, Object[keys]);
}


const Arr=["a","b","c"];

for(index in Arr){
    console.log(index, Arr[index]);
}