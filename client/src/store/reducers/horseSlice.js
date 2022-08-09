import { createSlice } from "@reduxjs/toolkit";

const horseSlice = createSlice({
    name: 'horseSlice',
    initialState: {
        horseWithDistance: [],
        allDoneFlag: false,
        horsesByPlace: ""
    },

    reducers: {
        updateHorsesDistance(state, action){
           state.horseWithDistance = [...action.payload]
        },
        updateAllDone(state,action){
            state.allDone = action.payload
        },
        pushToPlacesQueue(state,action){
            const uniqueSet = new Set();
            if (state.horsesByPlace.length !== 0){
                const arrayFromHorses = Array.from(state.horsesByPlace.split(","))
                arrayFromHorses.forEach(horse => uniqueSet.add(horse))
            }     
            uniqueSet.add(action.payload.name)
            state.horsesByPlace = Array.from(uniqueSet).join(",");
        }
    }
})

export default horseSlice.reducer

export const {updateHorsesDistance,pushToPlacesQueue,updateAllDone} = horseSlice.actions