import bcrypt from "bcrypt";

const hash = await bcrypt.hash("yourPassword123", 10);
console.log(hash);
