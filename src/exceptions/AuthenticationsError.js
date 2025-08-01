const ClientError = require('./ClientError');

class AuthenticationsError extends ClientError {
  constructor(message) {
    super(message, 401);
    this.name = 'AuthenticationError';
  }
}

module.exports = AuthenticationsError;