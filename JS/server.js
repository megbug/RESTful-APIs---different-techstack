import express from 'express'

const app = express();
app.use(express.json());

const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.post('/user', (req, res) => {
    const {name, age} = req.body
    return res.send({
        name, 
        age,
        answer: "blob"
    })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})