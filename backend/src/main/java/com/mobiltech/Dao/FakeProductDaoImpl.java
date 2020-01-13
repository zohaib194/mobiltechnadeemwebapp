package com.mobiltech.Dao;

import com.mobiltech.Entity.Product;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Repository;

import java.util.Collection;
import java.util.HashMap;
import java.util.Map;

@Repository
@Qualifier("fakeData")
public class FakeProductDaoImpl implements ProductDao {
    private static Map<Integer, Product> products;

    static {
        products = new HashMap<Integer, Product>(){
            {
                put(1, new Product(1, "iPhone 4g", "iPhone 4g Original Assembled Screen", 200, "NOK", 40, "2019-08-04", null, null));
                put(2, new Product(2, "iPhone 4gs", "iPhone 4gs Original Assembled Screen", 400, "NOK", 80, "2019-08-04", null, null));
                put(3, new Product(3, "iPhone 5g", "iPhone 5g Original Assembled Screen", 600, "NOK", 120, "2019-08-04", null, null));
            }
        };
    }

    @Override
    public Collection<Product> getAllProducts(){
        return this.products.values();
    }

    @Override
    public Product getProductById(int id){
        return this.products.get(id);
    }

    @Override
    public void removeProductById(int id) {
        this.products.remove(id);
    }

    @Override
    public void updateProduct(Product product){
        Product p = products.get(product.getId());
        p.setCurrencyCode(product.getCurrencyCode());
        p.setDescription(product.getDescription());
        p.setInboundDate(product.getInboundDate());
        p.setInboundPrice(product.getInboundPrice());
        p.setName(product.getName());
        p.setPrice(product.getPrice());
        p.setSoldDate(product.getSoldDate());
        p.setSoldTo(product.getSoldTo());
    }

    @Override
    public void insertProduct(Product product) {
        this.products.put(product.getId(), product);
    }
}
