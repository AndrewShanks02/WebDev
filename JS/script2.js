function output(s)
{
    $("#outputField").text(s);
}
function fetchInput()
{
    return $("#inputField").val();
}

$("#btn").click((e) => {
    output(fetchInput());
});