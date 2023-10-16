function output(s)
{
    $("#outputField").text(s);
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

$("#btn").click((e) => {
    output(castBinToInt(fetchInput()));
});