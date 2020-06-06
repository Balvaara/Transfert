import { Role } from './role';

export interface User {
    username?:string;
    password?:string;
    token?:string;
    nomComplet ?:string;
    isActive ?:boolean;
    profil?:any;
    photo?:any;
    roles?:any;
}
