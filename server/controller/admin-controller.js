const User = require("../models/user-model");
const Contact = require("../models/contact-model");



const getAllUsersData = async (req, res) => {

    try {
        const users = await User.find({}, { password: 0 });
        if (!users || users.length === 0) {
            return res.status(404).json({ message: "No users Exist" });
        }

        return res.status(200).json(users);

    } catch (error) {
        next(error);
        console.log(error);

    }
};

const getAllContactsData = async (req, res) => {
    try {

        const contacts = await Contact.find();

        if (!contacts || contacts.length === 0) {
            return res.status(404).json({ message: "No contacts Exist" });
        }

        return res.status(200).json(contacts);


    } catch (error) {

    }
}

const getDeleteUserById = async (req, res) => {
    try {

        const id = req.params.id;

        await User.deleteOne({ _id: id });

        return res.status(200).json({ message: "User deleted successfully!" });

    } catch (error) {
        next(error)
    }
}


const getDeleteContactsById = async (req, res) => {

    try {

        const id = req.params.id;

        await Contact.deleteOne({ _id: id });

        return res.status(200).json({ message: "Contact deleted successfully" });

    } catch (error) {
        next(error);
    }
}

module.exports = { getAllUsersData, getAllContactsData, getDeleteUserById, getDeleteContactsById };

