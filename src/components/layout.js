import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <h1
          className={'sitename'}
          style={{
            ...scale(1.5),
            marginBottom: 0,
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h1>
      )
    } else {
      header = (
        <h2
          className={'sitename'}
          style={{
            // fontFamily: `'Lalezar-Regular', sans-serif`,
            marginTop: 0,
            marginBottom: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h2>
      )
    }
    return (
      <>
        <header style={{
          background: '#f7e9ec',
          margin: '10px 2%',
          borderRadius: 20,
          height: 120,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>{header}</header>
        <main style={{
          marginRight: `auto`,
          marginLeft: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}>{children}</main>
      </>
    )
  }
}

export default Layout
