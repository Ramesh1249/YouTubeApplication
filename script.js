
var clickme=document.getElementById('buttondemo');
clickme.addEventListener('click',clikevent);
 var src;
function clikevent(){
	
	var xmldem;
 	xmldem=new XMLHttpRequest();
 	//alert("hekl");
 	xmldem.onreadystatechange=function(){
 
 
 		if(xmldem.readyState==4)
 		{
 			//console.log(xmldem.response);
 			//alert("he;;o");
 			var response=JSON.parse(xmldem.responseText);
 			console.log(response);
 			var srcUrl=response.data.items[0].content[5];
			var  dataUrl=document.getElementById('videoid');
			dataUrl.data=srcUrl;
			var inerHtml= '<embed src="https://www.youtube.com/v/XsliAhfdS-Q?version=3&amp;f=videos&amp;app=youtube_gdata" width="100%" height="100%" id="vidid">';
			 document.getElementById('videoid').innerHTML=inerHtml;
			 console.log(inerHtml);

 			//document.getElementById('videoid').setAttribute('data',srcUrl);
 			//document.getElementById('vidid').setAttribute('src',srcUrl);
  		}
 
 		
 
	}
	var arg=document.getElementById('search').value;

	 src="https://gdata.youtube.com/feeds/api/videos?q="+arg+"&v=2&alt=jsonc";
	xmldem.open("GET",src);
	xmldem.send();
	
}

