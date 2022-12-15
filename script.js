

(Array.from(document.getElementsByTagName("a"))).forEach((a)=>{
    console.log("assd");
    a.addEventListener("click",book);
});


function book(e){
    e.preventDefault();
    console.log(e.target.id);
    if(e.target.id=="alice"){
        read("./books/AliceInWonderland.txt","Alice In WonderLand","alice: 385 time(s) very: 144 time(s) little :128 time(s) out: 113 time(s) down:101 time(s)","gather: 1 time(s) sorrows: 1 time(s) remembering: 1 time(s) child-life: 1 time(s)","Document Length:164392 word count: 26784");
    }
    if(e.target.id=="hyde"){
        read("./books/JekyllAndHyde.txt","Jekyll And Hyde","alice: 385 time(s) very: 144 time(s) little :128 time(s) out: 113 time(s) down:101 time(s)","gather: 1 time(s) sorrows: 1 time(s) remembering: 1 time(s) child-life: 1 time(s)","Document Length:164392 word count: 26784");
    }
    if(e.target.id=="lord"){
        read("./books/LOTR.txt","Lord Of The Rings","alice: 385 time(s) very: 144 time(s) little :128 time(s) out: 113 time(s) down:101 time(s)","gather: 1 time(s) sorrows: 1 time(s) remembering: 1 time(s) child-life: 1 time(s)","Document Length:164392 word count: 26784");
    }
}

function read(url,title,texto,texto2,texto3){
    var client = new XMLHttpRequest();
client.open('GET', url);
client.onreadystatechange = function() {
  var t=client.responseText;
  document.getElementById("bhead").innerText=title;
    document.getElementById("btext").innerText = t;
    document.getElementById("text2").innerText = texto;
    document.getElementById("text3").innerText = texto2;
    document.getElementById("text4").innerText=texto3;



}
client.send();
}

