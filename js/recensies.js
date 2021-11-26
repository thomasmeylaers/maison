

const recensies = [
    {
        text: '	"Jullie zijn top gastheren en –vrouwen ! We hebben 200% genoten van ons verblijf"',
        name: 'Dann en Sandra'
    },
    {
        text: '	"Onze complimenten voor jullie gastvrijheid.  We voelden ons thuis.  Het ontbijt was heerlijk.  Heel veel succes met jullie mooie B&B"',
        name: 'Familie Dijkman'
    },
    {
        text: '	"Eén woord: TOP !  Top-locatie maar vooral TOP-mensen !  Zo een fijn verblijf, batterijtjes opgeladen, voor herhaling vatbaar !"',
        name: 'Familie Van den Wijngaert'
    },
    {
        text: '	"Ook voor de 10de keer genoten van deze zalige B&B ! Jullie zijn evenzeer toppertjes ! Tot volgend jaar !"',
        name: 'Familie Schram'
    },
    {
        text: '	"Wat een fantastische ontdekking : het onthaal, de keuken, de omgeving en bovenal de zorg van deze hartelijke familie.  Absolute top !"',
        name: 'Lu en Dirk'
    },
    {
        text: '	"Très bon accueil !!! Agréable séjour ! Ambiance familiale et chambre très propre. Calme assuré. Probablement à bientôt."',
        name: 'Mr et Mme Huvelin'
    },
    {
        text: '	"Wij hebben zo hard genoten van ons verblijf bij jullie.  Jullie drive om jullie gasten een topverblijf te bezorgen heeft ons erg gecharmeerd. De manier waarop jullie inspeelden op onze ‘kleine kindjes”-behoefte heeft ons extra doen relaxen en jullie gastvrijheid zorgde ervoor dat we ons hier vanaf het eerste moment thuis voelden.  Wij hebben erg genoten van jullie kookkunsten en fijne babbels. Jullie zijn een goed team. We wensen jullie alle succes toe en komen graag nog eens terug !"',
        name: 'Roel en Kristine, Lena en Cleo'
    },
    {
        text: '	"Beste familie, hartelijk dank voor jullie gastvrijheid en zorg !  Het was heerlijk om hier te zijn.  Het is een prachtige plek om tot rust te komen. "',
        name: ''
    }
]

let textSelector = $('#text-selector')
let nameSelector = $('#name-selector')
let textSelectorMobile = $('#text-selector-mobile')
let nameSelectorMobile = $('#name-selector-mobile')
let help = $("#help1")
function fillReview(randomNumber) {
    textSelector.text(recensies[randomNumber].text)
    nameSelector.text("-" + recensies[randomNumber].name)
    textSelectorMobile.html(recensies[randomNumber].text)
    nameSelectorMobile.html("-" + recensies[randomNumber].name)
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}


fillReview(getRandomInt(8))

