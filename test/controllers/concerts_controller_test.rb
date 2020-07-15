require 'test_helper'

class ConcertsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @concert = concerts(:one)
  end

  test "should get index" do
    get concerts_url, as: :json
    assert_response :success
  end

  test "should create concert" do
    assert_difference('Concert.count') do
      post concerts_url, params: { concert: { date: @concert.date, event: @concert.event, location: @concert.location, more_info: @concert.more_info, ticket_price: @concert.ticket_price, time: @concert.time } }, as: :json
    end

    assert_response 201
  end

  test "should show concert" do
    get concert_url(@concert), as: :json
    assert_response :success
  end

  test "should update concert" do
    patch concert_url(@concert), params: { concert: { date: @concert.date, event: @concert.event, location: @concert.location, more_info: @concert.more_info, ticket_price: @concert.ticket_price, time: @concert.time } }, as: :json
    assert_response 200
  end

  test "should destroy concert" do
    assert_difference('Concert.count', -1) do
      delete concert_url(@concert), as: :json
    end

    assert_response 204
  end
end
