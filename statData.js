class statData
{
    constructor(algorithm)
    {
        this.algorithm = algorithm;
        this.compares = 0;
        this.cost = 0;
    }

    get Cost() { return this.cost;}
    set Cost(value) { this.cost = value;}
    get Compares() { return this.compares;}
    set Compares(value) { this.compares = value;}

    get Info() { return this.algorithm + " Cost:" + this.cost + " Compares:" + this.Compares;}
}