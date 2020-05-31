const mongoose=require('mongoose');

const Schema = mongoose.Schema;

const contactList = new Schema({
     
    name:{
      type:String,
      required: true,
      minlength: 2
    },
    mobile:{
     type:Array,
     required:true
    },
    email:{
        type:Array,
        required: true,
    },
    dob:{
     type:Date
    },
  }, {
      
   timestamps: true,
});

const Contact = mongoose.model('Contact',contactList);

module.exports=Contact;
