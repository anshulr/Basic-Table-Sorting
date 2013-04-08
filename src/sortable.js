var columnNumberSorted = 0;
	
function ComparatorAsc(a, b) {
	
	var aValue = a.getElementsByTagName('td')[columnNumberSorted].firstChild.nodeValue;
	var bValue = b.getElementsByTagName('td')[columnNumberSorted].firstChild.nodeValue;
	return (aValue === bValue ? 0 : (aValue > bValue ? 1 : -1));
}

function NumberComparatorAsc(a, b) {
	
	var aValue = parseInt(a.getElementsByTagName('td')[columnNumberSorted].firstChild.nodeValue, 10);
	var bValue = parseInt(b.getElementsByTagName('td')[columnNumberSorted].firstChild.nodeValue, 10);
	return (aValue - bValue);
}

function ComparatorDsc(a, b) {
	
	var aValue = a.getElementsByTagName('td')[columnNumberSorted].firstChild.nodeValue;
	var bValue = b.getElementsByTagName('td')[columnNumberSorted].firstChild.nodeValue;
	return (aValue === bValue ? 0 : (aValue > bValue ? -1 : 1));
}

function NumberComparatorDsc(a, b) {
	
	var aValue = parseInt(a.getElementsByTagName('td')[columnNumberSorted].firstChild.nodeValue, 10);
	var bValue = parseInt(b.getElementsByTagName('td')[columnNumberSorted].firstChild.nodeValue, 10);
	return (bValue - aValue);
}
	
function sortTable(sortOn, order, table) {	
	var tbody = table.getElementsByTagName('tbody')[0];
	var rows = tbody.getElementsByTagName('tr');

	var rowArray = [];
	for (var i=0; i<rows.length; i++) {
		rowArray[i] = rows[i].cloneNode(true);
	}
	
	columnNumberSorted = sortOn;
	if (columnNumberSorted === 0 || columnNumberSorted === 2) {
		if(order === 'Asc') {
			rowArray.sort(NumberComparatorAsc);
		} else {
			rowArray.sort(NumberComparatorDsc);
		}
	
	}
	else {
		if(order === 'Asc') {
			rowArray.sort(ComparatorAsc);
		} else {
			rowArray.sort(ComparatorDsc);
		}
	}
		
	var newTbody = document.createElement('tbody');
	for (i=0; i<rowArray.length; i++) {
		newTbody.appendChild(rowArray[i]);
	}
	
	table.replaceChild(newTbody, tbody);
}

function Sort(sortOn, order) {
	var table1 = document.getElementsByTagName('table')[0];
	sortTable(sortOn, order, table1);
}
	
