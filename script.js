let url=`http://localhost:3000/task`;
let response=fetchData(url);
response.then((res)=>{
    console.log(res);
    res.forEach(element => {
        displayData(element);
    });
    // call display function show data in dom
}).catch((err)=>{
    console.log(err,"Error in showing data data");
})




// function fetch data

async function fetchData(url){
   try {
    let res=await fetch(url);
    let data=res.json();
    return data;
    // console.log(data);

   } catch (error) {
       console.log(error,"Error in fatching data");
       
   }

}

// create display function

function displayData(data){

    let card=document.createElement("div");
    card.id="card";

    let title=document.createElement("p");
    title.textContent=data.title;
   
    if(data.status){
        title.color="red";
        
    }
    
    let status=document.createElement("input");
    status.type = "checkbox";
    status.checked =data.status;

    let editbtn=document.createElement("button");
    editbtn.textContent="Edit";
    editbtn.onclick= function (){
        console.log(data);
        localStorage.setItem("todo",JSON.stringify(data));
        window.location.href="edit.html";
    }

    let deletebtn=document.createElement("button");
    deletebtn.textContent="Delete";
    deletebtn.onclick= function (){
      // make a delete request

    }

    card.append(title,status,editbtn,deletebtn);
    document.querySelector("#container").append(card);

}

// function add item

function addItem (){

    console.log("Hello");
    let title=document.createElement("input");
    title.id="title-item";

    let status=document.createElement("input");
    status.type="checkbox";
    status.id="status-item";

    let add=document.createElement("button");
    add.textContent="Add Item";
    add.id="add";
    add.onclick=function(){


    //     fetch(`http://localhost:3000/task`, {
     
    // // Adding method type
    // method: "POST",
     
    // // Adding body or contents to send
    // body: JSON.stringify({
    //     "title": "foo",
    //     "status" :"false"
    // })


        


    
}
    document.querySelector("#item-add").append(title,status,add);
}