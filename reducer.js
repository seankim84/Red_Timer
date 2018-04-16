/*Desiging redux ducks */

//Import

//Actions
const START_TIMER = "START_TIMER";
const RESTART_TIMER = "RESTART_TIMER";
const ADD_SECOND = "ADD_SECOND";

//Action Creators
function startTimer(){
    return {
        type: START_TIMER
    }
}

function restartTimer(){
    return {
        type: RESTART_TIMER
    }
}

function addSecond(){
    return {
        type: ADD_SECOND
    }
}

//Reducer
const TIME_DURATION = 1500;

const initialState = {
    isPlaying: false,
    elapsedTime: 0,
    timeDuration: TIMER_DURATION
}

function reducer(state = initialState, action){
    switch(action.type){
        case START_TIMER:
        return applyStartTimer(state, action);
        case RESTART_TIMER:
        return applyReStartTimer(state, action);
        case ADD_SECOND:
        return applyAddSecond(state, action);    
    }
}

//Reducer Functions
function applyStartTimer(state){ //state = default of redux
    return {
        ...state, // overwrite
        isPlaying: true,
    };
}

function applyReStartTimer(state){
    return {
        isPlaying: false,
        elapsedTime: 0
    };
}

function applyAddSecond(state){
    if(state.elapsedTime < TIMER_DURATION){
        return{
            ...state,
            elapsedTime: state.elapsedTime + 1
        };
    } else {
        return{
            ...state,
            isPlaying: false
        };
    } 
}

//Export Action Creators
const ActionCreators = {
    startTimer,
    restartTimer,
    addSecond
};


// Export Reducer
export default reducer;




