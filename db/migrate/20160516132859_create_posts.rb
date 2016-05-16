class CreatePosts < ActiveRecord::Migration
  def change
    create_table :posts do |t|
      t.string :subject
      t.text :text
      t.boolean :is_base, index: true
      t.integer :reply_to
      t.integer :tread_id, index: true
      t.integer :user_id, index: true

      t.timestamps null: false
    end
  end
end
