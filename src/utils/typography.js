import Typography from "typography"
import AwesomeRTL from "typography-theme-awesome-rtl"

AwesomeRTL.overrideThemeStyles = () => {
  return {
    "a.gatsby-resp-image-link": {
      boxShadow: `none`,
    },
  }
}

delete AwesomeRTL.googleFonts

const typography = new Typography(AwesomeRTL)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
