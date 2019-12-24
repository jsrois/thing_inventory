require 'test_helper'

class ThingControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get thing_index_url
    assert_response :success
  end

end
