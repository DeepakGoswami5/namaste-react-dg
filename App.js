import React from "react"
import ReactDOM from "react-dom/client"
const parent = React.createElement("div", {}, "Hello world!")
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(parent)

