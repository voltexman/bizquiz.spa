import { Link } from "react-router-dom"
import { toAbsoluteUrl } from "../../../../_metronic/helpers"

export function EmailVerification() {
    return (
        <>
            <div className="card-body text-center py-15 py-lg-20">
                <div className="mb-14">
                    <img alt="Logo" src={toAbsoluteUrl('/media/logos/custom-2.svg')} className="h-40px" />
                </div>
                <h1 className="fw-bolder text-gray-900 mb-5">Verify your email</h1>
                <div className="fs-6 mb-8">
                    <span className="fw-semibold text-gray-500">Did’t receive an email?</span>
                    <a href="/metronic8/demo1/../demo1/authentication/layouts/corporate/sign-up.html" className="link-primary fw-bold">Try Again</a>
                </div>
                <div className="mb-11">
                    <Link
                    to={'/auth/login'}
                    className='btn btn-sm btn-primary'
                    >Sign In</Link>
                </div>
                <div className="mb-0">
                    <img src="/metronic8/demo1/assets/media/auth/please-verify-your-email.png" className="mw-100 mh-300px theme-light-show" alt="" />
                    <img src="/metronic8/demo1/assets/media/auth/please-verify-your-email-dark.png" className="mw-100 mh-300px theme-dark-show" alt="" />
                </div>
            </div>
        </>
    )
}