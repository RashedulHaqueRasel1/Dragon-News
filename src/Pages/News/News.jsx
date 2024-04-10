import Header from "../Shared/Header/Header";
import NavBar from "../Shared/NavBar/NavBar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import { useParams } from "react-router-dom";
 

const News = () => {

    const {id} = useParams();

    return (
        <div>
             <Header></Header>
             <NavBar></NavBar>

             <div  className="grid md:grid-cols-4">

                <div className="col-span-3">
                    <h2 className="text-red-600 font-bold text-6xl text-center  ">News Details</h2>
                   <p>{id}</p>
                </div>

                <div>
                    <RightSideNav></RightSideNav>
                </div>

             </div>
        </div>
    );
};

export default News;