import {useEffect, useState} from "react";

export const useStorage = (storageName)=>{
    const [storageLength, setStorageLength] = useState(0)
    const add = (data:Object = [])=>{
        let toStorage = []
        if(localStorage.getItem(storageName) !== null){
            toStorage = JSON.parse(localStorage.getItem(storageName))
        }
        toStorage.push(data)
        localStorage.removeItem(storageName)
        localStorage.setItem(storageName, JSON.stringify(toStorage))
        setStorageLength(toStorage.length)
    }
    const get = ()=>{
        return JSON.parse(localStorage.getItem(storageName)) ?? []
    }
    const removeById = (id) => {
        const data = JSON.parse(localStorage.getItem(storageName)) ?? []
        localStorage.removeItem(storageName)
        localStorage.setItem(storageName, JSON.stringify(data.filter((dataObj, index) => index != id)))
        setStorageLength(JSON.parse(localStorage.getItem(storageName)).length)
    }
    useEffect(()=>{
        if(localStorage.getItem(storageName) !== null){
            setStorageLength(JSON.parse(localStorage.getItem(storageName)).length)
        }
    }, [add, removeById])
    return {add, get, removeById, storageLength}
}
