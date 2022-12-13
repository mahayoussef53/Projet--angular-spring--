package tn.isima.employeemanager.resource;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import tn.isima.employeemanager.model.Client;
import tn.isima.employeemanager.service.ClientService;

@RestController
@RequestMapping("/client")
@CrossOrigin(origins = "*")
public class ClientResource {
    private final ClientService clientService;
   
    
    
    public ClientResource(ClientService clientService) {
        this.clientService = clientService;
    }
    
    
    
    @PostMapping("/add")
    public ResponseEntity<Client> addClient(@RequestBody Client client) {
        Client newClient = clientService.addClient(client);
        return new ResponseEntity<>(newClient, HttpStatus.CREATED);
    }

   
}
