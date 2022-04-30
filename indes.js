
'use strict' ;

let employeeForm = document.getElementById ('employeeForm');
let div = document.getElementById ('div');
console.log (div)
let EA = [];

function Employee( id, fullName, department, level, imgURL,salary) {
    this.id = Math.floor(1000 + Math.random() * 9000);
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.salary = this.chooseSalary();
    this.imgURL = imgURL;
    
     EA.push (this);
     console.log(EA)
}
 
Employee.prototype.inSalary = function (min, max) {
    let salary = Math.floor(Math.random() * (max - min)) + min;
    return (salary);   
}


Employee.prototype.NetSalary = function (salary) {
    return (salary) * 92.5/100 ;
}

 
Employee.prototype.chooseSalary = function () {
    let salary;
    if (this.level == "Senior")
        salary = this.inSalary(1500, 2000);
    else if (this.level == "Mid-Senior")
        salary = this.inSalary(1000, 1500);
    else
        salary = this.inSalary(500, 1000);

    return this.NetSalary(salary);
}

 
Employee.prototype.Render = function () {
    document.write(`<p>${this.fullName}  Salary is  ${this.chooseSalary()}</p>`);
}


Employee.prototype.render = function () {
    console.log("hello")
    let name = document.createElement ('h3');console.log ();
    name.textContent = this.fullName;
    div.appendChild (name);
    name.style.background = 'grey'


    let img = document.createElement ("img");
    img.src = this.imgURL
    div.appendChild (img);
    img.style.width = '50px';

    
    
    let EID = document.createElement ('id')
    EID.textContent = ("ID :" +this.id)
    div.appendChild (EID)

    let Sal = document.createElement ('h4')
    Sal.textContent = ("Salary :"+this.salary)
    div.appendChild (Sal)

    let D = document.createElement ('h3')
    D.textContent = (this.department+"--"+this.level)
    div.appendChild (D)
    D.style.background = 'Red'

    
}

Employee.prototype.NetSalary = function (salary) {
    return (salary) * 92.5/100 ;  
}

let GhaziSamer = new Employee ('1000', "GhaziSamer" , "Administration", "Senior","./assests/Ghazi.jpg",1800 );
let LanaAli = new Employee ("1001", "Lana Ali", "Finance", "Senior","./assests/Lana.jpg",1729);
let TamaraAyoub = new Employee ("1002","Tamara Ayoub", "Marketing", "Senior","./assests/Tamara.jpg",1555);
let SafiWalid = new Employee("1003", "Safi Walid", "Administration", "Mid-Senior","assests/Safi.jpg",1398);
let OmarZaid = new Employee ("1004", "Omar Zaid", "Development", "Senior","assests/Omar.jpg",1688 );
let RanaSaleh = new Employee ("1005", "Rana Saleh", "Development", "Junior","assests/Rana.jpg",981);
let HadiAhmad = new Employee ("1006", "Hadi Ahmad", "Finance", "Mid-Senior","assests/Hadi.jpg",1441);


employeeForm.addEventListener("submit", handelSubmit);

function handelSubmit (event) {
   event.preventDefault();
   console.log("Form event", event);

   let fullName = event.target.fullName.value;
   let department = event.target.department.value;
   let level = event.target.level.value;
   let imgURL = event.target.ImageURL;
   
   let newempolye = new Employee ( fullName, department, level, imgURL ,"data:image/jpeg;base64,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", );

   newempolye.render();saveData(EA);
}   
         
function saveData(data) {

    let StringObj = JSON.stringify(data);
    localStorage.setItem("EMPLOYEE", StringObj);

}
saveData(EA);

function getData() {
    let retrievedData = localStorage.getItem("EMPLOYEE");
    let arrayData = JSON.parse(retrievedData);
    if (arrayData != null) {
        for (let i = 0; i < arrayData.length; i++) {
            new Employee (arrayData[i].fullName, arrayData[i].department, arrayData[i].imageUrl, arrayData[i].EmployeeId, arrayData[i].salary);
        }
        
    }  
}
getData();

function renderAll() {
     
    for (let i = 0; i < EA.length; i++) {
        EA[i].render();
    }
}

 renderAll();
 newempolye.render();
 
 


 