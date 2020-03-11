export const incDis = () => ({type: 'INC_DISABLE'});
export const resetDis = () => ({type: 'RESET_DISABLE'});
export const resetActive = () => ({type: 'RESET_ACTIVE'});
export const maxCount = (maxCount) => ({type: 'MAX_COUNT', payload: maxCount});
export const startCount = (startCount) => ({type: 'START_COUNT', payload: startCount});