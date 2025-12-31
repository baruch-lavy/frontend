import { useRef, useState } from "react";
import { debounce } from "../services/util.service";
import { useEffectUpdate } from "../customHooks/useEffectUpdate";

export function ToyFilter({ filterBy, onSetFilter }) {
  const [filterByToEdit, setFilterByToedit] = useState({ ...filterBy });
  const debounceOnSetFilter = useRef(debounce(onSetFilter, 300));
  useEffectUpdate(() => {
    debounceOnSetFilter.current(filterByToEdit);
  }, [filterByToEdit]);

  function handleChange({ target }) {
    let { value, name: field, type } = target

    value = type === 'number' ? +value || '' : value
    setFilterByToedit(prevFilter => ({...prevFilter, [field]: value}))
  }

  function onSubmitFilter(ev) {
    ev.preventDefault()
    onSetFilter(filterByToEdit)
  }

  const { txt, inStock } = filterByToEdit;

  return (
    <section className="toy-filter">
      <h3>Toys Filter/Sort</h3>
      <form onSubmit={onSubmitFilter} className="filter-form flex align-center">
        <input
          type="text"
          value={txt}
          placeholder="Search"
          name="txt"
          onChange={handleChange}
        />
        <select name="inStock" value={inStock || ''} onChange={handleChange}>
          <option value="">All</option>
          <option value="true">In Stock</option>
          <option value="false">Not in Stock</option>
        </select>
      </form>
    </section>
  );
}
