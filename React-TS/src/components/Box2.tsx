
type PropsType = {
    message: string,
    count: number
}
function Box2({ message, count }: PropsType) {
    return (
        <>
            <div>
                <p>{message}</p>
                <p>{count}</p>
            </div>
        </>
    )
}

export default Box2
