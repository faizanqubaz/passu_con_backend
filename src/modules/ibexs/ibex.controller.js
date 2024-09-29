import { Request, Response } from 'express';
import { Ibex } from './ibex.model';
import path from 'path';
import multer from 'multer';
import nodemailer from 'nodemailer'

// Configure multer for image uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // The folder where images will be stored
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, `${uniqueSuffix}-${file.originalname}`);
  }
});

// Define accepted file types (e.g., JPEG, PNG)
const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true);
  } else {
    cb(new Error('Unsupported file type'), false);
  }
};

// Initialize multer upload
const upload = multer({
  storage: storage,
  limits: { fileSize: 1024 * 1024 * 5 }, // 5MB file size limit
  fileFilter: fileFilter
}).fields([
  { name: 'ibexphotos', maxCount: 5 }, // Handle multiple ibex images
  { name: 'guidephotos', maxCount: 5 }  // Handle multiple guide images
]);

// Save new Ibex to the database
const saveIbex = async (req, res) => {
  upload(req, res, async (err) => {
    if (err) {
      console.log('err',err)
      return res.status(500).json({ message: 'Error uploading files', error: err.message });
    }

    try {
      const { ibexname, description, ibexrate, guideName, latitude, longitude, ibexsize, newPrice, huntername, huntdate, priceOld, hunterlocation } = req.body;

      const ibexphotos = req.files?.ibexphotos.map(file => file.path) || [];
      const guidephotos = req.files?.guidephotos.map(file => file.path) || [];

      const ibex = new Ibex({
        ibexname,
        description,
        ibexrate,
        guideName,
        latitude,
        longitude, // Save latitude and longitude instead of location
        ibexsize,
        newPrice,
        huntername,
        huntdate,
        ibexphotos,
        guidephotos,
        priceOld,
        hunterlocation,
        huntType:"populartype"
      });

      const savedIbex = await ibex.save();
      console.log('saved',saveIbex)
      res.status(201).json({ message: 'Ibex created successfully', data: savedIbex });
    } catch (error) {
      res.status(500).json({ message: 'Error saving Ibex', error: error.message });
    }
  });
};


const saveTopOfferIbex = async (req, res) => {
  upload(req, res, async (err) => {
    if (err) {
      console.log('err',err)
      return res.status(500).json({ message: 'Error uploading files', error: err.message });
    }

    try {
      const { ibexname, description, ibexrate, guideName, latitude, longitude, ibexsize, newPrice, huntername, huntdate, priceOld, hunterlocation } = req.body;

      const ibexphotos = req.files?.ibexphotos.map(file => file.path) || [];
      const guidephotos = req.files?.guidephotos.map(file => file.path) || [];

      const ibex = new Ibex({
        ibexname,
        description,
        ibexrate,
        guideName,
        latitude,
        longitude, // Save latitude and longitude instead of location
        ibexsize,
        newPrice,
        huntername,
        huntdate,
        ibexphotos,
        guidephotos,
        priceOld,
        hunterlocation,
        huntType:"topoffertype"
      });

      const savedIbex = await ibex.save();
      console.log('saved',saveIbex)
      res.status(201).json({ message: 'Ibex created successfully', data: savedIbex });
    } catch (error) {
      res.status(500).json({ message: 'Error saving Ibex', error: error.message });
    }
  });
};



const saveNewHuntIbex = async (req, res) => {
  upload(req, res, async (err) => {
    if (err) {
      console.log('err',err)
      return res.status(500).json({ message: 'Error uploading files', error: err.message });
    }

    try {
      const { ibexname, description, ibexrate, guideName, latitude, longitude, ibexsize, newPrice, huntername, huntdate, priceOld, hunterlocation } = req.body;

      const ibexphotos = req.files?.ibexphotos.map(file => file.path) || [];
      const guidephotos = req.files?.guidephotos.map(file => file.path) || [];

      const ibex = new Ibex({
        ibexname,
        description,
        ibexrate,
        guideName,
        latitude,
        longitude, // Save latitude and longitude instead of location
        ibexsize,
        newPrice,
        huntername,
        huntdate,
        ibexphotos,
        guidephotos,
        priceOld,
        hunterlocation,
        huntType:"newhunttype"
      });

      const savedIbex = await ibex.save();
      res.status(201).json({ message: 'Ibex created successfully', data: savedIbex });
    } catch (error) {
      res.status(500).json({ message: 'Error saving Ibex', error: error.message });
    }
  });
};

// Get all Ibex entries
const getAllIbex = async (req, res) => {
  try {
    // Extract 'hunttype' from query parameters if it exists
    const { hunttype } = req.query;


    // Build the query object for filtering
    let query = {};
    if (hunttype) {
      query.hunttype = hunttype;
    }

    // Fetch all Ibex entries or filter by hunttype
    const ibexList = await Ibex.find({huntType:hunttype});
 console.log('ibexlist',ibexList)


    // Map through the ibex entries to append full image URIs
    const baseUrl = `${req.protocol}://${req.get('host')}`; // Construct base URL (e.g., http://localhost:3000)
    const updatedIbexList = ibexList.map(ibex => {
      const updatedIbex = {
        ...ibex.toObject(), // Convert Mongoose document to plain object
        ibexphotos: ibex.ibexphotos.map(photo => `${baseUrl}/${photo}`), // Prepend base URL to ibex images
        guidephotos: ibex.guidephotos.map(photo => `${baseUrl}/${photo}`)  // Prepend base URL to guide images
      };
      return updatedIbex;
    });

    // Return the list of Ibex entries with full image URIs
    res.status(200).json({
      message: 'Ibex entries retrieved successfully',
      data: updatedIbexList
    });
  } catch (error) {
    console.error('Error fetching Ibex entries:', error);
    res.status(500).json({ message: 'Failed to fetch Ibex entries', error: error.message });
  }
};

const sendMail=async(req,res)=>{
  const { name, phone, email, country, subject, message } = req.body;

  // Setup email configuration (using Nodemailer or similar)
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'nukhan55@gmail.com',
        pass: 'lqrbzmlnukrztucv'
    }
  });

  const mailOptions = {
    from: email,
    to: 'faizanquba1@gmail.com', // The email to send to
    subject: subject,
    text: `Name: ${name}\nPhone: ${phone}\nCountry: ${country}\nMessage: ${message}`
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send('Error sending email');
  }
}







export { saveIbex,saveNewHuntIbex,saveTopOfferIbex, getAllIbex ,sendMail};
