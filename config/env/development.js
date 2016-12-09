module.exports = {
  // Development configuration options
  db: 'mongodb://localhost/mean-book',
  sessionSecret: 'develomentSessionSecret',
  facebook: {
    clientID: '591347797716981',
    clientSecret: '9c4cc0c4b2543b80652e992756ffa3f5',
    callbackURL: 'http://localhost:3000/oauth/facebook/callback'
  }
}
