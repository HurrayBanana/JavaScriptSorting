class item{
    constructor(size, x, parent)
    {
        //these are properties of the class
        this.value = size;
        this.offset = 10;
        this.xp = x;

        //create a div container
        this.container =  document.createElement("div");
        this.container.className = "bar";
        
        this.setSize(this.value);
        this.setPos(this.xp);

        //add to given parent
        parent.append(this.container);
    }

    //sets the size and position based on another bar object
    change(tothis)
    {
        this.setSize(thothis.value);
        this.setPos(tothis.Pos);
    }

    //sets length of bar, it's colour and position from bottom of screen
    setSize(size)
    {
        this.value = size;
        this.container.style.height = this.value + "px";
        this.container.style.top = (510 - this.value) + "px";
        var red = Math.round(5 + this.value * 0.5);
        var green = 0;
        var blue = 0;
        this.container.style.backgroundColor = "rgb(" +  red + "," + green + "," + blue + ")";
    }
    //sets current position on screen
    setPos(x)
    {
        this.xp = x + this.offset;
        this.container.style.left = this.xp + "px";     
    }
    
    //getter retrieves current position on screen
    get Pos() {return this.xp;}
}