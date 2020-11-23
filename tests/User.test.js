import Chai from 'chai'
import ChaiHTTP  from 'chai-http'
import { describe, it } from 'mocha'
import app from '../Server.js'

Chai.should()
Chai.use(ChaiHTTP)

const testingNonExistentRoute = () => {
    describe('Testing a route that does not exist', () => {
      it('Expecting 404 not found', (done) => {
        Chai.request(app)
        .get('/randomURL') 
        .end((request, response) => {
          response.should.have.a.status(404)
          done()
        })
      })
    })
}

describe('TESTING THE USER_API ROUTE', () => {
  testingNonExistentRoute()
})
