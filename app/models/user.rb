class User < ApplicationRecord
  has_secure_password

  validates :name, presence: true
  validates :email, 
  uniqueness: { message: 'Email has already been taken' }, 
  length: { in: 3..100, too_short: 'Email is too short', too_long: 'Email is too long' }, 
  format: { with: URI::MailTo::EMAIL_REGEXP, message: 'Email format is invalid' }

  validates :session_token, presence: true, uniqueness: true
  validates :password, length: { in: 6..40 }, allow_nil: true
  
  before_validation :ensure_session_token

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return nil unless user
    return user if user.authenticate(password)
    nil
  end
  

  def reset_session_token!
    self.update!(session_token: generate_unique_session_token)
    self.session_token
  end

  private

  def generate_unique_session_token
    loop do
      token = SecureRandom.base64
      break token unless User.exists?(session_token: token)
    end
  end

  def ensure_session_token
    self.session_token ||= generate_unique_session_token
  end
end
