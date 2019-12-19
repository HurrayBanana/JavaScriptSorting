var screen;
var stats;
var elements = [];

//creates a 1000 item objects tags and adds them to the main div tag
//stores in an array
function init()
{
    screen = document.getElementById("main");
    stats = document.getElementById("stats");

    for (let index = 0; index < 1500; index++) {

        var bar = new item(Math.round(Math.random()*500), index, screen);
        elements.push(bar);
    }
    screen.style.width = (elements.length + 10) + "px";
    stats.style.width = (elements.length + 10) + "px";

}
//creates a random set of data
function resetRandom()
{
	for (let item = 0; item < elements.length; item++) {
        elements[item].setSize(Math.round(Math.random()*500));
        elements[item].setPos(item);
    }
}

function performInsert()
{
    var data = insert(elements);
    stats.innerText = data.Info;
}

function performBubble()
{
    var data = bubble(elements);
    stats.innerText = data.Info;
}

function performQuick()
{
    var data = quickSort(elements);
    stats.innerText = data.Info;
}