const fs = require('fs'); 

function fileExists(filename) {
  return filename ? fs.existsSync(filename) : false; //checks if file exists returns a boolean 
}

function validNumber(value) { 
  return typeof value === 'number' && !isNaN(value); //checks if it is a valid numbrt 
}

function dataDimensions(dataframe) {
  if (!Array.isArray(dataframe) || dataframe.length === 0) {
    return [-1, -1];} // no data in rows or columns 

  // Check if the first element is an array
  if (!Array.isArray(dataframe[0])) {
    return [dataframe.length, -1]; //rows not columns 
  }
//returns rows and dimensions 
  return [dataframe.length, dataframe[0].length || -1];
}


function calculateMean(dataset) {
}
  



function findTotal(dataset) {
  // returns float or false
  
} 


function convertToFloat(dataframe, col){ //dataframe, integer
  // returns an integer, which is the number that were  converted to floats.
  
}


function flatten(dataframe) {
  // returns a dataset (a flattened dataframe)
  
}


function loadCSV(csvFile, ignorerows, ignorecols) {  // string, dataset, dataset
  // returns a list comprising of [dataframe, rows (integer), cols (integer)]

}


function calculateMedian(dataset) {
  // return float or false 
  
}


function createSlice(dataframe, colindex, colpattern, exportcols = []) { // dataframe, integer, string/numeric, dataset
  // returns a dataframe
  
}









module.exports = {
  fileExists, validNumber, dataDimensions, calculateMean, findTotal, convertToFloat, flatten, 
  loadCSV, calculateMedian, createSlice,
} 