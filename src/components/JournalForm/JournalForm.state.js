export INITIAL_STATE = {
    isValid: {
        text: true,
        title: true, 
        date: true
    },
    values : {
        text: undefined,
        title: undefined, 
        date: undefined
    },
    isFormReadyToSubmit: false
}

export function formReducer(state, action) {
    switch(action.type) {
        case 'RESET_VALIDITY':
            return { ...state, isValid : INITIAL_STATE.isValid};
    }
}