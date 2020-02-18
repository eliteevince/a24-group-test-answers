class Example1 extends React.Component {
	render() {
		var divStyle = {
			border: '2px solid red'
		};
		var spanStyle ={
			width:$(window).width();
		};
		return (
		  <div style={divStyle}>
			<span style={spanStyle}>live</span>
		  </div>
		)
	  }
}
ReactDOM.render(<Example1 />, document.getElementById('app'));
