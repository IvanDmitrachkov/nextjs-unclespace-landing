
interface Test {
    children?: string;
    title?: string;
}

const Test = ({ children, title }: Test) => {
    return (
        <div>
            <h1>{title}</h1>
            {children}
        </div>
    )
}
export default Test
