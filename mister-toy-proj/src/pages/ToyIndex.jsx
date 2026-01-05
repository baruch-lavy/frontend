import { useEffect } from "react";
import { useDispatch ,useSelector } from "react-redux"
import  { Link } from "react-router-dom"

import { ToyList } from "../cmponents/toyList";
import { ToyFilter } from "../cmponents/ToyFilter";
import { Loader } from "../cmponents/Loader";

import { loadToys, setFilter, removeToy } from "../store/actions/toy.action";

export function ToyIndex() {
    const toys = useSelector(storeState => storeState.toyModule.toys)
    const filterBy = useSelector(storeState => storeState.toyModule.filterBy)
    const isLoading = useSelector(storeState => storeState.toyModule.flag.isLoading)

    useEffect(() => {
        loadToys()
        .catch(err => {
            console.log('err: ', err);
        })
    },[filterBy])

    function onRemoveToy(toyId) {
        removeToy(toyId)
        .then(() => {
            loadToys()
        })
        .catch(err => {
            console.log('cannot remove toy, error:',err);
        })
    }

    function onSetFilter(filterBy) {
        setFilter(filterBy)
    }

    return (
       <section className="toy-index">
           <ToyFilter filterBy={filterBy} onSetFilter={onSetFilter}/>
           {isLoading && <Loader/>}
           {!isLoading && <ToyList toys={toys} onRemoveToy={onRemoveToy}/>}
       </section>
    )
}