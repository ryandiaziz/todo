import Card from "./Card"

const Board = () => {
    return (
        <div>
            <h1 className="font-inter font-bold text-lg text-todo-purple">Task</h1>
            {/* card */}
            <Card />
            <Card />
        </div>
    )
}

export default Board