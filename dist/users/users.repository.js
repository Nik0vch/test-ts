"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersRepository = void 0;
const typeorm_1 = require("typeorm");
const common_1 = require("@nestjs/common");
const users_entity_1 = require("./users.entity");
let UsersRepository = exports.UsersRepository = class UsersRepository extends typeorm_1.Repository {
    constructor(dataSource) {
        super(users_entity_1.UserEntity, dataSource.createEntityManager());
        this.dataSource = dataSource;
    }
    async getAll() {
        return this.find();
    }
    async getOneById(id) {
        return this.findOneBy({ id });
    }
    async getByFilter(sortCondition) {
        let orderBy = '', where = '', offset = '', limit = '';
        if (sortCondition.first_name || sortCondition.last_name || sortCondition.age) {
            where = 'where ';
            if (sortCondition.first_name)
                where += ('first_name = \'' + sortCondition.first_name + '\' and ');
            if (sortCondition.last_name)
                where += ('last_name = \'' + sortCondition.last_name + '\' and ');
            if (sortCondition.age)
                where += ('age = \'' + sortCondition.age + '\' and ');
            where = where.slice(0, -5);
        }
        if (sortCondition.sort)
            orderBy = 'order by ' + sortCondition.sort + ' ' + sortCondition.order;
        if (sortCondition.perPage) {
            limit = 'limit ' + sortCondition.perPage;
            offset = 'offset ' + (sortCondition.page - 1) * sortCondition.perPage;
        }
        return this.query('SELECT * FROM users ' + where + ' ' + orderBy + ' ' + limit + ' ' + offset + ';');
    }
    async createUser(firstName, lastName, age) {
        const user = new users_entity_1.UserEntity();
        user.first_name = firstName;
        user.last_name = lastName;
        user.age = age;
        return this.save(user);
    }
    async change(id, firstName, lastName, age) {
        const user = new users_entity_1.UserEntity();
        user.id = id;
        user.first_name = firstName;
        user.last_name = lastName;
        user.age = age;
        return this.save(user);
    }
};
exports.UsersRepository = UsersRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeorm_1.DataSource])
], UsersRepository);
//# sourceMappingURL=users.repository.js.map