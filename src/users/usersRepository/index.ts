import { randomUUID } from 'crypto';
import { PartialUser, UserDto } from '../dtos/user.dto.js';
import type { User } from './userModel.js';

const createUserRepository = () => {
  const users: User[] = [];

  return {
    users,

    getOne(id: string) {
      return this.users.find((user) => user.id === id);
    },
    getAll() {
      return [...this.users];
    },
    create(user: UserDto) {
      this.users.push({ id: randomUUID(), ...user });
    },
    update(id: string, userInfo: PartialUser) {
      const user = this.delete(id);
      if (user) {
        const updatedUser = { ...user, ...userInfo };
        this.users.push(updatedUser);
        return { ...updatedUser };
      }
    },
    delete(id: string) {
      const index = this.users.findIndex((user) => user.id === id);
      if (index >= 0) {
        return this.users.splice(index, 1)[0];
      }
    },
  };
};

const userRepository = createUserRepository();

export default userRepository;
