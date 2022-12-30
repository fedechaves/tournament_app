import {connect} from 'react-redux';

import Home from '../components/home-page/Home';

const mapStateToProps = state => ({
    teams: state.teams
})

const mapDispatchToProps = dispatchEvent => ({

})

export default connect(
    mapStateToProps,
    mapDispatchToProps
) (Home)