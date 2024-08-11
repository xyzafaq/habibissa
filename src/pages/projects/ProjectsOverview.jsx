import React from 'react'
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const steps = ['Details', 'Terms', 'Members'];

export default function ProjectsOverview() {
    const [activeStep, setActiveStep] = React.useState(0);
    const [completed, setCompleted] = React.useState({});

    const totalSteps = () => {
        return steps.length;
    };

    const completedSteps = () => {
        return Object.keys(completed).length;
    };

    const isLastStep = () => {
        return activeStep === totalSteps() - 1;
    };

    const allStepsCompleted = () => {
        return completedSteps() === totalSteps();
    };

    const handleNext = () => {
        const newActiveStep =
            isLastStep() && !allStepsCompleted()
                ? // It's the last step, but not all steps have been completed,
                // find the first step that has been completed
                steps.findIndex((step, i) => !(i in completed))
                : activeStep + 1;
        setActiveStep(newActiveStep);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStep = (step) => () => {
        setActiveStep(step);
    };

    const handleComplete = () => {
        const newCompleted = completed;
        newCompleted[activeStep] = true;
        setCompleted(newCompleted);
        handleNext();
    };

    const handleReset = () => {
        setActiveStep(0);
        setCompleted({});
    };

    return (
        <>
            <div className="content container-fluid">
                {/* Page Header */}
                <div className="page-header">
                    <div className="row align-items-end">
                        <div className="col-sm mb-2 mb-sm-0">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb breadcrumb-no-gutter">
                                    <li className="breadcrumb-item"><a className="breadcrumb-link" href="javascript:;">Pages</a></li>
                                    <li className="breadcrumb-item"><a className="breadcrumb-link" href="javascript:;">Projects</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">Overview</li>
                                </ol>
                            </nav>
                            <h1 className="page-header-title">Overview</h1>
                        </div>
                        {/* End Col */}
                        <div className="col-sm-auto">
                            <a className="btn btn-primary" href="javascript:;" data-bs-toggle="modal" data-bs-target="#newProjectModal">
                                <i className="bi-plus me-1" /> New project
                            </a>
                        </div>
                        {/* End Col */}
                    </div>
                    {/* End Row */}
                    {/* Nav */}
                    <ul className="nav nav-tabs page-header-tabs">
                        <li className="nav-item">
                            <a className="nav-link active" href="/projects-overview">
                                Projects <span className="badge bg-soft-dark text-dark ms-1">24</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/projects-timeline">
                                Timeline
                            </a>
                        </li>
                    </ul>
                    {/* End Nav */}
                </div>
                {/* End Page Header */}
                {/* Card */}
                <div className="card mb-3 mb-lg-5">
                    {/* Body */}
                    <div className="card-body">
                        <div className="d-flex align-items-md-center">
                            <div className="flex-shrink-0">
                                <span className="display-3 text-dark">24</span>
                            </div>
                            <div className="flex-grow-1 ms-3">
                                <div className="row mx-md-n3">
                                    <div className="col-md px-md-4">
                                        <span className="d-block">Total projects</span>
                                        <span className="badge bg-soft-danger text-danger rounded-pill p-1">
                                            <i className="bi-graph-down" /> -2 late in due
                                        </span>
                                    </div>
                                    {/* End Col */}
                                    <div className="col-md-9 col-lg-10 column-md-divider px-md-4">
                                        <div className="row justify-content-start mb-2">
                                            <div className="col-auto">
                                                <span className="legend-indicator bg-primary" />
                                                In progress (10)
                                            </div>
                                            {/* End Col */}
                                            <div className="col-auto">
                                                <span className="legend-indicator bg-success" />
                                                Completed (8)
                                            </div>
                                            {/* End Col */}
                                            <div className="col-auto">
                                                <span className="legend-indicator" />
                                                To do (6)
                                            </div>
                                            {/* End Col */}
                                        </div>
                                        {/* End Row */}
                                        {/* Progress */}
                                        <div className="progress rounded-pill">
                                            <div className="progress-bar" role="progressbar" style={{ width: '40%' }} aria-valuenow={40} aria-valuemin={0} aria-valuemax={100} />
                                            <div className="progress-bar bg-success" role="progressbar" style={{ width: '30%' }} aria-valuenow={30} aria-valuemin={0} aria-valuemax={100} />
                                        </div>
                                        {/* End Progress */}
                                    </div>
                                    {/* End Col */}
                                </div>
                                {/* End Row */}
                            </div>
                        </div>
                    </div>
                    {/* End Body */}
                </div>
                {/* End Card */}
                {/* Card */}
                <div className="card">
                    {/* Header */}
                    <div className="card-header card-header-content-md-between">
                        <div className="mb-2 mb-md-0">
                            <form>
                                {/* Search */}
                                <div className="input-group input-group-merge input-group-flush">
                                    <div className="input-group-prepend input-group-text">
                                        <i className="bi-search" />
                                    </div>
                                    <input id="datatableSearch" type="search" className="form-control" placeholder="Search users" aria-label="Search users" />
                                </div>
                                {/* End Search */}
                            </form>
                        </div>
                        <div className="d-grid d-sm-flex justify-content-md-end align-items-sm-center gap-2">
                            {/* Datatable Info */}
                            <div id="datatableCounterInfo" style={{ display: 'none' }}>
                                <div className="d-flex align-items-center">
                                    <span className="fs-5 me-3">
                                        <span id="datatableCounter">0</span>
                                        Selected
                                    </span>
                                    <a className="btn btn-outline-danger btn-sm" href="javascript:;">
                                        <i className="bi-trash" /> Delete
                                    </a>
                                </div>
                            </div>
                            {/* End Datatable Info */}
                            {/* Dropdown */}
                            <div className="dropdown">
                                <button type="button" className="btn btn-white btn-sm dropdown-toggle w-100" id="usersExportDropdown" data-bs-toggle="dropdown" aria-expanded="false">
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
                            {/* Dropdown */}
                            <div className="dropdown">
                                <button type="button" className="btn btn-white btn-sm w-100" id="usersFilterDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i className="bi-filter me-1" /> Filter <span className="badge bg-soft-dark text-dark rounded-circle ms-1">2</span>
                                </button>
                                <div className="dropdown-menu dropdown-menu-sm-end dropdown-card card-dropdown-filter-centered" aria-labelledby="usersFilterDropdown" style={{ minWidth: '22rem' }}>
                                    {/* Card */}
                                    <div className="card">
                                        <div className="card-header card-header-content-between">
                                            <h5 className="card-header-title">Filter users</h5>
                                            {/* Toggle Button */}
                                            <button type="button" className="btn btn-ghost-secondary btn-icon btn-sm ms-2">
                                                <i className="bi-x-lg" />
                                            </button>
                                            {/* End Toggle Button */}
                                        </div>
                                        <div className="card-body">
                                            <form>
                                                <div className="mb-4">
                                                    <small className="text-cap text-body">Role</small>
                                                    <div className="row">
                                                        <div className="col">
                                                            {/* Check */}
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" defaultValue id="usersFilterCheckAll" defaultChecked />
                                                                <label className="form-check-label" htmlFor="usersFilterCheckAll">
                                                                    All
                                                                </label>
                                                            </div>
                                                            {/* End Check */}
                                                        </div>
                                                        {/* End Col */}
                                                        <div className="col">
                                                            {/* Check */}
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" defaultValue id="usersFilterCheckEmployee" />
                                                                <label className="form-check-label" htmlFor="usersFilterCheckEmployee">
                                                                    Employee
                                                                </label>
                                                            </div>
                                                            {/* End Check */}
                                                        </div>
                                                        {/* End Col */}
                                                    </div>
                                                    {/* End Row */}
                                                </div>
                                                <div className="row">
                                                    <div className="col-sm mb-4">
                                                        <small className="text-cap text-body">Position</small>
                                                        {/* Select */}
                                                        <div className="tom-select-custom">
                                                            <select className="js-select js-datatable-filter form-select form-select-sm" data-target-column-index={2} data-hs-tom-select-options="{
                                      &quot;placeholder&quot;: &quot;Any&quot;,
                                      &quot;searchInDropdown&quot;: false,
                                      &quot;hideSearch&quot;: true,
                                      &quot;dropdownWidth&quot;: &quot;10rem&quot;
                                    }">
                                                                <option value>Any</option>
                                                                <option value="Accountant">Accountant</option>
                                                                <option value="Co-founder">Co-founder</option>
                                                                <option value="Designer">Designer</option>
                                                                <option value="Developer">Developer</option>
                                                                <option value="Director">Director</option>
                                                            </select>
                                                            {/* End Select */}
                                                        </div>
                                                    </div>
                                                    {/* End Col */}
                                                    <div className="col-sm mb-4">
                                                        <small className="text-cap text-body">Status</small>
                                                        {/* Select */}
                                                        <div className="tom-select-custom">
                                                            <select className="js-select js-datatable-filter form-select form-select-sm" data-target-column-index={4} data-hs-tom-select-options="{
                                      &quot;placeholder&quot;: &quot;Any status&quot;,
                                      &quot;searchInDropdown&quot;: false,
                                      &quot;hideSearch&quot;: true,
                                      &quot;dropdownWidth&quot;: &quot;10rem&quot;
                                    }">
                                                                <option value>Any status</option>
                                                                <option value="Completed" data-option-template="<span class=&quot;d-flex align-items-center&quot;><span class=&quot;legend-indicator bg-success&quot;></span>Completed</span>">Completed</option>
                                                                <option value="In progress" data-option-template="<span class=&quot;d-flex align-items-center&quot;><span class=&quot;legend-indicator bg-warning&quot;></span>In progress</span>">In progress</option>
                                                                <option value="To do" data-option-template="<span class=&quot;d-flex align-items-center&quot;><span class=&quot;legend-indicator bg-danger&quot;></span>To do</span>">To do</option>
                                                            </select>
                                                        </div>
                                                        {/* End Select */}
                                                    </div>
                                                    {/* End Col */}
                                                    <div className="col-12 mb-4">
                                                        <small className="text-cap text-body">Members</small>
                                                        {/* Select */}
                                                        <div className="tom-select-custom">
                                                            <select className="js-select form-select" autoComplete="off" multiple data-hs-tom-select-options="{
                                      &quot;singleMultiple&quot;: true,
                                      &quot;hideSelected&quot;: false,
                                      &quot;placeholder&quot;: &quot;Select member&quot;
                                    }">
                                                                <option label="empty" />
                                                                <option value="AH" selected data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/img/160x160/img10.jpg&quot; alt=&quot;Image Description&quot; /><span class=&quot;text-truncate&quot;>Amanda Harvey</span></span>">Amanda Harvey</option>
                                                                <option value="DH" selected data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/img/160x160/img3.jpg&quot; alt=&quot;Image Description&quot; /><span class=&quot;text-truncate&quot;>David Harrison</span></span>">David Harrison</option>
                                                                <option value="SK" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/img/160x160/img4.jpg&quot; alt=&quot;Image Description&quot; /><span class=&quot;text-truncate&quot;>Sam Kart</span></span>">Sam Kart</option>
                                                                <option value="FH" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/img/160x160/img5.jpg&quot; alt=&quot;Image Description&quot; /><span class=&quot;text-truncate&quot;>Finch Hoot</span></span>">Finch Hoot</option>
                                                                <option value="CQ" selected data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/img/160x160/img6.jpg&quot; alt=&quot;Image Description&quot; /><span class=&quot;text-truncate&quot;>Costa Quinn</span></span>">Costa Quinn</option>
                                                            </select>
                                                        </div>
                                                        {/* End Select */}
                                                    </div>
                                                    {/* End Col */}
                                                </div>
                                                {/* End Row */}
                                                <div className="d-grid">
                                                    <a className="btn btn-primary" href="javascript:;">Apply</a>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    {/* End Card */}
                                </div>
                            </div>
                            {/* End Dropdown */}
                        </div>
                    </div>
                    {/* End Header */}
                    {/* Table */}
                    <div className="table-responsive datatable-custom">
                        <table id="datatable" className="table table-lg table-borderless table-thead-bordered table-nowrap table-align-middle card-table" data-hs-datatables-options="{
                   &quot;columnDefs&quot;: [{
                      &quot;targets&quot;: [0, 2, 3, 6, 7],
                      &quot;orderable&quot;: false
                    }],
                   &quot;order&quot;: [],
                   &quot;info&quot;: {
                     &quot;totalQty&quot;: &quot;#datatableWithPaginationInfoTotalQty&quot;
                   },
                   &quot;search&quot;: &quot;#datatableSearch&quot;,
                   &quot;entries&quot;: &quot;#datatableEntries&quot;,
                   &quot;pageLength&quot;: 15,
                   &quot;isResponsive&quot;: false,
                   &quot;isShowPaging&quot;: false,
                   &quot;pagination&quot;: &quot;datatablePagination&quot;
                 }">
                            <thead className="thead-light">
                                <tr>
                                    <th className="table-column-pe-0">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" defaultValue id="datatableCheckAll" />
                                            <label className="form-check-label" htmlFor="datatableCheckAll" />
                                        </div>
                                    </th>
                                    <th className="table-column-ps-0">Project</th>
                                    <th>Tasks</th>
                                    <th>Members</th>
                                    <th>Status</th>
                                    <th>Completion</th>
                                    <th><i className="bi-paperclip" /></th>
                                    <th><i className="bi-chat-left-dots" /></th>
                                    <th>Due date</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="table-column-pe-0">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" defaultValue id="usersDataCheck1" />
                                            <label className="form-check-label" htmlFor="usersDataCheck1" />
                                        </div>
                                    </td>
                                    <td className="table-column-ps-0">
                                        <a className="d-flex align-items-center" href="./project.html">
                                            <img className="avatar" src="./assets/svg/brands/guideline-icon.svg" alt="Image Description" />
                                            <div className="ms-3">
                                                <span className="d-block h5 text-inherit mb-0">Cloud computing web service</span>
                                                <span className="d-block fs-6 text-body">Updated 2 minutes ago</span>
                                            </div>
                                        </a>
                                    </td>
                                    <td>
                                        <div className="d-flex align-items-center">
                                            120 <a className="badge bg-soft-dark text-dark ms-1" href="javascript:;" data-bs-toggle="tooltip" data-bs-placement="top" title="tasks completed today">+2</a>
                                        </div>
                                    </td>
                                    <td>
                                        {/* Avatar Group */}
                                        <div className="avatar-group avatar-group-xs avatar-circle">
                                            <a className="avatar" href="./user-profile.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Ella Lauda">
                                                <img className="avatar-img" src="./assets/img/160x160/img9.jpg" alt="Image Description" />
                                            </a>
                                            <a className="avatar" href="./user-profile.html" data-bs-toggle="tooltip" data-bs-placement="top" title="David Harrison">
                                                <img className="avatar-img" src="./assets/img/160x160/img3.jpg" alt="Image Description" />
                                            </a>
                                            <a className="avatar avatar-soft-dark" href="./user-profile.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Antony Taylor">
                                                <span className="avatar-initials">A</span>
                                            </a>
                                            <a className="avatar avatar-soft-info" href="./user-profile.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Sara Iwens">
                                                <span className="avatar-initials">S</span>
                                            </a>
                                            <a className="avatar" href="./user-profile.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Finch Hoot">
                                                <img className="avatar-img" src="./assets/img/160x160/img5.jpg" alt="Image Description" />
                                            </a>
                                        </div>
                                        {/* End Avatar Group */}
                                    </td>
                                    <td>
                                        <span className="legend-indicator" />In progress
                                    </td>
                                    <td>
                                        <div className="d-flex align-items-center">
                                            <span className="fs-6 me-2">35%</span>
                                            <div className="progress table-progress">
                                                <div className="progress-bar bg-primary" role="progressbar" style={{ width: '35%' }} aria-valuenow={35} aria-valuemin={0} aria-valuemax={100} />
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <a className="text-body" href="./project-files.html">
                                            <i className="bi-paperclip" /> 10
                                        </a>
                                    </td>
                                    <td>
                                        <a className="text-body" href="./project-activity.html">
                                            <i className="bi-chat-left-dots" /> 2
                                        </a>
                                    </td>
                                    <td>05 May</td>
                                </tr>
                                <tr>
                                    <td className="table-column-pe-0">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" defaultValue id="usersDataCheck2" />
                                            <label className="form-check-label" htmlFor="usersDataCheck2" />
                                        </div>
                                    </td>
                                    <td className="table-column-ps-0">
                                        <a className="d-flex align-items-center" href="./project.html">
                                            <div className="avatar avatar-soft-primary avatar-circle">
                                                <span className="avatar-initials">I</span>
                                            </div>
                                            <div className="ms-3">
                                                <span className="d-block h5 text-inherit mb-0">Improve profile UX <i className="tio-verified text-primary" data-bs-toggle="tooltip" data-bs-placement="top" title="Earned extra bonus" /></span>
                                                <span className="d-block fs-6 text-body">Updated 4 hours ago</span>
                                            </div>
                                        </a>
                                    </td>
                                    <td>28</td>
                                    <td>No assignee</td>
                                    <td>
                                        <span className="legend-indicator bg-success" />Completed
                                    </td>
                                    <td>
                                        <div className="d-flex align-items-center">
                                            <span className="fs-6 text-success me-2">100%</span>
                                            <div className="progress table-progress">
                                                <div className="progress-bar bg-success" role="progressbar" style={{ width: '100%' }} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} />
                                            </div>
                                        </div>
                                    </td>
                                    <td>-</td>
                                    <td>
                                        <a className="text-body" href="#">
                                            <i className="bi-chat-left-dots" /> 17
                                        </a>
                                    </td>
                                    <td>01 May</td>
                                </tr>
                                <tr>
                                    <td className="table-column-pe-0">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" defaultValue id="usersDataCheck11" />
                                            <label className="form-check-label" htmlFor="usersDataCheck11" />
                                        </div>
                                    </td>
                                    <td className="table-column-ps-0">
                                        <a className="d-flex align-items-center" href="./project.html">
                                            <img className="avatar" src="./assets/svg/brands/capsule-icon.svg" alt="Image Description" />
                                            <div className="ms-3">
                                                <span className="d-block h5 text-inherit mb-0">Build stronger customer relationships</span>
                                                <span className="d-block fs-6 text-body">Updated 1 months ago</span>
                                            </div>
                                        </a>
                                    </td>
                                    <td>1</td>
                                    <td>
                                        {/* Avatar Group */}
                                        <div className="avatar-group avatar-group-xs avatar-circle">
                                            <a className="avatar" href="./user-profile.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Costa Quinn">
                                                <img className="avatar-img" src="./assets/img/160x160/img6.jpg" alt="Image Description" />
                                            </a>
                                            <a className="avatar" href="./user-profile.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Clarice Boone">
                                                <img className="avatar-img" src="./assets/img/160x160/img7.jpg" alt="Image Description" />
                                            </a>
                                            <a className="avatar avatar-soft-danger" href="./user-profile.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Adam Keep">
                                                <span className="avatar-initials">A</span>
                                            </a>
                                        </div>
                                        {/* End Avatar Group */}
                                    </td>
                                    <td>
                                        <span className="legend-indicator" />To do
                                    </td>
                                    <td>
                                        <div className="d-flex align-items-center">
                                            <span className="fs-6 me-2">0%</span>
                                            <div className="progress table-progress">
                                                <div className="progress-bar" role="progressbar" style={{ width: '0%' }} aria-valuenow={0} aria-valuemin={0} aria-valuemax={100} />
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <a className="text-body" href="./project-files.html">
                                            <i className="bi-paperclip" /> 1
                                        </a>
                                    </td>
                                    <td>-</td>
                                    <td>-</td>
                                </tr>
                                <tr>
                                    <td className="table-column-pe-0">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" defaultValue id="usersDataCheck5" />
                                            <label className="form-check-label" htmlFor="usersDataCheck5" />
                                        </div>
                                    </td>
                                    <td className="table-column-ps-0">
                                        <a className="d-flex align-items-center" href="./project.html">
                                            <div className="avatar avatar-soft-info avatar-circle">
                                                <span className="avatar-initials">U</span>
                                            </div>
                                            <div className="ms-3">
                                                <span className="d-block h5 text-inherit mb-0">Update social banners</span>
                                                <span className="d-block fs-6 text-body">Updated 1 week ago</span>
                                            </div>
                                        </a>
                                    </td>
                                    <td>21</td>
                                    <td>
                                        {/* Avatar Group */}
                                        <div className="avatar-group avatar-group-xs avatar-circle">
                                            <a className="avatar" href="./user-profile.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Finch Hoot">
                                                <img className="avatar-img" src="./assets/img/160x160/img5.jpg" alt="Image Description" />
                                            </a>
                                            <a className="avatar avatar-soft-dark" href="./user-profile.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Bob Bardly">
                                                <span className="avatar-initials">B</span>
                                            </a>
                                            <a className="avatar" href="./user-profile.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Linda Bates">
                                                <img className="avatar-img" src="./assets/img/160x160/img8.jpg" alt="Image Description" />
                                            </a>
                                            <a className="avatar" href="./user-profile.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Ella Lauda">
                                                <img className="avatar-img" src="./assets/img/160x160/img9.jpg" alt="Image Description" />
                                            </a>
                                        </div>
                                        {/* End Avatar Group */}
                                    </td>
                                    <td>
                                        <span className="legend-indicator bg-primary" />In progress
                                    </td>
                                    <td>
                                        <div className="d-flex align-items-center">
                                            <span className="fs-6 text-primary me-2">5%</span>
                                            <div className="progress table-progress">
                                                <div className="progress-bar" role="progressbar" style={{ width: '5%' }} aria-valuenow={5} aria-valuemin={0} aria-valuemax={100} />
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <a className="text-body" href="./project-files.html">
                                            <i className="bi-paperclip" /> 3
                                        </a>
                                    </td>
                                    <td>
                                        <a className="text-body" href="./project-activity.html">
                                            <i className="bi-chat-left-dots" /> 21
                                        </a>
                                    </td>
                                    <td>-</td>
                                </tr>
                                <tr>
                                    <td className="table-column-pe-0">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" defaultValue id="usersDataCheck6" />
                                            <label className="form-check-label" htmlFor="usersDataCheck6" />
                                        </div>
                                    </td>
                                    <td className="table-column-ps-0">
                                        <a className="d-flex align-items-center" href="./project.html">
                                            <img className="avatar" src="./assets/svg/brands/mailchimp-icon.svg" alt="Image Description" />
                                            <div className="ms-3">
                                                <span className="d-block h5 text-inherit mb-0">Update subscription method <i className="tio-verified text-primary" data-bs-toggle="tooltip" data-bs-placement="top" title="Earned extra bonus" /></span>
                                                <span className="d-block fs-6 text-body">Updated 2 hours ago</span>
                                            </div>
                                        </a>
                                    </td>
                                    <td>0</td>
                                    <td>
                                        {/* Avatar Group */}
                                        <div className="avatar-group avatar-group-xs avatar-circle">
                                            <a className="avatar" href="./user-profile.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Costa Quinn">
                                                <img className="avatar-img" src="./assets/img/160x160/img6.jpg" alt="Image Description" />
                                            </a>
                                            <a className="avatar" href="./user-profile.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Clarice Boone">
                                                <img className="avatar-img" src="./assets/img/160x160/img7.jpg" alt="Image Description" />
                                            </a>
                                            <a className="avatar avatar-soft-danger" href="./user-profile.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Adam Keep">
                                                <span className="avatar-initials">A</span>
                                            </a>
                                        </div>
                                        {/* End Avatar Group */}
                                    </td>
                                    <td>
                                        <span className="legend-indicator bg-primary" />In progress
                                    </td>
                                    <td>
                                        <div className="d-flex align-items-center">
                                            <span className="fs-6 text-success me-2">100%</span>
                                            <div className="progress table-progress">
                                                <div className="progress-bar bg-success" role="progressbar" style={{ width: '100%' }} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} />
                                            </div>
                                        </div>
                                    </td>
                                    <td>-</td>
                                    <td>
                                        <a className="text-body" href="#">
                                            <i className="bi-chat-left-dots" /> 9
                                        </a>
                                    </td>
                                    <td>25 May</td>
                                </tr>
                                <tr>
                                    <td className="table-column-pe-0">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" defaultValue id="usersDataCheck12" />
                                            <label className="form-check-label" htmlFor="usersDataCheck12" />
                                        </div>
                                    </td>
                                    <td className="table-column-ps-0">
                                        <a className="d-flex align-items-center" href="./project.html">
                                            <div className="avatar avatar-soft-primary avatar-circle">
                                                <span className="avatar-initials">E</span>
                                            </div>
                                            <div className="ms-3">
                                                <span className="d-block h5 text-inherit mb-0">Extend Spotify mobile app features</span>
                                                <span className="d-block fs-6 text-body">Updated 1 day ago</span>
                                            </div>
                                        </a>
                                    </td>
                                    <td>
                                        <div className="d-flex align-items-center">
                                            27 <a className="badge bg-soft-dark text-dark ms-1" href="javascript:;" data-bs-toggle="tooltip" data-bs-placement="top" title="tasks completed today">+2</a>
                                        </div>
                                    </td>
                                    <td>
                                        {/* Avatar Group */}
                                        <div className="avatar-group avatar-group-xs avatar-circle">
                                            <a className="avatar" href="./user-profile.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Costa Quinn">
                                                <img className="avatar-img" src="./assets/img/160x160/img6.jpg" alt="Image Description" />
                                            </a>
                                            <a className="avatar avatar-soft-info" href="./user-profile.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Bob Bardly">
                                                <span className="avatar-initials">B</span>
                                            </a>
                                            <a className="avatar" href="./user-profile.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Clarice Boone">
                                                <img className="avatar-img" src="./assets/img/160x160/img7.jpg" alt="Image Description" />
                                            </a>
                                            <a className="avatar" href="./user-profile.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Sam Kart">
                                                <img className="avatar-img" src="./assets/img/160x160/img4.jpg" alt="Image Description" />
                                            </a>
                                        </div>
                                        {/* End Avatar Group */}
                                    </td>
                                    <td>
                                        <span className="legend-indicator bg-primary" />In progress
                                    </td>
                                    <td>
                                        <div className="d-flex align-items-center">
                                            <span className="fs-6 text-primary me-2">71%</span>
                                            <div className="progress table-progress">
                                                <div className="progress-bar" role="progressbar" style={{ width: '71%' }} aria-valuenow={71} aria-valuemin={0} aria-valuemax={100} />
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <a className="text-body" href="./project-files.html">
                                            <i className="bi-paperclip" /> 2
                                        </a>
                                    </td>
                                    <td>-</td>
                                    <td>19 May</td>
                                </tr>
                                <tr>
                                    <td className="table-column-pe-0">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" defaultValue id="usersDataCheck9" />
                                            <label className="form-check-label" htmlFor="usersDataCheck9" />
                                        </div>
                                    </td>
                                    <td className="table-column-ps-0">
                                        <a className="d-flex align-items-center" href="./project.html">
                                            <img className="avatar" src="./assets/svg/brands/spec-icon.svg" alt="Image Description" />
                                            <div className="ms-3">
                                                <span className="d-block h5 text-inherit mb-0">Install Front pay</span>
                                                <span className="d-block fs-6 text-body">Updated 23 hours ago</span>
                                            </div>
                                        </a>
                                    </td>
                                    <td>7</td>
                                    <td>No assignee</td>
                                    <td>
                                        <span className="legend-indicator bg-success" />Completed
                                    </td>
                                    <td>
                                        <div className="d-flex align-items-center">
                                            <span className="fs-6 text-primary me-2">83%</span>
                                            <div className="progress table-progress">
                                                <div className="progress-bar" role="progressbar" style={{ width: '83%' }} aria-valuenow={83} aria-valuemin={0} aria-valuemax={100} />
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <a className="text-body" href="./project-files.html">
                                            <i className="bi-paperclip" /> 1
                                        </a>
                                    </td>
                                    <td>
                                        <a className="text-body" href="./project-activity.html">
                                            <i className="bi-chat-left-dots" /> 1
                                        </a>
                                    </td>
                                    <td>30 May</td>
                                </tr>
                                <tr>
                                    <td className="table-column-pe-0">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" defaultValue id="usersDataCheck7" />
                                            <label className="form-check-label" htmlFor="usersDataCheck7" />
                                        </div>
                                    </td>
                                    <td className="table-column-ps-0">
                                        <a className="d-flex align-items-center" href="./project.html">
                                            <div className="avatar avatar-soft-dark avatar-circle">
                                                <span className="avatar-initials">B</span>
                                            </div>
                                            <div className="ms-3">
                                                <span className="d-block h5 text-inherit mb-0">Binance-chain <i className="tio-verified text-primary" data-bs-toggle="tooltip" data-bs-placement="top" title="Earned extra bonus" /></span>
                                                <span className="d-block fs-6 text-body">Updated 14 hours ago</span>
                                            </div>
                                        </a>
                                    </td>
                                    <td>
                                        <div className="d-flex align-items-center">
                                            19 <a className="badge bg-soft-dark text-dark ms-1" href="javascript:;" data-bs-toggle="tooltip" data-bs-placement="top" title="tasks completed today">+1</a>
                                        </div>
                                    </td>
                                    <td>
                                        {/* Avatar Group */}
                                        <div className="avatar-group avatar-group-xs avatar-circle">
                                            <a className="avatar" href="./user-profile.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Amanda Harvey">
                                                <img className="avatar-img" src="./assets/img/160x160/img10.jpg" alt="Image Description" />
                                            </a>
                                            <a className="avatar" href="./user-profile.html" data-bs-toggle="tooltip" data-bs-placement="top" title="David Harrison">
                                                <img className="avatar-img" src="./assets/img/160x160/img3.jpg" alt="Image Description" />
                                            </a>
                                            <a className="avatar avatar-soft-info" href="./user-profile.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Lisa Iston">
                                                <span className="avatar-initials">L</span>
                                            </a>
                                            <a className="avatar avatar-light avatar-circle" href="./user-profile.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Lewis Clarke, Chris Mathew and 3 more">
                                                <span className="avatar-initials">+5</span>
                                            </a>
                                        </div>
                                        {/* End Avatar Group */}
                                    </td>
                                    <td>
                                        <span className="legend-indicator bg-success" />Completed
                                    </td>
                                    <td>
                                        <div className="d-flex align-items-center">
                                            <span className="fs-6 text-success me-2">100%</span>
                                            <div className="progress table-progress">
                                                <div className="progress-bar bg-success" role="progressbar" style={{ width: '100%' }} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} />
                                            </div>
                                        </div>
                                    </td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>-</td>
                                </tr>
                                <tr>
                                    <td className="table-column-pe-0">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" defaultValue id="usersDataCheck3" />
                                            <label className="form-check-label" htmlFor="usersDataCheck3" />
                                        </div>
                                    </td>
                                    <td className="table-column-ps-0">
                                        <a className="d-flex align-items-center" href="./project.html">
                                            <img className="avatar" src="./assets/svg/brands/jira-icon.svg" alt="Image Description" />
                                            <div className="ms-3">
                                                <span className="d-block h5 text-inherit mb-0">Develop Slack mobile app</span>
                                                <span className="d-block fs-6 text-body">Updated 18 minutes ago</span>
                                            </div>
                                        </a>
                                    </td>
                                    <td>
                                        <div className="d-flex align-items-center">
                                            32 <a className="badge bg-soft-dark text-dark ms-1" href="javascript:;" data-bs-toggle="tooltip" data-bs-placement="top" title="tasks completed today">+5</a>
                                        </div>
                                    </td>
                                    <td>
                                        {/* Avatar Group */}
                                        <div className="avatar-group avatar-group-xs avatar-circle">
                                            <a className="avatar" href="./user-profile.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Ella Lauda">
                                                <img className="avatar-img" src="./assets/img/160x160/img9.jpg" alt="Image Description" />
                                            </a>
                                            <a className="avatar" href="./user-profile.html" data-bs-toggle="tooltip" data-bs-placement="top" title="David Harrison">
                                                <img className="avatar-img" src="./assets/img/160x160/img3.jpg" alt="Image Description" />
                                            </a>
                                            <a className="avatar avatar-soft-dark" href="./user-profile.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Antony Taylor">
                                                <span className="avatar-initials">A</span>
                                            </a>
                                            <a className="avatar avatar-light avatar-circle" href="./user-profile.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Sam Kart, Amanda Harvey and 1 more">
                                                <span className="avatar-initials">+3</span>
                                            </a>
                                        </div>
                                        {/* End Avatar Group */}
                                    </td>
                                    <td>
                                        <span className="legend-indicator bg-primary" />In progress
                                    </td>
                                    <td>
                                        <div className="d-flex align-items-center">
                                            <span className="fs-6 text-success me-2">100%</span>
                                            <div className="progress table-progress">
                                                <div className="progress-bar bg-success" role="progressbar" style={{ width: '100%' }} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} />
                                            </div>
                                        </div>
                                    </td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>25 May</td>
                                </tr>
                                <tr>
                                    <td className="table-column-pe-0">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" defaultValue id="usersDataCheck10" />
                                            <label className="form-check-label" htmlFor="usersDataCheck10" />
                                        </div>
                                    </td>
                                    <td className="table-column-ps-0">
                                        <a className="d-flex align-items-center" href="./project.html">
                                            <div className="avatar avatar-soft-info avatar-circle">
                                                <span className="avatar-initials">G</span>
                                            </div>
                                            <div className="ms-3">
                                                <span className="d-block h5 text-inherit mb-0">Get a complete store audit</span>
                                                <span className="d-block fs-6 text-body">Updated 2 weeks ago</span>
                                            </div>
                                        </a>
                                    </td>
                                    <td>
                                        <div className="d-flex align-items-center">
                                            10 <a className="badge bg-soft-dark text-dark ms-1" href="javascript:;" data-bs-toggle="tooltip" data-bs-placement="top" title="task completed today">+1</a>
                                        </div>
                                    </td>
                                    <td>
                                        {/* Avatar Group */}
                                        <div className="avatar-group avatar-group-xs avatar-circle">
                                            <a className="avatar" href="./user-profile.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Finch Hoot">
                                                <img className="avatar-img" src="./assets/img/160x160/img5.jpg" alt="Image Description" />
                                            </a>
                                            <a className="avatar avatar-soft-dark" href="./user-profile.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Bob Bardly">
                                                <span className="avatar-initials">B</span>
                                            </a>
                                            <a className="avatar" href="./user-profile.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Clarice Boone">
                                                <img className="avatar-img" src="./assets/img/160x160/img7.jpg" alt="Image Description" />
                                            </a>
                                            <a className="avatar avatar-soft-danger" href="./user-profile.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Adam Keep">
                                                <span className="avatar-initials">A</span>
                                            </a>
                                        </div>
                                        {/* End Avatar Group */}
                                    </td>
                                    <td>
                                        <span className="legend-indicator bg-primary" />In progress
                                    </td>
                                    <td>
                                        <div className="d-flex align-items-center">
                                            <span className="fs-6 text-primary me-2">30%</span>
                                            <div className="progress table-progress">
                                                <div className="progress-bar" role="progressbar" style={{ width: '30%' }} aria-valuenow={30} aria-valuemin={0} aria-valuemax={100} />
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <a className="text-body" href="./project-files.html">
                                            <i className="bi-paperclip" /> 3
                                        </a>
                                    </td>
                                    <td>
                                        <a className="text-body" href="./project-activity.html">
                                            <i className="bi-chat-left-dots" /> 15
                                        </a>
                                    </td>
                                    <td>01 June</td>
                                </tr>
                                <tr>
                                    <td className="table-column-pe-0">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" defaultValue id="usersDataCheck4" />
                                            <label className="form-check-label" htmlFor="usersDataCheck4" />
                                        </div>
                                    </td>
                                    <td className="table-column-ps-0">
                                        <a className="d-flex align-items-center" href="./project.html">
                                            <img className="avatar" src="./assets/svg/brands/figma-icon.svg" alt="Image Description" />
                                            <div className="ms-3">
                                                <span className="d-block h5 text-inherit mb-0">Create a new theme <i className="tio-verified text-primary" data-bs-toggle="tooltip" data-bs-placement="top" title="Earned extra bonus" /></span>
                                                <span className="d-block fs-6 text-body">Updated 5 days ago</span>
                                            </div>
                                        </a>
                                    </td>
                                    <td>2</td>
                                    <td>No assignee</td>
                                    <td>
                                        <span className="legend-indicator" />To do
                                    </td>
                                    <td>
                                        <div className="d-flex align-items-center">
                                            <span className="fs-6 me-2">0%</span>
                                            <div className="progress table-progress">
                                                <div className="progress-bar" role="progressbar" style={{ width: '0%' }} aria-valuenow={0} aria-valuemin={0} aria-valuemax={100} />
                                            </div>
                                        </div>
                                    </td>
                                    <td>-</td>
                                    <td>
                                        <a className="text-body" href="#">
                                            <i className="bi-chat-left-dots" /> 33
                                        </a>
                                    </td>
                                    <td>08 May</td>
                                </tr>
                                <tr>
                                    <td className="table-column-pe-0">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" defaultValue id="usersDataCheck15" />
                                            <label className="form-check-label" htmlFor="usersDataCheck15" />
                                        </div>
                                    </td>
                                    <td className="table-column-ps-0">
                                        <a className="d-flex align-items-center" href="./project.html">
                                            <img className="avatar" src="./assets/svg/brands/google-webdev-icon.svg" alt="Image Description" />
                                            <div className="ms-3">
                                                <span className="d-block h5 text-inherit mb-0">Create a new database for Webdev</span>
                                                <span className="d-block fs-6 text-body">Updated 2 hours ago</span>
                                            </div>
                                        </a>
                                    </td>
                                    <td>0</td>
                                    <td>
                                        {/* Avatar Group */}
                                        <div className="avatar-group avatar-group-xs avatar-circle">
                                            <a className="avatar" href="./user-profile.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Sam Kart">
                                                <img className="avatar-img" src="./assets/img/160x160/img4.jpg" alt="Image Description" />
                                            </a>
                                            <a className="avatar avatar-soft-danger" href="./user-profile.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Teresa Eyker">
                                                <span className="avatar-initials">T</span>
                                            </a>
                                            <a className="avatar" href="./user-profile.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Amanda Harvey">
                                                <img className="avatar-img" src="./assets/img/160x160/img10.jpg" alt="Image Description" />
                                            </a>
                                            <a className="avatar avatar-light avatar-circle" href="./user-profile.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Brian Halligan, Rachel Doe and 7 more">
                                                <span className="avatar-initials">+9</span>
                                            </a>
                                        </div>
                                        {/* End Avatar Group */}
                                    </td>
                                    <td>
                                        <span className="legend-indicator bg-success" />Completed
                                    </td>
                                    <td>
                                        <div className="d-flex align-items-center">
                                            <span className="fs-6 text-success me-2">100%</span>
                                            <div className="progress table-progress">
                                                <div className="progress-bar bg-success" role="progressbar" style={{ width: '100%' }} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} />
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <a className="text-body" href="./project-files.html">
                                            <i className="bi-paperclip" /> 1
                                        </a>
                                    </td>
                                    <td>
                                        <a className="text-body" href="./project-activity.html">
                                            <i className="bi-chat-left-dots" /> 7
                                        </a>
                                    </td>
                                    <td>-</td>
                                </tr>
                                <tr>
                                    <td className="table-column-pe-0">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" defaultValue id="usersDataCheck14" />
                                            <label className="form-check-label" htmlFor="usersDataCheck14" />
                                        </div>
                                    </td>
                                    <td className="table-column-ps-0">
                                        <a className="d-flex align-items-center" href="./project.html">
                                            <div className="avatar avatar-soft-danger avatar-circle">
                                                <span className="avatar-initials">M</span>
                                            </div>
                                            <div className="ms-3">
                                                <span className="d-block h5 text-inherit mb-0">Marketing &amp; Communications</span>
                                                <span className="d-block fs-6 text-body">Updated 2 months ago</span>
                                            </div>
                                        </a>
                                    </td>
                                    <td>
                                        <div className="d-flex align-items-center">
                                            44 <a className="badge bg-soft-dark text-dark ms-1" href="javascript:;" data-bs-toggle="tooltip" data-bs-placement="top" title="tasks completed today">+5</a>
                                        </div>
                                    </td>
                                    <td>
                                        {/* Avatar Group */}
                                        <div className="avatar-group avatar-group-xs avatar-circle">
                                            <a className="avatar" href="./user-profile.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Sam Kart">
                                                <img className="avatar-img" src="./assets/img/160x160/img4.jpg" alt="Image Description" />
                                            </a>
                                            <a className="avatar avatar-soft-danger" href="./user-profile.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Teresa Eyker">
                                                <span className="avatar-initials">T</span>
                                            </a>
                                            <a className="avatar" href="./user-profile.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Amanda Harvey">
                                                <img className="avatar-img" src="./assets/img/160x160/img10.jpg" alt="Image Description" />
                                            </a>
                                        </div>
                                        {/* End Avatar Group */}
                                    </td>
                                    <td>
                                        <span className="legend-indicator bg-primary" />In progress
                                    </td>
                                    <td>
                                        <div className="d-flex align-items-center">
                                            <span className="fs-6 text-primary me-2">37%</span>
                                            <div className="progress table-progress">
                                                <div className="progress-bar" role="progressbar" style={{ width: '37%' }} aria-valuenow={37} aria-valuemin={0} aria-valuemax={100} />
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <a className="text-body" href="./project-files.html">
                                            <i className="bi-paperclip" /> 2
                                        </a>
                                    </td>
                                    <td>
                                        <a className="text-body" href="./project-activity.html">
                                            <i className="bi-chat-left-dots" /> 9
                                        </a>
                                    </td>
                                    <td>14 June</td>
                                </tr>
                                <tr>
                                    <td className="table-column-pe-0">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" defaultValue id="usersDataCheck13" />
                                            <label className="form-check-label" htmlFor="usersDataCheck13" />
                                        </div>
                                    </td>
                                    <td className="table-column-ps-0">
                                        <a className="d-flex align-items-center" href="./project.html">
                                            <img className="avatar" src="./assets/svg/brands/bookingcom-icon.svg" alt="Image Description" />
                                            <div className="ms-3">
                                                <span className="d-block h5 text-inherit mb-0">Set up a datatable for Booking.com</span>
                                                <span className="d-block fs-6 text-body">Updated 13 days ago</span>
                                            </div>
                                        </a>
                                    </td>
                                    <td>0</td>
                                    <td>No assignee</td>
                                    <td>
                                        <span className="legend-indicator" />To do
                                    </td>
                                    <td>
                                        <div className="d-flex align-items-center">
                                            <span className="fs-6 me-2">0%</span>
                                            <div className="progress table-progress">
                                                <div className="progress-bar" role="progressbar" style={{ width: '0%' }} aria-valuenow={0} aria-valuemin={0} aria-valuemax={100} />
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <a className="text-body" href="./project-files.html">
                                            <i className="bi-paperclip" /> 10
                                        </a>
                                    </td>
                                    <td>-</td>
                                    <td>05 May</td>
                                </tr>
                                <tr>
                                    <td className="table-column-pe-0">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" defaultValue id="usersDataCheck16" />
                                            <label className="form-check-label" htmlFor="usersDataCheck16" />
                                        </div>
                                    </td>
                                    <td className="table-column-ps-0">
                                        <a className="d-flex align-items-center" href="./project.html">
                                            <div className="avatar avatar-soft-dark avatar-circle">
                                                <span className="avatar-initials">C</span>
                                            </div>
                                            <div className="ms-3">
                                                <span className="d-block h5 text-inherit mb-0">Create a new marketing campaign</span>
                                                <span className="d-block fs-6 text-body">Updated 1 day ago</span>
                                            </div>
                                        </a>
                                    </td>
                                    <td>5</td>
                                    <td>
                                        {/* Avatar Group */}
                                        <div className="avatar-group avatar-group-xs avatar-circle">
                                            <a className="avatar" href="./user-profile.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Costa Quinn">
                                                <img className="avatar-img" src="./assets/img/160x160/img6.jpg" alt="Image Description" />
                                            </a>
                                            <a className="avatar" href="./user-profile.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Clarice Boone">
                                                <img className="avatar-img" src="./assets/img/160x160/img7.jpg" alt="Image Description" />
                                            </a>
                                            <a className="avatar avatar-soft-dark" href="./user-profile.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Zack Ins">
                                                <span className="avatar-initials">Z</span>
                                            </a>
                                        </div>
                                        {/* End Avatar Group */}
                                    </td>
                                    <td>
                                        <span className="legend-indicator bg-primary" />In progress
                                    </td>
                                    <td>
                                        <div className="d-flex align-items-center">
                                            <span className="fs-6 text-primary me-2">90%</span>
                                            <div className="progress table-progress">
                                                <div className="progress-bar" role="progressbar" style={{ width: '90%' }} aria-valuenow={90} aria-valuemin={0} aria-valuemax={100} />
                                            </div>
                                        </div>
                                    </td>
                                    <td>-</td>
                                    <td>
                                        <a className="text-body" href="#">
                                            <i className="bi-chat-left-dots" /> 1
                                        </a>
                                    </td>
                                    <td>-</td>
                                </tr>
                                <tr>
                                    <td className="table-column-pe-0">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" defaultValue id="usersDataCheck8" />
                                            <label className="form-check-label" htmlFor="usersDataCheck8" />
                                        </div>
                                    </td>
                                    <td className="table-column-ps-0">
                                        <a className="d-flex align-items-center" href="./project.html">
                                            <img className="avatar" src="./assets/svg/brands/prosperops-icon.svg" alt="Image Description" />
                                            <div className="ms-3">
                                                <span className="d-block h5 text-inherit mb-0">Prosperops</span>
                                                <span className="d-block fs-6 text-body">Updated 1 hour ago</span>
                                            </div>
                                        </a>
                                    </td>
                                    <td>21</td>
                                    <td>No assignee</td>
                                    <td>
                                        <span className="legend-indicator bg-success" />Completed
                                    </td>
                                    <td>
                                        <div className="d-flex align-items-center">
                                            <span className="fs-6 text-primary me-2">7%</span>
                                            <div className="progress table-progress">
                                                <div className="progress-bar" role="progressbar" style={{ width: '7%' }} aria-valuenow={7} aria-valuemin={0} aria-valuemax={100} />
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <a className="text-body" href="./project-files.html">
                                            <i className="bi-paperclip" /> 2
                                        </a>
                                    </td>
                                    <td>-</td>
                                    <td>26 May</td>
                                </tr>
                                <tr>
                                    <td className="table-column-pe-0">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" defaultValue id="usersDataCheck17" />
                                            <label className="form-check-label" htmlFor="usersDataCheck17" />
                                        </div>
                                    </td>
                                    <td className="table-column-ps-0">
                                        <a className="d-flex align-items-center" href="./project.html">
                                            <div className="avatar avatar-soft-primary avatar-circle">
                                                <span className="avatar-initials">I</span>
                                            </div>
                                            <div className="ms-3">
                                                <span className="d-block h5 text-inherit mb-0">Increase productivity with reviews</span>
                                                <span className="d-block fs-6 text-body">Updated 30 minutes ago</span>
                                            </div>
                                        </a>
                                    </td>
                                    <td>
                                        <div className="d-flex align-items-center">
                                            10 <a className="badge bg-soft-dark text-dark ms-1" href="javascript:;" data-bs-toggle="tooltip" data-bs-placement="top" title="tasks completed today">+7</a>
                                        </div>
                                    </td>
                                    <td>No assignee</td>
                                    <td>
                                        <span className="legend-indicator bg-primary" />In progress
                                    </td>
                                    <td>
                                        <div className="d-flex align-items-center">
                                            <span className="fs-6 text-primary me-2">80%</span>
                                            <div className="progress table-progress">
                                                <div className="progress-bar" role="progressbar" style={{ width: '80%' }} aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} />
                                            </div>
                                        </div>
                                    </td>
                                    <td>-</td>
                                    <td>
                                        <a className="text-body" href="#">
                                            <i className="bi-chat-left-dots" /> 2
                                        </a>
                                    </td>
                                    <td>06 May</td>
                                </tr>
                                <tr>
                                    <td className="table-column-pe-0">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" defaultValue id="usersDataCheck18" />
                                            <label className="form-check-label" htmlFor="usersDataCheck18" />
                                        </div>
                                    </td>
                                    <td className="table-column-ps-0">
                                        <a className="d-flex align-items-center" href="./project.html">
                                            <img className="avatar" src="./assets/svg/brands/spotify-icon.svg" alt="Image Description" />
                                            <div className="ms-3">
                                                <span className="d-block h5 text-inherit mb-0">Redesigning the Spotify main page</span>
                                                <span className="d-block fs-6 text-body">Updated 27 minutes ago</span>
                                            </div>
                                        </a>
                                    </td>
                                    <td>48</td>
                                    <td>
                                        {/* Avatar Group */}
                                        <div className="avatar-group avatar-group-xs avatar-circle">
                                            <a className="avatar" href="./user-profile.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Amanda Harvey">
                                                <img className="avatar-img" src="./assets/img/160x160/img10.jpg" alt="Image Description" />
                                            </a>
                                            <a className="avatar" href="./user-profile.html" data-bs-toggle="tooltip" data-bs-placement="top" title="David Harrison">
                                                <img className="avatar-img" src="./assets/img/160x160/img3.jpg" alt="Image Description" />
                                            </a>
                                            <a className="avatar avatar-soft-info" href="./user-profile.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Lisa Iston">
                                                <span className="avatar-initials">L</span>
                                            </a>
                                            <a className="avatar avatar-light avatar-circle" href="./user-profile.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Lewis Clarke, Chris Mathew and 3 more">
                                                <span className="avatar-initials">+5</span>
                                            </a>
                                        </div>
                                        {/* End Avatar Group */}
                                    </td>
                                    <td>
                                        <span className="legend-indicator" />To do
                                    </td>
                                    <td>
                                        <div className="d-flex align-items-center">
                                            <span className="fs-6 me-2">0%</span>
                                            <div className="progress table-progress">
                                                <div className="progress-bar" role="progressbar" style={{ width: '0%' }} aria-valuenow={0} aria-valuemin={0} aria-valuemax={100} />
                                            </div>
                                        </div>
                                    </td>
                                    <td>-</td>
                                    <td>
                                        <a className="text-body" href="#">
                                            <i className="bi-chat-left-dots" /> 5
                                        </a>
                                    </td>
                                    <td>-</td>
                                </tr>
                                <tr>
                                    <td className="table-column-pe-0">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" defaultValue id="usersDataCheck19" />
                                            <label className="form-check-label" htmlFor="usersDataCheck19" />
                                        </div>
                                    </td>
                                    <td className="table-column-ps-0">
                                        <a className="d-flex align-items-center" href="./project.html">
                                            <div className="avatar avatar-soft-info avatar-circle">
                                                <span className="avatar-initials">T</span>
                                            </div>
                                            <div className="ms-3">
                                                <span className="d-block h5 text-inherit mb-0">The Hub project <i className="tio-verified text-primary" data-bs-toggle="tooltip" data-bs-placement="top" title="Earned extra bonus" /></span>
                                                <span className="d-block fs-6 text-body">Updated 9 hours ago</span>
                                            </div>
                                        </a>
                                    </td>
                                    <td>5</td>
                                    <td>
                                        {/* Avatar Group */}
                                        <div className="avatar-group avatar-group-xs avatar-circle">
                                            <a className="avatar" href="./user-profile.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Finch Hoot">
                                                <img className="avatar-img" src="./assets/img/160x160/img5.jpg" alt="Image Description" />
                                            </a>
                                            <a className="avatar avatar-soft-dark" href="./user-profile.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Bob Bardly">
                                                <span className="avatar-initials">B</span>
                                            </a>
                                            <a className="avatar" href="./user-profile.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Linda Bates">
                                                <img className="avatar-img" src="./assets/img/160x160/img8.jpg" alt="Image Description" />
                                            </a>
                                            <a className="avatar" href="./user-profile.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Ella Lauda">
                                                <img className="avatar-img" src="./assets/img/160x160/img9.jpg" alt="Image Description" />
                                            </a>
                                        </div>
                                        {/* End Avatar Group */}
                                    </td>
                                    <td>
                                        <span className="legend-indicator bg-primary" />In progress
                                    </td>
                                    <td>
                                        <div className="d-flex align-items-center">
                                            <span className="fs-6 text-success me-2">100%</span>
                                            <div className="progress table-progress">
                                                <div className="progress-bar bg-success" role="progressbar" style={{ width: '100%' }} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} />
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <a className="text-body" href="./project-files.html">
                                            <i className="bi-paperclip" /> 1
                                        </a>
                                    </td>
                                    <td>-</td>
                                    <td>12 June</td>
                                </tr>
                                <tr>
                                    <td className="table-column-pe-0">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" defaultValue id="usersDataCheck20" />
                                            <label className="form-check-label" htmlFor="usersDataCheck20" />
                                        </div>
                                    </td>
                                    <td className="table-column-ps-0">
                                        <a className="d-flex align-items-center" href="./project.html">
                                            <img className="avatar" src="./assets/svg/brands/digitalocean-icon.svg" alt="Image Description" />
                                            <div className="ms-3">
                                                <span className="d-block h5 text-inherit mb-0">Working on a new Cloud computing</span>
                                                <span className="d-block fs-6 text-body">Updated 5 days ago</span>
                                            </div>
                                        </a>
                                    </td>
                                    <td>8</td>
                                    <td>
                                        {/* Avatar Group */}
                                        <div className="avatar-group avatar-group-xs avatar-circle">
                                            <a className="avatar" href="./user-profile.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Costa Quinn">
                                                <img className="avatar-img" src="./assets/img/160x160/img6.jpg" alt="Image Description" />
                                            </a>
                                            <a className="avatar" href="./user-profile.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Clarice Boone">
                                                <img className="avatar-img" src="./assets/img/160x160/img7.jpg" alt="Image Description" />
                                            </a>
                                            <a className="avatar avatar-soft-danger" href="./user-profile.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Adam Keep">
                                                <span className="avatar-initials">A</span>
                                            </a>
                                        </div>
                                        {/* End Avatar Group */}
                                    </td>
                                    <td>
                                        <span className="legend-indicator bg-success" />Completed
                                    </td>
                                    <td>
                                        <div className="d-flex align-items-center">
                                            <span className="fs-6 text-primary me-2">12%</span>
                                            <div className="progress table-progress">
                                                <div className="progress-bar" role="progressbar" style={{ width: '12%' }} aria-valuenow={12} aria-valuemin={0} aria-valuemax={100} />
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <a className="text-body" href="./project-files.html">
                                            <i className="bi-paperclip" /> 4
                                        </a>
                                    </td>
                                    <td>
                                        <a className="text-body" href="./project-activity.html">
                                            <i className="bi-chat-left-dots" /> 29
                                        </a>
                                    </td>
                                    <td>22 July</td>
                                </tr>
                                <tr>
                                    <td className="table-column-pe-0">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" defaultValue id="usersDataCheck21" />
                                            <label className="form-check-label" htmlFor="usersDataCheck21" />
                                        </div>
                                    </td>
                                    <td className="table-column-ps-0">
                                        <a className="d-flex align-items-center" href="./project.html">
                                            <div className="avatar avatar-soft-primary avatar-circle">
                                                <span className="avatar-initials">L</span>
                                            </div>
                                            <div className="ms-3">
                                                <span className="d-block h5 text-inherit mb-0">Launch social network campaign</span>
                                                <span className="d-block fs-6 text-body">Updated 46 minutes ago</span>
                                            </div>
                                        </a>
                                    </td>
                                    <td>1</td>
                                    <td>No assignee</td>
                                    <td>
                                        <span className="legend-indicator bg-primary" />In progress
                                    </td>
                                    <td>
                                        <div className="d-flex align-items-center">
                                            <span className="fs-6 text-primary me-2">50%</span>
                                            <div className="progress table-progress">
                                                <div className="progress-bar" role="progressbar" style={{ width: '50%' }} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} />
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <a className="text-body" href="./project-files.html">
                                            <i className="bi-paperclip" /> 5
                                        </a>
                                    </td>
                                    <td>
                                        <a className="text-body" href="./project-activity.html">
                                            <i className="bi-chat-left-dots" /> 11
                                        </a>
                                    </td>
                                    <td>-</td>
                                </tr>
                                <tr>
                                    <td className="table-column-pe-0">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" defaultValue id="usersDataCheck22" />
                                            <label className="form-check-label" htmlFor="usersDataCheck22" />
                                        </div>
                                    </td>
                                    <td className="table-column-ps-0">
                                        <a className="d-flex align-items-center" href="./project.html">
                                            <img className="avatar" src="./assets/svg/brands/atlassian-icon.svg" alt="Image Description" />
                                            <div className="ms-3">
                                                <span className="d-block h5 text-inherit mb-0">New software tool</span>
                                                <span className="d-block fs-6 text-body">Updated 7 minutes ago</span>
                                            </div>
                                        </a>
                                    </td>
                                    <td>22</td>
                                    <td>
                                        {/* Avatar Group */}
                                        <div className="avatar-group avatar-group-xs avatar-circle">
                                            <a className="avatar" href="./user-profile.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Sam Kart">
                                                <img className="avatar-img" src="./assets/img/160x160/img4.jpg" alt="Image Description" />
                                            </a>
                                            <a className="avatar avatar-soft-danger" href="./user-profile.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Teresa Eyker">
                                                <span className="avatar-initials">T</span>
                                            </a>
                                            <a className="avatar" href="./user-profile.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Amanda Harvey">
                                                <img className="avatar-img" src="./assets/img/160x160/img10.jpg" alt="Image Description" />
                                            </a>
                                            <a className="avatar avatar-light avatar-circle" href="./user-profile.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Brian Halligan, Rachel Doe and 7 more">
                                                <span className="avatar-initials">+9</span>
                                            </a>
                                        </div>
                                        {/* End Avatar Group */}
                                    </td>
                                    <td>
                                        <span className="legend-indicator" />To do
                                    </td>
                                    <td>
                                        <div className="d-flex align-items-center">
                                            <span className="fs-6 me-2">0%</span>
                                            <div className="progress table-progress">
                                                <div className="progress-bar" role="progressbar" style={{ width: '0%' }} aria-valuenow={0} aria-valuemin={0} aria-valuemax={100} />
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <a className="text-body" href="./project-files.html">
                                            <i className="bi-paperclip" /> 7
                                        </a>
                                    </td>
                                    <td>-</td>
                                    <td>05 May</td>
                                </tr>
                                <tr>
                                    <td className="table-column-pe-0">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" defaultValue id="usersDataCheck23" />
                                            <label className="form-check-label" htmlFor="usersDataCheck23" />
                                        </div>
                                    </td>
                                    <td className="table-column-ps-0">
                                        <a className="d-flex align-items-center" href="./project.html">
                                            <img className="avatar" src="./assets/svg/brands/frontapp-icon.svg" alt="Image Description" />
                                            <div className="ms-3">
                                                <span className="d-block h5 text-inherit mb-0">Increase email conversion rating</span>
                                                <span className="d-block fs-6 text-body">Updated 1 hour ago</span>
                                            </div>
                                        </a>
                                    </td>
                                    <td>
                                        <div className="d-flex align-items-center">
                                            9 <a className="badge bg-soft-dark text-dark ms-1" href="javascript:;" data-bs-toggle="tooltip" data-bs-placement="top" title="task completed today">+1</a>
                                        </div>
                                    </td>
                                    <td>
                                        {/* Avatar Group */}
                                        <div className="avatar-group avatar-group-xs avatar-circle">
                                            <a className="avatar" href="./user-profile.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Finch Hoot">
                                                <img className="avatar-img" src="./assets/img/160x160/img5.jpg" alt="Image Description" />
                                            </a>
                                            <a className="avatar avatar-soft-dark" href="./user-profile.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Bob Bardly">
                                                <span className="avatar-initials">B</span>
                                            </a>
                                            <a className="avatar" href="./user-profile.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Clarice Boone">
                                                <img className="avatar-img" src="./assets/img/160x160/img7.jpg" alt="Image Description" />
                                            </a>
                                            <a className="avatar avatar-soft-danger" href="./user-profile.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Adam Keep">
                                                <span className="avatar-initials">A</span>
                                            </a>
                                        </div>
                                        {/* End Avatar Group */}
                                    </td>
                                    <td>
                                        <span className="legend-indicator" />To do
                                    </td>
                                    <td>
                                        <div className="d-flex align-items-center">
                                            <span className="fs-6 me-2">0%</span>
                                            <div className="progress table-progress">
                                                <div className="progress-bar" role="progressbar" style={{ width: '0%' }} aria-valuenow={0} aria-valuemin={0} aria-valuemax={100} />
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <a className="text-body" href="./project-files.html">
                                            <i className="bi-paperclip" /> 2
                                        </a>
                                    </td>
                                    <td>
                                        <a className="text-body" href="./project-activity.html">
                                            <i className="bi-chat-left-dots" /> 5
                                        </a>
                                    </td>
                                    <td>01 May</td>
                                </tr>
                                <tr>
                                    <td className="table-column-pe-0">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" defaultValue id="usersDataCheck24" />
                                            <label className="form-check-label" htmlFor="usersDataCheck24" />
                                        </div>
                                    </td>
                                    <td className="table-column-ps-0">
                                        <a className="d-flex align-items-center" href="./project.html">
                                            <div className="avatar avatar-soft-danger avatar-circle">
                                                <span className="avatar-initials">E</span>
                                            </div>
                                            <div className="ms-3">
                                                <span className="d-block h5 text-inherit mb-0">Ethereum project</span>
                                                <span className="d-block fs-6 text-body">Updated 5 days ago</span>
                                            </div>
                                        </a>
                                    </td>
                                    <td>4</td>
                                    <td>No assignee</td>
                                    <td>
                                        <span className="legend-indicator bg-success" />Completed
                                    </td>
                                    <td>
                                        <div className="d-flex align-items-center">
                                            <span className="fs-6 text-primary me-2">95%</span>
                                            <div className="progress table-progress">
                                                <div className="progress-bar" role="progressbar" style={{ width: '95%' }} aria-valuenow={95} aria-valuemin={0} aria-valuemax={100} />
                                            </div>
                                        </div>
                                    </td>
                                    <td>-</td>
                                    <td>
                                        <a className="text-body" href="#">
                                            <i className="bi-chat-left-dots" /> 1
                                        </a>
                                    </td>
                                    <td>-</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    {/* End Table */}
                    {/* Footer */}
                    <div className="card-footer">
                        <div className="row justify-content-center justify-content-sm-between align-items-sm-center">
                            <div className="col-sm mb-2 mb-sm-0">
                                <div className="d-flex justify-content-center justify-content-sm-start align-items-center">
                                    <span className="me-2">Showing:</span>
                                    {/* Select */}
                                    <div className="tom-select-custom">
                                        <select id="datatableEntries" className="js-select form-select form-select-borderless w-auto" autoComplete="off" data-hs-tom-select-options="{
                            &quot;searchInDropdown&quot;: false,
                            &quot;hideSearch&quot;: true
                          }">
                                            <option value={10}>10</option>
                                            <option value={15} selected>15</option>
                                            <option value={20}>20</option>
                                        </select>
                                    </div>
                                    {/* End Select */}
                                    <span className="text-secondary me-2">of</span>
                                    {/* Pagination Quantity */}
                                    <span id="datatableWithPaginationInfoTotalQty" />
                                </div>
                            </div>
                            {/* End Col */}
                            <div className="col-sm-auto">
                                <div className="d-flex justify-content-center justify-content-sm-end">
                                    {/* Pagination */}
                                    <nav id="datatablePagination" aria-label="Activity pagination" />
                                </div>
                            </div>
                            {/* End Col */}
                        </div>
                        {/* End Row */}
                    </div>
                    {/* End Footer */}
                </div>
                {/* End Card */}
            </div>
            {/* Edit user */}
            <div className="modal fade" id="editUserModal" tabIndex={-1} aria-labelledby="editUserModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="editUserModalLabel">Edit user</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        {/* Body */}
                        <div className="modal-body">
                            {/* Nav Scroller */}
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
                                {/* Nav */}
                                <ul className="js-tabs-to-dropdown nav nav-segment nav-fill mb-5" id="editUserModalTab" role="tablist">
                                    <li className="nav-item">
                                        <a className="nav-link active" href="#profile" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" role="tab" aria-selected="true">
                                            <i className="bi-person me-1" /> Profile
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#billing-address" id="billing-address-tab" data-bs-toggle="tab" data-bs-target="#billing-address" role="tab" aria-selected="false">
                                            <i className="bi-building me-1" /> Billing address
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#change-password" id="change-password-tab" data-bs-toggle="tab" data-bs-target="#change-password" role="tab" aria-selected="false">
                                            <i className="bi-shield-lock me-1" /> Change password
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#notifications" id="notifications-tab" data-bs-toggle="tab" data-bs-target="#notifications" role="tab" aria-selected="false">
                                            <i className="bi-bell me-1" /> Notifications
                                        </a>
                                    </li>
                                </ul>
                                {/* End Nav */}
                            </div>
                            {/* End Nav Scroller */}
                            {/* Tab Content */}
                            <div className="tab-content" id="editUserModalTabContent">
                                <div className="tab-pane fade show active" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                    <form>
                                        {/* Profile Cover */}
                                        <div className="profile-cover">
                                            <div className="profile-cover-img-wrapper">
                                                <img id="editProfileCoverImgModal" className="profile-cover-img" src="./assets/img/1920x400/img1.jpg" alt="Image Description" />
                                                {/* Custom File Cover */}
                                                <div className="profile-cover-content profile-cover-uploader p-3">
                                                    <input type="file" className="js-file-attach profile-cover-uploader-input" id="editProfileCoverUplaoderModal" data-hs-file-attach-options="{
                                  &quot;textTarget&quot;: &quot;#editProfileCoverImgModal&quot;,
                                  &quot;mode&quot;: &quot;image&quot;,
                                  &quot;targetAttr&quot;: &quot;src&quot;,
                                  &quot;allowTypes&quot;: [&quot;.png&quot;, &quot;.jpeg&quot;, &quot;.jpg&quot;]
                               }" />
                                                    <label className="profile-cover-uploader-label btn btn-sm btn-white" htmlFor="editProfileCoverUplaoderModal">
                                                        <i className="bi-camera-fill" />
                                                        <span className="d-none d-sm-inline-block ms-1">Upload header</span>
                                                    </label>
                                                </div>
                                                {/* End Custom File Cover */}
                                            </div>
                                        </div>
                                        {/* End Profile Cover */}
                                        {/* Avatar */}
                                        <label className="avatar avatar-xxl avatar-circle avatar-uploader profile-cover-avatar mb-5" htmlFor="editAvatarUploaderModal">
                                            <img id="editAvatarImgModal" className="avatar-img" src="./assets/img/160x160/img9.jpg" alt="Image Description" />
                                            <input type="file" className="js-file-attach avatar-uploader-input" id="editAvatarUploaderModal" data-hs-file-attach-options="{
                              &quot;textTarget&quot;: &quot;#editAvatarImgModal&quot;,
                              &quot;mode&quot;: &quot;image&quot;,
                              &quot;targetAttr&quot;: &quot;src&quot;,
                              &quot;allowTypes&quot;: [&quot;.png&quot;, &quot;.jpeg&quot;, &quot;.jpg&quot;]
                           }" />
                                            <span className="avatar-uploader-trigger">
                                                <i className="bi-pencil-fill avatar-uploader-icon shadow-sm" />
                                            </span>
                                        </label>
                                        {/* End Avatar */}
                                        {/* Form */}
                                        <div className="row mb-4">
                                            <label htmlFor="editFirstNameModalLabel" className="col-sm-3 col-form-label form-label">Full name <i className="tio-help-outlined text-body ms-1" data-bs-toggle="tooltip" data-bs-placement="top" title="Displayed on public forums, such as Front." /></label>
                                            <div className="col-sm-9">
                                                <div className="input-group input-group-sm-vertical">
                                                    <input type="text" className="form-control" name="editFirstNameModal" id="editFirstNameModalLabel" placeholder="Your first name" aria-label="Your first name" defaultValue="Ella" />
                                                    <input type="text" className="form-control" name="editLastNameModal" id="editLastNameModalLabel" placeholder="Your last name" aria-label="Your last name" defaultValue="Lauda" />
                                                </div>
                                            </div>
                                        </div>
                                        {/* End Form */}
                                        {/* Form */}
                                        <div className="row mb-4">
                                            <label htmlFor="editEmailModalLabel" className="col-sm-3 col-form-label form-label">Email</label>
                                            <div className="col-sm-9">
                                                <input type="email" className="form-control" name="editEmailModal" id="editEmailModalLabel" placeholder="Email" aria-label="Email" defaultValue="ella@site.com" />
                                            </div>
                                        </div>
                                        {/* End Form */}
                                        {/* Form */}
                                        <div className="row mb-4">
                                            <label htmlFor="editPhoneLabel" className="col-sm-3 col-form-label form-label">Phone <span className="form-label-secondary">(Optional)</span></label>
                                            <div className="col-sm-9">
                                                <div className="input-group input-group-sm-vertical">
                                                    <input type="text" className="js-masked-input form-control" name="phone" id="editPhoneLabel" placeholder="+x(xxx)xxx-xx-xx" aria-label="+x(xxx)xxx-xx-xx" defaultValue="1(609)972-22-22" data-hs-mask-options="{
                                 &quot;template&quot;: &quot;+0(000)000-00-00&quot;
                               }" />
                                                    {/* Select */}
                                                    <div className="tom-select-custom">
                                                        <select className="js-select form-select" autoComplete="off" name="editPhoneSelect" data-hs-tom-select-options="{
                                  &quot;searchInDropdown&quot;: false,
                                  &quot;hideSearch&quot;: true
                                }">
                                                            <option value="Mobile" selected>Mobile</option>
                                                            <option value="Home">Home</option>
                                                            <option value="Work">Work</option>
                                                            <option value="Fax">Fax</option>
                                                            <option value="Direct">Direct</option>
                                                        </select>
                                                    </div>
                                                    {/* End Select */}
                                                </div>
                                            </div>
                                        </div>
                                        {/* End Form */}
                                        {/* Form */}
                                        <div className="row mb-4">
                                            <label htmlFor="editOrganizationModalLabel" className="col-sm-3 col-form-label form-label">Organization</label>
                                            <div className="col-sm-9">
                                                <input type="text" className="form-control" name="editOrganizationModal" id="editOrganizationModalLabel" placeholder="Your organization" aria-label="Your organization" defaultValue="Htmlstream" />
                                            </div>
                                        </div>
                                        {/* End Form */}
                                        {/* Form */}
                                        <div className="row mb-4">
                                            <label htmlFor="editDepartmentModalLabel" className="col-sm-3 col-form-label form-label">Department</label>
                                            <div className="col-sm-9">
                                                <input type="text" className="form-control" name="editDepartmentModal" id="editDepartmentModalLabel" placeholder="Your department" aria-label="Your department" />
                                            </div>
                                        </div>
                                        {/* End Form */}
                                        {/* Form */}
                                        <div className="row mb-4">
                                            <label className="col-sm-3 col-form-label form-label">Account type</label>
                                            <div className="col-sm-9">
                                                <div className="input-group input-group-sm-vertical">
                                                    {/* Radio Check */}
                                                    <label className="form-control" htmlFor="editUserModalAccountTypeModalRadio1">
                                                        <span className="form-check">
                                                            <input type="radio" className="form-check-input" name="editUserModalAccountTypeModalRadio" id="editUserModalAccountTypeModalRadio1" defaultChecked />
                                                            <span className="form-check-label">Individual</span>
                                                        </span>
                                                    </label>
                                                    {/* End Radio Check */}
                                                    {/* Radio Check */}
                                                    <label className="form-control" htmlFor="editUserModalAccountTypeModalRadio2">
                                                        <span className="form-check">
                                                            <input type="radio" className="form-check-input" name="editUserModalAccountTypeModalRadio" id="editUserModalAccountTypeModalRadio2" />
                                                            <span className="form-check-label">Company</span>
                                                        </span>
                                                    </label>
                                                    {/* End Radio Check */}
                                                </div>
                                            </div>
                                        </div>
                                        {/* End Form */}
                                        <div className="d-flex justify-content-end">
                                            <div className="d-flex gap-3">
                                                <button type="button" className="btn btn-white" data-bs-dismiss="modal" aria-label="Close">Cancel</button>
                                                <button type="submit" className="btn btn-primary">Save changes</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div className="tab-pane fade" id="billing-address" role="tabpanel" aria-labelledby="billing-address-tab">
                                    <form>
                                        {/* Form */}
                                        <div className="row mb-4">
                                            <label htmlFor="editLocationModalLabel" className="col-sm-3 col-form-label form-label">Location</label>
                                            <div className="col-sm-9">
                                                {/* Select */}
                                                <div className="tom-select-custom mb-4">
                                                    <select className="js-select form-select" id="editLocationModalLabel" autoComplete="off" data-hs-tom-select-options="{
                               &quot;placeholder&quot;: &quot;Select country&quot;
                             }">
                                                        <option value="AF" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/af.svg&quot; alt=&quot;Afghanistan Flag&quot; /><span class=&quot;text-truncate&quot;>Afghanistan</span></span>">Afghanistan</option>
                                                        <option value="AX" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/ax.svg&quot; alt=&quot;Aland Islands Flag&quot; /><span class=&quot;text-truncate&quot;>Aland Islands</span></span>">Aland Islands</option>
                                                        <option value="AL" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/al.svg&quot; alt=&quot;Albania Flag&quot; /><span class=&quot;text-truncate&quot;>Albania</span></span>">Albania</option>
                                                        <option value="DZ" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/dz.svg&quot; alt=&quot;Algeria Flag&quot; /><span class=&quot;text-truncate&quot;>Algeria</span></span>">Algeria</option>
                                                        <option value="AS" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/as.svg&quot; alt=&quot;American Samoa Flag&quot; /><span class=&quot;text-truncate&quot;>American Samoa</span></span>">American Samoa</option>
                                                        <option value="AD" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/ad.svg&quot; alt=&quot;Andorra Flag&quot; /><span class=&quot;text-truncate&quot;>Andorra</span></span>">Andorra</option>
                                                        <option value="AO" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/ao.svg&quot; alt=&quot;Angola Flag&quot; /><span class=&quot;text-truncate&quot;>Angola</span></span>">Angola</option>
                                                        <option value="AI" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/ai.svg&quot; alt=&quot;Anguilla Flag&quot; /><span class=&quot;text-truncate&quot;>Anguilla</span></span>">Anguilla</option>
                                                        <option value="AG" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/ag.svg&quot; alt=&quot;Antigua and Barbuda Flag&quot; /><span class=&quot;text-truncate&quot;>Antigua and Barbuda</span></span>">Antigua and Barbuda</option>
                                                        <option value="AR" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/ar.svg&quot; alt=&quot;Argentina Flag&quot; /><span class=&quot;text-truncate&quot;>Argentina</span></span>">Argentina</option>
                                                        <option value="AM" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/am.svg&quot; alt=&quot;Armenia Flag&quot; /><span class=&quot;text-truncate&quot;>Armenia</span></span>">Armenia</option>
                                                        <option value="AW" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/aw.svg&quot; alt=&quot;Aruba Flag&quot; /><span class=&quot;text-truncate&quot;>Aruba</span></span>">Aruba</option>
                                                        <option value="AU" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/au.svg&quot; alt=&quot;Australia Flag&quot; /><span class=&quot;text-truncate&quot;>Australia</span></span>">Australia</option>
                                                        <option value="AT" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/at.svg&quot; alt=&quot;Austria Flag&quot; /><span class=&quot;text-truncate&quot;>Austria</span></span>">Austria</option>
                                                        <option value="AZ" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/az.svg&quot; alt=&quot;Azerbaijan Flag&quot; /><span class=&quot;text-truncate&quot;>Azerbaijan</span></span>">Azerbaijan</option>
                                                        <option value="BS" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/bs.svg&quot; alt=&quot;Bahamas Flag&quot; /><span class=&quot;text-truncate&quot;>Bahamas</span></span>">Bahamas</option>
                                                        <option value="BH" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/bh.svg&quot; alt=&quot;Bahrain Flag&quot; /><span class=&quot;text-truncate&quot;>Bahrain</span></span>">Bahrain</option>
                                                        <option value="BD" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/bd.svg&quot; alt=&quot;Bangladesh Flag&quot; /><span class=&quot;text-truncate&quot;>Bangladesh</span></span>">Bangladesh</option>
                                                        <option value="BB" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/bb.svg&quot; alt=&quot;Barbados Flag&quot; /><span class=&quot;text-truncate&quot;>Barbados</span></span>">Barbados</option>
                                                        <option value="BY" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/by.svg&quot; alt=&quot;Belarus Flag&quot; /><span class=&quot;text-truncate&quot;>Belarus</span></span>">Belarus</option>
                                                        <option value="BE" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/be.svg&quot; alt=&quot;Belgium Flag&quot; /><span class=&quot;text-truncate&quot;>Belgium</span></span>">Belgium</option>
                                                        <option value="BZ" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/bz.svg&quot; alt=&quot;Belize Flag&quot; /><span class=&quot;text-truncate&quot;>Belize</span></span>">Belize</option>
                                                        <option value="BJ" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/bj.svg&quot; alt=&quot;Benin Flag&quot; /><span class=&quot;text-truncate&quot;>Benin</span></span>">Benin</option>
                                                        <option value="BM" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/bm.svg&quot; alt=&quot;Bermuda Flag&quot; /><span class=&quot;text-truncate&quot;>Bermuda</span></span>">Bermuda</option>
                                                        <option value="BT" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/bt.svg&quot; alt=&quot;Bhutan Flag&quot; /><span class=&quot;text-truncate&quot;>Bhutan</span></span>">Bhutan</option>
                                                        <option value="BO" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/bo.svg&quot; alt=&quot;Bolivia (Plurinational State of) Flag&quot; /><span class=&quot;text-truncate&quot;>Bolivia (Plurinational State of)</span></span>">Bolivia (Plurinational State of)</option>
                                                        <option value="BQ" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/bq.svg&quot; alt=&quot;Bonaire, Sint Eustatius and Saba Flag&quot; /><span class=&quot;text-truncate&quot;>Bonaire, Sint Eustatius and Saba</span></span>">Bonaire, Sint Eustatius and Saba</option>
                                                        <option value="BA" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/ba.svg&quot; alt=&quot;Bosnia and Herzegovina Flag&quot; /><span class=&quot;text-truncate&quot;>Bosnia and Herzegovina</span></span>">Bosnia and Herzegovina</option>
                                                        <option value="BW" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/bw.svg&quot; alt=&quot;Botswana Flag&quot; /><span class=&quot;text-truncate&quot;>Botswana</span></span>">Botswana</option>
                                                        <option value="BR" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/br.svg&quot; alt=&quot;Brazil Flag&quot; /><span class=&quot;text-truncate&quot;>Brazil</span></span>">Brazil</option>
                                                        <option value="IO" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/io.svg&quot; alt=&quot;British Indian Ocean Territory Flag&quot; /><span class=&quot;text-truncate&quot;>British Indian Ocean Territory</span></span>">British Indian Ocean Territory</option>
                                                        <option value="BN" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/bn.svg&quot; alt=&quot;Brunei Darussalam Flag&quot; /><span class=&quot;text-truncate&quot;>Brunei Darussalam</span></span>">Brunei Darussalam</option>
                                                        <option value="BG" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/bg.svg&quot; alt=&quot;Bulgaria Flag&quot; /><span class=&quot;text-truncate&quot;>Bulgaria</span></span>">Bulgaria</option>
                                                        <option value="BF" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/bf.svg&quot; alt=&quot;Burkina Faso Flag&quot; /><span class=&quot;text-truncate&quot;>Burkina Faso</span></span>">Burkina Faso</option>
                                                        <option value="BI" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/bi.svg&quot; alt=&quot;Burundi Flag&quot; /><span class=&quot;text-truncate&quot;>Burundi</span></span>">Burundi</option>
                                                        <option value="CV" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/cv.svg&quot; alt=&quot;Cabo Verde Flag&quot; /><span class=&quot;text-truncate&quot;>Cabo Verde</span></span>">Cabo Verde</option>
                                                        <option value="KH" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/kh.svg&quot; alt=&quot;Cambodia Flag&quot; /><span class=&quot;text-truncate&quot;>Cambodia</span></span>">Cambodia</option>
                                                        <option value="CM" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/cm.svg&quot; alt=&quot;Cameroon Flag&quot; /><span class=&quot;text-truncate&quot;>Cameroon</span></span>">Cameroon</option>
                                                        <option value="CA" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/ca.svg&quot; alt=&quot;Canada Flag&quot; /><span class=&quot;text-truncate&quot;>Canada</span></span>">Canada</option>
                                                        <option value="KY" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/ky.svg&quot; alt=&quot;Cayman Islands Flag&quot; /><span class=&quot;text-truncate&quot;>Cayman Islands</span></span>">Cayman Islands</option>
                                                        <option value="CF" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/cf.svg&quot; alt=&quot;Central African Republic Flag&quot; /><span class=&quot;text-truncate&quot;>Central African Republic</span></span>">Central African Republic</option>
                                                        <option value="TD" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/td.svg&quot; alt=&quot;Chad Flag&quot; /><span class=&quot;text-truncate&quot;>Chad</span></span>">Chad</option>
                                                        <option value="CL" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/cl.svg&quot; alt=&quot;Chile Flag&quot; /><span class=&quot;text-truncate&quot;>Chile</span></span>">Chile</option>
                                                        <option value="CN" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/cn.svg&quot; alt=&quot;China Flag&quot; /><span class=&quot;text-truncate&quot;>China</span></span>">China</option>
                                                        <option value="CX" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/cx.svg&quot; alt=&quot;Christmas Island Flag&quot; /><span class=&quot;text-truncate&quot;>Christmas Island</span></span>">Christmas Island</option>
                                                        <option value="CC" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/cc.svg&quot; alt=&quot;Cocos (Keeling) Islands Flag&quot; /><span class=&quot;text-truncate&quot;>Cocos (Keeling) Islands</span></span>">Cocos (Keeling) Islands</option>
                                                        <option value="CO" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/co.svg&quot; alt=&quot;Colombia Flag&quot; /><span class=&quot;text-truncate&quot;>Colombia</span></span>">Colombia</option>
                                                        <option value="KM" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/km.svg&quot; alt=&quot;Comoros Flag&quot; /><span class=&quot;text-truncate&quot;>Comoros</span></span>">Comoros</option>
                                                        <option value="CK" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/ck.svg&quot; alt=&quot;Cook Islands Flag&quot; /><span class=&quot;text-truncate&quot;>Cook Islands</span></span>">Cook Islands</option>
                                                        <option value="CR" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/cr.svg&quot; alt=&quot;Costa Rica Flag&quot; /><span class=&quot;text-truncate&quot;>Costa Rica</span></span>">Costa Rica</option>
                                                        <option value="HR" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/hr.svg&quot; alt=&quot;Croatia Flag&quot; /><span class=&quot;text-truncate&quot;>Croatia</span></span>">Croatia</option>
                                                        <option value="CU" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/cu.svg&quot; alt=&quot;Cuba Flag&quot; /><span class=&quot;text-truncate&quot;>Cuba</span></span>">Cuba</option>
                                                        <option value="CW" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/cw.svg&quot; alt=&quot;Curaçao Flag&quot; /><span class=&quot;text-truncate&quot;>Curaçao</span></span>">Curaçao</option>
                                                        <option value="CY" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/cy.svg&quot; alt=&quot;Cyprus Flag&quot; /><span class=&quot;text-truncate&quot;>Cyprus</span></span>">Cyprus</option>
                                                        <option value="CZ" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/cz.svg&quot; alt=&quot;Czech Republic Flag&quot; /><span class=&quot;text-truncate&quot;>Czech Republic</span></span>">Czech Republic</option>
                                                        <option value="CI" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/ci.svg&quot; alt=Côte d'Ivoire Flag&quot; /><span class=&quot;text-truncate&quot;>Côte d'Ivoire</span></span>">Côte d'Ivoire</option>
                                                        <option value="CD" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/cd.svg&quot; alt=&quot;Democratic Republic of the Congo Flag&quot; /><span class=&quot;text-truncate&quot;>Democratic Republic of the Congo</span></span>">Democratic Republic of the Congo</option>
                                                        <option value="DK" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/dk.svg&quot; alt=&quot;Denmark Flag&quot; /><span class=&quot;text-truncate&quot;>Denmark</span></span>">Denmark</option>
                                                        <option value="DJ" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/dj.svg&quot; alt=&quot;Djibouti Flag&quot; /><span class=&quot;text-truncate&quot;>Djibouti</span></span>">Djibouti</option>
                                                        <option value="DM" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/dm.svg&quot; alt=&quot;Dominica Flag&quot; /><span class=&quot;text-truncate&quot;>Dominica</span></span>">Dominica</option>
                                                        <option value="DO" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/do.svg&quot; alt=&quot;Dominican Republic Flag&quot; /><span class=&quot;text-truncate&quot;>Dominican Republic</span></span>">Dominican Republic</option>
                                                        <option value="EC" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/ec.svg&quot; alt=&quot;Ecuador Flag&quot; /><span class=&quot;text-truncate&quot;>Ecuador</span></span>">Ecuador</option>
                                                        <option value="EG" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/eg.svg&quot; alt=&quot;Egypt Flag&quot; /><span class=&quot;text-truncate&quot;>Egypt</span></span>">Egypt</option>
                                                        <option value="SV" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/sv.svg&quot; alt=&quot;El Salvador Flag&quot; /><span class=&quot;text-truncate&quot;>El Salvador</span></span>">El Salvador</option>
                                                        <option value="GB-ENG" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/gb-eng.svg&quot; alt=&quot;England Flag&quot; /><span class=&quot;text-truncate&quot;>England</span></span>">England</option>
                                                        <option value="GQ" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/gq.svg&quot; alt=&quot;Equatorial Guinea Flag&quot; /><span class=&quot;text-truncate&quot;>Equatorial Guinea</span></span>">Equatorial Guinea</option>
                                                        <option value="ER" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/er.svg&quot; alt=&quot;Eritrea Flag&quot; /><span class=&quot;text-truncate&quot;>Eritrea</span></span>">Eritrea</option>
                                                        <option value="EE" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/ee.svg&quot; alt=&quot;Estonia Flag&quot; /><span class=&quot;text-truncate&quot;>Estonia</span></span>">Estonia</option>
                                                        <option value="ET" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/et.svg&quot; alt=&quot;Ethiopia Flag&quot; /><span class=&quot;text-truncate&quot;>Ethiopia</span></span>">Ethiopia</option>
                                                        <option value="FK" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/fk.svg&quot; alt=&quot;Falkland Islands Flag&quot; /><span class=&quot;text-truncate&quot;>Falkland Islands</span></span>">Falkland Islands</option>
                                                        <option value="FO" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/fo.svg&quot; alt=&quot;Faroe Islands Flag&quot; /><span class=&quot;text-truncate&quot;>Faroe Islands</span></span>">Faroe Islands</option>
                                                        <option value="FM" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/fm.svg&quot; alt=&quot;Federated States of Micronesia Flag&quot; /><span class=&quot;text-truncate&quot;>Federated States of Micronesia</span></span>">Federated States of Micronesia</option>
                                                        <option value="FJ" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/fj.svg&quot; alt=&quot;Fiji Flag&quot; /><span class=&quot;text-truncate&quot;>Fiji</span></span>">Fiji</option>
                                                        <option value="FI" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/fi.svg&quot; alt=&quot;Finland Flag&quot; /><span class=&quot;text-truncate&quot;>Finland</span></span>">Finland</option>
                                                        <option value="FR" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/fr.svg&quot; alt=&quot;France Flag&quot; /><span class=&quot;text-truncate&quot;>France</span></span>">France</option>
                                                        <option value="GF" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/gf.svg&quot; alt=&quot;French Guiana Flag&quot; /><span class=&quot;text-truncate&quot;>French Guiana</span></span>">French Guiana</option>
                                                        <option value="PF" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/pf.svg&quot; alt=&quot;French Polynesia Flag&quot; /><span class=&quot;text-truncate&quot;>French Polynesia</span></span>">French Polynesia</option>
                                                        <option value="TF" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/tf.svg&quot; alt=&quot;French Southern Territories Flag&quot; /><span class=&quot;text-truncate&quot;>French Southern Territories</span></span>">French Southern Territories</option>
                                                        <option value="GA" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/ga.svg&quot; alt=&quot;Gabon Flag&quot; /><span class=&quot;text-truncate&quot;>Gabon</span></span>">Gabon</option>
                                                        <option value="GM" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/gm.svg&quot; alt=&quot;Gambia Flag&quot; /><span class=&quot;text-truncate&quot;>Gambia</span></span>">Gambia</option>
                                                        <option value="GE" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/ge.svg&quot; alt=&quot;Georgia Flag&quot; /><span class=&quot;text-truncate&quot;>Georgia</span></span>">Georgia</option>
                                                        <option value="DE" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/de.svg&quot; alt=&quot;Germany Flag&quot; /><span class=&quot;text-truncate&quot;>Germany</span></span>">Germany</option>
                                                        <option value="GH" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/gh.svg&quot; alt=&quot;Ghana Flag&quot; /><span class=&quot;text-truncate&quot;>Ghana</span></span>">Ghana</option>
                                                        <option value="GI" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/gi.svg&quot; alt=&quot;Gibraltar Flag&quot; /><span class=&quot;text-truncate&quot;>Gibraltar</span></span>">Gibraltar</option>
                                                        <option value="GR" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/gr.svg&quot; alt=&quot;Greece Flag&quot; /><span class=&quot;text-truncate&quot;>Greece</span></span>">Greece</option>
                                                        <option value="GL" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/gl.svg&quot; alt=&quot;Greenland Flag&quot; /><span class=&quot;text-truncate&quot;>Greenland</span></span>">Greenland</option>
                                                        <option value="GD" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/gd.svg&quot; alt=&quot;Grenada Flag&quot; /><span class=&quot;text-truncate&quot;>Grenada</span></span>">Grenada</option>
                                                        <option value="GP" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/gp.svg&quot; alt=&quot;Guadeloupe Flag&quot; /><span class=&quot;text-truncate&quot;>Guadeloupe</span></span>">Guadeloupe</option>
                                                        <option value="GU" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/gu.svg&quot; alt=&quot;Guam Flag&quot; /><span class=&quot;text-truncate&quot;>Guam</span></span>">Guam</option>
                                                        <option value="GT" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/gt.svg&quot; alt=&quot;Guatemala Flag&quot; /><span class=&quot;text-truncate&quot;>Guatemala</span></span>">Guatemala</option>
                                                        <option value="GG" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/gg.svg&quot; alt=&quot;Guernsey Flag&quot; /><span class=&quot;text-truncate&quot;>Guernsey</span></span>">Guernsey</option>
                                                        <option value="GN" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/gn.svg&quot; alt=&quot;Guinea Flag&quot; /><span class=&quot;text-truncate&quot;>Guinea</span></span>">Guinea</option>
                                                        <option value="GW" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/gw.svg&quot; alt=&quot;Guinea-Bissau Flag&quot; /><span class=&quot;text-truncate&quot;>Guinea-Bissau</span></span>">Guinea-Bissau</option>
                                                        <option value="GY" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/gy.svg&quot; alt=&quot;Guyana Flag&quot; /><span class=&quot;text-truncate&quot;>Guyana</span></span>">Guyana</option>
                                                        <option value="HT" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/ht.svg&quot; alt=&quot;Haiti Flag&quot; /><span class=&quot;text-truncate&quot;>Haiti</span></span>">Haiti</option>
                                                        <option value="VA" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/va.svg&quot; alt=&quot;Holy See Flag&quot; /><span class=&quot;text-truncate&quot;>Holy See</span></span>">Holy See</option>
                                                        <option value="HN" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/hn.svg&quot; alt=&quot;Honduras Flag&quot; /><span class=&quot;text-truncate&quot;>Honduras</span></span>">Honduras</option>
                                                        <option value="HK" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/hk.svg&quot; alt=&quot;Hong Kong Flag&quot; /><span class=&quot;text-truncate&quot;>Hong Kong</span></span>">Hong Kong</option>
                                                        <option value="HU" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/hu.svg&quot; alt=&quot;Hungary Flag&quot; /><span class=&quot;text-truncate&quot;>Hungary</span></span>">Hungary</option>
                                                        <option value="IS" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/is.svg&quot; alt=&quot;Iceland Flag&quot; /><span class=&quot;text-truncate&quot;>Iceland</span></span>">Iceland</option>
                                                        <option value="IN" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/in.svg&quot; alt=&quot;India Flag&quot; /><span class=&quot;text-truncate&quot;>India</span></span>">India</option>
                                                        <option value="ID" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/id.svg&quot; alt=&quot;Indonesia Flag&quot; /><span class=&quot;text-truncate&quot;>Indonesia</span></span>">Indonesia</option>
                                                        <option value="IR" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/ir.svg&quot; alt=&quot;Iran (Islamic Republic of) Flag&quot; /><span class=&quot;text-truncate&quot;>Iran (Islamic Republic of)</span></span>">Iran (Islamic Republic of)</option>
                                                        <option value="IQ" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/iq.svg&quot; alt=&quot;Iraq Flag&quot; /><span class=&quot;text-truncate&quot;>Iraq</span></span>">Iraq</option>
                                                        <option value="IE" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/ie.svg&quot; alt=&quot;Ireland Flag&quot; /><span class=&quot;text-truncate&quot;>Ireland</span></span>">Ireland</option>
                                                        <option value="IM" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/im.svg&quot; alt=&quot;Isle of Man Flag&quot; /><span class=&quot;text-truncate&quot;>Isle of Man</span></span>">Isle of Man</option>
                                                        <option value="IL" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/il.svg&quot; alt=&quot;Israel Flag&quot; /><span class=&quot;text-truncate&quot;>Israel</span></span>">Israel</option>
                                                        <option value="IT" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/it.svg&quot; alt=&quot;Italy Flag&quot; /><span class=&quot;text-truncate&quot;>Italy</span></span>">Italy</option>
                                                        <option value="JM" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/jm.svg&quot; alt=&quot;Jamaica Flag&quot; /><span class=&quot;text-truncate&quot;>Jamaica</span></span>">Jamaica</option>
                                                        <option value="JP" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/jp.svg&quot; alt=&quot;Japan Flag&quot; /><span class=&quot;text-truncate&quot;>Japan</span></span>">Japan</option>
                                                        <option value="JE" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/je.svg&quot; alt=&quot;Jersey Flag&quot; /><span class=&quot;text-truncate&quot;>Jersey</span></span>">Jersey</option>
                                                        <option value="JO" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/jo.svg&quot; alt=&quot;Jordan Flag&quot; /><span class=&quot;text-truncate&quot;>Jordan</span></span>">Jordan</option>
                                                        <option value="KZ" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/kz.svg&quot; alt=&quot;Kazakhstan Flag&quot; /><span class=&quot;text-truncate&quot;>Kazakhstan</span></span>">Kazakhstan</option>
                                                        <option value="KE" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/ke.svg&quot; alt=&quot;Kenya Flag&quot; /><span class=&quot;text-truncate&quot;>Kenya</span></span>">Kenya</option>
                                                        <option value="KI" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/ki.svg&quot; alt=&quot;Kiribati Flag&quot; /><span class=&quot;text-truncate&quot;>Kiribati</span></span>">Kiribati</option>
                                                        <option value="KW" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/kw.svg&quot; alt=&quot;Kuwait Flag&quot; /><span class=&quot;text-truncate&quot;>Kuwait</span></span>">Kuwait</option>
                                                        <option value="KG" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/kg.svg&quot; alt=&quot;Kyrgyzstan Flag&quot; /><span class=&quot;text-truncate&quot;>Kyrgyzstan</span></span>">Kyrgyzstan</option>
                                                        <option value="LA" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/la.svg&quot; alt=&quot;Laos Flag&quot; /><span class=&quot;text-truncate&quot;>Laos</span></span>">Laos</option>
                                                        <option value="LV" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/lv.svg&quot; alt=&quot;Latvia Flag&quot; /><span class=&quot;text-truncate&quot;>Latvia</span></span>">Latvia</option>
                                                        <option value="LB" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/lb.svg&quot; alt=&quot;Lebanon Flag&quot; /><span class=&quot;text-truncate&quot;>Lebanon</span></span>">Lebanon</option>
                                                        <option value="LS" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/ls.svg&quot; alt=&quot;Lesotho Flag&quot; /><span class=&quot;text-truncate&quot;>Lesotho</span></span>">Lesotho</option>
                                                        <option value="LR" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/lr.svg&quot; alt=&quot;Liberia Flag&quot; /><span class=&quot;text-truncate&quot;>Liberia</span></span>">Liberia</option>
                                                        <option value="LY" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/ly.svg&quot; alt=&quot;Libya Flag&quot; /><span class=&quot;text-truncate&quot;>Libya</span></span>">Libya</option>
                                                        <option value="LI" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/li.svg&quot; alt=&quot;Liechtenstein Flag&quot; /><span class=&quot;text-truncate&quot;>Liechtenstein</span></span>">Liechtenstein</option>
                                                        <option value="LT" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/lt.svg&quot; alt=&quot;Lithuania Flag&quot; /><span class=&quot;text-truncate&quot;>Lithuania</span></span>">Lithuania</option>
                                                        <option value="LU" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/lu.svg&quot; alt=&quot;Luxembourg Flag&quot; /><span class=&quot;text-truncate&quot;>Luxembourg</span></span>">Luxembourg</option>
                                                        <option value="MO" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/mo.svg&quot; alt=&quot;Macau Flag&quot; /><span class=&quot;text-truncate&quot;>Macau</span></span>">Macau</option>
                                                        <option value="MG" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/mg.svg&quot; alt=&quot;Madagascar Flag&quot; /><span class=&quot;text-truncate&quot;>Madagascar</span></span>">Madagascar</option>
                                                        <option value="MW" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/mw.svg&quot; alt=&quot;Malawi Flag&quot; /><span class=&quot;text-truncate&quot;>Malawi</span></span>">Malawi</option>
                                                        <option value="MY" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/my.svg&quot; alt=&quot;Malaysia Flag&quot; /><span class=&quot;text-truncate&quot;>Malaysia</span></span>">Malaysia</option>
                                                        <option value="MV" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/mv.svg&quot; alt=&quot;Maldives Flag&quot; /><span class=&quot;text-truncate&quot;>Maldives</span></span>">Maldives</option>
                                                        <option value="ML" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/ml.svg&quot; alt=&quot;Mali Flag&quot; /><span class=&quot;text-truncate&quot;>Mali</span></span>">Mali</option>
                                                        <option value="MT" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/mt.svg&quot; alt=&quot;Malta Flag&quot; /><span class=&quot;text-truncate&quot;>Malta</span></span>">Malta</option>
                                                        <option value="MH" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/mh.svg&quot; alt=&quot;Marshall Islands Flag&quot; /><span class=&quot;text-truncate&quot;>Marshall Islands</span></span>">Marshall Islands</option>
                                                        <option value="MQ" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/mq.svg&quot; alt=&quot;Martinique Flag&quot; /><span class=&quot;text-truncate&quot;>Martinique</span></span>">Martinique</option>
                                                        <option value="MR" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/mr.svg&quot; alt=&quot;Mauritania Flag&quot; /><span class=&quot;text-truncate&quot;>Mauritania</span></span>">Mauritania</option>
                                                        <option value="MU" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/mu.svg&quot; alt=&quot;Mauritius Flag&quot; /><span class=&quot;text-truncate&quot;>Mauritius</span></span>">Mauritius</option>
                                                        <option value="YT" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/yt.svg&quot; alt=&quot;Mayotte Flag&quot; /><span class=&quot;text-truncate&quot;>Mayotte</span></span>">Mayotte</option>
                                                        <option value="MX" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/mx.svg&quot; alt=&quot;Mexico Flag&quot; /><span class=&quot;text-truncate&quot;>Mexico</span></span>">Mexico</option>
                                                        <option value="MD" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/md.svg&quot; alt=&quot;Moldova Flag&quot; /><span class=&quot;text-truncate&quot;>Moldova</span></span>">Moldova</option>
                                                        <option value="MC" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/mc.svg&quot; alt=&quot;Monaco Flag&quot; /><span class=&quot;text-truncate&quot;>Monaco</span></span>">Monaco</option>
                                                        <option value="MN" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/mn.svg&quot; alt=&quot;Mongolia Flag&quot; /><span class=&quot;text-truncate&quot;>Mongolia</span></span>">Mongolia</option>
                                                        <option value="ME" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/me.svg&quot; alt=&quot;Montenegro Flag&quot; /><span class=&quot;text-truncate&quot;>Montenegro</span></span>">Montenegro</option>
                                                        <option value="MS" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/ms.svg&quot; alt=&quot;Montserrat Flag&quot; /><span class=&quot;text-truncate&quot;>Montserrat</span></span>">Montserrat</option>
                                                        <option value="MA" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/ma.svg&quot; alt=&quot;Morocco Flag&quot; /><span class=&quot;text-truncate&quot;>Morocco</span></span>">Morocco</option>
                                                        <option value="MZ" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/mz.svg&quot; alt=&quot;Mozambique Flag&quot; /><span class=&quot;text-truncate&quot;>Mozambique</span></span>">Mozambique</option>
                                                        <option value="MM" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/mm.svg&quot; alt=&quot;Myanmar Flag&quot; /><span class=&quot;text-truncate&quot;>Myanmar</span></span>">Myanmar</option>
                                                        <option value="NA" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/na.svg&quot; alt=&quot;Namibia Flag&quot; /><span class=&quot;text-truncate&quot;>Namibia</span></span>">Namibia</option>
                                                        <option value="NR" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/nr.svg&quot; alt=&quot;Nauru Flag&quot; /><span class=&quot;text-truncate&quot;>Nauru</span></span>">Nauru</option>
                                                        <option value="NP" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/np.svg&quot; alt=&quot;Nepal Flag&quot; /><span class=&quot;text-truncate&quot;>Nepal</span></span>">Nepal</option>
                                                        <option value="NL" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/nl.svg&quot; alt=&quot;Netherlands Flag&quot; /><span class=&quot;text-truncate&quot;>Netherlands</span></span>">Netherlands</option>
                                                        <option value="NC" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/nc.svg&quot; &quot;alt=&quot;New Caledonia Flag&quot; /><span class=&quot;text-truncate&quot;>New Caledonia</span></span>">New Caledonia</option>
                                                        <option value="NZ" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/nz.svg&quot; alt=&quot;New Zealand Flag&quot; /><span class=&quot;text-truncate&quot;>New Zealand</span></span>">New Zealand</option>
                                                        <option value="NI" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/ni.svg&quot; alt=&quot;Nicaragua Flag&quot; /><span class=&quot;text-truncate&quot;>Nicaragua</span></span>">Nicaragua</option>
                                                        <option value="NE" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/ne.svg&quot; alt=&quot;Niger Flag&quot; /><span class=&quot;text-truncate&quot;>Niger</span></span>">Niger</option>
                                                        <option value="NG" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/ng.svg&quot; alt=&quot;Nigeria Flag&quot; /><span class=&quot;text-truncate&quot;>Nigeria</span></span>">Nigeria</option>
                                                        <option value="NU" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/nu.svg&quot; alt=&quot;Niue Flag&quot; /><span class=&quot;text-truncate&quot;>Niue</span></span>">Niue</option>
                                                        <option value="NF" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/nf.svg&quot; alt=&quot;Norfolk Island Flag&quot; /><span class=&quot;text-truncate&quot;>Norfolk Island</span></span>">Norfolk Island</option>
                                                        <option value="KP" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/kp.svg&quot; alt=&quot;North Korea Flag&quot; /><span class=&quot;text-truncate&quot;>North Korea</span></span>">North Korea</option>
                                                        <option value="MK" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/mk.svg&quot; alt=&quot;North Macedonia Flag&quot; /><span class=&quot;text-truncate&quot;>North Macedonia</span></span>">North Macedonia</option>
                                                        <option value="GB-NIR" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/gb-nir.svg&quot; alt=&quot;Northern Ireland Flag&quot; /><span class=&quot;text-truncate&quot;>Northern Ireland</span></span>">Northern Ireland</option>
                                                        <option value="MP" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/mp.svg&quot; alt=&quot;Northern Mariana Islands Flag&quot; /><span class=&quot;text-truncate&quot;>Northern Mariana Islands</span></span>">Northern Mariana Islands</option>
                                                        <option value="NO" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/no.svg&quot; alt=&quot;Norway Flag&quot; /><span class=&quot;text-truncate&quot;>Norway</span></span>">Norway</option>
                                                        <option value="OM" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/om.svg&quot; alt=&quot;Oman Flag&quot; /><span class=&quot;text-truncate&quot;>Oman</span></span>">Oman</option>
                                                        <option value="PK" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/pk.svg&quot; alt=&quot;Pakistan Flag&quot; /><span class=&quot;text-truncate&quot;>Pakistan</span></span>">Pakistan</option>
                                                        <option value="PW" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/pw.svg&quot; alt=&quot;Palau Flag&quot; /><span class=&quot;text-truncate&quot;>Palau</span></span>">Palau</option>
                                                        <option value="PA" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/pa.svg&quot; alt=&quot;Panama Flag&quot; /><span class=&quot;text-truncate&quot;>Panama</span></span>">Panama</option>
                                                        <option value="PG" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/pg.svg&quot; alt=&quot;Papua New Guinea Flag&quot; /><span class=&quot;text-truncate&quot;>Papua New Guinea</span></span>">Papua New Guinea</option>
                                                        <option value="PY" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/py.svg&quot; alt=&quot;Paraguay Flag&quot; /><span class=&quot;text-truncate&quot;>Paraguay</span></span>">Paraguay</option>
                                                        <option value="PE" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/pe.svg&quot; alt=&quot;Peru Flag&quot; /><span class=&quot;text-truncate&quot;>Peru</span></span>">Peru</option>
                                                        <option value="PH" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/ph.svg&quot; alt=&quot;Philippines Flag&quot; /><span class=&quot;text-truncate&quot;>Philippines</span></span>">Philippines</option>
                                                        <option value="PN" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/pn.svg&quot; alt=&quot;Pitcairn Flag&quot; /><span class=&quot;text-truncate&quot;>Pitcairn</span></span>">Pitcairn</option>
                                                        <option value="PL" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/pl.svg&quot; alt=&quot;Poland Flag&quot; /><span class=&quot;text-truncate&quot;>Poland</span></span>">Poland</option>
                                                        <option value="PT" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/pt.svg&quot; alt=&quot;Portugal Flag&quot; /><span class=&quot;text-truncate&quot;>Portugal</span></span>">Portugal</option>
                                                        <option value="PR" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/pr.svg&quot; alt=&quot;Puerto Rico Flag&quot; /><span class=&quot;text-truncate&quot;>Puerto Rico</span></span>">Puerto Rico</option>
                                                        <option value="QA" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/qa.svg&quot; alt=&quot;Qatar Flag&quot; /><span class=&quot;text-truncate&quot;>Qatar</span></span>">Qatar</option>
                                                        <option value="CG" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/cg.svg&quot; alt=&quot;Republic of the Congo Flag&quot; /><span class=&quot;text-truncate&quot;>Republic of the Congo</span></span>">Republic of the Congo</option>
                                                        <option value="RO" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/ro.svg&quot; alt=&quot;Romania Flag&quot; /><span class=&quot;text-truncate&quot;>Romania</span></span>">Romania</option>
                                                        <option value="RU" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/ru.svg&quot; alt=&quot;Russia Flag&quot; /><span class=&quot;text-truncate&quot;>Russia</span></span>">Russia</option>
                                                        <option value="RW" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/rw.svg&quot; alt=&quot;Rwanda Flag&quot; /><span class=&quot;text-truncate&quot;>Rwanda</span></span>">Rwanda</option>
                                                        <option value="RE" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/re.svg&quot; alt=&quot;Réunion Flag&quot; /><span class=&quot;text-truncate&quot;>Réunion</span></span>">Réunion</option>
                                                        <option value="BL" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/bl.svg&quot; alt=&quot;Saint Barthélemy Flag&quot; /><span class=&quot;text-truncate&quot;>Saint Barthélemy</span></span>">Saint Barthélemy</option>
                                                        <option value="SH" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/sh.svg&quot; alt=&quot;Saint Helena, Ascension and Tristan da Cunha Flag&quot; /><span class=&quot;text-truncate&quot;>Saint Helena, Ascension and Tristan da Cunha</span></span>">Saint Helena, Ascension and Tristan da Cunha</option>
                                                        <option value="KN" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/kn.svg&quot; alt=&quot;Saint Kitts and Nevis Flag&quot; /><span class=&quot;text-truncate&quot;>Saint Kitts and Nevis</span></span>">Saint Kitts and Nevis</option>
                                                        <option value="LC" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/lc.svg&quot; alt=&quot;Saint Lucia Flag&quot; /><span class=&quot;text-truncate&quot;>Saint Lucia</span></span>">Saint Lucia</option>
                                                        <option value="MF" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/mf.svg&quot; alt=&quot;Saint Martin Flag&quot; /><span class=&quot;text-truncate&quot;>Saint Martin</span></span>">Saint Martin</option>
                                                        <option value="PM" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/pm.svg&quot; alt=&quot;Saint Pierre and Miquelon Flag&quot; /><span class=&quot;text-truncate&quot;>Saint Pierre and Miquelon</span></span>">Saint Pierre and Miquelon</option>
                                                        <option value="VC" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/vc.svg&quot; alt=&quot;Saint Vincent and the Grenadines Flag&quot; /><span class=&quot;text-truncate&quot;>Saint Vincent and the Grenadines</span></span>">Saint Vincent and the Grenadines</option>
                                                        <option value="WS" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/ws.svg&quot; alt=&quot;Samoa Flag&quot; /><span class=&quot;text-truncate&quot;>Samoa</span></span>">Samoa</option>
                                                        <option value="SM" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/sm.svg&quot; &quot;alt=&quot;San Marino Flag&quot; /><span class=&quot;text-truncate&quot;>San Marino</span></span>">San Marino</option>
                                                        <option value="ST" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/st.svg&quot; &quot;alt=&quot;Sao Tome and Principe Flag&quot; /><span class=&quot;text-truncate&quot;>Sao Tome and Principe</span></span>">Sao Tome and Principe</option>
                                                        <option value="SA" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/sa.svg&quot; alt=&quot;Saudi Arabia Flag&quot; /><span class=&quot;text-truncate&quot;>Saudi Arabia</span></span>">Saudi Arabia</option>
                                                        <option value="GB-SCT" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/gb-sct.svg&quot; alt=&quot;Scotland Flag&quot; /><span class=&quot;text-truncate&quot;>Scotland</span></span>">Scotland</option>
                                                        <option value="SN" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/sn.svg&quot; alt=&quot;Senegal Flag&quot; /><span class=&quot;text-truncate&quot;>Senegal</span></span>">Senegal</option>
                                                        <option value="RS" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/rs.svg&quot; alt=&quot;Serbia Flag&quot; /><span class=&quot;text-truncate&quot;>Serbia</span></span>">Serbia</option>
                                                        <option value="SC" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/sc.svg&quot; alt=&quot;Seychelles Flag&quot; /><span class=&quot;text-truncate&quot;>Seychelles</span></span>">Seychelles</option>
                                                        <option value="SL" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/sl.svg&quot; alt=&quot;Sierra Leone Flag&quot; /><span class=&quot;text-truncate&quot;>Sierra Leone</span></span>">Sierra Leone</option>
                                                        <option value="SG" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/sg.svg&quot; alt=&quot;Singapore Flag&quot; /><span class=&quot;text-truncate&quot;>Singapore</span></span>">Singapore</option>
                                                        <option value="SX" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/sx.svg&quot; alt=&quot;Sint Maarten Flag&quot; /><span class=&quot;text-truncate&quot;>Sint Maarten</span></span>">Sint Maarten</option>
                                                        <option value="SK" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/sk.svg&quot; alt=&quot;Slovakia Flag&quot; /><span class=&quot;text-truncate&quot;>Slovakia</span></span>">Slovakia</option>
                                                        <option value="SI" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/si.svg&quot; alt=&quot;Slovenia Flag&quot; /><span class=&quot;text-truncate&quot;>Slovenia</span></span>">Slovenia</option>
                                                        <option value="SB" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/sb.svg&quot; alt=&quot;Solomon Islands Flag&quot; /><span class=&quot;text-truncate&quot;>Solomon Islands</span></span>">Solomon Islands</option>
                                                        <option value="SO" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/so.svg&quot; alt=&quot;Somalia Flag&quot; /><span class=&quot;text-truncate&quot;>Somalia</span></span>">Somalia</option>
                                                        <option value="ZA" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/za.svg&quot; alt=&quot;South Africa Flag&quot; /><span class=&quot;text-truncate&quot;>South Africa</span></span>">South Africa</option>
                                                        <option value="GS" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/gs.svg&quot; alt=&quot;South Georgia and the South Sandwich Islands Flag&quot; /><span class=&quot;text-truncate&quot;>South Georgia and the South Sandwich Islands</span></span>">South Georgia and the South Sandwich Islands</option>
                                                        <option value="KR" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/kr.svg&quot; alt=&quot;South Korea Flag&quot; /><span class=&quot;text-truncate&quot;>South Korea</span></span>">South Korea</option>
                                                        <option value="SS" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/ss.svg&quot; alt=&quot;South Sudan Flag&quot; /><span class=&quot;text-truncate&quot;>South Sudan</span></span>">South Sudan</option>
                                                        <option value="ES" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/es.svg&quot; alt=&quot;Spain Flag&quot; /><span class=&quot;text-truncate&quot;>Spain</span></span>">Spain</option>
                                                        <option value="LK" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/lk.svg&quot; &quot;alt=&quot;Sri Lanka Flag&quot; /><span class=&quot;text-truncate&quot;>Sri Lanka</span></span>">Sri Lanka</option>
                                                        <option value="PS" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/ps.svg&quot; alt=&quot;State of Palestine Flag&quot; /><span class=&quot;text-truncate&quot;>State of Palestine</span></span>">State of Palestine</option>
                                                        <option value="SD" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/sd.svg&quot; alt=&quot;Sudan Flag&quot; /><span class=&quot;text-truncate&quot;>Sudan</span></span>">Sudan</option>
                                                        <option value="SR" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/sr.svg&quot; alt=&quot;Suriname Flag&quot; /><span class=&quot;text-truncate&quot;>Suriname</span></span>">Suriname</option>
                                                        <option value="SJ" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/sj.svg&quot; alt=&quot;Svalbard and Jan Mayen Flag&quot; /><span class=&quot;text-truncate&quot;>Svalbard and Jan Mayen</span></span>">Svalbard and Jan Mayen</option>
                                                        <option value="SZ" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/sz.svg&quot; alt=&quot;Swaziland Flag&quot; /><span class=&quot;text-truncate&quot;>Swaziland</span></span>">Swaziland</option>
                                                        <option value="SE" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/se.svg&quot; alt=&quot;Sweden Flag&quot; /><span class=&quot;text-truncate&quot;>Sweden</span></span>">Sweden</option>
                                                        <option value="CH" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/ch.svg&quot; alt=&quot;Switzerland Flag&quot; /><span class=&quot;text-truncate&quot;>Switzerland</span></span>">Switzerland</option>
                                                        <option value="SY" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/sy.svg&quot; alt=&quot;Syrian Arab Republic Flag&quot; /><span class=&quot;text-truncate&quot;>Syrian Arab Republic</span></span>">Syrian Arab Republic</option>
                                                        <option value="TW" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/tw.svg&quot; alt=&quot;Taiwan Flag&quot; /><span class=&quot;text-truncate&quot;>Taiwan</span></span>">Taiwan</option>
                                                        <option value="TJ" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/tj.svg&quot; alt=&quot;Tajikistan Flag&quot; /><span class=&quot;text-truncate&quot;>Tajikistan</span></span>">Tajikistan</option>
                                                        <option value="TZ" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/tz.svg&quot; alt=&quot;Tanzania Flag&quot; /><span class=&quot;text-truncate&quot;>Tanzania</span></span>">Tanzania</option>
                                                        <option value="TH" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/th.svg&quot; alt=&quot;Thailand Flag&quot; /><span class=&quot;text-truncate&quot;>Thailand</span></span>">Thailand</option>
                                                        <option value="TL" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/tl.svg&quot; alt=&quot;Timor-Leste Flag&quot; /><span class=&quot;text-truncate&quot;>Timor-Leste</span></span>">Timor-Leste</option>
                                                        <option value="TG" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/tg.svg&quot; alt=&quot;Togo Flag&quot; /><span class=&quot;text-truncate&quot;>Togo</span></span>">Togo</option>
                                                        <option value="TK" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/tk.svg&quot; alt=&quot;Tokelau Flag&quot; /><span class=&quot;text-truncate&quot;>Tokelau</span></span>">Tokelau</option>
                                                        <option value="TO" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/to.svg&quot; alt=&quot;Tonga Flag&quot; /><span class=&quot;text-truncate&quot;>Tonga</span></span>">Tonga</option>
                                                        <option value="TT" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/tt.svg&quot; alt=&quot;Trinidad and Tobago Flag&quot; /><span class=&quot;text-truncate&quot;>Trinidad and Tobago</span></span>">Trinidad and Tobago</option>
                                                        <option value="TN" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/tn.svg&quot; alt=&quot;Tunisia Flag&quot; /><span class=&quot;text-truncate&quot;>Tunisia</span></span>">Tunisia</option>
                                                        <option value="TR" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/tr.svg&quot; alt=&quot;Turkey Flag&quot; /><span class=&quot;text-truncate&quot;>Turkey</span></span>">Turkey</option>
                                                        <option value="TM" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/tm.svg&quot; alt=&quot;Turkmenistan Flag&quot; /><span class=&quot;text-truncate&quot;>Turkmenistan</span></span>">Turkmenistan</option>
                                                        <option value="TC" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/tc.svg&quot; alt=&quot;Turks and Caicos Islands Flag&quot; /><span class=&quot;text-truncate&quot;>Turks and Caicos Islands</span></span>">Turks and Caicos Islands</option>
                                                        <option value="TV" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/tv.svg&quot; alt=&quot;Tuvalu Flag&quot; /><span class=&quot;text-truncate&quot;>Tuvalu</span></span>">Tuvalu</option>
                                                        <option value="UG" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/ug.svg&quot; alt=&quot;Uganda Flag&quot; /><span class=&quot;text-truncate&quot;>Uganda</span></span>">Uganda</option>
                                                        <option value="UA" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/ua.svg&quot; alt=&quot;Ukraine Flag&quot; /><span class=&quot;text-truncate&quot;>Ukraine</span></span>">Ukraine</option>
                                                        <option value="AE" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/ae.svg&quot; alt=&quot;United Arab Emirates Flag&quot; /><span class=&quot;text-truncate&quot;>United Arab Emirates</span></span>">United Arab Emirates</option>
                                                        <option value="GB" selected data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/gb.svg&quot; alt=&quot;United Kingdom Flag&quot; /><span class=&quot;text-truncate&quot;>United Kingdom</span></span>">United Kingdom</option>
                                                        <option value="UM" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/um.svg&quot; alt=&quot;United States Minor Outlying Islands Flag&quot; /><span class=&quot;text-truncate&quot;>United States Minor Outlying Islands</span></span>">United States Minor Outlying Islands</option>
                                                        <option value="US" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/us.svg&quot; alt=&quot;United States of America Flag&quot; /><span class=&quot;text-truncate&quot;>United States of America</span></span>">United States of America</option>
                                                        <option value="UY" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/uy.svg&quot; alt=&quot;Uruguay Flag&quot; /><span class=&quot;text-truncate&quot;>Uruguay</span></span>">Uruguay</option>
                                                        <option value="UZ" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/uz.svg&quot; alt=&quot;Uzbekistan Flag&quot; /><span class=&quot;text-truncate&quot;>Uzbekistan</span></span>">Uzbekistan</option>
                                                        <option value="VU" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/vu.svg&quot; alt=&quot;Vanuatu Flag&quot; /><span class=&quot;text-truncate&quot;>Vanuatu</span></span>">Vanuatu</option>
                                                        <option value="VE" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/ve.svg&quot; alt=&quot;Venezuela (Bolivarian Republic of) Flag&quot; /><span class=&quot;text-truncate&quot;>Venezuela (Bolivarian Republic of)</span></span>">Venezuela (Bolivarian Republic of)</option>
                                                        <option value="VN" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/vn.svg&quot; alt=&quot;Vietnam Flag&quot; /><span class=&quot;text-truncate&quot;>Vietnam</span></span>">Vietnam</option>
                                                        <option value="VG" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/vg.svg&quot; alt=&quot;Virgin Islands (British) Flag&quot; /><span class=&quot;text-truncate&quot;>Virgin Islands (British)</span></span>">Virgin Islands (British)</option>
                                                        <option value="VI" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/vi.svg&quot; alt=&quot;Virgin Islands (U.S.) Flag&quot; /><span class=&quot;text-truncate&quot;>Virgin Islands (U.S.)</span></span>">Virgin Islands (U.S.)</option>
                                                        <option value="GB-WLS" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/gb-wls.svg&quot; alt=&quot;Wales Flag&quot; /><span class=&quot;text-truncate&quot;>Wales</span></span>">Wales</option>
                                                        <option value="WF" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/wf.svg&quot; alt=&quot;Wallis and Futuna Flag&quot; /><span class=&quot;text-truncate&quot;>Wallis and Futuna</span></span>">Wallis and Futuna</option>
                                                        <option value="EH" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/eh.svg&quot; alt=&quot;Western Sahara Flag&quot; /><span class=&quot;text-truncate&quot;>Western Sahara</span></span>">Western Sahara</option>
                                                        <option value="YE" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/ye.svg&quot; alt=&quot;Yemen Flag&quot; /><span class=&quot;text-truncate&quot;>Yemen</span></span>">Yemen</option>
                                                        <option value="ZM" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/zm.svg&quot; alt=&quot;Zambia Flag&quot; /><span class=&quot;text-truncate&quot;>Zambia</span></span>">Zambia</option>
                                                        <option value="ZW" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/zw.svg&quot; alt=&quot;Zimbabwe Flag&quot; /><span class=&quot;text-truncate&quot;>Zimbabwe</span></span>">Zimbabwe</option>
                                                    </select>
                                                </div>
                                                {/* End Select */}
                                                <div className="mb-4">
                                                    <input type="text" className="form-control" name="editCityModal" id="editCityModalLabel" placeholder="City" aria-label="City" defaultValue="London" />
                                                </div>
                                                <input type="text" className="form-control" name="editStateModal" id="editStateModalLabel" placeholder="State" aria-label="State" />
                                            </div>
                                        </div>
                                        {/* End Form */}
                                        {/* Form */}
                                        <div className="row mb-4">
                                            <label htmlFor="editAddressLine1Label" className="col-sm-3 col-form-label form-label">Address line 1</label>
                                            <div className="col-sm-9">
                                                <input type="text" className="form-control" name="addressLine1" id="editAddressLine1Label" placeholder="Your address" aria-label="Your address" defaultValue="45 Roker Terrace, Latheronwheel" />
                                            </div>
                                        </div>
                                        {/* End Form */}
                                        {/* Form */}
                                        <div className="row mb-4">
                                            <label htmlFor="editAddressLine2ModalLabel" className="col-sm-3 col-form-label form-label">Address line 2 <span className="form-label-secondary">(Optional)</span></label>
                                            <div className="col-sm-9">
                                                <input type="text" className="form-control" name="editAddressLine2Modal" id="editAddressLine2ModalLabel" placeholder="Your address" aria-label="Your address" />
                                            </div>
                                        </div>
                                        {/* End Form */}
                                        {/* Form */}
                                        <div className="row">
                                            <label htmlFor="editZipCodeLabel" className="col-sm-3 col-form-label form-label">Zip code <i className="bi-question-circle text-body ms-1" data-bs-toggle="tooltip" data-bs-placement="top" title="You can find your code in a postal address." /></label>
                                            <div className="col-sm-9">
                                                <input type="text" className="js-input-mask form-control" name="zipCode" id="editZipCodeLabel" placeholder="Your zip code" aria-label="Your zip code" defaultValue="KW5 8NW" data-hs-mask-options="{
                             &quot;mask&quot;: &quot;AA0 0AA&quot;
                           }" />
                                            </div>
                                        </div>
                                        {/* End Form */}
                                        <hr />
                                        <div className="d-grid gap-3">
                                            {/* Form Switch */}
                                            <label className="row form-check form-switch" htmlFor="editUserModalBillingPreferencesSwitch1">
                                                <span className="col-8 col-sm-9 ms-0">
                                                    <span className="d-block text-dark mb-1">Default billing address</span>
                                                    <span className="d-block fs-5 text-muted">Set as default billing address</span>
                                                </span>
                                                <span className="col-4 col-sm-3 text-end">
                                                    <input type="checkbox" className="form-check-input" id="editUserModalBillingPreferencesSwitch1" defaultChecked />
                                                </span>
                                            </label>
                                            {/* End Form Switch */}
                                            {/* Form Switch */}
                                            <label className="row form-check form-switch" htmlFor="editUserModalBillingPreferencesSwitch2">
                                                <span className="col-8 col-sm-9 ms-0">
                                                    <span className="d-block text-dark mb-1">See info about people who view my profile</span>
                                                    <span className="d-block fs-5 text-muted"><a className="link" href="#">More about viewer info</a>.</span>
                                                </span>
                                                <span className="col-4 col-sm-3 text-end">
                                                    <input type="checkbox" className="form-check-input" id="editUserModalBillingPreferencesSwitch2" />
                                                </span>
                                            </label>
                                            {/* End Form Switch */}
                                        </div>
                                        <div className="d-flex justify-content-end mt-4">
                                            <div className="d-flex gap-3">
                                                <button type="button" className="btn btn-white" data-bs-dismiss="modal" aria-label="Close">Cancel</button>
                                                <button type="submit" className="btn btn-primary">Save changes</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div className="tab-pane fade" id="change-password" role="tabpanel" aria-labelledby="change-password-tab">
                                    <form>
                                        {/* Form */}
                                        <div className="row mb-4">
                                            <label htmlFor="editUserModalCurrentPasswordLabel" className="col-sm-3 col-form-label form-label">Current password</label>
                                            <div className="col-sm-9">
                                                {/* Input Group */}
                                                <div className="input-group input-group-merge">
                                                    <input type="password" className="js-toggle-password form-control" name="currentPassword" id="editUserModalCurrentPasswordLabel" placeholder="Enter current password" aria-label="Enter current password" data-hs-toggle-password-options="{
                                 &quot;target&quot;: &quot;#editUserModalChangePassModalTarget&quot;,
                                 &quot;defaultClass&quot;: &quot;bi-eye-slash&quot;,
                                 &quot;showClass&quot;: &quot;bi-eye&quot;,
                                 &quot;classChangeTarget&quot;: &quot;#editUserModalChangePassModalIcon&quot;
                               }" />
                                                    <a id="editUserModalChangePassModalTarget" className="input-group-append input-group-text" href="javascript:;">
                                                        <i id="editUserModalChangePassModalIcon" className="bi-eye" />
                                                    </a>
                                                </div>
                                                {/* End Input Group */}
                                            </div>
                                        </div>
                                        {/* End Form */}
                                        {/* Form */}
                                        <div className="row mb-4">
                                            <label htmlFor="editUserModalNewPassword" className="col-sm-3 col-form-label form-label">New password</label>
                                            <div className="col-sm-9">
                                                <input type="password" className="js-toggle-password form-control" name="editUserModalNewPassword" id="editUserModalNewPassword" placeholder="Enter new password" aria-label="Enter new password" data-hs-toggle-password-options="{
                               &quot;target&quot;: &quot;#editUserModalChangePassModalCheckbox&quot;
                             }" />
                                            </div>
                                        </div>
                                        {/* End Form */}
                                        {/* Form */}
                                        <div className="row mb-4">
                                            <label htmlFor="editUserModalConfirmNewPasswordLabel" className="col-sm-3 col-form-label form-label">Confirm new password</label>
                                            <div className="col-sm-9">
                                                <input type="password" className="js-toggle-password form-control" name="confirmNewPassword" id="editUserModalConfirmNewPasswordLabel" placeholder="Confirm your new password" aria-label="Confirm your new password" data-hs-toggle-password-options="{
                               &quot;target&quot;: &quot;#editUserModalChangePassModalCheckbox&quot;
                             }" />
                                            </div>
                                        </div>
                                        {/* End Form */}
                                        {/* Form */}
                                        <div className="row mb-4">
                                            <div className="col-sm-9 offset-sm-3">
                                                {/* Form Check */}
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" defaultValue id="editUserModalChangePassModalCheckbox" />
                                                    <label className="form-check-label" htmlFor="editUserModalChangePassModalCheckbox">
                                                        Show password
                                                    </label>
                                                </div>
                                                {/* End Form Check */}
                                            </div>
                                        </div>
                                        {/* End Form */}
                                        <div className="d-flex justify-content-end">
                                            <div className="d-flex gap-3">
                                                <button type="button" className="btn btn-white" data-bs-dismiss="modal" aria-label="Close">Cancel</button>
                                                <button type="submit" className="btn btn-primary">Save changes</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div className="tab-pane fade" id="notifications" role="tabpanel" aria-labelledby="notifications-tab">
                                    {/* Table */}
                                    <div className="table-responsive datatable-custom">
                                        <table className="table table-thead-bordered table-nowrap table-align-middle table-first-col-px-0">
                                            <thead className="thead-light">
                                                <tr>
                                                    <th>Type</th>
                                                    <th className="text-center">
                                                        <div className="mb-1">
                                                            <img className="avatar avatar-xs" src="./assets/svg/illustrations/oc-email-at.svg" alt="Image Description" data-hs-theme-appearance="default" />
                                                            <img className="avatar avatar-xs" src="./assets/svg/illustrations-light/oc-email-at.svg" alt="Image Description" data-hs-theme-appearance="dark" />
                                                        </div>
                                                        Email
                                                    </th>
                                                    <th className="text-center">
                                                        <div className="mb-1">
                                                            <img className="avatar avatar-xs" src="./assets/svg/illustrations/oc-globe.svg" alt="Image Description" data-hs-theme-appearance="default" />
                                                            <img className="avatar avatar-xs" src="./assets/svg/illustrations-light/oc-globe.svg" alt="Image Description" data-hs-theme-appearance="dark" />
                                                        </div>
                                                        Browser
                                                    </th>
                                                    <th className="text-center">
                                                        <div className="mb-1">
                                                            <img className="avatar avatar-xs" src="./assets/svg/illustrations/oc-phone.svg" alt="Image Description" data-hs-theme-appearance="default" />
                                                            <img className="avatar avatar-xs" src="./assets/svg/illustrations-light/oc-phone.svg" alt="Image Description" data-hs-theme-appearance="dark" />
                                                        </div>
                                                        App
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>New for you</td>
                                                    <td className="text-center">
                                                        <div className="form-check form-check-inline">
                                                            <input className="form-check-input" type="checkbox" defaultValue id="editUserModalAlertsCheckbox1" />
                                                            <label className="form-check-label" htmlFor="editUserModalAlertsCheckbox1" />
                                                        </div>
                                                    </td>
                                                    <td className="text-center">
                                                        <div className="form-check form-check-inline">
                                                            <input className="form-check-input" type="checkbox" defaultValue id="editUserModalAlertsCheckbox2" />
                                                            <label className="form-check-label" htmlFor="editUserModalAlertsCheckbox2" />
                                                        </div>
                                                    </td>
                                                    <td className="text-center">
                                                        <div className="form-check form-check-inline">
                                                            <input className="form-check-input" type="checkbox" defaultValue id="editUserModalAlertsCheckbox3" />
                                                            <label className="form-check-label" htmlFor="editUserModalAlertsCheckbox3" />
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Account activity <i className="bi-question-circle text-body ms-1" data-bs-toggle="tooltip" data-bs-placement="top" title="Get important notifications about you or activity you've missed" /></td>
                                                    <td className="text-center">
                                                        <div className="form-check form-check-inline">
                                                            <input className="form-check-input" type="checkbox" defaultValue id="editUserModalAlertsCheckbox4" />
                                                            <label className="form-check-label" htmlFor="editUserModalAlertsCheckbox4" />
                                                        </div>
                                                    </td>
                                                    <td className="text-center">
                                                        <div className="form-check form-check-inline">
                                                            <input className="form-check-input" type="checkbox" defaultValue id="editUserModalAlertsCheckbox5" defaultChecked />
                                                            <label className="form-check-label" htmlFor="editUserModalAlertsCheckbox5" />
                                                        </div>
                                                    </td>
                                                    <td className="text-center">
                                                        <div className="form-check form-check-inline">
                                                            <input className="form-check-input" type="checkbox" defaultValue id="editUserModalAlertsCheckbox6" defaultChecked />
                                                            <label className="form-check-label" htmlFor="editUserModalAlertsCheckbox6" />
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>A new browser used to sign in</td>
                                                    <td className="text-center">
                                                        <div className="form-check form-check-inline">
                                                            <input className="form-check-input" type="checkbox" defaultValue id="editUserModalAlertsCheckbox7" defaultChecked />
                                                            <label className="form-check-label" htmlFor="editUserModalAlertsCheckbox7" />
                                                        </div>
                                                    </td>
                                                    <td className="text-center">
                                                        <div className="form-check form-check-inline">
                                                            <input className="form-check-input" type="checkbox" defaultValue id="editUserModalAlertsCheckbox8" defaultChecked />
                                                            <label className="form-check-label" htmlFor="editUserModalAlertsCheckbox8" />
                                                        </div>
                                                    </td>
                                                    <td className="text-center">
                                                        <div className="form-check form-check-inline">
                                                            <input className="form-check-input" type="checkbox" defaultValue id="editUserModalAlertsCheckbox9" defaultChecked />
                                                            <label className="form-check-label" htmlFor="editUserModalAlertsCheckbox9" />
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>A new device is linked</td>
                                                    <td className="text-center">
                                                        <div className="form-check form-check-inline">
                                                            <input className="form-check-input" type="checkbox" defaultValue id="editUserModalAlertsCheckbox10" />
                                                            <label className="form-check-label" htmlFor="editUserModalAlertsCheckbox10" />
                                                        </div>
                                                    </td>
                                                    <td className="text-center">
                                                        <div className="form-check form-check-inline">
                                                            <input className="form-check-input" type="checkbox" defaultValue id="editUserModalAlertsCheckbox11" defaultChecked />
                                                            <label className="form-check-label" htmlFor="editUserModalAlertsCheckbox11" />
                                                        </div>
                                                    </td>
                                                    <td className="text-center">
                                                        <div className="form-check form-check-inline">
                                                            <input className="form-check-input" type="checkbox" defaultValue id="editUserModalAlertsCheckbox12" />
                                                            <label className="form-check-label" htmlFor="editUserModalAlertsCheckbox12" />
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>A new device connected <i className="bi-question-circle text-body ms-1" data-bs-toggle="tooltip" data-bs-placement="top" title="Email me when a new device connected" /></td>
                                                    <td className="text-center">
                                                        <div className="form-check form-check-inline">
                                                            <input className="form-check-input" type="checkbox" defaultValue id="editUserModalAlertsCheckbox13" />
                                                            <label className="form-check-label" htmlFor="editUserModalAlertsCheckbox13" />
                                                        </div>
                                                    </td>
                                                    <td className="text-center">
                                                        <div className="form-check form-check-inline">
                                                            <input className="form-check-input" type="checkbox" defaultValue id="editUserModalAlertsCheckbox14" defaultChecked />
                                                            <label className="form-check-label" htmlFor="editUserModalAlertsCheckbox14" />
                                                        </div>
                                                    </td>
                                                    <td className="text-center">
                                                        <div className="form-check form-check-inline">
                                                            <input className="form-check-input" type="checkbox" defaultValue id="editUserModalAlertsCheckbox15" defaultChecked />
                                                            <label className="form-check-label" htmlFor="editUserModalAlertsCheckbox15" />
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    {/* End Table */}
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm">
                                            {/* Form */}
                                            <div className="mb-4">
                                                <span className="d-block mb-2">When should we send notifications?</span>
                                                {/* Select */}
                                                <div className="tom-select-custom">
                                                    <select className="js-select form-select" autoComplete="off" data-hs-tom-select-options="{
                                  &quot;searchInDropdown&quot;: false,
                                  &quot;width&quot;: &quot;15rem&quot;,
                                  &quot;hideSearch&quot;: true
                                }">
                                                        <option value="whenToSendNotification1">Always</option>
                                                        <option value="whenToSendNotification2">Only when I'm online</option>
                                                    </select>
                                                </div>
                                                {/* End Select */}
                                            </div>
                                            {/* End Form */}
                                        </div>
                                        <div className="col-sm">
                                            {/* Form */}
                                            <div className="mb-4">
                                                <span className="d-block mb-2">Send a daily summary ("Daily Digest") of task activity.</span>
                                                <div className="row">
                                                    <div className="col-auto mb-2">
                                                        {/* Select */}
                                                        <div className="tom-select-custom">
                                                            <select className="js-select form-select" autoComplete="off" data-hs-tom-select-options="{
                                    &quot;searchInDropdown&quot;: false,
                                    &quot;hideSearch&quot;: true
                                  }">
                                                                <option value="EveryDay">Every day</option>
                                                                <option value="weekdays" selected>Weekdays</option>
                                                                <option value="Never">Never</option>
                                                            </select>
                                                        </div>
                                                        {/* End Select */}
                                                    </div>
                                                    {/* End Col */}
                                                    <div className="col-auto mb-2">
                                                        {/* Select */}
                                                        <div className="tom-select-custom tom-select-custom-end">
                                                            <select className="js-select form-select" autoComplete="off" data-hs-tom-select-options="{
                                    &quot;searchInDropdown&quot;: false,
                                    &quot;hideSearch&quot;: true,
                                    &quot;dropdownWidth&quot;: &quot;11rem&quot;,
                                    &quot;dropup&quot;: true
                                  }">
                                                                <option value={0}>at 12 AM</option>
                                                                <option value={1}>at 1 AM</option>
                                                                <option value={2}>at 2 AM</option>
                                                                <option value={3}>at 3 AM</option>
                                                                <option value={4}>at 4 AM</option>
                                                                <option value={5}>at 5 AM</option>
                                                                <option value={6}>at 6 AM</option>
                                                                <option value={7}>at 7 AM</option>
                                                                <option value={8}>at 8 AM</option>
                                                                <option value={9} selected>at 9 AM</option>
                                                                <option value={10}>at 10 AM</option>
                                                                <option value={11}>at 11 AM</option>
                                                                <option value={12}>at 12 PM</option>
                                                                <option value={13}>at 1 PM</option>
                                                                <option value={14}>at 2 PM</option>
                                                                <option value={15}>at 3 PM</option>
                                                                <option value={16}>at 4 PM</option>
                                                                <option value={17}>at 5 PM</option>
                                                                <option value={18}>at 6 PM</option>
                                                                <option value={19}>at 7 PM</option>
                                                                <option value={20}>at 8 PM</option>
                                                                <option value={21}>at 9 PM</option>
                                                                <option value={22}>at 10 PM</option>
                                                                <option value={23}>at 11 PM</option>
                                                            </select>
                                                        </div>
                                                        {/* End Select */}
                                                    </div>
                                                    {/* End Col */}
                                                </div>
                                                {/* End Row */}
                                            </div>
                                            {/* End Form */}
                                        </div>
                                        {/* End Col */}
                                    </div>
                                    {/* End Row */}
                                    <p>In order to cut back on noise, email notifications are grouped together and only sent when you're idle or offline.</p>
                                    <div className="d-flex justify-content-end">
                                        <div className="d-flex gap-3">
                                            <button type="button" className="btn btn-white" data-bs-dismiss="modal" aria-label="Close">Cancel</button>
                                            <button type="submit" className="btn btn-primary">Save changes</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End Tab Content */}
                        </div>
                        {/* End Body */}
                    </div>
                </div>
            </div>
            {/* New Project Modal */}
            <div className="modal fade" id="newProjectModal" tabIndex={-1} aria-labelledby="newProjectModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="newProjectModalLabel">New project</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        {/* Body */}
                        <div className="modal-body">
                            {/* Step Form */}
                            <form className="js-step-form">
                                <Box sx={{ width: '100%' }}>
                                    <Stepper nonLinear activeStep={activeStep}>
                                        {steps.map((label, index) => (
                                            <Step key={label} completed={completed[index]}>
                                                <StepButton color="inherit" onClick={handleStep(index)}>
                                                    {label}
                                                </StepButton>
                                            </Step>
                                        ))}
                                    </Stepper>
                                    <div>
                                        {allStepsCompleted() ? (
                                            <React.Fragment>
                                                <div id="createProjectStepSuccessMessage">
                                                    <div className="text-center">
                                                        <img className="img-fluid mb-3" src="./assets/svg/illustrations/oc-hi-five.svg" alt="Image Description" data-hs-theme-appearance="default" style={{ maxWidth: '15rem' }} />
                                                        {/* <img className="img-fluid mb-3" src="./assets/svg/illustrations-light/oc-hi-five.svg" alt="Image Description" data-hs-theme-appearance="dark" style={{ maxWidth: '15rem' }} /> */}
                                                        <div className="mb-4">
                                                            <h2>Successful!</h2>
                                                            <p>New project has been successfully created.</p>
                                                        </div>
                                                        <div className="d-flex justify-content-center gap-3">
                                                            <a className="btn btn-white" onClick={handleReset}>
                                                                <i className="bi-chevron-left" /> Back to projects
                                                            </a>
                                                            <a className="btn btn-primary" onClick={handleReset} data-toggle="modal" data-target="#newProjectModal">
                                                                <i className="bi-building" /> Add new project
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </React.Fragment>
                                        ) : (
                                            <React.Fragment>
                                                <div id="createProjectStepFormContent" style={{marginTop:'2rem'}} >
                                                    {activeStep === 0 &&
                                                        <div id="createProjectStepDetails">
                                                            {/* Form */}
                                                            <div className="mb-4">
                                                                <label className="form-label">Project logo</label>
                                                                <div className="d-flex align-items-center">
                                                                    {/* Avatar */}
                                                                    <label className="avatar avatar-xl avatar-circle avatar-uploader me-5" htmlFor="avatarNewProjectUploader">
                                                                        <img id="avatarNewProjectImg" className="avatar-img" src="./assets/img/160x160/img2.jpg" alt="Image Description" />
                                                                        <input type="file" className="js-file-attach avatar-uploader-input" id="avatarNewProjectUploader" data-hs-file-attach-options="{
                                    &quot;textTarget&quot;: &quot;#avatarNewProjectImg&quot;,
                                    &quot;mode&quot;: &quot;image&quot;,
                                    &quot;targetAttr&quot;: &quot;src&quot;,
                                    &quot;resetTarget&quot;: &quot;.js-file-attach-reset-img&quot;,
                                    &quot;resetImg&quot;: &quot;./assets/img/160x160/img1.jpg&quot;,
                                    &quot;allowTypes&quot;: [&quot;.png&quot;, &quot;.jpeg&quot;, &quot;.jpg&quot;]
                                }" />
                                                                        <span className="avatar-uploader-trigger">
                                                                            <i className="bi-pencil-fill avatar-uploader-icon shadow-sm" />
                                                                        </span>
                                                                    </label>
                                                                    {/* End Avatar */}
                                                                    <button type="button" className="js-file-attach-reset-img btn btn-white">Delete</button>
                                                                </div>
                                                            </div>
                                                            {/* End Form */}
                                                            {/* Form */}
                                                            <div className="mb-4">
                                                                <label htmlFor="clientNewProjectLabel" className="form-label">Client</label>
                                                                <div className="row align-items-center">
                                                                    <div className="col-12 col-md-7 mb-3">
                                                                        <div className="input-group input-group-merge">
                                                                            <div className="input-group-prepend input-group-text">
                                                                                <i className="bi-person-square" />
                                                                            </div>
                                                                            <input className="form-control" id="clientNewProjectLabel" placeholder="Add creater name" aria-label="Add creater name" />
                                                                        </div>
                                                                    </div>
                                                                    {/* End Col */}
                                                                    <span className="col-auto mb-3">or</span>
                                                                    <div className="col-md mb-md-3">
                                                                        <a className="btn btn-white" href="javascript:;">
                                                                            <i className="tio-add me-1" />New client
                                                                        </a>
                                                                    </div>
                                                                    {/* End Col */}
                                                                </div>
                                                                {/* End Row */}
                                                            </div>
                                                            {/* End Form */}
                                                            {/* Form */}
                                                            <div className="mb-4">
                                                                <label htmlFor="projectNameNewProjectLabel" className="form-label">Project name <i className="bi-question-circle text-body ms-1" data-toggle="tooltip" data-placement="top" title="Displayed on public forums, such as Front." /></label>
                                                                <div className="input-group input-group-merge">
                                                                    <div className="input-group-prepend input-group-text">
                                                                        <i className="bi-briefcase" />
                                                                    </div>
                                                                    <input type="text" className="form-control" name="projectName" id="projectNameNewProjectLabel" placeholder="Enter project name here" aria-label="Enter project name here" />
                                                                </div>
                                                            </div>
                                                            {/* End Form */}
                                                            {/* Quill */}
                                                            <div className="mb-4">
                                                                <label className="form-label">Project description <span className="form-label-secondary">(Optional)</span></label>
                                                                {/* Quill */}
                                                                <div className="quill-custom">
                                                                    <div className="js-quill" style={{ height: '15rem' }} data-hs-quill-options="{
                            &quot;placeholder&quot;: &quot;Type your message...&quot;,
                            &quot;modules&quot;: {
                                &quot;toolbar&quot;: [
                                [&quot;bold&quot;, &quot;italic&quot;, &quot;underline&quot;, &quot;strike&quot;, &quot;link&quot;, &quot;image&quot;, &quot;blockquote&quot;, &quot;code&quot;, {&quot;list&quot;: &quot;bullet&quot;}]
                                ]
                            }
                            }">
                                                                    </div>
                                                                </div>
                                                                {/* End Quill */}
                                                            </div>
                                                            {/* End Quill */}
                                                            <div className="row">
                                                                <div className="col-sm-6">
                                                                    {/* Form */}
                                                                    <div className="mb-4">
                                                                        <label htmlFor="projectDeadlineNewProjectLabel" className="form-label">Due date</label>
                                                                        <div id="projectDeadlineNewProject" className="input-group input-group-merge">
                                                                            <div className="input-group-prepend input-group-text">
                                                                                <i className="bi-calendar-week" />
                                                                            </div>
                                                                            <input type="text" className="form-control" id="projectDeadlineNewProjectLabel" placeholder="Select dates" />
                                                                        </div>
                                                                    </div>
                                                                    {/* End Form */}
                                                                </div>
                                                                {/* End Col */}
                                                                <div className="col-sm-6">
                                                                    {/* Form */}
                                                                    <div className="mb-4">
                                                                        <label htmlFor="ownerNewProjectLabel" className="form-label">Owner</label>
                                                                        {/* Select */}
                                                                        <div className="tom-select-custom">
                                                                            <select className="js-select form-select" id="ownerNewProjectLabel" data-hs-tom-select-options="{
                                    &quot;searchInDropdown&quot;: false,
                                    &quot;hideSearch&quot;: true
                                    }">
                                                                                <option value="owner1" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle&quot; src=&quot;./assets/img/160x160/img6.jpg&quot; alt=&quot;Avatar&quot; /><span class=&quot;flex-grow-1 ms-2&quot;>Mark Williams</span></span>">Mark Williams</option>
                                                                                <option value="owner2" data-option-template="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;avatar avatar-xss avatar-circle&quot; src=&quot;./assets/img/160x160/img10.jpg&quot; alt=&quot;Avatar&quot; /><span class=&quot;flex-grow-1 ms-2&quot;>Amanda Harvey</span></span>">Amanda Harvey</option>
                                                                                <option value="owner3" selected data-option-template="<span class=&quot;d-flex align-items-center&quot;><i class=&quot;bi-person text-body&quot;></i><span class=&quot;flex-grow-1 ms-2&quot;>Assign to owner</span></span>">Assign to owner</option>
                                                                            </select>
                                                                        </div>
                                                                        {/* End Select */}
                                                                    </div>
                                                                    {/* End Form */}
                                                                </div>
                                                                {/* End Col */}
                                                            </div>
                                                            {/* End Row */}
                                                            {/* Form */}
                                                            <div className="mb-4">
                                                                <label className="form-label">Attach files</label>
                                                                {/* Dropzone */}
                                                                <div id="attachFilesNewProjectLabel" className="js-dropzone dz-dropzone dz-dropzone-card">
                                                                    <div className="dz-message">
                                                                        <img className="avatar avatar-xl avatar-4x3 mb-3" src="./assets/svg/illustrations/oc-browse.svg" alt="Image Description" data-hs-theme-appearance="default" />
                                                                        {/* <img className="avatar avatar-xl avatar-4x3 mb-3" src="./assets/svg/illustrations-light/oc-browse.svg" alt="Image Description" data-hs-theme-appearance="dark" /> */}
                                                                        <h5>Drag and drop your file here</h5>
                                                                        <p className="mb-2">or</p>
                                                                        <span className="btn btn-white btn-sm">Browse files</span>
                                                                    </div>
                                                                </div>
                                                                {/* End Dropzone */}
                                                            </div>
                                                            {/* End Form */}
                                                            <label className="form-label">Default view</label>
                                                            <div className="input-group input-group-md-vertical">
                                                                {/* Radio Check */}
                                                                <label className="form-control" htmlFor="projectViewNewProjectTypeRadio1">
                                                                    <span className="form-check form-check-reverse">
                                                                        <input type="radio" className="form-check-input" name="projectViewNewProjectTypeRadio" id="projectViewNewProjectTypeRadio1" />
                                                                        <span className="form-check-label"><i className="bi-view-list text-muted me-2" /> List</span>
                                                                    </span>
                                                                </label>
                                                                {/* End Radio Check */}
                                                                {/* Radio Check */}
                                                                <label className="form-control" htmlFor="projectViewNewProjectTypeRadio2">
                                                                    <span className="form-check form-check-reverse">
                                                                        <input type="radio" className="form-check-input" name="projectViewNewProjectTypeRadio" id="projectViewNewProjectTypeRadio2" defaultChecked />
                                                                        <span className="form-check-label"><i className="bi-table text-muted me-2" /> Table</span>
                                                                    </span>
                                                                </label>
                                                                {/* End Radio Check */}
                                                                {/* Radio Check */}
                                                                <label className="form-control" htmlFor="projectViewNewProjectTypeRadio3">
                                                                    <span className="form-check form-check-reverse">
                                                                        <input type="radio" className="form-check-input" name="projectViewNewProjectTypeRadio" id="projectViewNewProjectTypeRadio3" disabled />
                                                                        <span className="form-check-label">Timeline</span>
                                                                        <span className="badge bg-soft-primary text-primary rounded-pill">Coming soon...</span>
                                                                    </span>
                                                                </label>
                                                                {/* End Radio Check */}
                                                            </div>
                                                        </div>
                                                    }
                                                    {activeStep === 1 &&
                                                        <div id="createProjectStepTerms">
                                                            <div className="row">
                                                                <div className="col-sm-6">
                                                                    {/* Form */}
                                                                    <div className="mb-4">
                                                                        <label htmlFor="paymentTermsNewProjectLabel" className="form-label">Terms</label>
                                                                        {/* Select */}
                                                                        <div className="tom-select-custom">
                                                                            <select className="js-select form-select" id="paymentTermsNewProjectLabel" data-hs-tom-select-options="{
                                  &quot;searchInDropdown&quot;: false,
                                  &quot;hideSearch&quot;: true
                                }">
                                                                                <option value="fixed" selected>Fixed</option>
                                                                                <option value="Per hour">Per hour</option>
                                                                                <option value="Per day">Per day</option>
                                                                                <option value="Per week">Per week</option>
                                                                                <option value="Per month">Per month</option>
                                                                                <option value="Per quarter">Per quarter</option>
                                                                                <option value="Per year">Per year</option>
                                                                            </select>
                                                                        </div>
                                                                        {/* End Select */}
                                                                    </div>
                                                                    {/* End Form */}
                                                                </div>
                                                                {/* End Col */}
                                                                <div className="col-sm-6">
                                                                    <label htmlFor="expectedValueNewProjectLabel" className="form-label">Expected value</label>
                                                                    {/* Form */}
                                                                    <div className="mb-4">
                                                                        <div className="input-group input-group-merge">
                                                                            <div className="input-group-prepend input-group-text">
                                                                                <i className="bi-currency-dollar" />
                                                                            </div>
                                                                            <input type="text" className="form-control" name="expectedValue" id="expectedValueNewProjectLabel" placeholder="Enter value here" aria-label="Enter value here" />
                                                                        </div>
                                                                    </div>
                                                                    {/* End Form */}
                                                                </div>
                                                                {/* End Col */}
                                                            </div>
                                                            {/* End Form Row */}
                                                            <div className="row">
                                                                <div className="col-lg-6">
                                                                    {/* Form */}
                                                                    <div className="mb-4">
                                                                        <label htmlFor="milestoneNewProjectLabel" className="form-label">Milestone <a className="small ms-1" href="javascript:;">Change probability</a></label>
                                                                        {/* Select */}
                                                                        <div className="tom-select-custom">
                                                                            <select className="js-select form-select" id="milestoneNewProjectLabel" data-hs-tom-select-options="{
                                  &quot;searchInDropdown&quot;: false,
                                  &quot;hideSearch&quot;: true
                                }">
                                                                                <option value="New">New</option>
                                                                                <option value="Qualified">Qualified</option>
                                                                                <option value="Meeting">Meeting</option>
                                                                                <option value="Proposal">Proposal</option>
                                                                                <option value="Negotiation">Negotiation</option>
                                                                                <option value="Contact">Contact</option>
                                                                            </select>
                                                                        </div>
                                                                        {/* End Select */}
                                                                    </div>
                                                                    {/* End Form */}
                                                                </div>
                                                                {/* End Col */}
                                                                <div className="col-lg-6">
                                                                    {/* Form */}
                                                                    <div className="mb-4">
                                                                        <label htmlFor="privacyNewProjectLabel" className="form-label me-2">Privacy</label>
                                                                        {/* Select */}
                                                                        <div className="tom-select-custom">
                                                                            <select className="js-select form-select" id="privacyNewProjectLabel" data-hs-tom-select-options="{
                                  &quot;searchInDropdown&quot;: false,
                                  &quot;hideSearch&quot;: true
                                }">
                                                                                <option value="privacy1" data-option-template="<span class=&quot;d-flex&quot;><i class=&quot;bi-people fs2 text-body&quot;></i><span class=&quot;flex-grow-1 ms-2&quot;><span class=&quot;d-block&quot;>Everyone</span><small class=&quot;tom-select-custom-hide&quot;>Public to Front Dashboard</small></span></span>">Everyone</option>
                                                                                <option value="privacy2" disabled data-option-template="<span class=&quot;d-flex&quot;><i class=&quot;bi-lock fs2 text-body&quot;></i><span class=&quot;flex-grow-1 ms-2&quot;><span class=&quot;d-block&quot;>Private to project members <span class=&quot;badge bg-soft-primary text-primary&quot;>Upgrade to Premium</span></span><small class=&quot;tom-select-custom-hide&quot;>Only visible to project members</small></span></span>">Private to project members</option>
                                                                                <option value="privacy3" data-option-template="<span class=&quot;d-flex&quot;><i class=&quot;bi-person fs2 text-body&quot;></i><span class=&quot;flex-grow-1 ms-2&quot;><span class=&quot;d-block&quot;>Private to me</span><small class=&quot;tom-select-custom-hide&quot;>Only visible to you</small></span></span>">Private to me</option>
                                                                            </select>
                                                                        </div>
                                                                        {/* End Select */}
                                                                    </div>
                                                                    {/* End Form */}
                                                                </div>
                                                                {/* End Col */}
                                                            </div>
                                                            {/* End Form Row */}
                                                            <div className="d-grid gap-2">
                                                                {/* Check */}
                                                                <div className="form-check">
                                                                    <input className="form-check-input" type="checkbox" defaultValue id="budgetNewProjectCheckbox" />
                                                                    <label className="form-check-label" htmlFor="budgetNewProjectCheckbox">
                                                                        Budget resets every month
                                                                    </label>
                                                                </div>
                                                                {/* End Check */}
                                                                {/* Check */}
                                                                <div className="form-check">
                                                                    <input className="form-check-input" type="checkbox" defaultValue id="emailAlertNewProjectCheckbox" defaultChecked />
                                                                    <label className="form-check-label" htmlFor="emailAlertNewProjectCheckbox">
                                                                        Send email alerts if project exceeds <span className="font-weight-bold">50.00%</span> of budget
                                                                    </label>
                                                                </div>
                                                                {/* End Check */}
                                                            </div>
                                                        </div>
                                                    }
                                                    {activeStep === 2 &&
                                                        <div id="createProjectStepMembers">
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
                                                            <ul className="list-unstyled list-py-3 mb-5">
                                                                {/* List Group Item */}
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
                                                                                            <option value="guest" selected>Guest</option>
                                                                                            <option value="can edit">Can edit</option>
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
                                                                {/* End List Group Item */}
                                                                {/* List Group Item */}
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
                                                                                            <option value="guest" selected>Guest</option>
                                                                                            <option value="can edit">Can edit</option>
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
                                                                {/* End List Group Item */}
                                                                {/* List Group Item */}
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
                                                                                    <h5 className="text-body mb-0">Ella Lauda <i className="tio-verified text-primary" data-toggle="tooltip" data-placement="top" title="Top endorsed" /></h5>
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
                                                                                            <option value="guest" selected>Guest</option>
                                                                                            <option value="can edit">Can edit</option>
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
                                                                {/* End List Group Item */}
                                                                {/* List Group Item */}
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
                                                                                            <option value="guest" selected>Guest</option>
                                                                                            <option value="can edit">Can edit</option>
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
                                                                {/* End List Group Item */}
                                                            </ul>
                                                            <div className="d-grid gap-3">
                                                                {/* Form Switch */}
                                                                <label className="row form-check form-switch" htmlFor="addTeamPreferencesNewProjectSwitch1">
                                                                    <span className="col-8 col-sm-9 ms-0">
                                                                        <i className="bi-bell text-primary me-3" />
                                                                        <span className="text-dark">Inform all project members</span>
                                                                    </span>
                                                                    <span className="col-4 col-sm-3 text-end">
                                                                        <input type="checkbox" className="form-check-input" id="addTeamPreferencesNewProjectSwitch1" defaultChecked />
                                                                    </span>
                                                                </label>
                                                                {/* End Form Switch */}
                                                                {/* Form Switch */}
                                                                <label className="row form-check form-switch" htmlFor="addTeamPreferencesNewProjectSwitch2">
                                                                    <span className="col-8 col-sm-9 ms-0">
                                                                        <i className="bi-chat-left-dots text-primary me-3" />
                                                                        <span className="text-dark">Show team activity</span>
                                                                    </span>
                                                                    <span className="col-4 col-sm-3 text-end">
                                                                        <input type="checkbox" className="form-check-input" id="addTeamPreferencesNewProjectSwitch2" />
                                                                    </span>
                                                                </label>
                                                                {/* End Form Switch */}
                                                            </div>
                                                        </div>
                                                    }
                                                </div>
                                                <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                                                    <Button
                                                        color="inherit"
                                                        disabled={activeStep === 0}
                                                        onClick={handleBack}
                                                        sx={{ mr: 1 }}
                                                    >
                                                        Back
                                                    </Button>
                                                    <Box sx={{ flex: '1 1 auto' }} />
                                                    <Button onClick={handleNext} sx={{ mr: 1 }}>
                                                        Next
                                                    </Button>
                                                    {activeStep !== steps.length &&
                                                        (completed[activeStep] ? (
                                                            <Typography variant="caption" sx={{ display: 'inline-block' }}>
                                                                Step {activeStep + 1} already completed
                                                            </Typography>
                                                        ) : (
                                                            <Button onClick={handleComplete}>
                                                                {completedSteps() === totalSteps() - 1
                                                                    ? 'Finish'
                                                                    : 'Complete Step'}
                                                            </Button>
                                                        ))}
                                                </Box>
                                            </React.Fragment>
                                        )}
                                    </div>
                                </Box>
                            </form>
                            {/* End Step Form */}
                        </div>
                        {/* End Body */}
                    </div>
                </div>
            </div>
        </>
    )
}
