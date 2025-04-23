/**
 * Pokemon Showdown Dex Data
 *
 * A collection of data and definitions for src/battle-dex.ts.
 *
 * Larger data has their own files in data/, so this is just for small
 * miscellaneous data that doesn't need its own file.
 *
 * Licensing note: PS's client has complicated licensing:
 * - The client as a whole is AGPLv3
 * - The battle replay/animation engine (battle-*.ts) by itself is MIT
 *
 * @author Guangcong Luo <guangcongluo@gmail.com>
 * @license MIT
 */

/**
 * String that contains only lowercase alphanumeric characters.
 */
type ID = string & {__isID: true};

const BattleNatures: {[k in NatureName]: {plus?: StatName, minus?: StatName}} = {
	Adamant: {
		plus: 'atk',
		minus: 'spa',
	},
	Bashful: {},
	Bold: {
		plus: 'def',
		minus: 'atk',
	},
	Brave: {
		plus: 'atk',
		minus: 'spe',
	},
	Calm: {
		plus: 'spd',
		minus: 'atk',
	},
	Careful: {
		plus: 'spd',
		minus: 'spa',
	},
	Docile: {},
	Gentle: {
		plus: 'spd',
		minus: 'def',
	},
	Hardy: {},
	Hasty: {
		plus: 'spe',
		minus: 'def',
	},
	Impish: {
		plus: 'def',
		minus: 'spa',
	},
	Jolly: {
		plus: 'spe',
		minus: 'spa',
	},
	Lax: {
		plus: 'def',
		minus: 'spd',
	},
	Lonely: {
		plus: 'atk',
		minus: 'def',
	},
	Mild: {
		plus: 'spa',
		minus: 'def',
	},
	Modest: {
		plus: 'spa',
		minus: 'atk',
	},
	Naive: {
		plus: 'spe',
		minus: 'spd',
	},
	Naughty: {
		plus: 'atk',
		minus: 'spd',
	},
	Quiet: {
		plus: 'spa',
		minus: 'spe',
	},
	Quirky: {},
	Rash: {
		plus: 'spa',
		minus: 'spd',
	},
	Relaxed: {
		plus: 'def',
		minus: 'spe',
	},
	Sassy: {
		plus: 'spd',
		minus: 'spe',
	},
	Serious: {},
	Timid: {
		plus: 'spe',
		minus: 'atk',
	},
};
const BattleStatIDs: {[k: string]: StatName | undefined} = {
	HP: 'hp',
	hp: 'hp',
	Atk: 'atk',
	atk: 'atk',
	Def: 'def',
	def: 'def',
	SpA: 'spa',
	SAtk: 'spa',
	SpAtk: 'spa',
	spa: 'spa',
	spc: 'spa',
	Spc: 'spa',
	SpD: 'spd',
	SDef: 'spd',
	SpDef: 'spd',
	spd: 'spd',
	Spe: 'spe',
	Spd: 'spe',
	spe: 'spe',
};
/** Stat short names */
const BattleStatNames = {
	hp: 'HP',
	atk: 'Atk',
	def: 'Def',
	spa: 'SpA',
	spd: 'SpD',
	spe: 'Spe',
} as const;

const BattleBaseSpeciesChart = [
	"unown", "burmy", "shellos", "gastrodon", "deerling", "sawsbuck", "vivillon", "flabebe", "floette", "florges", "furfrou", "minior", "alcremie", "tatsugiri", "pokestarufo", "pokestarbrycenman", "pokestarmt", "pokestarmt2", "pokestartransport", "pokestargiant", "pokestarhumanoid", "pokestarmonster", "pokestarf00", "pokestarf002", "pokestarspirit", "pokestarblackdoor", "pokestarwhitedoor", "pokestarblackbelt",
] as ID[];

