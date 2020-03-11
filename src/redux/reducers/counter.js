const initialState = {
  maxCounter: 5,
  startCounter: 0,
  counterIncDisable: false,
  counterResetDisable: true,

};

export default (state = initialState, action) => {

  switch (action.type) {
    case 'INC_DISABLE':
      return {
        ...state,
        counterIncDisable: true,
      };
      break;
    case 'RESET_DISABLE':
      return {
        ...state,
        counterIncDisable: true,
      };
      break;
    case 'RESET_ACTIVE':
      return {
        ...state,
        counterIncDisable: false,
      };
      break;
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
    default:
      return state
  }
}