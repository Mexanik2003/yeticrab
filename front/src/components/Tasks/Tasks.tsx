import TaskListPanel from "../TaskListPanel/TaskListPanel";
import TaskListContainer from "../TaskListContainer/TaskListContainer";
import {Filter, Task} from "../../service/interfaces";
import {useState} from "react";
import {getTasks} from "../../middleware/api";


interface Props {
    adminFlag: any
}



function Tasks(props: Props) {

    const [filter, setFilter] = useState<Filter>(
        {
            filter: {
                column: "",
                operator: "",
                value: ""
            },
            sort: {
                column: "date",
                asc: true
            },
            search: ""
        }
    )

    const [tasks, setTasks] = useState<Task[]>(getTasks())

    //@params = object {column, operator, value}
    function changeFilter(params: {column: string, operator: string, value: string}) {
        setFilter (
            {
                ...filter,
                filter: params
            }
        )
        // console.log(filter)
    }

    function changeSort(column: string) {
        setFilter(
            {
                ...filter,
                sort: {
                    column: column,
                    asc: column === filter.sort.column ? !filter.sort.asc : true
                },
            }
        )
        //applyFilter();
    }

    function changeSearchVal(s: string) {
        setFilter (
            {
                ...filter,
                search: s,
            }
        )
    }

    function saveTask(task: Task) {

        let newTask = tasks.find(item => item.id === task.id);
        if (newTask) {
            tasks.push(task)
            setTasks(tasks.filter(item => item !== newTask));
        }
    }

    function deleteTask(task: Task) {

        let newTask = tasks.find(item => item.id === task.id);
        if (newTask) {
            setTasks(tasks.filter(item => item.id != task.id));
        }

    }

    return (
        <div>
            <TaskListPanel
                changeFilter={changeFilter}
                changeSearchVal={changeSearchVal}

            />
            <TaskListContainer
                filter={filter}
                tasks={tasks}
                isAdmin={false}
                changeSort={changeSort}
                adminFlag={props.adminFlag}
                saveTask={saveTask}
                deleteTask={deleteTask}
            />
        </div>
    );
}

export default Tasks;
