// import { useDispatch , useSelector } from "react-redux";
import React, { useState, useEffect } from 'react';

// Mock data to simulate Redux state
const mockClients = [
    { numero: '1', nom: 'N1', prenom: 'P1' },
    { numero: '2', nom: 'N2', prenom: 'P2' },
    { numero: '3', nom: 'N3', prenom: 'P3' }
];
const mockProduits = [
    { codeProduit: '1', intitule: 'Produit1', prix: 10 },
    { codeProduit: '2', intitule: 'Produit2', prix: 20 },
    { codeProduit: '3', intitule: 'Produit3', prix: 30 }
];
const mockAchats = [
    { numero: '1', codeProduit: '1', qte: 5 },
    { numero: '2', codeProduit: '2', qte: 15 },
    { numero: '3', codeProduit: '3', qte: 23 },
    { numero: '1', codeProduit: '2', qte: 10 }
];

const Facture = () => {
    const [clientNumero, setClientNumero] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    // Use mock data directly
    const clients = mockClients;
    const produits = mockProduits;
    const achats = mockAchats;

    const client = clients.find(client => client.numero === clientNumero);
    const clientAchats = achats.filter(achat => achat.numero === clientNumero);

    useEffect(() => {
        if (clientNumero && !client) {
            setErrorMessage("Client number does not exist.");
        } else {
            setErrorMessage('');
        }
    }, [clientNumero, client]);

    const getProduitByCode = (codeProduit) => {
        return produits.find(produit => produit.codeProduit === codeProduit);
    };

    const total = clientAchats.reduce((acc, achat) => {
        const produit = getProduitByCode(achat.codeProduit);
        return acc + (produit ? produit.prix * achat.qte : 0);
    }, 0);

    return (
        <div>
            <h2>Facture</h2>
            <input 
                type="text" 
                placeholder="Enter Client Number" 
                value={clientNumero}
                onChange={(e) => setClientNumero(e.target.value)}
            />
            
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
            
            {client && (
                <div>
                    <h3>Client: {client.nom} {client.prenom}</h3>
                    
                    <table>
                        <thead>
                            <tr>
                                <th>Code Produit</th>
                                <th>Intitule</th>
                                <th>Quantité</th>
                                <th>Prix</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {clientAchats.map(achat => {
                                const produit = getProduitByCode(achat.codeProduit);
                                if (!produit) return null;
                                return (
                                    <tr key={achat.codeProduit}>
                                        <td>{produit.codeProduit}</td>
                                        <td>{produit.intitule}</td>
                                        <td>{achat.qte}</td>
                                        <td>{produit.prix}</td>
                                        <td>{produit.prix * achat.qte}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                    
                    <h3>Total: {total}</h3>
                </div>
            )}
        </div>
    );
};

export default Facture;
