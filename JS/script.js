//document.body.style.height = '200pt';
var script = document.createElement('script');

let stack = [];
let switchPair = [];
let paragraphs = document.getElementsByTagName("p");

let headings = document.getElementsByTagName("h3");

for (let i of paragraphs) 
{
    i.addEventListener("click", () =>
    {
        i.style = "display: none";
        stack.push(i);
    });
}

for (let i of headings) 
{
    i.addEventListener("click", () =>
    {
        if (i.className == "highlight")
        {
            i.className = "";
            switchPair.pop();
        }
        else
        {
            i.className = "highlight";
            switchPair.push(i);
        }
        if (switchPair.length == 2)
        {
            let temp = switchPair[0].innerHTML;
            switchPair[0].innerHTML = switchPair[1].innerHTML;
            switchPair[1].innerHTML = temp;
            switchPair[0].className = "";
            switchPair[1].className = "";
            switchPair = [];
        }
    });
}

document.addEventListener("keydown", (e) => {
    if (e.key === "z" && stack.length != 0)
    {
        stack.pop().style = "display:block;";
    }
    else if (e.key === "Enter") 
    {
        document.getElementById("css-zen-garden").innerHTML = `<h1>${document.getElementById("searchBar").value}</h1>` + document.getElementById("css-zen-garden").innerHTML;
        document.getElementById("searchBar").value = "";
    }
});



script.type = 'text/javascript';
script.src = 'https://cdnjs.cloudflare.com/ajax/libs/cookie-banner/1.2.2/cookiebanner.min.js';
script.id = 'cookiebanner';

script.setAttribute("data-height",'20px');
script.setAttribute("data-position",'bottom');
script.setAttribute("data-message",'We do not not not not use cookies if and only if you consent to said cookies! Else we only possibly may use them, but probably not on you.');
script.setAttribute("data-bg",'#333333');
document.head.appendChild(script); 

