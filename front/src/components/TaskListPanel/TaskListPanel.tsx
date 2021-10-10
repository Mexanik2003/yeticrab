import {MySelect} from "../MySelect/MySelect";
import {ChangeEventHandler, MouseEventHandler, useRef} from "react";

interface Props {
    changeFilter:(params: { column: string, operator: string, value: string }) => void,
    changeSearchVal(s: string): void
}

function TaskListPanel(props: Props) {
    let columnRef = useRef<HTMLSelectElement | null>(null);
    let operatorRef = useRef<HTMLSelectElement | null>(null);
    let valueRef = useRef<HTMLInputElement | null>(null);


    function applyFilter(event: any) {
        event.preventDefault();

        if (columnRef && operatorRef && valueRef) {
            let newFilter = {
                column: columnRef.current?.value ? columnRef.current?.value : "",
                operator: operatorRef.current?.value ? operatorRef.current?.value : "",
                value: valueRef.current?.value ? valueRef.current?.value : ""
            }
            console.log(newFilter)
            props.changeFilter(newFilter)
        }
    }

    function resetForm(event: any) {
        event.preventDefault();
        props.changeFilter({
            column: "",
            operator: "",
            value: ""
        })

    }

    function onChangeSearchInput(e: any) {
        let s:string = e.target.value;
        props.changeSearchVal(s);
    }


    return (
        <div>
            <form id="filterForm" className="form" onSubmit={applyFilter}>
                <MySelect
                    type='column'
                    items={[
                        {value: "0", text: "-- Столбец --", disabled: false},
                        {value: "id", text: "ID", disabled: false},
                        {value: "date", text: "Дата", disabled: false},
                        {value: "name", text: "Название", disabled: false},
                        {value: "carrier", text: "Перевозчик", disabled: false},
                        {value: "tel", text: "Телефон", disabled: false},
                        {value: "ATICode", text: "ATICode", disabled: false}

                    ]}
                    ref={columnRef}
                />
                <MySelect
                    type='column'
                    items={[
                        {value: "0", text: "-- Оператор --", disabled: false},
                        {value: "=", text: "равно", disabled: false},
                        {value: "~", text: "содержит", disabled: false},
                        {value: ">", text: "больше", disabled: false},
                        {value: "<", text: "меньше", disabled: false}

                    ]}
                    ref={operatorRef}
                />
                <input ref={valueRef} type="text" placeholder="Значение фильтра"/>
                <button type="submit">Фильтр</button>
                <button type="reset" onClick={resetForm}>Сбросить</button><br/>
                Поиск: <input type="text" onChange={onChangeSearchInput} placeholder="Поле поиска"/>
            </form>

        </div>
    );
}

export default TaskListPanel;
