const initialState = {
  maxCounter: null,
  startCounter: null,
  counterSetDisable: false,
};

export default (state = initialState, action) => {

  switch (action.type) {

    case 'MAX_COUNT':
      return {
        ...state,
        maxCounter: action.payload,
      };
    case 'START_COUNT':
      return {
        ...state,
        startCounter: action.payload,
      };
    case 'SET_ACTIVE':
      return {
        ...state,
        counterSetDisable: false,
      };
    case 'SET_DISABLE':
      return {
        ...state,
        counterSetDisable: true,
      };
    default:
      return state
  }
}