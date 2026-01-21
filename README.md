Ontwerp en maak een responsive website voor een startup.

De instructies voor deze opdracht staan in: [INSTRUCTIONS.md](https://github.com/fdnd-task/the-startup-responsive-interactieve-website/blob/main/docs/INSTRUCTIONS.md)

# Werktijden.nl
Het doel van deze opdracht is het ontwerpen en ontwikkelen van een vernieuwde vacaturepagina, waarbij de website mobile-first is opgebouwd en goed werkt op zowel mobiel als desktop.

🔗 **Live website:**  
https://jasinahmed.github.io/the-startup-responsive-interactive-website/index.html

## Beschrijving

### ontwerp

Het ontwerp van de vacaturepagina is gemaakt met een mobile-first aanpak.
Dit betekent dat het ontwerp eerst is bedacht voor mobiele schermen en daarna is uitgebreid voor grotere schermen.

#### Vacature cards
Vacatures worden weergegeven als **cards** met de belangrijkste informatie.  
Op mobiel zijn deze cards onderdeel van een **slider**, zodat gebruikers eenvoudig kunnen swipen tussen vacatures.  
Op grotere schermen worden de vacatures automatisch in een **grid** weergegeven.

<img width="390" height="629" alt="image" src="https://github.com/user-attachments/assets/38e72773-a88e-4891-ae1d-752f2b2f8efa" />
<img width="1218" height="517" alt="image" src="https://github.com/user-attachments/assets/bc836102-5810-49ba-8a86-43976b4461da" />


#### Navigatie en hamburger menu
Op mobiel wordt gebruikgemaakt van een **hamburger menu**.  
Binnen dit menu zit een **accordion**, zodat subpagina’s en categorieën overzichtelijk blijven en het menu niet te lang wordt.

<img width="426" height="744" alt="image" src="https://github.com/user-attachments/assets/d015c5f9-f4b1-4de9-b55f-026e463cb06e" />


#### Detailpagina met tabbladen
Op de detailpagina is de informatie opgesplitst in **tabbladen**.  
Hierdoor hoeft de gebruiker niet te scrollen door lange teksten en kan snel worden gewisseld tussen verschillende onderdelen van de vacature.

<img width="1267" height="378" alt="image" src="https://github.com/user-attachments/assets/531d29f1-db1a-4fd4-a954-4e2d5c8e9e81" />





## Kenmerken
<!-- Bij Kenmerken staat welke technieken zijn gebruikt en hoe. Wat is de HTML structuur? Wat zijn de belangrijkste dingen in CSS? Wat is er met JS gedaan en hoe? -->

## Bronnen
## Code conventies
Code conventies zijn belangrijk om je code overzichtelijk en goed onderhoudbaar te houden. Door vaste afspraken te maken over inspringen, naamgeving en structuur is de code makkelijker te lezen, zowel voor mijzelf als voor anderen die de code bekijken.

### Ademruimte en inspringen
Bij het schrijven van mijn HTML en CSS heb ik bewust gelet op ademruimte. Dit betekent dat ik mijn code zo heb ingedeeld dat je in één oogopslag ziet hoe de structuur in elkaar zit.

Ik gebruik overal 2 spaties voor het inspringen en ik plaats witregels tussen grotere blokken zoals de header, main en footer. Geneste elementen worden altijd verder ingesprongen, zodat duidelijk is welk element bij welk blok hoort.

Hieronder een voorbeeld uit mijn HTML waarin deze ademruimte goed te zien is.

https://github.com/JasinAhmed/the-startup-responsive-interactive-website/blob/e32fd34e19f9b0049d087a4f88515bc8ff53c9d9/index.html#L90-L117
https://github.com/JasinAhmed/the-startup-responsive-interactive-website/blob/e32fd34e19f9b0049d087a4f88515bc8ff53c9d9/style.css#L193-L198

### Volgorde en nesten van CSS selectors
Tijdens het stijlen is het belangrijk dat alle CSS selectors goed genest zijn en ook in de juiste volgorde zitten.
Dit zorgt voor leesbaarheid en maakt het navigeren makkelijker tijdens het zoeken naar selectors om te stijlen.

Hier is een voorbeeld hoe ik mijn code op volgorde heb gezet en de CSS selectors heb genest.

https://github.com/JasinAhmed/the-startup-responsive-interactive-website/blob/6dbf4f2744c5aa1ace6da706b842df7f0bb8d0bd/style.css#L173-L186


### Nesten van container queries
Om mijn CSS overzichtelijk te houden, heb ik de volgorde van mijn selectors afgestemd op de HTML-structuur. Componenten die bij elkaar horen, staan ook bij elkaar in de stylesheet.

Ik nest selectors alleen wanneer ze echt bij elkaar horen en ik probeer dit beperkt te houden, zodat de code leesbaar blijft.

Een voorbeeld hiervan is te zien bij de styling van de vacature-slider:

https://github.com/JasinAhmed/the-startup-responsive-interactive-website/blob/e32fd34e19f9b0049d087a4f88515bc8ff53c9d9/style.css#L377-L385

### Naamgeving

Bij het kiezen van namen voor classes heb ik vaste afspraken aangehouden. Alle class-namen zijn geschreven in kebab-case en in het Engels. Dit zorgt voor consistentie binnen het project.

Voorbeelden uit mijn HTML:

https://github.com/JasinAhmed/the-startup-responsive-interactive-website/blob/6dbf4f2744c5aa1ace6da706b842df7f0bb8d0bd/index.html#L21-L23

## Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).


