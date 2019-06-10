// window.onload = getExif;

function getExif() {
  //   var img3 = document.getElementById('img3');
  //   EXIF.getData(img3, function() {
  //     var make = EXIF.getTag(this, 'Make');
  //     var model = EXIF.getTag(this, 'Model');
  //     var makeAndModel = document.getElementById('makeAndModel');
  //     makeAndModel.innerHTML = `${make} ${model}`;
  //   });

  var img1 = document.getElementById('img1');
  EXIF.getData(img1, function() {
    var allMetaData = EXIF.getAllTags(this);
    var extime = EXIF.findEXIFinJPEG(0x829a);
    var allMetaDataSpan = document.getElementById('allMetaDataSpan');
    allMetaDataSpan.innerHTML = JSON.stringify(extime, null, '\t');
  });
}