const BattlePokemonIconIndexes: {[id: string]: number} = {
	// alt forms
	egg: 1032 + 1,
	pikachubelle: 1032 + 2,
	pikachulibre: 1032 + 3,
	pikachuphd: 1032 + 4,
	pikachupopstar: 1032 + 5,
	pikachurockstar: 1032 + 6,
	pikachucosplay: 1032 + 7,
	unownexclamation: 1032 + 8,
	unownquestion: 1032 + 9,
	unownb: 1032 + 10,
	unownc: 1032 + 11,
	unownd: 1032 + 12,
	unowne: 1032 + 13,
	unownf: 1032 + 14,
	unowng: 1032 + 15,
	unownh: 1032 + 16,
	unowni: 1032 + 17,
	unownj: 1032 + 18,
	unownk: 1032 + 19,
	unownl: 1032 + 20,
	unownm: 1032 + 21,
	unownn: 1032 + 22,
	unowno: 1032 + 23,
	unownp: 1032 + 24,
	unownq: 1032 + 25,
	unownr: 1032 + 26,
	unowns: 1032 + 27,
	unownt: 1032 + 28,
	unownu: 1032 + 29,
	unownv: 1032 + 30,
	unownw: 1032 + 31,
	unownx: 1032 + 32,
	unowny: 1032 + 33,
	unownz: 1032 + 34,
	castformrainy: 1032 + 35,
	castformsnowy: 1032 + 36,
	castformsunny: 1032 + 37,
	deoxysattack: 1032 + 38,
	deoxysdefense: 1032 + 39,
	deoxysspeed: 1032 + 40,
	burmysandy: 1032 + 41,
	burmytrash: 1032 + 42,
	wormadamsandy: 1032 + 43,
	wormadamtrash: 1032 + 44,
	cherrimsunshine: 1032 + 45,
	shelloseast: 1032 + 46,
	gastrodoneast: 1032 + 47,
	rotomfan: 1032 + 48,
	rotomfrost: 1032 + 49,
	rotomheat: 1032 + 50,
	rotommow: 1032 + 51,
	rotomwash: 1032 + 52,
	giratinaorigin: 1032 + 53,
	shayminsky: 1032 + 54,
	unfezantf: 1032 + 55,
	basculinbluestriped: 1032 + 56,
	darmanitanzen: 1032 + 57,
	deerlingautumn: 1032 + 58,
	deerlingsummer: 1032 + 59,
	deerlingwinter: 1032 + 60,
	sawsbuckautumn: 1032 + 61,
	sawsbucksummer: 1032 + 62,
	sawsbuckwinter: 1032 + 63,
	frillishf: 1032 + 64,
	jellicentf: 1032 + 65,
	tornadustherian: 1032 + 66,
	thundurustherian: 1032 + 67,
	landorustherian: 1032 + 68,
	kyuremblack: 1032 + 69,
	kyuremwhite: 1032 + 70,
	keldeoresolute: 1032 + 71,
	meloettapirouette: 1032 + 72,
	vivillonarchipelago: 1032 + 73,
	vivilloncontinental: 1032 + 74,
	vivillonelegant: 1032 + 75,
	vivillonfancy: 1032 + 76,
	vivillongarden: 1032 + 77,
	vivillonhighplains: 1032 + 78,
	vivillonicysnow: 1032 + 79,
	vivillonjungle: 1032 + 80,
	vivillonmarine: 1032 + 81,
	vivillonmodern: 1032 + 82,
	vivillonmonsoon: 1032 + 83,
	vivillonocean: 1032 + 84,
	vivillonpokeball: 1032 + 85,
	vivillonpolar: 1032 + 86,
	vivillonriver: 1032 + 87,
	vivillonsandstorm: 1032 + 88,
	vivillonsavanna: 1032 + 89,
	vivillonsun: 1032 + 90,
	vivillontundra: 1032 + 91,
	pyroarf: 1032 + 92,
	flabebeblue: 1032 + 93,
	flabebeorange: 1032 + 94,
	flabebewhite: 1032 + 95,
	flabebeyellow: 1032 + 96,
	floetteblue: 1032 + 97,
	floetteeternal: 1032 + 98,
	floetteorange: 1032 + 99,
	floettewhite: 1032 + 100,
	floetteyellow: 1032 + 101,
	florgesblue: 1032 + 102,
	florgesorange: 1032 + 103,
	florgeswhite: 1032 + 104,
	florgesyellow: 1032 + 105,
	furfroudandy: 1032 + 106,
	furfroudebutante: 1032 + 107,
	furfroudiamond: 1032 + 108,
	furfrouheart: 1032 + 109,
	furfroukabuki: 1032 + 110,
	furfroulareine: 1032 + 111,
	furfroumatron: 1032 + 112,
	furfroupharaoh: 1032 + 113,
	furfroustar: 1032 + 114,
	meowsticf: 1032 + 115,
	aegislashblade: 1032 + 116,
	xerneasneutral: 1032 + 117,
	hoopaunbound: 1032 + 118,
	rattataalola: 1032 + 119,
	raticatealola: 1032 + 120,
	raichualola: 1032 + 121,
	sandshrewalola: 1032 + 122,
	sandslashalola: 1032 + 123,
	vulpixalola: 1032 + 124,
	ninetalesalola: 1032 + 125,
	diglettalola: 1032 + 126,
	dugtrioalola: 1032 + 127,
	meowthalola: 1032 + 128,
	persianalola: 1032 + 129,
	geodudealola: 1032 + 130,
	graveleralola: 1032 + 131,
	golemalola: 1032 + 132,
	grimeralola: 1032 + 133,
	mukalola: 1032 + 134,
	exeggutoralola: 1032 + 135,
	marowakalola: 1032 + 136,
	greninjaash: 1032 + 137,
	zygarde10: 1032 + 138,
	zygardecomplete: 1032 + 139,
	oricoriopompom: 1032 + 140,
	oricoriopau: 1032 + 141,
	oricoriosensu: 1032 + 142,
	lycanrocmidnight: 1032 + 143,
	wishiwashischool: 1032 + 144,
	miniormeteor: 1032 + 145,
	miniororange: 1032 + 146,
	minioryellow: 1032 + 147,
	miniorgreen: 1032 + 148,
	miniorblue: 1032 + 149,
	miniorindigo: 1032 + 150,
	miniorviolet: 1032 + 151,
	magearnaoriginal: 1032 + 152,
	pikachuoriginal: 1032 + 153,
	pikachuhoenn: 1032 + 154,
	pikachusinnoh: 1032 + 155,
	pikachuunova: 1032 + 156,
	pikachukalos: 1032 + 157,
	pikachualola: 1032 + 158,
	pikachupartner: 1032 + 159,
	lycanrocdusk: 1032 + 160,
	necrozmaduskmane: 1032 + 161,
	necrozmadawnwings: 1032 + 162,
	necrozmaultra: 1032 + 163,
	pikachustarter: 1032 + 164,
	eeveestarter: 1032 + 165,
	meowthgalar: 1032 + 166,
	ponytagalar: 1032 + 167,
	rapidashgalar: 1032 + 168,
	farfetchdgalar: 1032 + 169,
	weezinggalar: 1032 + 170,
	mrmimegalar: 1032 + 171,
	corsolagalar: 1032 + 172,
	zigzagoongalar: 1032 + 173,
	linoonegalar: 1032 + 174,
	darumakagalar: 1032 + 175,
	darmanitangalar: 1032 + 176,
	darmanitangalarzen: 1032 + 177,
	yamaskgalar: 1032 + 178,
	stunfiskgalar: 1032 + 179,
	cramorantgulping: 1032 + 180,
	cramorantgorging: 1032 + 181,
	toxtricitylowkey: 1032 + 182,
	alcremierubycream: 1032 + 183,
	alcremiematchacream: 1032 + 184,
	alcremiemintcream: 1032 + 185,
	alcremielemoncream: 1032 + 186,
	alcremiesaltedcream: 1032 + 187,
	alcremierubyswirl: 1032 + 188,
	alcremiecaramelswirl: 1032 + 189,
	alcremierainbowswirl: 1032 + 190,
	eiscuenoice: 1032 + 191,
	indeedeef: 1032 + 192,
	morpekohangry: 1032 + 193,
	zaciancrowned: 1032 + 194,
	zamazentacrowned: 1032 + 195,
	slowpokegalar: 1032 + 196,
	slowbrogalar: 1032 + 197,
	zarudedada: 1032 + 198,
	pikachuworld: 1032 + 199,
	articunogalar: 1032 + 200,
	zapdosgalar: 1032 + 201,
	moltresgalar: 1032 + 202,
	slowkinggalar: 1032 + 203,
	calyrexice: 1032 + 204,
	calyrexshadow: 1032 + 205,
	growlithehisui: 1032 + 206,
	arcaninehisui: 1032 + 207,
	voltorbhisui: 1032 + 208,
	electrodehisui: 1032 + 209,
	typhlosionhisui: 1032 + 210,
	qwilfishhisui: 1032 + 211,
	sneaselhisui: 1032 + 212,
	samurotthisui: 1032 + 213,
	lilliganthisui: 1032 + 214,
	zoruahisui: 1032 + 215,
	zoroarkhisui: 1032 + 216,
	braviaryhisui: 1032 + 217,
	sliggoohisui: 1032 + 218,
	goodrahisui: 1032 + 219,
	avalugghisui: 1032 + 220,
	decidueyehisui: 1032 + 221,
	basculegionf: 1032 + 222,
	enamorustherian: 1032 + 223,
	taurospaldea: 1032 + 224,
	taurospaldeafire: 1032 + 225,
	taurospaldeawater: 1032 + 226,
	taurospaldeacombat: 1032 + 224,
	taurospaldeablaze: 1032 + 225,
	taurospaldeaaqua: 1032 + 226,
	wooperpaldea: 1032 + 227,
	oinkolognef: 1032 + 228,
	palafinhero: 1032 + 229,
	mausholdfour: 1032 + 230,
	tatsugiridroopy: 1032 + 231,
	tatsugiristretchy: 1032 + 232,
	squawkabillyblue: 1032 + 233,
	squawkabillyyellow: 1032 + 234,
	squawkabillywhite: 1032 + 235,
	gimmighoulroaming: 1032 + 236,
	dialgaorigin: 1032 + 237,
	palkiaorigin: 1032 + 238,
	basculinwhitestriped: 1032 + 239,
	ursalunabloodmoon: 1032 + 240,
	ogerponwellspring: 1032 + 241,
	ogerponhearthflame: 1032 + 242,
	ogerponcornerstone: 1032 + 243,

	// alt forms with duplicate icons
	greninjabond: 658,
	gumshoostotem: 735,
	raticatealolatotem: 1032 + 120,
	marowakalolatotem: 1032 + 136,
	araquanidtotem: 752,
	lurantistotem: 754,
	salazzletotem: 758,
	vikavolttotem: 738,
	togedemarutotem: 777,
	mimikyutotem: 778,
	mimikyubustedtotem: 778,
	ribombeetotem: 743,
	kommoototem: 784,
	sinisteaantique: 854,
	polteageistantique: 855,
	poltchageistartisan: 1012,
	sinistchamasterpiece: 1013,
	ogerpontealtera: 1017,
	ogerponwellspringtera: 1032 + 241,
	ogerponhearthflametera: 1032 + 242,
	ogerponcornerstonetera: 1032 + 243,

	// Mega/G-Max
	venusaurmega: 1320 + 0,
	charizardmegax: 1320 + 1,
	charizardmegay: 1320 + 2,
	blastoisemega: 1320 + 3,
	beedrillmega: 1320 + 4,
	pidgeotmega: 1320 + 5,
	alakazammega: 1320 + 6,
	slowbromega: 1320 + 7,
	gengarmega: 1320 + 8,
	kangaskhanmega: 1320 + 9,
	pinsirmega: 1320 + 10,
	gyaradosmega: 1320 + 11,
	aerodactylmega: 1320 + 12,
	mewtwomegax: 1320 + 13,
	mewtwomegay: 1320 + 14,
	ampharosmega: 1320 + 15,
	steelixmega: 1320 + 16,
	scizormega: 1320 + 17,
	heracrossmega: 1320 + 18,
	houndoommega: 1320 + 19,
	tyranitarmega: 1320 + 20,
	sceptilemega: 1320 + 21,
	blazikenmega: 1320 + 22,
	swampertmega: 1320 + 23,
	gardevoirmega: 1320 + 24,
	sableyemega: 1320 + 25,
	mawilemega: 1320 + 26,
	aggronmega: 1320 + 27,
	medichammega: 1320 + 28,
	manectricmega: 1320 + 29,
	sharpedomega: 1320 + 30,
	cameruptmega: 1320 + 31,
	altariamega: 1320 + 32,
	banettemega: 1320 + 33,
	absolmega: 1320 + 34,
	glaliemega: 1320 + 35,
	salamencemega: 1320 + 36,
	metagrossmega: 1320 + 37,
	latiasmega: 1320 + 38,
	latiosmega: 1320 + 39,
	kyogreprimal: 1320 + 40,
	groudonprimal: 1320 + 41,
	rayquazamega: 1320 + 42,
	lopunnymega: 1320 + 43,
	garchompmega: 1320 + 44,
	lucariomega: 1320 + 45,
	abomasnowmega: 1320 + 46,
	gallademega: 1320 + 47,
	audinomega: 1320 + 48,
	dianciemega: 1320 + 49,
	charizardgmax: 1320 + 50,
	butterfreegmax: 1320 + 51,
	pikachugmax: 1320 + 52,
	meowthgmax: 1320 + 53,
	machampgmax: 1320 + 54,
	gengargmax: 1320 + 55,
	kinglergmax: 1320 + 56,
	laprasgmax: 1320 + 57,
	eeveegmax: 1320 + 58,
	snorlaxgmax: 1320 + 59,
	garbodorgmax: 1320 + 60,
	melmetalgmax: 1320 + 61,
	corviknightgmax: 1320 + 62,
	orbeetlegmax: 1320 + 63,
	drednawgmax: 1320 + 64,
	coalossalgmax: 1320 + 65,
	flapplegmax: 1320 + 66,
	appletungmax: 1320 + 67,
	sandacondagmax: 1320 + 68,
	toxtricitygmax: 1320 + 69,
	toxtricitylowkeygmax: 1320 + 69,
	centiskorchgmax: 1320 + 70,
	hatterenegmax: 1320 + 71,
	grimmsnarlgmax: 1320 + 72,
	alcremiegmax: 1320 + 73,
	copperajahgmax: 1320 + 74,
	duraludongmax: 1320 + 75,
	eternatuseternamax: 1320 + 76,
	venusaurgmax: 1320 + 77,
	blastoisegmax: 1320 + 78,
	rillaboomgmax: 1320 + 79,
	cinderacegmax: 1320 + 80,
	inteleongmax: 1320 + 81,
	urshifugmax: 1320 + 82,
	urshifurapidstrikegmax: 1320 + 83,

	// CAP
	syclant: 1512 + 0,
	revenankh: 1512 + 1,
	pyroak: 1512 + 2,
	fidgit: 1512 + 3,
	stratagem: 1512 + 4,
	arghonaut: 1512 + 5,
	kitsunoh: 1512 + 6,
	cyclohm: 1512 + 7,
	colossoil: 1512 + 8,
	krilowatt: 1512 + 9,
	voodoom: 1512 + 10,
	tomohawk: 1512 + 11,
	necturna: 1512 + 12,
	mollux: 1512 + 13,
	aurumoth: 1512 + 14,
	malaconda: 1512 + 15,
	cawmodore: 1512 + 16,
	volkraken: 1512 + 17,
	plasmanta: 1512 + 18,
	naviathan: 1512 + 19,
	crucibelle: 1512 + 20,
	crucibellemega: 1512 + 21,
	kerfluffle: 1512 + 22,
	pajantom: 1512 + 23,
	jumbao: 1512 + 24,
	caribolt: 1512 + 25,
	smokomodo: 1512 + 26,
	snaelstrom: 1512 + 27,
	equilibra: 1512 + 28,
	astrolotl: 1512 + 29,
	miasmaw: 1512 + 30,
	chromera: 1512 + 31,
	venomicon: 1512 + 32,
	venomiconepilogue: 1512 + 33,
	saharaja: 1512 + 34,
	hemogoblin: 1512 + 35,

	// CAP prevos
	syclar: 1548 + 0,
	embirch: 1548 + 1,
	flarelm: 1548 + 2,
	breezi: 1548 + 3,
	scratchet: 1548 + 4,
	necturine: 1548 + 5,
	cupra: 1548 + 6,
	argalis: 1548 + 7,
	brattler: 1548 + 8,
	cawdet: 1548 + 9,
	volkritter: 1548 + 10,
	snugglow: 1548 + 11,
	floatoy: 1548 + 12,
	caimanoe: 1548 + 13,
	pluffle: 1548 + 14,
	rebble: 1548 + 15,
	tactite: 1548 + 16,
	privatyke: 1548 + 17,
	nohface: 1548 + 18,
	monohm: 1548 + 19,
	duohm: 1548 + 20,
	protowatt: 1548 + 21,
	voodoll: 1548 + 22,
	mumbao: 1548 + 23,
	fawnifer: 1548 + 24,
	electrelk: 1548 + 25,
	smogecko: 1548 + 26,
	smoguana: 1548 + 27,
	swirlpool: 1548 + 28,
	coribalis: 1548 + 29,
	justyke: 1548 + 30,
	solotl: 1548 + 31,
	miasmite: 1548 + 32,
	dorsoil: 1548 + 33,
	saharascal: 1548 + 34,
	ababo: 1548 + 35,
	scattervein: 1548 + 36,

	//Aurora Mons
	arachnorok: 1548 + 0,
	arjibee: 1548 + 1,
	maginata: 1548 + 2,
	macquero: 1548 + 3,
	muertaguar: 1548 + 4,
	xinfernotl: 1548 + 5,
	waplati: 1548 + 6,
	galeusair: 1548 + 7,
	kobolder: 1548 + 8,
	ickvader: 1548 + 9,
	squittack: 1548 + 10,
	floraune: 1548 + 11,
	gardevoiraurora: 1548 + 12,
	galladeaurora: 1548 + 13,
	dwelmet: 1548 + 14,
	harmonkey: 1548 + 15,
	glowker: 1548 + 16,
	soloth: 1548 + 17,
	cherubid: 1548 + 18,
	anglare: 1548 + 19,
	shino: 1548 + 20,
	dribblowisp: 1548 + 21,
	calikami: 1548 + 22,
	calikamiradiant: 1548 + 23,
	masqutirade: 1548 + 24,
	kitsolune: 1548 + 25,
	illumeon: 1548 + 26,
	astreon: 1548 + 27,
	braxnoir: 1548 + 28,
	flocet: 1548 + 29,
	greydengo: 1548 + 30,
	hamstronaut: 1548 + 31,
	herastroid: 1548 + 32,
	jackalipse: 1548 + 33,
	lunarch: 1548 + 34,
	marstunami: 1548 + 35,
	moonster: 1548 + 36,
	redover: 1548 + 37,
	stegangaea: 1548 + 38,
	stellangel: 1548 + 39,
   sunfloraaurora: 1548 + 40,
	abysmatoth: 1548 + 41,
	jolibirdmilk: 1548 + 42,
	jolibirdcookies: 1548 + 43,
	giftrap: 1548 + 44,
	giftrapsacred: 1548 + 45,
	giftrapcarol: 1548 + 46,
	giftrapmascot: 1548 + 47,
	peeltite: 1548 + 48,
	citrabell: 1548 + 49,
	citrillon: 1548 + 50,
	spitrus: 1548 + 51,
	lemurei: 1548 + 52,
	cobrust: 1548 + 53,
	lollibop: 1548 + 54,
	revolture: 1548 + 55,
	galacastarid: 1548 + 56,
	galacasthumid: 1548 + 57,
	sneevil: 1548 + 58,
	santai: 1548 + 59,
	scabbardaunt: 1548 + 60,
	spiritombaurora:1548 + 61,
	volkaison: 1548 + 62,
	grizzweet: 1548 + 63,
	hypnoxious: 1548 + 64,
	mothiosa: 1548 + 65,
	faengpire: 1548 + 66,
	ponchobake: 1548 + 67,
	glucoana: 1548 + 68,
	onisen: 1548 + 69,
	dratosphere: 1548 + 70,
	aerora: 1548 + 71,
	sovocteign: 1548 + 72,
};

