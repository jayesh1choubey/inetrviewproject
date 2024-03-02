const initialState={
post:[],
error:null,
loading:false
};

const Objreducer=(state = initialState,action)=>
{
    switch(action.type)
    {
case 'FETCH_SUCCESSFULLY':
    return{
        ...state,
        post:action.payload,
        loding:false,
        error:null
    };
    case'REMOVE':
    return{
        ...state,
        post:state.post.filter((post)=> post.id !== action.payload)
    };
    default:
        return state;
}
};

export default Objreducer;