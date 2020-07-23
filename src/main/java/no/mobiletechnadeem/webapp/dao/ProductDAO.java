package no.mobiletechnadeem.webapp.dao;

import no.mobiletechnadeem.webapp.entity.Product;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public class ProductDAO {
    private List<Product> products = new ArrayList<Product>();

    ProductDAO() {
        products.add(new Product(0, "IPhone 5", 200, "NOK", "https://www.spares.se/upload/Amela/ip11p-display.jpg"));
        products.add(new Product(1, "IPhone 7S", 1000, "NOK", "https://www.spares.se/upload/Amela/ip11p-display.jpg"));
        products.add(new Product(2, "IPhone 8 PLUS", 1500, "NOK", "https://www.spares.se/upload/Amela/ip11p-display.jpg"));
        products.add(new Product(3, "IPhone 10", 1800, "NOK", "https://www.spares.se/upload/Amela/ip11p-display.jpg"));
        products.add(new Product(4, "IPhone 11 MAX PRO", 2000, "NOK", "https://www.spares.se/upload/Amela/ip11p-display.jpg"));
    }

    public List<Product> getProducts() {
        return this.products;
    }
}
