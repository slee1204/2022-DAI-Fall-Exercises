import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer'
import AnimationScreen from './screens/Animation';

//useFocusEffect
const Drawer = createDrawerNavigator();
//https://reactnavigation.org/docs/modal - for modals

export default function App() {
  return (

    <NavigationContainer>
      {/* <Drawer.Navigator initialRouteName="Animation">
      </Drawer.Navigator> */}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
