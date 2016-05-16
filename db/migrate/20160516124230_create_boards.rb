class CreateBoards < ActiveRecord::Migration
  def change
    create_table :boards, id: false do |t|
      t.string :name, null: false
      t.string :full_name
      t.text :description

      t.timestamps null: false
    end

    add_index :boards, :name
    # execute %Q{ ALTER TABLE 'boards' ADD PRIMARY KEY ('name'); } #TODO: uncomment, when start using normal DB like Postgres

  end
end
