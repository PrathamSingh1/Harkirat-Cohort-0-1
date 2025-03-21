import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

// It is similar to 

// import mongoose form "mongoose"
// mongoose.connect()

// //      insert user

// async function insertUser(email: string, password: string, firstName: string, lastName: string) {
//     const res = await prisma.user.create({
//         data: {
//             email,
//             password,
//             firstName,
//             lastName
//         },
//         select: {
//             id: true,
//             password: true
//         },
//     })
//     console.log(res);
// }

// insertUser("pratham1@gmail.com", "password", "Pratham", "Singh")




//          update user

interface UpdateParams {
    firstName: string;
    lastName: string;
}

async function updateUser(email: string, {
    firstName,
    lastName
}: UpdateParams) {
    const res = await prisma.user.update({
        where: {email: email},
        data: {
            firstName,
            lastName
        }
    })
    console.log(res);
}

updateUser("pratham@gmail.com", {
    firstName: 'Pratham1',
    lastName: 'Singh'
})