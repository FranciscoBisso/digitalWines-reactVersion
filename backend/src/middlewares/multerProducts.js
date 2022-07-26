const path = require("path");
const multer = require("multer");

const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, path.join(__dirname, "../../public/images/img-products"));
	},
	filename: function (req, file, cb) {
		cb(null, Date.now() + "_img_" + path.extname(file.originalname));
	},
});

const uploadFile = multer({ storage });

module.exports = uploadFile;
