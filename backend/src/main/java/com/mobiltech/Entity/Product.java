package com.mobiltech.Entity;

public class Product {
    private int id;
    private String name;
    private String description;
    private int price;
    private String currencyCode;
    private int inboundPrice;
    private String inboundDate;
    private String soldDate;
    private String soldTo;

    public Product(int id, String name, String description, int price, String currencyCode, int inboundPrice, String inboundDate, String soldDate, String soldTo) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.currencyCode = currencyCode;
        this.inboundPrice = inboundPrice;
        this.inboundDate = inboundDate;
        this.soldDate = soldDate;
        this.soldTo = soldTo;
    }

    public Product() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public String getCurrencyCode() {
        return currencyCode;
    }

    public void setCurrencyCode(String currencyCode) {
        this.currencyCode = currencyCode;
    }

    public int getInboundPrice() {
        return inboundPrice;
    }

    public void setInboundPrice(int inboundPrice) {
        this.inboundPrice = inboundPrice;
    }

    public String getInboundDate() {
        return inboundDate;
    }

    public void setInboundDate(String inboundDate) {
        this.inboundDate = inboundDate;
    }

    public String getSoldDate() {
        return soldDate;
    }

    public void setSoldDate(String soldDate) {
        this.soldDate = soldDate;
    }

    public String getSoldTo() {
        return soldTo;
    }

    public void setSoldTo(String soldTo) {
        this.soldTo = soldTo;
    }
}
