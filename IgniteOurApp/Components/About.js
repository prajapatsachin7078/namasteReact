import User from "./User";
import UserClass from "./UserClass";
const About = ()=>{
    
    return (
        <div className="container">
            <h1>About us--</h1>
            <h3>I'm Sachin, <b className="text-primary">Aspiring Web Developer</b></h3>
            {/* <User name = {"Sachin Prajapati"} age = {21} profession = {"Software Developer"}/> */}
            <UserClass name = {"Sachin Prajapati"} age = {21} profession = {"Software Developer"}/>
        </div>
    )
}
export default About;