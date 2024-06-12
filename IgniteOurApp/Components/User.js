const User = ({
    name,
    age,
    profession
})=>{
    return (
        <div className="card">
            <div className="card-body">
                <h1 className="card-title">Functional component</h1>
                <h3 className="card-text">Name: {name}</h3>
                <h3 className="card-text">Age: {age}</h3>
                <h3 className="card-text">Profession: {profession}</h3>
            </div>
            
        </div>
    )
}
export default User;