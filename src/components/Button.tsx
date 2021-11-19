export const Button = () => {
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.currentTarget.style.backgroundColor = "green";
    }

    return <button 
        className=" my-4 bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 rounded"
        onClick={handleClick}
        >
        Change Color
    </button>
}

   