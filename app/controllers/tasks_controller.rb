class TasksController < ApplicationController
  before_action :initialize_task, only: [:edit, :update]
  before_action :authenticate_user!


  def index
    @tasks = current_user.tasks
  end

  def new
    @task = Task.new
  end

  def create
    render json: { created: true } if current_user.tasks.create(task_params)
  end

  def edit;end

  def update
    render json: { updated: true } if @task.update(task_params)
  end

  private

  def task_params
    params.require(:task).permit(:name, :description, :status, :deadline)
  end

  def initialize_task
    @task = Task.find(params[:id])
  end
end
