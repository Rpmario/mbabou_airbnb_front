import React from 'react';

const FilterForm = ({ onFilterChange }) => {
  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    onFilterChange(name, value);
  };

  return (
    <form>
      <label htmlFor="minPrice">Prix minimum :</label>
      <input type="number" name="minPrice" id="minPrice" onChange={handleFilterChange} />

      <label htmlFor="maxPrice">Prix maximum :</label>
      <input type="number" name="maxPrice" id="maxPrice" onChange={handleFilterChange} />

      <label htmlFor="minCapacity">Capacité minimum :</label>
      <input type="number" name="minCapacity" id="minCapacity" onChange={handleFilterChange} />

      <label htmlFor="maxCapacity">Capacité maximum :</label>
      <input type="number" name="maxCapacity" id="maxCapacity" onChange={handleFilterChange} />

      <label htmlFor="accommodationType">Type de logement :</label>
      <select name="accommodationType" id="accommodationType" onChange={handleFilterChange}>
        <option value="">-- Sélectionner un type de logement --</option>
        <option value="appartement">Appartement</option>
        <option value="maison">Maison</option>
        <option value="villa">Villa</option>
      </select>
    </form>
  );
};

export default FilterForm;
