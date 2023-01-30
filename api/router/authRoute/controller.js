import {createRequire} from "module";
const require=createRequire(import.meta.url);

const expressValidator = require('express-validator');
const check = expressValidator.check;


export class Validator{
    static registerValidator(req){
      
      return [
        check('firstname')
        .not()
        .isEmpty()
        .withMessage('firstname cant be empty'),
        check('lastname')
        .not()
        .isEmpty()
        .withMessage('lastname cant be empty'),
        check('username')
        .not()
        .isEmpty()
        .withMessage('username cant be empty'),
        check('mobile')
        .not()
        .isEmpty()
        .withMessage('mobile cant be empty'),
        check('email')
          .isEmail()
          .withMessage('email is invalid'),
        check('name')
          .not()
          .isEmpty()
          .withMessage('name cant be empty'),
        check('password')
          .not()
          .isEmpty()
          .withMessage('password cant be empty'),
      ]
    }
  
    static loginValidator(){
      return [
        check('email')
          .isEmail()
          .withMessage('email is invalid'),
        check('password')
          .not()
          .isEmpty()
          .withMessage('password cant be empty'),
      ]
    }
  }