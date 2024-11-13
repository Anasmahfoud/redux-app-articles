import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ajouterAchat, supprimerAchat } from './redux/actions/produitActions';

const Produits = () => {
  const [numero, setNumero] = useState('');
  const [codeProduit, setCodeProduit] = useState('');
  const [qte, setQte] = useState(1);
  const [filteredAchats, setFilteredAchats] = useState([]);
  const dispatch = useDispatch();
  const produits = useSelector(state => state.produits);
  const achats = useSelector(state => state.achats);

  const handleAdd = () => {
    dispatch(ajouterAchat({ numero, codeProduit, qte }));
  };

  const handleDelete = (numero) => {
    dispatch(supprimerAchat(numero));
  };

  const handleFilter = () => {
    setFilteredAchats(achats.filter(achat => achat.numero === numero));
  };

  return (
    <div>
      <h2>Produits</h2>
      <select onChange={(e) => setCodeProduit(e.target.value)} className="mb-4 p-2 border rounded">
        {produits.map(produit => (
          <option key={produit.codeProduit} value={produit.codeProduit}>
            {produit.intitule}
          </option>
        ))}
      </select>
      <input
        type="number"
        value={qte}
        onChange={(e) => setQte(e.target.value)}
        className="mb-4 p-2 border rounded"
      />
      <input
        type="text"
        value={numero}
        onChange={(e) => setNumero(e.target.value)}
        placeholder="Numéro d'achat"
        className="mb-4 p-2 border rounded"
      />
      <button onClick={handleAdd} className="mb-4 p-2 bg-blue-500 text-white rounded">
        Ajouter Achat
      </button>

      <h2>Liste des Achats</h2>
      <table className="min-w-full bg-white border">
        <thead>
          <tr>
            <th className="py-2 px-4 border">Numero</th>
            <th className="py-2 px-4 border">Produit</th>
            <th className="py-2 px-4 border">Quantité</th>
            <th className="py-2 px-4 border">Action</th>
          </tr>
        </thead>
        <tbody>
          {achats.map((achat, index) => (
            <tr key={index}>
              <td className="py-2 px-4 border">{achat.numero}</td>
              <td className="py-2 px-4 border">{achat.codeProduit}</td>
              <td className="py-2 px-4 border">{achat.qte}</td>
              <td className="py-2 px-4 border">
                <button
                  onClick={() => handleDelete(achat.numero)}
                  className="p-2 bg-red-500 text-white rounded"
                >
                  Supprimer
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Filtrer Achats</h2>
      <input
        type="text"
        value={numero}
        onChange={(e) => setNumero(e.target.value)}
        className="mb-4 p-2 border rounded"
      />
      <button onClick={handleFilter} className="mb-4 p-2 bg-green-500 text-white rounded">
        Filtrer
      </button>

      {filteredAchats.length > 0 && (
        <div>
          <h2>Résultats du Filtre</h2>
          <table className="min-w-full bg-white border">
            <thead>
              <tr>
                <th className="py-2 px-4 border">Numero</th>
                <th className="py-2 px-4 border">Produit</th>
                <th className="py-2 px-4 border">Quantité</th>
              </tr>
            </thead>
            <tbody>
              {filteredAchats.map((achat, index) => (
                <tr key={index}>
                  <td className="py-2 px-4 border">{achat.numero}</td>
                  <td className="py-2 px-4 border">{achat.codeProduit}</td>
                  <td className="py-2 px-4 border">{achat.qte}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Produits;
