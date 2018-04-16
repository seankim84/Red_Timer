import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import Timer from './presenter';
import {actionCreators as redActions} from '../../reducer';

function mapStateToProps(state){
    const { isPlaying, elapsedTime, timeDuration } = state;
    return {
        isPlaying,
        elapsedTime,
        timeDuration
    };
}

function mapDispatchToProps(dispatch){ //dispatch: Send the actions to reducer
    return{
        startTimer: bindActionCreators(redActions.startTimer, dispatch),
        restartTimer: bindActionCreators(redActions.restartTimer, dispatch),
        addSecond: bindActionCreators(redActions.addSecond, dispatch)
    }
} 

export default connect(mapStateToProps, mapDispatchToProps)(Timer);