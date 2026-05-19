import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

import { Connection } from './config/db.js';
import { userModel } from './model/user.model.js';

const server = express();

server.use(express.json(), express.text());

server.get('/', (req, res) => {
  res.send('home');
});

// signup

server.post('/signup', async (req, res) => {
  if (req.body) {
    const find_User_In_DB = await userModel.findOne(req.body);
    if (find_User_In_DB) {
      res.send('user already exist in DB please login');
    } else {
      const userCreted = await userModel.create(req.body);

      res.send(userCreted);
    }
  } else {
    res.send('please enter somthing to save in DB...');
  }
});

// login

server.post('/login', async (req, res) => {
  try {
    if (req.body) {
      const find_User_In_DB = await userModel.find(req.body);
      // console.log(
      //   `🚀 ~ find_User_In_DB:`,
      //   find_User_In_DB,
      //   find_User_In_DB.length,
      // );
      if (find_User_In_DB.length > 0) {
        if (
          find_User_In_DB[0].email === req.body.email &&
          find_User_In_DB[0].password === req.body.password
        ) {
          res.send('user successfully logged-in');
        } else {
          res.send(
            `something went wrong please check the email: ${req.body.email} and pass: ${req.body.password} `,
          );
        }
      } else {
        res.send('not present please signup first!');
      }
    } else {
      res.send('please enter somthing to save in DB...');
    }
  } catch (error) {
    console.log(`🚀 ~ error:`, error);
  }
});


// token


server.listen(process.env.Port, async () => {
  try {
    await Connection;
    console.log(`DB connected successfully ✅`);
  } catch (err) {
    console.log(err);
    console.log(`connection failed to DB❌`);
  } finally {
    console.log(`server is running on Port ${process.env.Port}`);
  }
});