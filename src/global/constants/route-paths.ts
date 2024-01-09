enum RoutePaths {
  PRELAUNCH_PAGE = "/",
  LANDING_PAGE = "/landing-page",
  LOGIN = "/auth/login",
  SIGNUP = "/auth/signup",
  DASHBOARD = "/dashboard",
  TRANSLATE = "/translate",
  ORDERCONFIRMATION = "/order-confirmation",
  ORDERCONFIRMATIONPROFESSIONAL = "/order-confirmation-professional",
  ORDERCONFIRMATIONPROFESSIONALSUCCESS = `${ORDERCONFIRMATIONPROFESSIONAL}/success`,
  SUCCESS = "/success",
  FAILURE = "/failure",
  ISSUES = "/issues",
  ORDERS = "/orders",
  REVISION = "/request-revision",
  PROFILE = "/profile",
  LOGOUT = "/logout",
  CONTACT = "/contact-us",
  PRICING = "/pricing",
  NOTIFICATIONS = "/notifications",
}

export default RoutePaths;
