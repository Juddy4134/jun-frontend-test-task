import { createSlice } from "@reduxjs/toolkit";

const horseSlice = createSlice({
    name: 'horseSlice',
    initialState: {
        horseWithDistance: [],
        horsesByPlace: ""
    },

    reducers: {
        updateHorsesDistance(state, action){
           state.horseWithDistance = [...action.payload]
        },
        pushToPlacesQueue(state,action){
            const uniqueSet = new Set();
            if (state.horsesByPlace.length !== 0){
                const arrayFromHorses = Array.from(state.horsesByPlace.split(","))
                arrayFromHorses.forEach(horse => uniqueSet.add(horse))
            }     
            uniqueSet.add(action.payload.name)
            state.horsesByPlace = Array.from(uniqueSet).join(",");
        },
        clearHorsesByPlace(state){
            state.horsesByPlace = "";
        }
    }
})

export default horseSlice.reducer

export const {updateHorsesDistance,pushToPlacesQueue,updateAllDone,clearHorsesByPlace} = horseSlice.actions