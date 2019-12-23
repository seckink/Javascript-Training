const name="Seckin Kaymak";
const department="Agile";
const age=34;


//const output="Name :" + name +  "\n" + "Department :" + department + "\n" + "Age :" + age ;

//const output=`Name:${name}\nDepartment:${department}\nAge:${age}`;


// const htmlOutput="<ul>" +
//                 "<li>" + name + "</li>" +
//                 "<li>" + department + "</li>" + 
//                 "<li>" + age + "</li" + 
//                 "<ul>"


function Test(){
    return "Hello";
}

const htmlOutput=`<ul>
 <li>${name}</li>
 <li>${department}</li>
 <li>${age}</li>
 <li>${10/4}</li>
 <li>${Test()}</li>
</ul>
`;

 document.body.innerHTML=htmlOutput;
console.log(output);