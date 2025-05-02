const mongoose = require("mongoose");

const DevoSchema = new mongoose.Schema({
  fileName: { type: String, required: true },
  fileBuffer: { type: Buffer, required: true },
  uploadDate: { type: String, required: true },
  username: { type: String, required: true }, // 👈 track uploader
});

module.exports = mongoose.model('Devo', DevoSchema);
