const swaggerAutogen = require('swagger-autogen')()

const outputFile = './swagger_output.json'
const endpointsFiles = ['./routes/rest_medico.js']

swaggerAutogen(outputFile, endpointsFiles)