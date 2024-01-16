class RemoveUniqueIndexFromNameInUsers < ActiveRecord::Migration[7.0]
  def change
    remove_index :users, :name if index_exists?(:users, :name)
  end
end
