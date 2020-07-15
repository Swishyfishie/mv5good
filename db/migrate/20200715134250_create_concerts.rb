class CreateConcerts < ActiveRecord::Migration[6.0]
  def change
    create_table :concerts do |t|
      t.string :event
      t.string :location
      t.float :ticket_price
      t.string :date
      t.string :time
      t.text :more_info

      t.timestamps
    end
  end
end
