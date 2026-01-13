import './style.css'

let inputname = document.querySelector('#inputname');
let errorname = document.querySelector('.errorname')
let greetbtn = document.querySelector('#Greet');
let containersection = document.querySelector('.containersection');

 function success(){


  
  if(inputname.value === ""){
    errorname.classList.remove("invisible");
    greetbtn.classList.remove("-mt-5");
    return ;
  }
  else if(/\d/.test(inputname.value)){
    errorname.classList.remove("invisible");
    greetbtn.classList.remove("-mt-5");
    return ;
  }
  else{
    errorname.classList.add("invisible");
    errorname.classList.add("mt-2");
  }


    let namevalue = inputname.value;
    let newdiv = document.createElement("div");
    newdiv.className="flex flex-col w-full max-w-md bg-green-100 m-5 justify-center items-center rounded-2xl ";
    
    let content = document.createElement("h2");
    content.className="text-lg font-semibold text-center p-3";
    content.textContent = `Hello ${namevalue.charAt(0).toUpperCase()}${namevalue.slice(1)}, Welcome to CyberDude 💙✨!`;

    newdiv.append(content);
    containersection.append(newdiv);

    greetbtn.removeEventListener("click",success);

  }
greetbtn.addEventListener("click", success);

















