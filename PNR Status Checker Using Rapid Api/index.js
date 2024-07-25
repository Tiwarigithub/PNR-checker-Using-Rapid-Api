var trainNo = document.getElementById("pnr");
var mainDiv = document.getElementById("mainDiv");

function getDetails(){
    var url = 'https://irctc1.p.rapidapi.com/api/v1/getTrainSchedule?trainNo='+trainNo.value;
    var request = new XMLHttpRequest();
    request.open('GET',url,true);
    request.setRequestHeader('x-rapidapi-key', '4e2f3e1772mshec47aff71a61ccfp1c124cjsn5794a04a9017');
    request.setRequestHeader('x-rapidapi-host', 'irctc1.p.rapidapi.com');
    request.onload = callBackResponse ;
    request.send()
}
function callBackResponse(){
    mainDiv.innerText = this.responseText;
}