const BattlePokemonIconIndexesLeft: {[id: string]: number} = {
	pikachubelle: 1356 + 0,
	pikachupopstar: 1356 + 1,
	clefairy: 1356 + 2,
	clefable: 1356 + 3,
	jigglypuff: 1356 + 4,
	wigglytuff: 1356 + 5,
	dugtrioalola: 1356 + 6,
	poliwhirl: 1356 + 7,
	poliwrath: 1356 + 8,
	mukalola: 1356 + 9,
	kingler: 1356 + 10,
	croconaw: 1356 + 11,
	cleffa: 1356 + 12,
	igglybuff: 1356 + 13,
	politoed: 1356 + 14,
	unownb: 1356 + 15,
	unownc: 1356 + 16,
	unownd: 1356 + 17,
	unowne: 1356 + 18,
	unownf: 1356 + 19,
	unowng: 1356 + 20,
	unownh: 1356 + 21,
	unownj: 1356 + 22,
	unownk: 1356 + 23,
	unownl: 1356 + 24,
	unownm: 1356 + 25,
	unownn: 1356 + 26,
	unownp: 1356 + 27,
	unownq: 1356 + 28,
	unownquestion: 1356 + 29,
	unownr: 1356 + 30,
	unowns: 1356 + 31,
	unownt: 1356 + 32,
	unownv: 1356 + 33,
	unownz: 1356 + 34,
	sneasel: 1356 + 35,
	teddiursa: 1356 + 36,
	roselia: 1356 + 37,
	zangoose: 1356 + 38,
	seviper: 1356 + 39,
	castformsnowy: 1356 + 40,
	absolmega: 1356 + 41,
	absol: 1356 + 42,
	regirock: 1356 + 43,
	torterra: 1356 + 44,
	budew: 1356 + 45,
	roserade: 1356 + 46,
	magmortar: 1356 + 47,
	togekiss: 1356 + 48,
	rotomwash: 1356 + 49,
	shayminsky: 1356 + 50,
	emboar: 1356 + 51,
	pansear: 1356 + 52,
	simisear: 1356 + 53,
	drilbur: 1356 + 54,
	excadrill: 1356 + 55,
	sawk: 1356 + 56,
	lilligant: 1356 + 57,
	garbodor: 1356 + 58,
	solosis: 1356 + 59,
	vanilluxe: 1356 + 60,
	amoonguss: 1356 + 61,
	klink: 1356 + 62,
	klang: 1356 + 63,
	klinklang: 1356 + 64,
	litwick: 1356 + 65,
	golett: 1356 + 66,
	golurk: 1356 + 67,
	kyuremblack: 1356 + 68,
	kyuremwhite: 1356 + 69,
	kyurem: 1356 + 70,
	keldeoresolute: 1356 + 71,
	meloetta: 1356 + 72,
	greninja: 1356 + 73,
	greninjabond: 1356 + 73,
	greninjaash: 1356 + 74,
	furfroudebutante: 1356 + 75,
	barbaracle: 1356 + 76,
	clauncher: 1356 + 77,
	clawitzer: 1356 + 78,
	sylveon: 1356 + 79,
	klefki: 1356 + 80,
	zygarde: 1356 + 81,
	zygarde10: 1356 + 82,
	zygardecomplete: 1356 + 83,
	dartrix: 1356 + 84,
	steenee: 1356 + 85,
	tsareena: 1356 + 86,
	comfey: 1356 + 87,
	miniormeteor: 1356 + 88,
	minior: 1356 + 89,
	miniororange: 1356 + 90,
	minioryellow: 1356 + 91,
	miniorgreen: 1356 + 92,
	miniorblue: 1356 + 93,
	miniorviolet: 1356 + 94,
	miniorindigo: 1356 + 95,
	dhelmise: 1356 + 96,
	necrozma: 1356 + 97,
	marshadow: 1356 + 98,
	pikachuoriginal: 1356 + 99,
	pikachupartner: 1356 + 100,
	necrozmaduskmane: 1356 + 101,
	necrozmadawnwings: 1356 + 102,
	necrozmaultra: 1356 + 103,
	stakataka: 1356 + 104,
	blacephalon: 1356 + 105,
};

