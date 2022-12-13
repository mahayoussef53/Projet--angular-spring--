package tn.isima.employeemanager.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import tn.isima.employeemanager.model.Client;
import tn.isima.employeemanager.repo.ClientRepo;

import javax.transaction.Transactional;
import java.util.UUID;

@Service
@Transactional
public class ClientService {
    private final ClientRepo clientRepo;

    @Autowired
    public ClientService(ClientRepo clientRepo) {
        this.clientRepo = clientRepo;
    }

    public Client addClient(Client client) {
        client.setClientCode(UUID.randomUUID().toString());
        return clientRepo.save(client);
    }

   
}
