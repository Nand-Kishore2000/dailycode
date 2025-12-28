// TYPES

type Employee  = {
    name: string;
    department: string;
}

type Manager = {
    name   : string;
    department: string
}

type TeamLead  = Employee & Manager


function InsertTL(tl:TeamLead): string{
    let id = ''
    return id;
}




// type UserType = {
//     name:string;
//     age: number | boolean;
// }

// function printId(id: UserType){
//     console.log("ID",id);

// }


//INTERFACES

// interface User {
//     firstName: string;
//     lastName:string;
//     age:number;
//     email:string;
// }

// function isLegal(user: User): boolean{
//  if(user.age >= 18){
//     return true;
//  }
//  return false;
// }

// const ans = isLegal({firstName:"Nandkishore", lastName:"chhimpa",age:21, email:"email"});

// ans ? console.log("TRUE") : console.log("FALSE");
