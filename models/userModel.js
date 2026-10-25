
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Name is required'],
            trim: true
        },
        email: {
            type: String,
            required: [true, 'Email is required'],
            unique: true,
            lowercase: true,
            trim: true,
            match: [
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                'Invalid email format (e.g., aya@polytechnique.tn)'
            ]
        },
        age: {
            type: Number,
            min: [4, 'Minimum age is 4 years old']
        },
        role: {
            type: String,
            enum: {
                values: ['user', 'admin'],
                message: '{VALUE} is not an authorized role'
            },
            default: 'user'
        },
        bio: {
            type: String,
            maxlength: [200, 'Bio cannot exceed 200 characters']
        },
        phone: {
            type: String,
            match: [/^\d{8}$/, '8 digits phone number required']
        },
        password: {
        type : String ,
        required : [true , 'Le mot de passe est obligatoire '] ,
        minlength : [6 , 'Le mot de passe doit comporter au moins 6 caracteres ']  
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model('User', userSchema);
