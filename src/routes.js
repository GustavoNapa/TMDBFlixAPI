import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from '~/pages/Main';
import Detalhes from '~/pages/Detalhes';

const Routes = createAppContainer(createStackNavigator({ Main: {
    screen: Main, 
    navigationOptions: {
        header: null,
    }
}, Detalhes }));

export default Routes;
