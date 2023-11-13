export const env = {
    JWT_ACCESS_SECRET: process.env.JWT_ACCESS_SECRET,
    JWT_REFRESH_SECRET: process.env.JWT_REFRESH_SECRET,
    URI: process.env.MONGO_URI || 'mongodb://localhost:27017/ecommerce',
    PORT: process.env.PORT || 4000,
}