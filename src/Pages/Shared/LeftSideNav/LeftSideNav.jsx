import { useEffect, useState } from "react";
import {  NavLink } from "react-router-dom";



const LeftSideNav = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json()
                .then(data => setCategories(data)))
    }, [])


    return (
        <div>

            <h2 className="text-2xl text-center m-4">All Categories</h2>

           <div  >
           {
                categories.map(category => <NavLink
                className="block p-3 rounded-3xl mb-2 text-center border font-semibold"
                     key={category.id}
                     to={`/category/${category.id}`}
                     >{category.name
                     }</NavLink>)
            }

           </div>
        </div>
    );
};

export default LeftSideNav;