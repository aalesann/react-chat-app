
import mongoose from "mongoose";
import { env } from "../config/config";

export const dbConnection = async () => {
    
        try {
            await mongoose.connect(env.URI);
            console.log('Base de datos online');
        } catch (error) {
            console.log(error);
            throw new Error('Error al iniciar la base de datos');
        }
};