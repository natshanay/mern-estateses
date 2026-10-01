import mongoose from 'mongoose';


const listingSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,

    },
    description:{
        type:String,
        requred:true,
    },
    address:{
        type:String,
        required:true,
    },
    regularPrice:{
        type:Number,
        required:true,
    },
    discountedPrice:{
        type:Number,
        required:true,
    },
    bedrooms:{
        type:Number,
        required:true,
    },
    parking:{
        type:Boolean,
        required:true,
    },
    type:{
        type:String,
        required:true,

    },
    offer:{
    type:Boolean, 
    required:true,


    },
    imageUrls:{
        type:Array,
        required:true,
    }
    ,
    useRef:{
        type:String,
        required:true,
    },

},{timestamps:true})

const Listing = mongoose.model('Listing',listingSchema);

export default Listing;