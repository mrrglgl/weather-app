import style from "./Main.module.css"

const Main = (props) => {


    return ( 
        <div className={style.main}>
            <div className={style.maininfo}>
                <h1>{props.weather.city || "Введите город"}</h1>
                <h1>{props.weather.temp}{props.weather.icon}</h1>
            </div>
            <div className={style.dopinfo}>
                <h3>Max: {props.weather.tempMax}{props.weather.icon}</h3>
                <h3>Min: {props.weather.tempMin}{props.weather.icon}</h3>
                <h3>Windspeed: {props.weather.windspeed} m/s</h3>
            </div>
        </div>
    )
}

export default Main