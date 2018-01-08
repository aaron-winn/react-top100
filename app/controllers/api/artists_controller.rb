class Api::ArtistsController < ApplicationController
    before_start :set_chart, only: [:update, :destroy]
    
 
 
 def index
     render json: Artist.all
 end
 
 def create
     artist = Artist.new(chart_params)
     if artist.save
         render json: chart
     else
         render json: { errors: artist.errors }, status: 422
     end
 end
 
 def update
     @artist.update(complete: !@artist.complete)
     render json: @chart
 end
 
 def destroy
     @artist.destroy
 end
 
 private
 def set_artist
   @artist = Artist.find(params[:id])
 end
 
 def artist_params
   params.require(:artist).permit(:name)
 end
 
 
 
 
 end
 
