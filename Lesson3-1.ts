interface User {
  name: string;
  age: number;
  group: string;
};

interface Admin {
  name: string;
  age: number;
  role: string;
}

type Person = User | Admin;

const persons: Person[] = [
  {
    name: 'Иван Петров',
    age: 27,
    group: 'SEO-специалист',
  },
  {
    name: 'Марат Aляуддинов',
    age: 20,
    group: 'Музыкант',
  },
  {
    name: 'Ольга Николаева',
    age: 35,
    group: 'Семья',
  },
  {
    name: 'Игорь Иванов',
    age: 40,
    group: 'Друзья',
  },
  {
    name: 'Марат Нигматуллин',
    age: 41,
    group: 'Друзья',
  },
  {
    name: 'Дима Билан',
    age: 45,
    role: 'Администратор',
  }
];

const logPerson = (person: Person) => {
  let adminPerson = person as Admin;
  let userPerson = person as User;
  let information: string;
  if (adminPerson.role) {
    information = adminPerson.role;
  } else {
    information = userPerson.group;
  }
  console.log(`${person.name}, ${person.age}, ${information}`);
};

persons.forEach(logPerson);
