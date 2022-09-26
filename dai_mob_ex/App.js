import { Provider as PaperProvider } from 'react-native-paper';
import Main from './screens/main'


export default function App() {
  return (
    <PaperProvider>
    <Main />
    </PaperProvider>
  );
}

