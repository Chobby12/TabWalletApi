const express = require('express')
const app = express()
const cors = require('cors')
const users = require('./users')

const PORT = process.env.PORT || 5000

app.use(cors())
// app.use(express.json())

app.get('/',(req, res)=>{
    res.status(200).send(`<h1>Users Api</h1><a href='/api/v1/users'>Users</a>`)
})

app.get('/api/v1/users',(req, res)=>{
    const {search, limit} = req.query
    let filteredUsers = [...users];

    if(search){
        filteredUsers = filteredUsers.filter(user => user.username.toLowerCase().startsWith(search.toLowerCase()))
    }
    if(limit && !isNaN(limit)){
        filteredUsers = filteredUsers.slice(0, Number(limit))
    }
    
    return res.status(200).json(filteredUsers)
})

app.get('/api/v1/users/:id', (req, res)=>{
    const {id} = req.params
    const user = users.find(person => person.id === Number(id))
    return user ? res.status(200).json(user) : res.status(404).json({msg: 'User not found'})
})

app.get('/api/v1/users-portfolio/:portfolio',(req, res)=>{
    const {portfolio} = req.params
    const portfolioUsers = users.filter(user => user.portfolio.toLowerCase() === portfolio.toLowerCase()) 
    return portfolioUsers.length > 0 ?  res.status(200).json(portfolioUsers) : res.status(404).json({msg: 'not a valid portfolio'})
})

app.all(/(.*)/, (req, res)=>{
    res.status(404).json({status: 404, msg: 'Resource not found'})
})

app.listen(PORT, ()=>console.log(`Server is listening on port: ${PORT}`))