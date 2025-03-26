var bigpic1=document.getElementById("bigpic");
var up1=document.getElementById("up");
var down1=document.getElementById("down");
var min=1;var max=4;var current=min;
function uppic()
{
    if(current===min)
    {
        current=max;
    }
    else
    {
        current--;
    }
    bigpic1.setAttribute(`src`,`img/${current}.jpg`);
}
function downpic()
{
    if(current===max)
    {
        current=min;
    }
    else
    {
        current++;
    }
    bigpic1.setAttribute(`src`,`img/${current}.jpg`);
}