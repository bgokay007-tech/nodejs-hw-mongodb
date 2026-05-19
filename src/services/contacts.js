import { Contact } from '../db/contact.js';

export const getAllContacts = () => Contact.find();
export const getContactByIdService = (id) => Contact.findById(id);