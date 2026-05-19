import { getAllContacts, getContactByIdService } from '../services/contacts.js';

export const getContacts = async (req, res) => {
    const data = await getAllContacts();
    res.status(200).json({ status: 200, message: 'Successfully found contacts!', data });
};

export const getContactById = async (req, res) => {
    const { contactId } = req.params;
    const data = await getContactByIdService(contactId);
    if (!data) return res.status(404).json({ message: 'Contact not found' });
    res.status(200).json({ status: 200, message: `Successfully found contact with id ${contactId}!`, data });
};