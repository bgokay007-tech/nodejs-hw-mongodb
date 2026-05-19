import { Router } from 'express';
import { getContacts, getContactById } from '../controllers/contacts.js';

export const contactsRouter = Router();
contactsRouter.get('/', getContacts);
contactsRouter.get('/:contactId', getContactById);