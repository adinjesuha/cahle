import React from "react"

export const onRenderBody = ({ setPostBodyComponents }) => {
  setPostBodyComponents([
    <div key="portal" id="portal"></div>,
  ])
}