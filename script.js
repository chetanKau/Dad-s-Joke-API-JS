let joke=document.querySelector("p");
let btn=document.querySelector("button");

btn.addEventListener("click",eventHandler);

function eventHandler(){
    let printJoke="";

    console.log("abc")

    const xhr= new XMLHttpRequest();
    xhr.open('GET','https://api.api-ninjas.com/v1/jokes?limit=1');
    xhr.setRequestHeader('X-Api-Key','J6ltp+OmYe6jNejTwd/jYw==yFgJYwqegSFDC1B8')
    
    xhr.onload=function(){
        if(xhr.status===200){
            const result=JSON.parse(xhr.response);
            console.log(result)
            printJoke=result[0].joke;
            console.log(printJoke);
            joke.innerText=printJoke;
        }
    };
    xhr.send();
    
   
}

