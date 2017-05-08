// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

const Hello = props => (
  <div>Hello {props.name}!</div>
)

Hello.defaultProps = {
  name: 'David'
}

Hello.propTypes = {
  name: PropTypes.string
}

function mountComponent(){
  ReactDOM.render(
    <Hello name="React" />,
    document.getElementById('app'),
  )
}

function unmountComponent(){
  ReactDOM.unmountComponentAtNode(document.getElementById('app'))
}

document.addEventListener('turbolinks:load', mountComponent, {once: true})
document.addEventListener('turbolinks:render', mountComponent)
document.addEventListener('turbolinks:before-render', unmountComponent)

// document.addEventListener('turbolinks:load', mountComponent)
// document.addEventListener('turbolinks:before-cache', unmountComponent)
