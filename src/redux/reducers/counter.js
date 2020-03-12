const initialState = {
  count: 0,
  counterIncDisable: false,
  counterResetDisable: true,
};

export default (state = initialState, action) => {

  switch (action.type) {
    case 'INC':
      return {
        ...state,
        count: action.payload,
      };
    case 'INC_DISABLE':
      return {
        ...state,
        counterIncDisable: true,
      };
    case 'INC_ACTIVE':
      return {
        ...state,
        counterIncDisable: false,
      };
    case 'RESET_DISABLE':
      return {
        ...state,
        counterResetDisable: true,
      };
    case 'RESET_ACTIVE':
      return {
        ...state,
        counterResetDisable: false,
      };
    case 'RESET':
      return {
        ...state,
        count: 0
      };
    default:
      return state
  }
}