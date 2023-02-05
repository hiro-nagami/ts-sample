type TProps = {
  name: string
  age: number
} 

interface PeopleParams extends TProps {}

class People implements PeopleParams {
  name: string
  age: number

  constructor({ name, age }: TProps) {
      this.name = name
      this.age = age
  }
}

export class Room {
  peoples: Map<string, People>

  constructor() {
      this.peoples = new Map<string, People>()
  }

  set(people: People) {
      this.peoples.set(people.name, people);
  }

  getPeople(name: string): People | undefined {
      return this.peoples.get(name)
  }
}

function displayPeople(name: string) {
  console.log(JSON.stringify(room.getPeople(name)));
}

let room = new Room();

let people_a = new People({ name: 'Taro', age: 20 });
let people_b = new People({ name: 'Satoko', age: 19 });

room.set(people_a);
room.set(people_b);

displayPeople('Taro');

displayPeople('Satoko');

// Update Satoko
let satoko = room.getPeople('Satoko');

if (satoko) {
  satoko.age = 20;
  room.set(satoko);
}

displayPeople('Satoko');
displayPeople('Hanako');

