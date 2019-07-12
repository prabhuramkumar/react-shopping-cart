import { connect } from 'react-redux';
import App from './App';
import * as CartActions from './actions/cartActions';
import {bindActionCreators} from 'redux';

const mapStateToProps = (state)=>{
    return{
        appState: state,
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
    	actions: bindActionCreators(CartActions, dispatch)
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(App)