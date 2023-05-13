export const Status = function () {
    let status = true
    return ( 
        <
            h2
            style={{
                color: status ? "#0f0" : "#f00"
            }}
        >
            Status Atual: {status ? "On" : "Off"}
        </h2>
    )
}