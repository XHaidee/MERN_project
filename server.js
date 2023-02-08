const express = require('express')
const app=express()
const cors=require('cors')
const errorHandler=require('./middleware/errorHandlier')
const PORT = process.env.PORT || 3500
const {logger}=require('./middleware/logger')

app.use(logger)
app.use(cors)
app.use('/',require('./routers/root'))
app.use(errorHandler)
app.listen(PORT,()=>console.log((`server running on port ${PORT
}`)))