var pageCounter =1;
var govContainer=document.getElementById("government-info");
var btn = document.getElementById("btn");

btn.addEventListener("click",function(){
	var ourRequest = new XMLHttpRequest();
ourRequest.open('GET','https://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindTypeJ&category='+pageCounter);
ourRequest.onload = function(){
	var ourData = JSON.parse(ourRequest.responseText);
	renderHTML(ourData);
};

ourRequest.send();
pageCounter++;
	
});

function renderHTML(data){
	var htmlString="";

	for(i=0;i<1;i++){
	htmlString += '<p>'+'<li>version：'+data[i].version+'</li>'+'</p>'+'<p>'+'<li>UID：'+data[i].UID+'</li>'+'</p>'+'<p>'+'<li>title：'+data[i].title+'</li>'+'</p>'+'<p>'+'<li>time：'+data[i].showInfo[0].time+'</li>'+'</p>'+'<p>'+'<li>location：'+data[i].showInfo[0].location+'</li>'+'</p>'+'<p>'+'<li>locationName：'+data[i].showInfo[0].locationName+'</li>'+'</p>'+'<p>'+'<li>onSales：'+data[i].showInfo[0].onSales+'</li>'+'</p>'+'<p>'+'<li>price：'+data[i].showInfo[0].price+'</li>'+'</p>'+'<p>'+'<li>endTime：'+data[i].showInfo[0].endTime+'</li>'+'</p>';
}
	

	govContainer.insertAdjacentHTML('beforeend',htmlString);
}