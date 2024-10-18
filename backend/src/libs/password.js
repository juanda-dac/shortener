import bcrypt from "bcryptjs";

export async function makePasswordHash(password, saltNum){
    const salt = await bcrypt.genSalt(saltNum);
    return await bcrypt.hash(password, salt);
}

export async function comparePasswords(password, matchedPassword){
    return await bcrypt.compare(password, matchedPassword)
}