class Api::PokemonController < ApplicationController

    def index
        @pokemon = Pokemon.all;
        return @pokemon
    end 

    def show
        @pokemon = Pokemon.find(params[:id])
        return @pokemon
    end
end
