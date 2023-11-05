let stack = [];
let readLit = false;
let currentLit = "";
let operation;

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
    reset();
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

        let x, y;
        switch (s[i])
        {
            case '>':
                readLit = true;
                operation = (f) => {return f;}
                break;
            case '+':
                x = stack.pop();
                y = stack.pop();
                stack.push(x+y);
                break;
            case '-':
                x = stack.pop();
                y = stack.pop();
                stack.push(y-x);
                break;
            case '*':
                x = stack.pop();
                y = stack.pop();
                stack.push(x*y);
                break;
            case '/':
                x = stack.pop();
                y = stack.pop();
                stack.push(y/x);
                break;
            case '%':
                readLit = true;
                operation = (f) => {return stack.pop() % f;}
                break;
            case ';':
                if (readLit)
                {
                    readLit = false;
                    stack.push(operation(binToInt(currentLit)));
                    currentLit = "";
                }
                break;
            case '<':
                output(stack.pop());
                break;
        }
    }
}

$("#runbutton").click((e) => {
    parseInput(fetchInput());
});

$("#clearbutton").click((e) => {
    $("#inputField").val("")
    $("#outputField").text("");
});