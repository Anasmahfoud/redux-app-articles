export function ajouterAchat(newProduit){
    return {
        type : 'AJOUTER_ACHAT',
        payload : newProduit
    }
}


export function supprimerAchat(produitId){
    return {
        type : 'SUPPRIMER_ACHAT',
        payload : produitId
    }
}


export function modifierAchat(produitId, newProduct){
    return {
        type : 'MODIFIER_ACHAT',
        payload : { produitId : produitId , newProduct : newProduct}
    }
}