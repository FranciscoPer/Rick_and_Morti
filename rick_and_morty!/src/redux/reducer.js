import { ADD_FAV, REMOVE_FAV, ORDER, FILTER } from "./action-types"


const initialState = {
    myFavorites: [],
    allCharactersFav: []

}


const reducer = (state = initialState, {type, payload}) => {
    switch(type){
        case ADD_FAV:
            return {
                ...state,
                myFavorites: [...state.allCharactersFav, payload],
                allCharactersFav: [...state.allCharactersFav, payload]

            }

        case REMOVE_FAV: 
            return {
            ...state,
            myFavorites: state.myFavorites.filter(fav => fav.id !== payload)

        }

        case FILTER:
            const allCharacterFilter = state.allCharactersFav.filter(character => character.gender === payload)
             return {
                ...state,
                myFavorites:
                payload === 'allcharacters'
                ?[...state.allCharactersFav]
                : allCharacterFilter
        }

        case ORDER:
            const allcharactersFavCopy =  [...state.allCharactersFav]
            return {
                ...state,
                myFavorites:
                payload === 'A'
                ? allcharactersFavCopy.sort ((a, b) => a.id - b.id)
                : allcharactersFavCopy.sort ((a, b) => b.id - a.id)
            }



        default:
            return {...state}
    }


}

export default reducer