import '../TodoApp/Todo.css';

export default function Home({ tasks, removeTasks }) {
    return (
        <div className='home'>
            {tasks.map((item, index) =>
                <ul key={index} className='display'>
                    <p className='task'>{item}</p>
                    <p id='delete' onClick={removeTasks}>❌</p>
                </ul>
            )}
        </div>
    )
}