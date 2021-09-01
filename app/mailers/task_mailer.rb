# frozen_string_literal: true

class TaskMailer < ApplicationMailer
  def notify_user_about_task_deadline
    @task = params[:task]
    mail(
      to: @task.user.email,
      subject: "Task deadline is close, please follow up!"
    )
  end
end
