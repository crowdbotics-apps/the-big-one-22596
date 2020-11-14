import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps173129Navigator from '../features/Maps173129/navigator';
import Settings173107Navigator from '../features/Settings173107/navigator';
import Settings173092Navigator from '../features/Settings173092/navigator';
import NotificationList173091Navigator from '../features/NotificationList173091/navigator';
import Maps173090Navigator from '../features/Maps173090/navigator';
import Maps172863Navigator from '../features/Maps172863/navigator';
import Additem172862Navigator from '../features/Additem172862/navigator';
import Maps172858Navigator from '../features/Maps172858/navigator';
import UserProfile172854Navigator from '../features/UserProfile172854/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps173129: { screen: Maps173129Navigator },
Settings173107: { screen: Settings173107Navigator },
Settings173092: { screen: Settings173092Navigator },
NotificationList173091: { screen: NotificationList173091Navigator },
Maps173090: { screen: Maps173090Navigator },
Maps172863: { screen: Maps172863Navigator },
Additem172862: { screen: Additem172862Navigator },
Maps172858: { screen: Maps172858Navigator },
UserProfile172854: { screen: UserProfile172854Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
