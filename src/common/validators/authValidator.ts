import Joi from 'joi';
import { MSG } from '../message/message';


export const registerSchema = Joi.object({
    username: Joi.string().min(3).required().messages({
      'any.required': MSG.REQUIRED_MSG('username'),
    }),
    email: Joi.string().email().required().messages({
      'string.empty': MSG.REQUIRED_MSG('Email'),
      'string.email': 'Invalid email format',
    }),
    password: Joi.string().min(6).required().messages({
      'string.empty':  MSG.REQUIRED_MSG('Password'),
      'string.min': 'Password must be at least 6 characters',
    }),
  });
  
  export const loginSchema = Joi.object({
    username: Joi.string().min(3).required().messages({
      'any.required': MSG.REQUIRED_MSG('username'),
    }),
    password: Joi.string().required().messages({
      'string.empty': MSG.REQUIRED_MSG('Password'),
    }),
  });
  
  export const resetRequestSchema = Joi.object({
    email: Joi.string().email().required().messages({
      'string.empty': MSG.REQUIRED_MSG('Password'),
      'string.email': 'Invalid email format',
    }),
  });
  
  export const resetPasswordSchema = Joi.object({
    token: Joi.string().required().messages({
      'string.empty': 'Token is required',
    }),
    password: Joi.string().min(6).required().messages({
      'string.empty': 'Password is required',
      'string.min': 'Password must be at least 6 characters',
    }),
  });
