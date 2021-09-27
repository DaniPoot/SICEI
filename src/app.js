const fastify = require('fastify')({ logger: true })
const students = require('./ students.js')

fastify.get('/', async (request, reply) => {
  return 'Bienvenido a Sicei'
})

fastify.get('/students', async (request, reply) => {
  return students
})

const start = async () => {
  try {
    await fastify.listen(3000, '0.0.0.0')
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}


module.exports = start