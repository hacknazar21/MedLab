import React, {useEffect, useState} from "react";

export const useDynamicAdaptive = ()=>{
    const [dynamicRefs, setDynamicRefs] = useState([])

    useEffect(()=>{
        window.addEventListener('resize', createDynamic)
        if(dynamicRefs.length > 0){
            createDynamic()
        }
    }, [dynamicRefs])
    const createDynamic = () => {
        dynamicRefs.map((dynamicRef:any) => {
            const classWhere = dynamicRef.dataset.da.split(',')[0]
            const resolution = dynamicRef.dataset.da.split(',')[1]
            const placeWhere:string = dynamicRef.dataset.da.split(',')[2] || 'beforeend'
            if(window.innerWidth <= parseFloat(resolution)){
                document.querySelector(`${classWhere}`).insertAdjacentElement(placeWhere, dynamicRef)
            }
            else {
            }
        })
    }
    const addDynamicRefs = (ref) => {
        ref = ref.filter(refObj => refObj !== null)
        setDynamicRefs(prev=>{return [...prev, ...ref]})
    }
    return {addDynamicRefs}
}
