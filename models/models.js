const {DataTypes} = require("sequelize");
const db = require("../config/Database");

 const API_User = db.define('API_User', {
    firstname: {
        type: DataTypes.STRING(20),
    },
    lastname: {
        type: DataTypes.STRING(20),
    },
    username: {
     type: DataTypes.STRING(20),
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
        type: DataTypes.STRING(100),
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
        type: DataTypes.STRING(100),
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
        type: DataTypes.STRING(100),
    },
    date: {
        type: DataTypes.STRING,
    },
    time: {
        type: DataTypes.STRING,
    },
    description: {
        type: DataTypes.STRING(1000),
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

const API_Reviews = db.define('API_Review', {
        firstname: {
            type: DataTypes.STRING(15),
        },
        lastname: {
            type: DataTypes.STRING(15)
        },
        username: {
            type: DataTypes.STRING(15)
        },
        avatar: {
            type: DataTypes.STRING,
        },
        text_review: {
            type: DataTypes.TEXT,
        },
        date: {
            type: DataTypes.STRING
        }
})

const API_News = db.define('API_News', {
        img_news: {
            type: DataTypes.STRING,
        },
        title: {
            type: DataTypes.STRING(1000),
        },
        href: {
            type: DataTypes.STRING,
        },
        date: {
            type: DataTypes.STRING,
        },
})

const API_QaA = db.define('API_QaA', {
       question: {
           type: DataTypes.STRING(250),
       },
       answer: {
           type: DataTypes.STRING(1000)
       },
})

const API_aboutUs = db.define('API_aboutUs', {
      title: {
          type: DataTypes.STRING(250),
      },
      text: {
          type: DataTypes.STRING(1000),
      },
})

const API_promotion = db.define('API_promotion', {
     title: {
         type: DataTypes.STRING(250),
     },
     text: {
         type: DataTypes.STRING(100),
     },
})

//FIXME there have to be several phone number so we have to have several column for this?

//Note in map is gonna be url
const API_contacts = db.define('API_contacts', {
    address: {
        type: DataTypes.STRING(100),
    },
    phone_number: {
        type: DataTypes.STRING(11)
    },
    map: {
        type: DataTypes.STRING(250),
    },
})


module.exports = {
     API_User,
     API_Results,
     API_Notifications,
     API_Appointments,
     API_Analysis,
     API_Reviews,
     API_News,
 }


