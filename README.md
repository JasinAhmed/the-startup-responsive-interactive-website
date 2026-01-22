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

<img width="1800" height="760" alt="all-devices-black (4)" src="https://github.com/user-attachments/assets/7dc07060-605b-4589-8936-6c7fc2ccfb4e" />

*Mockup van gemaakte product pagina*

#### Vacature cards
Vacatures worden weergegeven als **cards** met de belangrijkste informatie.  
Op mobiel zijn deze cards onderdeel van een **slider**, zodat gebruikers eenvoudig kunnen swipen tussen vacatures.  
Op grotere schermen worden de vacatures automatisch in een **grid** weergegeven.

<img width="390" height="629" alt="image" src="https://github.com/user-attachments/assets/38e72773-a88e-4891-ae1d-752f2b2f8efa" />
<img width="1218" height="517" alt="image" src="https://github.com/user-attachments/assets/bc836102-5810-49ba-8a86-43976b4461da" />


https://github.com/user-attachments/assets/8d7cce53-2ee8-40dd-9fae-edd4f0a988d1



#### Navigatie en hamburger menu
Op mobiel wordt gebruikgemaakt van een **hamburger menu**.  
Binnen dit menu zit een **accordion**, zodat subpagina’s en categorieën overzichtelijk blijven en het menu niet te lang wordt.

<img width="426" height="744" alt="image" src="https://github.com/user-attachments/assets/d015c5f9-f4b1-4de9-b55f-026e463cb06e" />


https://github.com/user-attachments/assets/41efe005-1d42-4594-829f-08e535f580d6



#### Detailpagina met tabbladen
Op de detailpagina is de informatie opgesplitst in **tabbladen**.  
Hierdoor hoeft de gebruiker niet te scrollen door lange teksten en kan snel worden gewisseld tussen verschillende onderdelen van de vacature.

<img width="1267" height="378" alt="image" src="https://github.com/user-attachments/assets/531d29f1-db1a-4fd4-a954-4e2d5c8e9e81" />

https://github.com/user-attachments/assets/187e3a6d-a4b8-443c-9495-1a05a1558b7c


### Toegankelijkheid
Tijdens het ontwikkelen heb ik rekening gehouden met toegankelijkheid.  
Ik heb onder andere:

- Een skip-link toegevoegd om direct naar de main content te springen
- Focus-styles zichtbaar gemaakt voor toetsenbordgebruikers
- Semantische HTML gebruikt zoals header, nav, main en footer
- Knoppen gebruikt voor interacties in plaats van divs

Deze aanpassingen zorgen ervoor dat de website beter te gebruiken is met toetsenbord en screenreaders.


### Huisstijl
De opdrachtgever heeft een figma bestand doorgestuurd met hun huisstijhl. Op basis van [dit figma](https://www.figma.com/design/TjEVQZ5ufmKRZnnVgibrxD/Werktijden-styleguide?node-id=0-1&p=f&t=DpITnLwKFmv0lMmp-0) bestand heb ik een styleguide gemaakt. En dit toegepast op mijn website. 



https://github.com/user-attachments/assets/2b99f2b1-d086-48ac-8337-ee92e4acca26


### Interactie
De vacature-slider op mobiel maakt het mogelijk om met één vinger door vacatures te swipen.
Dit sluit aan bij het mobiele gebruik van de doelgroep.

Het hamburger menu bevat een accordion zodat het menu overzichtelijk blijft
en gebruikers niet worden overweldigd door te veel links tegelijk.



## Kenmerken
De website is opgebouwd met semantische HTML.
CSS is mobile-first geschreven en maakt gebruik van container queries.
JavaScript wordt gebruikt voor interacties zoals het hamburger menu,
de slider, tabs en het sollicitatieformulier.

## Bronnen
Tijdens het ontwikkelen van deze website heb ik gebruikgemaakt van online documentatie om beter te begrijpen hoe bepaalde onderdelen werken.
Vooral MDN Web Docs heb ik gebruikt, omdat dit de officiële documentatie is voor HTML, CSS en JavaScript en goed aansluit bij wat we leren tijdens de opleiding.

JavaScript

Voor het werken met JavaScript heb ik opgezocht hoe ik elementen uit de HTML kan selecteren, hoe ik kan luisteren naar klikacties en hoe ik classes kan toevoegen of verwijderen. Deze kennis heb ik gebruikt voor het hamburger menu, de accordion, de tabs, de slider en de sollicitatie-popup.

Bron:
https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector

https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener

https://developer.mozilla.org/en-US/docs/Web/API/Element/classList

Sollicitatie popup (<dialog>)

Voor de sollicitatie-popup heb ik gebruikgemaakt van het native <dialog> element.
Met dit element kan ik een popup openen en sluiten zonder extra libraries te gebruiken. Ik heb opgezocht hoe showModal() en close() werken om de popup te openen en te sluiten via JavaScript.

Bron:
https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog

https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement/showModal

https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement/close

Slider en scrollgedrag

Voor de vacature-slider heb ik documentatie geraadpleegd om te begrijpen hoe ik kan bepalen hoeveel er horizontaal gescrold is en hoe breed een element is. Dit heb ik gebruikt om te berekenen welke vacature in beeld is en om de juiste dot actief te maken.

Bron:
https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollLeft

https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetWidth

Tabs met data-attributen

Voor het maken van de tabbladen heb ik data-* attributen gebruikt. Hiermee kan ik in JavaScript bepalen welk contentblok bij welke tab hoort. Dit zorgt ervoor dat de HTML overzichtelijk blijft en de tabs makkelijk uitbreidbaar zijn.

Bron:
https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes

Container queries

Voor het responsive maken van onderdelen zoals de header, vacature-slider en popup heb ik container queries gebruikt. Hiermee passen componenten zich aan op basis van hun eigen container in plaats van alleen de schermgrootte.

Bron:
https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_container_queries
## Samenvatting
De gebruikte bronnen hebben mij geholpen om beter te begrijpen hoe ik interactieve en responsive onderdelen kon bouwen met HTML, CSS en JavaScript. Door deze documentatie te gebruiken kon ik bewust keuzes maken in mijn code.

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


