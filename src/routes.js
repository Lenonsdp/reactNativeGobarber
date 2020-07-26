import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import SignIn from '../src/pages/SigIn';
import SignUp from '../src/pages/SignUp';

export default createAppContainer(
    createSwitchNavigator({
        SignIn,
        SignUp
    })
);