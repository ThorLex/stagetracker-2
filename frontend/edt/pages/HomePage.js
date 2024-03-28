import React, { useState, useEffect } from 'react';
import { Route, BrowserRouter, routes, Redirect } from "react-router-dom";
import { Routes } from "../routes";

// pages
import Presentation from "./Presentation";
import Upgrade from "./Upgrade";
import DashboardOverview from "./dashboard/DashboardOverview";
import Transactions from "./Transactions";
import Settings from "./Settings";
import BootstrapTables from "./tables/BootstrapTables";
import Signin from "./examples/Signin";
import Signup from "./examples/Signup";
import ForgotPassword from "./examples/ForgotPassword";
import ResetPassword from "./examples/ResetPassword";
import Lock from "./examples/Lock";
import NotFoundPage from "./examples/NotFound";
import ServerError from "./examples/ServerError";

// documentation pages
import DocsOverview from "./documentation/DocsOverview";
import DocsDownload from "./documentation/DocsDownload";
import DocsQuickStart from "./documentation/DocsQuickStart";
import DocsLicense from "./documentation/DocsLicense";
import DocsFolderStructure from "./documentation/DocsFolderStructure";
import DocsBuild from "./documentation/DocsBuild";
import DocsChangelog from "./documentation/DocsChangelog";

// components
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Preloader from "../components/Preloader";

import Accordion from "./components/Accordion";
import Alerts from "./components/Alerts";
import Badges from "./components/Badges";
import Breadcrumbs from "./components/Breadcrumbs";
import Buttons from "./components/Buttons";
import Forms from "./components/Forms";
import Modals from "./components/Modals";
import Navs from "./components/Navs";
import Navbars from "./components/Navbars";
import Pagination from "./components/Pagination";
import Popovers from "./components/Popovers";
import Progress from "./components/Progress";
import Tables from "./components/Tables";
import Tabs from "./components/Tabs";
import Tooltips from "./components/Tooltips";
import Toasts from "./components/Toasts";



function App() {
  return (
    <div className="App  ">
      <BrowserRouter>
<div >



   <Routes>
   <Route  exact path={Routes.Presentation.path} component={Presentation} />
    <Route  exact path={Routes.Signin.path} component={Signin} />
    <Route  exact path={Routes.Signup.path} component={Signup} />
    <Route  exact path={Routes.ForgotPassword.path} component={ForgotPassword} />
    <Route  exact path={Routes.ResetPassword.path} component={ResetPassword} />
    <Route  exact path={Routes.Lock.path} component={Lock} />
    <Route  exact path={Routes.NotFound.path} component={NotFoundPage} />
    <Route  exact path={Routes.ServerError.path} component={ServerError} />

    {/* pages */}
    <Route exact path={Routes.DashboardOverview.path} component={DashboardOverview} />
    <Route exact path={Routes.Upgrade.path} component={Upgrade} />
    <Route exact path={Routes.Transactions.path} component={Transactions} />
    <Route exact path={Routes.Settings.path} component={Settings} />
    <Route exact path={Routes.BootstrapTables.path} component={BootstrapTables} />

    {/* components */}
    <Route exact path={Routes.Accordions.path} component={Accordion} />
    <Route exact path={Routes.Alerts.path} component={Alerts} />
    <Route exact path={Routes.Badges.path} component={Badges} />
    <Route exact path={Routes.Breadcrumbs.path} component={Breadcrumbs} />
    <Route exact path={Routes.Buttons.path} component={Buttons} />
    <Route exact path={Routes.Forms.path} component={Forms} />
    <Route exact path={Routes.Modals.path} component={Modals} />
    <Route exact path={Routes.Navs.path} component={Navs} />
    <Route exact path={Routes.Navbars.path} component={Navbars} />
    <Route exact path={Routes.Pagination.path} component={Pagination} />
    <Route exact path={Routes.Popovers.path} component={Popovers} />
    <Route exact path={Routes.Progress.path} component={Progress} />
    <Route exact path={Routes.Tables.path} component={Tables} />
    <Route exact path={Routes.Tabs.path} component={Tabs} />
    <Route exact path={Routes.Tooltips.path} component={Tooltips} />
    <Route exact path={Routes.Toasts.path} component={Toasts} />

    {/* documentation */}
    <Route exact path={Routes.DocsOverview.path} component={DocsOverview} />
    <Route exact path={Routes.DocsDownload.path} component={DocsDownload} />
    <Route exact path={Routes.DocsQuickStart.path} component={DocsQuickStart} />
    <Route exact path={Routes.DocsLicense.path} component={DocsLicense} />
    <Route exact path={Routes.DocsFolderStructure.path} component={DocsFolderStructure} />
    <Route exact path={Routes.DocsBuild.path} component={DocsBuild} />
    <Route exact path={Routes.DocsChangelog.path} component={DocsChangelog} />

   
   </Routes>


</div>
      </BrowserRouter>
      
    </div>
  );
}

export default App