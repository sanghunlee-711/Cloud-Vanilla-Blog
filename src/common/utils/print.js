export const layerPrint = (elementName, titleName) => {
  const printWindow = window.open("", "PRINT", "height=600,width=800");

  printWindow.document.write("<html><head><title>" + titleName + "</title>");
  printWindow.document.write(`
  <link href="styles/resume.css" rel="stylesheet">
  <link href="styles/style.css" rel="stylesheet">
  <link href="styles/post.css" rel="stylesheet">
  <link href="styles/mdStyle.css" rel="stylesheet">
  <link href="styles/portfolio.css" rel="stylesheet">
  <script src="https://kit.fontawesome.com/eb264fff85.js" crossorigin="anonymous"></script>
  `);

  printWindow.document.write("</head><body >");
  printWindow.document.write(document.getElementById(elementName).innerHTML);
  printWindow.document.write("</body></html>");

  printWindow.document.close(); // necessary for IE >= 10

  setTimeout(() => {
    printWindow.focus(); // necessary for IE >= 10*/
    printWindow.print();
    printWindow.close();
  }, 1000);

  return true;
};
