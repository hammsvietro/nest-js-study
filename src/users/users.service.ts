import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, In } from 'typeorm';
import { User } from './models/user.model';
import { Pet } from './models/pet.model';


@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    
    @InjectRepository(Pet)
    private petsRepository: Repository<Pet>
  )  {}

  async create(user: User) {
    return await this.usersRepository.save(user);
  }

  async addPet(userId: number, pet: Pet) {
    let newPet = new Pet();
    
    newPet.animal = pet.animal;
    newPet.name = pet.name;
    newPet.user = {id: userId} as User; // TODO: Create user and pet Request DTO. 

    return await this.petsRepository.save(newPet);
  }

  async findAll(): Promise<User[]> {
    let result = await this.usersRepository.find({relations: ['pets']});
    return result;
  }

  async find(id: number): Promise<User> {
    return await this.usersRepository.findOne(id);
  }
}
