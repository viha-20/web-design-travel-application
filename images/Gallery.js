

function description_kandy(){
var kandy="<b><u>Kandy </u><br><p>Kandy is famed for sacred Buddhist sites including the Temple of the Tooth (Sri Dalada Maligawa) shrine, celebrated with the grand Esala Perahera annual procession.</p>";
document.getElementById("description").innerHTML=kandy;
}


function description_Ella(){
var Ella="<b><u> Ella</u><br><p>  Ella  is a small town in the Badulla District. The area has a rich bio-diversity, dense with numerous varieties of flora and fauna. Ella is surrounded by hills covered with cloud forests and tea plantations. The town has a cooler climate than surrounding lowlands, due to its elevation.</p>";

document.getElementById("description").innerHTML=Ella;
}

function description_Sigiriya(){
var Sigiriya="<b><u>Sigiriya</u><p><br>It is a site of historical and archaeological significance that is dominated by a massive column of rock approximately 180 metres high.</p>";
document.getElementById("description").innerHTML=Sigiriya;
}

function description_Yala(){
var Yala="<b><u>Yala National Park </u> <p><br>Yala combines a strict nature reserve with a national park. Divided into 5 blocks, the park has a protected area of nearly 130,000 hectares of land consisting of light forests, scrubs, grasslands, tanks and lagoons.</p>";
document.getElementById("description").innerHTML=Yala;
}

function description_galle(){
var galle="<b><u>Galle</u></b><p>The Galle fort has a colourful history, and today has a multi-ethnic and multi-religious population.<br> The Sri Lankan government and many Dutch people who still own some of the properties inside the fort are looking at making this one of the modern wonders of the world </p>";
document.getElementById("description").innerHTML=galle;
}


    var thumbnails = document.getElementById("thumbnails")
var imgs = thumbnails.getElementsByTagName("img")
var main = document.getElementById("main")
var counter=0;



function pagecolor(color){
  document.body.style.background=color;
  }
  function textcolor(color){
  document.getElementById("description").style.color=color;
  document.body.style.color=color;
  document.getElementById("quatoes").style.color=color;
  }
  


for(let i=0;i<imgs.length;i++){
  let img=imgs[i]
 img.addEventListener("mouseover",function(){
  main.src=this.src
})
  
}

