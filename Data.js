class Data
{
    constructor(algorithm, quantity)
    {
        this.algorithm = algorithm;
        this.compares = 0;
        this.moves = 0;
        this.swaps = 0;
        this.n = quantity;
    }

    swapped()
    {
        this.swaps += 3;
    }

    moved()
    {
        this.moves += 1
    }

    compared()
    {
        this.compares++;
    }

    get Info() { return this.algorithm + " [n=" + this.n + " ] "
        + " Total Cost [ " + (this.compares + this.moves + this.swaps) + " ] "
        + " Movement [ " + (this.moves + this.swaps) + " ] "
        + " Compares [ " + this.compares + " ]";}
}