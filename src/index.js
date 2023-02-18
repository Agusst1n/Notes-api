import app from "./app";

const PORT = process.env.PORT

app.listen(PORT, ()=>{
    console.log(`app listen in the port ${PORT}`)
})

