import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

//async function here sends queries to the database
async function main() {
  // run a prisma create method on the "User" data type.
  // Interesting thing here, based on relations you can create posts _for the user you're creating_
  // await prisma.user.create({
  //   data: {
  //     name: "Dom",
  //     email: "dom@houseofgiants.com",
  //     posts: {
  //       create: { title: "Hello World" },
  //     },
  //     profile: {
  //       create: { bio: "Neat" }
  //     }
  //   }
  // })

  // Query all users, include their posts, and profile.
  // const allUsers = await prisma.user.findMany({
  //   include: {
  //     posts: true,
  //     profile: true
  //   }
  // })
  // console.dir(allUsers, {depth: null})

  // Update a post with id: 1, change published to `true`
  // const post = await prisma.post.update({
  //   where: { id: 1 },
  //   data: { published: true }
  // })

  // console.log(post)

  // Create a new post and connect it to an existing User
  // const post = await prisma.post.create({
  //   data: {
  //     title: "We are learning",
  //     author: {
  //       connect: { email: "dom@houseofgiants.com" }
  //     }
  //   }
  // })

  // console.log(post)

  // Find posts that contain 'Hello' is case sensitive.
  // const filteredPosts = await prisma.post.findMany({
  //   where: {
  //     OR: [
  //       { title: { contains: 'Hello' } },
  //       { content: { contains: 'Hello'} },
  //     ]
  //   }
  // })

  // console.log(filteredPosts)

  const post = await prisma.post.update({
    where: { id: 2 },
    data: { published: true }
  })

  console.log(post)
}

// Call the main function, catch any errors, once script finishes, disconnect from the DB
main()
  .catch(e => {
    throw e
  })
  .finally(async () => {
    await prisma.disconnect();
  })