console.log('hello');
let record =JSON.parse(localStorage.getItem("demo2"))|| [];
let isEdit = -1;

const editdata = (value) => {
    isEdit = value;
    const updatedata = record.find((item, ind) => ind === value);
    document.getElementById("names").value = updatedata.names; 
    document.getElementById("email").value = updatedata.email;
    document.getElementById("pass").value = updatedata.pass;
    document.getElementById("phone").value = updatedata.phone;
}

const deletedata = (index) => {
    const deleterecord = record.filter((item, ind) => ind !== index);
    record = deleterecord;
    localStorage.setItem("demo2",JSON.stringify(record));
    renderHtmlTable();
}


const renderHtmlTable = () => {
    document.getElementById("table-body").innerHTML = record.map((item, index) => {
        return (
            `<tr> 
            <td>${item.names}</td>
            <td>${item.email}</td>
            <td>${item.pass}</td>
            <td>${item.phone}</td>
            <td><button onclick="deletedata(${index})">delete</button></td>
            <td><button onclick="editdata(${index})">edit</button></td>
            </tr>`
        )
    }).join("")
}

renderHtmlTable();

function hello() {
    let names = document.getElementById("names").value;
    let email = document.getElementById("email").value;
    let pass = document.getElementById("pass").value;
    let phone = document.getElementById("phone").value;

    const test = {
        names: names,
        email: email,
        pass: pass,
        phone: phone,
    }
    console.log('test');

    if (isEdit !== -1) {
        const newarray = record.map((item, index) => {
            if (isEdit === index) { return test } else return item
        })
        record = newarray;
    } else
        record.push(test);
        localStorage.setItem("demo2",JSON.stringify(record));
    renderHtmlTable();
}

function sort(){
    const sortdata = record.sort((a,b)=> a.names.localeCompare(b.names));
    record = sortdata;
    localStorage.setItem("demo2",JSON.stringify(record));
    renderHtmlTable();

}

function search(){
    let searchdata = document.getElementById("search").value;
    let test = record.filter((item,index)=>item.names === searchdata);
    record = test;
    renderHtmlTable();
}