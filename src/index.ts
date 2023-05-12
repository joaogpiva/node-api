import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
const express = require('express')
const app = express()
const port = 3000

app.get('/', async(req: any, res: any) => {
    const allTasks = await prisma.task.findMany()
    res.send(allTasks)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})