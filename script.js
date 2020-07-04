
let reqData= new XMLHttpRequest();
reqData.open("GET", "https://api.nasa.gov/planetary/apod?api_key=8MPA5HdNgriAe4ogycoL2jsGcBfSFtfm01igpGwk");
//tratar os dados antes de enviar a requisição//
reqData.onload= function (){

   if(reqData.status==200)
    { let reqResult=JSON.parse(reqData.responseText);    

    let dateOfMedia= document.querySelector("#date");
    dateOfMedia.textContent=reqResult.date;

    let picOfDay= document.querySelector("#mediaOftheDay");
    picOfDay.src=reqResult.url;  

    let explainPic=document.querySelector("#explanation");
    explainPic.textContent=reqResult.explanation;
           
    let titleOfPic=document.querySelector("#titleOfimg");
    titleOfPic.textContent=reqResult.title;

    let cpyRightOfPic= document.querySelector("#cpyRight");
    cpyRightOfPic.textContent= " Copyright: " + reqResult.copyright;}
    else
    { alert("Não foi possível completar a sua requisição")}
    
}

reqData.send();









