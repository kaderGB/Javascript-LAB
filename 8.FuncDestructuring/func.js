const Obj = {
    name:"kader",
    IsPerson:true,
    age:28
}

function ready (Obj){
    console.log(`${Obj.name}`);
    console.log(`${Obj.IsPerson}`);
    console.log(`${Obj.age}`);
}
ready(Obj);



//Second example
const options = {
    title:"My Menu",
    items:["item1","item2"],
}

function show({title, height: h=100,width:w=100,items:[item1, item2]} ){
    console.log(`${title} ${h} ${w}` );
    console.log(item1);
}

show(options);