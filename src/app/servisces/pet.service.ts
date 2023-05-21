import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Pet} from "../model/pet";

const SERVER_API = "http://localhost:8080/api/pets/";

@Injectable({
  providedIn: 'root'
})
export class PetService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<any> {
    return this.http.get(SERVER_API);
  }

  save(pets: string, petName: string, age: number, sexOfTheAnimal: string, city: string, emailOfTheOwner: string, phoneNumberOfTheOwner: string): Observable<any> {
    const p: Pet = {
      pets: pets,
      petName: petName,
      age: age,
      sexOfTheAnimal: sexOfTheAnimal,
      city: city,
      emailOfTheOwner: emailOfTheOwner,
      phoneNumberOfTheOwner: phoneNumberOfTheOwner
    };
    return this.http.post(SERVER_API, p)
  }
}
