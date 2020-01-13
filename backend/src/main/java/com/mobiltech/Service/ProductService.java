package com.mobiltech.Service;

import com.mobiltech.Dao.ProductDao;
import com.mobiltech.Entity.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import java.util.Collection;

// Business Logic class; Validate user sent data, Check if requested data exist, send appropriate http status code and soo on...

@Service
public class ProductService {

    @Autowired
    @Qualifier("fakeData")
    private ProductDao productDao;

    public Collection<Product> getAllProducts(){
        return this.productDao.getAllProducts();
    }

    public Product getProductById(int id){
        return this.productDao.getProductById(id);
    }

    public void deleteProductById(int id) {
        this.productDao.removeProductById(id);
    }

    public void updateProduct(Product product){
        this.productDao.updateProduct(product);
    }

    public void insertProduct(Product product) {
        this.productDao.insertProduct(product);
    }
}

