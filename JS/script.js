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
