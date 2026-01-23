const express = require('express');
const route = express.Router();
const Stdcontrollers = require("../Controllers/Stdcontrollers.js");
const multer = require('multer');               
const path = require('path');
const nodemailer = require('nodemailer');
const JWT = require('jsonwebtoken');




// -------- Multer Setup --------
const Storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads");
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

const FileFilters = (req, file, cb) => {
    const AllowedTypes = /png|jpg|jpeg|svg/;
    const extension = path.extname(file.originalname).toLowerCase();
    if (AllowedTypes.test(extension)) {
        cb(null, true);
    } else {
        cb(new Error("Not valid format"));
    }
};

const Upload = multer({
    storage: Storage,
    fileFilter: FileFilters,
    limits: { fileSize: 1024 * 1024 * 2 }
});

// -------- Mail Setup --------
const TransportInfo = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "mslahari05@gmail.com",
        pass: "qwzm douy wniu svpm"
    }
});

const SendMail = async (req, res) => {
    try {
        const result = await TransportInfo.sendMail({
            from: "mslahari05@gmail.com",
            to: "charmii2506@gmail.com",
            subject: "testing-subject",
            text: "Hello Universe"
        });
        return res.status(200).json(result);
    } catch (err) {
        return res.status(500).json(err.message);
    }
};

// -------- JWT Token --------
const GenerateToken = async (req, res) => {
    try {
        const JWTtoken = JWT.sign(
            { user_id: "11223344" },
            "!@#CCAfdv678678",
            { expiresIn: '10s' }
        );
        res.cookie("token", JWTtoken, {
            httpOnly: true,
            secure: false,
            sameSite: 'lax',
            maxAge: 10 * 1000
        });
        return res.status(200).json(JWTtoken);
    } catch (err) {
        return res.status(500).json(err.message);
    }
};

// -------- Routes --------
route.post('/add-data', Stdcontrollers.AddData);
route.get('/get-data/:email', Stdcontrollers.GetData);
route.put('/update/:id', Stdcontrollers.UpdateData);
route.post('/upload', Upload.array('file', 3), Stdcontrollers.UploadFile);
route.get('/send-mail', SendMail);
route.post('/encrypt-token', Stdcontrollers.Encrypting);
route.post('/generate-token', GenerateToken);
route.get('/decrypt',Stdcontrollers.VerifyEncryption)
route.get('/mail',
    async (req, res, next) => {
        try {
            const decoded = JWT.verify(req.cookies.token, "!@#CCAfdv678678");
            console.log(decoded);
            next();
        } catch (err) {
            return res.status(400).json("Token Expired");
        }
    },
    SendMail // ✅ use local SendMail, not controller
);

module.exports = route;



