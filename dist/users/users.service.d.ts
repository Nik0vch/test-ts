import { UsersRepository } from './users.repository';
import { UserEntity } from './users.entity';
export declare class UsersService {
    private usersRepository;
    constructor(usersRepository: UsersRepository);
    getAll(): Promise<UserEntity[]>;
    getAllSort(sortCondition: any): Promise<any>;
    getOneById(id: number): Promise<UserEntity>;
    addUser(firstName: string, lastName: string, age: number): Promise<void>;
    deleteOneById(id: number): Promise<void>;
    changUser(id: number, first_name: string, last_name: string, age: number): Promise<void>;
}