const BattleAvatarNumbers: {[k: string]: string} = {
	1: 'lucas',
	2: 'dawn',
	3: 'youngster-gen4dp',
	4: 'lass-gen4dp',
	5: 'camper',
	6: 'picnicker',
	7: 'bugcatcher-gen4dp',
	8: 'aromalady',
	9: 'twins-gen4dp',
	10: 'hiker-gen4',
	11: 'battlegirl-gen4',
	12: 'fisherman-gen4',
	13: 'cyclist-gen4',
	14: 'cyclistf-gen4',
	15: 'blackbelt-gen4dp',
	16: 'artist-gen4',
	17: 'pokemonbreeder-gen4',
	18: 'pokemonbreederf-gen4',
	19: 'cowgirl',
	20: 'jogger',
	21: 'pokefan-gen4',
	22: 'pokefanf-gen4',
	23: 'pokekid',
	24: 'youngcouple-gen4dp',
	25: 'acetrainer-gen4dp',
	26: 'acetrainerf-gen4dp',
	27: 'waitress-gen4',
	28: 'veteran-gen4',
	29: 'ninjaboy',
	30: 'dragontamer',
	31: 'birdkeeper-gen4dp',
	32: 'doubleteam',
	33: 'richboy-gen4',
	34: 'lady-gen4',
	35: 'gentleman-gen4dp',
	36: 'madame-gen4dp',
	37: 'beauty-gen4dp',
	38: 'collector',
	39: 'policeman-gen4',
	40: 'pokemonranger-gen4',
	41: 'pokemonrangerf-gen4',
	42: 'scientist-gen4dp',
	43: 'swimmer-gen4dp',
	44: 'swimmerf-gen4dp',
	45: 'tuber',
	46: 'tuberf',
	47: 'sailor',
	48: 'sisandbro',
	49: 'ruinmaniac',
	50: 'psychic-gen4',
	51: 'psychicf-gen4',
	52: 'gambler',
	53: 'guitarist-gen4',
	54: 'acetrainersnow',
	55: 'acetrainersnowf',
	56: 'skier',
	57: 'skierf-gen4dp',
	58: 'roughneck-gen4',
	59: 'clown',
	60: 'worker-gen4',
	61: 'schoolkid-gen4dp',
	62: 'schoolkidf-gen4',
	63: 'roark',
	64: 'barry',
	65: 'byron',
	66: 'aaron',
	67: 'bertha',
	68: 'flint',
	69: 'lucian',
	70: 'cynthia-gen4',
	71: 'bellepa',
	72: 'rancher',
	73: 'mars',
	74: 'galacticgrunt',
	75: 'gardenia',
	76: 'crasherwake',
	77: 'maylene',
	78: 'fantina',
	79: 'candice',
	80: 'volkner',
	81: 'parasollady-gen4',
	82: 'waiter-gen4dp',
	83: 'interviewers',
	84: 'cameraman',
	85: 'reporter',
	86: 'idol',
	87: 'cyrus',
	88: 'jupiter',
	89: 'saturn',
	90: 'galacticgruntf',
	91: 'argenta',
	92: 'palmer',
	93: 'thorton',
	94: 'buck',
	95: 'darach-caitlin',
	96: 'marley',
	97: 'mira',
	98: 'cheryl',
	99: 'riley',
	100: 'dahlia',
	101: 'ethan',
	102: 'lyra',
	103: 'twins-gen4',
	104: 'lass-gen4',
	105: 'acetrainer-gen4',
	106: 'acetrainerf-gen4',
	107: 'juggler',
	108: 'sage',
	109: 'li',
	110: 'gentleman-gen4',
	111: 'teacher',
	112: 'beauty',
	113: 'birdkeeper',
	114: 'swimmer-gen4',
	115: 'swimmerf-gen4',
	116: 'kimonogirl',
	117: 'scientist-gen4',
	118: 'acetrainercouple',
	119: 'youngcouple',
	120: 'supernerd',
	121: 'medium',
	122: 'schoolkid-gen4',
	123: 'blackbelt-gen4',
	124: 'pokemaniac',
	125: 'firebreather',
	126: 'burglar',
	127: 'biker-gen4',
	128: 'skierf',
	129: 'boarder',
	130: 'rocketgrunt',
	131: 'rocketgruntf',
	132: 'archer',
	133: 'ariana',
	134: 'proton',
	135: 'petrel',
	136: 'eusine',
	137: 'lucas-gen4pt',
	138: 'dawn-gen4pt',
	139: 'madame-gen4',
	140: 'waiter-gen4',
	141: 'falkner',
	142: 'bugsy',
	143: 'whitney',
	144: 'morty',
	145: 'chuck',
	146: 'jasmine',
	147: 'pryce',
	148: 'clair',
	149: 'will',
	150: 'koga',
	151: 'bruno',
	152: 'karen',
	153: 'lance',
	154: 'brock',
	155: 'misty',
	156: 'ltsurge',
	157: 'erika',
	158: 'janine',
	159: 'sabrina',
	160: 'blaine',
	161: 'blue',
	162: 'red',
	163: 'red',
	164: 'silver',
	165: 'giovanni',
	166: 'unknownf',
	167: 'unknown',
	168: 'unknown',
	169: 'hilbert',
	170: 'hilda',
	171: 'youngster',
	172: 'lass',
	173: 'schoolkid',
	174: 'schoolkidf',
	175: 'smasher',
	176: 'linebacker',
	177: 'waiter',
	178: 'waitress',
	179: 'chili',
	180: 'cilan',
	181: 'cress',
	182: 'nurseryaide',
	183: 'preschoolerf',
	184: 'preschooler',
	185: 'twins',
	186: 'pokemonbreeder',
	187: 'pokemonbreederf',
	188: 'lenora',
	189: 'burgh',
	190: 'elesa',
	191: 'clay',
	192: 'skyla',
	193: 'pokemonranger',
	194: 'pokemonrangerf',
	195: 'worker',
	196: 'backpacker',
	197: 'backpackerf',
	198: 'fisherman',
	199: 'musician',
	200: 'dancer',
	201: 'harlequin',
	202: 'artist',
	203: 'baker',
	204: 'psychic',
	205: 'psychicf',
	206: 'cheren',
	207: 'bianca',
	208: 'plasmagrunt-gen5bw',
	209: 'n',
	210: 'richboy',
	211: 'lady',
	212: 'pilot',
	213: 'workerice',
	214: 'hoopster',
	215: 'scientistf',
	216: 'clerkf',
	217: 'acetrainerf',
	218: 'acetrainer',
	219: 'blackbelt',
	220: 'scientist',
	221: 'striker',
	222: 'brycen',
	223: 'iris',
	224: 'drayden',
	225: 'roughneck',
	226: 'janitor',
	227: 'pokefan',
	228: 'pokefanf',
	229: 'doctor',
	230: 'nurse',
	231: 'hooligans',
	232: 'battlegirl',
	233: 'parasollady',
	234: 'clerk',
	235: 'clerk-boss',
	236: 'backers',
	237: 'backersf',
	238: 'veteran',
	239: 'veteranf',
	240: 'biker',
	241: 'infielder',
	242: 'hiker',
	243: 'madame',
	244: 'gentleman',
	245: 'plasmagruntf-gen5bw',
	246: 'shauntal',
	247: 'marshal',
	248: 'grimsley',
	249: 'caitlin',
	250: 'ghetsis-gen5bw',
	251: 'depotagent',
	252: 'swimmer',
	253: 'swimmerf',
	254: 'policeman',
	255: 'maid',
	256: 'ingo',
	257: 'alder',
	258: 'cyclist',
	259: 'cyclistf',
	260: 'cynthia',
	261: 'emmet',
	262: 'hilbert-wonderlauncher',
	263: 'hilda-wonderlauncher',
	264: 'hugh',
	265: 'rosa',
	266: 'nate',
	267: 'colress',
	268: 'beauty-gen5bw2',
	269: 'ghetsis',
	270: 'plasmagrunt',
	271: 'plasmagruntf',
	272: 'iris-gen5bw2',
	273: 'brycenman',
	274: 'shadowtriad',
	275: 'rood',
	276: 'zinzolin',
	277: 'cheren-gen5bw2',
	278: 'marlon',
	279: 'roxie',
	280: 'roxanne',
	281: 'brawly',
	282: 'wattson',
	283: 'flannery',
	284: 'norman',
	285: 'winona',
	286: 'tate',
	287: 'liza',
	288: 'juan',
	289: 'guitarist',
	290: 'steven',
	291: 'wallace',
	292: 'bellelba',
	293: 'benga',
	294: 'ash',
	'#bw2elesa': 'elesa-gen5bw2',
	'#teamrocket': 'teamrocket',
	'#yellow': 'yellow',
	'#zinnia': 'zinnia',
	'#clemont': 'clemont',
	'#wally': 'wally',
	breeder: 'pokemonbreeder',
	breederf: 'pokemonbreederf',
	'hilbert-dueldisk': 'hilbert-wonderlauncher',
	'hilda-dueldisk': 'hilda-wonderlauncher',
	'nate-dueldisk': 'nate-wonderlauncher',
	'rosa-dueldisk': 'rosa-wonderlauncher',

	1001: '#1001',
	1002: '#1002',
	1003: '#1003',
	1005: '#1005',
	1010: '#1010',
};

