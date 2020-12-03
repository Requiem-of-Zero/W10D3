import React from 'react';

class Autocomplete extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      names: props.names,
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const newNames = this.props.names.filter(name => 
      name.toLowerCase().startsWith(e.target.value.toLowerCase())
    )
    this.setState({names: newNames})
  }

  render(){
    const {names} = this.state
    return(
      <div>
        <input type="text" onChange={this.handleChange} />
        <ul>
          {names.map(name => (
            <li>{name}</li>
          ))}
        </ul>
      </div>
    )
  }
}

export default Autocomplete;