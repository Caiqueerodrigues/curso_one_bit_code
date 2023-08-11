export default function Commentario ({ email, date, hour, comment }) {

    return (
        <>
            <h3>
                <strong>
                    {email}
                </strong>
            </h3>
            <p>
                {`Em ${date} ${hour}`}
            </p>
            <p>
                {comment}
            </p>
        </>
    )
}