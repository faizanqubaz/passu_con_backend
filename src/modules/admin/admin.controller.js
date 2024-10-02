import { Request, Response } from 'express';
import mongoose from 'mongoose';
import { Admin } from './admin.model'; // Your Admin model
import bcrypt from 'bcryptjs'; // To hash and compare passwords
import jwt from 'jsonwebtoken'; // For generating JWT token (optional)

const AuthenticateAdmin = async (req, res) => {
  const { email, password } = req.body;

  try {
 
    // Check if the email exists in the database
    const admin = await Admin.findOne({ email });

    if (!admin) {
      return res.status(404).json({ message: 'Invalid email or password' });
    }

    // Compare the provided password with the stored hashed password
    const isPasswordValid = await bcrypt.compare(password, admin.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // If email and password are correct, generate a JWT token (optional)
    const token = jwt.sign({ id: admin._id }, 'mysecretpassword', {
      expiresIn: '1h', // You can adjust token expiration
    });

    // Return success with user data (without password) and token
    return res.status(200).json({
      message: 'Login successful',
      data: {
        email: admin.email,
        name: admin.name,
      },
      token, // Send token if you plan to use JWT
    });
  } catch (error) {
    console.error('Error authenticating admin:', error);
    return res.status(500).json({ message: 'Server error', error: error.message });
  }
};

export { AuthenticateAdmin };
