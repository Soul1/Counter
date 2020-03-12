import {connect} from 'react-redux'
import SetCount from "../components/SetCount";
import {maxCount, startCount, setDis, setActive} from '../redux/actions/counter'


export default connect(null, {maxCount, startCount, setDis, setActive})(SetCount)