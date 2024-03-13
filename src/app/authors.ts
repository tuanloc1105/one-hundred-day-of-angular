import { faker } from "@faker-js/faker";


export interface Author {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  ipAddress: string;
}

// Function to generate fake user data
function generateFakeAuthor(id: number): Author {
  return {
    id: id,
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: faker.internet.email(),
    gender: faker.person.gender(),
    ipAddress: faker.internet.ip(),
  };
}

// Generate 100 fake users
export const fakeUsers: Author[] = [];
for (let i = 1; i <= 100; i++) {
  fakeUsers.push(generateFakeAuthor(i));
}
