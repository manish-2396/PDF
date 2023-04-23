const { Router } = require("express");
const { upload } = require("./multer");
const { pdfModel } = require("./modal");

const PDFRouter = Router();

PDFRouter.post("/addpdf", upload.single("pdf"), async (req, res) => {
  const { originalname, mimetype, path, size } = req.file;

  console.log(size);

  console.log("req.file", req.file);
  try {
    const pdf = new pdfModel({
      fileName: originalname,
      filePath: path,
      fileType: mimetype,
      fileSize: size,
    });
    await pdf.save();
    return res.status(201).send({ Massage: "uploaded pdf successfully" });
  } catch (err) {
    return res.status(401).send({ Massage: "uploaded pdf unsuccessfully" });
  }
});

PDFRouter.get("/getpdf", async (req, res) => {
  try {
    const result = await pdfModel.find();
    console.log("res", result);
    return res.status(200).send({ Massage: "success" , result: result });
  } catch (err) {
    return res.status(401).send({ Massage: "failure" });
  }
});

module.exports = {
  PDFRouter,
};
