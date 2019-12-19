
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