import { Link } from "react-router-dom"
import rentCategoryImage from '../assets/jpg/rentCategoryImage.jpg'
import sellCategoryImage from '../assets/jpg/sellCategoryImage.jpg'

function Explore() {
    return (
        <div className="explore">
            <header>
                <p className="pageheader">Explore</p>
            </header>

            <main>
                <p className="exploreCategoryHeading">Categories</p>
                <div className="exploreCategories">
                    <Link to="/category/rent">
                        <img className="exploreCategoryImg" 
                        src={rentCategoryImage} alt="rent" />
                        <p className="exploreCategoryName">Places for rent</p>
                    </Link>

                    <Link to="/category/sale">
                        <img className="exploreCategoryImg" 
                        src={sellCategoryImage} alt="sale" />
                        <p className="exploreCategoryName">Places for sale</p>
                    </Link>
                </div>
            </main>
        </div>
    )
}

export default Explore