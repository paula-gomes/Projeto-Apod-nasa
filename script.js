

let suBmit= document.querySelector("#sub");
let dateForm= document.querySelector("#formDate");

dateForm.addEventListener("submit",function (event){
    
    event.preventDefault();
    console.log("oi");
    let reqData= new XMLHttpRequest();
    reqData.open("GET", `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${this.elements.dia.value}`);
    //tratar os dados antes de enviar a requisição//
    reqData.onload= function (){

    if(reqData.status==200)
        { let reqResult=JSON.parse(reqData.responseText);    

        let dateOfMedia= document.querySelector("#date");
        dateOfMedia.textContent+=reqResult.date;

        let picOfDay= document.querySelector("#mediaOftheDay");
        picOfDay.src=reqResult.url;  

        let explainPic=document.querySelector("#explanation");
        explainPic.textContent+=reqResult.explanation;
            
        let titleOfPic=document.querySelector("#titleOfimg");
        titleOfPic.textContent=reqResult.title;

        let cpyRightOfPic= document.querySelector("#cpyRight");
        cpyRightOfPic.textContent+= reqResult.copyright;}
        else
        { alert("Não foi possível completar a sua requisição")}
        
    }

    reqData.send();

});







