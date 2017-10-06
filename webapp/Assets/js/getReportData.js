'use strict';

/**
 * @description strips data from caspio reports by iterating each row and constructing 
 *              an object with columns as keys and values being the table's row content
 * 
 * @param {HTML - div element} div 
 * @returns {array} aggregated 
 */
function stripCaspioReport(div){
  var table_id = div.querySelector('[id^="cbTable_"]').id;
  var table = document.getElementById(table_id)
  var numRows = table.rows.length;
  var numCols = table.rows[0].cells.length;
  
  var colNames = []; 
  for(var i=0; i<numCols; i+=1)
    colNames.push(table.rows[0].cells[i].innerText.toLowerCase());

  var aggregated = []
  for(var r=1; r<numRows; r+=1){
    var obj = {};
    for(var c=0; c<numCols; c+=1){
      obj[colNames[c]] = table.rows[r].cells[c].innerHTML;
    }
    aggregated.push(obj);
  }

  return aggregated;
}

