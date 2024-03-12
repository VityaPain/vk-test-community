import React, { useCallback, useState } from "react"

import { Group, User } from "../../../types/GroupTypes"

export type GroupItemProps = React.HTMLProps<HTMLLIElement> & {
    groupInfo: Group
}

const GroupItem: React.FC<GroupItemProps> = ({groupInfo, className, ...rest}) => {
    const [friendsExpanded,  setFriendsExpanded] = useState(false) 

    const getFriendsList = useCallback((friends: User[]) => {
        if (!friends) {
            return <li className="grouplist-item__friends-list-item">Друзья отсутствуют</li>
        }

        return friends?.map((f, i) => {
            return (
                <li key={i} className="grouplist-item__friends-list-item">
                    {f.first_name + ' ' + f.last_name} 
                </li>
            )
        })
    }, [])

    const friendList = getFriendsList(groupInfo.friends)

    return (
        <li 
            key={`${groupInfo.id}`}
            className={className} 
            {...rest}
        >
            <div className="grouplist-item__title">
                {groupInfo.avatar_color && (
                    <div 
                        className="grouplist-item__title-avatar" 
                        style={{background: `${groupInfo.avatar_color}`}}
                    ></div>
                )}
                <div className="grouplist-item__title-text">
                    <p className="grouplist-item__title-text-name">{groupInfo.name}</p>
                    <p className="grouplist-item__title-text-private">{groupInfo.closed ? 'Закрытая' : 'Открытая'}</p>
                </div>
            </div>
            <div className="grouplist-item__friends">
                <p 
                    className="grouplist-item__friends-title"
                    onClick={() => setFriendsExpanded(value => !value)}
                >
                    друзья: {groupInfo?.friends?.length ?? 0}
                </p>
                {friendsExpanded && (
                    <ul className="grouplist-item__friends-list">
                        {friendList}
                    </ul>
                )}
            </div>
        </li>
    )
}

export default GroupItem

