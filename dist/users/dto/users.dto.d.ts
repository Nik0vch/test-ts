import { UserEntity } from '../users.entity';
export declare class UserDto {
    first_name: string;
    last_name: string;
    age: number;
    constructor(partial: Partial<UserEntity>);
}
