const Output = ({count}) => {

    return (
        <div className="btn"
            style={{
                width: '33%',
                backgroundColor: 'green',
                padding: '15px',
                textAlign: 'center',
                margin: '10px auto',
                cursor: 'pointer',
                userSelect: 'none',
                fontFamily: 'Verdana, sans-serif'
            }}
            >{count}</div>
    )
}
export default Output;