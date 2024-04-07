export const ROLES: any = {
    VILLAGEOIS: {
        name: 'Villageois',
        imgSrc: '../../../../assets/images/villageois.png',
        quantity: 0,
        description: 'Sa parole est son seul pouvoir de persuasion pour éliminer les Loups-Garous. Il doit rester à l\'affût d\'indices, et identifier les coupables.'
    },
    LOUP_GAROU: {
        name: 'Loup Garou',
        imgSrc: '../../../../assets/images/loup-garou.png',
        quantity: 0,
        description: 'Durant la nuit les Loups-Garous se réunissent pour voter qui va être éliminé. Pendant la journée il ne doit pas être démasqué.'
    },
    SORCIERE: {
        name: 'Sorcière',
        imgSrc: '../../../../assets/images/sorciere.png',
        quantity: 0,
        description: 'Elle se réveille chaque nuit et peut utiliser une de ses deux potions : soigner la victime des Loups-Garous, ou tuer quelqu’un.'
    },
    CHASSEUR: {
        name: 'Chasseur',
        imgSrc: '../../../../assets/images/chasseur.png',
        quantity: 0,
        description: 'Lorsque le Chasseur meurt il a le pouvoir d\'amener un autre joueur avec lui dans sa tombe.'
    },
    PETITE_FILLE: {
        name: 'Petite fille',
        imgSrc: '../../../../assets/images/petite-fille.png',
        quantity: 0,
        description: 'Elle se lève la nuit au moment du choix des Loups-Garous pour espionner leurs échanges.'
    },
    CUPIDON: {
        name: 'Cupidon',
        imgSrc: '../../../../assets/images/cupidon.png',
        quantity: 0,
        description: 'La première nuit, il désigne deux amoureux. Si l\'un meurt, l\'autre le suivra dans sa tombe.'
    },
    VOYANTE: {
        name: 'Voyante',
        imgSrc: '../../../../assets/images/voyante.png',
        quantity: 0,
        description: 'Chaque nuit, elle peut espionner un joueur et découvrir sa véritable identité.'
    }
}

export const ROLES_LIST: any = [
    ROLES.VILLAGEOIS,
    ROLES.LOUP_GAROU,
    ROLES.SORCIERE,
    ROLES.CHASSEUR,
    ROLES.PETITE_FILLE,
    ROLES.CUPIDON,
    ROLES.VOYANTE
]