export const incDis = () => ({type: 'INC_DISABLE'});
export const incActive = () => ({type: 'INC_ACTIVE'});
export const resetDis = () => ({type: 'RESET_DISABLE'});
export const resetActive = () => ({type: 'RESET_ACTIVE'});
export const reset = (startCount) => ({type: 'RESET', payload: startCount});
export const inc = (inc) => ({type: 'INC', payload: inc});
