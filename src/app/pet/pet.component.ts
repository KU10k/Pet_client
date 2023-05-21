import {Component, OnInit} from '@angular/core';
import {Pet} from "../model/pet";
import {PetService} from "../servisces/pet.service";

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css']
})
export class PetComponent implements OnInit {
  p: Pet[] = [];

  constructor(private petService: PetService) {
  }

  ngOnInit(): void {
    this.petService.getAll()
      .subscribe(data => {
        this.p = data;
      });
  }


  save(pets: string, petName: string, age: string, sexOfTheAnimal: string, city: string, emailOfTheOwner: string, phoneNumberOfTheOwner: string) {
    let ageNumber: number = Number(age);

    this.petService.save(pets, petName, ageNumber, sexOfTheAnimal, city, emailOfTheOwner, phoneNumberOfTheOwner)
      .subscribe(data => {
        this.p.push(data);
      });
  }
}
