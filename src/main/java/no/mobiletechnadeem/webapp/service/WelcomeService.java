package no.mobiletechnadeem.webapp.service;

import no.mobiletechnadeem.webapp.dao.ProductDAO;
import no.mobiletechnadeem.webapp.entity.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class WelcomeService {
    @Autowired
    ProductDAO productDAO;

    public List<Product> getAllProducts() {

        return productDAO.getProducts();
    }
}
