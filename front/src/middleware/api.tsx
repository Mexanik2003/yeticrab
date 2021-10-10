import {Task} from "../service/interfaces";


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

function getTasks() {
    return tasks;
}

export {tasks, getTasks}