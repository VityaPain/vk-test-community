import { useState } from "react";

import { GetGroupsResponsets, Group, ColorFilterType } from "../types/GroupTypes";
import data from "../groups.json"

export const useServer = () => {
    const [loading, setLoading] = useState(false)
    const [groupsResponsets, setGroupsResponsets] = useState<GetGroupsResponsets>()

    const filterGroups = async ({friend, privacy, color} : {
        friend: boolean,
        privacy: boolean | 'all',
        color: ColorFilterType
    }) => {
        setLoading(true)
        await new Promise(resolve => setTimeout(resolve, 1000));

        try {
            const responce = JSON.parse(JSON.stringify(data))

            if (friend === false && privacy === 'all' && color === '') {
                setLoading(false)
                setGroupsResponsets({
                    result: 1,
                    data: responce
                })
                return undefined
            }
            const res = []
            responce.forEach(gr => {
                if (privacy !== 'all' && gr.closed != privacy) {
                    return
                }
                //@ts-ignore
                if (friend && gr?.friends?.length > 0 != friend) {
                    return
                }
                if (color !== '' && gr.avatar_color != color) {
                    return
                }
                res.push(gr)
            })
    
            setGroupsResponsets({
                result: 1,
                data: res
            })
            setLoading(false)
        } catch (e) {
            setGroupsResponsets({result: 0})
            console.error('Error, result 0')
        }
    }

    return {
        filterGroups,
        groupsResponsets,
        loading
    }
}