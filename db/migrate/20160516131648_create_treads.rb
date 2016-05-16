class CreateTreads < ActiveRecord::Migration
  def change
    create_table :treads do |t|
      t.string :name
      t.string :board_id, index: true

      t.timestamps null: false
    end
  end
end
