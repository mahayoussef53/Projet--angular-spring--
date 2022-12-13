package tn.isima.employeemanager.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import tn.isima.employeemanager.repo.ClientRepo;

import javax.transaction.Transactional;

@Service
@Transactional
public class ClientService {
    private final ClientRepo clientRepo;

    @Autowired
    public ClientService(ClientRepo clientRepo) {
        this.clientRepo = clientRepo;
    }

    public void deleteClient(Long id){
        clientRepo.deleteClientById(id);
    }


}
