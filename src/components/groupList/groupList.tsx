import { useEffect, useState } from "react"
import { useSelector } from "react-redux"

import { useServer } from "../../hooks/useServer"
import { selectFilterOption } from "../redux/filterSlice"
import GroupItem from "./groupItem/groupItem"
import Spinner from "../spinner/spinner"

import "./grouplist.scss"

const GroupList = () => {
    const { filterGroups, groupsResponsets, loading } = useServer()
    
    const { friend, private: privacy, color } = useSelector(selectFilterOption)    // const groups = useSelector(selectFilteredGroups)

    useEffect(() => {
        filterGroups({
            friend: friend,
            privacy: privacy,
            color: color
        })
    }, [friend, privacy, color])


    const content = loading 
                        ? <div className="container__center"><Spinner /></div>
                        : groupsResponsets?.result === 0
                            ? <div className="container__center"><h1>Произошла ошибка. Попробуйте обновить страницу</h1></div>
                            : groupsResponsets?.data.map((item, i) => (
                                <GroupItem 
                                    key={item.id}
                                    groupInfo={item}
                                    className="grouplist-item"
                                />
                            ))
    return (
        <ul className="grouplist">
            { content }
        </ul>
    )
}

export default GroupList