import { UsersService } from './users.service';
import { UserDto } from './dto/users.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    getUsersAll(req: any): Promise<any>;
    getUserById(params: any): Promise<import("./users.entity").UserEntity>;
    addUser(body: UserDto): void;
    remove(params: any): void;
    change(body: UserDto, params: any): void;
}
