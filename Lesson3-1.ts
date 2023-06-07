interface User {
  name: string;
  age: number;
  group: string;
  type: string;
};

interface Admin {
  name: string;
  age: number;
  role: string;
  type: string;
}

type Person = User | Admin;

const persons: Person[] = [
  {
    name: 'Иван Петров',
    age: 27,
    group: 'SEO-специалист',
    type: 'user',
  },
  {
    name: 'Марат Aляуддинов',
    age: 20,
    group: 'Музыкант',
    type: 'user',
  },
  {
    name: 'Ольга Николаева',
    age: 35,
    group: 'Семья',
    type: 'user',
  },
  {
    name: 'Игорь Иванов',
    age: 40,
    group: 'Друзья',
    type: 'user',
  },
  {
    name: 'Марат Нигматуллин',
    age: 41,
    group: 'Друзья',
    type: 'user',
  },
  {
    name: 'Дима Билан',
    age: 45,
    role: 'Администратор',
    type: 'admin',
  }
];

const logPerson = (person: Person) => {
  let information: string;
  if ('role' in person) {
    information = person.role;
  } else {
    information = person.group;
  }
  console.log(`${person.name}, ${person.age}, ${information}`);
};

persons.forEach(logPerson);
