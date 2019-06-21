class PlaceApiController < ApplicationController
  def show
    require 'net/http'
    require 'uri'
    require 'json'

    @body = []

    # uri = URI.parse('https://maps.googleapis.com/maps/api/place/details/json?placeid=ChIJx-NPtlK_QzURgR9gqsaDCn8&fields=name,rating,formatted_phone_number,formatted_address,url,icon&launguage=jp&region=jp&key=AIzaSyA98KOQTpTOsj3o8YQG6_lDJsBgYwhjPbI')
    if params[:input]
      request = "https://maps.googleapis.com/maps/api/place/autocomplete/json?input=" + params[:input] + "&types=establishment&location=34.68291,134.87708&language=ja&radius=1000000&strictbounds&types=establishment&key=AIzaSyA98KOQTpTOsj3o8YQG6_lDJsBgYwhjPbI"
      uri = URI.encode(request)
      # uri = URI.encode("https://maps.googleapis.com/maps/api/place/autocomplete/json?input=サンセット&types=establishment&location=34.68291,134.87708&language=ja&radius=1000000&strictbounds&key=AIzaSyA98KOQTpTOsj3o8YQG6_lDJsBgYwhjPbI")
      uri = URI.parse(uri)
      response = Net::HTTP.post_form(uri, {})
      @body = response.body
    end
    
    render json: @body

  end
end
