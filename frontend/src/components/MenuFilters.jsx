// import { useState, useEffect } from 'react';

// function MenuFilters() {

//     function Filter({ onFilter }) {
//         const [filterQuery, setFilterQuery] = useState('');
//         const [debouncedQuery, setDebouncedQuery] = useState('');
    
//         const handleInputChange = (event) => {
//             setFilterQuery(event.target.value);
//         }
    
//         useEffect(() => {
//             const timer = setTimeout(() => {
//               setDebouncedQuery(filterQuery);
//             }, 300); // Adjust the debounce delay as needed
        
//             return () => clearTimeout(timer);
//           }, [filterQuery]);
        

//           useEffect(() => {
//             if (debouncedQuery !== '') {
//               onFilter(debouncedQuery);
//             }
//           }, [debouncedQuery, onSearch]);
    
//           const handleSubmit = (event) => {
//             event.preventDefault();
//             onFilter(filterQuery);
//           };
    
//     return (
//         <div className="dropdown">
//             <button onClick={Filter()} className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
//             </button>
//             <div id="myDropdown" class="dropdown-content">
//                 <input type="text" placeholder="Search.." id="myInput" onkeyup="filterFunction()"></input>
//                 <div class="dropdown-item">
//                     <div class="custom-control custom-checkbox">
//                         <input type="checkbox" id="filter-dc_coverage-boroughs-code-AC" name="dc_coverage.boroughs.code" class="custom-control-input" value="AC"></input>
//                         <label class="custom-control-label" for="filter-dc_coverage-boroughs-code-AC">Ahuntsic-Cartierville</label>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }
// export default MenuFilters;