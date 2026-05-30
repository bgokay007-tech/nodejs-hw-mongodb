import { Contact } from '../db/models/contact.js';

export const getAllContacts = async ({ page, perPage, sortBy, sortOrder, filter }) => {
    const skip = (page - 1) * perPage;
    const sortDirection = sortOrder === 'desc' ? -1 : 1;

    const [contacts, totalItems] = await Promise.all([
        Contact.find(filter)
            .sort({ [sortBy]: sortDirection })
            .skip(skip)
            .limit(perPage),
        Contact.countDocuments(filter),
    ]);

    const totalPages = Math.ceil(totalItems / perPage);

    return {
        data: contacts,
        page,
        perPage,
        totalItems,
        totalPages,
        hasPreviousPage: page > 1,
        hasNextPage: page < totalPages,
    };
};

export const getContactById = async (contactId) => {
    return Contact.findById(contactId);
};

export const createContact = async (payload) => {
    return Contact.create(payload);
};

export const updateContact = async (contactId, payload) => {
    return Contact.findByIdAndUpdate(contactId, payload, { new: true });
};

export const deleteContact = async (contactId) => {
    return Contact.findByIdAndDelete(contactId);
};