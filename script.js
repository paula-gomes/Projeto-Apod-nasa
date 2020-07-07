

let suBmit= document.querySelector("#submit");
let dateForm= document.querySelector("#formDate");

dateForm.addEventListener("submit",function (event){
    
    event.preventDefault();

    let reqData= new XMLHttpRequest();
    reqData.open("GET", `https://api.nasa.gov/planetary/apod?api_key=8MPA5HdNgriAe4ogycoL2jsGcBfSFtfm01igpGwk&date=${this.elements.day.value}`);
    
    
    //tratar os dados antes de enviar a requisição//
    reqData.onload= function (){
            
    let picOfDay= document.querySelector("#imgOftheDay"); 
    let vidOfDay= document.querySelector("#vidOfTheDay");

    if(reqData.status==200)
        { let reqResult=JSON.parse(reqData.responseText);    

        let dateOfMedia= document.querySelector("#date");
        dateOfMedia.textContent= `Date: `+reqResult.date;

        if(reqResult.media_type == "image")
        {
            
            picOfDay.classList.remove("hideImg");            
            picOfDay.src=reqResult.url;             
            vidOfDay.classList.add("hideVid");
           
        }
        else
        {
            vidOfDay.classList.remove("hideVid");            
            vidOfDay.src=reqResult.url;
            picOfDay.classList.add("hideImg");
            
        }
        
        picOfDay.classList.add("showImg");
        vidOfDay.classList.add("showVid");


        let explainPic=document.querySelector("#explanation");
        explainPic.textContent=`Explanation: `+ reqResult.explanation;
            
        let titleOfPic=document.querySelector("#titleOfimg");
        titleOfPic.textContent=reqResult.title;

        let cpyRightOfPic= document.querySelector("#cpyRight");
        cpyRightOfPic.textContent=`Copyright: ` + reqResult.copyright;}
        else
        { alert("Não foi possível completar a sua requisição")}
        
    }

    reqData.send();

});







