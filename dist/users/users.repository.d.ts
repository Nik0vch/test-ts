import { DataSource, Repository } from 'typeorm';
import { UserEntity } from './users.entity';
export declare class UsersRepository extends Repository<UserEntity> {
    private readonly dataSource;
    constructor(dataSource: DataSource);
    getAll(): Promise<UserEntity[]>;
    getOneById(id: number): Promise<UserEntity | null>;
    getByFilter(sortCondition: any): Promise<any>;
    createUser(firstName: string, lastName: string, age: number): Promise<UserEntity>;
    change(id: number, firstName: string, lastName: string, age: number): Promise<UserEntity>;
}
