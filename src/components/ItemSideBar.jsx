/* eslint-disable react/prop-types */
const ItemSideBar = (props) => {
    return (
        <div className='p-3 flex items-center gap-2 cursor-pointer hover:bg-slate-50'>
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" className="fill-todo-purple">
                {props.icon}
            </svg>
            <span className="font-inter text-sm">{props.text}</span>
        </div>
    )
}

export default ItemSideBar