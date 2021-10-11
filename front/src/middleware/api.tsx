import {Task} from "../service/interfaces";


const server = process.env.SERVER

const tasks:Task[] = [
    {
        id: 1,
        date: "2021-01-02 10:11",
        name: "ООО Ромашка",
        carrier: "Иванов Иван Иванович",
        tel: "79086307477",
        comments: ["Коммент1", "Коммент2", "Коммент3"],
        ATICode: 1785
    },
    {
        id: 5,
        date: "2021-03-04 12:13",
        name: "ООО Петрушка",
        carrier: "Петров Петр Петрович",
        tel: "79876543210",
        comments: ["Коммент1", "Коммент2", "Коммент3"],
        ATICode: 6457
    },
    {
        id: 8,
        date: "2021-07-08 14:15",
        name: "ООО Капуста",
        carrier: "Иванов Иван Иванович",
        tel: "79086307477",
        comments: ["Коммент1", "Коммент2", "Коммент3"],
        ATICode: 8751
    },
    {
        id: 16,
        date: "2021-07-08 16:17",
        name: "ООО Вишня",
        carrier: "Сидоров Сидор Сидорович",
        tel: "79086307471",
        comments: ["Коммент1", "Коммент2", "Коммент3"],
        ATICode: 6547
    }
]

function getTasks(jwt:string = "") {
    // For test only
    return tasks;


    // return fetch(`${server}/tasks`, {
    //     method: 'GET',
    //     headers: {
    //         'Content-Type': "application/json",
    //         Authorization: jwt,
    //     }
    // }).then(result => result.json())
    // .catch(err => [])

}

function patchTask(task:Task, jwt:string = "") {
    return fetch(`${server}/task/edit/${task.id}`, {
        method: 'PATCH',
        headers: {
            Authorization: jwt,
            'Content-Type': "application/json"
        },
        body: JSON.stringify(task)
    })

}

function dropTask(task:Task, jwt:string = "") {
    //Comment this
    return true

    return fetch(`${server}/task/delete/${task.id}`, {
        method: 'DELETE',
        headers: {
            Authorization: jwt,
            'Content-Type': "application/json"
        },
        body: JSON.stringify({})
    })

}

export {tasks, getTasks, patchTask, dropTask}