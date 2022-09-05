export function createStore() {
    const state = {};
    const subscribers = [];


    return {
        // action === {type: 'INCREMENT'}
        dispatch(actions) {

        },
        subscribe(callback) {
            subscribers.push(callback);
        },
        getState() {
            return state;
        }
    }
}