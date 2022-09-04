import request from 'supertest'
import app from '../config/app'

describe('SignUp Routes', () => {
  test('Should return an account on success', async () => {
    await request(app)
      .post('/api/signup')
      .send({
        name: 'Gabriel',
        email: 'gsilva.1996@alunos.utfpr.edu.br',
        password: 'gabriel1234',
        passwordConfirmation: 'gabriel1234'
      })
      .expect(200)
  })
})
