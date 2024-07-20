
// 不同请求的处理
const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return {
                ...state,
                count: state.count + 1
            };
        case 'decrease':
            return {
                ...state,
                count: state.count - 1
            };
        case 'changeOption':
            return {
                ...state,
                changeOption: action.payload
            };
        case 'init': {
            let newData = [];
            // TODO: use action.payload to update newData
            console.log(action.payload);
            newData = action.payload;
            return {
                ...state,
                data: newData
            };
        }
        default:
            throw new Error();
    }
}

export default reducer;