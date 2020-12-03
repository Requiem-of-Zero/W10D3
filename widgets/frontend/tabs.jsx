import React from "react"; 

// function Headers(props){
//     const tabs = props.tabs; 
//     const headers = props.headers.map((header, idx) =>

    
//     )



// }


class Tabs extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            selected: 0
        }

        // this.handleTabClick = this.handleTabClick.bind(this);
    }

    handleTabClick(i) {
        this.setState({selected: i})
    }
    
    render() {
        const {tabs} = this.props
        
        console.log(this.state);
        return(
            <div>
                <ul className="tab-header">
                    {tabs.map((tab, i) => (
                        <div>
                            <h1 onClick={() => this.handleTabClick(i)}>{tab.title}</h1>
                            { i === this.state.selected && <p>{tab.content}</p>}
                        </div>
                    ))}
                </ul>
            </div>
        )
    }
}

export default Tabs;