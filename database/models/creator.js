const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const validator = require('validator')
const Test = require('./test')
const Result = require('./result')

const jwtsecret = process.env.JWTSECRET
const saltRounds  = 10

var creator = new mongoose.Schema({
    name:{
        type: String,
        default: 'Guest',
        trim: true
    },
    email: {
        type: String,
        unique: true,
        trim: true,
        lowercase: true,
        validate(value){
            if (! validator.isEmail(value)){
                throw new Error('Invalid Email')
            }
        }
    },
    password:{
        type: String,
        required: true,
        trim: true,
        validate(value){
            if(value.length <= 6){
                throw new Error('Password not strong enough')
            }
        }
    },
    tokens: [{
        token: {
            type:String,
            required: true
        }
    }]
})

creator.virtual('tests', {
    ref: 'Test',
    localField: '_id',
    foreignField: 'creator'
})

creator.methods.toJSON = function() {
    const creatorObject = this.toObject()
    delete creatorObject.password
    delete creatorObject.tokens
    return creatorObject
}

creator.methods.generateToken = async function() {
    const token = jwt.sign({_id: this._id.toString()}, jwtsecret)
    this.tokens = this.tokens.concat({token})
    await this.save()
    return token
}

creator.statics.findByCredentials = async (email, password) => {
    try{
        const creatorObject = await Creator.findOne({email})
        if(!creatorObject){
            throw new Error('Creator not found')
        }
        const isMatch = await bcrypt.compare(password, creatorObject.password)
        if(!isMatch){
            throw new Error('Incorrect Password')
        }
        return creatorObject
    }
    catch(error){
        return error
    }
}

creator.pre('save', async function(next){
    if(this.isModified('password')){
        this.password = await bcrypt.hash(this.password, saltRounds)
    }    
    next()
})

const Creator = mongoose.model('Creator', creator)

module.exports = Creator