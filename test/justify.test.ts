import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../app/lib/server';

chai.use(chaiHttp);
const expect = chai.expect;

describe('Justify API Endpoint', () => {

  context('POST /api/justify', () => { // Start of context block

    it('should pass with line of text and a length input of 52', (done) => {
      const justificationData = {
        line: 'The quick brown fox jumps over the lazy dog.',
        length: '52'
      };
  
      chai.request(app)
        .post('/api/justify')
        .send(justificationData)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
  
          expect(res).to.have.status(200);
          expect(res.text).to.be.a('string');
          expect(res.text.length).to.equal(52);
          expect(res.text).to.equal('The  quick  brown  fox  jumps  over  the  lazy  dog.');
  
          done();
        });
    });
    
    it('should pass with line of text and a length input of 65', (done) => {
      const justificationData = {
        line: 'The quick brown fox jumps over the lazy dog.',
        length: '65'
      };
  
      chai.request(app)
        .post('/api/justify')
        .send(justificationData)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
  
          expect(res).to.have.status(200);
          expect(res.text).to.be.a('string');
          expect(res.text.length).to.equal(65);
          expect(res.text).to.equal('The    quick    brown    fox    jumps    over   the   lazy   dog.');
  
          done();
        });
    });

    it('should pass with line of text and a length input of 20', (done) => {
      const justificationData = {
        line: 'w a',
        length: '20'
      };
  
      chai.request(app)
        .post('/api/justify')
        .send(justificationData)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
  
          expect(res).to.have.status(200);
          expect(res.text).to.be.a('string');
          expect(res.text.length).to.equal(20);
          expect(res.text).to.equal('w                  a');
  
          done();
        });
    });
    
    it('should pass with only one work in line and length input of 50', (done) => {
      const justificationData = {
        line: 'hello',
        length: '50'
      };
  
      chai.request(app)
        .post('/api/justify')
        .send(justificationData)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
  
          expect(res).to.have.status(200);
          expect(res.text).to.be.a('string');
          expect(res.text.length).to.equal(5);
          expect(res.text).to.equal('hello');
  
          done();
        });
    });
    
    it('should not pass with no line input and length input of 20', (done) => {
      const justificationData = {
        line: '',
        length: '20'
      };
  
      chai.request(app)
        .post('/api/justify')
        .send(justificationData)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
  
          expect(res).to.have.status(400);
          expect(res.body).to.be.a('object');
          expect(res.body).to.deep.equal({ error: 'Input values are required' });
  
          done();
        });
    });
    
    it('should not pass with a line input and no length input', (done) => {
      const justificationData = {
        line: 'hello world',
        length: '',
      };
  
      chai.request(app)
        .post('/api/justify')
        .send(justificationData)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
  
          expect(res).to.have.status(400);
          expect(res.body).to.be.a('object');
          expect(res.body).to.deep.equal({ error: 'Input values are required' });
  
          done();
        });
    });
    
    it('should not pass with no line input and no length input', (done) => {
      const justificationData = {
        line: '',
        length: '',
      };
  
      chai.request(app)
        .post('/api/justify')
        .send(justificationData)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
  
          expect(res).to.have.status(400);
          expect(res.body).to.be.a('object');
          expect(res.body).to.deep.equal({ error: 'Input values are required' });
  
          done();
        });
    });
    
    it('should not pass with no line input and no length input', (done) => {
      const justificationData = {
        line: 58,
        length: 45,
      };
  
      chai.request(app)
        .post('/api/justify')
        .send(justificationData)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
  
          expect(res).to.have.status(400);
          expect(res.body).to.be.a('object');
          expect(res.body).to.deep.equal({ error: 'Input values must be strings' });
  
          done();
        });
    });
    
    it('should not pass with line input larger than length input', (done) => {
      const justificationData = {
        line: 'The quick brown fox jumps over the lazy dog.',
        length: '5',
      };
  
      chai.request(app)
        .post('/api/justify')
        .send(justificationData)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
  
          expect(res).to.have.status(400);
          expect(res.body).to.be.a('object');
          expect(res.body).to.deep.equal({ error: 'Length is not large enough' });
  
          done();
        });
    });
    
    it('should not pass with line input is equal to the length input', (done) => {
      const justificationData = {
        line: 'hello',
        length: '5',
      };
  
      chai.request(app)
        .post('/api/justify')
        .send(justificationData)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
  
          expect(res).to.have.status(200);
          expect(res.text).to.be.a('string');
          expect(res.text.length).to.equal(5);
          expect(res.text).to.deep.equal('hello');
  
          done();
        });
    });
    
    it('should pass with length input one length longer than line input', (done) => {
      const justificationData = {
        line: 'hello world',
        length: '12',
      };
  
      chai.request(app)
        .post('/api/justify')
        .send(justificationData)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
  
          expect(res).to.have.status(200);
          expect(res.text).to.be.a('string');
          expect(res.text.length).to.equal(12);
          expect(res.text).to.equal('hello  world');
  
          done();
        });
    });
  });
});
