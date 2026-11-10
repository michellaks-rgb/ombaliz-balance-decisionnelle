const exampleBank = [
 ['Tous les dilemmes',
  ['Ça m’aide à décompresser après une journée difficile.', 'Pendant un moment, je pense moins à mes soucis.', 'C’est un plaisir que j’attends dans la journée.', 'Ça m’aide à me sentir à ma place avec les autres.', 'Ça remplit les moments où je me sens seul ou où je m’ennuie.'],
  ['Je dépasse souvent la limite que je m’étais fixée.', 'Je consacre moins de temps à ce qui compte pour moi.', 'Je dépense plus que je ne le voudrais.', 'Je minimise ce que je fais quand on me pose la question.', 'J’ai parfois des regrets le lendemain.'],
  ['J’ai peur de ne plus savoir comment me détendre.', 'Je crains de me sentir à part dans mon groupe.', 'Je ne sais pas quoi faire quand l’envie monte.', 'J’ai peur de revivre une tentative difficile.', 'J’aurais besoin d’aide pour changer certaines habitudes.'],
  ['J’aimerais retrouver le sentiment de pouvoir choisir.', 'J’aimerais avoir plus d’énergie pour mes projets.', 'Je voudrais être plus disponible pour mes proches.', 'J’aimerais dégager du temps pour ce qui me tient à cœur.', 'J’aimerais trouver d’autres façons de prendre soin de moi.']],
 ['Alcool',
  ['Le premier verre marque la fin de ma journée.', 'En soirée, j’ai l’impression de parler plus facilement.', 'J’ai l’impression que boire m’aide à m’endormir.'],
  ['Je m’endors vite mais je me réveille plusieurs fois.', 'Après certaines soirées, des passages m’échappent.', 'Les lendemains, je suis moins disponible pour mes proches.'],
  ['Je redoute les questions si je refuse un verre.', 'Je crains de perdre mon rituel du soir.', 'Je me demande comment gérer les invitations et les repas de famille.'],
  ['Je voudrais des matins où je me sens plus présent.', 'J’aimerais profiter des soirées et me souvenir de ce que j’ai vécu.', 'J’aimerais savoir comment mon sommeil évolue si je bois moins.']],
 ['Tabac et nicotine',
  ['La cigarette me donne un prétexte pour faire une vraie pause.', 'J’aime retrouver mes collègues pendant la pause cigarette.', 'Fumer me donne l’impression de calmer rapidement mon agitation.'],
  ['Je m’essouffle plus vite quand je monte les escaliers.', 'Je calcule quand je pourrai ressortir fumer.', 'L’odeur sur mes vêtements me gêne.'],
  ['Je redoute les envies après le café ou le repas.', 'J’ai peur d’être plus irritable au début.', 'J’aurais besoin d’une autre façon de faire une pause au travail.'],
  ['J’aimerais avoir plus de souffle quand je marche.', 'J’aimerais économiser pour quelque chose qui me fait envie.', 'Je voudrais profiter d’un repas sans penser à la prochaine cigarette.']],
 ['Cannabis',
  ['Le soir, j’ai l’impression que ça ralentit mes pensées.', 'J’associe ce moment à la musique et à la détente.', 'C’est une façon de partager un moment avec mes amis.'],
  ['Certains matins, j’ai du mal à me mettre en route.', 'Je remarque que je décroche plus vite quand j’essaie de me concentrer.', 'Il m’arrive de remettre mes projets au lendemain.'],
  ['Je crains de mal dormir si je change mon rituel du soir.', 'Je redoute que l’ennui ou l’irritabilité prennent plus de place.', 'Je ne sais pas comment retrouver mes amis autrement.'],
  ['J’aimerais me sentir plus clair au réveil.', 'Je voudrais retrouver du temps pour des activités que j’ai laissées de côté.', 'J’aimerais avoir plusieurs façons de décompresser.']],
 ['Médicaments et autres substances',
  ['Je recherche un apaisement quand l’angoisse devient forte.', 'Je m’y tourne quand je crains de ne pas dormir.', 'Dans certains moments, je cherche à me sentir plus énergique ou plus sûr de moi.'],
  ['Je me préoccupe beaucoup du moment où je pourrai en reprendre.', 'Après coup, il m’arrive de me sentir ralenti ou épuisé.', 'Je me sens moins libre de choisir quand j’en prends.'],
  ['Je redoute le retour des difficultés qui m’ont amené à en prendre.', 'J’ai du mal à imaginer comment en parler à mon médecin.', 'Je me demande qui pourrait m’accompagner si j’envisage un changement.'],
  ['J’aimerais pouvoir parler de mes besoins avec un professionnel.', 'Je voudrais trouver un rythme qui me laisse plus disponible.', 'J’aimerais élargir les façons dont je peux être aidé quand ça va mal.']],
 ['Jeux d’argent et paris',
  ['J’aime le frisson quand le résultat est incertain.', 'L’espoir d’un gain me donne l’impression qu’une solution financière est possible.', 'Les paris font partie des discussions avec mes amis.'],
  ['Je rejoue pour essayer de récupérer ce que j’ai perdu.', 'Il m’arrive de prendre de l’argent prévu pour autre chose.', 'Je cache parfois mes mises ou mes pertes.'],
  ['J’ai du mal à accepter l’idée de laisser mes pertes derrière moi.', 'Je crains que les matchs aient moins d’intérêt sans pari.', 'Je redoute de parler des dépenses à mes proches.'],
  ['J’aimerais regarder un match sans suivre mes mises.', 'Je voudrais reprendre la main sur mon budget.', 'J’aimerais ne plus passer mes soirées à essayer de me refaire.']],
 ['Jeux vidéo',
  ['Je retrouve des amis et une équipe qui compte sur moi.', 'J’aime progresser et relever des défis.', 'Le jeu me permet de mettre mes préoccupations de côté.'],
  ['Je dis « encore une partie » et je me couche beaucoup plus tard.', 'Je laisse de côté des rendez-vous ou des activités prévus.', 'Je me dispute avec mes proches au sujet du temps que j’y passe.'],
  ['Je crains de perdre le contact avec mon équipe.', 'J’ai peur de perdre ma progression ou ma place dans le groupe.', 'Il me faudrait une autre activité qui me procure autant de plaisir.'],
  ['Je voudrais retrouver un rythme de sommeil qui me convient.', 'J’aimerais continuer à jouer tout en gardant du temps pour d’autres activités.', 'J’aimerais retrouver du plaisir dans des projets hors du jeu.']],
 ['Réseaux sociaux et écrans',
  ['Je garde le contact avec des personnes que je vois peu.', 'Regarder des vidéos me distrait entre deux tâches.', 'Les réactions à mes publications me donnent l’impression d’être remarqué.'],
  ['Je consulte mon téléphone pendant que quelqu’un me parle.', 'Je me compare aux autres et je me sens parfois moins bien après.', 'Je perds le fil de ce que je fais à force de regarder les notifications.'],
  ['J’ai peur de manquer une information ou une invitation.', 'Je ne sais pas quoi faire de ces petits moments d’attente.', 'Je crains que mes amis trouvent étrange que je réponde moins vite.'],
  ['J’aimerais être plus présent pendant les moments partagés.', 'Je voudrais avoir des moments où je peux me concentrer.', 'J’aimerais choisir quand je me connecte et pour quoi faire.']],
 ['Achats difficiles à contrôler',
  ['Chercher et comparer les articles m’occupe quand je m’ennuie.', 'Commander me donne un plaisir immédiat.', 'Quand je me sens mal, j’ai l’impression de m’offrir du réconfort.'],
  ['J’accumule des objets que j’utilise peu.', 'Je ressens du stress quand je vérifie mes comptes.', 'Il m’arrive de cacher des colis ou des dépenses.'],
  ['Je crains de rater une bonne occasion.', 'J’ai peur de perdre un plaisir facile d’accès.', 'J’aurais besoin d’une autre façon de me récompenser.'],
  ['Je voudrais acheter avec plus de recul.', 'J’aimerais pouvoir mettre de l’argent de côté pour un projet.', 'Je voudrais retrouver de la tranquillité quand je regarde mon compte.']]
];
const extraExamples = [
 [["Le soir, ce rituel me marque une coupure avec le travail.", "Quand je rentre dans une maison vide, ça m’occupe jusqu’au dîner.", "Quand je viens de me disputer, ça me donne un répit avant de reparler.", "Ça me donne quelque chose à attendre le dimanche soir.", "Dans une soirée où je connais peu de monde, cette habitude me rassure."], ["Je dis que j’en ai pour dix minutes et je rate l’heure du dîner.", "Le lendemain, je dois finir les tâches que j’ai repoussées.", "Je m’agace quand quelqu’un m’interrompt.", "J’ai renoncé à une sortie pour garder ce moment pour moi.", "J’y pense même quand je voudrais écouter la personne en face de moi."], ["Je ne sais pas par quoi remplacer ce rituel en rentrant.", "Si j’en parle à la maison, j’ai peur qu’on surveille chacun de mes gestes.", "Les jours où je suis épuisé, tout changement me paraît demander trop d’efforts.", "Je crains qu’un écart me donne envie de tout laisser tomber.", "Il me faudrait une solution pour les soirs où je suis seul."], ["Je voudrais pouvoir accepter une sortie sans calculer ce que ça change à mon rituel.", "J’aimerais finir ma soirée en ayant encore du temps pour lire.", "J’aimerais pouvoir en parler avec quelqu’un sans me cacher.", "Je voudrais être plus attentif à table.", "J’aimerais retrouver la satisfaction de tenir une décision que j’ai prise pour moi."]],
 [["Au repas de famille, trinquer me donne le sentiment de participer.", "Quand je cuisine seul, j’associe le verre au plaisir de préparer le repas.", "Après une dispute, boire me donne l’impression de mettre ma colère en sourdine.", "Le vendredi, l’apéro marque pour moi le début du week-end.", "Lors d’un premier rendez-vous, j’ai l’impression d’être moins sur la réserve."], ["Au restaurant, je finis par commander un autre verre alors que j’avais prévu de m’arrêter.", "Le samedi matin, je reporte la balade que j’avais promise.", "Je relis mes messages de la veille avec appréhension.", "Quand je bois trop, il m’arrive de répondre sèchement à mes proches.", "J’évite d’ouvrir une discussion sur le nombre de bouteilles achetées dans la semaine."], ["Au barbecue, je redoute qu’on me resserve alors que j’avais prévu autre chose.", "Le vendredi, je ne sais pas quel rituel pourrait remplacer l’apéro.", "Je me demande comment parler à mes amis de ce que j’essaie de changer.", "Si je bois quand je me sens seul, j’ai peur que les soirées me paraissent longues.", "Je me demande quel accompagnement me conviendrait si je décide de modifier ma consommation."], ["J’aimerais être disponible pour le petit-déjeuner en famille le dimanche.", "Je voudrais pouvoir choisir ma boisson au restaurant sans suivre automatiquement la tablée.", "J’aimerais me souvenir de la fin des conversations en soirée.", "J’aimerais garder le plaisir de cuisiner et essayer un autre rituel en rentrant.", "Je voudrais me sentir capable d’aborder ce sujet en séance."]],
 [["La cigarette du matin va avec mon café depuis des années.", "Pendant une journée chargée, sortir fumer me donne quelques minutes seul dehors.", "Quand j’attends un appel important, le geste occupe mes mains.", "À une fête, sortir fumer m’aide à engager la conversation.", "Après le déjeuner, la cigarette marque pour moi la fin de la pause."], ["Au cinéma, je pense à l’heure où je pourrai ressortir.", "Je rachète un paquet alors que j’avais prévu de limiter mes dépenses.", "Je tousse parfois au réveil et ça me gêne.", "Quand il pleut, je sors quand même pour fumer.", "Je ressens le besoin de vapoter dès que je me retrouve à attendre."], ["J’ai peur que le café du matin perde son intérêt.", "Je ne sais pas comment rejoindre mes collègues pendant leur pause sans fumer.", "Je me demande quoi faire de mes mains en attendant le bus.", "Je redoute le trajet en voiture, où j’ai l’habitude de fumer.", "J’aimerais savoir à qui demander de l’aide quand l’envie revient après un repas."], ["J’aimerais faire une pause au travail en choisissant ce qui me fait du bien.", "Je voudrais profiter d’un trajet sans prévoir d’arrêt cigarette.", "J’aimerais garder mes vêtements sans odeur de tabac.", "Je voudrais mettre de côté l’argent consacré aux paquets.", "J’aimerais profiter d’un film jusqu’au bout sans penser à sortir."]],
 [["Quand je rentre après une journée bruyante, j’ai l’impression de pouvoir enfin ralentir.", "Avec certains amis, partager ce moment fait partie de nos habitudes.", "Le soir, j’ai l’impression que la musique me captive davantage.", "Quand je tourne en rond chez moi, ça donne un rythme à la soirée.", "Quand je repense à une conversation pénible, j’ai l’impression que ça coupe le fil de mes pensées."], ["Je repousse parfois une tâche simple jusqu’au lendemain.", "Il m’arrive de décrocher au milieu d’un film que j’avais envie de voir.", "Le matin, je laisse sonner mon réveil plus longtemps que prévu.", "Je décline parfois une sortie pour rester dans mon rituel du soir.", "Je dépense plus que ce que j’avais prévu pour la semaine."], ["Si mes amis en consomment quand on se retrouve, je crains d’avoir du mal à tenir mon choix.", "Je ne sais pas comment occuper l’heure avant d’aller me coucher.", "J’ai peur que mes pensées reprennent toute la place dans le silence.", "Je redoute de devoir expliquer pourquoi j’ai envie de changer.", "Je me demande comment retrouver le plaisir de certains moments sans ce rituel."], ["Je voudrais commencer mes matinées avec moins de précipitation.", "J’aimerais finir un projet que je remets souvent au lendemain.", "Je voudrais retrouver des soirées où je peux choisir entre plusieurs activités.", "J’aimerais continuer à voir mes amis dans d’autres contextes.", "J’aimerais reprendre une activité que j’aimais avant d’y consacrer mes soirées."]],
 [["À la veille d’une journée importante, savoir que j’ai quelque chose sous la main me rassure.", "Quand je crains une nuit blanche, prendre quelque chose me donne le sentiment d’agir.", "Quand je me sens submergé, je recherche un répit rapide.", "Quand je redoute de manquer d’énergie lors d’une soirée, je cherche à me sentir plus à l’aise.", "Dans les moments difficiles, c’est une réponse que je connais déjà."], ["Je m’inquiète quand je ne sais pas si j’en aurai pour le week-end.", "Je me sens parfois moins attentif pendant une conversation le lendemain.", "J’ai du mal à expliquer à mon médecin ce que je prends réellement.", "Il m’arrive de refuser une sortie par peur de ne pas me sentir bien.", "Je consacre de plus en plus de temps à y penser."], ["J’ai peur de ne pas trouver les mots pour dire ce qui se passe au rendez-vous.", "Je crains que mes proches minimisent mes difficultés à dormir.", "Je me demande ce que je pourrai faire quand l’angoisse revient la nuit.", "J’appréhende de demander de l’aide par peur du jugement.", "Je crains de devoir changer trop de choses en même temps."], ["J’aimerais préparer les questions que je veux poser au médecin.", "J’aimerais retrouver des matinées où je peux suivre une conversation sans décrocher.", "Je voudrais avoir quelqu’un à qui parler quand je redoute la nuit.", "J’aimerais réfléchir avec un professionnel à ce qui m’aiderait au quotidien.", "Je voudrais pouvoir dire plus clairement à mes proches de quel soutien j’ai besoin."]],
 [["Un ticket à gratter me donne un petit suspense sur le chemin du retour.", "Pendant un match, avoir une mise me tient en haleine jusqu’à la fin.", "Après une journée monotone, j’attends l’excitation du résultat.", "Les discussions de pronostics me donnent un sujet commun avec mes amis.", "Quand je pense à mes factures, imaginer un gain me fait momentanément espérer."], ["Après une perte, je repousse le moment de regarder mon solde.", "Je consulte les résultats pendant un repas de famille.", "Il m’arrive de miser alors que j’avais réservé cet argent pour une facture.", "Quand je gagne, je rejoue parfois l’argent que je pensais garder.", "Je me couche tard parce que j’attends le résultat d’un dernier match."], ["Quand mon groupe partage ses paris, je crains de ne plus participer à la conversation.", "Je redoute le premier week-end de matchs sans miser.", "J’ai du mal à renoncer à l’idée de récupérer les pertes.", "J’ai peur d’ouvrir mes relevés et de faire le point.", "Je ne sais pas encore comment traverser un moment d’ennui sans ouvrir l’application."], ["J’aimerais prévoir les dépenses du mois avec plus de sérénité.", "Je voudrais regarder un match pour suivre le jeu et discuter avec mes amis.", "J’aimerais prendre un repas sans vérifier des résultats sous la table.", "Je voudrais pouvoir parler de mes difficultés financières à une personne de confiance.", "J’aimerais consacrer une partie de mon budget à une sortie que j’ai choisie."]],
 [["Après les cours, je retrouve en ligne des amis que je vois rarement ailleurs.", "Dans mon équipe, j’ai un rôle où je me sens utile.", "Terminer une quête me donne une satisfaction que je trouve peu dans ma journée.", "J’aime découvrir des univers et résoudre des énigmes à mon rythme.", "Quand je suis seul le week-end, une partie me donne un rendez-vous avec d’autres."], ["Je réponds « j’arrive » plusieurs fois alors que le repas refroidit.", "Je commence mes devoirs tard parce que je termine d’abord la partie.", "Je me lève fatigué après être resté pour aider l’équipe.", "Je repousse un rendez-vous pour ne pas manquer un événement en ligne.", "Je suis encore absorbé par le jeu quand un proche veut me parler."], ["Je ne sais pas comment quitter une partie en cours sans laisser tomber mon équipe.", "J’ai peur de rater les événements auxquels mes amis participent.", "Je crains que mes soirées deviennent vides si je joue moins.", "J’ai du mal à trouver ailleurs le même sentiment de progresser.", "Je ne sais pas comment proposer à mes amis de nous retrouver autrement."], ["J’aimerais avoir une heure de coucher qui me laisse en forme le matin.", "Je voudrais décider à l’avance quelles soirées je garde pour jouer.", "J’aimerais reprendre un sport que j’ai laissé de côté.", "Je voudrais dîner avec ma famille avant de rejoindre mes amis en ligne.", "J’aimerais avoir aussi des projets où je peux progresser en dehors du jeu."]],
 [["Dans les transports, les vidéos rendent le trajet moins long.", "Quand je vis loin de ma famille, les messages me donnent de leurs nouvelles.", "Je trouve des idées de recettes ou de sorties qui m’inspirent.", "Quand je n’arrive pas à me mettre au travail, regarder mon fil me donne un moment de répit.", "Envoyer un message à un ami me paraît plus facile que l’appeler."], ["Je prends le téléphone pour répondre à un message et j’y passe une demi-heure.", "Je termine la soirée au lit à regarder des vidéos alors que je voulais dormir.", "Au travail, une notification me coupe au milieu d’une tâche.", "Après avoir regardé certaines publications, ma journée me semble moins intéressante.", "Il m’arrive de commencer la journée en regardant le fil avant même de me lever."], ["Je crains de manquer un message du groupe qui organise les sorties.", "Dans une salle d’attente, je ne sais pas quoi faire sans regarder mon écran.", "J’ai peur que répondre moins vite soit pris pour un manque d’intérêt.", "J’ai l’habitude de prendre mon téléphone dès que je me sens gêné en public.", "Je me demande comment rester au courant des nouvelles de mes proches autrement."], ["J’aimerais commencer la journée par un petit-déjeuner tranquille.", "Je voudrais regarder un film jusqu’au bout sans consulter mon téléphone.", "J’aimerais écouter mon ami sans interrompre la conversation pour une notification.", "Je voudrais garder du temps pour mes messages tout en retrouvant des moments de concentration.", "J’aimerais terminer la soirée avec une activité qui me donne envie d’aller dormir."]],
 [["Quand je reçois mon salaire, choisir quelque chose pour moi marque le coup.", "Après une journée où je me sens peu reconnu, commander me donne un petit plaisir.", "Comparer les annonces m’occupe pendant les trajets.", "J’aime le moment où le colis arrive et où je découvre ce que j’ai choisi.", "Quand je me sens découragé, imaginer ce nouvel objet me redonne momentanément de l’élan."], ["Je retrouve des colis que je n’ai même pas ouverts.", "À la fin du mois, je reporte un achat dont j’avais réellement besoin.", "Je passe du temps à renvoyer des objets commandés sur un coup de tête.", "Je préfère récupérer mes colis seul pour éviter les questions.", "J’ai acheté plusieurs versions d’un objet que j’utilise rarement."], ["J’ai du mal à fermer la page quand une promotion expire ce soir.", "Je redoute de ressentir un vide après une journée difficile.", "Je crains que mes sorties avec une amie soient moins plaisantes si je n’achète rien.", "Je ne sais pas par quoi remplacer le plaisir d’attendre un colis.", "Je me sens dépassé à l’idée de faire le point sur toutes mes dépenses."], ["J’aimerais réserver de l’argent pour des vacances plutôt que le dépenser au fil des offres.", "Je voudrais ouvrir mon application bancaire sans appréhension.", "J’aimerais avoir plus de place chez moi pour les objets que j’utilise vraiment.", "Je voudrais me récompenser après une semaine difficile avec un moment qui me fait du bien.", "J’aimerais entrer dans une boutique et pouvoir en ressortir à l’aise avec mon choix."]]
];
extraExamples.forEach((sections, themeIndex) => {
 sections.forEach((phrases, sectionIndex) => exampleBank[themeIndex][sectionIndex + 1].push(...phrases));
});
exampleBank.push([
 'Vidéos pornographiques',
 [
  'Quand j’ai envie d’un moment intime en solo, j’y trouve du plaisir.',
  'J’y vais par curiosité, pour voir ce qui m’attire ou m’intrigue.',
  'Le soir, regarder une vidéo m’aide à décrocher du travail pendant un moment.',
  'Quand je suis seul le week-end, ça occupe un moment où je m’ennuie.',
  'Après une dispute, ça détourne mon attention de ce que je ressens.',
  'C’est un moment à moi quand j’ai passé la journée à m’occuper des autres.',
  'Je peux explorer mes envies à mon rythme, dans un espace privé.',
  'Quand je crains d’être jugé en parlant de mes envies, cette habitude me paraît plus facile.'
 ],
 [
  'J’ai laissé se renouveler un abonnement à 15 € par mois alors que je pensais l’avoir résilié.',
  'J’ai payé plusieurs vidéos dans la même soirée et j’ai découvert le total sur mon relevé.',
  'J’ai utilisé une partie du budget prévu pour une sortie pour payer du contenu.',
  'Je ne sais plus combien je dépense par mois entre les abonnements et les achats ponctuels.',
  'Dans mon couple, j’évite une conversation sur ce que chacun attend de notre intimité.',
  'J’ai repoussé un moment prévu à deux pour continuer à regarder.',
  'J’ai dépassé une limite dont nous avions parlé et j’appréhende d’y revenir.',
  'Un proche m’a appelé et je n’ai pas rappelé alors que j’avais envie de lui parler.',
  'Quand je me couche tard après avoir regardé des vidéos, je me sens fatigué le lendemain.',
  'Après certaines vidéos, je me compare aux personnes à l’écran et je me sens sous pression.',
  'Je remarque que je continue parfois à défiler alors que ça ne me détend plus.',
  'Après une longue soirée devant l’écran, j’ai parfois les yeux fatigués et du mal à me concentrer.',
  'Je me dis que je regarderai une vidéo et je me couche une heure plus tard.',
  'Je remets à plus tard une tâche que j’avais prévu de finir avant le dîner.',
  'Je prends mon téléphone pour autre chose et je passe finalement vingt minutes à chercher une vidéo.',
  'Le samedi matin, je reporte la marche que j’avais prévue parce que j’ai passé plus de temps que prévu à regarder.'
 ],
 [
  'Après une journée stressante, je ne sais pas encore comment retrouver un moment de détente.',
  'Je crains que les soirs où je suis seul me paraissent plus longs.',
  'Je voudrais garder une place pour le plaisir et la curiosité dans ma vie intime.',
  'Quand je prends mon téléphone au lit, le geste est devenu tellement automatique que je crains de ne pas y penser.',
  'J’ai peur qu’en en parlant on réduise toute ma vie intime à cette habitude.',
  'Je ne sais pas comment expliquer à mon partenaire ce que je souhaite changer.',
  'Je me décourage en repensant aux limites que je n’ai pas réussi à tenir.',
  'J’hésite entre changer le moment où je regarde, réduire le temps que j’y passe et faire une pause.'
 ],
 [
  'J’aimerais pouvoir choisir quand je regarde, selon mon envie du moment.',
  'Je voudrais retrouver l’heure de coucher que je m’étais fixée les soirs de semaine.',
  'J’aimerais savoir si je cherche surtout du plaisir, du repos ou de la compagnie quand j’ouvre un site.',
  'Je voudrais trouver d’autres manières de faire une coupure après le travail.',
  'J’aimerais pouvoir parler de mes envies et de mes limites dans mon couple, si j’en ai envie.',
  'Je voudrais garder du temps pour appeler quelqu’un ou sortir les soirs où je me sens seul.',
  'J’aimerais pouvoir aborder ce sujet en séance avec mes propres mots.',
  'Je voudrais faire davantage de place à ce qui me convient dans ma vie intime.'
 ]
]);
const costLabels = ['Argent', 'Relations', 'Santé', 'Temps passé', 'Jugement sur soi'];
const extraCosts = [
 [["Je puise dans l’argent prévu pour une sortie pour continuer cette habitude.", "Je laisse des prélèvements liés à cette habitude s’accumuler sans faire le total."], ["Je raccourcis nos conversations pour retourner à mon activité.", "J’annule à la dernière minute un moment prévu avec un proche."], ["Je repousse l’heure de dormir et je peine à me lever le lendemain.", "Quand j’y passe toute la soirée, je saute parfois le repas."], ["Je passe quarante minutes à faire quelque chose que j’avais prévu de faire en dix.", "Je reporte une démarche administrative parce que je n’ai plus le temps de la finir."], ["Je me parle durement quand je dépasse la limite que j’avais choisie.", "Après un écart, j’oublie les moments où j’ai réussi à faire autrement."]],
 [["En vérifiant mon relevé, je découvre combien les verres commandés au restaurant ont pesé sur mon budget.", "J’ai payé un taxi imprévu après une soirée où j’avais bu."], ["Le lendemain d’une soirée, je manque d’énergie pour jouer avec mes enfants.", "J’évite de reparler d’une dispute qui a commencé pendant l’apéritif."], ["Après certaines soirées, je me réveille avec des nausées.", "Quand je bois tard, je me réveille la nuit et j’ai du mal à me rendormir."], ["Je rentre plus tard que prévu parce que je reste pour un dernier verre.", "Je passe une partie du dimanche à récupérer et je reporte ce que j’avais prévu."], ["Après avoir bu plus que prévu, je me traite de personne sans volonté.", "Quand je relis mes messages du lendemain, je me reproche longtemps ce que j’ai dit."]],
 [["En additionnant les paquets du mois, je découvre que j’ai dépassé mon budget.", "Je rachète des recharges de vape alors que j’avais prévu de garder cet argent pour un déjeuner."], ["Je quitte la table pour fumer pendant que la conversation continue.", "On me demande d’aller fumer plus loin et la discussion se tend."], ["Je remarque que je tousse pendant ma marche du matin.", "L’essoufflement me fait ralentir quand je monte les escaliers."], ["Au cours d’un trajet, je fais un détour pour racheter des cigarettes.", "Je sors plusieurs fois dans la soirée pour fumer et je manque des passages du film."], ["Quand je reprends une cigarette après une journée sans fumer, je me dis que tous mes efforts sont perdus.", "Je me compare à un proche qui a réussi à changer et je me dévalorise."]],
 [["Je prends dans mon budget courses pour couvrir un achat que je n’avais pas prévu.", "En faisant mes comptes, je constate que mes dépenses de cannabis se répètent chaque semaine."], ["Je décline un dîner pour rester dans mon rituel du soir.", "Un ami me raconte quelque chose d’important et je me rends compte que j’ai perdu le fil."], ["Certains matins après avoir consommé, je me sens encore ralenti.", "Il m’arrive de ressentir plus d’inquiétude après avoir consommé."], ["Je reporte au lendemain la préparation de mon sac ou de mon repas.", "Une soirée que je comptais consacrer à un projet passe sans que je m’y mette."], ["Quand je n’arrive pas à respecter le soir de pause que je m’étais fixé, je me juge sévèrement.", "Je m’en veux de repousser encore un projet qui compte pour moi."]],
 [["Une partie de mon budget du week-end passe dans des achats que je n’avais pas prévus.", "En regardant mes dépenses de la semaine, je suis surpris par la somme consacrée à cet usage."], ["J’écourte une sortie quand je me sens trop ralenti pour suivre les conversations.", "Je minimise ce que je prends quand un proche me demande comment je vais."], ["Je remarque une somnolence qui me gêne dans mes activités du matin.", "Après certaines prises, je me sens agité et j’ai du mal à trouver le sommeil."], ["Je passe une partie de ma soirée à penser à la prochaine prise.", "Le lendemain, je reporte une démarche parce que je me sens encore fatigué."], ["J’ai peur de me juger en disant à mon médecin ce que je prends réellement.", "Je m’en veux de ne pas avoir osé demander de l’aide plus tôt."]],
 [["Après une perte, je fais un nouveau dépôt avec de l’argent prévu pour une facture.", "Je découvre que les petites mises du week-end dépassent mon budget de sorties."], ["Je regarde les résultats à table et je perds le fil de la conversation.", "Je repousse une discussion avec mon partenaire sur les dépenses du mois."], ["Quand j’attends le résultat d’un pari tard le soir, je dors moins et je me sens épuisé le lendemain.", "Après une perte, je sens la tension monter et j’ai du mal à me détendre."], ["Je passe une heure à comparer des cotes alors que j’avais prévu de faire autre chose.", "Je prolonge ma soirée pour suivre un dernier résultat."], ["Après une perte, je me parle avec dureté et je rumine ce que j’aurais dû faire.", "Je me reproche d’avoir rejoué alors que j’avais décidé de m’arrêter."]],
 [["Plusieurs petits achats dans le jeu finissent par dépasser ce que j’avais prévu pour le mois.", "Je paie un abonnement que j’utilise encore par habitude alors que j’aimerais garder cet argent pour une sortie."], ["Un proche me parle pendant une partie et je lui demande plusieurs fois d’attendre.", "Je décline un rendez-vous pour ne pas rater un événement en ligne."], ["Après une partie tardive, je somnole en cours ou au travail le lendemain.", "Après une longue session sans pause, je remarque que j’ai les yeux ou la nuque fatigués."], ["Une dernière partie prend le temps que j’avais réservé aux devoirs.", "Je commence à jouer le samedi après-midi et je constate que toute l’après-midi est passée."], ["Je m’en veux quand je dépasse encore l’heure que je m’étais fixée.", "Après une session plus longue que prévu, je me traite de paresseux au lieu de regarder ce qui s’est passé."]],
 [["J’achète un produit vu dans une vidéo et je regrette cette dépense imprévue.", "Je découvre plusieurs prélèvements pour des applications que je consulte par habitude."], ["Je réponds à une notification pendant qu’un ami me raconte sa journée.", "Je manque une partie d’un repas en famille parce que je consulte mon fil sous la table."], ["Je regarde des vidéos au lit et je me sens fatigué au réveil.", "Après un long moment devant l’écran, je remarque que mes yeux tirent."], ["Je prends mon téléphone pour vérifier un message et j’y passe une demi-heure.", "Je dois reprendre une tâche depuis le début après plusieurs interruptions."], ["Après avoir vu les publications des autres, je me dis que ma vie n’est pas assez intéressante.", "Je m’en veux le soir d’avoir passé plus de temps que prévu sur mon téléphone."]],
 [["Les petites commandes de la semaine me font dépasser mon budget courses.", "Je dois reporter un achat nécessaire parce que j’ai dépensé cet argent pendant les promotions."], ["J’évite de parler d’une commande avec la personne qui partage mon budget.", "Je me dispute avec un proche à propos de colis qui s’accumulent à la maison."], ["Le soir, je reste éveillé à repenser à mes dépenses et j’ai du mal à trouver le sommeil.", "Quand je regarde mon solde après des commandes imprévues, je sens l’anxiété monter."], ["Je passe une partie du samedi à préparer des retours que je n’avais pas prévus.", "Je prolonge ma pause déjeuner pour comparer des offres alors que j’avais prévu de sortir marcher."], ["Quand j’ouvre un colis que je regrette d’avoir acheté, je me juge durement.", "Je me dis que je ne sais pas gérer mon argent après avoir cédé à une promotion."]],
 [["Après avoir payé un contenu sur un coup de tête, je me reproche cette dépense.", "Je laisse courir deux abonnements et je constate le doublon en faisant mes comptes."], ["Je laisse un message de mon partenaire sans réponse pendant que je continue à regarder.", "J’appréhende de reparler d’un moment à deux que j’ai annulé."], ["Le lendemain d’une soirée prolongée devant l’écran, j’ai du mal à rester attentif au travail.", "Quand je regarde tard au lit, je repousse mon sommeil et je me sens fatigué au réveil."], ["Je passe vingt minutes à chercher une vidéo alors que j’avais pris mon téléphone pour lire un message.", "Je commence à regarder avant de dîner et je reporte le repas d’une heure."], ["Quand je dépasse le temps que je m’étais fixé, je me parle durement.", "Après certaines vidéos, je me compare aux personnes à l’écran et je juge sévèrement mon corps."]]
];
const existingCostCategories = [[4, 3, 0, 1, 4, 3, 3, 1, 1, 1], [2, 2, 1, 4, 3, 4, 1, 1], [2, 3, 4, 3, 0, 2, 3, 3], [2, 2, 3, 3, 2, 2, 1, 0], [3, 2, 4, 2, 1, 4, 1, 3], [0, 0, 1, 4, 1, 0, 0, 2], [3, 3, 1, 1, 3, 2, 1, 1], [1, 4, 3, 3, 2, 3, 4, 3], [0, 2, 1, 0, 0, 3, 1, 0], [0, 0, 0, 0, 1, 1, 1, 1, 2, 4, 4, 2, 3, 3, 3, 3]];
const detailedCosts = [
 [["En fin de mois, je décale une facture parce que j’ai dépassé le budget que j’avais prévu pour cette habitude.", "Je renonce à mettre de côté pour un projet après avoir refait mes comptes.", "J’ajoute des dépenses imprévues sur ma carte et je repousse le moment de regarder le total."], ["Une personne proche me dit qu’elle ne compte plus sur moi pour les rendez-vous du soir.", "Je réponds sèchement quand on me demande pourquoi j’ai encore changé nos plans.", "Je dis que tout va bien pour éviter une discussion, puis je me sens de plus en plus seul avec cette difficulté."], ["Quand mon rituel déborde sur mon sommeil plusieurs soirs, j’ai du mal à suivre au travail le lendemain.", "Je repousse un repas et je remarque que j’ai moins d’énergie en fin de journée.", "Je me sens tendu jusque dans mon lit et j’ai du mal à retrouver le calme."]],
 [["Après plusieurs apéritifs dans la semaine, je retire de l’argent de mon budget courses.", "Entre les verres et le retour en taxi, une soirée me coûte deux fois ce que j’avais prévu.", "J’achète à nouveau de l’alcool pour le week-end alors que je voulais épargner cette somme."], ["Mon partenaire me dit qu’il hésite à me parler de sujets importants quand j’ai bu.", "J’annule une sortie promise à mes enfants parce que je ne me sens pas en état le lendemain.", "Des amis me racontent une dispute dont je ne me souviens que par bribes."], ["Après certaines soirées, je vomis ou je reste plusieurs heures avec des nausées.", "Je me réveille tôt après avoir bu et je n’arrive plus à me rendormir.", "Il m’est arrivé de me blesser en tombant un soir où j’avais bu."]],
 [["Je rachète un paquet en fin de semaine avec l’argent prévu pour le déjeuner.", "En additionnant paquets et recharges, je constate que je mets moins de côté pour les vacances.", "Quand je n’ai plus de tabac, je fais un achat imprévu même si mon compte est déjà à découvert."], ["Mon entourage me dit que mes absences répétées coupent les moments passés ensemble.", "Je quitte une fête pour fumer et je rate le moment où un ami prend la parole.", "Quand quelqu’un me parle de la fumée près de lui, je me braque et la discussion s’envenime."], ["La toux du matin m’oblige parfois à m’arrêter en parlant.", "Quand je marche vite avec un proche, je dois ralentir pour reprendre mon souffle.", "J’ai la gorge irritée certains soirs après avoir beaucoup fumé."]],
 [["En fin de mois, je demande une avance alors qu’une partie de mon budget est passée dans le cannabis.", "J’utilise de l’argent mis de côté pour une sortie afin de racheter plus tôt que prévu.", "En notant chaque achat, je constate que la dépense réelle dépasse mon estimation."], ["Un ami me dit qu’il a cessé de me proposer des sorties parce que j’annule souvent au dernier moment.", "Mon partenaire me dit qu’il lui est difficile d’aborder un sujet sérieux avec moi le soir.", "Je passe moins de temps avec des amis que j’apprécie parce que nos soirées s’organisent presque toujours autour de la consommation."], ["Après avoir consommé, il m’est arrivé de me sentir très inquiet alors que je cherchais à me détendre.", "Le lendemain de certaines soirées, je relis plusieurs fois la même consigne pour la comprendre.", "Je ressens parfois une irritation de la gorge après avoir fumé."]],
 [["Je rachète des produits plus tôt que prévu et je dois reporter une dépense nécessaire.", "Je puise dans une réserve prévue pour un imprévu et je ne l’ai pas reconstituée.", "J’évite d’additionner les achats parce que je crains de découvrir leur poids sur mon budget."], ["Un proche me dit qu’il se sent mis à distance quand j’écourte nos échanges.", "Je minimise ce que je prends quand on m’interroge et je n’arrive plus à parler franchement de mes difficultés.", "J’ai manqué un rendez-vous important et j’ai du mal à en parler à la personne qui m’attendait."], ["Après certaines prises, je suis trop somnolent pour suivre normalement mes activités.", "Il m’est arrivé d’avoir des vertiges et de devoir m’asseoir.", "Je remarque que mon sommeil ou ma concentration se dégradent autour de certaines prises."]],
 [["Après plusieurs dépôts, je n’ai plus assez sur mon compte pour le prélèvement d’une facture.", "J’emprunte de l’argent à un proche sans lui dire qu’il doit couvrir des pertes de jeu.", "Je mise de nouveau après une perte et je creuse le découvert que je voulais combler."], ["Mon partenaire découvre des virements dont je lui avais caché l’existence et me dit qu’il doute de ce que je lui raconte.", "Un proche me relance pour de l’argent prêté et je repousse la conversation.", "Je suis si absorbé par le résultat d’un pari que je n’écoute plus la personne à table avec moi."], ["Je me réveille la nuit en repensant à une perte et j’ai du mal à me rendormir.", "Quand j’ouvre mon application bancaire après une soirée de jeu, je sens mon cœur s’accélérer.", "Je saute un repas parce que je suis absorbé par les résultats."]],
 [["Les achats intégrés de la semaine prennent l’argent prévu pour une sortie.", "Je découvre que plusieurs abonnements liés à mes jeux se renouvellent le même mois.", "J’achète un nouveau jeu pour rejoindre mes amis alors que j’avais déjà dépassé mon budget loisirs."], ["Un ami me dit qu’il ne sait plus si je viendrai quand je promets de finir ma partie à temps.", "Je réponds sèchement à mes proches quand ils me demandent de venir dîner.", "Je continue à jouer après l’heure convenue et une discussion sur le partage des tâches tourne à la dispute."], ["Après plusieurs nuits courtes, je manque d’attention dès le premier cours ou la première réunion.", "Je remarque que j’ai mal à la nuque après une longue session sans bouger.", "Je saute parfois le repas pour rester en ligne et je me sens sans énergie ensuite."]],
 [["Je commande après avoir vu une offre sur mon fil et je dois réduire mon budget de la semaine.", "J’ai payé plusieurs abonnements à de petits montants et leur total dépasse ce que j’avais prévu pour les applications.", "Je me laisse entraîner par un achat dans une diffusion en direct et je regrette la somme débitée."], ["Un proche me dit qu’il a l’impression de parler seul quand je consulte mes notifications.", "À table, je regarde une vidéo pendant qu’un enfant essaie de me raconter sa journée.", "Une discussion se tend parce que je lis mes messages alors qu’on avait prévu un moment ensemble."], ["Le soir, je repousse mon sommeil de vidéo en vidéo et je me lève épuisé.", "Après avoir lu des commentaires agressifs, je reste tendu longtemps alors que je voulais me détendre.", "Après une longue session, j’ai les yeux fatigués et je peine à me concentrer sur la suite de ma journée."]],
 [["Les paiements en plusieurs fois se cumulent et dépassent ce que je peux mettre de côté chaque mois.", "Je reporte une facture pour couvrir une commande imprévue.", "Je garde des objets que je voulais renvoyer et je dépasse le délai de remboursement."], ["La personne avec qui je partage mon budget découvre des dépenses que j’avais tues.", "Je réponds sèchement quand on me demande pourquoi les colis s’accumulent dans l’entrée.", "Je demande encore un prêt à un proche et j’appréhende d’expliquer où est passé le précédent."], ["Je reste éveillé en faisant et refaisant mes comptes après une série d’achats.", "Je sens la tension monter quand je reçois une notification de ma banque.", "Après une soirée passée à comparer des offres au lit, je suis épuisé le lendemain matin."]]
];
const pornographyCosts = [["J’ai payé plusieurs abonnements à des sites pornographiques et leur total dépasse mon budget loisirs.", "J’ai acheté des vidéos à l’unité après minuit et j’ai découvert sur mon relevé que j’avais dépensé 60 € dans la soirée.", "J’ai puisé dans l’argent réservé à une sortie pour renouveler un abonnement à du contenu pornographique.", "Je continue de payer un abonnement que je pensais avoir annulé et je m’en aperçois plusieurs mois plus tard."], ["Je me retire dans une autre pièce pour regarder des vidéos alors que mon partenaire et moi avions prévu une soirée ensemble.", "Nous avions discuté d’une limite concernant les vidéos et j’évite de dire que je l’ai dépassée, ce qui pèse sur la confiance entre nous.", "Pendant un moment intime, je me mets la pression pour reproduire ce que j’ai vu et je n’arrive plus à dire ce qui me plaît réellement.", "Mon partenaire me dit que nos conversations sur le sujet tournent court parce que je change de sujet par peur du conflit."], ["Quand je regarde des vidéos au lit jusqu’à deux heures du matin, je peine à me concentrer au travail le lendemain.", "Après certaines vidéos, je compare mon corps à ceux que j’ai vus et je reste anxieux avant un rendez-vous intime.", "Quand je regarde longtemps devant l’écran, il m’arrive d’avoir les yeux fatigués et mal à la nuque.", "Je lance une vidéo pour me calmer après une dispute et je remarque que je suis encore tendu une heure plus tard."], ["Je prends mon téléphone pour régler mon réveil et je passe quarante minutes à chercher une vidéo.", "Je lance une vidéo pendant ma pause et je reprends le travail en retard.", "Le dimanche, je repousse ma séance de sport parce que j’ai passé plus d’une heure à passer d’une vidéo à l’autre.", "Je pensais finir une tâche avant le dîner et je dois la reporter après avoir prolongé le visionnage."], ["Quand je dépasse l’heure que j’avais choisie, je me dis que je n’ai aucune maîtrise.", "Après avoir masqué une dépense, je me traite de menteur et j’évite d’en parler.", "Je me reproche longtemps d’avoir regardé alors que je m’étais engagé à prendre une pause.", "Après certaines vidéos, je me juge sévèrement parce que mon corps ou mes réactions diffèrent de ce que je vois à l’écran."]];
const seriousCosts = [
 [["Je risque de ne plus pouvoir payer mes dépenses essentielles si je continue à y consacrer cet argent."], ["Mes proches me disent qu’ils ne peuvent plus compter sur moi, et je risque de perdre leur confiance."], ["Je continue malgré des symptômes qui perturbent mon sommeil, mes repas ou mon travail."], ["Cette habitude prend tellement de temps que je risque de perdre mon emploi ou de décrocher de mes études."], ["Après un écart, je me dis que je suis incapable de changer et je renonce à demander de l’aide."]],
 [["Je risque de ne plus pouvoir payer certaines factures à force de consacrer de l’argent à l’alcool."], ["Quand je bois, je peux devenir agressif. Mes proches ont commencé à prendre leurs distances."], ["Je sais que l’alcool augmente le risque de cirrhose et de plusieurs cancers. C’est un coût que je prends au sérieux.", "Après une soirée alcoolisée, j’ai des trous noirs. Je ne me souviens plus d’une partie de ce que j’ai fait ou dit.", "Je risque un accident grave si je conduis après avoir bu."], ["Je passe une journée entière à récupérer et je manque un engagement important."], []],
 [["Je dépense chaque mois une somme qui pourrait me servir à payer mes factures ou rembourser une dette."], ["Quand je fume à la maison ou dans la voiture, j’expose mes proches à la fumée de cigarette."], ["En continuant à fumer des cigarettes, j’augmente mon risque de cancer du poumon.", "Le tabac augmente aussi mon risque d’infarctus et de bronchopneumopathie chronique obstructive, une maladie qui peut rendre la respiration très difficile."], ["J’organise mes trajets et mes pauses autour des cigarettes, même quand ça me fait manquer du temps avec mes proches."], []],
 [["J’ai commencé à emprunter pour acheter du cannabis et j’ai du mal à rembourser."], ["Je rate des engagements parce que j’ai consommé. À force, mes proches doutent de ma parole."], ["Après avoir consommé, j’ai des troubles de la mémoire à court terme. J’oublie une consigne ou une conversation qui vient d’avoir lieu.", "Après avoir consommé, j’ai du mal à me concentrer, à suivre un cours ou à faire une tâche complexe.", "Mes réactions peuvent être ralenties après avoir consommé. Si je conduis, je risque un accident."], ["Je consacre tellement de soirées à cette habitude que je prends du retard dans mes études ou mon travail."], []],
 [["J’ai utilisé de l’argent réservé à une facture pour financer des prises que je n’avais pas prévues."], ["Mes proches ne savent pas ce que je prends réellement et je risque de rester seul face à un problème grave."], ["Si je prends des opioïdes, une surdose peut ralentir ou arrêter ma respiration et être mortelle.", "Avec certains anxiolytiques ou somnifères, comme les benzodiazépines, je peux avoir des troubles de la mémoire ou une somnolence qui me met en danger au volant.", "Mélanger des opioïdes avec de l’alcool ou des benzodiazépines augmente le risque de surdose."], ["Il m’est arrivé de manquer une journée de travail parce que je me sentais trop mal après une prise."], []],
 [["J’ai accumulé des dettes et je risque le surendettement. Mes mises prennent de l’argent destiné au loyer ou aux factures."], ["À force de cacher les pertes et de prendre dans le budget familial, je risque une séparation et de perdre la confiance de mes enfants ou de mes proches."], ["Les dettes et les pertes m’angoissent au point que je dors mal et que je n’arrive plus à fonctionner normalement le lendemain."], ["Je passe la nuit à suivre des paris ou à tenter de récupérer mes pertes. Le lendemain, je manque le travail ou un rendez-vous important."], ["Quand je perds, je me traite d’incapable et je n’ose plus demander de l’aide."]],
 [["Les achats dans le jeu et les abonnements ont dépassé mon budget au point de retarder un paiement important."], ["J’ai tellement manqué de repas ou de rendez-vous que des proches ont cessé de m’inviter."], ["Je joue régulièrement jusque tard dans la nuit. L’épuisement m’empêche de suivre correctement en cours ou au travail."], ["Je laisse tomber mes obligations pour continuer une partie. Je risque de rater mon année ou de perdre mon travail."], ["Je me traite de bon à rien quand je vois tout ce que j’ai laissé s’accumuler."]],
 [["Les achats déclenchés par les vidéos ou les offres en direct me mettent à découvert avant la fin du mois."], ["On me dit qu’on n’arrive plus à avoir une vraie conversation avec moi, même quand on se retrouve après plusieurs jours."], ["Je manque régulièrement de sommeil parce que je continue à faire défiler mon fil la nuit. Le lendemain, je somnole en cours ou au travail."], ["Je perds plusieurs heures par jour à faire défiler des contenus et je rends régulièrement mon travail en retard."], ["À force de comparer mon corps ou ma vie aux publications, je finis par me dénigrer et j’évite de voir certaines personnes."]],
 [["Je cumule des paiements fractionnés et des dettes au point de ne plus pouvoir régler toutes mes factures."], ["Les commandes cachées ont brisé la confiance dans mon couple. Nous parlons de séparer nos finances."], ["L’angoisse liée à mes dettes me réveille la nuit et m’empêche de me concentrer le lendemain."], ["Je passe des soirées entières à chercher des offres et je repousse le courrier des créanciers."], ["Quand je vois mes comptes, je me traite d’irresponsable et je cache encore davantage mes difficultés."]],
 [["Les abonnements et les vidéos payantes m’ont mis à découvert. J’ai retardé une facture pour couvrir les prélèvements."], ["J’ai caché mes dépenses et enfreint un accord que nous avions pris ensemble. Mon partenaire parle de séparation parce que la confiance est abîmée."], ["Je regarde des vidéos plusieurs nuits jusqu’à l’épuisement. Le manque de sommeil perturbe mon travail et mon humeur."], ["Je manque régulièrement des engagements parce que je prolonge le visionnage, parfois pendant des heures malgré ma décision d’arrêter."], ["Je me juge si durement après avoir dépassé mes propres limites que je m’isole et que je n’ose pas en parler en séance."]]
];
const severeSituations = {
 'Médicaments et autres substances': [
  ['J’ai volé de l’argent à un proche pour acheter un produit. Je risque de perdre sa confiance et de devoir répondre de ce vol.','J’ai pris des médicaments prescrits à quelqu’un d’autre. Cette personne s’est retrouvée sans une partie de son traitement.'],
  ['J’ai accepté des rapports sexuels rémunérés pour payer ma consommation alors que je ne me sentais pas libre de refuser.','Quelqu’un a profité de mon besoin d’argent ou de produit pour me mettre la pression et obtenir un rapport sexuel.'],
  ['Lors d’un rapport rémunéré, j’ai subi des menaces quand j’ai voulu imposer une limite ou demander une protection.']
 ],
 'Jeux d’argent et paris': [
  ['J’ai volé de l’argent à un proche pour parier de nouveau et tenter de récupérer mes pertes.','J’ai pris de l’argent dans la caisse au travail pour financer mes mises. Je risque de perdre mon emploi et de faire l’objet d’une plainte.'],
  ['Mes proches ont découvert que j’avais pris leurs économies pour jouer. Ils ont coupé le contact.']
 ],
 'Achats difficiles à contrôler': [
  ['J’ai utilisé la carte d’un proche sans son accord pour payer des commandes que je ne pouvais plus financer.','J’ai volé un article alors que je n’avais plus de quoi le payer. J’ai peur des conséquences d’une plainte.']
 ]
};
const costGroups = exampleBank.map((entry, themeIndex) => {
 const previous = entry[2];
 const categories = existingCostCategories[themeIndex];
 const grouped = entry[0]==='Vidéos pornographiques' ? pornographyCosts : costLabels.map((_, category) => [
  ...previous.filter((_, index) => categories[index] === category),
  ...extraCosts[themeIndex][category],
  ...(detailedCosts[themeIndex][category] ?? [])
 ]);
 const ordered = grouped.map((phrases, category) => [...(severeSituations[entry[0]]?.[category] ?? []), ...seriousCosts[themeIndex][category], ...phrases]);
 entry[2] = ordered.flat();
 return ordered;
});
const form = document.querySelector('#form');
const names = ['Mes coordonnées','Mon dilemme','Je garde','Je change','Ma synthèse'];
const icons = ['M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm-8 8c0-7 16-7 16 0','M3 20c8 0 8-6 9-10m0 0L6 4m6 6 6-6M3 7V4h3m9 0h3v3','M3 20h18M6 20v-9l6-6 6 6v9m-8 0v-5h4v5','M12 21v-9m0 3C5 15 4 9 4 6c5 0 8 2 8 7m0-2c0-6 4-8 8-8 0 5-2 8-8 8','M4 5h16M4 12h16M4 19h16M8 3v4m8 3v4m-5 3v4'];
const groups = [
 ['Ce que garder m’apporte','Qu’est-ce que cette habitude me permet de traverser ou de préserver ?'],
 ['Ce que garder me coûte','Qu’est-ce qui me pèse aujourd’hui ou pourrait me peser demain ?'],
 ['Ce qui rendrait le changement difficile','Qu’est-ce que je crains de perdre ? De quel soutien aurais-je besoin ?'],
 ['Ce que changer pourrait m’apporter','Qu’est-ce que j’aimerais retrouver ou rendre possible ?']
];
let theme = null;
let choosingTheme = true;
const themePictures = ['⚖️','🍷','🚬','🌿','💊','🎲','🎮','📱','🛍️','🎬'];
function themePicker() {
 return `<h3>Quel est mon dilemme ?</h3><p>Choisissez le thème qui se rapproche le plus de votre situation. Vous pourrez en changer pendant l’exercice.</p>
 <div class="theme-grid">${exampleBank.map(([name],i)=>`<button type="button" class="theme-card" data-theme="${i}" aria-pressed="${theme===i}"><span aria-hidden="true">${themePictures[i]}</span><strong>${i===0?'Autre situation / exemples généraux':name}</strong></button>`).join('')}</div>`;
}
function themeHeader(){
 return `<div class="theme-banner"><span><span aria-hidden="true">${themePictures[theme]}</span> <strong>${escape(exampleBank[theme][0])}</strong></span><button type="button" id="change-theme">Changer de thème</button></div>`;
}
const openExamples = new Set([0, 2]);
function examples(i) {
 const phrases = exampleBank[theme][i+1];
 const list = (start, end) => `<ul class="example-list">${phrases.slice(start,end).map((example,index)=>{
  const j=start+index;
  const added=state.rows[i].some(row=>row.example===theme+'-'+j||row.text.trim()===example);
  return `<li><button type="button" data-pick="${i}-${j}" ${added?'disabled':''}>${added?'✓ Ajouté · ':'＋ '}${escape(example)}</button></li>`;
 }).join('')}</ul>`;
 let offset=0;
 const sections = i===1
  ? costGroups[theme].map((items,category)=>{
   const start=offset;
   offset+=items.length;
   return `<h4>${costLabels[category]}</h4>${list(start,offset)}`;
  }).join('')
  : list(0,phrases.length);
 return `<details class="examples" data-example-group="${i}" ${openExamples.has(i)?'open':''}><summary>Choisir parmi les exemples</summary>
 <p>Choisissez les phrases qui vous ressemblent. Vous pourrez les modifier et leur donner un poids.</p>

 ${exampleBank[theme][0]==='Vidéos pornographiques'?'<p class="muted">Explorez ce que le visionnage vous apporte et la place qu’il prend dans votre quotidien. La fréquence et la culpabilité, à elles seules, ne suffisent pas à caractériser un trouble.</p>':''}
 ${sections}</details>`;
}
const priorities = ['Léger','Modéré','Important','Très important','Essentiel'];
const colors = ['#e6eee9','#d4e6d5','#f6e7af','#f5d0aa','#edb9c8'];
const state = {rows:groups.map(()=>[{text:'',weight:0}])};
let step = 0;
const escape = (s='') => String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const field = (key,label,type='text',autocomplete='off') => `<label>${label}<input required name="${key}" type="${type}" autocomplete="${autocomplete}" value="${escape(state[key])}" ${type==='tel'?'pattern="(?=(?:[^0-9]*[0-9]){7})[+0-9 .()\\-]+"':''}></label>`;
const area = (key,label,placeholder,required=false) => `<label>${label}<textarea name="${key}" ${required?'required':''} placeholder="${escape(placeholder)}">${escape(state[key])}</textarea></label>`;
function scale(name,label,min,max,value,caption,labels=[]) {
 return `<fieldset><legend>${label}</legend><div class="choices">${Array.from({length:max-min+1},(_,i)=>{const n=i+min;return `<label style="--bg:${colors[Math.round(i*4/(max-min))]}" title="${labels[i]||n}"><input type="radio" name="${name}" value="${n}" aria-label="${n}${labels[i]?' · '+labels[i]:''}" ${Number(value)===n&&value!==undefined?'checked':''} ${name==='distress'?'required':''}>${n}</label>`;}).join('')}</div><small>${caption}</small></fieldset>`;
}
function group(i) {
 const [title,question]=groups[i];
 return `<section class="section"><h3>${title}</h3><p>${question}</p>${examples(i)}${state.rows[i].map((r,j)=>`<div class="row"><label>Élément ${j+1}<textarea name="row-${i}-${j}" placeholder="J’écris avec mes mots…">${escape(r.text)}</textarea></label>${scale('weight-'+i+'-'+j,'Quel poids cet élément a-t-il pour moi ?',1,5,r.weight,'1 · Léger　 3 · Important　 5 · Essentiel',priorities)}${state.rows[i].length>1?`<button type="button" data-remove="${i}-${j}">Retirer cet élément</button>`:''}</div>`).join('')}<button type="button" data-add="${i}">＋ Ajouter un élément</button></section>`;
}
function result(){
 const ranked=state.rows.flatMap((rows,i)=>rows.filter(r=>r.text.trim()&&r.weight>0).map(r=>({...r,i}))).sort((a,b)=>b.weight-a.weight);
 const top=ranked.filter(r=>r.weight>=(ranked[2]?.weight??1));
 return `<p><strong>${escape(state.first)} ${escape(state.last)}</strong> · ${escape(state.email)} · ${escape(state.phone)}</p><p><strong>Ma situation</strong><br>${escape(state.issue).replaceAll('\n','<br>')}</p><p><strong>Le changement que j’envisage</strong><br>${escape(state.change).replaceAll('\n','<br>')}</p><p>Inconfort actuel · <strong>${state.distress}/10</strong></p><div class="summary">${groups.map(([title],i)=>`<section class="section"><h3>${title}</h3><ul>${state.rows[i].filter(r=>r.text.trim()).map(r=>`<li>${escape(r.text)} ${r.weight?`<span class="tag" style="background:${colors[r.weight-1]}">${r.weight}/5 · ${priorities[r.weight-1]}</span>`:''}</li>`).join('')||'<li>À explorer</li>'}</ul></section>`).join('')}</div>
 <h3>Les éléments qui pèsent le plus pour moi</h3>${top.length?`<ul>${top.map(r=>`<li><strong>${r.weight}/5</strong> · ${escape(r.text)} <small>(${groups[r.i][0]})</small></li>`).join('')}</ul>`:'<p>Attribuez un poids aux éléments que vous souhaitez faire ressortir.</p>'}<p>Ces repères ouvrent une réflexion. Vous restez libre de prendre du temps, d’en parler ou de choisir un petit pas.</p>
 ${area('reflection','Qu’est-ce que je remarque en relisant ma balance ?','Une surprise, un besoin, une question…')}
 ${area('next','Quel serait mon prochain pas, si j’en ai envie ?','Par exemple, en parler en séance ou observer quand l’envie est la plus forte.')}
 <div class="no-print"><button type="button" id="print">Imprimer / Enregistrer en PDF</button> <button type="button" id="reset">Effacer mes réponses</button></div>`;
}
function render(move=false){
 document.querySelector('#steps').innerHTML=names.map((name,i)=>`<span ${i===step?'class="on" aria-current="step"':''}>${i+1}. ${name}</span>`).join('');
 const showPicker=(step===2||step===3)&&choosingTheme;
 const content=showPicker?themePicker():[
 () => `<p>Mettre à plat les bénéfices et les coûts de chaque option peut vous aider à comprendre ce qui vous retient et ce qui vous attire. Vous pouvez faire cet exercice à votre rythme.</p><p class="muted">Vos réponses restent dans cette page. Elles s’effacent à la fermeture ou au rechargement. Le PDF est créé sur votre appareil si vous choisissez de l’enregistrer.</p><div class="grid">${field('first','Prénom','text','given-name')}${field('last','Nom','text','family-name')}${field('email','Adresse e-mail','email','email')}${field('phone','Téléphone','tel','tel')}</div>`,
 () => `${area('issue','Quelle situation me préoccupe le plus en ce moment ?','Par exemple, je bois presque chaque soir pour décompresser.',true)}${area('change','Quel changement est-ce que j’envisage ?','Par exemple, je voudrais trouver une autre façon de marquer la fin de ma journée.',true)}${scale('distress','Quel est mon niveau d’inconfort ou de souffrance aujourd’hui ?',0,10,state.distress,'0 · Aucun inconfort　 10 · Inconfort maximal pour moi')}`,
 () => `${themeHeader()}<p>J’imagine que les choses restent comme elles sont. Je prends le temps de voir ce que cela m’apporte et ce que cela me coûte.</p>${group(0)}${group(1)}`,
 () => `${themeHeader()}<p>J’imagine le changement que j’ai décrit. Je regarde ce qui pourrait devenir plus difficile et ce que je pourrais y gagner.</p>${group(2)}${group(3)}`,
 result
 ][step]();
 form.innerHTML=`<svg class="illustration" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="${icons[step]}"/></svg><span class="eyebrow">Étape ${step+1} sur 5</span><h2 tabindex="-1">${names[step]}</h2>${content}<div class="nav">${step?'<button type="button" id="back">← Précédent</button>':'<span></span>'}${step<4&&!showPicker?`<button class="primary">${step===3?'Voir ma synthèse':'Continuer →'}</button>`:''}</div>`;
 if(move){form.querySelector('h2').focus({preventScroll:true});document.querySelector('#steps').scrollIntoView({block:'start'});}
}
form.addEventListener('toggle',({target})=>{
 if(!target.matches('[data-example-group]')||!target.isConnected)return;
 const i=Number(target.dataset.exampleGroup);
 if(target.open)openExamples.add(i);
 else openExamples.delete(i);
},true);
form.addEventListener('input',({target})=>{
 if(!target.name)return;
 const [kind,i,j]=target.name.split('-');
 if(kind==='row') state.rows[i][j].text=target.value;
 else if(kind==='weight') state.rows[i][j].weight=Number(target.value);
 else state[target.name]=target.value;
});
form.addEventListener('submit',event=>{
 event.preventDefault();
 if(step===4||((step===2||step===3)&&choosingTheme))return;
 for(const control of form.querySelectorAll('textarea[required],input[required]:not([type=radio])')){
  if(!control.value.trim()){control.setCustomValidity('Complétez ce champ pour continuer.');control.reportValidity();control.addEventListener('input',()=>control.setCustomValidity(''),{once:true});return;}
 }
 step++;render(true);
});
form.addEventListener('click',({target})=>{
 const choice=target.closest('[data-theme]');
 if(choice){
  theme=Number(choice.dataset.theme);choosingTheme=false;render(true);return;
 }
 if(target.id==='change-theme'){choosingTheme=true;render(true);return;}
 if(target.id==='back'){
  if((step===2||step===3)&&choosingTheme&&theme!==null)choosingTheme=false;
  else {
   step--;
   if(step===2&&theme!==null)choosingTheme=false;
  }
  render(true);return;
 }
 if(target.dataset.pick){
  const [i,j]=target.dataset.pick.split('-').map(Number);
  const rows=state.rows[i];
  let index=rows.findIndex(row=>!row.text.trim()&&!row.weight);
  if(index===-1)index=rows.length;
  rows[index]={text:exampleBank[theme][i+1][j],weight:0,example:theme+'-'+j};
  openExamples.add(i);
  render();
  form.elements.namedItem('row-'+i+'-'+index).focus();
 }
 if(target.dataset.add!==undefined){
  const i=Number(target.dataset.add), j=state.rows[i].length;
  state.rows[i].push({text:'',weight:0});render();form.elements.namedItem('row-'+i+'-'+j).focus();
 }
 if(target.dataset.remove){
  const [i,j]=target.dataset.remove.split('-').map(Number);
  state.rows[i].splice(j,1);render();form.querySelector('[data-add="'+i+'"]').focus();
 }
 if(target.id==='print')window.print();
 if(target.id==='reset'&&window.confirm('Effacer toutes vos réponses et recommencer ?')){
  Object.keys(state).forEach(key=>delete state[key]);state.rows=groups.map(()=>[{text:'',weight:0}]);theme=null;choosingTheme=true;openExamples.clear();openExamples.add(0);openExamples.add(2);step=0;render(true);
 }
});
window.addEventListener('beforeprint',()=>{
 form.querySelectorAll('textarea').forEach(area=>{
  const text=document.createElement('p');text.className='print-value';text.style.whiteSpace='pre-wrap';text.textContent=area.value;area.hidden=true;area.style.display='none';area.after(text);
 });
});
window.addEventListener('afterprint',()=>{
 form.querySelectorAll('.print-value').forEach(node=>node.remove());
 form.querySelectorAll('textarea').forEach(area=>{area.hidden=false;area.style.display='';});
});
document.querySelector('#showQR').onclick=()=>document.querySelector('#qr').showModal();
render();
if('serviceWorker' in navigator)navigator.serviceWorker.register('./sw.js').catch(()=>{});
