import React from 'react';

const JiraHeader = () => {
  return (<header role="banner" id="header">
    <nav className="aui-header aui-dropdown2-trigger-group" role="navigation" data-aui-responsive="true"><div className="aui-header-inner"><div className="aui-header-before"><a className=" aui-dropdown2-trigger app-switcher-trigger" aria-owns="app-switcher" aria-controls="app-switcher" aria-haspopup="true" data-aui-trigger="" href="#app-switcher"><span className="aui-icon aui-icon-small aui-iconfont-appswitcher">Linked Applications</span></a><div id="app-switcher" className="aui-dropdown2 aui-style-default"><div className="aui-dropdown2-section"><ul className="nav-links"><li className="nav-link nav-link-local"><a href="https://ebaydev.mujhelpdesk.cz/" className="aui-dropdown2-radio aui-dropdown2-checked" title="https://ebaydev.mujhelpdesk.cz/"><span className="nav-link-label">SPARC</span></a></li><li className="nav-link"><a href="https://ebaywmt.mujhelpdesk.cz/wiki/" className="aui-dropdown2-radio " title="https://ebaywmt.mujhelpdesk.cz/wiki/"><span className="nav-link-label">SPARC Wiki</span></a></li></ul></div><div className="aui-dropdown2-section"><ul className="nav-links"><li><a className="nav-link-edit-wrapper" href="/plugins/servlet/customize-application-navigator"><span className="nav-link-edit">Configure…</span></a></li></ul></div></div>
    </div><div className="aui-header-primary"><h1 id="logo" className="aui-header-logo aui-header-logo-custom"><a href="https://ebaydev.mujhelpdesk.cz/secure/MyJiraHome.jspa"><img src="/s/en_UShjpcjx/64020/18/_/jira-logo-scaled.png" alt="SPARC" data-aui-responsive-header-index="0" /></a></h1><ul className="aui-nav __skate" style={{width: "auto"}}>

      <li><a className="aui-nav-link aui-dropdown2-ajax jira-ajax-menu aui-dropdown2-trigger " href="/secure/Dashboard.jspa" id="home_link" accessKey="d" title="View and manage your dashboards" aria-haspopup="true" aria-owns="home_link-content">Dashboards</a><div id="home_link-content" className="aui-dropdown2 aui-style-default" data-aui-dropdown2-ajax-key="home_link"></div></li><li><a className="aui-nav-link aui-dropdown2-ajax jira-ajax-menu aui-dropdown2-trigger " href="/browse/AUAM" id="browse_link" accessKey="p" title="View recent projects and browse a list of projects" aria-haspopup="true" aria-owns="browse_link-content">Projects</a><div id="browse_link-content" className="aui-dropdown2 aui-style-default" data-aui-dropdown2-ajax-key="browse_link"></div></li><li><a className="aui-nav-link aui-dropdown2-ajax jira-ajax-menu aui-dropdown2-trigger " href="/issues/" id="find_link" accessKey="i" title="Search for issues and view recent issues" aria-haspopup="true" aria-owns="find_link-content">Issues</a><div id="find_link-content" className="aui-dropdown2 aui-style-default" data-aui-dropdown2-ajax-key="find_link"></div></li><li><a className="aui-nav-link aui-dropdown2-trigger " href="/secure/DashboardAction!default.jspa" id="ebay-main" aria-haspopup="true" aria-owns="ebay-main-content">SPARC</a><div id="ebay-main-content" className="aui-dropdown2 aui-style-default"><div className="aui-dropdown2-section"> <strong>OPS</strong> <ul id="ebay-coe-section" className="aui-list-truncate "><li><a id="dashboard-link" className="   " href="/secure/DashboardAction!default.jspa">Dashboard</a></li></ul></div><div className="aui-dropdown2-section"> <strong>Planning</strong> <ul id="ebay-planning-section" className="aui-list-truncate "><li><a id="dashboard-link" className="   " href="/secure/PlanningDashboardAction!default.jspa">Planning Dashboard</a></li><li><a id="create-campaign-link" className="   " href="/secure/CreateNewCampaignRequest!default.jspa">Create Campaign Request</a></li><li><a id="create-bulk-campaign-link" className="   " href="/secure/CreateCampaignFromBulk!default.jspa">Campaign request - bulk import</a></li><li><a id="optimizer-scenarios-link" className="   " href="/secure/OptimizerScenarios!default.jspa">Optimiser</a></li><li><a id="team-planning-assigment-link" className="   " href="/secure/TeamPlanningAssignment!default.jspa">Team Planning</a></li><li><a id="planning-cycles-link" className="   " href="/secure/PlanningCycle!default.jspa">Planning Cycles</a></li><li><a id="envelope-link" className="   " href="/secure/PlaybookEnvelopeView!default.jspa">Playbook envelope</a></li></ul></div><div className="aui-dropdown2-section"> <strong>Calendars</strong> <ul id="ebay-calendars-section" className="aui-list-truncate "><li><a id="business-calc-link" className="   " href="/secure/BusinessCalendar!default.jspa">Planning Calendar</a></li></ul></div><div className="aui-dropdown2-section"> <strong>BU Briefs</strong> <ul id="ebay-bubrief-section" className="aui-list-truncate "><li><a id="dashboard-link" className="   " href="/secure/BUBriefDashboard!default.jspa">BU Brief Dashboard</a></li><li><a id="dashboard-link" className="   " href="/secure/BUBriefRmDashboard!default.jspa">BU Brief RM Dashboard</a></li><li><a id="bu2rm-create-link" className="   " href="/secure/CreateNewBUBriefRm!default.jspa">Create BU Brief to RM</a></li></ul></div><div className="aui-dropdown2-section"> <strong>Asset Management</strong> <ul id="ebay-asset-section" className="aui-list-truncate "><li><a id="creative-request-dashbord-link" className="   " href="/secure/CreativeRequestsDashboard!default.jspa">Creative request Dashboard</a></li></ul></div><div className="aui-dropdown2-section"> <strong>Administration</strong> <ul id="ebay-manage-section" className="aui-list-truncate "><li><a id="ebay-manage-resource-link" className="   " href="/secure/OptimizerImport!default.jspa">Optimizer Import</a></li></ul></div><div className="aui-dropdown2-section"> <strong>Marimekko</strong> <ul id="ebay-marimekko-section" className="aui-list-truncate "><li><a id="ebay-marimekko" className="   " href="/secure/MarimekkoUpload!default.jspa">Marimekko</a></li></ul></div></div></li><li><a className="aui-nav-link  " href="https://ebaywmt.mujhelpdesk.cz/wiki/display/TUTOR/Welcome" id="ebay-wiki">SPARC Wiki</a></li><li><a className="aui-nav-link aui-dropdown2-trigger " href="/secure/ComponentLibrary!default.jspa" id="ebay-dev" aria-haspopup="true" aria-owns="ebay-dev-content">DEV</a><div id="ebay-dev-content" className="aui-dropdown2 aui-style-default"><div className="aui-dropdown2-section"> <strong>UI</strong> <ul id="ebay-coe-section" className="aui-list-truncate "><li><a id="ebay-dev" className="   " href="/secure/ComponentLibrary!default.jspa">Component library</a></li><li><a id="ebay-dev" className="   " href="/secure/DashboardExample!default.jspa">Dashboard</a></li><li><a id="ebay-dev" className="   " href="/secure/FormExample!default.jspa">Template Form</a></li></ul></div></div></li><li><a className="aui-nav-link aui-dropdown2-trigger " href="/secure/BuDashboard!default.jspa" id="ebay-bu" aria-haspopup="true" aria-owns="ebay-bu-content">BU SPARC</a><div id="ebay-bu-content" className="aui-dropdown2 aui-style-default"><div className="aui-dropdown2-section"> <strong>PLANNING</strong> <ul id="ebay-bu-planning" className="aui-list-truncate "><li><a id="ebay-bu-dashboard" className="   " href="/secure/BuDashboard!default.jspa">BU Planning Dashboard</a></li><li><a id="ebay-bu" className="   " href="/secure/CreateCampaignArchitecture!default.jspa">Create Campaign Architecture</a></li></ul></div><div className="aui-dropdown2-section"> <strong>CREATIVE</strong> <ul id="ebay-bu-creative" className="aui-list-truncate "><li><a id="ebay-bu-creative-dashboard" className="   " href="/secure/BuCreativeDashboard!default.jspa">BU Creative Dashboard</a></li></ul></div></div></li>
      <li style={{display: "none"}}><a id="aui-responsive-header-dropdown-trigger-0" className=" aui-dropdown2-trigger" aria-owns="aui-responsive-header-dropdown-content-0" aria-controls="aui-responsive-header-dropdown-content-0" aria-haspopup="true" data-aui-trigger="" href="#">More<span className="icon aui-icon-dropdown"></span></a><div id="aui-responsive-header-dropdown-content-0" className="aui-dropdown2 aui-style-default"><div className="aui-dropdown2-section"><ul id="aui-responsive-header-dropdown-list-0"></ul></div></div></li><li id="create-menu"><a id="create_link" className="aui-button aui-button-primary aui-style create-issue " title="Create a new issue / bug / feature request / etc ( Type 'c' )" href="/secure/CreateIssue!default.jspa" accessKey="c">Create</a></li></ul></div><div className="aui-header-secondary"><ul className="aui-nav __skate"><li>
      <form action="/secure/QuickSearch.jspa" method="get" id="quicksearch" className="aui-quicksearch dont-default-focus ajs-dirty-warning-exempt">
        <input id="quickSearchInput" className="search" type="text" title="Search ( Type '/' )" placeholder="Search" name="searchString" accessKey="q" />
        <input type="submit" className="hidden" value="Search" />
      </form>
    </li>



      <li id="system-help-menu">
        <a className="aui-nav-link aui-dropdown2-trigger" id="help_menu" aria-haspopup="true" aria-owns="system-help-menu-content" href="https://docs.atlassian.com/jira/docs-064/JIRA+Documentation" target="$textUtils.htmlEncode($rootHelpMenuItem.params.target)" title="Help"><span className="aui-icon aui-icon-small aui-iconfont-help">Help</span></a>
        <div id="system-help-menu-content" className="aui-dropdown2 aui-style-default">
          <div className="aui-dropdown2-section">
            <ul id="jira-help" className="aui-list-truncate">
              <li>
                <a id="view_help" className="" title="Goto the online documentation for JIRA" href="https://docs.atlassian.com/jira/docs-064/JIRA+Documentation" target="_blank">Online Help</a>
              </li>
              <li>
                <a id="keyshortscuthelp" className="" title="Get more information about JIRA's Keyboard Shortcuts ( Type '?' )" href="/secure/ViewKeyboardShortcuts!default.jspa" target="_blank">Keyboard Shortcuts</a>
              </li>
              <li>
                <a id="view_about" className="" title="Get more information about JIRA" href="/secure/AboutPage.jspa">About JIRA</a>
              </li>
              <li>
                <a id="view_credits" className="" title="See who did what" href="/secure/JiraCreditsPage!default.jspa" target="_blank">JIRA Credits</a>
              </li>
            </ul>
          </div>
        </div>
      </li>


      <li id="system-admin-menu">
        <a href="/secure/project/ViewProjects.jspa" id="admin_menu" className="aui-nav-link aui-dropdown2-trigger" aria-haspopup="true" aria-owns="system-admin-menu-content" title="Administration"><span className="aui-icon aui-icon-small aui-iconfont-configure">Administration</span></a>
        <div id="system-admin-menu-content" className="aui-dropdown2 aui-style-default">
          <div className="aui-dropdown2-section">
            <strong>JIRA administration</strong>
            <ul className="aui-list-truncate">
              <li>
                <a href="/secure/project/ViewProjects.jspa" className="aui-nav-link" id="admin_project_menu">Projects</a>
              </li>
              <li>
                <a href="/secure/admin/ViewIssueTypes.jspa" className="aui-nav-link" id="admin_issues_menu">Issues</a>
              </li>
              <li>
                <a href="/secure/admin/user/UserBrowser.jspa" className="aui-nav-link" id="admin_users_menu">User management</a>
              </li>
              <li>
                <a href="/secure/admin/ViewApplicationProperties.jspa" className="aui-nav-link" id="admin_system_menu">System</a>
              </li>
              <li>
                <a href="/plugins/servlet/upm/marketplace" className="aui-nav-link" id="admin_plugins_menu">Add-ons</a>
              </li>
            </ul>
          </div>
        </div>
      </li>








      <li id="user-options">
        <a id="header-details-user-fullname" className="aui-dropdown2-trigger" aria-haspopup="true" aria-owns="user-options-content" data-username="tomas.jilek" data-displayname="Tomáš Jílek" href="/secure/ViewProfile.jspa" title="User profile for Tomáš Jílek">
            <span className="aui-avatar aui-avatar-small">
                <span className="aui-avatar-inner">
                    <img src="https://ebaydev.mujhelpdesk.cz/secure/useravatar?size=small&amp;avatarId=10122" alt="User profile for Tomáš Jílek" />
                </span>
            </span>
        </a>
        <div id="user-options-content" className="aui-dropdown2 aui-style-default">
          <div className="aui-dropdown2-section">
            <ul id="personal" className="aui-list-truncate">
              <li>
                <a id="view_profile" className="" title="View and change your details and preferences" href="/secure/ViewProfile.jspa">Profile</a>
              </li>
              <li>
                <a id="upm-requests-link" className="" href="/plugins/servlet/upm/requests?source=header_user">Atlassian Marketplace</a>
              </li>
            </ul>
          </div>
          <div className="aui-dropdown2-section">
            <strong>My JIRA Home</strong>
            <ul id="set_my_jira_home" className="aui-list-truncate">

              <li>
                <a id="set_my_jira_home_default" className="aui-dropdown2-radio interactive checked    " title="Set my JIRA Home to the Dashboard." href="/secure/UpdateMyJiraHome.jspa?target=com.atlassian.jira.jira-my-home-plugin%3Aset_my_jira_home_dashboard&amp;atl_token=BLMB-208T-BC7E-82M9|28695bda76e8291033a3f57096eeccac23ea474a|lin">Dashboard</a>
              </li>

              <li>
                <a id="set_my_jira_home_issuenav" className="aui-dropdown2-radio interactive    " title="Set my JIRA Home to the Issue Navigator." href="/secure/UpdateMyJiraHome.jspa?target=com.atlassian.jira.jira-my-home-plugin%3Aset_my_jira_home_issue&amp;atl_token=BLMB-208T-BC7E-82M9|28695bda76e8291033a3f57096eeccac23ea474a|lin">Issue Navigator</a>
              </li>
            </ul>
          </div>
          <div className="aui-dropdown2-section">
            <ul id="system" className="aui-list-truncate">
              <li>
                <a className="project-centric-nav-user-option disable-project-centric-nav" href="">Disable new project navigation</a>
              </li>
              <li>
                <a id="log_out" className="" title="Log out and cancel any automatic login." href="/logout?atl_token=BLMB-208T-BC7E-82M9|28695bda76e8291033a3f57096eeccac23ea474a|lin">Log Out</a>
              </li>
            </ul>
          </div>
        </div>
      </li>
    </ul></div></div></nav>
  </header>);
};

export default JiraHeader;
