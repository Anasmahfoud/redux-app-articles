const initState = {
    produits: [
      {
        codeProduit: '1',
        intitule: 'Produit1',
        prix: 10
      },
      {
        codeProduit: '2',
        intitule: 'Produit2',
        prix: 20
      },
      {
        codeProduit: '3',
        intitule: 'Produit3',
        prix: 30
      }
    ],
    achats: [
      {
        numero: '1',
        codeProduit: '1',
        qte: 5
      }
    ]
  };
  
  export default function produitReducer(state = initState, action) {
    switch (action.type) {
      case 'AJOUTER_ACHAT':
        return { ...state, achats: [...state.achats, action.payload] };
  
      case 'SUPPRIMER_ACHAT':
        return {
          ...state,
          achats: state.achats.filter(achat => achat.numero !== action.payload)
        };
  
      default:
        return state;
    }
  }
  