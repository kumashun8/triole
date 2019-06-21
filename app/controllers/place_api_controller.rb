class PlaceApiController < ApplicationController
  def show
    require 'net/http'
    require 'uri'
    require 'json'

    @body = []
    
    if params[:input]
      request = "https://maps.googleapis.com/maps/api/place/autocomplete/json?input=" + params[:input] + "&types=establishment&location=34.68291,134.87708&language=ja&radius=1000000&strictbounds&types=establishment&key=" + ENV['API_KEY']
      uri = URI.encode(request)
      uri = URI.parse(uri)
      response = Net::HTTP.post_form(uri, {})
      @body = response.body
    end
    
    render json: @body

  end
end
