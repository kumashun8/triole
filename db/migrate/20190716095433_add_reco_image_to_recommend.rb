class AddRecoImageToRecommend < ActiveRecord::Migration[5.2]
  def change
    add_column :recommends, :reco_image, :text
  end
end
