describe("Table Test", function () {
    var table;
    beforeEach(function() {
	    var cell, row;
	    table = document.createElement('table');
	    row = table.insertRow(0); 
	    cell = row.insertCell(0);
	    cell.innerHTML = 2;
	    cell = row.insertCell(1);
	    cell.innerHTML = "B";

	    
	    row = table.insertRow(1); 
	    cell = row.insertCell(0);
	    cell.innerHTML = "1";
	    cell = row.insertCell(1);
	    cell.innerHTML = "A";
	    
	    row = table.insertRow(2); 
	    cell = row.insertCell(0);
	    cell.innerHTML = "3";
	    cell = row.insertCell(1);
	    cell.innerHTML = "C";
	    document.body.appendChild(table);
    });
	
    
    describe("should be sorted ", function() {
    	    var tableToBeSorted;	
	    beforeEach(function() {
	    	tableToBeSorted = document.getElementsByTagName('table')[0];
	    });
	    	
	    it("is sorted in ascending order based on column one ", function() {
	    	sortTable(0, 'Asc', tableToBeSorted);
		expect(tableToBeSorted).toBeSortedInAscendingOrderOnColumnNumber(0);
	    });

	    it("is sorted in descending order based on column one ", function() {
		sortTable(0, 'Dsc', tableToBeSorted);
		expect(tableToBeSorted).toBeSortedInDescendingOrderOnColumnNumber(0);	
	    });
	    
	    it("is sorted in ascending order based on column two ", function() {
		sortTable(1, 'Asc', tableToBeSorted);
		expect(tableToBeSorted).toBeSortedInAscendingOrderOnColumnNumber(1);	
	    });
	    
	    it("is sorted in ascending order based on column two ", function() {
		sortTable(1, 'Dsc', tableToBeSorted);
		expect(tableToBeSorted).toBeSortedInDescendingOrderOnColumnNumber(1);	
	    });
  });
    
    
});
