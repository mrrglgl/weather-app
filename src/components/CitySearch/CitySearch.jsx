import style from "./CitySearch.module.css"

const CitySearch = (props) => {
    return (
        <form className={style.input} onSubmit={props.fetchSity}>
            <input type="input" name="city" placeholder="Поиск города"/>
        </form>
    )
}

export default CitySearch