@pokemon.each do |pokePeep|
    json.set! pokePeep.id do 
        json.extract! pokePeep, :id, :name
        json.image_url asset_path(pokePeep.image_url)
    end
end