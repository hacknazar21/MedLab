const {API_Contacts} = require("../../models/models")

class ContactsControllersFront {
     //api/front/contact/allContacts
     async allContacts(req, res) {
         try {
            const getAll = await API_Contacts.findAll()
             return res.status(200).json(getAll)
         } catch (e) {
             return res.status(500).json({message: e.message})
         }
     }

     //api/front/contact/createContact
     async createContact(req, res) {
         try {
             const {address, phone_number, map} = req.body

             if (!address && !phone_number && !map) {
                 return res.status(400).json({message: "All input is required"})
             }

             await API_Contacts.create({address, phone_number, map})

             return res.status(201).json({message: "Contacts has been created"})

         } catch (e) {
             return res.status(500).json({message: e.message})
         }
     }

     //api/front/contact/update/:id
     async updateContact(req, res) {
         try {
             const {address, phone_number, map} = req.body
             const {id} = req.params

             await API_Contacts.update({address, phone_number, map}, {where: {id}})

             return res.status(201).json({message: "Contacts has been updated"})

         } catch (e) {
             return res.status(500).json({message: e.message})
         }
     }

     //api/front/contact/delete/:id
     async deleteContact(req, res) {
         try {
             const {id} = req.params

             const contactExist = await API_Contacts.findOne({where: {id}})

             if (!contactExist) {
                 return res.status(404).json({message: "Contacts doesn't exist"})
             }
             await contactExist.destroy()

             return res.status(410).json({message: "Contact has been deleted"})

         } catch (e) {
             return res.status(500).json({message: e.message})
         }
     }
}

module.exports = new ContactsControllersFront()