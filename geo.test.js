// Attention, toujours créer un dossier Gitignore pour éviter de push node_modules sur Github
// Exporter une fois, pour les ralations avec les données dans Geo.js
const calculateDistance = require('./geo');
// La distance entre deux points identiques retourne exactement 0
// describe pour regouper des test entre eux
describe('Calcul de distance Haversine', () => {
    test('La distance entre deux points identiques retourne exactement 0', () => {
        const distance1 = calculateDistance(
            [48.8566, 2.3522],
            [48.8566, 2.3522]
        );
        //expect permet de vérifier si la valeur correspon au résultat attendu
        // tibe est un matchers qui vérifie si 2 valeurs sont strictement égales
        expect(distance1).toBe(0);
    });
});

// Résultat du test validé : 
// PASS ./geo.test.js
//  La distance entre deux points identiques retourne exactement 0


// La distance entre Paris [48.8566, 2.3522] et Londres [51.5074, -0.1278] est proche de 343556 mètres.
// describe pour regouper des test entre eux
describe('Calcul de distance Haversine', () => {
    test('La distance entre Paris [48.8566, 2.3522] et Londres [51.5074, -0.1278] est proche de 343556 mètres', () => {
        const distance2 = calculateDistance(
            [48.8566, 2.3522],
            [51.5074, -0.1278]
        );
        // toBeCloseTo pour comparer des nombres à virgule 
        // le 0, après 343556 correspond au nombre de chiffres après la virgule
        expect(distance2).toBeCloseTo(343556, 0);
    });
});

// Une levée d'exception est attendue si les coordonnées start et end ne sont pas des tableaux
// Je m'attends à ce que l'appel de la fonction avec des paramètres invalides lance une exception. »


describe('Calcul de distance Haversine', () => {
    test('Une levée d’exception est attendue si start et end ne sont pas des tableaux', () => {
        expect(() => {
            calculateDistance("Paris", "Londres");
        }).toThrow(
            "L'entrée doit être constituée de deux tableaux"
        );
    });
});

// Une levée d'exception est attendue si les valeurs des tableaux start et end ne sont pas des nombres
// Code du test, seulement pour lever l'exception :
describe('Calcul de distance Haversine', () => {
    test('Une levée d’exception est attendue si les valeurs des tableaux start et end ne sont pas des nombres', () => {
        expect(() => {
            calculateDistance(
            ["Paris", 2.3522],
            [51.5074, -0.1278]
            )
        }).toThrow(
            "L'entrée doit être constituée de deux nombres"
        );
    });
});

// Remarque :
// Si besoin du message d'erreur, écrire le message d'erreur 
// }).toThrow( "L'entrée doit être constituée de deux nombres""}...

// Attention : 
// les messages dans Geo.js doivent être les mêmes que dans Geolocation.test.js

