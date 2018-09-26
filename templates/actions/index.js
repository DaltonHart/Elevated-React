module.exports = `
import { ADD_BASE } from '../constants/action-types';

export const addBase = base => ({ type: ADD_BASE, payload: base });
`