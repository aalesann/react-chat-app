
import mongoose from "mongoose";

export const dbConnection = async () => {
    
        try {
    
            await mongoose.connect('mongodb://localhost:27017/ecommercedb');
    
            console.log('Base de datos online');
    
        } catch (error) {
    
            console.log(error);
            throw new Error('Error al iniciar la base de datos');
    
        }
    
    }