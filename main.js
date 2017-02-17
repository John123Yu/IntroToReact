var React = require('react');
var ReactDOM = require('react-dom');

console.log('hello')

var RedBox = React.createClass({
  render: function() {
    return (
      <div style={{backgroundColor: 'red', width: '70%', height: '90%', display: 'inline-block', verticalAlign: "top", margin: '8px'}}>
        <div>
          {/*PUTTING this.props.children ALLOWS US TO KEEP THE MAIN LAYOUT FOR ALL CHILD COMPONENTS WITHOUT RE-WRITING CODE*/}
          {this.props.children}
        </div>
      </div>
    )
  }
});

var YellowBox = React.createClass({
  render: function(){
    return (
    	<div>
	      <div style={{backgroundColor: 'yellow', width: '25%', height: '25%', display: 'inline-block', margin: '8px'}}>
	      </div>
	      <div style={{backgroundColor: 'yellow', width: '25%', height: '25%', display: 'inline-block', margin: '8px'}}>
	      </div>
	      <div style={{backgroundColor: 'yellow', width: '25%', height: '25%', display: 'inline-block', margin: '8px'}}>
	      </div>
	      <div style={{backgroundColor: 'purple', width: '95%', height: '25%', display: 'inline-block', margin: '8px', marginTop: '15px'}}>
	      </div>
      	</div>
    )
  }
})

var RedBoxwChildren = React.createClass({
  render: function(){
    return (
      <RedBox>
        <YellowBox/>
      </RedBox>
    )
  }
});

var MainBox = React.createClass({
	render: function() {
		return (
			<div style={{ width: '95%', height: '60%'}}>
		        <div>
		          {/*PUTTING this.props.children ALLOWS US TO KEEP THE MAIN LAYOUT FOR ALL CHILD COMPONENTS WITHOUT RE-WRITING CODE*/}
		          {this.props.children}
		        </div>
	     	</div>
		)
	}
})

var MainBoxwChildren = React.createClass({
	render: function() {
		return (
			<MainBox>
		        <div style={{backgroundColor: 'blue', width: '25%', height: '70%', display: 'inline-block', margin: '8px'}}>
			    </div>
		        <RedBoxwChildren/>
		    </MainBox>
		)
	}
})

var GreenBox = React.createClass({
	render: function() {
		return (
			<div style={{ width: '95%', height: '20%', backgroundColor: 'green', margin: '20px', marginTop: '10px'}}>
	     	</div>
		)
	}
})

var TotalBox = React.createClass({
	render: function() {
		return (
			<div style={{ width: '100%', height: '90%', backgroundColor: 'grey', padding:'10px'}}>
		        <div>
		          {/*PUTTING this.props.children ALLOWS US TO KEEP THE MAIN LAYOUT FOR ALL CHILD COMPONENTS WITHOUT RE-WRITING CODE*/}
		          {this.props.children}
		        </div>
	     	</div>
		)
	}
})

var TotalBoxwChildren = React.createClass({
	render: function() {
		return (
			<TotalBox>
		        <GreenBox/>
		        <MainBoxwChildren/>
		    </TotalBox>
		)
	}
})

ReactDOM.render(<TotalBoxwChildren />, document.getElementById('app'));