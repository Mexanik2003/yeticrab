interface Props {
    setAdminFlag: () => void;
    adminFlag: boolean
}

function NavPanel(props: Props) {
    function onAdminBtnClick(e: any) {
        e.preventDefault();
        props.setAdminFlag();
    }

    let btnText = props.adminFlag ? "Перейти в пользователя" : "Перейти в админку"

    return <nav>
        <button onClick={onAdminBtnClick}>{btnText}</button>
    </nav>;
}

export default NavPanel;