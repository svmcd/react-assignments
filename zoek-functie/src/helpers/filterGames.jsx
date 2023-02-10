export const filterGamesByTitle = (nameToBeSearched, toBeSearchedArray) => {
    return toBeSearchedArray.filter(game => {
        if(game.title.toUpperCase().indexOf(nameToBeSearched.toUpperCase()) !== -1){
            return game;
        }
    });
}

export const filterGamesByPlatform = (platformToBeSearched, toBeSearchedArray) => {
    return toBeSearchedArray.filter(game => {
        let found = false;
        game.platforms.forEach(platform => {
            if(platform.toUpperCase().indexOf(platformToBeSearched.toUpperCase()) !== -1){
                found = true;
            }
        });
        if(found === true){
            return game;
        }
    })
} 

export const filterGamesByType = (typeToBeSearched, toBeSearchedArray) => {
    return toBeSearchedArray.filter(game => {
        let found = false;
        game.type.forEach(type => {
            if(type.toUpperCase().indexOf(typeToBeSearched.toUpperCase()) !== -1){
                found = true;
            }
        });
        if(found === true){
            return game;
        }
    })
} 