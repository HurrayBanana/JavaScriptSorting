function bubble(List)
{	
	var swapped, item, exam ;
	
    var metrics = new Data("Bubble", List.length);

	exam = List.length ;
	swapped = true ;
	while (swapped) {
		swapped = false ;
		for (item = 0; item < exam - 1 ; item++) {
            metrics.compared();
			if (List[item].value > List[item + 1].value) {
				//swap
                var t = List[item]
                List[item] = List[item + 1];
				List[item + 1] = t;
				
				//adjust physical screen positions
                List[item].setPos(item);
                List[item + 1].setPos(item + 1);
				swapped = true ;
				
                metrics.swapped();
			}
		}
		exam-- ;
	}
	return metrics;
}