type StatName = 'hp' | 'atk' | 'def' | 'spa' | 'spd' | 'spe';
type NatureName = 'Adamant' | 'Bashful' | 'Bold' | 'Brave' | 'Calm' | 'Careful' | 'Docile' | 'Gentle' |
	'Hardy' | 'Hasty' | 'Impish' | 'Jolly' | 'Lax' | 'Lonely' | 'Mild' | 'Modest' | 'Naive' | 'Naughty' |
	'Quiet' | 'Quirky' | 'Rash' | 'Relaxed' | 'Sassy' | 'Serious' | 'Timid';
type StatNameExceptHP = 'atk' | 'def' | 'spa' | 'spd' | 'spe';
type TypeName = 'Normal' | 'Fighting' | 'Flying' | 'Poison' | 'Ground' | 'Rock' | 'Bug' | 'Ghost' | 'Steel' |
	'Fire' | 'Water' | 'Grass' | 'Electric' | 'Psychic' | 'Ice' | 'Dragon' | 'Dark' | 'Fairy' | '???';
type StatusName = 'par' | 'psn' | 'frz' | 'slp' | 'brn';
type BoostStatName = 'atk' | 'def' | 'spa' | 'spd' | 'spe' | 'evasion' | 'accuracy' | 'spc';
type GenderName = 'M' | 'F' | 'N';

