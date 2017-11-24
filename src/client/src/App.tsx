import * as React from 'react';
import { Admin, Resource } from 'admin-on-rest';
import { authClient, restClient } from 'aor-feathers-client';
// import feathersClient from './feathersClient';
// import { CategoryList, CategoryCreate } from './resources/categories';
// import { LoanList, LoanCreate } from './resources/loans';
// import { UserList, UserCreate, UserShow } from './resources/users';
// import { ProductList, ProductCreate } from './resources/products';

const authClientOptions = {
  storageKey: 'feathers-jwt',
  authenticate: { strategy: 'local' },
};

// to rename id field for *all* resources use this syntax:
const options = {};

const App = () => (
  <Admin
    // authClient={authClient(feathersClient, authClientOptions)}
    // restClient={restClient(feathersClient, options)}
    title="Aryballe API"
  >
    {/* <Resource name="categories" list={CategoryList} create={CategoryCreate} /> */}
    {/* <Resource name="loans" list={LoanList} create={LoanCreate} /> */}
    {/* <Resource name="users" list={UserList} create={UserCreate} show={UserShow} /> */}
    {/* <Resource name="products" list={ProductList} create={ProductCreate} /> */}
  </Admin>
);

export default App;
