import React from 'react'
import Header from './Component/Header'

export default function ProjectTeams() {
    return (
        <>
            {/* End Welcome Message Modal */}
            <div className="content container-fluid">
                {/* Page Header */}
                <div className="page-header">
                    <div className="row align-items-end mb-3">
                        <div className="col-sm mb-2 mb-sm-0">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb breadcrumb-no-gutter">
                                    <li className="breadcrumb-item"><a className="breadcrumb-link" href="javascript:;">Pages</a></li>
                                    <li className="breadcrumb-item"><a className="breadcrumb-link" href="javascript:;">Project</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">Teams</li>
                                </ol>
                            </nav>
                            <h1 className="page-header-title">Teams</h1>
                        </div>
                        {/* End Col */}
                        <div className="col-sm-auto">
                            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#shareWithPeopleModal">
                                <i className="bi-plus me-1" /> Add team
                            </button>
                        </div>
                        {/* End Col */}
                    </div>
                    {/* End Row */}
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
                {/* Card */}
                <div className="card">
                    {/* Header */}
                    <div className="card-header card-header-content-md-between">
                        <div className="mb-2 mb-md-0">
                            <form>
                                {/* Search */}
                                <div className="input-group input-group-merge input-group-borderless">
                                    <div className="input-group-prepend input-group-text">
                                        <i className="bi-search" />
                                    </div>
                                    <input id="datatableSearch" type="search" className="form-control" placeholder="Search users" aria-label="Search users" />
                                </div>
                                {/* End Search */}
                            </form>
                        </div>
                        {/* End Col */}
                        <div className="d-grid d-sm-flex align-items-sm-center gap-2">
                            {/* Datatable Info */}
                            <div id="datatableCounterInfo" style={{ display: 'none' }}>
                                <div className="d-flex align-items-center">
                                    <span className="fs-5 me-3">
                                        <span id="datatableCounter">0</span> Selected
                                    </span>
                                    <a className="btn btn-outline-danger btn-sm" href="javascript:;">
                                        <i className="bi-trash" /> Delete
                                    </a>
                                </div>
                            </div>
                            {/* End Datatable Info */}
                            {/* Filter Collapse Trigger */}
                            <a className="btn btn-white dropdown-toggle" data-bs-toggle="collapse" href="#filterSearchCollapse" role="button" aria-expanded="false" aria-controls="filterSearchCollapse">
                                <i className="bi-funnel me-1" /> Filters
                            </a>
                            {/* End Filter Collapse Trigger */}
                        </div>
                    </div>
                    {/* End Header */}
                    {/* Filter Search Collapse */}
                    <div className="collapse" id="filterSearchCollapse">
                        <div className="card-body">
                            <form>
                                <div className="row">
                                    <div className="col-sm-12 col-lg-4">
                                        {/* Form */}
                                        <div className="mb-4">
                                            <label htmlFor="teamsFilterLabel" className="form-label">Teams</label>
                                            <div className="input-group input-group-merge">
                                                <div className="input-group-prepend input-group-text">
                                                    <i className="bi-people-fill" />
                                                </div>
                                                <input className="form-control" id="teamsFilterLabel" placeholder="Name, role, department" aria-label="Name, role, department" />
                                            </div>
                                        </div>
                                        {/* End Form */}
                                    </div>
                                    {/* End Col */}
                                    <div className="col-sm-12 col-md-6 col-lg-4">
                                        {/* Form */}
                                        <div className="mb-4">
                                            <label htmlFor="tagsFilterLabel" className="form-label">Tags</label>
                                            {/* Select */}
                                            <div className="tom-select-custom tom-select-custom-with-tags">
                                                <select className="js-select form-select" id="tagsFilterLabel" autoComplete="off" multiple data-hs-tom-select-options="{
                                  &quot;placeholder&quot;: &quot;Enter top tags&quot;
                                }">
                                                    <option value="tagsFilter1">Marketing team</option>
                                                    <option value="tagsFilter2">Blockchain</option>
                                                    <option value="tagsFilter3">Customer service</option>
                                                    <option value="tagsFilter4">Online payment</option>
                                                    <option value="tagsFilter5">Finance</option>
                                                    <option value="tagsFilter6">Organizers</option>
                                                    <option value="tagsFilter7">Software</option>
                                                </select>
                                            </div>
                                            {/* End Select */}
                                        </div>
                                        {/* End Form */}
                                    </div>
                                    {/* End Col */}
                                    <div className="col-sm-12 col-md-6 col-lg-4">
                                        {/* Form */}
                                        <div className="mb-4">
                                            <label htmlFor="ratingFilterLabel" className="form-label">Rating</label>
                                            {/* Select */}
                                            <div className="tom-select-custom">
                                                <select className="js-select form-select" id="ratingFilterLabel" autoComplete="off" multiple data-hs-tom-select-options="{
                                  &quot;singleMultiple&quot;: true,
                                  &quot;hideSelected&quot;: false,
                                  &quot;placeholder&quot;: &quot;Select rating&quot;
                                }">
                                                    <option label="empty" />
                                                    <option value="rating1" data-option-template="<div class=&quot;d-flex gap-1&quot;>
                                    <img src=&quot;./assets/svg/illustrations/star.svg&quot; alt=&quot;Review rating&quot; width=&quot;12&quot;>
                                    <img src=&quot;./assets/svg/illustrations/star-muted.svg&quot; alt=&quot;Review rating&quot; width=&quot;12&quot; data-hs-theme-appearance=&quot;default&quot;>
                                    <img src=&quot;./assets/svg/illustrations-light/star-muted.svg&quot; alt=&quot;Review rating&quot; width=&quot;12&quot; data-hs-theme-appearance=&quot;dark&quot;>
                                    <img src=&quot;./assets/svg/illustrations/star-muted.svg&quot; alt=&quot;Review rating&quot; width=&quot;12&quot; data-hs-theme-appearance=&quot;default&quot;>
                                    <img src=&quot;./assets/svg/illustrations-light/star-muted.svg&quot; alt=&quot;Review rating&quot; width=&quot;12&quot; data-hs-theme-appearance=&quot;dark&quot;>
                                    <img src=&quot;./assets/svg/illustrations/star-muted.svg&quot; alt=&quot;Review rating&quot; width=&quot;12&quot; data-hs-theme-appearance=&quot;default&quot;>
                                    <img src=&quot;./assets/svg/illustrations-light/star-muted.svg&quot; alt=&quot;Review rating&quot; width=&quot;12&quot; data-hs-theme-appearance=&quot;dark&quot;>
                                    <img src=&quot;./assets/svg/illustrations/star-muted.svg&quot; alt=&quot;Review rating&quot; width=&quot;12&quot; data-hs-theme-appearance=&quot;default&quot;>
                                    <img src=&quot;./assets/svg/illustrations-light/star-muted.svg&quot; alt=&quot;Review rating&quot; width=&quot;12&quot; data-hs-theme-appearance=&quot;dark&quot;>
                                    <span class=&quot;me-2&quot;>1 star</span>
                                  </div>">1 star</option>
                                                    <option value="rating2" data-option-template="<div class=&quot;d-flex gap-1&quot;>
                                    <img src=&quot;./assets/svg/illustrations/star.svg&quot; alt=&quot;Review rating&quot; width=&quot;12&quot;>
                                    <img src=&quot;./assets/svg/illustrations/star.svg&quot; alt=&quot;Review rating&quot; width=&quot;12&quot;>
                                    <img src=&quot;./assets/svg/illustrations/star-muted.svg&quot; alt=&quot;Review rating&quot; width=&quot;12&quot; data-hs-theme-appearance=&quot;default&quot;>
                                    <img src=&quot;./assets/svg/illustrations-light/star-muted.svg&quot; alt=&quot;Review rating&quot; width=&quot;12&quot; data-hs-theme-appearance=&quot;dark&quot;>
                                    <img src=&quot;./assets/svg/illustrations/star-muted.svg&quot; alt=&quot;Review rating&quot; width=&quot;12&quot; data-hs-theme-appearance=&quot;default&quot;>
                                    <img src=&quot;./assets/svg/illustrations-light/star-muted.svg&quot; alt=&quot;Review rating&quot; width=&quot;12&quot; data-hs-theme-appearance=&quot;dark&quot;>
                                    <img src=&quot;./assets/svg/illustrations/star-muted.svg&quot; alt=&quot;Review rating&quot; width=&quot;12&quot; data-hs-theme-appearance=&quot;default&quot;>
                                    <img src=&quot;./assets/svg/illustrations-light/star-muted.svg&quot; alt=&quot;Review rating&quot; width=&quot;12&quot; data-hs-theme-appearance=&quot;dark&quot;>
                                    <span class=&quot;me-2&quot;>2 star</span>
                                  </div>">2 star</option>
                                                    <option value="rating3" selected data-option-template="<div class=&quot;d-flex gap-1&quot;>
                                    <img src=&quot;./assets/svg/illustrations/star.svg&quot; alt=&quot;Review rating&quot; width=&quot;12&quot;>
                                    <img src=&quot;./assets/svg/illustrations/star.svg&quot; alt=&quot;Review rating&quot; width=&quot;12&quot;>
                                    <img src=&quot;./assets/svg/illustrations/star.svg&quot; alt=&quot;Review rating&quot; width=&quot;12&quot;>
                                    <img src=&quot;./assets/svg/illustrations/star-muted.svg&quot; alt=&quot;Review rating&quot; width=&quot;12&quot; data-hs-theme-appearance=&quot;default&quot;>
                                    <img src=&quot;./assets/svg/illustrations-light/star-muted.svg&quot; alt=&quot;Review rating&quot; width=&quot;12&quot; data-hs-theme-appearance=&quot;dark&quot;>
                                    <img src=&quot;./assets/svg/illustrations/star-muted.svg&quot; alt=&quot;Review rating&quot; width=&quot;12&quot; data-hs-theme-appearance=&quot;default&quot;>
                                    <img src=&quot;./assets/svg/illustrations-light/star-muted.svg&quot; alt=&quot;Review rating&quot; width=&quot;12&quot; data-hs-theme-appearance=&quot;dark&quot;>
                                    <span class=&quot;me-2&quot;>3 star</span>
                                  </div>">3 star</option>
                                                    <option value="rating4" selected data-option-template="<div class=&quot;d-flex gap-1&quot;>
                                    <img src=&quot;./assets/svg/illustrations/star.svg&quot; alt=&quot;Review rating&quot; width=&quot;12&quot;>
                                    <img src=&quot;./assets/svg/illustrations/star.svg&quot; alt=&quot;Review rating&quot; width=&quot;12&quot;>
                                    <img src=&quot;./assets/svg/illustrations/star.svg&quot; alt=&quot;Review rating&quot; width=&quot;12&quot;>
                                    <img src=&quot;./assets/svg/illustrations/star.svg&quot; alt=&quot;Review rating&quot; width=&quot;12&quot;>
                                    <img src=&quot;./assets/svg/illustrations/star-muted.svg&quot; alt=&quot;Review rating&quot; width=&quot;12&quot; data-hs-theme-appearance=&quot;default&quot;>
                                    <img src=&quot;./assets/svg/illustrations-light/star-muted.svg&quot; alt=&quot;Review rating&quot; width=&quot;12&quot; data-hs-theme-appearance=&quot;dark&quot;>
                                    <span class=&quot;me-2&quot;>4 star</span>
                                  </div>">4 star</option>
                                                    <option value="rating5" selected data-option-template="<div class=&quot;d-flex gap-1&quot;>
                                    <img src=&quot;./assets/svg/illustrations/star.svg&quot; alt=&quot;Review rating&quot; width=&quot;12&quot;>
                                    <img src=&quot;./assets/svg/illustrations/star.svg&quot; alt=&quot;Review rating&quot; width=&quot;12&quot;>
                                    <img src=&quot;./assets/svg/illustrations/star.svg&quot; alt=&quot;Review rating&quot; width=&quot;12&quot;>
                                    <img src=&quot;./assets/svg/illustrations/star.svg&quot; alt=&quot;Review rating&quot; width=&quot;12&quot;>
                                    <img src=&quot;./assets/svg/illustrations/star.svg&quot; alt=&quot;Review rating&quot; width=&quot;12&quot;>
                                    <span class=&quot;me-2&quot;>5 star</span>
                                  </div>">5 star</option>
                                                </select>
                                            </div>
                                            {/* End Select */}
                                        </div>
                                        {/* End Form */}
                                    </div>
                                    {/* End Col */}
                                </div>
                                {/* End Row */}
                                <div className="d-flex justify-content-end gap-3">
                                    <button type="button" className="btn btn-white">Cancel</button>
                                    <button type="button" className="btn btn-primary">Apply</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    {/* End Filter Search Collapse */}
                    {/* Table */}
                    <div className="table-responsive datatable-custom">
                        <table id="datatable" className="table table-borderless table-thead-bordered card-table" data-hs-datatables-options="{
                     &quot;autoWidth&quot;: false,
                     &quot;columnDefs&quot;: [{
                        &quot;targets&quot;: [0, 6],
                        &quot;orderable&quot;: false
                      }],
                     &quot;columns&quot;: [
                        null,
                        null,
                        { &quot;width&quot;: &quot;35%&quot; },
                        null,
                        null,
                        null,
                        null
                      ],
                     &quot;order&quot;: [],
                     &quot;info&quot;: {
                       &quot;totalQty&quot;: &quot;#datatableWithPaginationInfoTotalQty&quot;
                     },
                     &quot;search&quot;: &quot;#datatableSearch&quot;,
                     &quot;entries&quot;: &quot;#datatableEntries&quot;,
                     &quot;pageLength&quot;: 8,
                     &quot;isResponsive&quot;: false,
                     &quot;isShowPaging&quot;: false,
                     &quot;pagination&quot;: &quot;datatablePagination&quot;
                   }">
                            <thead className="thead-light">
                                <tr>
                                    <th scope="col" className="table-column-pe-0">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" defaultValue id="datatableCheckAll" />
                                            <label className="form-check-label" htmlFor="datatableCheckAll" />
                                        </div>
                                    </th>
                                    <th scope="col" className="table-column-ps-0">Team</th>
                                    <th scope="col" style={{ minWidth: '20rem' }}>Description</th>
                                    <th scope="col">Industry</th>
                                    <th scope="col">Rated</th>
                                    <th scope="col">Members</th>
                                    <th scope="col" />
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="table-column-pe-0">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" defaultValue id="teamDataCheck1" />
                                            <label className="form-check-label" htmlFor="teamDataCheck1" />
                                        </div>
                                    </td>
                                    <td className="table-column-ps-0"><a href="#">#digitalmarketing</a></td>
                                    <td>Our group promotes and sells products and services by leveraging online marketing tactics</td>
                                    <td><a className="badge bg-soft-primary text-primary p-2" href="#">Marketing team</a></td>
                                    <td>
                                        <div className="d-flex gap-1">
                                            <img src="./assets/svg/illustrations/star.svg" alt="Review rating" width={14} />
                                            <img src="./assets/svg/illustrations/star.svg" alt="Review rating" width={14} />
                                            <img src="./assets/svg/illustrations/star.svg" alt="Review rating" width={14} />
                                            <img src="./assets/svg/illustrations/star.svg" alt="Review rating" width={14} />
                                            <img src="./assets/svg/illustrations/star-half.svg" alt="Review rating" width={14} data-hs-theme-appearance="default" />
                                            <img src="./assets/svg/illustrations-light/star-half.svg" alt="Review rating" width={14} data-hs-theme-appearance="dark" />
                                        </div>
                                    </td>
                                    <td>
                                        <div className="avatar-group avatar-group-xs avatar-circle">
                                            <span className="avatar" data-bs-toggle="tooltip" data-bs-placement="top" title="Ella Lauda">
                                                <img className="avatar-img" src="./assets/img/160x160/img9.jpg" alt="Image Description" />
                                            </span>
                                            <span className="avatar" data-bs-toggle="tooltip" data-bs-placement="top" title="David Harrison">
                                                <img className="avatar-img" src="./assets/img/160x160/img3.jpg" alt="Image Description" />
                                            </span>
                                            <span className="avatar avatar-soft-dark" data-bs-toggle="tooltip" data-bs-placement="top" title="Antony Taylor">
                                                <span className="avatar-initials">A</span>
                                            </span>
                                            <span className="avatar avatar-soft-info" data-bs-toggle="tooltip" data-bs-placement="top" title="Sara Iwens">
                                                <span className="avatar-initials">S</span>
                                            </span>
                                            <span className="avatar" data-bs-toggle="tooltip" data-bs-placement="top" title="Finch Hoot">
                                                <img className="avatar-img" src="./assets/img/160x160/img5.jpg" alt="Image Description" />
                                            </span>
                                            <span className="avatar avatar-light avatar-circle" data-bs-toggle="tooltip" data-bs-placement="top" title="Sam Kart, Amanda Harvey and 1 more">
                                                <span className="avatar-initials">+3</span>
                                            </span>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="dropdown">
                                            <button type="button" className="btn btn-white btn-sm" id="teamsDropdown1" data-bs-toggle="dropdown" aria-expanded="false">
                                                More <i className="bi-chevron-down ms-1" />
                                            </button>
                                            <div className="dropdown-menu dropdown-menu-sm dropdown-menu-end" aria-labelledby="teamsDropdown1">
                                                <a className="dropdown-item" href="#">Rename team</a>
                                                <a className="dropdown-item" href="#">Add to favorites</a>
                                                <a className="dropdown-item" href="#">Archive team</a>
                                                <div className="dropdown-divider" />
                                                <a className="dropdown-item text-danger" href="#">Delete</a>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="table-column-pe-0">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" defaultValue id="teamDataCheck2" />
                                            <label className="form-check-label" htmlFor="teamDataCheck2" />
                                        </div>
                                    </td>
                                    <td className="table-column-ps-0"><a href="#">#ethereum</a></td>
                                    <td>Focusing on innovative and disruptive business models</td>
                                    <td><a className="badge bg-soft-dark text-dark p-2" href="#">Blockchain</a></td>
                                    <td>
                                        <div className="d-flex gap-1">
                                            <img src="./assets/svg/illustrations/star.svg" alt="Review rating" width={14} />
                                            <img src="./assets/svg/illustrations/star.svg" alt="Review rating" width={14} />
                                            <img src="./assets/svg/illustrations/star.svg" alt="Review rating" width={14} />
                                            <img src="./assets/svg/illustrations/star.svg" alt="Review rating" width={14} />
                                            <img src="./assets/svg/illustrations/star-muted.svg" alt="Review rating" width={14} data-hs-theme-appearance="default" />
                                            <img src="./assets/svg/illustrations-light/star-muted.svg" alt="Review rating" width={14} data-hs-theme-appearance="dark" />
                                        </div>
                                    </td>
                                    <td>
                                        <div className="avatar-group avatar-group-xs avatar-circle">
                                            <span className="avatar" data-bs-toggle="tooltip" data-bs-placement="top" title="Sam Kart">
                                                <img className="avatar-img" src="./assets/img/160x160/img4.jpg" alt="Image Description" />
                                            </span>
                                            <span className="avatar avatar-soft-danger" data-bs-toggle="tooltip" data-bs-placement="top" title="Teresa Eyker">
                                                <span className="avatar-initials">T</span>
                                            </span>
                                            <span className="avatar" data-bs-toggle="tooltip" data-bs-placement="top" title="Amanda Harvey">
                                                <img className="avatar-img" src="./assets/img/160x160/img10.jpg" alt="Image Description" />
                                            </span>
                                            <span className="avatar" data-bs-toggle="tooltip" data-bs-placement="top" title="David Harrison">
                                                <img className="avatar-img" src="./assets/img/160x160/img3.jpg" alt="Image Description" />
                                            </span>
                                            <span className="avatar avatar-soft-warning" data-bs-toggle="tooltip" data-bs-placement="top" title="Olivier L.">
                                                <span className="avatar-initials">O</span>
                                            </span>
                                            <span className="avatar avatar-light avatar-circle" data-bs-toggle="tooltip" data-bs-placement="top" title="Brian Halligan, Rachel Doe and 7 more">
                                                <span className="avatar-initials">+9</span>
                                            </span>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="dropdown">
                                            <button type="button" className="btn btn-white btn-sm" id="teamsDropdown2" data-bs-toggle="dropdown" aria-expanded="false">
                                                More <i className="bi-chevron-down ms-1" />
                                            </button>
                                            <div className="dropdown-menu dropdown-menu-sm dropdown-menu-end" aria-labelledby="teamsDropdown2">
                                                <a className="dropdown-item" href="#">Rename team</a>
                                                <a className="dropdown-item" href="#">Add to favorites</a>
                                                <a className="dropdown-item" href="#">Archive team</a>
                                                <div className="dropdown-divider" />
                                                <a className="dropdown-item text-danger" href="#">Delete</a>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="table-column-pe-0">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" defaultValue id="teamDataCheck3" />
                                            <label className="form-check-label" htmlFor="teamDataCheck3" />
                                        </div>
                                    </td>
                                    <td className="table-column-ps-0"><a href="#">#conference</a></td>
                                    <td>Online meeting services group</td>
                                    <td><a className="badge bg-soft-info text-info p-2" href="#">Marketing team</a></td>
                                    <td>
                                        <div className="d-flex gap-1">
                                            <img src="./assets/svg/illustrations/star.svg" alt="Review rating" width={14} />
                                            <img src="./assets/svg/illustrations/star.svg" alt="Review rating" width={14} />
                                            <img src="./assets/svg/illustrations/star.svg" alt="Review rating" width={14} />
                                            <img src="./assets/svg/illustrations/star.svg" alt="Review rating" width={14} />
                                            <img src="./assets/svg/illustrations/star-half.svg" alt="Review rating" width={14} data-hs-theme-appearance="default" />
                                            <img src="./assets/svg/illustrations-light/star-half.svg" alt="Review rating" width={14} data-hs-theme-appearance="dark" />
                                        </div>
                                    </td>
                                    <td>
                                        <div className="avatar-group avatar-group-xs avatar-circle">
                                            <span className="avatar" data-bs-toggle="tooltip" data-bs-placement="top" title="Costa Quinn">
                                                <img className="avatar-img" src="./assets/img/160x160/img6.jpg" alt="Image Description" />
                                            </span>
                                            <span className="avatar" data-bs-toggle="tooltip" data-bs-placement="top" title="Clarice Boone">
                                                <img className="avatar-img" src="./assets/img/160x160/img7.jpg" alt="Image Description" />
                                            </span>
                                            <span className="avatar avatar-soft-dark" data-bs-toggle="tooltip" data-bs-placement="top" title="Zack Ins">
                                                <span className="avatar-initials">Z</span>
                                            </span>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="dropdown">
                                            <button type="button" className="btn btn-white btn-sm" id="teamsDropdown3" data-bs-toggle="dropdown" aria-expanded="false">
                                                More <i className="bi-chevron-down ms-1" />
                                            </button>
                                            <div className="dropdown-menu dropdown-menu-sm dropdown-menu-end" aria-labelledby="teamsDropdown3">
                                                <a className="dropdown-item" href="#">Rename team</a>
                                                <a className="dropdown-item" href="#">Add to favorites</a>
                                                <a className="dropdown-item" href="#">Archive team</a>
                                                <div className="dropdown-divider" />
                                                <a className="dropdown-item text-danger" href="#">Delete</a>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="table-column-pe-0">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" defaultValue id="teamDataCheck4" />
                                            <label className="form-check-label" htmlFor="teamDataCheck4" />
                                        </div>
                                    </td>
                                    <td className="table-column-ps-0"><a href="#">#supportteam</a></td>
                                    <td>Keep in touch and stay productive with us</td>
                                    <td><a className="badge bg-soft-danger text-danger p-2" href="#">Customer service</a></td>
                                    <td>
                                        <div className="d-flex gap-1">
                                            <img src="./assets/svg/illustrations/star.svg" alt="Review rating" width={14} />
                                            <img src="./assets/svg/illustrations/star.svg" alt="Review rating" width={14} />
                                            <img src="./assets/svg/illustrations/star.svg" alt="Review rating" width={14} />
                                            <img src="./assets/svg/illustrations/star.svg" alt="Review rating" width={14} />
                                            <img src="./assets/svg/illustrations/star-half.svg" alt="Review rating" width={14} data-hs-theme-appearance="default" />
                                            <img src="./assets/svg/illustrations-light/star-half.svg" alt="Review rating" width={14} data-hs-theme-appearance="dark" />
                                        </div>
                                    </td>
                                    <td>
                                        <div className="avatar-group avatar-group-xs avatar-circle">
                                            <span className="avatar" data-bs-toggle="tooltip" data-bs-placement="top" title="Costa Quinn">
                                                <img className="avatar-img" src="./assets/img/160x160/img6.jpg" alt="Image Description" />
                                            </span>
                                            <span className="avatar" data-bs-toggle="tooltip" data-bs-placement="top" title="Clarice Boone">
                                                <img className="avatar-img" src="./assets/img/160x160/img7.jpg" alt="Image Description" />
                                            </span>
                                            <span className="avatar avatar-soft-dark" data-bs-toggle="tooltip" data-bs-placement="top" title="Adam Keep">
                                                <span className="avatar-initials">A</span>
                                            </span>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="dropdown">
                                            <button type="button" className="btn btn-white btn-sm" id="teamsDropdown4" data-bs-toggle="dropdown" aria-expanded="false">
                                                More <i className="bi-chevron-down ms-1" />
                                            </button>
                                            <div className="dropdown-menu dropdown-menu-sm dropdown-menu-end" aria-labelledby="teamsDropdown4">
                                                <a className="dropdown-item" href="#">Rename team</a>
                                                <a className="dropdown-item" href="#">Add to favorites</a>
                                                <a className="dropdown-item" href="#">Archive team</a>
                                                <div className="dropdown-divider" />
                                                <a className="dropdown-item text-danger" href="#">Delete</a>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="table-column-pe-0">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" defaultValue id="teamDataCheck5" />
                                            <label className="form-check-label" htmlFor="teamDataCheck5" />
                                        </div>
                                    </td>
                                    <td className="table-column-ps-0"><a href="#">#invoices</a></td>
                                    <td>This group serves online money transfers as an electronic alternative to paper methods</td>
                                    <td><a className="badge bg-soft-primary text-primary p-2" href="#">Online payment</a></td>
                                    <td>
                                        <div className="d-flex gap-1">
                                            <img src="./assets/svg/illustrations/star.svg" alt="Review rating" width={14} />
                                            <img src="./assets/svg/illustrations/star.svg" alt="Review rating" width={14} />
                                            <img src="./assets/svg/illustrations/star.svg" alt="Review rating" width={14} />
                                            <img src="./assets/svg/illustrations/star.svg" alt="Review rating" width={14} />
                                            <img src="./assets/svg/illustrations/star-muted.svg" alt="Review rating" width={14} data-hs-theme-appearance="default" />
                                            <img src="./assets/svg/illustrations-light/star-muted.svg" alt="Review rating" width={14} data-hs-theme-appearance="dark" />
                                        </div>
                                    </td>
                                    <td>
                                        <div className="avatar-group avatar-group-xs avatar-circle">
                                            <span className="avatar" data-bs-toggle="tooltip" data-bs-placement="top" title="Finch Hoot">
                                                <img className="avatar-img" src="./assets/img/160x160/img5.jpg" alt="Image Description" />
                                            </span>
                                            <span className="avatar avatar-soft-dark" data-bs-toggle="tooltip" data-bs-placement="top" title="Bob Bardly">
                                                <span className="avatar-initials">B</span>
                                            </span>
                                            <span className="avatar" data-bs-toggle="tooltip" data-bs-placement="top" title="Linda Bates">
                                                <img className="avatar-img" src="./assets/img/160x160/img8.jpg" alt="Image Description" />
                                            </span>
                                            <span className="avatar" data-bs-toggle="tooltip" data-bs-placement="top" title="Ella Lauda">
                                                <img className="avatar-img" src="./assets/img/160x160/img9.jpg" alt="Image Description" />
                                            </span>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="dropdown">
                                            <button type="button" className="btn btn-white btn-sm" id="teamsDropdown5" data-bs-toggle="dropdown" aria-expanded="false">
                                                More <i className="bi-chevron-down ms-1" />
                                            </button>
                                            <div className="dropdown-menu dropdown-menu-sm dropdown-menu-end" aria-labelledby="teamsDropdown5">
                                                <a className="dropdown-item" href="#">Rename team</a>
                                                <a className="dropdown-item" href="#">Add to favorites</a>
                                                <a className="dropdown-item" href="#">Archive team</a>
                                                <div className="dropdown-divider" />
                                                <a className="dropdown-item text-danger" href="#">Delete</a>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="table-column-pe-0">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" defaultValue id="teamDataCheck6" />
                                            <label className="form-check-label" htmlFor="teamDataCheck6" />
                                        </div>
                                    </td>
                                    <td className="table-column-ps-0"><a href="#">#payments</a></td>
                                    <td>Our responsibility to manage the money in this organization</td>
                                    <td><a className="badge bg-soft-info text-info p-2" href="#">Finance</a></td>
                                    <td>
                                        <div className="d-flex gap-1">
                                            <img src="./assets/svg/illustrations/star.svg" alt="Review rating" width={14} />
                                            <img src="./assets/svg/illustrations/star.svg" alt="Review rating" width={14} />
                                            <img src="./assets/svg/illustrations/star.svg" alt="Review rating" width={14} />
                                            <img src="./assets/svg/illustrations/star.svg" alt="Review rating" width={14} />
                                            <img src="./assets/svg/illustrations/star.svg" alt="Review rating" width={14} />
                                        </div>
                                    </td>
                                    <td>
                                        <div className="avatar-group avatar-group-xs avatar-circle">
                                            <span className="avatar" data-bs-toggle="tooltip" data-bs-placement="top" title="Finch Hoot">
                                                <img className="avatar-img" src="./assets/img/160x160/img5.jpg" alt="Image Description" />
                                            </span>
                                            <span className="avatar avatar-soft-dark" data-bs-toggle="tooltip" data-bs-placement="top" title="Bob Bardly">
                                                <span className="avatar-initials">B</span>
                                            </span>
                                            <span className="avatar" data-bs-toggle="tooltip" data-bs-placement="top" title="Linda Bates">
                                                <img className="avatar-img" src="./assets/img/160x160/img8.jpg" alt="Image Description" />
                                            </span>
                                            <span className="avatar" data-bs-toggle="tooltip" data-bs-placement="top" title="Ella Lauda">
                                                <img className="avatar-img" src="./assets/img/160x160/img9.jpg" alt="Image Description" />
                                            </span>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="dropdown">
                                            <button type="button" className="btn btn-white btn-sm" id="teamsDropdown6" data-bs-toggle="dropdown" aria-expanded="false">
                                                More <i className="bi-chevron-down ms-1" />
                                            </button>
                                            <div className="dropdown-menu dropdown-menu-sm dropdown-menu-end" aria-labelledby="teamsDropdown6">
                                                <a className="dropdown-item" href="#">Rename team</a>
                                                <a className="dropdown-item" href="#">Add to favorites</a>
                                                <a className="dropdown-item" href="#">Archive team</a>
                                                <div className="dropdown-divider" />
                                                <a className="dropdown-item text-danger" href="#">Delete</a>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="table-column-pe-0">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" defaultValue id="teamDataCheck7" />
                                            <label className="form-check-label" htmlFor="teamDataCheck7" />
                                        </div>
                                    </td>
                                    <td className="table-column-ps-0"><a href="#">#event</a></td>
                                    <td>Because we love to know what's going on &amp; share great ideas</td>
                                    <td><a className="badge bg-soft-dark text-dark p-2" href="#">Organizers</a></td>
                                    <td>
                                        <div className="d-flex gap-1">
                                            <img src="./assets/svg/illustrations/star.svg" alt="Review rating" width={14} />
                                            <img src="./assets/svg/illustrations/star.svg" alt="Review rating" width={14} />
                                            <img src="./assets/svg/illustrations/star.svg" alt="Review rating" width={14} />
                                            <img src="./assets/svg/illustrations/star-muted.svg" alt="Review rating" width={14} data-hs-theme-appearance="default" />
                                            <img src="./assets/svg/illustrations-light/star-muted.svg" alt="Review rating" width={14} data-hs-theme-appearance="dark" />
                                            <img src="./assets/svg/illustrations/star-muted.svg" alt="Review rating" width={14} data-hs-theme-appearance="default" />
                                            <img src="./assets/svg/illustrations-light/star-muted.svg" alt="Review rating" width={14} data-hs-theme-appearance="dark" />
                                        </div>
                                    </td>
                                    <td>
                                        <div className="avatar-group avatar-group-xs avatar-circle">
                                            <span className="avatar" data-bs-toggle="tooltip" data-bs-placement="top" title="Costa Quinn">
                                                <img className="avatar-img" src="./assets/img/160x160/img6.jpg" alt="Image Description" />
                                            </span>
                                            <span className="avatar avatar-soft-info" data-bs-toggle="tooltip" data-bs-placement="top" title="Bob Bardly">
                                                <span className="avatar-initials">B</span>
                                            </span>
                                            <span className="avatar" data-bs-toggle="tooltip" data-bs-placement="top" title="Clarice Boone">
                                                <img className="avatar-img" src="./assets/img/160x160/img7.jpg" alt="Image Description" />
                                            </span>
                                            <span className="avatar" data-bs-toggle="tooltip" data-bs-placement="top" title="Sam Kart">
                                                <img className="avatar-img" src="./assets/img/160x160/img4.jpg" alt="Image Description" />
                                            </span>
                                            <span className="avatar avatar-soft-primary" data-bs-toggle="tooltip" data-bs-placement="top" title="Daniel Cs.">
                                                <span className="avatar-initials">D</span>
                                            </span>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="dropdown">
                                            <button type="button" className="btn btn-white btn-sm" id="teamsDropdown7" data-bs-toggle="dropdown" aria-expanded="false">
                                                More <i className="bi-chevron-down ms-1" />
                                            </button>
                                            <div className="dropdown-menu dropdown-menu-sm dropdown-menu-end" aria-labelledby="teamsDropdown7">
                                                <a className="dropdown-item" href="#">Rename team</a>
                                                <a className="dropdown-item" href="#">Add to favorites</a>
                                                <a className="dropdown-item" href="#">Archive team</a>
                                                <div className="dropdown-divider" />
                                                <a className="dropdown-item text-danger" href="#">Delete</a>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="table-column-pe-0">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" defaultValue id="teamDataCheck8" />
                                            <label className="form-check-label" htmlFor="teamDataCheck8" />
                                        </div>
                                    </td>
                                    <td className="table-column-ps-0"><a href="#">#softwaretester</a></td>
                                    <td>Software testers play a critical role in application development. They are quality assurance experts who put applications</td>
                                    <td><a className="badge bg-soft-danger text-danger p-2" href="#">Software</a></td>
                                    <td>
                                        <div className="d-flex gap-1">
                                            <img src="./assets/svg/illustrations/star.svg" alt="Review rating" width={14} />
                                            <img src="./assets/svg/illustrations/star.svg" alt="Review rating" width={14} />
                                            <img src="./assets/svg/illustrations/star.svg" alt="Review rating" width={14} />
                                            <img src="./assets/svg/illustrations/star-half.svg" alt="Review rating" width={14} data-hs-theme-appearance="default" />
                                            <img src="./assets/svg/illustrations-light/star-half.svg" alt="Review rating" width={14} data-hs-theme-appearance="dark" />
                                            <img src="./assets/svg/illustrations/star-muted.svg" alt="Review rating" width={14} data-hs-theme-appearance="default" />
                                            <img src="./assets/svg/illustrations-light/star-muted.svg" alt="Review rating" width={14} data-hs-theme-appearance="dark" />
                                        </div>
                                    </td>
                                    <td>
                                        <div className="avatar-group avatar-group-xs avatar-circle">
                                            <span className="avatar avatar-soft-dark" data-bs-toggle="tooltip" data-bs-placement="top" title="Bob Bardly">
                                                <span className="avatar-initials">B</span>
                                            </span>
                                            <span className="avatar" data-bs-toggle="tooltip" data-bs-placement="top" title="Linda Bates">
                                                <img className="avatar-img" src="./assets/img/160x160/img8.jpg" alt="Image Description" />
                                            </span>
                                            <span className="avatar" data-bs-toggle="tooltip" data-bs-placement="top" title="Clarice Boone">
                                                <img className="avatar-img" src="./assets/img/160x160/img7.jpg" alt="Image Description" />
                                            </span>
                                            <span className="avatar avatar-soft-dark" data-bs-toggle="tooltip" data-bs-placement="top" title="Adam Keep">
                                                <span className="avatar-initials">A</span>
                                            </span>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="dropdown">
                                            <button type="button" className="btn btn-white btn-sm" id="teamsDropdown8" data-bs-toggle="dropdown" aria-expanded="false">
                                                More <i className="bi-chevron-down ms-1" />
                                            </button>
                                            <div className="dropdown-menu dropdown-menu-sm dropdown-menu-end" aria-labelledby="teamsDropdown8">
                                                <a className="dropdown-item" href="#">Rename team</a>
                                                <a className="dropdown-item" href="#">Add to favorites</a>
                                                <a className="dropdown-item" href="#">Archive team</a>
                                                <div className="dropdown-divider" />
                                                <a className="dropdown-item text-danger" href="#">Delete</a>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="table-column-pe-0">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" defaultValue id="teamDataCheck9" />
                                            <label className="form-check-label" htmlFor="teamDataCheck9" />
                                        </div>
                                    </td>
                                    <td className="table-column-ps-0"><a href="#">#sales</a></td>
                                    <td>Managing a sales team is no easy task. You have the potential to either make or break your sales reps.</td>
                                    <td><a className="badge bg-soft-primary text-primary p-2" href="#">Sales</a></td>
                                    <td>
                                        <div className="d-flex gap-1">
                                            <img src="./assets/svg/illustrations/star.svg" alt="Review rating" width={14} />
                                            <img src="./assets/svg/illustrations/star.svg" alt="Review rating" width={14} />
                                            <img src="./assets/svg/illustrations/star.svg" alt="Review rating" width={14} />
                                            <img src="./assets/svg/illustrations/star.svg" alt="Review rating" width={14} />
                                            <img src="./assets/svg/illustrations/star.svg" alt="Review rating" width={14} />
                                        </div>
                                    </td>
                                    <td>
                                        <div className="avatar-group avatar-group-xs avatar-circle">
                                            <span className="avatar" data-bs-toggle="tooltip" data-bs-placement="top" title="Ella Lauda">
                                                <img className="avatar-img" src="./assets/img/160x160/img9.jpg" alt="Image Description" />
                                            </span>
                                            <span className="avatar" data-bs-toggle="tooltip" data-bs-placement="top" title="David Harrison">
                                                <img className="avatar-img" src="./assets/img/160x160/img3.jpg" alt="Image Description" />
                                            </span>
                                            <span className="avatar" data-bs-toggle="tooltip" data-bs-placement="top" title="Finch Hoot">
                                                <img className="avatar-img" src="./assets/img/160x160/img5.jpg" alt="Image Description" />
                                            </span>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="dropdown">
                                            <button type="button" className="btn btn-white btn-sm" id="teamsDropdown9" data-bs-toggle="dropdown" aria-expanded="false">
                                                More <i className="bi-chevron-down ms-1" />
                                            </button>
                                            <div className="dropdown-menu dropdown-menu-sm dropdown-menu-end" aria-labelledby="teamsDropdown9">
                                                <a className="dropdown-item" href="#">Rename team</a>
                                                <a className="dropdown-item" href="#">Add to favorites</a>
                                                <a className="dropdown-item" href="#">Archive team</a>
                                                <div className="dropdown-divider" />
                                                <a className="dropdown-item text-danger" href="#">Delete</a>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="table-column-pe-0">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" defaultValue id="teamDataCheck10" />
                                            <label className="form-check-label" htmlFor="teamDataCheck10" />
                                        </div>
                                    </td>
                                    <td className="table-column-ps-0"><a href="#">#webdev</a></td>
                                    <td>Web talents</td>
                                    <td><a className="badge bg-soft-dark text-dark p-2" href="#">Development</a></td>
                                    <td>
                                        <div className="d-flex gap-1">
                                            <img src="./assets/svg/illustrations/star.svg" alt="Review rating" width={14} />
                                            <img src="./assets/svg/illustrations/star.svg" alt="Review rating" width={14} />
                                            <img src="./assets/svg/illustrations/star.svg" alt="Review rating" width={14} />
                                            <img src="./assets/svg/illustrations/star.svg" alt="Review rating" width={14} />
                                            <img src="./assets/svg/illustrations/star.svg" alt="Review rating" width={14} />
                                        </div>
                                    </td>
                                    <td>
                                        <div className="avatar-group avatar-group-xs avatar-circle">
                                            <span className="avatar avatar-soft-danger" data-bs-toggle="tooltip" data-bs-placement="top" title="Teresa Eyker">
                                                <span className="avatar-initials">T</span>
                                            </span>
                                            <span className="avatar" data-bs-toggle="tooltip" data-bs-placement="top" title="David Harrison">
                                                <img className="avatar-img" src="./assets/img/160x160/img3.jpg" alt="Image Description" />
                                            </span>
                                            <span className="avatar avatar-soft-warning" data-bs-toggle="tooltip" data-bs-placement="top" title="Olivier L.">
                                                <span className="avatar-initials">O</span>
                                            </span>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="dropdown">
                                            <button type="button" className="btn btn-white btn-sm" id="teamsDropdown10" data-bs-toggle="dropdown" aria-expanded="false">
                                                More <i className="bi-chevron-down ms-1" />
                                            </button>
                                            <div className="dropdown-menu dropdown-menu-sm dropdown-menu-end" aria-labelledby="teamsDropdown10">
                                                <a className="dropdown-item" href="#">Rename team</a>
                                                <a className="dropdown-item" href="#">Add to favorites</a>
                                                <a className="dropdown-item" href="#">Archive team</a>
                                                <div className="dropdown-divider" />
                                                <a className="dropdown-item text-danger" href="#">Delete</a>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="table-column-pe-0">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" defaultValue id="teamDataCheck11" />
                                            <label className="form-check-label" htmlFor="teamDataCheck11" />
                                        </div>
                                    </td>
                                    <td className="table-column-ps-0"><a href="#">#socialteam</a></td>
                                    <td>Team that manages and runs socials accounts of the company.</td>
                                    <td><a className="badge bg-soft-info text-info p-2" href="#">Marketing team</a></td>
                                    <td>
                                        <div className="d-flex gap-1">
                                            <img src="./assets/svg/illustrations/star.svg" alt="Review rating" width={14} />
                                            <img src="./assets/svg/illustrations/star.svg" alt="Review rating" width={14} />
                                            <img src="./assets/svg/illustrations/star.svg" alt="Review rating" width={14} />
                                            <img src="./assets/svg/illustrations/star-muted.svg" alt="Review rating" width={14} data-hs-theme-appearance="default" />
                                            <img src="./assets/svg/illustrations-light/star-muted.svg" alt="Review rating" width={14} data-hs-theme-appearance="dark" />
                                            <img src="./assets/svg/illustrations/star-muted.svg" alt="Review rating" width={14} data-hs-theme-appearance="default" />
                                            <img src="./assets/svg/illustrations-light/star-muted.svg" alt="Review rating" width={14} data-hs-theme-appearance="dark" />
                                        </div>
                                    </td>
                                    <td>
                                        <div className="avatar-group avatar-group-xs avatar-circle">
                                            <span className="avatar" data-bs-toggle="tooltip" data-bs-placement="top" title="Costa Quinn">
                                                <img className="avatar-img" src="./assets/img/160x160/img6.jpg" alt="Image Description" />
                                            </span>
                                            <span className="avatar avatar-soft-dark" data-bs-toggle="tooltip" data-bs-placement="top" title="Zack Ins">
                                                <span className="avatar-initials">Z</span>
                                            </span>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="dropdown">
                                            <button type="button" className="btn btn-white btn-sm" id="teamsDropdown11" data-bs-toggle="dropdown" aria-expanded="false">
                                                More <i className="bi-chevron-down ms-1" />
                                            </button>
                                            <div className="dropdown-menu dropdown-menu-sm dropdown-menu-end" aria-labelledby="teamsDropdown11">
                                                <a className="dropdown-item" href="#">Rename team</a>
                                                <a className="dropdown-item" href="#">Add to favorites</a>
                                                <a className="dropdown-item" href="#">Archive team</a>
                                                <div className="dropdown-divider" />
                                                <a className="dropdown-item text-danger" href="#">Delete</a>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="table-column-pe-0">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" defaultValue id="teamDataCheck12" />
                                            <label className="form-check-label" htmlFor="teamDataCheck12" />
                                        </div>
                                    </td>
                                    <td className="table-column-ps-0"><a href="#">#design</a></td>
                                    <td>Creative minds</td>
                                    <td><a className="badge bg-soft-primary text-primary p-2" href="#">Design</a></td>
                                    <td>
                                        <div className="d-flex gap-1">
                                            <img src="./assets/svg/illustrations/star.svg" alt="Review rating" width={14} />
                                            <img src="./assets/svg/illustrations/star.svg" alt="Review rating" width={14} />
                                            <img src="./assets/svg/illustrations/star.svg" alt="Review rating" width={14} />
                                            <img src="./assets/svg/illustrations/star.svg" alt="Review rating" width={14} />
                                            <img src="./assets/svg/illustrations/star.svg" alt="Review rating" width={14} />
                                        </div>
                                    </td>
                                    <td>
                                        <div className="avatar-group avatar-group-xs avatar-circle">
                                            <span className="avatar" data-bs-toggle="tooltip" data-bs-placement="top" title="Ella Lauda">
                                                <img className="avatar-img" src="./assets/img/160x160/img9.jpg" alt="Image Description" />
                                            </span>
                                            <span className="avatar" data-bs-toggle="tooltip" data-bs-placement="top" title="David Harrison">
                                                <img className="avatar-img" src="./assets/img/160x160/img3.jpg" alt="Image Description" />
                                            </span>
                                            <span className="avatar avatar-soft-dark" data-bs-toggle="tooltip" data-bs-placement="top" title="Antony Taylor">
                                                <span className="avatar-initials">A</span>
                                            </span>
                                            <span className="avatar avatar-soft-info" data-bs-toggle="tooltip" data-bs-placement="top" title="Sara Iwens">
                                                <span className="avatar-initials">S</span>
                                            </span>
                                            <span className="avatar" data-bs-toggle="tooltip" data-bs-placement="top" title="Finch Hoot">
                                                <img className="avatar-img" src="./assets/img/160x160/img5.jpg" alt="Image Description" />
                                            </span>
                                            <span className="avatar avatar-light avatar-circle" data-bs-toggle="tooltip" data-bs-placement="top" title="Sam Kart, Amanda Harvey and 1 more">
                                                <span className="avatar-initials">+3</span>
                                            </span>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="dropdown">
                                            <button type="button" className="btn btn-white btn-sm" id="teamsDropdown12" data-bs-toggle="dropdown" aria-expanded="false">
                                                More <i className="bi-chevron-down ms-1" />
                                            </button>
                                            <div className="dropdown-menu dropdown-menu-sm dropdown-menu-end" aria-labelledby="teamsDropdown12">
                                                <a className="dropdown-item" href="#">Rename team</a>
                                                <a className="dropdown-item" href="#">Add to favorites</a>
                                                <a className="dropdown-item" href="#">Archive team</a>
                                                <div className="dropdown-divider" />
                                                <a className="dropdown-item text-danger" href="#">Delete</a>
                                            </div>
                                        </div>
                                    </td>
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
                                            <option value={4}>4</option>
                                            <option value={6}>6</option>
                                            <option value={8} selected>8</option>
                                            <option value={12}>12</option>
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
            {/* Share with people Modal */}
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
