package tn.isima.employeemanager.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import tn.isima.employeemanager.model.Client;

import java.util.Optional;

public interface ClientRepo extends JpaRepository<Client, Long> {
   

    Optional<Client> findClientById(Long id);
}
