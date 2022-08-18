function changeItem(arr, analysis) {
  let analysisItem = arr[analysis];
  let previousItem = arr[analysis - 1];

  arr[analysis] = previousItem;
  arr[analysis - 1] = analysisItem;
}

module.exports = changeItem;
