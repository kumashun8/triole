class PlaceApiController < ApplicationController
  def show
    require 'net/http'
    require 'uri'
    require 'json'

    uri = URI.parse(`https://maps.googleapis.com/maps/api/place/details/`)

    req = Net::HTTP::Post.new(uri)
    req["Authorization"] = "Bearer sample_token"
    post_data = {
      'placeid' => 'ChIJx-NPtlK_QzURgR9gqsaDCn8',
      'fields' => 'name,rating,formatted_phone_number,formatted_address,url,icon',
      'language' => 'jp',
      'key' => 'AIzaSyA98KOQTpTOsj3o8YQG6_lDJsBgYwhjPbI'
    }.to_json
    req.body = post_data

    req_options = {
      use_ssl: url.scheme = "https"
    }

    @response = Net::HTTP.start(uri.hostname, uri.port, req_options) do |http|
      http.request(req)
    end

    render json: @response

  end
end
