const ShowUserName = (props) => {
    console.log(props);
    return (
        <div>
            <h1>Nome: {props.name} {props.otherName}</h1>
        </div>
    )
}

export default ShowUserName