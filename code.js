var screen;
var stats;
var elements = [];

//creates a 1000 item objects tags and adds them to the main div tag
//stores in an array
function init()
{
    screen = document.getElementById("main");
    stats = document.getElementById("stats");

    for (let index = 0; index < 1000; index++) {

        var div = new item(Math.round(Math.random()*500), index, this.screen);
        elements.push(div);
    }
}
//creates a random set of data
function reset()
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