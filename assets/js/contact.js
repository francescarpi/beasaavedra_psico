const encodeText = (text) => {
  const response = [];
  for (const letter of text) {
    response.push(letter.charCodeAt() + 7);
  }
  return response;
};

const decodeText = (encodedText) => {
  const text = encodedText.map((letter) => letter - 7);
  return String.fromCharCode(...text);
};

document.addEventListener("DOMContentLoaded", () => {
  const t1 = decodeText([61, 56, 63, 39, 59, 59, 56, 39, 60, 63, 62]);
  const t2 = decodeText([
    105, 122, 104, 104, 125, 108, 107, 121, 104, 53, 119, 122, 112, 106, 118,
    115, 118, 110, 112, 104, 71, 110, 116, 104, 112, 115, 53, 106, 118, 116,
  ]);

  const a1 = document.createElement("a");
  a1.href = "tel:" + t1;
  a1.text = t1;

  const a2 = document.createElement("a");
  a2.href = "mailto:" + t2;
  a2.text = t2;

  document.getElementById("t1").appendChild(a1);
  document.getElementById("t2").appendChild(a2);
});
