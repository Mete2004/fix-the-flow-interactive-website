
Ontwerp en maak een interactieve website voor een opdrachtgever.

De instructie vind je in: [INSTRUCTIONS.md](https://github.com/fdnd-task/fix-the-flow-interactive-website/blob/main/docs/INSTRUCTIONS.md)

# Titel
Filterbutton Interactie

## Beschrijving
In deze sprint heb ik een filterbutton-interactie gemaakt voor de productpagina.

Klikken op de filterbutton opent een popover met drie invoervelden: gender, leeftijd en occasion.

Als een invoerveld geselecteerd of ingevuld wordt, controleert de interactie of alle velden gevuld zijn.

Zodra alle velden ingevuld zijn, verandert de filterbutton in de popover van kleur naar groen, zodat de gebruiker ziet dat hij/zij kan klikken.

Dit helpt de gebruiker visueel en functioneel om te weten wanneer de filter actief kan worden toegepast.

State 1:

<img width="432" height="762" alt="ss-readme1" src="https://github.com/user-attachments/assets/e96c5b8f-d413-484b-a596-9a4fed170a77" />



State 2:


<img width="427" height="752" alt="ss-readme2" src="https://github.com/user-attachments/assets/054cc692-ff6e-42a6-9896-6540fb2bdde9" />


State 3:

<img width="420" height="302" alt="ss-readme3" src="https://github.com/user-attachments/assets/d3d826f6-afbf-4d06-9701-81bbdf8b56ce" />


State 4:

<img width="426" height="338" alt="ss-readme4" src="https://github.com/user-attachments/assets/9dd94bb9-2ce5-45f9-a99f-7e90866b8729" />

Link naar de live-pagina: https://mete2004.github.io/fix-the-flow-interactive-website/

## Kenmerken
HTML:

Wrapper <div class="filter-anchor"> met daarin:

<button class="button-filter"> met filter-icoon

<div class="filter-popover"> met drie velden (select + input) en een apply-button (button-apply-filter)

CSS:

.filter-popover is standaard verborgen en verschijnt via .show class

Focus op invoervelden wordt visueel duidelijk door border en shading

.button-apply-filter verandert van kleur naar groen zodra alle velden zijn ingevuld

Hover-effecten op buttons voor betere visuele feedback

JavaScript:

Toggle functionaliteit voor de popover bij het klikken op de filterbutton

Sluit popover bij klikken buiten de popover

Controleert realtime of alle invoervelden zijn ingevuld met checkInputs()

Past dynamisch de achtergrondkleur van de apply-button aan

## Bronnen
https://css-tricks.com/videos/150-hey-designers-know-one-thing-javascript-recommend/
addEventListener @ MDN
querySelector @ MDN

## Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).

