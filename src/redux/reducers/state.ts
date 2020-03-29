import { IUser } from "../../types";
import { IAuth } from "../../types/auth";

export interface IRootReducer {
    router: any,
    user: IUser,
    auth: IAuth,
}
