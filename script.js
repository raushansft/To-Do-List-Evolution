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

    let title=document.createElement("p");
    title.textContent=data.title;
    
    let status=document.createElement("input");
    status.type = "checkbox";
    status.checked =data.status;

    let editbtn=document.createElement("button");
    // editbtn.textContent="Edit"
    // editbtn.setAttribute("onclick"," function(){
    // //     localStorage.setItem("todoitem",JSON.stringify(data));
    // //     location.href="https://google.com";
    // //     // console.log(data);
    // }");

    card.append(title,status);
    document.querySelector("#container").append(card);

}