let stack = [];
let readLit = false;
let currentLit = "";
//let operation;

function output(s)
{
    $("#outputField").text($("#outputField").val() + s);
}
function reset()
{
    $("#outputField").text("");
}
function fetchInput()
{
    return $("#inputField").val();
}
function binToInt(s)
{
    let n = 0;
    for (let i = 1; i <= s.length; i++)
    {
        n += s[s.length-i] * Math.pow(2,i-1);
    }
    return n;
}
function parseInput(s)
{
    reset()
    for (let i = 0; i < s.length; i++)
    {
        if (readLit && s[i] != ';')
        {
            if (s[i] == '1' || s[i] == '0')
            {

                currentLit += s[i];
            }
            else
            {
                output("Illegal Literal\n");
                return;
            }
        }

        switch (s[i])
        {
            case '>':
                readLit = true;
                break;
            case '#':
                readLit = true;
                break;
            case '+':
                let x = stack.pop();
                let y = stack.pop();
                stack.push(x+y);
                break;
            case ';':
                if (readLit)
                {
                    readLit = false;
                    console.log(currentLit);
                    stack.push(binToInt(currentLit));
                    currentLit = "";
                }
                break;
            case '<':
                output(stack.pop());
                break;
        }
    }
}

$("#btn").click((e) => {
    parseInput(fetchInput());
});