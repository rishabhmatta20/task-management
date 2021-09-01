class AddNotifiedAboutDeadlineToTasks < ActiveRecord::Migration[6.1]
  def change
    add_column :tasks, :notified_about_deadline, :boolean, default: false
  end
end
