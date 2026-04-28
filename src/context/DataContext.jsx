import React, { createContext, useContext, useState, useEffect } from 'react';
import { supabase } from '../lib/supabaseClient';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [productCategories, setProductCategories] = useState([]);
    const [allProducts, setAllProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            setLoading(true);

            // 1. Fetch Categories
            const { data: categories, error: catError } = await supabase
                .from('categories')
                .select('*');
            if (catError) throw catError;

            // 2. Fetch Products with Variants
            const { data: products, error: prodError } = await supabase
                .from('products')
                .select('*, product_variants(*)');
            if (prodError) throw prodError;

            // 3. Transform data to match dummy_products structure
            // FILTER: Only include products where is_visible is true
            const transformedCategories = categories.map(cat => ({
                id: cat.id,
                name: cat.name,
                products: products
                    .filter(p => p.category_id === cat.id && p.is_visible !== false)
                    .map(p => ({
                        id: p.id,
                        sku: p.sku,
                        name: p.name,
                        category: p.category_id,
                        rating: p.rating,
                        image: p.main_image,
                        images: p.gallery_images || [],
                        overview: p.overview,
                        shortDescription: p.short_description,
                        availability: p.availability,
                        tags: p.tags || [],
                        sizes: p.product_variants.map(v => ({
                            label: v.label,
                            originalPrice: v.original_price,
                            currentPrice: v.current_price,
                            maxPerOrder: v.max_per_order
                        }))
                    }))
            }));

            // Filter out empty categories if needed, or keep them
            setProductCategories(transformedCategories);
            setAllProducts(transformedCategories.flatMap(cat => cat.products));
        } catch (error) {
            console.error('Error fetching data from Supabase:', error);
        } finally {
            setLoading(false);
        }
    };

    const getproductDetail = (id) => {
        return allProducts.find((p) => p.id === id);
    };

    return (
        <DataContext.Provider value={{ productCategories, allProducts, getproductDetail, loading }}>
            {children}
        </DataContext.Provider>
    );
};

export const useData = () => useContext(DataContext);
