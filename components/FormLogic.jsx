const FormLogicContext = React.createContext({})

export  class FormLogic extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const { logic } = this.props;
        return(
            <FormLogicContext.Provider value={logic}>
                {this.props.children}
            </FormLogicContext.Provider>
        )
    }
}

export function withLogic(mapLogicToProps){
    return (WrappedComponent) => {
        return (
            <WrappedComponent {...mapLogicToProps}/>
        )
    }
}