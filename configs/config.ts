const appName = process.env.APP_NAME ?? "Muchamad Fauzy | Software Engineer";
const appDescription =
  process.env.APP_DESCRIPTION ??
  "Portfolio for Muchamad Fauzy, a software engineer specializing in backend systems and full-stack product delivery.";
const appUrl = process.env.APP_URL ?? "http://localhost:3000";
const appHeaderName = process.env.APP_HEADER_NAME ?? "Muchamad Fauzy"
const appFooterName = process.env.APP_FOOTER_NAME ?? "Muchamad Fauzy"

export const appConfig = Object.freeze({
  name: appName,
  description: appDescription,
  url: appUrl,
  headerName: appHeaderName,
  footerName: appFooterName
});
