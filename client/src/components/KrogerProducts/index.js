import React, { useState, useEffect } from 'react';
import axios from 'axios';

function KrogerProducts() {
    // const [products, setProducts] = useState([]);
    // const [loading, setLoading] = useState(false);
    // const [currentPage, setCurrentPage] = useState(1);
    // const [productsPerPage, setProductsPerPage] = useState(25);

    // useEffect(() => {
    //     const fetchPoducts = async () => {
    //         setLoading(true);
    //         const res = await axios.get();
    //         setProducts(res.data);
    //         setLoading(false);
    //     }

    //     fetchProducts();
    // }, []);
  async function fetchProducts() {
      const url = "https://api.kroger.com/v1/products";
      const response = await fetch(url, {
          "async": true,
          "crossDomain": true,
          "method": "GET",
          "headers": {
            "Accept": "application/json",
            "Authorization": "Bearer {{TOKEN}}"
          }
      });
  }
}

KrogerProducts();