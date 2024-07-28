import React from 'react'

export default function Error404() {
    return (
        <>
            <main id="content" role="main" className="main">
                {/* Content */}
                <div className="content container-fluid">
                    <div className="row justify-content-center align-items-sm-center py-sm-10">
                        <div className="col-9 col-sm-6 col-lg-4">
                            <div className="text-center text-sm-end me-sm-4 mb-5 mb-sm-0">
                                <img className="img-fluid" src="./assets/svg/illustrations/oc-thinking.svg" alt="Image Description" data-hs-theme-appearance="default" />
                                {/* <img className="img-fluid" src="./assets/svg/illustrations-light/oc-thinking.svg" alt="Image Description" data-hs-theme-appearance="dark" /> */}
                            </div>
                        </div>
                        {/* End Col */}
                        <div className="col-sm-6 col-lg-4 text-center text-sm-start">
                            <h1 className="display-1 mb-0">404</h1>
                            <p className="lead">Sorry, the page you're looking for cannot be found.</p>
                            <a className="btn btn-primary" href="./index.html">Go back to the App</a>
                        </div>
                        {/* End Col */}
                    </div>
                    {/* End Row */}
                </div>
                {/* End Content */}
                {/* Footer */}
                <div className="footer">
                    <div className="row justify-content-between align-items-center">
                        <div className="col">
                            <p className="fs-6 mb-0">© Front. <span className="d-none d-sm-inline-block">2022 Htmlstream.</span></p>
                        </div>
                        {/* End Col */}
                        <div className="col-auto">
                            <div className="d-flex justify-content-end">
                                {/* List Separator */}
                                <ul className="list-inline list-separator">
                                    <li className="list-inline-item">
                                        <a className="list-separator-link" href="#">FAQ</a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a className="list-separator-link" href="#">License</a>
                                    </li>
                                    <li className="list-inline-item">
                                        {/* Keyboard Shortcuts Toggle */}
                                        <button className="btn btn-ghost-secondary btn btn-icon btn-ghost-secondary rounded-circle" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasKeyboardShortcuts" aria-controls="offcanvasKeyboardShortcuts">
                                            <i className="bi-command" />
                                        </button>
                                        {/* End Keyboard Shortcuts Toggle */}
                                    </li>
                                </ul>
                                {/* End List Separator */}
                            </div>
                        </div>
                        {/* End Col */}
                    </div>
                    {/* End Row */}
                </div>
                {/* End Footer */}
            </main>
        </>
    )
}
