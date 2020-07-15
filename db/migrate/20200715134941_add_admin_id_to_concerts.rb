class AddAdminIdToConcerts < ActiveRecord::Migration[6.0]
  def change
    add_column :concerts, :admin_id, :integer
  end
end
