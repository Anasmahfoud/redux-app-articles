

export function ajouterProduit(newProduit){
    return {
        type : 'AJOUTER_ARTICLE',
        payload : newProduit
    }
}


export function supprimerProduit(produitId){
    return {
        type : 'SUPPRIMER_ARTICLE',
        payload : produitId
    }
}


export function modifierProduit(produitId, newProduct){
    return {
        type : 'MODIFIER_ARTICLE',
        payload : { produitId : produitId , newProduct : newProduct}
    }
}