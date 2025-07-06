package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.*;
import org.springframework.boot.autoconfigure.*;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@SpringBootApplication
public class SpringDataExample implements CommandLineRunner {

    @Autowired
    private CustomerRepository repository;

    public static void main(String[] args) {
        SpringApplication.run(SpringDataExample.class, args);
    }

    @Override
    public void run(String... args) {
        repository.save(new Customer("Bob"));
        repository.save(new Customer("Alice"));

        List<Customer> all = repository.findAll();
        System.out.println("All Customers:");
        all.forEach(System.out::println);
    }
}

@Repository
interface CustomerRepository extends JpaRepository<Customer, Long> {
    List<Customer> findByName(String name);
}
