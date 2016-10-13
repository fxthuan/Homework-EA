function shuffle(b){
    var a,x,i;
    for(i=b.length; i;i--){
        a =Math.floor(Math.random() * i);
        x = b[i-1];
        b[i-1]=b[a];
        b[a]= x;
    }
}

var json ='{"employees":[' +
'{"name":"Phan Hoang1","age":"35", "email":"phantichhoang1@gmail.com" },' +
'{"name":"Phan Hoang2","age":"35" , "email":"phantichhoang2@gmail.com"},' +
'{"name":"Phan Hoang3","age":"35" , "email":"phantichhoang3@gmail.com"},' +
'{"name":"Phan Hoang4","age":"35" , "email":"phantichhoang4@gmail.com"},' +
'{"name":"Phan Hoang5","age":"35" , "email":"phantichhoang5@gmail.com"},' +
'{"name":"Phan Hoang6","age":"35" , "email":"phantichhoang6@gmail.com"},' +
'{"name":"Phan Hoang7","age":"35" , "email":"phantichhoang7@gmail.com"},' +
'{"name":"Phan Hoang8","age":"35" , "email":"phantichhoang8@gmail.com"},' +
'{"name":"Phan Hoang9","age":"35" , "email":"phantichhoang9@gmail.com"},' +
'{"name":"Phan Hoang10","age":"35" , "email":"phantichhoang10@gmail.com"},' +
'{"name":"Phan Hoang11","age":"35" , "email":"phantichhoang11@gmail.com"},' +
'{"name":"Phan Hoang12","age":"35" , "email":"phantichhoang12@gmail.com"},' +
'{"name":"Phan Hoang13","age":"35" , "email":"phantichhoang13@gmail.com"},' +
'{"name":"Phan Hoang14","age":"35" , "email":"phantichhoang14@gmail.com"},' +
'{"name":"Phan Hoang15","age":"35" , "email":"phantichhoang15@gmail.com"},' +
'{"name":"Phan Hoang16","age":"35" , "email":"phantichhoang16@gmail.com"},' +
'{"name":"Phan Hoang17","age":"35" , "email":"phantichhoang17@gmail.com"},' +
'{"name":"Phan Hoang18","age":"35" , "email":"phantichhoang18@gmail.com"},' +
'{"name":"Phan Hoang19","age":"35" , "email":"phantichhoang19@gmail.com"},' +
'{"name":"Phan Hoang20","age":"35" , "email":"phantichhoang20@gmail.com"},' +
'{"name":"Phan Hoang21","age":"35" , "email":"phantichhoang21@gmail.com"},' +
'{"name":"Phan Hoang22","age":"35" , "email":"phantichhoang22@gmail.com"},' +
'{"name":"Phan Hoang23","age":"35" , "email":"phantichhoang23@gmail.com"},' +
'{"name":"Phan Hoang24","age":"35" , "email":"phantichhoang24@gmail.com"},' +
'{"name":"Phan Hoang25","age":"35" , "email":"phantichhoang25@gmail.com"},' +
'{"name":"Phan Hoang26","age":"35" , "email":"phantichhoang26@gmail.com"},' +
'{"name":"Phan Hoang27","age":"35" , "email":"phantichhoang27@gmail.com"},' +
'{"name":"Phan Hoang28","age":"35" , "email":"phantichhoang28@gmail.com"},' +
'{"name":"Phan Hoang29","age":"35" , "email":"phantichhoang29@gmail.com"},' +
'{"name":"Phan Hoang30","age":"35" , "email":"phantichhoang30@gmail.com"}]}';

obj = JSON.parse(json);

shuffle(obj.employees);


  var table = document.getElementById("myTable");
                var row = table.insertRow(0);
                var cell1 = row.insertCell(0);
                var cell2 = row.insertCell(1);
                var cell3 = row.insertCell(2);
                cell1.innerHTML = "name";
                cell2.innerHTML = "age";
                cell3.innerHTML = "email";
  
        

    function showRow(){
        var i = 0;
                    for (var j = document.getElementById("myTable").rows.length; j < obj.employees.length+1; j++) {
                i++;
                var table = document.getElementById("myTable");
                var row = table.insertRow(j);
                var cell1 = row.insertCell(0);
                cell1.setAttribute("id", "nameColumn");
                var cell2 = row.insertCell(1);
                cell2.setAttribute("id", "ageColumn");
                var cell3 = row.insertCell(2);
                cell3.setAttribute("id", "emailColumn");

                cell1.innerHTML = obj.employees[j-1].name;
                cell2.innerHTML = obj.employees[j-1].age;
                cell3.innerHTML = obj.employees[j-1].email;
                if (i==3) {
                    break;
                }
            }
            }

            console.log(obj.employees.length);