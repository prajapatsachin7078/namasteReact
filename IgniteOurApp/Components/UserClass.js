import React from "react";
class UserClass extends React.Component{
    constructor(props){
        super(props);
        console.log(props);
        this.state = {
            count1: 0,
            count2: 1,
        };
    }
    render(){
    
        const {name, age, profession} = this.props;
        const {count1, count2} = this.state;
        return (
            <div className="card mt-4 ">
                <div className="card-body d-flex justify-content-between">
                    <div className="align-self-left border p-3">
                        <h1 className="card-title">Left Count : {count1}</h1>
                        <button className="btn btn-outline-primary"
                            onClick={()=>{
                                this.setState({
                                    count1: count1+1
                                })
                            }}
                        >
                            Click me.. 
                        </button>
                        <h3 className="card-text">Name: {name}</h3>
                        <h3 className="card-text">Age: {age}</h3>
                        <h3 className="card-text">Profession: {profession}</h3>
                    </div>
                    <div className="align-self-right border p-3">
                        <h1 className="card-title">Right Count: {count2}</h1>
                        <button className="btn btn-outline-success"
                            onClick={()=>{
                                this.setState({
                                    count2: count2+1
                                })
                            }}
                        >
                            Click me.. 
                        </button>
                        <h3 className="card-text">Name: {name}</h3>
                        <h3 className="card-text">Age: {age}</h3>
                        <h3 className="card-text">Profession: {profession}</h3>
                    </div>
                </div>
            </div>
        )
    }
}
export default UserClass;