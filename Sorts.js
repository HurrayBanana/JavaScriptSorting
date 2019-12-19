
function insert(List)
{	
	var insertposition, item, key;

    var metrics = new Data("Insert", List.length);

	for (item = 1; item < List.length; item++) {
		key = List[item] ;
        insertposition = item - 1 ;
        
		while ((insertposition >= 0) && (key.value < List[insertposition].value) )
		{
				List[insertposition + 1] = List[insertposition] ;
				//change physical position
				List[insertposition + 1].setPos(insertposition + 1);
				
                insertposition -- ;
				
                metrics.moved();
                metrics.compared();
		}

        metrics.compared();
		List[insertposition + 1] = key ;
		//change physical position
		List[insertposition + 1].setPos(insertposition + 1);

		metrics.moved();
    }
    return metrics;
}


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
                var t = elements[item]
                elements[item] = elements[item + 1];
				elements[item + 1] = t;
				
				//adjust physical screen positions
                elements[item].setPos(item);
                elements[item + 1].setPos(item + 1);
				swapped = true ;
				
                metrics.swapped();
			}
		}
		exam-- ;
	}
	return metrics;
}