import React from 'react'

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
                        <ul className="nav nav-tabs page-header-tabs" id="projectsTab" role="tablist">
                            <li className="nav-item">
                                <a className="nav-link active" href="./project.html">Overview</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " href="./project-files.html">Files</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " href="./project-activity.html">Activity</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " href="./project-teams.html">Teams</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " href="./project-settings.html">Settings</a>
                            </li>
                        </ul>
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
                                            <div className="js-circle" data-hs-circles-options="{
                             &quot;value&quot;: 54,
                             &quot;maxValue&quot;: 100,
                             &quot;duration&quot;: 2000,
                             &quot;isViewportInit&quot;: true,
                             &quot;radius&quot;: 25,
                             &quot;width&quot;: 3,
                             &quot;fgStrokeLinecap&quot;: &quot;round&quot;,
                             &quot;textFontSize&quot;: 14,
                             &quot;additionalText&quot;: &quot;%&quot;,
                             &quot;textClass&quot;: &quot;circles-chart-content&quot;,
                             &quot;textColor&quot;: &quot;#377dff&quot;
                           }" />
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
                                            <div className="js-circle" data-hs-circles-options="{
                             &quot;value&quot;: 80,
                             &quot;maxValue&quot;: 100,
                             &quot;duration&quot;: 2000,
                             &quot;isViewportInit&quot;: true,
                             &quot;radius&quot;: 25,
                             &quot;width&quot;: 3,
                             &quot;fgStrokeLinecap&quot;: &quot;round&quot;,
                             &quot;textFontSize&quot;: 14,
                             &quot;additionalText&quot;: &quot;%&quot;,
                             &quot;textClass&quot;: &quot;circles-chart-content&quot;,
                             &quot;textColor&quot;: &quot;#377dff&quot;
                           }" />
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
                                            <div className="js-circle" data-hs-circles-options="{
                             &quot;value&quot;: 67,
                             &quot;maxValue&quot;: 100,
                             &quot;duration&quot;: 2000,
                             &quot;isViewportInit&quot;: true,
                             &quot;radius&quot;: 25,
                             &quot;width&quot;: 3,
                             &quot;fgStrokeLinecap&quot;: &quot;round&quot;,
                             &quot;textFontSize&quot;: 14,
                             &quot;additionalText&quot;: &quot;%&quot;,
                             &quot;textClass&quot;: &quot;circles-chart-content&quot;,
                             &quot;textColor&quot;: &quot;#377dff&quot;
                           }" />
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
                                            <div className="js-circle" data-hs-circles-options="{
                             &quot;value&quot;: 41,
                             &quot;maxValue&quot;: 100,
                             &quot;duration&quot;: 2000,
                             &quot;isViewportInit&quot;: true,
                             &quot;radius&quot;: 25,
                             &quot;width&quot;: 3,
                             &quot;fgStrokeLinecap&quot;: &quot;round&quot;,
                             &quot;textFontSize&quot;: 14,
                             &quot;additionalText&quot;: &quot;%&quot;,
                             &quot;textClass&quot;: &quot;circles-chart-content&quot;,
                             &quot;textColor&quot;: &quot;#377dff&quot;
                           }" />
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
                        <div className="chartjs-custom" style={{ height: '18rem' }}>
                            <canvas id="project" className="js-chart" data-hs-chartjs-options="{
                        &quot;type&quot;: &quot;line&quot;,
                        &quot;data&quot;: {
                           &quot;labels&quot;: [&quot;Feb&quot;,&quot;Jan&quot;,&quot;Mar&quot;,&quot;Apr&quot;,&quot;May&quot;,&quot;Jun&quot;,&quot;Jul&quot;,&quot;Aug&quot;,&quot;Sep&quot;,&quot;Oct&quot;,&quot;Nov&quot;,&quot;Dec&quot;],
                           &quot;datasets&quot;: [{
                            &quot;data&quot;: [18,51,60,38,88,50,40,52,88,80,60,70],
                            &quot;backgroundColor&quot;: [&quot;rgba(55, 125, 255, 0)&quot;, &quot;rgba(255, 255, 255, 0)&quot;],
                            &quot;borderColor&quot;: &quot;#377dff&quot;,
                            &quot;borderWidth&quot;: 2,
                            &quot;pointRadius&quot;: 0,
                            &quot;pointBorderColor&quot;: &quot;#fff&quot;,
                            &quot;pointBackgroundColor&quot;: &quot;#377dff&quot;,
                            &quot;pointHoverRadius&quot;: 0,
                            &quot;hoverBorderColor&quot;: &quot;#fff&quot;,
                            &quot;hoverBackgroundColor&quot;: &quot;#377dff&quot;,
                             &quot;tension&quot;: 0.4
                          },
                          {
                            &quot;data&quot;: [27,38,60,77,40,50,49,29,42,27,42,50],
                            &quot;backgroundColor&quot;: [&quot;rgba(0, 201, 219, 0)&quot;, &quot;rgba(255, 255, 255, 0)&quot;],
                            &quot;borderColor&quot;: &quot;#00c9db&quot;,
                            &quot;borderWidth&quot;: 2,
                            &quot;pointRadius&quot;: 0,
                            &quot;pointBorderColor&quot;: &quot;#fff&quot;,
                            &quot;pointBackgroundColor&quot;: &quot;#00c9db&quot;,
                            &quot;pointHoverRadius&quot;: 0,
                            &quot;hoverBorderColor&quot;: &quot;#fff&quot;,
                            &quot;hoverBackgroundColor&quot;: &quot;#00c9db&quot;,
                             &quot;tension&quot;: 0.4
                          }]
                        },
                        &quot;options&quot;: {
                          &quot;gradientPosition&quot;: {&quot;y1&quot;: 200},
                           &quot;scales&quot;: {
                              &quot;y&quot;: {
                                &quot;grid&quot;: {
                                  &quot;color&quot;: &quot;#e7eaf3&quot;,
                                  &quot;drawBorder&quot;: false,
                                  &quot;zeroLineColor&quot;: &quot;#e7eaf3&quot;
                                },
                                &quot;ticks&quot;: {
                                  &quot;min&quot;: 0,
                                  &quot;max&quot;: 100,
                                  &quot;stepSize&quot;: 20,
                                  &quot;color&quot;: &quot;#97a4af&quot;,                                
                                  &quot;font&quot;: {
                                    &quot;family&quot;: &quot;Open Sans, sans-serif&quot;
                                  },
                                  &quot;padding&quot;: 10,
                                  &quot;postfix&quot;: &quot;k&quot;
                                }
                              },
                              &quot;x&quot;: {
                                &quot;grid&quot;: {
                                  &quot;display&quot;: false,
                                  &quot;drawBorder&quot;: false
                                },
                                &quot;ticks&quot;: {
                                 &quot;color&quot;: &quot;#97a4af&quot;,
                                  &quot;font&quot;: {
                                    &quot;family&quot;: &quot;Open Sans, sans-serif&quot;
                                  },
                                  &quot;padding&quot;: 5
                                }
                              }
                          },
                          &quot;plugins&quot;: {
                            &quot;tooltip&quot;: {
                              &quot;prefix&quot;: &quot;$&quot;,
                              &quot;postfix&quot;: &quot;k&quot;,
                              &quot;hasIndicator&quot;: true,
                              &quot;mode&quot;: &quot;index&quot;,
                              &quot;intersect&quot;: false,
                              &quot;lineMode&quot;: true,
                              &quot;lineWithLineColor&quot;: &quot;rgba(19, 33, 68, 0.075)&quot;
                            }
                          },
                          &quot;hover&quot;: {
                            &quot;mode&quot;: &quot;nearest&quot;,
                            &quot;intersect&quot;: true
                          }
                        }
                      }">
                            </canvas>
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
                                <div className="chartjs-custom mb-3 mb-sm-5" style={{ height: '14rem' }}>
                                    <canvas id="updatingDoughnutChart" data-hs-chartjs-options="{
                            &quot;type&quot;: &quot;doughnut&quot;,
                            &quot;data&quot;: {
                              &quot;labels&quot;: [&quot;USD&quot;, &quot;USD&quot;, &quot;USD&quot;],
                              &quot;datasets&quot;: [{
                                &quot;backgroundColor&quot;: [&quot;#377dff&quot;, &quot;#00c9db&quot;, &quot;#e7eaf3&quot;],
                                &quot;borderWidth&quot;: 5,
                                &quot;hoverBorderColor&quot;: &quot;#fff&quot;
                              }]
                            },
                            &quot;options&quot;: {
                              &quot;cutoutPercentage&quot;: 80,
                              &quot;plugins&quot;: {
                                &quot;tooltip&quot;: {
                                  &quot;postfix&quot;: &quot;k&quot;,
                                  &quot;hasIndicator&quot;: true,
                                  &quot;mode&quot;: &quot;index&quot;,
                                  &quot;intersect&quot;: false
                                }
                              },
                              &quot;hover&quot;: {
                                &quot;mode&quot;: &quot;nearest&quot;,
                                &quot;intersect&quot;: true
                              }
                            }
                          }" />
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
                            <canvas className="js-chart-matrix" style={{ minHeight: '150px' }} data-hs-chartjs-options="{
                &quot;options&quot;: {
                  &quot;matrixBackgroundColord&quot;: {
                     &quot;color&quot;: &quot;#377dff&quot;,
                     &quot;accent&quot;: 50,
                     &quot;additionToValue&quot;: 2
                  },
                  &quot;matrixLegend&quot;: {
                    &quot;container&quot;: &quot;#matrixLegend&quot;
                  }
                }
              }" />
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
