package com.mobiltech.Controller;

import com.mobiltech.Entity.Product;
import com.mobiltech.Service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

// Controller is a class to define API endpoints.

@RestController
@RequestMapping("/products")
public class ProductController {

    @Autowired
    private ProductService productService;

    @RequestMapping(method = RequestMethod.GET)
    public Collection<Product> getAllProducts(){
        return productService.getAllProducts();
    }

    @RequestMapping(value="/{id}", method = RequestMethod.GET)
    public Product getProductById(@PathVariable("id") int id){
        return productService.getProductById(id);
    }

    @RequestMapping(value="/{id}", method = RequestMethod.DELETE)
    public void deleteProductById(@PathVariable("id") int id){
        productService.deleteProductById(id);
    }

    @RequestMapping(method = RequestMethod.PUT, consumes = MediaType.APPLICATION_JSON_VALUE)
    public void updateProduct(@RequestBody Product product){
        productService.updateProduct(product);
    }

    @RequestMapping(method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
    public void insertProduct(@RequestBody Product product){
        productService.insertProduct(product);
    }
}
