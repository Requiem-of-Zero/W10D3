import React from "react"; 

class Clock extends React.Component {
  constructor(props){
    super(props);
  
    this.state = {
      time: new Date(),
    };

    this.tick = this.tick.bind(this);
  }

  tick(){
    this.setState({time: new Date()})
  };

  // submit(e){
  //   e.preventDefault();
  //   this.setState({submitted: new Date()});
  // }

  componentDidMount(){ 
    this.intervalId = setInterval(this.tick, 1000);
  }

  componentWillUnmount(){ 
      clearInterval(this.intervalId)
  }

  render(){
    const {time} = this.state;
    let hours = parseInt(this.state.time.getHours());
    let minutes = parseInt(this.state.time.getMinutes());
    let seconds = parseInt(this.state.time.getSeconds());
    hours = hours > 10 ? hours : "0" + hours;
    minutes = minutes > 10 ? minutes : "0" + minutes;
    seconds = seconds > 10 ? seconds : "0" + seconds;

    return(
      // <div className='clock-wrapper'>
        <div className='clock-wrapper-2'>
          <h1>Clock</h1>
          <div className="clock">
            <p><span>
                  Time:
                </span>
                <span>
                  {hours}:{minutes}:{seconds}
                </span>
            </p>
            <p>
              <span>
                Date:
              </span>
              <span>
                {time.toDateString()}
              </span>
            </p>
          </div>
        </div>
      // </div>
    )
  }
}

export default Clock; 