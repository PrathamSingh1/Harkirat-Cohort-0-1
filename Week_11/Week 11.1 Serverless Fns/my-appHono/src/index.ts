import { Hono } from 'hono'

const app = new Hono()

app.post('/', async (c) => {
  // body,  headers, query parameters, middlewares, connection to a database
  // c => context

  const body = await c.req.json()
  console.log(body);
  console.log(c.req.header("Authorization"));
  console.log(c.req.query("param"));
  return c.text("Hello Hono!")
})


app.get('/user', (c) => {
  return c.text('Hello Hono!')
})
 
export default app
