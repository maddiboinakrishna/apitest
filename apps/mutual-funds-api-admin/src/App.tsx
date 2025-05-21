import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { MutualFundList } from "./mutualFund/MutualFundList";
import { MutualFundCreate } from "./mutualFund/MutualFundCreate";
import { MutualFundEdit } from "./mutualFund/MutualFundEdit";
import { MutualFundShow } from "./mutualFund/MutualFundShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"Mutual Funds API"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="MutualFund"
          list={MutualFundList}
          edit={MutualFundEdit}
          create={MutualFundCreate}
          show={MutualFundShow}
        />
      </Admin>
    </div>
  );
};

export default App;
