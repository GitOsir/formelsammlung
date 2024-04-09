

export default function Card({contents}:{contents?:JSX.Element}){
    return(
        <>
            <div className="mx-8 my-2 p-5 rounded-md shadow-md border">
                {contents}

            </div>
        </>
    )
}
