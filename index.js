import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import Phone from './components/phone'

render(
	<Phone />,
	document.getElementById('root')
)