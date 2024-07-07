import React, { useState } from 'react'
export default function Navbar() {
    const [isExpanded, setisExpanded] = useState(true);
    return (
        <header id="header" className="navbar navbar-expand-lg navbar-fixed navbar-height navbar-container navbar-bordered bg-white">
            <div className="navbar-nav-wrap">
                {/* Logo */}
                <a className="navbar-brand" href="./index.html" aria-label="Front">
                    <img className="navbar-brand-logo" src="./assets/svg/logos/logo.svg" alt="Logo" data-hs-theme-appearance="default" />
                    {/* <img className="navbar-brand-logo" src="./assets/svg/logos-light/logo.svg" alt="Logo" data-hs-theme-appearance="dark" />
                    <img className="navbar-brand-logo-mini" src="./assets/svg/logos/logo-short.svg" alt="Logo" data-hs-theme-appearance="default" />
                    <img className="navbar-brand-logo-mini" src="./assets/svg/logos-light/logo-short.svg" alt="Logo" data-hs-theme-appearance="dark" /> */}
                </a>
                {/* End Logo */}
                <div className="navbar-nav-wrap-content-start">
                    {/* Navbar Vertical Toggle */}
                    <button type="button" className="js-navbar-vertical-aside-toggle-invoker navbar-aside-toggler">
                        {isExpanded ?
                            <i className="bi-arrow-bar-right navbar-toggler-full-align" data-bs-template="<div class=&quot;tooltip d-none d-md-block&quot; role=&quot;tooltip&quot;><div class=&quot;arrow&quot;></div><div class=&quot;tooltip-inner&quot;></div></div>" data-bs-toggle="tooltip" data-bs-placement="right" title="Expand" />
                            :
                            <i className="bi-arrow-bar-left navbar-toggler-short-align" data-bs-template="<div class=&quot;tooltip d-none d-md-block&quot; role=&quot;tooltip&quot;><div class=&quot;arrow&quot;></div><div class=&quot;tooltip-inner&quot;></div></div>" data-bs-toggle="tooltip" data-bs-placement="right" title="Collapse" />
                        }
                    </button>
                    {/* End Navbar Vertical Toggle */}
                    {/* Search Form */}
                    <div className="dropdown ms-2">
                        {/* Input Group */}
                        <div className="d-none d-lg-block">
                            <div className="input-group input-group-merge input-group-borderless input-group-hover-light navbar-input-group">
                                <div className="input-group-prepend input-group-text">
                                    <i className="bi-search" />
                                </div>
                                <input type="search" className="js-form-search form-control" placeholder="Search in front" aria-label="Search in front" data-hs-form-search-options="{
                       &quot;clearIcon&quot;: &quot;#clearSearchResultsIcon&quot;,
                       &quot;dropMenuElement&quot;: &quot;#searchDropdownMenu&quot;,
                       &quot;dropMenuOffset&quot;: 20,
                       &quot;toggleIconOnFocus&quot;: true,
                       &quot;activeClass&quot;: &quot;focus&quot;
                     }" />
                                <a className="input-group-append input-group-text" href="javascript:;">
                                    <i id="clearSearchResultsIcon" className="bi-x-lg" style={{ display: 'none' }} />
                                </a>
                            </div>
                        </div>
                        <button className="js-form-search js-form-search-mobile-toggle btn btn-ghost-secondary btn-icon rounded-circle d-lg-none" type="button" data-hs-form-search-options="{
                       &quot;clearIcon&quot;: &quot;#clearSearchResultsIcon&quot;,
                       &quot;dropMenuElement&quot;: &quot;#searchDropdownMenu&quot;,
                       &quot;dropMenuOffset&quot;: 20,
                       &quot;toggleIconOnFocus&quot;: true,
                       &quot;activeClass&quot;: &quot;focus&quot;
                     }">
                            <i className="bi-search" />
                        </button>
                        {/* End Input Group */}
                        {/* Card Search Content */}
                        <div id="searchDropdownMenu" className="hs-form-search-menu-content dropdown-menu dropdown-menu-form-search navbar-dropdown-menu-borderless">
                            <div className="card">
                                {/* Body */}
                                <div className="card-body-height">
                                    <div className="d-lg-none">
                                        <div className="input-group input-group-merge navbar-input-group mb-5">
                                            <div className="input-group-prepend input-group-text">
                                                <i className="bi-search" />
                                            </div>
                                            <input type="search" className="form-control" placeholder="Search in front" aria-label="Search in front" />
                                            <a className="input-group-append input-group-text" href="javascript:;">
                                                <i className="bi-x-lg" />
                                            </a>
                                        </div>
                                    </div>
                                    <span className="dropdown-header">Recent searches</span>
                                    <div className="dropdown-item bg-transparent text-wrap">
                                        <a className="btn btn-soft-dark btn-xs rounded-pill" href="./index.html">
                                            Gulp <i className="bi-search ms-1" />
                                        </a>
                                        <a className="btn btn-soft-dark btn-xs rounded-pill" href="./index.html">
                                            Notification panel <i className="bi-search ms-1" />
                                        </a>
                                    </div>
                                    <div className="dropdown-divider" />
                                    <span className="dropdown-header">Tutorials</span>
                                    <a className="dropdown-item" href="./index.html">
                                        <div className="d-flex align-items-center">
                                            <div className="flex-shrink-0">
                                                <span className="icon icon-soft-dark icon-xs icon-circle">
                                                    <i className="bi-sliders" />
                                                </span>
                                            </div>
                                            <div className="flex-grow-1 text-truncate ms-2">
                                                <span>How to set up Gulp?</span>
                                            </div>
                                        </div>
                                    </a>
                                    <a className="dropdown-item" href="./index.html">
                                        <div className="d-flex align-items-center">
                                            <div className="flex-shrink-0">
                                                <span className="icon icon-soft-dark icon-xs icon-circle">
                                                    <i className="bi-paint-bucket" />
                                                </span>
                                            </div>
                                            <div className="flex-grow-1 text-truncate ms-2">
                                                <span>How to change theme color?</span>
                                            </div>
                                        </div>
                                    </a>
                                    <div className="dropdown-divider" />
                                    <span className="dropdown-header">Members</span>
                                    <a className="dropdown-item" href="./index.html">
                                        <div className="d-flex align-items-center">
                                            <div className="flex-shrink-0">
                                                <img className="avatar avatar-xs avatar-circle" src="./assets/img/160x160/img10.jpg" alt="Image Description" />
                                            </div>
                                            <div className="flex-grow-1 text-truncate ms-2">
                                                <span>Amanda Harvey <i className="tio-verified text-primary" data-toggle="tooltip" data-placement="top" title="Top endorsed" /></span>
                                            </div>
                                        </div>
                                    </a>
                                    <a className="dropdown-item" href="./index.html">
                                        <div className="d-flex align-items-center">
                                            <div className="flex-shrink-0">
                                                <img className="avatar avatar-xs avatar-circle" src="./assets/img/160x160/img3.jpg" alt="Image Description" />
                                            </div>
                                            <div className="flex-grow-1 text-truncate ms-2">
                                                <span>David Harrison</span>
                                            </div>
                                        </div>
                                    </a>
                                    <a className="dropdown-item" href="./index.html">
                                        <div className="d-flex align-items-center">
                                            <div className="flex-shrink-0">
                                                <div className="avatar avatar-xs avatar-soft-info avatar-circle">
                                                    <span className="avatar-initials">A</span>
                                                </div>
                                            </div>
                                            <div className="flex-grow-1 text-truncate ms-2">
                                                <span>Anne Richard</span>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                {/* End Body */}
                                {/* Footer */}
                                <a className="card-footer text-center" href="./index.html">
                                    See all results <i className="bi-chevron-right small" />
                                </a>
                                {/* End Footer */}
                            </div>
                        </div>
                        {/* End Card Search Content */}
                    </div>
                    {/* End Search Form */}
                </div>
                <div className="navbar-nav-wrap-content-end">
                    {/* Navbar */}
                    <ul className="navbar-nav">
                        <li className="nav-item d-none d-sm-inline-block">
                            {/* Notification */}
                            <div className="dropdown">
                                <button type="button" className="btn btn-ghost-secondary btn-icon rounded-circle" id="navbarNotificationsDropdown" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside" data-bs-dropdown-animation>
                                    <i className="bi-bell" />
                                    <span className="btn-status btn-sm-status btn-status-danger" />
                                </button>
                                <div className="dropdown-menu dropdown-menu-end dropdown-card navbar-dropdown-menu navbar-dropdown-menu-borderless" aria-labelledby="navbarNotificationsDropdown" style={{ width: '25rem' }}>
                                    <div className="card">
                                        {/* Header */}
                                        <div className="card-header card-header-content-between">
                                            <h4 className="card-title mb-0">Notifications</h4>
                                            {/* Unfold */}
                                            <div className="dropdown">
                                                <button type="button" className="btn btn-icon btn-sm btn-ghost-secondary rounded-circle" id="navbarNotificationsDropdownSettings" data-bs-toggle="dropdown" aria-expanded="false">
                                                    <i className="bi-three-dots-vertical" />
                                                </button>
                                                <div className="dropdown-menu dropdown-menu-end navbar-dropdown-menu navbar-dropdown-menu-borderless" aria-labelledby="navbarNotificationsDropdownSettings">
                                                    <span className="dropdown-header">Settings</span>
                                                    <a className="dropdown-item" href="#">
                                                        <i className="bi-archive dropdown-item-icon" /> Archive all
                                                    </a>
                                                    <a className="dropdown-item" href="#">
                                                        <i className="bi-check2-all dropdown-item-icon" /> Mark all as read
                                                    </a>
                                                    <a className="dropdown-item" href="#">
                                                        <i className="bi-toggle-off dropdown-item-icon" /> Disable notifications
                                                    </a>
                                                    <a className="dropdown-item" href="#">
                                                        <i className="bi-gift dropdown-item-icon" /> What's new?
                                                    </a>
                                                    <div className="dropdown-divider" />
                                                    <span className="dropdown-header">Feedback</span>
                                                    <a className="dropdown-item" href="#">
                                                        <i className="bi-chat-left-dots dropdown-item-icon" /> Report
                                                    </a>
                                                </div>
                                            </div>
                                            {/* End Unfold */}
                                        </div>
                                        {/* End Header */}
                                        {/* Nav */}
                                        <ul className="nav nav-tabs nav-justified" id="notificationTab" role="tablist">
                                            <li className="nav-item">
                                                <a className="nav-link active" href="#notificationNavOne" id="notificationNavOne-tab" data-bs-toggle="tab" data-bs-target="#notificationNavOne" role="tab" aria-controls="notificationNavOne" aria-selected="true">Messages (3)</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="#notificationNavTwo" id="notificationNavTwo-tab" data-bs-toggle="tab" data-bs-target="#notificationNavTwo" role="tab" aria-controls="notificationNavTwo" aria-selected="false">Archived</a>
                                            </li>
                                        </ul>
                                        {/* End Nav */}
                                        {/* Body */}
                                        <div className="card-body-height">
                                            {/* Tab Content */}
                                            <div className="tab-content" id="notificationTabContent">
                                                <div className="tab-pane fade show active" id="notificationNavOne" role="tabpanel" aria-labelledby="notificationNavOne-tab">
                                                    {/* List Group */}
                                                    <ul className="list-group list-group-flush navbar-card-list-group">
                                                        {/* Item */}
                                                        <li className="list-group-item form-check-select">
                                                            <div className="row">
                                                                <div className="col-auto">
                                                                    <div className="d-flex align-items-center">
                                                                        <div className="form-check">
                                                                            <input className="form-check-input" type="checkbox" defaultValue id="notificationCheck1" defaultChecked />
                                                                            <label className="form-check-label" htmlFor="notificationCheck1" />
                                                                            <span className="form-check-stretched-bg" />
                                                                        </div>
                                                                        <img className="avatar avatar-sm avatar-circle" src="./assets/img/160x160/img3.jpg" alt="Image Description" />
                                                                    </div>
                                                                </div>
                                                                {/* End Col */}
                                                                <div className="col ms-n2">
                                                                    <h5 className="mb-1">Brian Warner</h5>
                                                                    <p className="text-body fs-5">changed an issue from "In Progress" to <span className="badge bg-success">Review</span></p>
                                                                </div>
                                                                {/* End Col */}
                                                                <small className="col-auto text-muted text-cap">2hr</small>
                                                                {/* End Col */}
                                                            </div>
                                                            {/* End Row */}
                                                            <a className="stretched-link" href="#" />
                                                        </li>
                                                        {/* End Item */}
                                                        {/* Item */}
                                                        <li className="list-group-item form-check-select">
                                                            <div className="row">
                                                                <div className="col-auto">
                                                                    <div className="d-flex align-items-center">
                                                                        <div className="form-check">
                                                                            <input className="form-check-input" type="checkbox" defaultValue id="notificationCheck2" defaultChecked />
                                                                            <label className="form-check-label" htmlFor="notificationCheck2" />
                                                                            <span className="form-check-stretched-bg" />
                                                                        </div>
                                                                        <div className="avatar avatar-sm avatar-soft-dark avatar-circle">
                                                                            <span className="avatar-initials">K</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                {/* End Col */}
                                                                <div className="col ms-n2">
                                                                    <h5 className="mb-1">Klara Hampton</h5>
                                                                    <p className="text-body fs-5">mentioned you in a comment</p>
                                                                    <blockquote className="blockquote blockquote-sm">
                                                                        Nice work, love! You really nailed it. Keep it up!
                                                                    </blockquote>
                                                                </div>
                                                                {/* End Col */}
                                                                <small className="col-auto text-muted text-cap">10hr</small>
                                                                {/* End Col */}
                                                            </div>
                                                            {/* End Row */}
                                                            <a className="stretched-link" href="#" />
                                                        </li>
                                                        {/* End Item */}
                                                        {/* Item */}
                                                        <li className="list-group-item form-check-select">
                                                            <div className="row">
                                                                <div className="col-auto">
                                                                    <div className="d-flex align-items-center">
                                                                        <div className="form-check">
                                                                            <input className="form-check-input" type="checkbox" defaultValue id="notificationCheck3" defaultChecked />
                                                                            <label className="form-check-label" htmlFor="notificationCheck3" />
                                                                            <span className="form-check-stretched-bg" />
                                                                        </div>
                                                                        <div className="avatar avatar-sm avatar-circle">
                                                                            <img className="avatar-img" src="./assets/img/160x160/img10.jpg" alt="Image Description" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                {/* End Col */}
                                                                <div className="col ms-n2">
                                                                    <h5 className="mb-1">Ruby Walter</h5>
                                                                    <p className="text-body fs-5">joined the Slack group HS Team</p>
                                                                </div>
                                                                {/* End Col */}
                                                                <small className="col-auto text-muted text-cap">3dy</small>
                                                                {/* End Col */}
                                                            </div>
                                                            {/* End Row */}
                                                            <a className="stretched-link" href="#" />
                                                        </li>
                                                        {/* End Item */}
                                                        {/* Item */}
                                                        <li className="list-group-item form-check-select">
                                                            <div className="row">
                                                                <div className="col-auto">
                                                                    <div className="d-flex align-items-center">
                                                                        <div className="form-check">
                                                                            <input className="form-check-input" type="checkbox" defaultValue id="notificationCheck4" />
                                                                            <label className="form-check-label" htmlFor="notificationCheck4" />
                                                                            <span className="form-check-stretched-bg" />
                                                                        </div>
                                                                        <div className="avatar avatar-sm avatar-circle">
                                                                            <img className="avatar-img" src="./assets/svg/brands/google-icon.svg" alt="Image Description" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                {/* End Col */}
                                                                <div className="col ms-n2">
                                                                    <h5 className="mb-1">from Google</h5>
                                                                    <p className="text-body fs-5">Start using forms to capture the information of prospects visiting your Google website</p>
                                                                </div>
                                                                {/* End Col */}
                                                                <small className="col-auto text-muted text-cap">17dy</small>
                                                                {/* End Col */}
                                                            </div>
                                                            {/* End Row */}
                                                            <a className="stretched-link" href="#" />
                                                        </li>
                                                        {/* End Item */}
                                                        {/* Item */}
                                                        <li className="list-group-item form-check-select">
                                                            <div className="row">
                                                                <div className="col-auto">
                                                                    <div className="d-flex align-items-center">
                                                                        <div className="form-check">
                                                                            <input className="form-check-input" type="checkbox" defaultValue id="notificationCheck5" />
                                                                            <label className="form-check-label" htmlFor="notificationCheck5" />
                                                                            <span className="form-check-stretched-bg" />
                                                                        </div>
                                                                        <div className="avatar avatar-sm avatar-circle">
                                                                            <img className="avatar-img" src="./assets/img/160x160/img7.jpg" alt="Image Description" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                {/* End Col */}
                                                                <div className="col ms-n2">
                                                                    <h5 className="mb-1">Sara Villar</h5>
                                                                    <p className="text-body fs-5">completed <i className="bi-journal-bookmark-fill text-primary" /> FD-7 task</p>
                                                                </div>
                                                                {/* End Col */}
                                                                <small className="col-auto text-muted text-cap">2mn</small>
                                                                {/* End Col */}
                                                            </div>
                                                            {/* End Row */}
                                                            <a className="stretched-link" href="#" />
                                                        </li>
                                                        {/* End Item */}
                                                    </ul>
                                                    {/* End List Group */}
                                                </div>
                                                <div className="tab-pane fade" id="notificationNavTwo" role="tabpanel" aria-labelledby="notificationNavTwo-tab">
                                                    {/* List Group */}
                                                    <ul className="list-group list-group-flush navbar-card-list-group">
                                                        {/* Item */}
                                                        <li className="list-group-item form-check-select">
                                                            <div className="row">
                                                                <div className="col-auto">
                                                                    <div className="d-flex align-items-center">
                                                                        <div className="form-check">
                                                                            <input className="form-check-input" type="checkbox" defaultValue id="notificationCheck6" />
                                                                            <label className="form-check-label" htmlFor="notificationCheck6" />
                                                                            <span className="form-check-stretched-bg" />
                                                                        </div>
                                                                        <div className="avatar avatar-sm avatar-soft-dark avatar-circle">
                                                                            <span className="avatar-initials">A</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                {/* End Col */}
                                                                <div className="col ms-n2">
                                                                    <h5 className="mb-1">Anne Richard</h5>
                                                                    <p className="text-body fs-5">accepted your invitation to join Notion</p>
                                                                </div>
                                                                {/* End Col */}
                                                                <small className="col-auto text-muted text-cap">1dy</small>
                                                                {/* End Col */}
                                                            </div>
                                                            {/* End Row */}
                                                            <a className="stretched-link" href="#" />
                                                        </li>
                                                        {/* End Item */}
                                                        {/* Item */}
                                                        <li className="list-group-item form-check-select">
                                                            <div className="row">
                                                                <div className="col-auto">
                                                                    <div className="d-flex align-items-center">
                                                                        <div className="form-check">
                                                                            <input className="form-check-input" type="checkbox" defaultValue id="notificationCheck7" />
                                                                            <label className="form-check-label" htmlFor="notificationCheck7" />
                                                                            <span className="form-check-stretched-bg" />
                                                                        </div>
                                                                        <div className="avatar avatar-sm avatar-circle">
                                                                            <img className="avatar-img" src="./assets/img/160x160/img5.jpg" alt="Image Description" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                {/* End Col */}
                                                                <div className="col ms-n2">
                                                                    <h5 className="mb-1">Finch Hoot</h5>
                                                                    <p className="text-body fs-5">left Slack group HS projects</p>
                                                                </div>
                                                                {/* End Col */}
                                                                <small className="col-auto text-muted text-cap">1dy</small>
                                                                {/* End Col */}
                                                            </div>
                                                            {/* End Row */}
                                                            <a className="stretched-link" href="#" />
                                                        </li>
                                                        {/* End Item */}
                                                        {/* Item */}
                                                        <li className="list-group-item form-check-select">
                                                            <div className="row">
                                                                <div className="col-auto">
                                                                    <div className="d-flex align-items-center">
                                                                        <div className="form-check">
                                                                            <input className="form-check-input" type="checkbox" defaultValue id="notificationCheck8" />
                                                                            <label className="form-check-label" htmlFor="notificationCheck8" />
                                                                            <span className="form-check-stretched-bg" />
                                                                        </div>
                                                                        <div className="avatar avatar-sm avatar-dark avatar-circle">
                                                                            <span className="avatar-initials">HS</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                {/* End Col */}
                                                                <div className="col ms-n2">
                                                                    <h5 className="mb-1">Htmlstream</h5>
                                                                    <p className="text-body fs-5">you earned a "Top endorsed" <i className="bi-patch-check-fill text-primary" /> badge</p>
                                                                </div>
                                                                {/* End Col */}
                                                                <small className="col-auto text-muted text-cap">6dy</small>
                                                                {/* End Col */}
                                                            </div>
                                                            {/* End Row */}
                                                            <a className="stretched-link" href="#" />
                                                        </li>
                                                        {/* End Item */}
                                                        {/* Item */}
                                                        <li className="list-group-item form-check-select">
                                                            <div className="row">
                                                                <div className="col-auto">
                                                                    <div className="d-flex align-items-center">
                                                                        <div className="form-check">
                                                                            <input className="form-check-input" type="checkbox" defaultValue id="notificationCheck9" />
                                                                            <label className="form-check-label" htmlFor="notificationCheck9" />
                                                                            <span className="form-check-stretched-bg" />
                                                                        </div>
                                                                        <div className="avatar avatar-sm avatar-circle">
                                                                            <img className="avatar-img" src="./assets/img/160x160/img8.jpg" alt="Image Description" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                {/* End Col */}
                                                                <div className="col ms-n2">
                                                                    <h5 className="mb-1">Linda Bates</h5>
                                                                    <p className="text-body fs-5">Accepted your connection</p>
                                                                </div>
                                                                {/* End Col */}
                                                                <small className="col-auto text-muted text-cap">17dy</small>
                                                                {/* End Col */}
                                                            </div>
                                                            {/* End Row */}
                                                            <a className="stretched-link" href="#" />
                                                        </li>
                                                        {/* End Item */}
                                                        {/* Item */}
                                                        <li className="list-group-item form-check-select">
                                                            <div className="row">
                                                                <div className="col-auto">
                                                                    <div className="d-flex align-items-center">
                                                                        <div className="form-check">
                                                                            <input className="form-check-input" type="checkbox" defaultValue id="notificationCheck10" />
                                                                            <label className="form-check-label" htmlFor="notificationCheck10" />
                                                                            <span className="form-check-stretched-bg" />
                                                                        </div>
                                                                        <div className="avatar avatar-sm avatar-soft-dark avatar-circle">
                                                                            <span className="avatar-initials">L</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                {/* End Col */}
                                                                <div className="col ms-n2">
                                                                    <h5 className="mb-1">Lewis Clarke</h5>
                                                                    <p className="text-body fs-5">completed <i className="bi-journal-bookmark-fill text-primary" /> FD-134 task</p>
                                                                </div>
                                                                {/* End Col */}
                                                                <small className="col-auto text-muted text-cap">2mts</small>
                                                                {/* End Col */}
                                                            </div>
                                                            {/* End Row */}
                                                            <a className="stretched-link" href="#" />
                                                        </li>
                                                        {/* End Item */}
                                                    </ul>
                                                    {/* End List Group */}
                                                </div>
                                            </div>
                                            {/* End Tab Content */}
                                        </div>
                                        {/* End Body */}
                                        {/* Card Footer */}
                                        <a className="card-footer text-center" href="#">
                                            View all notifications <i className="bi-chevron-right" />
                                        </a>
                                        {/* End Card Footer */}
                                    </div>
                                </div>
                            </div>
                            {/* End Notification */}
                        </li>
                        <li className="nav-item d-none d-sm-inline-block">
                            {/* Apps */}
                            <div className="dropdown">
                                <button type="button" className="btn btn-icon btn-ghost-secondary rounded-circle" id="navbarAppsDropdown" data-bs-toggle="dropdown" aria-expanded="false" data-bs-dropdown-animation>
                                    <i className="bi-app-indicator" />
                                </button>
                                <div className="dropdown-menu dropdown-menu-end dropdown-card navbar-dropdown-menu navbar-dropdown-menu-borderless" aria-labelledby="navbarAppsDropdown" style={{ width: '25rem' }}>
                                    <div className="card">
                                        {/* Header */}
                                        <div className="card-header">
                                            <h4 className="card-title">Web apps &amp; services</h4>
                                        </div>
                                        {/* End Header */}
                                        {/* Body */}
                                        <div className="card-body card-body-height">
                                            <a className="dropdown-item" href="#">
                                                <div className="d-flex align-items-center">
                                                    <div className="flex-shrink-0">
                                                        <img className="avatar avatar-xs avatar-4x3" src="./assets/svg/brands/atlassian-icon.svg" alt="Image Description" />
                                                    </div>
                                                    <div className="flex-grow-1 text-truncate ms-3">
                                                        <h5 className="mb-0">Atlassian</h5>
                                                        <p className="card-text text-body">Security and control across Cloud</p>
                                                    </div>
                                                </div>
                                            </a>
                                            <a className="dropdown-item" href="#">
                                                <div className="d-flex align-items-center">
                                                    <div className="flex-shrink-0">
                                                        <img className="avatar avatar-xs avatar-4x3" src="./assets/svg/brands/slack-icon.svg" alt="Image Description" />
                                                    </div>
                                                    <div className="flex-grow-1 text-truncate ms-3">
                                                        <h5 className="mb-0">Slack <span className="badge bg-primary rounded-pill text-uppercase ms-1">Try</span></h5>
                                                        <p className="card-text text-body">Email collaboration software</p>
                                                    </div>
                                                </div>
                                            </a>
                                            <a className="dropdown-item" href="#">
                                                <div className="d-flex align-items-center">
                                                    <div className="flex-shrink-0">
                                                        <img className="avatar avatar-xs avatar-4x3" src="./assets/svg/brands/google-webdev-icon.svg" alt="Image Description" />
                                                    </div>
                                                    <div className="flex-grow-1 text-truncate ms-3">
                                                        <h5 className="mb-0">Google webdev</h5>
                                                        <p className="card-text text-body">Work involved in developing a website</p>
                                                    </div>
                                                </div>
                                            </a>
                                            <a className="dropdown-item" href="#">
                                                <div className="d-flex align-items-center">
                                                    <div className="flex-shrink-0">
                                                        <img className="avatar avatar-xs avatar-4x3" src="./assets/svg/brands/frontapp-icon.svg" alt="Image Description" />
                                                    </div>
                                                    <div className="flex-grow-1 text-truncate ms-3">
                                                        <h5 className="mb-0">Frontapp</h5>
                                                        <p className="card-text text-body">The inbox for teams</p>
                                                    </div>
                                                </div>
                                            </a>
                                            <a className="dropdown-item" href="#">
                                                <div className="d-flex align-items-center">
                                                    <div className="flex-shrink-0">
                                                        <img className="avatar avatar-xs avatar-4x3" src="./assets/svg/illustrations/review-rating-shield.svg" alt="Image Description" />
                                                    </div>
                                                    <div className="flex-grow-1 text-truncate ms-3">
                                                        <h5 className="mb-0">HS Support</h5>
                                                        <p className="card-text text-body">Customer service and support</p>
                                                    </div>
                                                </div>
                                            </a>
                                            <a className="dropdown-item" href="#">
                                                <div className="d-flex align-items-center">
                                                    <div className="flex-shrink-0">
                                                        <div className="avatar avatar-sm avatar-soft-dark">
                                                            <span className="avatar-initials"><i className="bi-grid" /></span>
                                                        </div>
                                                    </div>
                                                    <div className="flex-grow-1 text-truncate ms-3">
                                                        <h5 className="mb-0">More Front products</h5>
                                                        <p className="card-text text-body">Check out more HS products</p>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        {/* End Body */}
                                        {/* Footer */}
                                        <a className="card-footer text-center" href="#">
                                            View all apps <i className="bi-chevron-right" />
                                        </a>
                                        {/* End Footer */}
                                    </div>
                                </div>
                            </div>
                            {/* End Apps */}
                        </li>
                        <li className="nav-item d-none d-sm-inline-block">
                            {/* Activity */}
                            <button className="btn btn-ghost-secondary btn-icon rounded-circle" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasActivityStream" aria-controls="offcanvasActivityStream">
                                <i className="bi-x-diamond" />
                            </button>
                            {/* Activity */}
                        </li>
                        <li className="nav-item">
                            {/* Account */}
                            <div className="dropdown">
                                <a className="navbar-dropdown-account-wrapper" href="javascript:;" id="accountNavbarDropdown" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside" data-bs-dropdown-animation>
                                    <div className="avatar avatar-sm avatar-circle">
                                        <img className="avatar-img" src="./assets/img/160x160/img6.jpg" alt="Image Description" />
                                        <span className="avatar-status avatar-sm-status avatar-status-success" />
                                    </div>
                                </a>
                                <div className="dropdown-menu dropdown-menu-end navbar-dropdown-menu navbar-dropdown-menu-borderless navbar-dropdown-account" aria-labelledby="accountNavbarDropdown" style={{ width: '16rem' }}>
                                    <div className="dropdown-item-text">
                                        <div className="d-flex align-items-center">
                                            <div className="avatar avatar-sm avatar-circle">
                                                <img className="avatar-img" src="./assets/img/160x160/img6.jpg" alt="Image Description" />
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <h5 className="mb-0">Mark Williams</h5>
                                                <p className="card-text text-body">mark@site.com</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="dropdown-divider" />
                                    {/* Dropdown */}
                                    <div className="dropdown">
                                        <a className="navbar-dropdown-submenu-item dropdown-item dropdown-toggle" href="javascript:;" id="navSubmenuPagesAccountDropdown1" data-bs-toggle="dropdown" aria-expanded="false">Set status</a>
                                        <div className="dropdown-menu dropdown-menu-end navbar-dropdown-menu navbar-dropdown-menu-borderless navbar-dropdown-sub-menu" aria-labelledby="navSubmenuPagesAccountDropdown1">
                                            <a className="dropdown-item" href="#">
                                                <span className="legend-indicator bg-success me-1" /> Available
                                            </a>
                                            <a className="dropdown-item" href="#">
                                                <span className="legend-indicator bg-danger me-1" /> Busy
                                            </a>
                                            <a className="dropdown-item" href="#">
                                                <span className="legend-indicator bg-warning me-1" /> Away
                                            </a>
                                            <div className="dropdown-divider" />
                                            <a className="dropdown-item" href="#"> Reset status
                                            </a>
                                        </div>
                                    </div>
                                    {/* End Dropdown */}
                                    <a className="dropdown-item" href="#">Profile &amp; account</a>
                                    <a className="dropdown-item" href="#">Settings</a>
                                    <div className="dropdown-divider" />
                                    <a className="dropdown-item" href="#">
                                        <div className="d-flex align-items-center">
                                            <div className="flex-shrink-0">
                                                <div className="avatar avatar-sm avatar-dark avatar-circle">
                                                    <span className="avatar-initials">HS</span>
                                                </div>
                                            </div>
                                            <div className="flex-grow-1 ms-2">
                                                <h5 className="mb-0">Htmlstream <span className="badge bg-primary rounded-pill text-uppercase ms-1">PRO</span></h5>
                                                <span className="card-text">hs.example.com</span>
                                            </div>
                                        </div>
                                    </a>
                                    <div className="dropdown-divider" />
                                    {/* Dropdown */}
                                    <div className="dropdown">
                                        <a className="navbar-dropdown-submenu-item dropdown-item dropdown-toggle" href="javascript:;" id="navSubmenuPagesAccountDropdown2" data-bs-toggle="dropdown" aria-expanded="false">Customization</a>
                                        <div className="dropdown-menu dropdown-menu-end navbar-dropdown-menu navbar-dropdown-menu-borderless navbar-dropdown-sub-menu" aria-labelledby="navSubmenuPagesAccountDropdown2">
                                            <a className="dropdown-item" href="#">
                                                Invite people
                                            </a>
                                            <a className="dropdown-item" href="#">
                                                Analytics
                                                <i className="bi-box-arrow-in-up-right" />
                                            </a>
                                            <a className="dropdown-item" href="#">
                                                Customize Front
                                                <i className="bi-box-arrow-in-up-right" />
                                            </a>
                                        </div>
                                    </div>
                                    {/* End Dropdown */}
                                    <a className="dropdown-item" href="#">Manage team</a>
                                    <div className="dropdown-divider" />
                                    <a className="dropdown-item" href="#">Sign out</a>
                                </div>
                            </div>
                            {/* End Account */}
                        </li>
                    </ul>
                    {/* End Navbar */}
                </div>
            </div>
        </header>
    )
}
