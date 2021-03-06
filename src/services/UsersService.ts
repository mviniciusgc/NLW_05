import { getCustomRepository, Repository } from 'typeorm';
import { User } from '../entities/Users';
import { UsersRepository } from '../repositories/UsersRepository';


class UsersService {


    private usersRepository: Repository<User>

    constructor() {
        this.usersRepository = getCustomRepository(UsersRepository);
    }
    async create(email: string) {
        const userExists = await this.fyndByEmail(email)
        if (userExists) {
            return userExists;
        }

        const user = this.usersRepository.create({ email });

        await this.usersRepository.save(user);

        return user;
    };

    async fyndByEmail(email: string) {
        return await this.usersRepository.findOne({ email });
    };
}

export { UsersService };