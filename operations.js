
  const matrixDot = (A, B) => {
    
    return A.map((rowA) =>
      B[0].map((_, xb) =>
        rowA.reduce((acc, itemA, yb) => acc + itemA * B[yb][xb], 0)
      )
    );
  };

function tomatrix (e) {
    var file = e;
    // input canceled, return
    if (!file) return;
    
    var FR = new FileReader();
    FR.onload = function(e) {
    var data = new Uint8Array(e.target.result);
    var workbook = XLSX.read(data, {type: 'array'});
    var firstSheet = workbook.Sheets[workbook.SheetNames[0]];
    
    // header: 1 instructs xlsx to create an 'array of arrays'
    var result = XLSX.utils.sheet_to_json(firstSheet, { header: 1 });
    
    // data preview
    var output = document.getElementById('result');
    output.innerHTML = JSON.stringify(result, null, 2);
    };
    FR.readAsArrayBuffer(file);
};

  

  