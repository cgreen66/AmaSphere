# Be sure to restart your server when you modify this file.

# Avoid CORS issues when API is called from the frontend app.
# Handle Cross-Origin Resource Sharing (CORS) in order to accept cross-origin AJAX requests.

# Read more: https://github.com/cyu/rack-cors

# Rails.application.config.middleware.insert_before 0, Rack::Cors do
#   allow do
#     origins "example.com"
#
#     resource "*",
#       headers: :any,
#       methods: [:get, :post, :put, :patch, :delete, :options, :head]
#   end
# end

Rails.application.config.middleware.insert_before 0, Rack::Cors do
    allow do
      origins '*'  # Specify the domain of your frontend app
      resource '*',  # Paths that should be accessible
        headers: :any,
        methods: [:get, :post, :put, :patch, :delete, :options, :head],
        credentials: false  # Include this if your frontend sends cookies or auth headers
    end
  end
  