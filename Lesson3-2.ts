interface User {
  type: 'user';
  name: string;
  age: number;
  group: string;
}

interface Admin {
  type: 'admin';
  name: string;
  age: number;
  role: string;
}

type Person = User | Admin;

const persons: Person[] = [
  {
    type: 'user',
    name: 'Иван Петров',
    age: 27,
    group: 'SEO-специалист',
  },
  {
    type: 'user',
    name: 'Марат Aляуддинов',
    age: 20,
    group: 'Музыкант',
  },
  {
    type: 'user',
    name: 'Ольга Николаева',
    age: 35,
    group: 'Семья',
  },
  {
    type: 'user',
    name: 'Игорь Иванов',
    age: 40,
    group: 'Друзья',
  },
  {
    type: 'user',
    name: 'Марат Нигматуллин',
    age: 41,
    group: 'Друзья',
  },
  {
    type: 'admin',
    name: 'Дима Билан',
    age: 45,
    role: 'Администратор',
  }
];

const isAdmin = (person: Person) => {
  return person.type === 'admin';
}

const isUser = (person: Person) => {
  return person.type === 'user';
}

const logPerson = (person: Person) => {
  let adminPerson = person as Admin;
  let userPerson = person as User;
  let information: string = '';
  if (isAdmin(adminPerson)) {
    information = adminPerson.role;
  }
  if (isUser(userPerson)) {
    information = userPerson.group;
  }
  console.log(` - ${person.name}, ${person.age}, ${information}`);
}

console.log('Admins:');
persons.filter(isAdmin).forEach(logPerson);

console.log();

console.log('Users:');
persons.filter(isUser).forEach(logPerson);
