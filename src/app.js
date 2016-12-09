var React = require('react');
var ReactDOM = require('react-dom');
require('./style.css')

class App extends React.Component {
	render() {
		return <div>
			<h1>This is my AWESOME App</h1>
			<p>This is app created with React, webpack and magic!!!!</p>
		</div>
	}
}

ReactDOM.render(<App />, document.getElementById('react-container'));