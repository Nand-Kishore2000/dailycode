
interface User{
    name:string;
    age:number;
}

function sumAge(user1:User, user2:User){
    return user1.age + user2.age;
}

const ram:User = {
    name:"Ram",
    age:21
}

const shyam : User = {
    name: "shyam",
    age:22,
}
console.log(sumAge(ram, shyam));


 





// function delayFn1(fn: ()=> void){
//     setTimeout(()=> {
//         fn()
//     },1000);
// }

// delayFn1(function(){ 
//     console.log("Hello world")
// })

// function delayFn(fn: ()=> number){

//     setTimeout(()=> {
//         fn()
//     },1000);

// }

// delayFn(function(){ 
//     console.log("Hello world")
//     return 5;
// })




// function greet(name:string | number){
//     console.log(`Hello ${name}`)
// }

// greet("Nandkishore");
// greet(5);


// function sum(a: number,b:number): number{
//     return a+b;
// }

// const answer = sum(4,5);
// console.log("Sum:", answer)


// function sumStr(a: string,b:number): string{
//     return a+b;
// }

// const str = sumStr("4",5); // "1" + 2 => 12 
// console.log("Sum:", str)



// // number, string, any
// let x:any = 1;
// x = "dfsdfsdf"
// x = true
