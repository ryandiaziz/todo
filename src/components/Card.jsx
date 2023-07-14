/* eslint-disable react/prop-types */
import Task from "./Task"

const Card = () => {
    return (
        <div className="rounded-md mt-2 flex flex-wrap gap-3 bg-todo-invory shadow-md p-3">
            <Task />
        </div>
    )
}

export default Card