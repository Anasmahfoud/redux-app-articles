const initState = {
    produits: [
      {
        codeProduit: '1',
        intitule: 'Produit1',
        prix: 10,
        quantiteStocke: 20
      },
      {
        codeProduit: '2',
        intitule: 'Produit2',
        prix: 20,
        quantiteStocke: 10
      },
      {
        codeProduit: '3',
        intitule: 'Produit3',
        prix: 30,
        quantiteStocke: 2
      },
      {
        codeProduit: '4',
        intitule: 'Produit4',
        prix: 30,
        quantiteStocke: 0 
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
        let current_product = state.produits.find((item)=>{
          return item.codeProduit == action.payload.codeProduit
        })
        if (current_product.quantiteStocke >= action.payload.qte){
          current_product.quantiteStocke -= action.payload.qte;
        }
        else{
          alert('Not enough quantity')
        }
        const filtered_state = state.produits.filter((item)=>{
          return item.codeProduit != action.payload.codeProduit
        })
        return { ...state, achats: [...state.achats, action.payload] , produits : [...filtered_state , current_product] };
  
      case 'SUPPRIMER_ACHAT':
        return {
          ...state,
          achats: state.achats.filter(achat => achat.numero !== action.payload)
        };
  
      default:
        return state;
    }
  }
  