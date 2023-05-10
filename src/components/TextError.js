const TextError = (props) => {
    console.log('Test": ',props);
    return (
        <div className="error">
            {props.children}
        </div>
    );
}
 
export default TextError;