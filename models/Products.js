const mongoose = require('mongoose');

const ProductsSchema = new mongoose.Schema({
    name: {
        type: String,
        required : [true, 'Product name must be provided'],
    },
    price: {
        type: Number,
        required: [true, 'Product price must be provided'],
    },
    featured: {
        type: Boolean,
        default: false,
    },
    rating: {
        type: Number,
        default: 0,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    company : {
        type: string,
        enum: {
            values: ['ikea','liddy','caressa','marcos'],
            message: '{VALUE} is not supported',
        }
    }
})

const Products = mongoose.model('Products', ProductsSchema);
module.exports= Products;