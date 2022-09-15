const dotenv=require('dotenv')
const mongoose=require('mongoose')
dotenv.config({path:'./.env'})
// console.log(process.env);
const DB=process.env.DATABASE.replace('<PASSWORD>',process.env.DATABASE_PASSWORD)

mongoose.connect(DB, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then(con=>{
    console.log('Connected to DB')
})

const app = require('./app')

console.log(process.env.NODE_ENV);

const PORT=3000 || process.env.PORT;
app.listen(PORT, ()=> console.log(`APP RUNNING ON PORT ${PORT}`));