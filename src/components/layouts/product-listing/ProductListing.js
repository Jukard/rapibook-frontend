import React from 'react';
import './productListing.styles.css';
import ProductListingCard from '../../cards/product-listing-card/ProductListingCard';
import { BookData } from '../../../util/BookData';

const ProductListing = () => {
    return(
        <div className="product-listing-container">
            <div className="container">
                <h2>Libros <span className="text-primary">recomendados</span> que te pueden gustar:</h2>

                <div className="listing-container">
                    {BookData.slice(0,4).map((book) => (
                         <ProductListingCard key={book.id} bookData={book} />
                    ))}
                </div>

            </div>
        </div>
    )
}

export default ProductListing;