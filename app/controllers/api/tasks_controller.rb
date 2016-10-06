class Api::TasksController < ApplicationController

  def update
    task = Task.find(params[:id])
    if task.update(task_params)
      render json: task
    end
  end

  private
    def task_params
      params.require(:task).permit(:done)
    end
end
