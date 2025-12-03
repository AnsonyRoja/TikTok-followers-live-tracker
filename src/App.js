import './App.css';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import FollowersBars from './components/followers-bars/followersBar';
function App() {



  return (

    <QueryClientProvider client={new QueryClient()}>

      <FollowersBars />

      {/* <ReactQueryDevtools /> */}
    </QueryClientProvider>


  );
}

export default App;
