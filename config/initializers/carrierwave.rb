CarrierWave.configure do |config|
  config.fog_provider = 'fog/aws'
  config.fog_credentials = {
    provider: 'AWS',
    aws_access_key_id: ENV['AWS_ACCESS_KEY_ID'],
    aws_secret_access_key: ENV['AWS_SECRET_ACCESS_KEY'],
    region: ENV['AWS_REGION'],
  }

  case Rails.env
  when 'production'
    config.fog_directory = ENV['AWS_S3_BUCKET']
  when 'development'
    config.fog_directory = ENV['AWS_S3_BUCKET_DEV']
  end
  
end
 
CarrierWave::SanitizedFile.sanitize_regexp = /[^[:word:]\.\-\+]/
