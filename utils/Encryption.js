import bcrypt from 'bcrypt';

export async function encrypt(password){
    return await bcrypt.hash(password, Number(process.env.SALT_ROUNDS));
}

export async function comparePwd(password, hashedPassword) {
    return await bcrypt.compare(password, hashedPassword);
}