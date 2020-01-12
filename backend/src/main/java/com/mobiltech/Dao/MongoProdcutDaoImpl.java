package com.mobiltech.Dao;

import com.mobiltech.Entity.Product;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.Collection;

@Repository
@Qualifier("mongo")
public class MongoProdcutDaoImpl implements ProductDao {
    @Override
    public Collection<Product> getAllProducts() {
        return new ArrayList<Product>(){
            {
                add(new Product(1, "iPhone 4g1234", "iPhone 4g Original Assembled Screen", 200, "NOK", 40, "2019-08-04", null, null));

            }
        };
    }

    @Override
    public Product getProductById(int id) {
        return null;
    }

    @Override
    public void removeProductById(int id) {

    }

    @Override
    public void updateProduct(Product product) {

    }

    @Override
    public void insertProduct(Product product) {

    }
}
