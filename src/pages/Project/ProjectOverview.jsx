import React from 'react'
import Header from './Component/Header'
import { Gauge } from '@mui/x-charts/Gauge';
import SalesGraph from './Component/SalesGraph';
import MyPieChart from './Component/PieChart';
import HoursSpentChart from './Component/HoursSpentChart';

export default function ProjectOverview() {
    return (
        <>
            <div className="content container-fluid">
                {/* Page Header */}
                <div className="page-header">
                    <div className="d-flex mb-3">
                        {/* Avatar */}
                        <div className="flex-shrink-0">
                            <div className="avatar avatar-lg avatar-4x3">
                                <img className="avatar-img" src="./assets/svg/brands/guideline-icon.svg" alt="Image Description" />
                            </div>
                        </div>
                        {/* End Avatar */}
                        <div className="flex-grow-1 ms-4">
                            <div className="row">
                                <div className="col-lg mb-3 mb-lg-0">
                                    <h1 className="page-header-title">Cloud computing web service</h1>
                                    <div className="row align-items-center">
                                        <div className="col-auto">
                                            <span>Client:</span>
                                            <a href="#">Htmlstream</a>
                                        </div>
                                        {/* End Col */}
                                        <div className="col-auto">
                                            <div className="row align-items-center g-0">
                                                <div className="col-auto">Due date:</div>
                                                {/* Flatpickr */}
                                                <div className="col flatpickr-custom-position-fix-sm-down">
                                                    <div id="projectDeadlineFlatpickr" className="js-flatpickr flatpickr-custom flatpickr-custom-borderless input-group input-group-sm" data-hs-flatpickr-options="{
                                  &quot;appendTo&quot;: &quot;#projectDeadlineFlatpickr&quot;,
                                  &quot;dateFormat&quot;: &quot;d/m/Y&quot;,
                                  &quot;wrap&quot;: true
                                }">
                                                        <input type="text" className="flatpickr-custom-form-control form-control" placeholder="Select dates" data-input defaultValue="29/06/2020" />
                                                        <div className="input-group-append input-group-text ps-0" data-bs-toggle>
                                                            <i className="bi-chevron-down" />
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* End Flatpickr */}
                                            </div>
                                        </div>
                                        {/* End Col */}
                                        <div className="col-auto">
                                            {/* Select */}
                                            <div className="tom-select-custom">
                                                <select className="js-select form-select form-select-sm form-select-borderless tom-select-form-select-ps-0" id="ownerLabel" autoComplete="off" data-hs-tom-select-options="{
                                  &quot;searchInDropdown&quot;: false,
                                  &quot;hideSearch&quot;: true,
                                  &quot;dropdownWidth&quot;: &quot;12rem&quot;
                                }">
                                                    <option value="owner1" selected data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle&quot; src=&quot;./assets/img/160x160/img6.jpg&quot; alt=&quot;Avatar&quot; /><span class=&quot;flex-grow-1 ms-2&quot;>Mark Williams</span></span>">Mark Williams</option>
                                                    <option value="owner2" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle&quot; src=&quot;./assets/img/160x160/img10.jpg&quot; alt=&quot;Avatar&quot; /><span class=&quot;flex-grow-1 ms-2&quot;>Amanda Harvey</span></span>">Amanda Harvey</option>
                                                    <option value="owner3" data-option-template="<span class=&quot;d-flex align-items-center&quot;><i class=&quot;bi-person text-body&quot;></i><span class=&quot;flex-grow-1 ms-2&quot;>Assign to owner</span></span>">Assign to owner</option>
                                                </select>
                                            </div>
                                            {/* End Select */}
                                        </div>
                                        {/* End Col */}
                                    </div>
                                    {/* End Row */}
                                </div>
                                {/* End Col */}
                                <div className="col-lg-auto">
                                    <span className="text-cap small">Team members:</span>
                                    <div className="d-flex">
                                        {/* Avatar Group */}
                                        <div className="avatar-group avatar-circle me-3">
                                            <a className="avatar" href="./user-profile.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Amanda Harvey">
                                                <img className="avatar-img" src="./assets/img/160x160/img10.jpg" alt="Image Description" />
                                            </a>
                                            <a className="avatar" href="./user-profile.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Linda Bates">
                                                <img className="avatar-img" src="./assets/img/160x160/img9.jpg" alt="Image Description" />
                                            </a>
                                            <a className="avatar avatar-soft-info" href="./user-profile.html" data-bs-toggle="tooltip" data-bs-placement="top" title="#digitalmarketing">
                                                <span className="avatar-initials">
                                                    <i className="bi-people-fill" />
                                                </span>
                                            </a>
                                            <a className="avatar" href="./user-profile.html" data-bs-toggle="tooltip" data-bs-placement="top" title="David Harrison">
                                                <img className="avatar-img" src="./assets/img/160x160/img3.jpg" alt="Image Description" />
                                            </a>
                                            <a className="avatar avatar-soft-dark" href="./user-profile.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Antony Taylor">
                                                <span className="avatar-initials">A</span>
                                            </a>
                                            <a className="avatar avatar-light avatar-circle" href="javascript:;" data-bs-toggle="modal" data-bs-target="#shareWithPeopleModal">
                                                <span className="avatar-initials">+2</span>
                                            </a>
                                        </div>
                                        {/* End Avatar Group */}
                                        <a className="btn btn-primary btn-icon rounded-circle" href="javascript:;" data-bs-toggle="modal" data-bs-target="#shareWithPeopleModal">
                                            <i className="bi-share-fill" />
                                        </a>
                                    </div>
                                </div>
                                {/* End Col */}
                            </div>
                            {/* End Row */}
                        </div>
                    </div>
                    {/* End Media */}
                    {/* Nav */}
                    {/* Nav */}
                    <div className="js-nav-scroller hs-nav-scroller-horizontal">
                        <span className="hs-nav-scroller-arrow-prev" style={{ display: 'none' }}>
                            <a className="hs-nav-scroller-arrow-link" href="javascript:;">
                                <i className="bi-chevron-left" />
                            </a>
                        </span>
                        <span className="hs-nav-scroller-arrow-next" style={{ display: 'none' }}>
                            <a className="hs-nav-scroller-arrow-link" href="javascript:;">
                                <i className="bi-chevron-right" />
                            </a>
                        </span>
                        <Header />
                    </div>
                    {/* End Nav */}
                </div>
                {/* End Page Header */}
                <div className="row">
                    <div className="col-sm-6 col-xl-3 mb-3 mb-xl-6">
                        {/* Card */}
                        <div className="card card-sm h-100">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col">
                                        {/* Media */}
                                        <div className="d-flex">
                                            <div className="flex-shrink-0">
                                                <i className="bi-receipt nav-icon" />
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <h4 className="mb-1">Spent</h4>
                                                <span className="d-block">-$71,431.00 USD</span>
                                            </div>
                                        </div>
                                        {/* End Media */}
                                    </div>
                                    {/* End Col */}
                                    <div className="col-auto">
                                        {/* Circle */}
                                        <div className="circles-chart">
                                            <Gauge width={80} height={80} value={50} />
                                        </div>
                                        {/* End Circle */}
                                    </div>
                                    {/* End Col */}
                                </div>
                                {/* End Row */}
                            </div>
                        </div>
                        {/* End Card */}
                    </div>
                    <div className="col-sm-6 col-xl-3 mb-3 mb-xl-6">
                        {/* Card */}
                        <div className="card card-sm h-100">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col">
                                        {/* Media */}
                                        <div className="d-flex">
                                            <div className="flex-shrink-0">
                                                <i className="bi-bar-chart nav-icon" />
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <h4 className="mb-1">Progress</h4>
                                                <span className="fs-5 text-success">
                                                    <i className="tio-trending-up" /> 1.7%
                                                </span>
                                            </div>
                                        </div>
                                        {/* End Media */}
                                    </div>
                                    {/* End Col */}
                                    <div className="col-auto">
                                        {/* Circle */}
                                        <div className="circles-chart">
                                        <Gauge width={80} height={80} value={70} />
                                        </div>
                                        {/* End Circle */}
                                    </div>
                                    {/* End Col */}
                                </div>
                                {/* End Row */}
                            </div>
                        </div>
                        {/* End Card */}
                    </div>
                    <div className="col-sm-6 col-xl-3 mb-3 mb-xl-6">
                        {/* Card */}
                        <div className="card card-sm h-100">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col">
                                        {/* Media */}
                                        <div className="d-flex">
                                            <div className="flex-shrink-0">
                                                <i className="bi-check2-circle nav-icon" />
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <h4 className="mb-1">Tasks closed</h4>
                                                <span className="d-block">79 <span className="badge bg-soft-dark text-dark rounded-pill ms-1">+4 today</span></span>
                                            </div>
                                        </div>
                                        {/* End Media */}
                                    </div>
                                    {/* End Col */}
                                    <div className="col-auto">
                                        {/* Circle */}
                                        <div className="circles-chart">
                                        <Gauge width={80} height={80} value={90} />
                                        </div>
                                        {/* End Circle */}
                                    </div>
                                    {/* End Col */}
                                </div>
                                {/* End Row */}
                            </div>
                        </div>
                        {/* End Card */}
                    </div>
                    <div className="col-sm-6 col-xl-3 mb-3 mb-xl-6">
                        {/* Card */}
                        <div className="card card-sm h-100">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col">
                                        {/* Media */}
                                        <div className="d-flex">
                                            <div className="flex-shrink-0">
                                                <i className="bi-award nav-icon" />
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <h4 className="mb-1">Goals</h4>
                                                <span className="d-block">41/100</span>
                                            </div>
                                        </div>
                                        {/* End Media */}
                                    </div>
                                    {/* End Col */}
                                    <div className="col-auto">
                                        {/* Circle */}
                                        <div className="circles-chart">
                                        <Gauge width={80} height={80} value={40} />
                                        </div>
                                        {/* End Circle */}
                                    </div>
                                    {/* End Col */}
                                </div>
                                {/* End Row */}
                            </div>
                        </div>
                        {/* End Card */}
                    </div>
                </div>
                {/* End Row */}
                {/* Card */}
                <div className="card mb-3 mb-lg-5">
                    {/* Header */}
                    <div className="card-header card-header-content-between">
                        <h6 className="card-subtitle mb-0">Project budget: <span className="h3 ms-sm-2">$150,000.00 USD</span></h6>
                        {/* Dropdown */}
                        <div className="dropdown">
                            <button type="button" className="btn btn-white btn-sm dropdown-toggle" id="usersExportDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                                <i className="bi-download me-2" /> Export
                            </button>
                            <div className="dropdown-menu dropdown-menu-sm-end" aria-labelledby="usersExportDropdown">
                                <span className="dropdown-header">Options</span>
                                <a id="export-copy" className="dropdown-item" href="javascript:;">
                                    <img className="avatar avatar-xss avatar-4x3 me-2" src="./assets/svg/illustrations/copy-icon.svg" alt="Image Description" />
                                    Copy
                                </a>
                                <a id="export-print" className="dropdown-item" href="javascript:;">
                                    <img className="avatar avatar-xss avatar-4x3 me-2" src="./assets/svg/illustrations/print-icon.svg" alt="Image Description" />
                                    Print
                                </a>
                                <div className="dropdown-divider" />
                                <span className="dropdown-header">Download options</span>
                                <a id="export-excel" className="dropdown-item" href="javascript:;">
                                    <img className="avatar avatar-xss avatar-4x3 me-2" src="./assets/svg/brands/excel-icon.svg" alt="Image Description" />
                                    Excel
                                </a>
                                <a id="export-csv" className="dropdown-item" href="javascript:;">
                                    <img className="avatar avatar-xss avatar-4x3 me-2" src="./assets/svg/components/placeholder-csv-format.svg" alt="Image Description" />
                                    .CSV
                                </a>
                                <a id="export-pdf" className="dropdown-item" href="javascript:;">
                                    <img className="avatar avatar-xss avatar-4x3 me-2" src="./assets/svg/brands/pdf-icon.svg" alt="Image Description" />
                                    PDF
                                </a>
                            </div>
                        </div>
                        {/* End Dropdown */}
                    </div>
                    {/* End Header */}
                    {/* Body */}
                    <div className="card-body">
                        {/* Bar Chart */}
                        <div className="chartjs-custom chartsvg" style={{ height: '18rem' }}>
                            <SalesGraph />
                        </div>
                        {/* End Bar Chart */}
                    </div>
                    {/* End Body */}
                </div>
                {/* End Card */}
                <div className="row">
                    <div className="col-lg-5 mb-3 mb-lg-5">
                        {/* Card */}
                        <div className="card">
                            {/* Header */}
                            <div className="card-header card-header-content-between">
                                <h4 className="card-header-title">Expenses</h4>
                                {/* Nav */}
                                <ul className="nav nav-segment" id="expensesTab" role="tablist">
                                    <li className="nav-item" data-bs-toggle="chart-doughnut" data-datasets={0} data-trigger="click" data-action="toggle">
                                        <a className="nav-link active" href="javascript:;" data-bs-toggle="tab">This week</a>
                                    </li>
                                    <li className="nav-item" data-bs-toggle="chart-doughnut" data-datasets={1} data-trigger="click" data-action="toggle">
                                        <a className="nav-link" href="javascript:;" data-bs-toggle="tab">Last week</a>
                                    </li>
                                </ul>
                                {/* End Nav */}
                            </div>
                            {/* End Header */}
                            {/* Body */}
                            <div className="card-body">
                                {/* Pie Chart */}
                                <div className="chartjs-custom mb-3 mb-sm-5 chartsvg flex" style={{ height: '14rem' }}>
                                   <MyPieChart />
                                </div>
                                {/* End Pie Chart */}
                                <div className="row justify-content-center">
                                    <div className="col-auto mb-3 mb-sm-0">
                                        <h4 className="card-title">$2,332.00</h4>
                                        <span className="legend-indicator bg-primary" /> Marketing
                                    </div>
                                    {/* End Col */}
                                    <div className="col-auto mb-3 mb-sm-0">
                                        <h4 className="card-title">$10,452.00</h4>
                                        <span className="legend-indicator bg-info" /> Bills
                                    </div>
                                    {/* End Col */}
                                    <div className="col-auto">
                                        <h4 className="card-title">$56,856.00</h4>
                                        <span className="legend-indicator" /> Others
                                    </div>
                                    {/* End Col */}
                                </div>
                                {/* End Row */}
                            </div>
                            {/* End Body */}
                        </div>
                        {/* End Card */}
                    </div>
                    {/* End Col */}
                    <div className="col-lg-7 mb-3 mb-lg-5">
                        {/* Card */}
                        <div className="card h-100">
                            {/* Header */}
                            <div className="card-header card-header-content-between">
                                <h4 className="card-header-title">Events</h4>
                                {/* Nav */}
                                <ul className="nav nav-segment" id="eventsTab" role="tablist">
                                    <li className="nav-item">
                                        <a className="nav-link active" id="this-week-tab" data-bs-toggle="tab" href="#this-week" role="tab">
                                            This week
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="next-week-tab" data-bs-toggle="tab" href="#next-week" role="tab">
                                            Next week
                                        </a>
                                    </li>
                                </ul>
                                {/* End Nav */}
                            </div>
                            {/* End Header */}
                            {/* Body */}
                            <div className="card-body card-body-height">
                                {/* Tab Content */}
                                <div className="tab-content" id="eventsTabContent">
                                    <div className="tab-pane fade show active" id="this-week" role="tabpanel" aria-labelledby="this-week-tab">
                                        {/* List Group */}
                                        <ul className="list-group list-group-flush list-group-start-bordered">
                                            {/* Item */}
                                            <li className="list-group-item">
                                                <a className="list-group-item-action border-primary" href="#">
                                                    <div className="row">
                                                        <div className="col-sm mb-2 mb-sm-0">
                                                            <h2 className="fw-normal mb-1">12:00 - 03:00 <span className="fs-5 text-body text-uppercase">pm</span></h2>
                                                            <h5 className="text-inherit mb-0">Weekly overview</h5>
                                                            <span className="text-body small">24 May, 2020</span>
                                                        </div>
                                                        <div className="col-sm-auto align-self-sm-end">
                                                            {/* Avatar Group */}
                                                            <div className="avatar-group avatar-group-sm avatar-circle">
                                                                <span className="avatar">
                                                                    <img className="avatar-img" src="./assets/img/160x160/img9.jpg" alt="Image Description" />
                                                                </span>
                                                                <span className="avatar">
                                                                    <img className="avatar-img" src="./assets/img/160x160/img3.jpg" alt="Image Description" />
                                                                </span>
                                                                <span className="avatar avatar-soft-dark">
                                                                    <span className="avatar-initials">A</span>
                                                                </span>
                                                                <span className="avatar avatar-soft-info">
                                                                    <span className="avatar-initials">S</span>
                                                                </span>
                                                                <span className="avatar">
                                                                    <img className="avatar-img" src="./assets/img/160x160/img5.jpg" alt="Image Description" />
                                                                </span>
                                                            </div>
                                                            {/* End Avatar Group */}
                                                        </div>
                                                    </div>
                                                    {/* End Row */}
                                                </a>
                                            </li>
                                            {/* End Item */}
                                            {/* Item */}
                                            <li className="list-group-item">
                                                <a className="list-group-item-action border-info" href="#">
                                                    <div className="row">
                                                        <div className="col-sm mb-2 mb-sm-0">
                                                            <h2 className="fw-normal mb-1">04:30 - 04:50 <span className="fs-5 text-body text-uppercase">pm</span></h2>
                                                            <h5 className="text-inherit mb-0">Project tasks</h5>
                                                            <span className="text-body small">25 May, 2020</span>
                                                        </div>
                                                        <div className="col-sm-auto align-self-sm-end">
                                                            {/* Avatar Group */}
                                                            <div className="avatar-group avatar-group-sm avatar-circle">
                                                                <span className="avatar">
                                                                    <img className="avatar-img" src="./assets/img/160x160/img6.jpg" alt="Image Description" />
                                                                </span>
                                                                <span className="avatar">
                                                                    <img className="avatar-img" src="./assets/img/160x160/img7.jpg" alt="Image Description" />
                                                                </span>
                                                                <span className="avatar avatar-soft-danger">
                                                                    <span className="avatar-initials">A</span>
                                                                </span>
                                                            </div>
                                                            {/* End Avatar Group */}
                                                        </div>
                                                    </div>
                                                </a>
                                                {/* End Row */}
                                            </li>
                                            {/* Item */}
                                            <li className="list-group-item">
                                                <a className="list-group-item-action border-danger" href="#">
                                                    <div className="row">
                                                        <div className="col-sm mb-2 mb-sm-0">
                                                            <h2 className="fw-normal mb-1">12:00 - 03:00 <span className="fs-5 text-body text-uppercase">pm</span></h2>
                                                            <h5 className="text-inherit mb-0">Monthly reports</h5>
                                                            <span className="text-body small">27 May, 2020</span>
                                                        </div>
                                                        <div className="col-sm-auto align-self-sm-end">
                                                            {/* Avatar Group */}
                                                            <div className="avatar-group avatar-group-sm avatar-circle">
                                                                <span className="avatar">
                                                                    <img className="avatar-img" src="./assets/img/160x160/img5.jpg" alt="Image Description" />
                                                                </span>
                                                                <span className="avatar avatar-soft-dark">
                                                                    <span className="avatar-initials">B</span>
                                                                </span>
                                                                <span className="avatar">
                                                                    <img className="avatar-img" src="./assets/img/160x160/img8.jpg" alt="Image Description" />
                                                                </span>
                                                                <span className="avatar">
                                                                    <img className="avatar-img" src="./assets/img/160x160/img9.jpg" alt="Image Description" />
                                                                </span>
                                                            </div>
                                                            {/* End Avatar Group */}
                                                        </div>
                                                    </div>
                                                    {/* End Row */}
                                                </a>
                                            </li>
                                            {/* End Item */}
                                            {/* Item */}
                                            <li className="list-group-item">
                                                <a className="list-group-item-action border-warning" href="#">
                                                    <div className="row">
                                                        <div className="col-sm mb-2 mb-sm-0">
                                                            <h2 className="fw-normal mb-1">02:00 - 03:00 <span className="fs-5 text-body text-uppercase">pm</span></h2>
                                                            <h5 className="text-inherit mb-0">Monthly reports to the client</h5>
                                                            <span className="text-body small">29 May, 2020</span>
                                                        </div>
                                                        <div className="col-sm-auto align-self-sm-end">
                                                            {/* Avatar Group */}
                                                            <div className="avatar-group avatar-group-sm avatar-circle">
                                                                <span className="avatar">
                                                                    <img className="avatar-img" src="./assets/img/160x160/img5.jpg" alt="Image Description" />
                                                                </span>
                                                                <span className="avatar avatar-soft-dark">
                                                                    <span className="avatar-initials">B</span>
                                                                </span>
                                                                <span className="avatar">
                                                                    <img className="avatar-img" src="./assets/img/160x160/img8.jpg" alt="Image Description" />
                                                                </span>
                                                                <span className="avatar">
                                                                    <img className="avatar-img" src="./assets/img/160x160/img9.jpg" alt="Image Description" />
                                                                </span>
                                                            </div>
                                                            {/* End Avatar Group */}
                                                        </div>
                                                    </div>
                                                    {/* End Row */}
                                                </a>
                                            </li>
                                            {/* End Item */}
                                        </ul>
                                        {/* End List Group */}
                                    </div>
                                    <div className="tab-pane fade" id="next-week" role="tabpanel" aria-labelledby="next-week-tab">
                                        {/* List Group */}
                                        <ul className="list-group list-group-flush list-group-start-bordered">
                                            {/* Item */}
                                            <li className="list-group-item">
                                                <a className="list-group-item-action border-info" href="#">
                                                    <div className="row">
                                                        <div className="col-sm mb-2 mb-sm-0">
                                                            <h2 className="fw-normal mb-1">04:30 - 04:50 <span className="fs-5 text-body text-uppercase">pm</span></h2>
                                                            <h5 className="text-inherit mb-0">Project tasks</h5>
                                                            <span className="text-body small">30 May, 2020</span>
                                                        </div>
                                                        <div className="col-sm-auto align-self-sm-end">
                                                            {/* Avatar Group */}
                                                            <div className="avatar-group avatar-group-sm avatar-circle">
                                                                <span className="avatar">
                                                                    <img className="avatar-img" src="./assets/img/160x160/img6.jpg" alt="Image Description" />
                                                                </span>
                                                                <span className="avatar">
                                                                    <img className="avatar-img" src="./assets/img/160x160/img7.jpg" alt="Image Description" />
                                                                </span>
                                                                <span className="avatar avatar-soft-danger">
                                                                    <span className="avatar-initials">A</span>
                                                                </span>
                                                            </div>
                                                            {/* End Avatar Group */}
                                                        </div>
                                                    </div>
                                                </a>
                                                {/* End Row */}
                                            </li>
                                            {/* Item */}
                                            <li className="list-group-item">
                                                <a className="list-group-item-action border-primary" href="#">
                                                    <div className="row">
                                                        <div className="col-sm mb-2 mb-sm-0">
                                                            <h2 className="fw-normal mb-1">12:00 - 03:00 <span className="fs-5 text-body text-uppercase">pm</span></h2>
                                                            <h5 className="text-inherit mb-0">Weekly overview</h5>
                                                            <span className="text-body small">1 June, 2020</span>
                                                        </div>
                                                        <div className="col-sm-auto align-self-sm-end">
                                                            {/* Avatar Group */}
                                                            <div className="avatar-group avatar-group-sm avatar-circle">
                                                                <span className="avatar">
                                                                    <img className="avatar-img" src="./assets/img/160x160/img9.jpg" alt="Image Description" />
                                                                </span>
                                                                <span className="avatar">
                                                                    <img className="avatar-img" src="./assets/img/160x160/img3.jpg" alt="Image Description" />
                                                                </span>
                                                                <span className="avatar avatar-soft-dark">
                                                                    <span className="avatar-initials">A</span>
                                                                </span>
                                                                <span className="avatar avatar-soft-info">
                                                                    <span className="avatar-initials">S</span>
                                                                </span>
                                                                <span className="avatar">
                                                                    <img className="avatar-img" src="./assets/img/160x160/img5.jpg" alt="Image Description" />
                                                                </span>
                                                            </div>
                                                            {/* End Avatar Group */}
                                                        </div>
                                                    </div>
                                                    {/* End Row */}
                                                </a>
                                            </li>
                                            {/* End Item */}
                                            {/* Item */}
                                            <li className="list-group-item">
                                                <a className="list-group-item-action border-warning" href="#">
                                                    <div className="row">
                                                        <div className="col-sm mb-2 mb-sm-0">
                                                            <h2 className="fw-normal mb-1">02:00 - 03:00 <span className="fs-5 text-body text-uppercase">pm</span></h2>
                                                            <h5 className="text-inherit mb-0">Monthly reports to the client</h5>
                                                            <span className="text-body small">2 June, 2020</span>
                                                        </div>
                                                        <div className="col-sm-auto align-self-sm-end">
                                                            {/* Avatar Group */}
                                                            <div className="avatar-group avatar-group-sm avatar-circle">
                                                                <span className="avatar">
                                                                    <img className="avatar-img" src="./assets/img/160x160/img5.jpg" alt="Image Description" />
                                                                </span>
                                                                <span className="avatar avatar-soft-dark">
                                                                    <span className="avatar-initials">B</span>
                                                                </span>
                                                                <span className="avatar">
                                                                    <img className="avatar-img" src="./assets/img/160x160/img8.jpg" alt="Image Description" />
                                                                </span>
                                                                <span className="avatar">
                                                                    <img className="avatar-img" src="./assets/img/160x160/img9.jpg" alt="Image Description" />
                                                                </span>
                                                            </div>
                                                            {/* End Avatar Group */}
                                                        </div>
                                                    </div>
                                                    {/* End Row */}
                                                </a>
                                            </li>
                                            {/* End Item */}
                                            {/* Item */}
                                            <li className="list-group-item">
                                                <a className="list-group-item-action border-danger" href="#">
                                                    <div className="row">
                                                        <div className="col-sm mb-2 mb-sm-0">
                                                            <h2 className="fw-normal mb-1">12:00 - 03:00 <span className="fs-5 text-body text-uppercase">pm</span></h2>
                                                            <h5 className="text-inherit mb-0">Monthly reports</h5>
                                                            <span className="text-body small">4 June, 2020</span>
                                                        </div>
                                                        <div className="col-sm-auto align-self-sm-end">
                                                            {/* Avatar Group */}
                                                            <div className="avatar-group avatar-group-sm avatar-circle">
                                                                <span className="avatar">
                                                                    <img className="avatar-img" src="./assets/img/160x160/img5.jpg" alt="Image Description" />
                                                                </span>
                                                                <span className="avatar avatar-soft-dark">
                                                                    <span className="avatar-initials">B</span>
                                                                </span>
                                                                <span className="avatar">
                                                                    <img className="avatar-img" src="./assets/img/160x160/img8.jpg" alt="Image Description" />
                                                                </span>
                                                                <span className="avatar">
                                                                    <img className="avatar-img" src="./assets/img/160x160/img9.jpg" alt="Image Description" />
                                                                </span>
                                                            </div>
                                                            {/* End Avatar Group */}
                                                        </div>
                                                    </div>
                                                    {/* End Row */}
                                                </a>
                                            </li>
                                            {/* End Item */}
                                        </ul>
                                        {/* End List Group */}
                                    </div>
                                </div>
                                {/* End Tab Content */}
                            </div>
                            {/* End Body */}
                        </div>
                        {/* End Card */}
                    </div>
                    {/* End Col */}
                </div>
                {/* End Row */}
                {/* Card */}
                <div className="card overflow-hidden">
                    {/* Header */}
                    <div className="card-header card-header-content-between">
                        <h4 className="card-header-title">Hours spent <i className="bi-patch-check-fill text-primary" data-bs-toggle="tooltip" data-bs-placement="top" title="This report is based on 100% of sessions." /></h4>
                        {/* Daterangepicker */}
                        <button id="js-daterangepicker-predefined" className="btn btn-ghost-secondary btn-sm dropdown-toggle">
                            <i className="tio-date-range" />
                            <span className="js-daterangepicker-predefined-preview ms-1" />
                        </button>
                        {/* End Daterangepicker */}
                    </div>
                    {/* End Header */}
                    {/* Body */}
                    <div className="card-body">
                        {/* Matrix Chart */}
                        <div className="chartjs-matrix-custom mb-3" style={{ minWidth: '100%', width: '700px' }}>
                            <HoursSpentChart />
                        </div>
                        {/* End Matrix Chart */}
                        {/* Matrix Legend */}
                        <ul id="matrixLegend" className="mb-0" />
                        {/* End Matrix Legend */}
                    </div>
                    {/* End Body */}
                    <hr className="my-0" />
                    <div className="row">
                        <div className="col-lg-4">
                            {/* Body */}
                            <div className="card card-centered bg-light h-100 rounded-0 shadow-none">
                                <div className="card-body text-center">
                                    <div className="mb-3">
                                        <img className="avatar avatar-xxl avatar-4x3" src="./assets/svg/illustrations/oc-chatting.svg" alt="Image Description" data-hs-theme-appearance="default" />
                                        {/* <img className="avatar avatar-xxl avatar-4x3" src="./assets/svg/illustrations-light/oc-chatting.svg" alt="Image Description" data-hs-theme-appearance="dark" /> */}
                                    </div>
                                    <span className="display-3 d-block text-dark">256.4</span>
                                    <span className="d-block">
                                        — Total hours
                                        <span className="badge bg-soft-dark text-dark rounded-pill ms-1">+7 today</span>
                                    </span>
                                </div>
                            </div>
                            {/* End Body */}
                        </div>
                        {/* End Col */}
                        <div className="col-lg-8">
                            {/* Body */}
                            <div className="card-body card-body-height">
                                <ul className="list-group list-group-flush list-group-no-gutters">
                                    {/* List Item */}
                                    <li className="list-group-item">
                                        <div className="row align-items-center">
                                            <div className="col-sm mb-3 mb-sm-0">
                                                <a className="d-flex align-items-center" href="./user-profile.html">
                                                    <div className="flex-shrink-0">
                                                        <div className="avatar avatar-sm avatar-circle">
                                                            <img className="avatar-img" src="./assets/img/160x160/img10.jpg" alt="Image Description" />
                                                        </div>
                                                    </div>
                                                    <div className="flex-grow-1 ms-2">
                                                        <h5 className="text-inherit">Amanda Harvey</h5>
                                                    </div>
                                                </a>
                                            </div>
                                            {/* End Col */}
                                            <div className="col">
                                                <span className="text-cap text-body small mb-0">Days</span>
                                                <span className="fw-semibold text-dark">38</span>
                                            </div>
                                            {/* End Col */}
                                            <div className="col">
                                                <span className="text-cap text-body small mb-0">Hours</span>
                                                <span className="fw-semibold text-dark">45:12</span>
                                            </div>
                                            {/* End Col */}
                                            <div className="col">
                                                <span className="text-cap text-body small mb-0">Tasks</span>
                                                <span className="fw-semibold text-dark">35</span>
                                            </div>
                                            {/* End Col */}
                                        </div>
                                    </li>
                                    {/* End List Item */}
                                    {/* List Item */}
                                    <li className="list-group-item">
                                        <div className="row align-items-center">
                                            <div className="col-sm mb-3 mb-sm-0">
                                                <a className="d-flex align-items-center" href="./user-profile.html">
                                                    <div className="flex-shrink-0">
                                                        <div className="avatar avatar-sm avatar-soft-info avatar-circle">
                                                            <span className="avatar-initials">S</span>
                                                        </div>
                                                    </div>
                                                    <div className="flex-grow-1 ms-2">
                                                        <h5 className="text-inherit">Sara Iwens</h5>
                                                    </div>
                                                </a>
                                            </div>
                                            {/* End Col */}
                                            <div className="col">
                                                <span className="text-cap text-body small mb-0">Days</span>
                                                <span className="fw-semibold text-dark">15</span>
                                            </div>
                                            {/* End Col */}
                                            <div className="col">
                                                <span className="text-cap text-body small mb-0">Hours</span>
                                                <span className="fw-semibold text-dark">24:06</span>
                                            </div>
                                            {/* End Col */}
                                            <div className="col">
                                                <span className="text-cap text-body small mb-0">Tasks</span>
                                                <span className="fw-semibold text-dark">31</span>
                                            </div>
                                            {/* End Col */}
                                        </div>
                                    </li>
                                    {/* End List Item */}
                                    {/* List Item */}
                                    <li className="list-group-item">
                                        <div className="row align-items-center">
                                            <div className="col-sm mb-3 mb-sm-0">
                                                <a className="d-flex align-items-center" href="./user-profile.html">
                                                    <div className="flex-shrink-0">
                                                        <div className="avatar avatar-sm avatar-circle">
                                                            <img className="avatar-img" src="./assets/img/160x160/img3.jpg" alt="Image Description" />
                                                        </div>
                                                    </div>
                                                    <div className="flex-grow-1 ms-2">
                                                        <h5 className="text-inherit">David Harrison</h5>
                                                    </div>
                                                </a>
                                            </div>
                                            {/* End Col */}
                                            <div className="col">
                                                <span className="text-cap text-body small mb-0">Days</span>
                                                <span className="fw-semibold text-dark">22</span>
                                            </div>
                                            {/* End Col */}
                                            <div className="col">
                                                <span className="text-cap text-body small mb-0">Hours</span>
                                                <span className="fw-semibold text-dark">67:38</span>
                                            </div>
                                            {/* End Col */}
                                            <div className="col">
                                                <span className="text-cap text-body small mb-0">Tasks</span>
                                                <span className="fw-semibold text-dark">76</span>
                                            </div>
                                            {/* End Col */}
                                        </div>
                                    </li>
                                    {/* End List Item */}
                                    {/* List Item */}
                                    <li className="list-group-item">
                                        <div className="row align-items-center">
                                            <div className="col-sm mb-3 mb-sm-0">
                                                <a className="d-flex align-items-center" href="./user-profile.html">
                                                    <div className="flex-shrink-0">
                                                        <div className="avatar avatar-sm avatar-circle">
                                                            <img className="avatar-img" src="./assets/img/160x160/img9.jpg" alt="Image Description" />
                                                        </div>
                                                    </div>
                                                    <div className="flex-grow-1 ms-2">
                                                        <h5 className="text-inherit">Ella Lauda</h5>
                                                    </div>
                                                </a>
                                            </div>
                                            {/* End Col */}
                                            <div className="col">
                                                <span className="text-cap text-body small mb-0">Days</span>
                                                <span className="fw-semibold text-dark">35</span>
                                            </div>
                                            {/* End Col */}
                                            <div className="col">
                                                <span className="text-cap text-body small mb-0">Hours</span>
                                                <span className="fw-semibold text-dark">53:31</span>
                                            </div>
                                            {/* End Col */}
                                            <div className="col">
                                                <span className="text-cap text-body small mb-0">Tasks</span>
                                                <span className="fw-semibold text-dark">42</span>
                                            </div>
                                            {/* End Col */}
                                        </div>
                                    </li>
                                    {/* End List Item */}
                                    {/* List Item */}
                                    <li className="list-group-item">
                                        <div className="row align-items-center">
                                            <div className="col-sm mb-3 mb-sm-0">
                                                <a className="d-flex align-items-center" href="./user-profile.html">
                                                    <div className="flex-shrink-0">
                                                        <div className="avatar avatar-sm avatar-soft-dark avatar-circle">
                                                            <span className="avatar-initials">B</span>
                                                        </div>
                                                    </div>
                                                    <div className="flex-grow-1 ms-2">
                                                        <h5 className="text-inherit">Bob Dean</h5>
                                                    </div>
                                                </a>
                                            </div>
                                            {/* End Col */}
                                            <div className="col">
                                                <span className="text-cap text-body small mb-0">Days</span>
                                                <span className="fw-semibold text-dark">5</span>
                                            </div>
                                            {/* End Col */}
                                            <div className="col">
                                                <span className="text-cap text-body small mb-0">Hours</span>
                                                <span className="fw-semibold text-dark">15:38</span>
                                            </div>
                                            {/* End Col */}
                                            <div className="col">
                                                <span className="text-cap text-body small mb-0">Tasks</span>
                                                <span className="fw-semibold text-dark">21</span>
                                            </div>
                                            {/* End Col */}
                                        </div>
                                    </li>
                                    {/* End List Item */}
                                    {/* List Item */}
                                    <li className="list-group-item">
                                        <div className="row align-items-center">
                                            <div className="col-sm mb-3 mb-sm-0">
                                                <a className="d-flex align-items-center" href="./user-profile.html">
                                                    <div className="flex-shrink-0">
                                                        <div className="avatar avatar-sm avatar-circle">
                                                            <img className="avatar-img" src="./assets/img/160x160/img8.jpg" alt="Image Description" />
                                                        </div>
                                                    </div>
                                                    <div className="flex-grow-1 ms-2">
                                                        <h5 className="text-inherit">Linda Bates</h5>
                                                    </div>
                                                </a>
                                            </div>
                                            {/* End Col */}
                                            <div className="col">
                                                <span className="text-cap text-body small mb-0">Days</span>
                                                <span className="fw-semibold text-dark">14</span>
                                            </div>
                                            {/* End Col */}
                                            <div className="col">
                                                <span className="text-cap text-body small mb-0">Hours</span>
                                                <span className="fw-semibold text-dark">16:29</span>
                                            </div>
                                            {/* End Col */}
                                            <div className="col">
                                                <span className="text-cap text-body small mb-0">Tasks</span>
                                                <span className="fw-semibold text-dark">9</span>
                                            </div>
                                            {/* End Col */}
                                        </div>
                                    </li>
                                    {/* End List Item */}
                                </ul>
                            </div>
                            {/* End Body */}
                        </div>
                        {/* End Col */}
                    </div>
                    {/* End Row */}
                </div>
                {/* End Card */}
            </div>
            {/* Activity */}
            <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasActivityStream" aria-labelledby="offcanvasActivityStreamLabel">
                <div className="offcanvas-header">
                    <h4 id="offcanvasActivityStreamLabel" className="mb-0">Activity stream</h4>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
                </div>
                <div className="offcanvas-body">
                    {/* Step */}
                    <ul className="step step-icon-sm step-avatar-sm">
                        {/* Step Item */}
                        <li className="step-item">
                            <div className="step-content-wrapper">
                                <div className="step-avatar">
                                    <img className="step-avatar" src="./assets/img/160x160/img9.jpg" alt="Image Description" />
                                </div>
                                <div className="step-content">
                                    <h5 className="mb-1">Iana Robinson</h5>
                                    <p className="fs-5 mb-1">Added 2 files to task <a className="text-uppercase" href="#"><i className="bi-journal-bookmark-fill" /> Fd-7</a></p>
                                    <ul className="list-group list-group-sm">
                                        {/* List Item */}
                                        <li className="list-group-item list-group-item-light">
                                            <div className="row gx-1">
                                                <div className="col-6">
                                                    {/* Media */}
                                                    <div className="d-flex">
                                                        <div className="flex-shrink-0">
                                                            <img className="avatar avatar-xs" src="./assets/svg/brands/excel-icon.svg" alt="Image Description" />
                                                        </div>
                                                        <div className="flex-grow-1 text-truncate ms-2">
                                                            <span className="d-block fs-6 text-dark text-truncate" title="weekly-reports.xls">weekly-reports.xls</span>
                                                            <span className="d-block small text-muted">12kb</span>
                                                        </div>
                                                    </div>
                                                    {/* End Media */}
                                                </div>
                                                {/* End Col */}
                                                <div className="col-6">
                                                    {/* Media */}
                                                    <div className="d-flex">
                                                        <div className="flex-shrink-0">
                                                            <img className="avatar avatar-xs" src="./assets/svg/brands/word-icon.svg" alt="Image Description" />
                                                        </div>
                                                        <div className="flex-grow-1 text-truncate ms-2">
                                                            <span className="d-block fs-6 text-dark text-truncate" title="weekly-reports.xls">weekly-reports.xls</span>
                                                            <span className="d-block small text-muted">4kb</span>
                                                        </div>
                                                    </div>
                                                    {/* End Media */}
                                                </div>
                                                {/* End Col */}
                                            </div>
                                            {/* End Row */}
                                        </li>
                                        {/* End List Item */}
                                    </ul>
                                    <span className="small text-muted text-uppercase">Now</span>
                                </div>
                            </div>
                        </li>
                        {/* End Step Item */}
                        {/* Step Item */}
                        <li className="step-item">
                            <div className="step-content-wrapper">
                                <span className="step-icon step-icon-soft-dark">B</span>
                                <div className="step-content">
                                    <h5 className="mb-1">Bob Dean</h5>
                                    <p className="fs-5 mb-1">Marked <a className="text-uppercase" href="#"><i className="bi-journal-bookmark-fill" /> Fr-6</a> as <span className="badge bg-soft-success text-success rounded-pill"><span className="legend-indicator bg-success" />"Completed"</span></p>
                                    <span className="small text-muted text-uppercase">Today</span>
                                </div>
                            </div>
                        </li>
                        {/* End Step Item */}
                        {/* Step Item */}
                        <li className="step-item">
                            <div className="step-content-wrapper">
                                <div className="step-avatar">
                                    <img className="step-avatar-img" src="./assets/img/160x160/img3.jpg" alt="Image Description" />
                                </div>
                                <div className="step-content">
                                    <h5 className="h5 mb-1">Crane</h5>
                                    <p className="fs-5 mb-1">Added 5 card to <a href="#">Payments</a></p>
                                    <ul className="list-group list-group-sm">
                                        <li className="list-group-item list-group-item-light">
                                            <div className="row gx-1">
                                                <div className="col">
                                                    <img className="img-fluid rounded" src="./assets/svg/components/card-1.svg" alt="Image Description" />
                                                </div>
                                                <div className="col">
                                                    <img className="img-fluid rounded" src="./assets/svg/components/card-2.svg" alt="Image Description" />
                                                </div>
                                                <div className="col">
                                                    <img className="img-fluid rounded" src="./assets/svg/components/card-3.svg" alt="Image Description" />
                                                </div>
                                                <div className="col-auto align-self-center">
                                                    <div className="text-center">
                                                        <a href="#">+2</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                    <span className="small text-muted text-uppercase">May 12</span>
                                </div>
                            </div>
                        </li>
                        {/* End Step Item */}
                        {/* Step Item */}
                        <li className="step-item">
                            <div className="step-content-wrapper">
                                <span className="step-icon step-icon-soft-info">D</span>
                                <div className="step-content">
                                    <h5 className="mb-1">David Lidell</h5>
                                    <p className="fs-5 mb-1">Added a new member to Front Dashboard</p>
                                    <span className="small text-muted text-uppercase">May 15</span>
                                </div>
                            </div>
                        </li>
                        {/* End Step Item */}
                        {/* Step Item */}
                        <li className="step-item">
                            <div className="step-content-wrapper">
                                <div className="step-avatar">
                                    <img className="step-avatar-img" src="./assets/img/160x160/img7.jpg" alt="Image Description" />
                                </div>
                                <div className="step-content">
                                    <h5 className="mb-1">Rachel King</h5>
                                    <p className="fs-5 mb-1">Marked <a className="text-uppercase" href="#"><i className="bi-journal-bookmark-fill" /> Fr-3</a> as <span className="badge bg-soft-success text-success rounded-pill"><span className="legend-indicator bg-success" />"Completed"</span></p>
                                    <span className="small text-muted text-uppercase">Apr 29</span>
                                </div>
                            </div>
                        </li>
                        {/* End Step Item */}
                        {/* Step Item */}
                        <li className="step-item">
                            <div className="step-content-wrapper">
                                <div className="step-avatar">
                                    <img className="step-avatar-img" src="./assets/img/160x160/img5.jpg" alt="Image Description" />
                                </div>
                                <div className="step-content">
                                    <h5 className="mb-1">Finch Hoot</h5>
                                    <p className="fs-5 mb-1">Earned a "Top endorsed" <i className="bi-patch-check-fill text-primary" /> badge</p>
                                    <span className="small text-muted text-uppercase">Apr 06</span>
                                </div>
                            </div>
                        </li>
                        {/* End Step Item */}
                        {/* Step Item */}
                        <li className="step-item">
                            <div className="step-content-wrapper">
                                <span className="step-icon step-icon-soft-primary">
                                    <i className="bi-person-fill" />
                                </span>
                                <div className="step-content">
                                    <h5 className="mb-1">Project status updated</h5>
                                    <p className="fs-5 mb-1">Marked <a className="text-uppercase" href="#"><i className="bi-journal-bookmark-fill" /> Fr-3</a> as <span className="badge bg-soft-primary text-primary rounded-pill"><span className="legend-indicator bg-primary" />"In progress"</span></p>
                                    <span className="small text-muted text-uppercase">Feb 10</span>
                                </div>
                            </div>
                        </li>
                        {/* End Step Item */}
                    </ul>
                    {/* End Step */}
                    <div className="d-grid">
                        <a className="btn btn-white" href="javascript:;">View all <i className="bi-chevron-right" /></a>
                    </div>
                </div>
            </div>
            {/* End Activity */}
            <div className="modal fade" id="shareWithPeopleModal" tabIndex={-1} aria-labelledby="shareWithPeopleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="shareWithPeopleModalLabel">Invite users</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        {/* Body */}
                        <div className="modal-body">
                            {/* Form */}
                            <div className="mb-4">
                                <div className="input-group mb-2 mb-sm-0">
                                    <input type="text" className="form-control" name="fullName" placeholder="Search name or emails" aria-label="Search name or emails" />
                                    <div className="input-group-append input-group-append-last-sm-down-none">
                                        {/* Select */}
                                        <div className="tom-select-custom tom-select-custom-end">
                                            <select className="js-select form-select tom-select-custom-form-select-invite-user" autoComplete="off" data-hs-tom-select-options="{
                              &quot;searchInDropdown&quot;: false,
                              &quot;hideSearch&quot;: true,
                              &quot;dropdownWidth&quot;: &quot;11rem&quot;
                            }">
                                                <option value="guest" selected>Guest</option>
                                                <option value="can edit">Can edit</option>
                                                <option value="can comment">Can comment</option>
                                                <option value="full access">Full access</option>
                                            </select>
                                        </div>
                                        {/* End Select */}
                                        <a className="btn btn-primary d-none d-sm-inline-block" href="javascript:;">Invite</a>
                                    </div>
                                </div>
                                <a className="btn btn-primary w-100 d-sm-none" href="javascript:;">Invite</a>
                            </div>
                            {/* End Form */}
                            {/* List Group */}
                            <ul className="list-unstyled list-py-2">
                                {/* Item */}
                                <li>
                                    <div className="d-flex">
                                        <div className="flex-shrink-0">
                                            <span className="icon icon-soft-dark icon-sm icon-circle">
                                                <i className="bi-people-fill" />
                                            </span>
                                        </div>
                                        <div className="flex-grow-1 ms-3">
                                            <div className="row align-items-center">
                                                <div className="col-sm">
                                                    <h5 className="text-body mb-0">#digitalmarketing</h5>
                                                    <span className="d-block fs-6">8 members</span>
                                                </div>
                                                {/* End Col */}
                                                <div className="col-sm-auto">
                                                    {/* Select */}
                                                    <div className="tom-select-custom tom-select-custom-sm-end">
                                                        <select className="js-select form-select form-select-borderless tom-select-custom-form-select-invite-user tom-select-form-select-ps-0" autoComplete="off" data-hs-tom-select-options="{
                                    &quot;searchInDropdown&quot;: false,
                                    &quot;hideSearch&quot;: true,
                                    &quot;dropdownWidth&quot;: &quot;11rem&quot;
                                  }">
                                                            <option value="guest">Guest</option>
                                                            <option value="can edit" selected>Can edit</option>
                                                            <option value="can comment">Can comment</option>
                                                            <option value="full access">Full access</option>
                                                            <option value="remove" data-option-template="<div class=&quot;text-danger&quot;>Remove</div>">Remove</option>
                                                        </select>
                                                    </div>
                                                    {/* End Select */}
                                                </div>
                                                {/* End Col */}
                                            </div>
                                            {/* End Row */}
                                        </div>
                                    </div>
                                </li>
                                {/* End Item */}
                                {/* Item */}
                                <li>
                                    <div className="d-flex">
                                        <div className="flex-shrink-0">
                                            <div className="avatar avatar-sm avatar-circle">
                                                <img className="avatar-img" src="./assets/img/160x160/img3.jpg" alt="Image Description" />
                                            </div>
                                        </div>
                                        <div className="flex-grow-1 ms-3">
                                            <div className="row align-items-center">
                                                <div className="col-sm">
                                                    <h5 className="text-body mb-0">David Harrison</h5>
                                                    <span className="d-block fs-6">david@site.com</span>
                                                </div>
                                                {/* End Col */}
                                                <div className="col-sm-auto">
                                                    {/* Select */}
                                                    <div className="tom-select-custom tom-select-custom-sm-end">
                                                        <select className="js-select form-select form-select-borderless tom-select-custom-form-select-invite-user tom-select-form-select-ps-0" autoComplete="off" data-hs-tom-select-options="{
                                    &quot;searchInDropdown&quot;: false,
                                    &quot;hideSearch&quot;: true,
                                    &quot;dropdownWidth&quot;: &quot;11rem&quot;
                                  }">
                                                            <option value="guest">Guest</option>
                                                            <option value="can edit" selected>Can edit</option>
                                                            <option value="can comment">Can comment</option>
                                                            <option value="full access">Full access</option>
                                                            <option value="remove" data-option-template="<div class=&quot;text-danger&quot;>Remove</div>">Remove</option>
                                                        </select>
                                                    </div>
                                                    {/* End Select */}
                                                </div>
                                                {/* End Col */}
                                            </div>
                                            {/* End Row */}
                                        </div>
                                    </div>
                                </li>
                                {/* End Item */}
                                {/* Item */}
                                <li>
                                    <div className="d-flex">
                                        <div className="flex-shrink-0">
                                            <div className="avatar avatar-sm avatar-circle">
                                                <img className="avatar-img" src="./assets/img/160x160/img9.jpg" alt="Image Description" />
                                            </div>
                                        </div>
                                        <div className="flex-grow-1 ms-3">
                                            <div className="row align-items-center">
                                                <div className="col-sm">
                                                    <h5 className="text-body mb-0">Ella Lauda <i className="bi-patch-check-fill text-primary" data-bs-toggle="tooltip" data-bs-placement="top" title="Top endorsed" /></h5>
                                                    <span className="d-block fs-6">Markvt@site.com</span>
                                                </div>
                                                {/* End Col */}
                                                <div className="col-sm-auto">
                                                    {/* Select */}
                                                    <div className="tom-select-custom tom-select-custom-sm-end">
                                                        <select className="js-select form-select form-select-borderless tom-select-custom-form-select-invite-user tom-select-form-select-ps-0" autoComplete="off" data-hs-tom-select-options="{
                                    &quot;searchInDropdown&quot;: false,
                                    &quot;hideSearch&quot;: true,
                                    &quot;dropdownWidth&quot;: &quot;11rem&quot;
                                  }">
                                                            <option value="guest">Guest</option>
                                                            <option value="can edit" selected>Can edit</option>
                                                            <option value="can comment">Can comment</option>
                                                            <option value="full access">Full access</option>
                                                            <option value="remove" data-option-template="<div class=&quot;text-danger&quot;>Remove</div>">Remove</option>
                                                        </select>
                                                    </div>
                                                    {/* End Select */}
                                                </div>
                                                {/* End Col */}
                                            </div>
                                            {/* End Row */}
                                        </div>
                                    </div>
                                </li>
                                {/* End Item */}
                                {/* Item */}
                                <li>
                                    <div className="d-flex">
                                        <div className="flex-shrink-0">
                                            <span className="icon icon-soft-dark icon-sm icon-circle">
                                                <i className="bi-people-fill" />
                                            </span>
                                        </div>
                                        <div className="flex-grow-1 ms-3">
                                            <div className="row align-items-center">
                                                <div className="col-sm">
                                                    <h5 className="text-body mb-0">#conference</h5>
                                                    <span className="d-block fs-6">3 members</span>
                                                </div>
                                                {/* End Col */}
                                                <div className="col-sm-auto">
                                                    {/* Select */}
                                                    <div className="tom-select-custom tom-select-custom-sm-end">
                                                        <select className="js-select form-select form-select-borderless tom-select-custom-form-select-invite-user tom-select-form-select-ps-0" autoComplete="off" data-hs-tom-select-options="{
                                    &quot;searchInDropdown&quot;: false,
                                    &quot;hideSearch&quot;: true,
                                    &quot;dropdownWidth&quot;: &quot;11rem&quot;
                                  }">
                                                            <option value="guest">Guest</option>
                                                            <option value="can edit" selected>Can edit</option>
                                                            <option value="can comment">Can comment</option>
                                                            <option value="full access">Full access</option>
                                                            <option value="remove" data-option-template="<div class=&quot;text-danger&quot;>Remove</div>">Remove</option>
                                                        </select>
                                                    </div>
                                                    {/* End Select */}
                                                </div>
                                                {/* End Col */}
                                            </div>
                                            {/* End Row */}
                                        </div>
                                    </div>
                                </li>
                                {/* End Item */}
                            </ul>
                            {/* End List Group */}
                            {/* Form Switch */}
                            <label className="row form-check form-switch" htmlFor="addTeamPreferencesNewProjectSwitch1">
                                <span className="col-8 col-sm-9 ms-0">
                                    <i className="bi-bell text-primary me-2" />
                                    <span className="text-dark">Inform all project members</span>
                                </span>
                                <span className="col-4 col-sm-3 text-end">
                                    <input type="checkbox" className="form-check-input" id="addTeamPreferencesNewProjectSwitch1" defaultChecked />
                                </span>
                            </label>
                            {/* End Form Switch */}
                        </div>
                        {/* End Body */}
                        {/* Footer */}
                        <div className="modal-footer">
                            <div className="row align-items-center flex-grow-1 mx-n2">
                                <div className="col-sm-9 mb-2 mb-sm-0">
                                    <input type="hidden" id="publicShareLinkClipboard" defaultValue="https://themes.getbootstrap.com/product/front-multipurpose-responsive-template/" />
                                    <p className="modal-footer-text">The public share <a className="link" href="#">link settings</a>
                                        <i className="bi-question-circle" data-bs-toggle="tooltip" data-bs-placement="top" title="The public share link allows people to view the project without giving access to full collaboration features." />
                                    </p>
                                </div>
                                {/* End Col */}
                                <div className="col-sm-3 text-sm-end">
                                    <a className="js-clipboard btn btn-white btn-sm text-nowrap" href="javascript:;" data-bs-toggle="tooltip" data-bs-placement="top" title="Copy to clipboard!" data-hs-clipboard-options="{
                    &quot;type&quot;: &quot;tooltip&quot;,
                    &quot;successText&quot;: &quot;Copied!&quot;,
                    &quot;contentTarget&quot;: &quot;#publicShareLinkClipboard&quot;,
                    &quot;container&quot;: &quot;#shareWithPeopleModal&quot;
                   }">
                                        <i className="bi-link me-1" /> Copy link</a>
                                </div>
                                {/* End Col */}
                            </div>
                            {/* End Row */}
                        </div>
                        {/* End Footer */}
                    </div>
                </div>
            </div>
        </>
    )
}
