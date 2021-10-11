import {Filter, Task} from "../../service/interfaces";
import {useEffect, useState} from "react";

interface Props {
    tasks: Task[],
    isAdmin: boolean,
    changeSort: (params: any) => void,
    filter: Filter,
    adminFlag: boolean,
    saveTask: (task: Task) => void,
    deleteTask: (task: Task) => void
}
function TaskListContainer(props: Props) {
    let tasks = props.tasks;
    const [editingTask, setEditingTask] = useState<number>(-1)

    tasks.sort((a,b) => {
        let sign = props.filter.sort.asc ? 1 : -1;
        let column: string = props.filter.sort.column;
        // @ts-ignore
        if (a[column] > b[column]) {
            return 1*sign
        } else {
            // @ts-ignore
            if (a[column] < b[column]) {
                return -1*sign
            } else {
                return 0
            }
        }
    });

    if (props.filter.filter.column !== '0' && props.filter.filter.operator !== '0' && props.filter.filter.value) {
        let {column, operator, value} = props.filter.filter;
        tasks = tasks.filter(task => {
            if (operator === '=') {
                // @ts-ignore
                return (task[column].toString() === value)
            } else if (operator === '~') {
                // @ts-ignore
                return task[column].toString().indexOf(value) > -1;
            } else if (operator === '>') {
                // @ts-ignore
                return (+task[column] > +value)
            } else if (operator === '<') {
                // @ts-ignore
                return (+task[column] < +value)
            }
        })
    }

    if (props.filter.search) {
        let s = props.filter.search;
        tasks = tasks.filter(task => (
            task.id.toString().indexOf(s) > -1
            || task.date.toString().indexOf(s) > -1
            || task.name.toString().indexOf(s) > -1
            || task.carrier.toString().indexOf(s) > -1
            || task.tel.toString().indexOf(s) > -1
            || task.ATICode.toString().indexOf(s) > -1
        ))
    }


    function setSort(e: any) {
        e.preventDefault()
        if (e.target.dataset.name) {
            props.changeSort(e.target.dataset.name);
        }
    }

    function onEditBtnClick(e: any) {
        setEditingTask(+e.target.dataset.id)
    }

    function submitEditForm(e: any) {
        e.preventDefault();
        console.log(e.target.elements)
        props.saveTask({
            ...tasks[e.target.elements.index.value],
            date: e.target.elements.date.value,
            name: e.target.elements.name.value,
            carrier: e.target.elements.carrier.value,
            tel: e.target.elements.tel.value,
            ATICode: e.target.elements.ATICode.value,
        })
        setEditingTask(-1)
    }

    function onPressDeleteBtn(e: any) {
        e.preventDefault();
        props.deleteTask({
            ...tasks[e.target.dataset.index]})
        setEditingTask(-1)
    }

    function closeEditForm(e: any) {
        e.preventDefault();
        setEditingTask(-1)
    }


    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th scope="col"><a href="/" onClick={setSort} data-name="id">ID</a></th>
                        <th scope="col"><a href="/" onClick={setSort} data-name="date">Дата</a></th>
                        <th scope="col"><a href="/" onClick={setSort} data-name="name">Название</a></th>
                        <th scope="col"><a href="/" onClick={setSort} data-name="carrier">Перевозчик</a></th>
                        <th scope="col"><a href="/" onClick={setSort} data-name="tel">Телефон</a></th>
                        <th scope="col"><a href="/" onClick={setSort} data-name="comments">Комментарии</a></th>
                        <th scope="col"><a href="/" onClick={setSort} data-name="ATICode">ATI-код</a></th>
                        <th scope="col">Опции</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map((task,index) =>
                        task.id === +editingTask ? (
                            <tr key={index}>
                                <td colSpan={8}>
                                    <form onSubmit={submitEditForm}>
                                        <input type="text" name="index" defaultValue={index} disabled={true}/>
                                        <input type="text" name="date" defaultValue={task.date}/>
                                        <input type="text" name="name" defaultValue={task.name}/>
                                        <input type="text" name="carrier" defaultValue={task.carrier}/>
                                        <input type="text" name="tel" defaultValue={task.tel}/>
                                        <input type="text" name="ATICode" defaultValue={task.ATICode}/>
                                        <button type="submit">Сохранить</button><button onClick={closeEditForm}>Закрыть</button>
                                    </form>
                                </td>
                            </tr>
                        ) : (
                        <tr key={index}>
                            <td>{task.id}</td>
                            <td>{task.date}</td>
                            <td>{task.name}</td>
                            <td>{task.carrier}</td>
                            <td>{task.tel}</td>
                            <td>{task.comments.map((comment,index) => <p key={`${task.id}-${index}`}>{comment}</p>)}</td>
                            <td>{task.ATICode}</td>
                            <td>{props.adminFlag ? (
                                <div>
                                    <button onClick={onEditBtnClick} data-id={task.id}>Изменить</button>
                                    <button onClick={onPressDeleteBtn} data-index={index}>Удалить</button>
                                </div>
                                ) : ""}
                            </td>
                        </tr>
                        )
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default TaskListContainer;
