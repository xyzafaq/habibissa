import React from 'react'

export default function TwostepVerification() {
    return (
        <>
            <main id="content" role="main" className="main">
                <div className="position-fixed top-0 end-0 start-0 bg-img-start" style={{ height: '32rem', backgroundImage: 'url(./assets/svg/components/card-6.svg)' }}>
                    {/* Shape */}
                    <div className="shape shape-bottom zi-1">
                        <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 1921 273">
                            <polygon fill="#fff" points="0,273 1921,273 1921,0 " />
                        </svg>
                    </div>
                    {/* End Shape */}
                </div>
                {/* Content */}
                <div className="container py-5 py-sm-7">
                    <a className="d-flex justify-content-center mb-5" href="./index.html">
                        <img className="zi-2" src="./assets/svg/logos/logo.svg" alt="Image Description" style={{ width: '8rem' }} />
                    </a>
                    <div className="mx-auto" style={{ maxWidth: '30rem' }}>
                        {/* Card */}
                        <div className="card card-lg mb-5">
                            <div className="card-body text-center">
                                <div className="mb-4">
                                    <img className="avatar avatar-xxl avatar-4x3" src="./assets/svg/illustrations/oc-unlock.svg" alt="Image Description" data-hs-theme-appearance="default" />
                                    <img className="avatar avatar-xxl avatar-4x3" src="./assets/svg/illustrations-light/oc-unlock.svg" alt="Image Description" data-hs-theme-appearance="dark" />
                                </div>
                                <div className="mb-5">
                                    <h1 className="display-5">2-step Verification</h1>
                                    <p className="mb-0">We sent a verification code to your email.</p>
                                    <p>Enter the code from the email in the field below.</p>
                                </div>
                                <div className="row gx-2 gx-sm-3">
                                    <div className="col">
                                        {/* Form */}
                                        <div className="mb-4">
                                            <input type="text" className="form-control form-control-single-number" name="code1" id="twoStepVerificationSrCodeInput1" placeholder aria-label maxLength={1} autoComplete="off" autoCapitalize="off" spellCheck="false" autofocus />
                                        </div>
                                        {/* End Form */}
                                    </div>
                                    <div className="col">
                                        {/* Form */}
                                        <div className="mb-4">
                                            <input type="text" className="form-control form-control-single-number" name="code2" id="twoStepVerificationSrCodeInput2" placeholder aria-label maxLength={1} autoComplete="off" autoCapitalize="off" spellCheck="false" />
                                        </div>
                                        {/* End Form */}
                                    </div>
                                    <div className="col">
                                        {/* Form */}
                                        <div className="mb-4">
                                            <input type="text" className="form-control form-control-single-number" name="code3" id="twoStepVerificationSrCodeInput3" placeholder aria-label maxLength={1} autoComplete="off" autoCapitalize="off" spellCheck="false" />
                                        </div>
                                        {/* End Form */}
                                    </div>
                                    <div className="col">
                                        {/* Form */}
                                        <div className="mb-4">
                                            <input type="text" className="form-control form-control-single-number" name="code4" id="twoStepVerificationSrCodeInput4" placeholder aria-label maxLength={1} autoComplete="off" autoCapitalize="off" spellCheck="false" />
                                        </div>
                                        {/* End Form */}
                                    </div>
                                </div>
                                <div className="d-grid mb-3">
                                    <button type="submit" className="btn btn-primary btn-lg">Verify my account</button>
                                </div>
                                <div className="text-center">
                                    <p>Haven't received it? <a href="#">Resend a new code.</a></p>
                                </div>
                            </div>
                        </div>
                        {/* End Card */}
                        {/* Footer */}
                        <div className="text-center">
                            <small className="text-cap text-body mb-4">Trusted by the world's best teams</small>
                            <div className="w-85 mx-auto">
                                <div className="row justify-content-between">
                                    <div className="col">
                                        <img className="img-fluid" src="./assets/svg/brands/gitlab-gray.svg" alt="Logo" />
                                    </div>
                                    {/* End Col */}
                                    <div className="col">
                                        <img className="img-fluid" src="./assets/svg/brands/fitbit-gray.svg" alt="Logo" />
                                    </div>
                                    {/* End Col */}
                                    <div className="col">
                                        <img className="img-fluid" src="./assets/svg/brands/flow-xo-gray.svg" alt="Logo" />
                                    </div>
                                    {/* End Col */}
                                    <div className="col">
                                        <img className="img-fluid" src="./assets/svg/brands/layar-gray.svg" alt="Logo" />
                                    </div>
                                    {/* End Col */}
                                </div>
                                {/* End Row */}
                            </div>
                        </div>
                        {/* End Footer */}
                    </div>
                </div>
                {/* End Content */}
            </main>
        </>
    )
}
