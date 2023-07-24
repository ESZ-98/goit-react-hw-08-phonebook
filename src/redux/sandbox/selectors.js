export const selectLoading = state => state.sandbox.isLoading;
export const selectError = state => state.sandbox.error;

const getContacts = state => state.sandbox.contacts;
const getFilter = state => state.filter;

const selectors = { getContacts, getFilter };

export default selectors;
