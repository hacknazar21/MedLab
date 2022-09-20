const {DataTypes} = require("sequelize");
const db = require("../config/Database");

 const API_User = db.define('API_User', {
    firstname: {
        type: DataTypes.STRING,
    },
    lastname: {
        type: DataTypes.STRING,
    },
    username: {
     type: DataTypes.STRING,
     allowNull: false
   },
   email: {
     type: DataTypes.STRING,
     allowNull: false
   },
   password: {
     type: DataTypes.STRING,
   },
   phone_number: {
     type: DataTypes.STRING,
   },
   avatar: {
        type: DataTypes.STRING,
   },
   address: {
        type: DataTypes.STRING,
   },
})

const API_Results = db.define('API_Result', {
    title_result: {
        type: DataTypes.STRING,
    },
    isReady: {
        type: DataTypes.BOOLEAN
    },
    file: {
        type: DataTypes.STRING,
    },
})

const API_Notifications = db.define('API_Notification', {
    title_notification: {
        type: DataTypes.STRING,
    },
    date: {
        type: DataTypes.STRING,
    },
    result: {
        type: DataTypes.STRING,
    },
})

const API_Appointments = db.define('API_Appointment', {
    title_appointment: {
        type: DataTypes.STRING,
    },
    date: {
        type: DataTypes.STRING,
    },
    time: {
        type: DataTypes.STRING,
    },
    description: {
        type: DataTypes.STRING,
    },
    qr_code: {
        type: DataTypes.STRING,
    },
})

const API_Analysis = db.define('API_Analysis', {
    short_title: {
        type: DataTypes.STRING(12),
    },
    long_title: {
        type: DataTypes.STRING(1000),
    },
    is_unique: {
        type: DataTypes.BOOLEAN,
    },
    research_id: {
        type: DataTypes.STRING(100),
    },
    research_time: {
        type: DataTypes.STRING(1000),
    },
    biomaterial: {
        type: DataTypes.STRING(1000),
    },
    price: {
        type: DataTypes.FLOAT,
    },
    description_patient: {
        type: DataTypes.TEXT,
    },
    desription_doctor: {
        type: DataTypes.TEXT,
    },
    preparation_patient: {
        type: DataTypes.TEXT,
    },
    preparation_doctor: {
        type: DataTypes.TEXT,
    },
    banner_img: {
        type: DataTypes.STRING(1000),
    },
    type: {
        type: DataTypes.STRING(100),
    },
    document_img: {
        type: DataTypes.STRING(1000),
    },
    main_img: {
        type: DataTypes.STRING(1000),
    },
})

module.exports = {
     API_User,
     API_Results,
     API_Notifications,
     API_Appointments,
     API_Analysis
 }


