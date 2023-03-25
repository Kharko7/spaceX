import { BrowserRouter } from "react-router-dom";
import { ApolloProvider } from '@apollo/client';
import ReactDOM from 'react-dom/client';
import { RecoilRoot } from "recoil";

import App from './App';
import { client } from "apollo/client";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <RecoilRoot>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ApolloProvider>
  </RecoilRoot >
);
