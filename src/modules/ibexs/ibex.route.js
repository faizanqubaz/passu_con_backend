import express from 'express';
import {
  saveIbex,
  getAllIbex ,
  saveTopOfferIbex,
  saveNewHuntIbex,
  sendMail
} from './ibex.controller';

const router = express.Router();

// POST route for saving Ibex data with image upload
router.post('/popular', saveIbex);
router.post('/newhunt', saveNewHuntIbex);
router.post('/topoffer', saveTopOfferIbex);
router.post('/contactus',sendMail)

// GET route for fetching all Ibex entries
router.get('/', getAllIbex); 

export { router as ibexRoute };
