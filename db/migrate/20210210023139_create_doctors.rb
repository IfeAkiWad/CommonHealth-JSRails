class CreateDoctors < ActiveRecord::Migration[6.0]
  def change
    create_table :doctors do |t|
      t.string :name
      t.string :specialty
      t.string :insurance_accepted
      t.string :location
      t.integer :user_id

      t.timestamps
    end
  end
end
