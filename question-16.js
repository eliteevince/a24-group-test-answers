class Example3 extends React.Component {
		constructor() {
			super();
			
		}		
		render() {		
			return (
			  <Example2 />
			)
		  }
	}
	class Example2 extends React.Component {
		  constructor() {
			super();
			this.state ={
				divHeight:0
				}
			}
		handleKeyPress(e){     
			let divHeightValue= e.target.value+'px';
			this.setState({divHeight: divHeightValue});
			
		}
		render() {
			var divStyle = {
				border: '2px solid red'
				height: this.state.divHeight;
			};
			var spanStyle ={
				width:$(window).width();				
			};
			
			return (
			  <div style={divStyle}>
				<span style={spanStyle}>live</span>
				<input  type="number" value={this.state.divHeight} onKeyPress={this.handleKeyPress.bind(this)}/>
			  </div>
			)
		  }
	}
	ReactDOM.render(<Example3 />, document.getElementById('app'));
