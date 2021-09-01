class Task < ApplicationRecord
  enum status: [:backlog, :inprogress, :done]

  belongs_to :user

  def self.notify_owners_about_deadline_a_day_before
    Task.where(deadline: DateTime.now..DateTime.now + 25.hours).each do |task|
      update(notified_about_deadline: true) && TaskMailer.with(task: task).notify_user_about_task_deadline.deliver_later unless notified_about_deadline
    end
  end
end
