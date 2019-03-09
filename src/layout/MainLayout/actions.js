// import {} from './types';

// const mockData = {};
//
// const getLocalStorage = () => {
//     const currentData = window.localStorage.getItem('data');
//
//     return JSON.parse(currentData);
// };
//
// const saveToLocalStorage = data => {
//     const jsonData = JSON.stringify(data);
//
//     window.localStorage.setItem('data', jsonData);
// };
//
// const apiGetInitialData = () => {
//     const currentData = getLocalStorage() || mockData;
//
//     saveToLocalStorage(currentData);
//
//     return Promise.resolve(currentData);
// };
//
// const apiPostBusinessDecision = data => {
//     const currentData = getLocalStorage();
//
//     const updatedStorage = {
//         ...currentData,
//         data: data
//     };
//
//     saveToLocalStorage(updatedStorage);
//
//     return Promise.resolve(data);
// };
//
// const action = () => dispatch => {
//     dispatch({
//         type: ''
//     });
//
//     return action()
//         .then(data => {
//             dispatch({
//                 type: '',
//                 data
//             });
//         })
//         .catch(error => {
//             dispatch({
//                 type: '',
//                 error
//             });
//         });
// };
//
// export default {};
