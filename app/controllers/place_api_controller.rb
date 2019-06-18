class PlaceApiController < ApplicationController
  def show
    require 'net/http'
    require 'uri'
    require 'json'

    uri = URI.parse('https://maps.googleapis.com/maps/api/place/details/json?placeid=ChIJx-NPtlK_QzURgR9gqsaDCn8&fields=name,rating,formatted_phone_number,formatted_address,url,icon&launguage=jp&region=jp&key=AIzaSyA98KOQTpTOsj3o8YQG6_lDJsBgYwhjPbI')
    response = Net::HTTP.post_form(uri, {})
    puts response.body

    @body = response.body

    render json: @body

  end
end
