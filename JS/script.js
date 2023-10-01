let stack = [];
let paragraphs = document.getElementsByTagName("p");

for (let i of paragraphs) 
{
    i.addEventListener("click", () =>
    {
        i.style = "display: none";
        stack.push(i);
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

