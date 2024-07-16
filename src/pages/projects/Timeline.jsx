import React from 'react'

export default function Timeline() {
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
                                    <li className="breadcrumb-item active" aria-current="page">Timeline</li>
                                </ol>
                            </nav>
                            <h1 className="page-header-title">Timeline</h1>
                        </div>
                        {/* End Col */}
                    </div>
                    {/* End Row */}
                    {/* Nav */}
                    <ul className="nav nav-tabs page-header-tabs">
                        <li className="nav-item">
                            <a className="nav-link" href="/projects-overview">
                                Projects <span className="badge bg-soft-dark text-dark ms-1">24</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="/projects-timeline">
                                Timeline
                            </a>
                        </li>
                    </ul>
                    {/* End Nav */}
                </div>
                {/* End Page Header */}
                {/* Info */}
                <div className="text-center">
                    <div className="h1">
                        <span className="badge bg-primary rounded-pill text-uppercase">
                            <i className="bi-patch-check-fill me-1" /> Pro
                        </span>
                    </div>
                    <div className="mb-4">
                        <h2>Plan and manage projects with Timeline</h2>
                    </div>
                    <div className="w-lg-75 mx-lg-auto mb-5">
                        <img className="img-fluid" src="./assets/svg/illustrations/project-schedule.svg" alt="Image Description" />
                    </div>
                    <p>Create a visual project plan that helps you stay on schedule—so you hit your deadlines. <a className="link" href="#">Learn More <i className="bi-chevron-right" /></a></p>
                    <a className="btn btn-primary" href="#">Upgrade to premium</a>
                </div>
                {/* End Info */}
            </div>
        </>
    )
}
