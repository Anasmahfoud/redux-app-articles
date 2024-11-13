
const initState= {
    produits: [
        {
            clients : [
                {
                numero : '1',
                nom: 'N1',
                prenom : 'P1'
                }
            ] 
            , 
            produits : [
                {
                    codeProduit : '1' , 
                    intitule : 'Produit1',
                    prix : 10
                },
                {
                    codeProduit : '2' , 
                    intitule : 'Produit2',
                    prix : 20
                } , 
                {
                    codeProduit : '3' , 
                    intitule : 'Produit3',
                    prix : 30
                }
            ], 
            achats : [
                {
                    numero : '1', 
                    codeProduit : '1' ,
                    qte : 5
                }
            ]
        }
    ]
}


export default function produitReducer(state = initState , action  ){
    switch(action.type){
        case 'AJOUTER_PRODUIT':
            return {...state ,produits :  [...state.produits , action.payload]}
        
        case 'MODIFIER_PRODUIT':
            let newState = state.produits.filter((item )=>{
                return item.codeProduit ==  action.payload.produitId
            })
            return {...newState , produits : [...state.produits , action.payload.newProduct]}
        
        case 'SUPPRIMER_PRODUIT' : 
            let new_State = state.produits.filter((item )=>{
                return item.codeProduit ==  action.payload.produitId
            })
            return {...new_State};

    }
}

