import React, { Component } from "react"

class GoogleAdsSquare extends Component {
  componentDidCatch() {
    ;(window.adsbygoogle = window.adsbygoogle || []).push({})
  }

  render() {
    return (
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-7004283638114501"
        data-ad-slot="5753698365"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    )
  }
}

export default GoogleAdsSquare
