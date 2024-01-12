class User < ApplicationRecord
    has_secure_password
  
    validates :name, presence: true, length: { maximum: 100 }
    validate :name_has_at_least_two_words
    validates :email, 
      uniqueness: true, 
      length: { in: 3..100 }, 
      format: { with: URI::MailTo::EMAIL_REGEXP }
    validates :session_token, presence: true, uniqueness: true
    validates :password, length: { in: 6..40 }, allow_nil: true
    
    before_validation :ensure_session_token
  
    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        user&.authenticate(password)
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

    def name_has_at_least_two_words
        return if name.blank?
        errors.add(:name, "must contain at least two words") unless name.split.size >= 2
      end
  
    def ensure_session_token
      self.session_token ||= generate_unique_session_token
    end
  end
  