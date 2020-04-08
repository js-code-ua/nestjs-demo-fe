import { IUser } from "../../types";
import { IAuth } from "../../types/auth";

export interface IRootState {
    router: any,
    user: IUser,
    auth: IAuth,
}
