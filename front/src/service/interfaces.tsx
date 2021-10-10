//В заявке есть следующие данные:
// ● Номер заявки
// ● Дата и время получения заявки от клиента
// ● Название фирмы клиента
// ● ФИО перевозчика
// ● Контактный телефон перевозчика
// ● Комментарии
// ● ATI код сети перевозчика (кликабельно, переход на сайт). Ссылка такого

interface Task {
    id: number;
    date: string;
    name: string;
    carrier: string;
    tel: string;
    comments: string[];
    ATICode: number;
}

interface Filter {
    filter: {
        column: string,
        operator: string,
        value: string
    },
    sort: {
        column: string,
        asc: boolean
    },
    search: string
}



export type {Task,Filter};