interface Effect {
	readonly id: ID;
	readonly name: string;
	readonly gen: number;
	readonly effectType: 'Item' | 'Move' | 'Ability' | 'Species' | 'PureEffect';
	/**
	 * Do we have data on this item/move/ability/species?
	 * WARNING: Always false if the relevant data files aren't loaded.
	 */
	readonly exists: boolean;
}

class PureEffect implements Effect {
	readonly effectType = 'PureEffect';
	readonly id: ID;
	readonly name: string;
	readonly gen: number;
	readonly exists: boolean;
	constructor(id: ID, name: string) {
		this.id = id;
		this.name = name;
		this.gen = 0;
		this.exists = false;
	}
}

class Item implements Effect {
	// effect
	readonly effectType = 'Item';
	readonly id: ID;
	readonly name: string;
	readonly gen: number;
	readonly exists: boolean;

	readonly num: number;
	readonly spritenum: number;
	readonly desc: string;
	readonly shortDesc: string;

	readonly megaStone: string;
	readonly megaEvolves: string;
	readonly zMove: string | true | null;
	readonly zMoveType: TypeName | '';
	readonly zMoveFrom: string;
	readonly zMoveUser: readonly string[] | null;
	readonly onPlate: TypeName;
	readonly onMemory: TypeName;
	readonly onDrive: TypeName;
	readonly fling: any;
	readonly naturalGift: any;
	readonly isPokeball: boolean;
	readonly itemUser?: readonly string[];

	constructor(id: ID, name: string, data: any) {
		if (!data || typeof data !== 'object') data = {};
		if (data.name) name = data.name;
		this.name = Dex.sanitizeName(name);
		this.id = id;
		this.gen = data.gen || 0;
		this.exists = ('exists' in data ? !!data.exists : true);

		this.num = data.num || 0;
		this.spritenum = data.spritenum || 0;
		this.desc = data.desc || data.shortDesc || '';
		this.shortDesc = data.shortDesc || this.desc;

		this.megaStone = data.megaStone || '';
		this.megaEvolves = data.megaEvolves || '';
		this.zMove = data.zMove || null;
		this.zMoveType = data.zMoveType || '';
		this.zMoveFrom = data.zMoveFrom || '';
		this.zMoveUser = data.zMoveUser || null;
		this.onPlate = data.onPlate || '';
		this.onMemory = data.onMemory || '';
		this.onDrive = data.onDrive || '';
		this.fling = data.fling || null;
		this.naturalGift = data.naturalGift || null;
		this.isPokeball = !!data.isPokeball;
		this.itemUser = data.itemUser;

		if (!this.gen) {
			if (this.num >= 577) {
				this.gen = 6;
			} else if (this.num >= 537) {
				this.gen = 5;
			} else if (this.num >= 377) {
				this.gen = 4;
			} else {
				this.gen = 3;
			}
		}
	}
}

interface MoveFlags {
	/** The move has an animation when used on an ally. */
	allyanim?: 1 | 0;
	/** Power is multiplied by 1.5 when used by a Pokemon with the Strong Jaw Ability. */
	bite?: 1 | 0;
	/** Has no effect on Pokemon with the Bulletproof Ability. */
	bullet?: 1 | 0;
	/** Ignores a target's substitute. */
	bypasssub?: 1 | 0;
	/** The user is unable to make a move between turns. */
	charge?: 1 | 0;
	/** Makes contact. */
	contact?: 1 | 0;
	/** When used by a Pokemon, other Pokemon with the Dancer Ability can attempt to execute the same move. */
	dance?: 1 | 0;
	/** Thaws the user if executed successfully while the user is frozen. */
	defrost?: 1 | 0;
	/** Can target a Pokemon positioned anywhere in a Triple Battle. */
	distance?: 1 | 0;
	/** Prevented from being executed or selected during Gravity's effect. */
	gravity?: 1 | 0;
	/** Prevented from being executed or selected during Heal Block's effect. */
	heal?: 1 | 0;
	/** Can be copied by Mirror Move. */
	mirror?: 1 | 0;
	/** Prevented from being executed or selected in a Sky Battle. */
	nonsky?: 1 | 0;
	/** Has no effect on Grass-type Pokemon, Pokemon with the Overcoat Ability, and Pokemon holding Safety Goggles. */
	powder?: 1 | 0;
	/** Blocked by Detect, Protect, Spiky Shield, and if not a Status move, King's Shield. */
	protect?: 1 | 0;
	/** Power is multiplied by 1.5 when used by a Pokemon with the Mega Launcher Ability. */
	pulse?: 1 | 0;
	/** Power is multiplied by 1.2 when used by a Pokemon with the Iron Fist Ability. */
	punch?: 1 | 0;
	/** If this move is successful, the user must recharge on the following turn and cannot make a move. */
	recharge?: 1 | 0;
	/** Bounced back to the original user by Magic Coat or the Magic Bounce Ability. */
	reflectable?: 1 | 0;
	/** Power is multiplied by 1.5 when used by a Pokemon with the Sharpness Ability. */
	slicing?: 1 | 0;
	/** Can be stolen from the original user and instead used by another Pokemon using Snatch. */
	snatch?: 1 | 0;
	/** Has no effect on Pokemon with the Soundproof Ability. */
	sound?: 1 | 0;
	/** Activates the effects of the Wind Power and Wind Rider Abilities. */
	wind?: 1 | 0;
}

