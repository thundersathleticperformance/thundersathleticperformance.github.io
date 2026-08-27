// When scan is successful, this function will produce data
function onScanSuccess(qrCodeMessage) {
  document.getElementById("result").innerHTML =
    '<span class="result">' + qrCodeMessage + "</span>";
  qrData = qrCodeMessage;
  
  // Check if qrData contains a semicolon
  if (qrData.indexOf(";") !== -1) {
    sendData();
  }
}

// When scan is unsuccessful, this function will produce an error message
function onScanError(errorMessage) {
  // Handle Scan Error
}

// Setting up QR Scanner properties
var html5QrCodeScanner = new Html5QrcodeScanner("reader", {
  fps: 10,
  qrbox: 250
});

// Start rendering the QR code scanner
html5QrCodeScanner.render(onScanSuccess, onScanError);

function sendData() {
  var message = qrData;
  // Send `message` to the parent using the postMessage method on the window.parent reference.
  window.parent.postMessage(message, "*");
}
