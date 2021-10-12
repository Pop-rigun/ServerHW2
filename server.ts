import express from 'express'
import mongoose from 'mongoose'

const app = express();


const port:number = 3000;
const dbUrl:string = "mongodb+srv://admin:admin@homework5.trezo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

app.use(express.json()); 

app.use(function logMethodAndUrl(request, response, next) {
    console.log(`${request.method} ${request.url}`)
    next()
})

app.use('/worker', require('./workerRouter'))
app.use('/job', require('./jobRouter'))


async function start(){
    try {
        await mongoose.connect(dbUrl,{useNewUrlParser: true, useUnifiedTopology: true })
        app.listen(port)
        console.log(`Server is listening on ${port}`)
    } catch (err){
        console.log(err)
    }
}

start()
