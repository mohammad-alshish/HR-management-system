let employeeForm = document.getElementById ('employeeForm');
let div = document.getElementById ('div');
let table = document.getElementById("table");
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


function renderHedar(){
    let tr =document.createElement("tr");
    table.appendChild(tr);

    let departmentName=document.createElement("th");
    departmentName.textContent=" Department Name  |  ";
    tr.appendChild(departmentName);

    let empNum=document.createElement("th");
    empNum.textContent="  Employee Number  |  ";
    tr.appendChild(empNum);

    let empSlary=document.createElement("th");
    empSlary.textContent="  Employee Salary   ";
    tr.appendChild(empSlary);
}

Employee.prototype.tableBody =function(){
let tr=document.createElement("tr")
table.appendChild(tr);

let namecell=document.createElement("td");
namecell.textContent=this.department
tr.appendChild(namecell);

let empCell=document.createElement("td");
    empCell.textContent=getEmpNum(employeeResult.level);
    tr.appendChild(empCell);

let salaryEmp=document.createElement("td");
salaryEmp.textContent=this.salary;
tr.appendChild(salaryEmp);
}

console.log(employeeResult);
let empnum =[];
function gitEmpNum(){
    for (let i = 0; i < employeeResult.length; i++) {
        empnum = employeeResult.filter();
        
    }
    console.log(empnum);
}
gitEmpNum();
function renderFooter(){
    let tr =document.createElement("tr");
    table.appendChild(tr);

    let departmentName=document.createElement("th");
    departmentName.textContent=" total    ";
    tr.appendChild(departmentName);

    let emptotal=document.createElement("th");
    emptotal.textContent="  total num of employees her    ";
    tr.appendChild(emptotal);

    let salaryTotal=document.createElement("th");
    salaryTotal.textContent="  total Salary   ";
    tr.appendChild(salaryTotal);
}

function renderTableBody(){
    for (let i = 0; i < employeeResult.length; i++) {
        employeeResult[i].tableBody();
    }
}


renderHedar();
render();
renderTableBody();
renderFooter();
