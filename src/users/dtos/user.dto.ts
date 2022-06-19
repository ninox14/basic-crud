export interface UserDto {
  username: string;
  age: number;
  hobbies: string[];
}

export type PartialUser = Partial<UserDto>;
