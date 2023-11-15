import User from "../models/User.js"

export const usuarioConectado = async (uid) => {
    const user = await User.findById(uid);
    user.online = true;
    await user.save();
    return user;
}

export const usuarioDesconectado = async (uid ) => {
    const user = await User.findByIdAndUpdate(uid, { online: false });
    return user;
}

export const listarUsuarios = async () => {
    const users = await User.find().sort('-online');
    return users;
}