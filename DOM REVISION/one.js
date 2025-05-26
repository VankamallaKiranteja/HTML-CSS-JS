//tag names
let divs = document.getElementsByTagName("div");
console.log(divs);//collection of divs
console.log(divs.length);
for (let d of divs) {
  console.log(d.innerHTML);
  d.innerHTML = "<h1>hello man</h1>" + d.innerHTML;
}
console.log(divs[0].innerHTML);
divs[0].innerText = "KING";

for (let k in divs) {
  console.log(k);
}

//quertySelectorAll
let paras = document.querySelectorAll("div p");
console.log(paras); //node list
for (let para of paras) {
  // console.log(d.innerHTML);
  console.log(para.innerText);
  let text = para.innerText;
  let words = text.split(" ");
  console.log(words);
  let str = "";
  for (let word of words) {
    if (word === "para") {
      str += "<b>" + word + "</b> ";

    } else {
      str += word + " ";
    }
  }
  para.innerHTML = str;
};



let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let ul = document.createElement("ul");

for (let a of arr) {
  let li = document.createElement("li");
  li.innerText = `${a} item`;
  // ul.appendChild(li);
  ul.prepend(li);
}
document.body.appendChild(ul);

let students = [
  {
    name: "John",
    age: 20,
    marks: [80, 90, 70],
    course: "CS"
  },
  {
    name: "Jane",
    age: 22,
    marks: [85, 95, 75],
    course: "IT"
  },
  {
    name: "Doe",
    age: 21,
    marks: [70, 80, 60],
    course: "ME"
  },
  {
    name: "Smith",
    age: 23,
    marks: [90, 85, 95],
    course: "CE"
  },
  {
    name: "Emily",
    age: 19,
    marks: [75, 80, 85],
    course: "EE"
  },
  {
    name: "Michael",
    age: 24,
    marks: [88, 92, 94],
    course: "AE"
  },
  {
    name: "Sarah",
    age: 20,
    marks: [78, 82, 84],
    course: "CE"
  },
  {
    name: "David",
    age: 22,
    marks: [90, 95, 100],
    course: "CS"
  }
];

let stable = document.createElement("table");
stable.setAttribute("border", "1");
thead = document.createElement("thead");
// thead.innerHTML="<tr><th> students[0].key</th><th>Age</th><th>Marks</th><th>Course</th></tr>";
thead.innerHTML = `<tr>
  <th>${Object.keys(students[0])[0]}</th>
  <th>Age</th>
  <th>Marks</th>
  <th>Course</th>
</tr>`;

// thead.innerHTML=`<tr> 
// <th>${students[0].name}</th>
// <th>Age</th>
// <th>Marks</th>
// <th>Course</th>
// </tr>`;

stable.appendChild(thead);
stable.style.borderCollapse = "collapse";
stable.style.textAlign = "center";
document.body.appendChild(stable);
// for(let header in students[0]){
//   let th=document.createElement("th");
//   th.innerText=header;
//   thead.appendChild(th);
// }
// stable.appendChild(thead);
// document.body.appendChild(stable);
let tbody = document.createElement("tbody");
for (let student of students) {
  let tr = document.createElement("tr");
  for (let data in student) {
    let td = document.createElement("td");
    console.log(data);// key values
    console.log(student[data]);

    td.innerText = student[data];
    tr.appendChild(td);
  }
  tbody.appendChild(tr);
};
stable.appendChild(tbody);

