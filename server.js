const express =  require('express')

const users = [
    {
    name: 'Ander',
    password: 123456
    },
    {
    name: 'Alphonse',
    password: 123456
    },
    {
    name: 'Maria',
    password: 123456
    },
    {
    name: 'Jon',
    password: 123456
    },
    {
    name: 'Telo',
    password: 123456
    },
    {
    name: 'Sanjo',
    password: 123456
    }
]


const app = express()
app.get('', (req,res) => {
    res.send('Server')
})
app.listen(3000, () => {
    console.log('listening on port 3000');
})

app.get('/api', (req,res) => {
    res.json(users)
})
