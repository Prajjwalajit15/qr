import React, { useState } from "react";
import { QRCodeCanvas } from "qrcode.react"; // Updated import
import "./App.css";

const App = () => {
  const [videoURL, setVideoURL] = useState("");
  const [showQRCode, setShowQRCode] = useState(false);

  const handleGenerateQRCode = () => {
    if (videoURL.trim() === "") {
      alert("Please enter a valid video URL.");
      return;
    }
    setShowQRCode(true);
  };

  const handleDownloadQRCode = () => {
    const canvas = document.getElementById("qrCodeCanvas");
    const pngUrl = canvas
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    const link = document.createElement("a");
    link.href = pngUrl;
    link.download = "qr-code.png";
    link.click();
  };

  return (
    <div className="app">
      <h1>Video QR Code Generator</h1>
      <input
        type="text"
        placeholder="Enter video URL"
        value={videoURL}
        onChange={(e) => setVideoURL(e.target.value)}
      />
      <button onClick={handleGenerateQRCode}>Generate QR Code</button>

      {showQRCode && (
        <div className="qr-code-container">
          <QRCodeCanvas
            id="qrCodeCanvas"
            value={videoURL}
            size={200}
          />
          <button onClick={handleDownloadQRCode}>Download QR Code</button>
        </div>
      )}
    </div>
  );
};

export default App;
