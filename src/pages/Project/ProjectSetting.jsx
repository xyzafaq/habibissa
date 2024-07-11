import React from 'react'
import Header from './Component/Header'

export default function ProjectSetting() {
    return (
        <>
            <div className="content container-fluid">
                {/* Page Header */}
                <div className="page-header">
                    <div className="row align-items-end mb-3">
                        <div className="col-sm">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb breadcrumb-no-gutter">
                                    <li className="breadcrumb-item"><a className="breadcrumb-link" href="javascript:;">Pages</a></li>
                                    <li className="breadcrumb-item"><a className="breadcrumb-link" href="javascript:;">Projects</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">Settings</li>
                                </ol>
                            </nav>
                            <h1 className="page-header-title">Settings</h1>
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
                <div className="row justify-content-lg-center">
                    <div className="col-lg-9">
                        {/* Card */}
                        <div className="card card-lg mb-3 mb-lg-5">
                            {/* Header */}
                            <div className="card-header">
                                <h4 className="card-header-title">Details</h4>
                            </div>
                            {/* End Header */}
                            {/* Body */}
                            <div className="card-body">
                                {/* Form */}
                                <div className="mb-4">
                                    <label className="form-label">Project logo</label>
                                    <div className="d-flex align-items-center">
                                        {/* Avatar */}
                                        <label className="avatar avatar-xl avatar-circle avatar-uploader me-5" htmlFor="avatarUploader">
                                            <img id="avatarProjectSettingsImg" className="avatar-img" src="./assets/svg/brands/guideline-icon.svg" alt="Image Description" />
                                            <input type="file" className="js-file-attach avatar-uploader-input" id="avatarUploader" data-hs-file-attach-options="{
                                &quot;textTarget&quot;: &quot;#avatarProjectSettingsImg&quot;,
                                &quot;mode&quot;: &quot;image&quot;,
                                &quot;targetAttr&quot;: &quot;src&quot;,
                                &quot;resetTarget&quot;: &quot;.js-file-attach-reset-img&quot;,
                                &quot;resetImg&quot;: &quot;./assets/img/160x160/img2.jpg&quot;,
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
                                    <label htmlFor="projectNameProjectSettingsLabel" className="form-label">Project name <i className="bi-question-circle text-body ms-1" data-bs-oggle="tooltip" data-bs-placement="top" title="Displayed on public forums, such as Front." /></label>
                                    <div className="input-group input-group-merge">
                                        <div className="input-group-prepend input-group-text">
                                            <i className="bi-briefcase" />
                                        </div>
                                        <input type="text" className="form-control" name="projectName" id="projectNameProjectSettingsLabel" placeholder="Enter project name here" aria-label="Enter project name here" defaultValue="Cloud computing web service" />
                                    </div>
                                </div>
                                {/* End Form */}
                                {/* Quill */}
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
                            {/* End Body */}
                            {/* Footer */}
                            <div className="card-footer d-flex justify-content-end align-items-center gap-3">
                                <button type="button" className="btn btn-white">Cancel</button>
                                <button type="button" className="btn btn-primary">Save changes</button>
                            </div>
                            {/* End Footer */}
                        </div>
                        {/* End Card */}
                        {/* Card */}
                        <div className="card card-lg">
                            {/* Header */}
                            <div className="card-header">
                                <h4 className="card-header-title">Terms</h4>
                            </div>
                            {/* End Header */}
                            {/* Body */}
                            <div className="card-body">
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
                                                    <option value="fixed">Fixed</option>
                                                    <option value="Per hour">Per hour</option>
                                                    <option value="Per day">Per day</option>
                                                    <option value="Per week">Per week</option>
                                                    <option value="Per month" selected>Per month</option>
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
                                                <input type="text" className="form-control" name="expectedValue" id="expectedValueNewProjectLabel" placeholder="Enter value here" aria-label="Enter value here" defaultValue="100,000 USD" />
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
                                            <label htmlFor="milestoneNewProjectLabel" className="form-label">Milestone <a className="fs-6 ms-1" href="javascript:;">Change probability</a></label>
                                            {/* Select */}
                                            <div className="tom-select-custom">
                                                <select className="js-select form-select" id="milestoneNewProjectLabel" data-hs-tom-select-options="{
                                  &quot;searchInDropdown&quot;: false,
                                  &quot;hideSearch&quot;: true
                                }">
                                                    <option value="New">New</option>
                                                    <option value="Qualified">Qualified</option>
                                                    <option value="Meeting">Meeting</option>
                                                    <option value="Proposal" selected>Proposal</option>
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
                                                    <option value="privacy1" selected data-option-template="<span class=&quot;d-flex&quot;><i class=&quot;bi-people fs2 text-body&quot;></i><span class=&quot;flex-grow-1 ms-2&quot;><span class=&quot;d-block&quot;>Everyone</span><small class=&quot;tom-select-custom-hide&quot;>Public to Front Dashboard</small></span></span>">Everyone</option>
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
                                        <input className="form-check-input" type="checkbox" defaultValue id="budgetNewProjectCheckbox" defaultChecked />
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
                            {/* End Body */}
                            {/* Footer */}
                            <div className="card-footer d-flex justify-content-end gap-3">
                                <button type="button" className="btn btn-white">Cancel</button>
                                <button type="button" className="btn btn-primary">Save changes</button>
                            </div>
                            {/* End Footer */}
                        </div>
                        {/* End Card */}
                    </div>
                    {/* End Col */}
                </div>
                {/* End Row */}
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
