import { Injectable } from '@nestjs/common';
import { User } from './models/user.model';
import { Pet } from './models/pet.model';


@Injectable()
export class UsersService {
  private users: User[] = [{
    id: 1,
    name: 'Pedro',
    pets: [{id: 1, animal: 'dog', name: 'ajudante'}, {id: 2, animal: 'hamster', name: 'dunkalicious'}]
  },
  {
    id: 2,
    name: 'ana',
    pets: [{id: 3, animal: 'dog', name: 'lucky'}]
  }];
  
  private userId = 3;
  private petId = 4;


  create(user: User){
    user.pets = [];
    user.id = this.userId;
    this.users.push(user);
    this.userId++
    return user;
  }

  addPet(id: number, pet: Pet) {
    pet.id = this.petId;

    this.users.forEach(user => {
      if(user.id == id) {
        user.pets.push(pet);
      }      
    });
    
    this.petId++;
  }

  findAll(): User[] {
    return this.users;
  }

  find(id: number): User {
    return this.users.find(user => user.id == id);
  }
}
