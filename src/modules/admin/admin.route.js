import express, { Express, Request, Response } from 'express';
import {
  AuthenticateAdmin 
} from './admin.controller';
const router = express.Router();

router.post('/', AuthenticateAdmin);

export { router as adminRoute };
