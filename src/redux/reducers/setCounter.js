const initialState = {
  maxCounter: 5,
  startCounter: 0,
  counterSetDisable: false,
};

export default (state = initialState, action) => {

  switch (action.type) {

    case 'MAX_COUNT':
      return {
        ...state,
        maxCounter: action.payload,
      };
      break;
    case 'START_COUNT':
      return {
        ...state,
        startCounter: action.payload,
      };
      break;
    case 'SET_ACTIVE':
      return {
        ...state,
        counterSetDisable: false,
      };
      break;
    case 'SET_DISABLE':
      return {
        ...state,
        counterSetDisable: true,
      };
      break;
    default:
      return state
  }
}