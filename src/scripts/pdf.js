import { PDFDocument, StandardFonts, rgb } from 'pdf-lib'

async function createPdf(title, schemes, frame) {
    // Create a new PDFDocument
    const pdfDoc = await PDFDocument.create()
    // Embed the Times Roman font
    const timesRomanFont = await pdfDoc.embedFont(StandardFonts.TimesRoman)
    // Add a blank page to the document
    const page = pdfDoc.addPage()
    // Get the width and height of the page
    const { width, height } = page.getSize()
    console.log("Width: ", width, " Height: ", height)
    // Draw a string of text toward the top of the page

    const fontSize = 24


    const title_layout = {
        size: fontSize,
        font: timesRomanFont,
        color: rgb(0, 0.53, 0.71),
    }

    page.moveTo(32, 32)
    page.drawText("Creating PDFs in JavaScript is awesome!", title_layout)


    // Serialize the PDFDocument to bytes (a Uint8Array)
    //const pdfBytes = await pdfDoc.save({})
    const pdfDataUri = await pdfDoc.saveAsBase64({ dataUri: true });
    
    frame.src = pdfDataUri;
    // Trigger the browser to download the PDF document
    //download(pdfBytes, "pdf-lib_creation_example.pdf", "application/pdf");
    console.log("Finished")
}

export { createPdf }