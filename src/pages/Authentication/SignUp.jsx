import React from 'react'

export default function SignUp() {
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
                            <div className="card-body">
                                {/* Form */}
                                <form className="js-validate needs-validation" noValidate>
                                    <div className="text-center">
                                        <div className="mb-5">
                                            <h1 className="display-5">Create your account</h1>
                                            <p>Already have an account? <a className="link" href="./authentication-login-basic.html">Sign in here</a></p>
                                        </div>
                                        <div className="d-grid mb-4">
                                            <a className="btn btn-white btn-lg" href="#">
                                                <span className="d-flex justify-content-center align-items-center">
                                                    <img className="avatar avatar-xss me-2" src="./assets/svg/brands/google-icon.svg" alt="Image Description" />
                                                    Sign up with Google
                                                </span>
                                            </a>
                                        </div>
                                        <span className="divider-center text-muted mb-4">OR</span>
                                    </div>
                                    <label className="form-label" htmlFor="fullNameSrEmail">Full name</label>
                                    {/* Form */}
                                    <div className="row">
                                        <div className="col-sm-6">
                                            {/* Form */}
                                            <div className="mb-4">
                                                <input type="text" className="form-control form-control-lg" name="fullName" id="fullNameSrEmail" placeholder="Mark" aria-label="Mark" required />
                                                <span className="invalid-feedback">Please enter your first name.</span>
                                            </div>
                                            {/* End Form */}
                                        </div>
                                        <div className="col-sm-6">
                                            {/* Form */}
                                            <div className="mb-4">
                                                <input type="text" className="form-control form-control-lg" placeholder="Williams" aria-label="Williams" required />
                                                <span className="invalid-feedback">Please enter your last name.</span>
                                            </div>
                                            {/* End Form */}
                                        </div>
                                    </div>
                                    {/* End Form */}
                                    {/* Form */}
                                    <div className="mb-4">
                                        <label className="form-label" htmlFor="signupSrEmail">Your email</label>
                                        <input type="email" className="form-control form-control-lg" name="email" id="signupSrEmail" placeholder="Markwilliams@site.com" aria-label="Markwilliams@site.com" required />
                                        <span className="invalid-feedback">Please enter a valid email address.</span>
                                    </div>
                                    {/* End Form */}
                                    {/* Form */}
                                    <div className="mb-4">
                                        <label className="form-label" htmlFor="signupSrPassword">Password</label>
                                        <div className="input-group input-group-merge" data-hs-validation-validate-class>
                                            <input type="password" className="js-toggle-password form-control form-control-lg" name="password" id="signupSrPassword" placeholder="8+ characters required" aria-label="8+ characters required" required minLength={8} data-hs-toggle-password-options="{
                           &quot;target&quot;: [&quot;.js-toggle-password-target-1&quot;, &quot;.js-toggle-password-target-2&quot;],
                           &quot;defaultClass&quot;: &quot;bi-eye-slash&quot;,
                           &quot;showClass&quot;: &quot;bi-eye&quot;,
                           &quot;classChangeTarget&quot;: &quot;.js-toggle-password-show-icon-1&quot;
                         }" />
                                            <a className="js-toggle-password-target-1 input-group-append input-group-text" href="javascript:;">
                                                <i className="js-toggle-password-show-icon-1 bi-eye" />
                                            </a>
                                        </div>
                                        <span className="invalid-feedback">Your password is invalid. Please try again.</span>
                                    </div>
                                    {/* End Form */}
                                    {/* Form */}
                                    <div className="mb-4">
                                        <label className="form-label" htmlFor="signupSrConfirmPassword">Confirm password</label>
                                        <div className="input-group input-group-merge" data-hs-validation-validate-class>
                                            <input type="password" className="js-toggle-password form-control form-control-lg" name="confirmPassword" id="signupSrConfirmPassword" placeholder="8+ characters required" aria-label="8+ characters required" required minLength={8} data-hs-toggle-password-options="{
                           &quot;target&quot;: [&quot;.js-toggle-password-target-1&quot;, &quot;.js-toggle-password-target-2&quot;],
                           &quot;defaultClass&quot;: &quot;bi-eye-slash&quot;,
                           &quot;showClass&quot;: &quot;bi-eye&quot;,
                           &quot;classChangeTarget&quot;: &quot;.js-toggle-password-show-icon-2&quot;
                         }" />
                                            <a className="js-toggle-password-target-2 input-group-append input-group-text" href="javascript:;">
                                                <i className="js-toggle-password-show-icon-2 bi-eye" />
                                            </a>
                                        </div>
                                        <span className="invalid-feedback">Password does not match the confirm password.</span>
                                    </div>
                                    {/* End Form */}
                                    {/* Form Check */}
                                    <div className="form-check mb-4">
                                        <input className="form-check-input" type="checkbox" defaultValue id="termsCheckbox" required />
                                        <label className="form-check-label" htmlFor="termsCheckbox">
                                            I accept the <a href="#">Terms and Conditions</a>
                                        </label>
                                        <span className="invalid-feedback">Please accept our Terms and Conditions.</span>
                                    </div>
                                    {/* End Form Check */}
                                    <div className="d-grid gap-2">
                                        <button type="submit" className="btn btn-primary btn-lg">Create an account</button>
                                        <button type="submit" className="btn btn-link">
                                            or Start your 30-day trial <i className="bu-chevron-right" />
                                        </button>
                                    </div>
                                </form>
                                {/* End Form */}
                            </div>
                        </div>
                        {/* End Card */}
                        {/* Footer */}
                        <div className="position-relative text-center zi-1">
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
