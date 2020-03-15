// this adds jest-dom's custom assertions
import "@testing-library/jest-dom/extend-expect";

if (global.document)
  document.createRange = () => ({
    setStart: () => {},
    setEnd: () => {},
    commonAncestorContainer: {
      nodeName: "BODY",
      ownerDocument: document
    }
  });

window.print = () => {};
