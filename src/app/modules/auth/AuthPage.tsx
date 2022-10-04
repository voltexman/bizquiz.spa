/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect } from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import { Registration } from './components/Registration'
import { ForgotPassword } from './components/ForgotPassword'
import { Login } from './components/Login'
import { toAbsoluteUrl } from '../../../_metronic/helpers'
import { EmailVerification } from './components/EmailVerification'
import { FormattedMessage, useIntl } from 'react-intl'

const AuthLayout = () => {

  const intl = useIntl()

  useEffect(() => {
    document.body.classList.add('bg-body')
    return () => {
      document.body.classList.remove('bg-body')
    }
  }, [])

  return (
    <><div className="d-flex flex-column flex-root" id="kt_app_root">
      <style>{`body { background-image: url('` + toAbsoluteUrl('/media/auth/bg10.jpeg') + `'); } [data-theme="dark"] body { background-image: url('` + toAbsoluteUrl('/media/auth/bg10-dark.jpeg') + `'); }`}</style>
      <div className="d-flex flex-column flex-lg-row flex-column-fluid">
        <div className="d-flex flex-lg-row-fluid">
          <div className="d-flex flex-column flex-center pb-0 pb-lg-10 p-10 w-100">
            <img className="theme-light-show mx-auto mw-100 w-150px w-lg-300px mb-10 mb-lg-20" src={toAbsoluteUrl('/media/auth/agency.png')} alt="" />
            <img className="theme-dark-show mx-auto mw-100 w-150px w-lg-300px mb-10 mb-lg-20" src={toAbsoluteUrl('/media/auth/agency-dark.png')} alt="" />
            <h1 className="text-gray-800 fs-2qx fw-bold text-center mb-7">{intl.formatMessage({ id: 'AUTH.GENERAL.TITLE' })}</h1>
            <div className="text-gray-600 fs-base text-center fw-semibold col-12 col-sm-9">
              <FormattedMessage
                id="AUTH.GENERAL.SUBTITLE"
                values={{
                  // br: <br />,
                }}
              />
            </div>
          </div>
        </div>
        <div className="d-flex flex-column-fluid flex-lg-row-auto justify-content-center justify-content-lg-end p-12">
          <div className="bg-body d-flex flex-center rounded-4 w-md-600px p-10">
            <div className="w-md-500px">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div></>
  )
}

const AuthPage = () => (
  <Routes>
    <Route element={<AuthLayout />}>
      <Route path='login' element={<Login />} />
      <Route path='registration' element={<Registration />} />
      <Route path='email-verification' element={<EmailVerification />} />
      <Route path='forgot-password' element={<ForgotPassword />} />
      <Route index element={<Login />} />
    </Route>
  </Routes>
)

export { AuthPage }
