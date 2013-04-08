beforeEach(function() {
	this.addMatchers({
		toBeSortedInAscendingOrderOnColumnNumber: function(columnNumber) {
		var table = this.actual;
		var tbody = table.getElementsByTagName('tbody')[0];
		var rows = tbody.getElementsByTagName('tr');
		var i;
		for(i = 0; i < rows.length - 1; i++) {
			var currentValue = rows[i].getElementsByTagName('td')[columnNumber].firstChild.nodeValue;
			var nextValue = rows[i+1].getElementsByTagName('td')[columnNumber].firstChild.nodeValue;
			if(currentValue >= nextValue) {
				return false;
			}
		}
		return true;	
		},
		toBeSortedInDescendingOrderOnColumnNumber: function(columnNumber) {
		var table = this.actual;
		var tbody = table.getElementsByTagName('tbody')[0];
		var rows = tbody.getElementsByTagName('tr');
		var i;
		for(i = 0; i < rows.length - 1; i++) {
			var currentValue = rows[i].getElementsByTagName('td')[columnNumber].firstChild.nodeValue;
			var nextValue = rows[i+1].getElementsByTagName('td')[columnNumber].firstChild.nodeValue;
				if(currentValue <= nextValue) {
					return false;  
				}
		}
		return true;	
		}
	});
});