type MoveTarget = 'normal' | 'any' | 'adjacentAlly' | 'adjacentFoe' | 'adjacentAllyOrSelf' | 'anyAlly' | // single-target
	'self' | 'randomNormal' | // single-target, automatic
	'allAdjacent' | 'allAdjacentFoes' | // spread
	'allySide' | 'foeSide' | 'all'; // side and field

class Move implements Effect {
	// effect
	readonly effectType = 'Move';
	readonly id: ID;
	readonly name: string;
	readonly gen: number;
	readonly exists: boolean;

	readonly basePower: number;
	readonly accuracy: number | true;
	readonly pp: number;
	readonly type: TypeName;
	readonly category: 'Physical' | 'Special' | 'Status';
	readonly priority: number;
	readonly target: MoveTarget;
	readonly pressureTarget: MoveTarget;
	readonly flags: Readonly<MoveFlags>;
	readonly critRatio: number;

	readonly desc: string;
	readonly shortDesc: string;
	readonly isNonstandard: string | null;
	readonly isZ: ID;
	readonly zMove?: {
		basePower?: number,
		effect?: string,
		boost?: {[stat in StatName]?: number},
	};
	readonly isMax: boolean | string;
	readonly maxMove: {basePower: number};
	readonly ohko: true | 'Ice' | null;
	readonly recoil: number[] | null;
	readonly heal: number[] | null;
	readonly multihit: number[] | number | null;
	readonly hasCrashDamage: boolean;
	readonly noPPBoosts: boolean;
	readonly secondaries: ReadonlyArray<any> | null;
	readonly noSketch: boolean;
	readonly num: number;

	constructor(id: ID, name: string, data: any) {
		if (!data || typeof data !== 'object') data = {};
		if (data.name) name = data.name;
		this.name = Dex.sanitizeName(name);
		this.id = id;
		this.gen = data.gen || 0;
		this.exists = ('exists' in data ? !!data.exists : true);

		this.basePower = data.basePower || 0;
		this.accuracy = data.accuracy || 0;
		this.pp = data.pp || 1;
		this.type = data.type || '???';
		this.category = data.category || 'Physical';
		this.priority = data.priority || 0;
		this.target = data.target || 'normal';
		this.pressureTarget = data.pressureTarget || this.target;
		this.flags = data.flags || {};
		this.critRatio = data.critRatio === 0 ? 0 : (data.critRatio || 1);

		// TODO: move to text.js
		this.desc = data.desc;
		this.shortDesc = data.shortDesc;
		this.isNonstandard = data.isNonstandard || null;
		this.isZ = data.isZ || '';
		this.zMove = data.zMove || {};
		this.ohko = data.ohko || null;
		this.recoil = data.recoil || null;
		this.heal = data.heal || null;
		this.multihit = data.multihit || null;
		this.hasCrashDamage = data.hasCrashDamage || false;
		this.noPPBoosts = data.noPPBoosts || false;
		this.secondaries = data.secondaries || (data.secondary ? [data.secondary] : null);
		this.noSketch = !!data.noSketch;

		this.isMax = data.isMax || false;
		this.maxMove = data.maxMove || {basePower: 0};
		if (this.category !== 'Status' && !this.maxMove?.basePower) {
			if (this.isZ || this.isMax) {
				this.maxMove = {basePower: 1};
			} else if (!this.basePower) {
				this.maxMove = {basePower: 100};
			} else if (['Fighting', 'Poison'].includes(this.type)) {
				if (this.basePower >= 150) {
					this.maxMove = {basePower: 100};
				} else if (this.basePower >= 110) {
					this.maxMove = {basePower: 95};
				} else if (this.basePower >= 75) {
					this.maxMove = {basePower: 90};
				} else if (this.basePower >= 65) {
					this.maxMove = {basePower: 85};
				} else if (this.basePower >= 55) {
					this.maxMove = {basePower: 80};
				} else if (this.basePower >= 45) {
					this.maxMove = {basePower: 75};
				} else  {
					this.maxMove = {basePower: 70};
				}
			} else {
				if (this.basePower >= 150) {
					this.maxMove = {basePower: 150};
				} else if (this.basePower >= 110) {
					this.maxMove = {basePower: 140};
				} else if (this.basePower >= 75) {
					this.maxMove = {basePower: 130};
				} else if (this.basePower >= 65) {
					this.maxMove = {basePower: 120};
				} else if (this.basePower >= 55) {
					this.maxMove = {basePower: 110};
				} else if (this.basePower >= 45) {
					this.maxMove = {basePower: 100};
				} else  {
					this.maxMove = {basePower: 90};
				}
			}
		}

		if (this.category !== 'Status' && !this.isZ && !this.isMax) {
			let basePower = this.basePower;
			this.zMove = {};
			if (Array.isArray(this.multihit)) basePower *= 3;
			if (!basePower) {
				this.zMove.basePower = 100;
			} else if (basePower >= 140) {
				this.zMove.basePower = 200;
			} else if (basePower >= 130) {
				this.zMove.basePower = 195;
			} else if (basePower >= 120) {
				this.zMove.basePower = 190;
			} else if (basePower >= 110) {
				this.zMove.basePower = 185;
			} else if (basePower >= 100) {
				this.zMove.basePower = 180;
			} else if (basePower >= 90) {
				this.zMove.basePower = 175;
			} else if (basePower >= 80) {
				this.zMove.basePower = 160;
			} else if (basePower >= 70) {
				this.zMove.basePower = 140;
			} else if (basePower >= 60) {
				this.zMove.basePower = 120;
			} else {
				this.zMove.basePower = 100;
			}
			if (data.zMove) this.zMove.basePower = data.zMove.basePower;
		}

		this.num = data.num || 0;
		if (!this.gen) {
			if (this.num >= 743) {
				this.gen = 8;
			} else if (this.num >= 622) {
				this.gen = 7;
			} else if (this.num >= 560) {
				this.gen = 6;
			} else if (this.num >= 468) {
				this.gen = 5;
			} else if (this.num >= 355) {
				this.gen = 4;
			} else if (this.num >= 252) {
				this.gen = 3;
			} else if (this.num >= 166) {
				this.gen = 2;
			} else if (this.num >= 1) {
				this.gen = 1;
			}
		}
	}
}

class Ability implements Effect {
	// effect
	readonly effectType = 'Ability';
	readonly id: ID;
	readonly name: string;
	readonly gen: number;
	readonly exists: boolean;

	readonly num: number;
	readonly shortDesc: string;
	readonly desc: string;

	readonly rating: number;
	readonly isPermanent: boolean;
	readonly isNonstandard: boolean;

