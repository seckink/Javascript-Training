document.getElementById("ajax").addEventListener("click",getallEmployees);


function getallEmployees(){
    const xhr=new XMLHttpRequest();
    xhr.open("GET","employees.json",true);
    xhr.send();
    xhr.onload=function() {
   
         let list=document.getElementById("employees");
         if(this.status==200){
             //console.log(JSON.parse(this.responseText)); 
             const employees=JSON.parse(this.responseText);
            
              employees.forEach(function(employee){
                 list.innerHTML+=`
                    <tr>
                      <td>${employee.Name}</td>
                      <td>${employee.Department}</td>
                      <td>${employee.Age}</td>
                    </tr>
                   `
                 
  });
          
         }
         

    }

   
}