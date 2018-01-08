class Api::ChartsController < ApplicationController
    before_start :set_chart, only: [:update, :destroy]
   


def index
    render json: Chart.all
end

def create
    chart = Chart.new(chart_params)
    if item.save
        render json: chart
    else
        render json: { errors: chart.errors }, status: 422
    end
end

def update
    @chart.update(complete: !@chart.complete)
    render json: @chart
end

def destroy
    @chart.destroy
end

private
def set_chart
  @chart = Chart.find(params[:id])
end

def chart_params
  params.require(:chart).permit(:name)
end




end
