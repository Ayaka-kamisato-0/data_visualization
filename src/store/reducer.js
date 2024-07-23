//黄沁心，我并没有在增加这段话后的commit信息中标明我增加了段注释
//Are you really able to see this?
//I am just testing whether you can see this or not.
//If you did not see this, its really obvious that its necessary for commit messages to be clear and concise.
//I'll tell you about this very soon if you did not see this. 
//So if you are looking at this, STOP USING FUCKING DATE FOR COMMIT MESSAGES!!!!!!!

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