package tn.isima.product.model;

import javax.persistence.*;
import java.io.Serializable;

@Entity
public class Product implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable = false, updatable = false)

    private Long id;
    private String name;
    private String price;
    //private String title;
    private String quantity;
    private String imageUrl;
    //private String description;
    @Column(nullable = false, updatable = false)
    private String productCode;

    public Product() {
    }
    public Product(String name, String price, String quantity, String imageUrl, String productCode) {
        this.name = name;
        this.price = price;
        // this.description=description;
        //this.title = title;
        this.quantity=quantity;
        this.imageUrl = imageUrl;


        this.productCode = productCode;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPrice() {
        return price;
    }

    public void setPrice(String price) {
        this.price = price;
    }

    //public String getTitle() {
        //return title;
//}

    //public void setTitle(String title) {
       // this.title=title;
   // }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }
    public String getQuantity() {
        return quantity;
    }

    public void setQuantity(String quantity) {
        this.quantity = quantity;
    }


    public String getProductCode() {
        return productCode;
    }

    public void setProductCode(String productCode) {
        this.productCode = productCode;
    }
    // public String getDescription() {
    //return description;
    // }

    //public void setDescription(String description) {
    //  this.description = description;
    // }

    @Override
    public String toString() {
        return "Product{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", prix='" + price + '\'' +
                ", imageUrl='" + imageUrl + '\'' +
                '}';
    }
}