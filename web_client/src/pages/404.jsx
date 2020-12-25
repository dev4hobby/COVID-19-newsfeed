import * as React from "react"
import { Link } from "gatsby"

// styles
const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}

const paragraphStyles = {
  marginBottom: 48,
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}

// markup
const NotFoundPage = () => {
  return (
    <main style={pageStyles}>
      <title>서비스 준비중입니다</title>
      <h1 style={headingStyles}>서비스 준비중입니다</h1>
      <p style={paragraphStyles}>
        미안해요 ㅎㅎ;{" "}
        <span role="img" aria-label="Pensive emoji">
          😔
        </span>{" "}
        준비되는대로 서비스가 오픈 될 예정입니다.
        <br />
        {process.env.NODE_ENV === "development" ? (
          <>
            <br />
            Try creating a page in <code style={codeStyles}>src/pages/</code>.
            <br />
          </>
        ) : null}
        <br />
        <Link to="/">새로고침</Link>.
      </p>
    </main>
  )
}

export default NotFoundPage
