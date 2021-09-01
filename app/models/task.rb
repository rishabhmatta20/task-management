class Task < ApplicationRecord
  enum status: [:backlog, :inprogress, :done]

  belongs_to :user
end
