import { roles } from "./union";

type ID = number;

type Role = "admin" | "member";

interface User {
    name : string;
    id : ID;
    role: Role;
}

const user : User = {
    id : 123,
    name : "Rahim",
    role : "member",
}

export const typeAliasUser = () => {

    console.log(user.id)
}