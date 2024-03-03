const Counter = ({count, setCount, number}) => {

    const handler_click = function() {
        setCount(count+number);
    }

    return (
        <div className="btn"
            style={{
                maxWidth: '33%',
                backgroundColor: '#c9c9c9',
                padding: '15px',
                textAlign: 'center',
                margin: 'auto',
                cursor: 'pointer',
                userSelect: 'none',
                fontFamily: 'Verdana, sans-serif'
            }}
            onClick={handler_click}>{number}</div>
    )
}
export default Counter