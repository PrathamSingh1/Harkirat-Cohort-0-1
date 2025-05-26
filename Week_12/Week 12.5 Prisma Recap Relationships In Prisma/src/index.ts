import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// async function insertUser(username: string, password: string, firstName: string, lastName: string, email: string) {
//   const response = await prisma.user.create({
//     data: {
//       username,
//       password,
//       firstName,
//       lastName,
//       email
//     }
//   })
//   console.log(response);
// }

// insertUser('r121am', 'ra2321m', 'r232am', 'ra23m', 'ram23');  



async function getTodosAndUserDetails(userId: number) {

  const response = await prisma.todo.findMany({
    where: {
      userId: userId
    },
    select: {
      id: true,
      title: true,
      description: true,
      user: true
    }
  })
  console.log(response);
}

getTodosAndUserDetails(1);