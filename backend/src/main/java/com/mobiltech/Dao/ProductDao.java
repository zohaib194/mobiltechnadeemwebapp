package com.mobiltech.Dao;

import com.mobiltech.Entity.Product;

import java.util.Collection;

public interface ProductDao {
    Collection<Product> getAllProducts();

    Product getProductById(int id);

    void removeProductById(int id);

    void updateProduct(Product product);

    void insertProduct(Product product);
}
