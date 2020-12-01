// les fichiers texte doivent être enregistrés au format .txt et encodés en UFT-8

String[] listeNoms, listeAdj, listeVerbes;
String tousNoms, tousAdj, tousVerbes,nom;

void setup() {
  size(300, 300);
  background(200);
  fill(50);
  textAlign(CENTER);
  textSize(24);
  listeNoms = loadStrings("assets/1.txt"); // le tableau "listeNoms" est composé des mots du fichier texte assemblés en une seule ligne
  listeAdj=loadStrings("assets/2.txt");
  listeVerbes=loadStrings("assets/2.txt");
  tousNoms = join (listeNoms,""); //rassemble les éléments du tableau en une chaîne, sans séparateur
  tousAdj=join(listeAdj,"");
  tousVerbes=join(listeVerbes,"");
  listeNoms=split(tousNoms, ", "); //sépare les éléments de la chaîne "tousNoms" en un tableau, avec pour séparateur "virgule suivie d'une espace"
  listeAdj=split(tousAdj,", ");
  listeVerbes=split(tousVerbes,", ");
	text("Click to start", width/2, height/2);
}
void draw() {

}
void mouseReleased() {
  background(200);
  int n = int(random(listeNoms.length)); // choisit un élément du tableau listeNoms au hasard
  text(listeNoms[n], width/2, 80);
  int a = int(random(listeAdj.length));
  text(listeAdj[a], width/2, 120);
  int v = int(random(listeVerbes.length));
  text(listeVerbes[v], width/2, 160);
  int n2 = int(random(listeNoms.length));
	nom=listeNoms[n2]; // l'élément de "listeNoms" choisi au hasard est la valeur de la chaîne "nom"
  nom=nom.toLowerCase(); // remplace les majuscules dans "nom" par des minuscules
  text(nom, width/2, 200);
}
