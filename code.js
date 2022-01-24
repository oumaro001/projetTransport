let btnChauffeurs = document.getElementById('chauffeurs');
let btnDirigents = document.getElementById('dirigents');
let btnHoraires = document.getElementById('horaires');
let btnContact = document.getElementById('contact');
let btnInfoJour = document.getElementById('info-du-jour');
let table = document.querySelector('table');




class Chauffeur {
    constructor(nom, prenom, age, voiture, id, heures) {
        this.nom = nom;
        this.prenom = prenom;
        this.age = age;
        this.voiture = voiture;
        this.id = id;
        this.heures = heures;

    }

    affiche() {
        console.log(this.nom + "" + this.prenom);
    }
}

let heureSemaine = [
    [1, [21, 25, 35, 30]],
    [2, [25, 35, 30, 04]],
    [3, [35, 13, 34, 35]],
    [4, [24, 35, 45, 40]],
    [5, [11, 35, 29, 38]],

]

function CalculHeureSemaine (idChauffeur) {

    let heures = [];
    let somme = 0;

    for(let i = 0; i< heureSemaine.length; i++){
        if(idChauffeur == heureSemaine[i][0]){
            heures = heureSemaine[i][1]
        } 
        
        for(let a = 0; a< heures.length; a++){
            somme += heures[a];
            
        }break

      
    }

    
    return somme
    
}


let lesChauffeurs = []

let chauffeur1 = new Chauffeur("Jean","Bernard",31,"Peugeot 508",1,CalculHeureSemaine(1));
lesChauffeurs.push(chauffeur1);
let chauffeur2 = new Chauffeur("Paul","Lion",25,"Citroen C5",2,CalculHeureSemaine(2));
lesChauffeurs.push(chauffeur2);
let chauffeur3 = new Chauffeur("Laure","Jardin",35,"Renault Talisman",3,CalculHeureSemaine(3));
lesChauffeurs.push(chauffeur3);
let chauffeur4 = new Chauffeur("Marie","Cars",31,"Audi A5",4,CalculHeureSemaine(4));
lesChauffeurs.push(chauffeur4);
let chauffeur5 = new Chauffeur("Alain","Demose",40,"Mercedes Classe C",5,CalculHeureSemaine(5));
lesChauffeurs.push(chauffeur5);

console.log(chauffeur1.heures);


btnChauffeurs.addEventListener('click', ()=>{

   
    btnInfoJour.style.display = 'none';
    table.style.display = 'block';

    let thead = document.querySelector('thead');

    
     thead.innerHTML = "<tr>Nom</tr> <tr>Nom</tr>";
    console.log(chauffeur1);
})
