import {ChangeEventHandler, forwardRef, MutableRefObject} from "react";

interface Props {
    type: string,
    items: {
        value: string,
        text: string,
        disabled: boolean
    }[]
}

const MySelect = forwardRef((props: Props, ref: any) =>  {

    return (
        <select ref={ref}>
            {
                props.items.map((item,index) =>
                    <option disabled={item.disabled} key={index} value={item.value}>
                        {item.text}
                    </option>
                )
            }
        </select>
    )
})

export {MySelect}