	constructor(id: ID, name: string, data: any) {
		if (!data || typeof data !== 'object') data = {};
		if (data.name) name = data.name;
		this.name = Dex.sanitizeName(name);
		this.id = id;
		this.gen = data.gen || 0;
		this.exists = ('exists' in data ? !!data.exists : true);
		this.num = data.num || 0;
		this.shortDesc = data.shortDesc || data.desc || '';
		this.desc = data.desc || data.shortDesc || '';
		this.rating = data.rating || 1;
		this.isPermanent = !!data.isPermanent;
		this.isNonstandard = !!data.isNonstandard;
		if (!this.gen) {
			if (this.num >= 234) {
				this.gen = 8;
			} else if (this.num >= 192) {
				this.gen = 7;
			} else if (this.num >= 165) {
				this.gen = 6;
			} else if (this.num >= 124) {
				this.gen = 5;
			} else if (this.num >= 77) {
				this.gen = 4;
			} else if (this.num >= 1) {
				this.gen = 3;
			}
		}
	}
}

class Species implements Effect {
	// effect
	readonly effectType = 'Species';
	readonly id: ID;
	readonly name: string;
	readonly gen: number;
	readonly exists: boolean;

	// name
	readonly baseSpecies: string;
	readonly forme: string;
	readonly formeid: string;
	readonly spriteid: string;
	readonly baseForme: string;

	// basic data
	readonly num: number;
	readonly types: ReadonlyArray<TypeName>;
	readonly abilities: Readonly<{
		0: string, 1?: string, H?: string, S?: string,
	}>;
	readonly baseStats: Readonly<{
		hp: number, atk: number, def: number, spa: number, spd: number, spe: number,
	}>;
	readonly bst: number;
	readonly weightkg: number;

	// flavor data
	readonly heightm: number;
	readonly gender: GenderName;
	readonly color: string;
	readonly genderRatio: Readonly<{M: number, F: number}> | null;
	readonly eggGroups: ReadonlyArray<string>;
	readonly tags: ReadonlyArray<string>;

	// format data
	readonly otherFormes: ReadonlyArray<string> | null;
	readonly cosmeticFormes: ReadonlyArray<string> | null;
	readonly evos: ReadonlyArray<string> | null;
	readonly prevo: string;
	readonly evoType: 'trade' | 'useItem' | 'levelMove' | 'levelExtra' | 'levelFriendship' | 'levelHold' | 'other' | '';
	readonly evoLevel: number;
	readonly evoMove: string;
	readonly evoItem: string;
	readonly evoCondition: string;
	readonly requiredItems: ReadonlyArray<string>;
	readonly tier: string;
	readonly isTotem: boolean;
	readonly isMega: boolean;
	readonly isPrimal: boolean;
	readonly canGigantamax: boolean;
	readonly cannotDynamax: boolean;
	readonly forceTeraType: TypeName;
	readonly battleOnly: string | string[] | undefined;
	readonly isNonstandard: string | null;
	readonly unreleasedHidden: boolean | 'Past';
	readonly changesFrom: string | undefined;

	constructor(id: ID, name: string, data: any) {
		if (!data || typeof data !== 'object') data = {};
		if (data.name) name = data.name;
		this.name = Dex.sanitizeName(name);
		this.id = id;
		this.gen = data.gen || 0;
		this.exists = ('exists' in data ? !!data.exists : true);
		this.baseSpecies = data.baseSpecies || name;
		this.forme = data.forme || '';
		const baseId = toID(this.baseSpecies);
		this.formeid = (baseId === this.id ? '' : '-' + toID(this.forme));
		this.spriteid = baseId + this.formeid;
		if (this.spriteid.slice(-5) === 'totem') this.spriteid = this.spriteid.slice(0, -5);
		if (this.spriteid === 'greninja-bond') this.spriteid = 'greninja';
		if (this.spriteid.slice(-1) === '-') this.spriteid = this.spriteid.slice(0, -1);
		this.baseForme = data.baseForme || '';

		this.num = data.num || 0;
		this.types = data.types || ['???'];
		this.abilities = data.abilities || {0: "No Ability"};
		this.baseStats = data.baseStats || {hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 0};
		this.bst = this.baseStats.hp + this.baseStats.atk + this.baseStats.def +
			this.baseStats.spa + this.baseStats.spd + this.baseStats.spe;
		this.weightkg = data.weightkg || 0;

		this.heightm = data.heightm || 0;
		this.gender = data.gender || '';
		this.color = data.color || '';
		this.genderRatio = data.genderRatio || null;
		this.eggGroups = data.eggGroups || [];
		this.tags = data.tags || [];

		this.otherFormes = data.otherFormes || null;
		this.cosmeticFormes = data.cosmeticFormes || null;
		this.evos = data.evos || null;
		this.prevo = data.prevo || '';
		this.evoType = data.evoType || '';
		this.evoLevel = data.evoLevel || 0;
		this.evoMove = data.evoMove || '';
		this.evoItem = data.evoItem || '';
		this.evoCondition = data.evoCondition || '';
		this.requiredItems = data.requiredItems || (data.requiredItem ? [data.requiredItem] : []);
		this.tier = data.tier || '';

		this.isTotem = false;
		this.isMega = !!(this.forme && ['-mega', '-megax', '-megay'].includes(this.formeid));
		this.isPrimal = !!(this.forme && this.formeid === '-primal');
		this.canGigantamax = !!data.canGigantamax;
		this.cannotDynamax = !!data.cannotDynamax;
		this.forceTeraType = data.forceTeraType || '';
		this.battleOnly = data.battleOnly || undefined;
		this.isNonstandard = data.isNonstandard || null;
		this.unreleasedHidden = data.unreleasedHidden || false;
		this.changesFrom = data.changesFrom || undefined;
		if (!this.gen) {
			if (this.num >= 906 || this.formeid.startsWith('-paldea')) {
				this.gen = 9;
			} else if (this.num >= 810 || this.formeid.startsWith('-galar') || this.formeid.startsWith('-hisui')) {
				this.gen = 8;
			} else if (this.num >= 722 || this.formeid === '-alola' || this.formeid === '-starter') {
				this.gen = 7;
			} else if (this.isMega || this.isPrimal) {
				this.gen = 6;
				this.battleOnly = this.baseSpecies;
			} else if (this.formeid === '-totem' || this.formeid === '-alolatotem') {
				this.gen = 7;
				this.isTotem = true;
			} else if (this.num >= 650) {
				this.gen = 6;
			} else if (this.num >= 494) {
				this.gen = 5;
			} else if (this.num >= 387) {
				this.gen = 4;
			} else if (this.num >= 252) {
				this.gen = 3;
			} else if (this.num >= 152) {
				this.gen = 2;
			} else if (this.num >= 1) {
				this.gen = 1;
			}
		}
	}
}

interface Type extends Effect {
	damageTaken?: AnyObject;
	HPivs?: Partial<StatsTable>;
	HPdvs?: Partial<StatsTable>;
}

if (typeof require === 'function') {
	// in Node
	(global as any).BattleBaseSpeciesChart = BattleBaseSpeciesChart;
	(global as any).BattleNatures = BattleNatures;
	(global as any).PureEffect = PureEffect;
	(global as any).Species = Species;
	(global as any).Ability = Ability;
	(global as any).Item = Item;
	(global as any).Move = Move;
}
