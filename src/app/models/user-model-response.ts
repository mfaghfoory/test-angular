import { UserModel } from './user-model';

export class UserModelResponse {
    data: UserModel[];
    total_pages: number;
    total: number;
    per_page: number;
    page: number;
}
