/**
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import pluginId from '../../pluginId';
import HomePage from '../HomePage';
import ContentTypePage from '../ContentTypePage';
import { Page } from "@strapi/strapi/admin";

const App = () => {
  return (
    <div>
      <Switch>
        <Route path={`/plugins/${pluginId}`} component={HomePage} exact />
        <Route path={`/plugins/${pluginId}/:contentType`} component={ContentTypePage} />
        <Route component={AnErrorOccurred} />
      </Switch>
    </div>
  );
};

export default App;
