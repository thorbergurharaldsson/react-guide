import React, { useState, useEffect } from "react";

const QrCodeMaker = () => {
  const [qrLink, setQrLink] = useState();

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
