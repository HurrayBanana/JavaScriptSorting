//shared by all recursive calls
var qs_metrics;
function quickSort(List)
{
	qs_metrics = new Data("Quick", List.length);
	qsort(List, 0, List.length - 1) ;
	return qs_metrics;
}
//
function qsort(List, bot, top)
{
    var left, right, pivot ; // need to be local

    if (bot == top) {
      return ; // single item sorted finish
    }
    //check for pair of items
  	/*if ( (top - bot) == 1 ) {
        metrics.compared();
	    if ( List[top].value < List[bot].value ) {
            var t = List[bot]
            List[bot] = List[top];
            List[top] = t;
            
            //adjust physical screen positions
            List[bot].setPos(bot);
            List[top].setPos(top);
     	}
        return ; // pair now sorted finish
    }*/
    left = bot ;
    right = top ;
    pivot = left ;
    List[pivot].container.style.backgroundColor = "#ff0";
    while (left < right) {
        qs_metrics.compared();
        if ( List[right].value < List[left].value ) {
            var t = List[left]
            List[left] = List[right];
            List[right] = t;
        
            //adjust physical screen positions
            List[left].setPos(left);
            List[right].setPos(right); 

            qs_metrics.swapped();

            if (pivot == left) {
                pivot = right ;
            } else {
                pivot = left ;
            }
        } // end of exchange part
        if (pivot == left) {
            right-- ;
        } else {
            left++ ;
        } 
    } // end of partitioning Left = Right
    if ( (left - bot) < (top - right) ) {
        if (pivot > bot) {qsort(List, bot, pivot - 1) ;}
        if (pivot < top) {qsort(List, pivot + 1, top) ;}
    } else {
        if (pivot < top) {qsort(List, pivot + 1, top) ;}
        if (pivot > bot) {qsort(List, bot, pivot - 1) ;}
    }
    return ;
}
