require 'test_helper'

class CountGameControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get count_game_index_url
    assert_response :success
  end

end
