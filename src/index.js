import React from 'react'
import ReactDOM from 'react-dom'
import cat from './assets/cat.jpg'
import './index.css'

class App extends React.Component {
	render() {
		return <div> hello webpack</div>
	}
}
ReactDOM.render(<img src={cat} />, document.getElementById("app"))