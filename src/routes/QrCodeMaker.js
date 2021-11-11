import React, { useState } from "react";

const QrCodeMaker = () => {
  const [qrLink, setQrLink] = useState();

  // takes an input and creates a Qr Code from it using a freetool called qrtag.com
  return (
    <>
      <input
        className="qrinput"
        onChange={(e) => setQrLink(e.target.value)}
        value={qrLink}
        placeholder="https://example.com/"
      />
      <img
        src={`https://qrtag.net/api/qr_12.svg?url=${qrLink}`}
        alt="qrtag"
        id="qrTag"
        style={{ display: "block" }}
      />
    </>
  );
};

export default QrCodeMaker;
