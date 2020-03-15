export const setDis = () => ({type: 'SET_DISABLE'});
export const setActive = () => ({type: 'SET_ACTIVE'});
export const maxCount = (maxCount) => ({type: 'MAX_COUNT', payload: maxCount});
export const startCount = (startCount) => ({type: 'START_COUNT', payload: startCount});
export const error = (error) => ({type: 'SET_ERROR', payload: error});