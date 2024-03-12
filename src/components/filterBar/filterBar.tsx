import { useDispatch } from "react-redux"
import { 
    setFriendFilter,
    setPrivacyFilter,
    setColorFilter 
} from "../redux/filterSlice"

import "./filterbar.scss"

const FilterBar = () => {
    const dispatch = useDispatch()

    const getBoleanValueFromString = (string) => {
        return string === 'closed' 
                                ? true 
                                : string === 'opened' 
                                    ? false
                                    : 'all'
    }

    const getUndefined = (string) => {
        return string === 'undefined' ? undefined : string
    }

    const handleChangeFriends = (e) => {
        dispatch(setFriendFilter(e.target.checked))
    }

    const handleChangepPrivacy = (e) => {
        dispatch(setPrivacyFilter(getBoleanValueFromString(e.target.value)))
    }

    const handleChangepColor = (e) => {
        dispatch(setColorFilter(getUndefined(e.target.value)))
    }

    return (
        <header className="header">
            <p className="header__title">Фильтры</p>
            <ul className="header-filters">
                <li className="header-filters__item friend">
                    <span>Друзья</span>
                    <input onChange={(e) => handleChangeFriends(e)} type="checkbox"></input>
                </li>
                <li className="header-filters__item privacy">
                    <span>Тип приватности: </span>
                    <select
                        onChange={(e) => handleChangepPrivacy(e)}
                    >
                        <option value="all">Все</option>
                        <option value="opened">Только открытые</option>
                        <option value="closed">Только закрытые</option>
                    </select>
                </li>
                <li className="header-filters__item color">
                    <span>Аватар:</span>
                    <select
                        onChange={(e) => handleChangepColor(e)}
                    >
                        <option value="">Все</option>
                        <option value="red">Красный</option>
                        <option value="green">Зеленый</option>
                        <option value="yellow">Желтый</option>
                        <option value="blue">Голубой</option>
                        <option value="purple">Фиолетовый</option>
                        <option value="white">Белый</option>
                        <option value="undefined">Отсутствует</option>
                    </select>
                </li>
            </ul>
        </header>
    )
}

export default FilterBar