import { useEffect } from "react";
import { useDispatch ,useSelector } from "react-redux"
import  { Link } from "react-router-dom"

import { ToyFilter } from "../cmponents/ToyFilter";
import { Loader } from "../cmponents/Loader";

import { loadToys, setFilter } from "../store/actions/toy.action";

export function ToyIndex() {
    const toys = useSelector(storeState => storeState.toyModule.toys)
    const filterBy = useSelector(storeState => storeState.toyModule.filterBy)
    const isLoading = useSelector(storeState => storeState.toyModule.isLoading)
 console.log(isLoading);
    useEffect(() => {
        loadToys()
        .catch(err => {
            console.log('err: ', err);
        })
    },[filterBy])

    function onSetFilter(filterBy) {
        setFilter(filterBy)
    }

    return (
       <section className="toy-index">
           <ToyFilter filterBy={filterBy} onSetFilter={onSetFilter}/>
           {isLoading && <Loader/>}
       </section>
    )
}