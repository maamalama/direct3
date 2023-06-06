import { Polybase } from '@polybase/client'

const schema = `
@public
collection games {
    id: string;
    name: string;
    description?: string;
    fullDescription?: string;
    logo?: string;
    website?: string;
    chain?: string;
    category?: string;

    constructor (id: string, name: string, description?: string, fullDescription?: string, logo?: string, website?: string, chain?: string, category?: string) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.fullDescription = fullDescription;
        this.logo = logo;
        this.website = website;
        this.chain = chain;
        this.category = category;
    }
}

@public
collection metrics {
    id: string;
    data: string;
    timestamp: string;
    game: string;

    @index(game, [timestamp, desc]);

    constructor (id: string, data: string, timestamp: string, game: string) {
        this.id = id;
        this.data = data;
        this.timestamp = timestamp;
        this.game = game;
    }
}

@public
collection accounts {
    id: string;
    address: string;
    name?: string;
    pfp?: string;

    constructor (id: string, address: string, name?: string, pfp?: string) {
        this.id = id;
        this.address = address;
        this.name = name;
        this.pfp = pfp;
    }
}

@public
collection posts {
    id: string;
    header: string;
    body: string;
    timestamp: string;
    game: string;
    author: string;

    @index(game, [timestamp, desc]);

    constructor (id: string, header: string, body: string, timestamp: string, game: string, author: string) {
        this.id = id;
        this.header = header;
        this.body = body;
        this.timestamp = timestamp;
        this.game = game;
        this.author = author;
    }
}
`

const games =
  [
    {
      "id": "8ef6596b-fd0b-4f54-8655-371a4a3dbf26",
      "name": "CryptoKitties",
      "description": "In CryptoKitties, users collect and breed oh-so-ad",
      "fullDescription": "<p>In CryptoKitties, users collect and breed oh-so-adorable creatures that we call CryptoKitties! Each kitty has a unique genome that defines its appearance and traits. Players can breed their kitties to create new furry friends and unlock rare cattributes.</p>",
      "logo": "https://dashboard-assets.dappradar.com/document/3/cryptokitties-dapp-games-eth-logo_43af8137d6219e1fd08b52d9cdfc9447.png",
      "website": "https://www.cryptokitties.co",
      "chain": "ethereum",
      "category": "games"
    },
    {
      "id": "dd3352aa-dd90-405b-9501-1d45b52ba48e",
      "name": "CryptoFighters",
      "description": "Battle on the blockchain!",
      "fullDescription": "<p>Battle on the blockchain!</p>",
      "logo": "https://dashboard-assets.dappradar.com/document/4/cryptofighters-dapp-games-ethereum-logo_95f24cd5a0610de0c14eb8d2b6069611.png",
      "website": "https://cryptofighters.io",
      "chain": "ethereum",
      "category": "games"
    },
    {
      "id": "a685ddb3-2ada-43af-ba3c-8cd6e7844500",
      "name": "CryptoCelebrities",
      "description": "",
      "fullDescription": "",
      "logo": "",
      "website": "https://cryptocelebrities.co/",
      "chain": "ethereum",
      "category": "games"
    },
    {
      "id": "72b1e75f-2eaa-4054-ac29-4bfa08a50963",
      "name": "EtherRockets",
      "description": "",
      "fullDescription": "",
      "logo": "",
      "website": "https://etherrockets.com/",
      "chain": "ethereum",
      "category": "games"
    },



    {
      "id": "10d7f40a-0767-4429-bee1-6ad93cd70920",
      "name": "Pray4Prey",
      "description": "",
      "fullDescription": "",
      "logo": "",
      "website": "http://pray4prey.com/",
      "chain": "ethereum",
      "category": "games"
    },


    {
      "id": "9efbc227-b73f-4601-85e1-dd24fc78dc2d",
      "name": "ETHERCRAFT",
      "description": "A decentralized blockchain RPG.\r\n",
      "fullDescription": "<p>A decentralized blockchain RPG.</p>\r\n",
      "logo": "",
      "website": "https://ethercraft.io/",
      "chain": "ethereum",
      "category": "games"
    },
    {
      "id": "a319ae4d-5abd-4da5-94b4-d753d8465777",
      "name": "Ethermon",
      "description": "Re-launched in 2019 Ethermon.io is the communit",
      "fullDescription": "<p>Re-launched in 2019 Ethermon.io is the community driven version of the popular Etheremon.com under an entire new team. Players can continue to use their old and new Ether Monsters (EtherMon) to join forces and continue their journey in this crypto based battle games where they capture, train, and transform their collectables to make their permanent mark on the blockchain.</p>\r\n",
      "logo": "https://dashboard-assets.dappradar.com/document/17/ethermon-dapp-games-eth-logo_9e9239828819afeeccc308f64435fff6.png",
      "website": "https://www.ethermon.io",
      "chain": "ethereum",
      "category": "games"
    },
    {
      "id": "0e70a11d-56ea-48ce-9665-96e7c0391ee0",
      "name": "ETHERBOTS",
      "description": "Decentralised Robot Wars on the blockchain.",
      "fullDescription": "Decentralised Robot Wars on the blockchain.",
      "logo": "",
      "website": "https://etherbots.io/",
      "chain": "ethereum",
      "category": "games"
    },
    {
      "id": "8b90eedf-08d0-40fc-9b49-4f80ef5f0f9d",
      "name": "KryptoWar",
      "description": "KryptoWar is a war game based on the Ethereum Bloc",
      "fullDescription": "KryptoWar is a war game based on the Ethereum Blockchain. With KryptoWar you can own and lead one of 100 countries.\n\nYou can improve its army by purchasing more soldiers or some new weapons, you can battle rivaling countries or you can sell it to another player on our marketplace (for the price of your choice).\n\nIf you think you got what it takes to lead your country to greatness come and join us on the battlefield! (But please remember that KryptoWar is a game, not an investment!)",
      "logo": "",
      "website": "https://kryptowar.com/",
      "chain": "ethereum",
      "category": "games"
    },
    {
      "id": "1454f087-13f2-488b-95c7-6bbfebcb4e34",
      "name": "Ethersquares",
      "description": "",
      "fullDescription": "",
      "logo": "",
      "website": "https://ethersquares.io",
      "chain": "ethereum",
      "category": "games"
    },
    {
      "id": "c9864637-2a59-4b95-899a-7a4e1f161d5e",
      "name": "Angel Battles",
      "description": "",
      "fullDescription": "",
      "logo": "https://dashboard-assets.dappradar.com/document/24/angelbattles-dapp-games-eth-logo_a955e86d3c1a7c4974c9bb71eb65ee22.png",
      "website": "https://www.angelbattles.com/",
      "chain": "ethereum",
      "category": "games"
    },
    {
      "id": "28c369b5-c766-49c4-9c95-95d8a17a9b65",
      "name": "Ether Numbers",
      "description": "Purchase numbers on the block chain",
      "fullDescription": "Purchase numbers on the block chain",
      "logo": "",
      "website": "https://ethernumbers.co/",
      "chain": "ethereum",
      "category": "games"
    },




    {
      "id": "d80e591c-1b8c-4bab-8665-30688b054d8b",
      "name": "CryptoBots",
      "description": "A blockchain-based game to find out whose bot army",
      "fullDescription": "A blockchain-based game to find out whose bot army is the best!",
      "logo": "",
      "website": "https://cryptobots.me/",
      "chain": "ethereum",
      "category": "games"
    },
    {
      "id": "925b291a-b001-4a8d-b464-62f305021f17",
      "name": "Ether Dungeon: Age of Myth",
      "description": "Ether Dungeon: Age of Myth is a strategic blockcha",
      "fullDescription": "Ether Dungeon: Age of Myth is a strategic blockchain game in which players collect epic heroes, upgrade powerful equipments, and explore the depth of dungeons in the artificial blockchain world Pangaea Ultima.",
      "logo": "",
      "website": "https://etherdungeon.io/",
      "chain": "ethereum",
      "category": "games"
    },
    {
      "id": "53a79dad-30cd-4a4e-9ccd-d82eb1e51030",
      "name": "Crypto Landmarks",
      "description": "",
      "fullDescription": "",
      "logo": "",
      "website": "https://cryptolandmarks.co/",
      "chain": "ethereum",
      "category": "games"
    },
    {
      "id": "7655cf5d-cdab-44ac-8b08-63e579bab908",
      "name": "World of Ether",
      "description": "Decentralized collectable dueling game on the Ethe",
      "fullDescription": "Decentralized collectable dueling game on the Ethereum blockchain. Collect, breed, battle. Welcome to the World of Ether.",
      "logo": "https://dashboard-assets.dappradar.com/document/36/worldofether-dapp-games-eth-logo_d90aec24e0f46e9b885cbe85634069c9.png",
      "website": "https://worldofether.com/",
      "chain": "ethereum",
      "category": "games"
    },
    {
      "id": "8bb393a9-fb99-4ea4-883c-fa285da35854",
      "name": "CryptoCities",
      "description": "Collect, Trade and Win Cities on the Blockchain\t",
      "fullDescription": "Collect, Trade and Win Cities on the Blockchain\t",
      "logo": "",
      "website": "https://cryptociti.es/",
      "chain": "ethereum",
      "category": "games"
    },
    {
      "id": "f0cb5497-59db-4ae2-aa90-1359a597a91e",
      "name": "CryptoCats",
      "description": "CryptoCats are the first clones of CryptoPunks on the Ethereum blockchain. They launched in late 2017 and only minted 625 cats.",
      "fullDescription": "<p>CryptoCats are the first clones of CryptoPunks on the Ethereum blockchain. They launched in late 2017 and openly admire Larva Labs and their punks. In total there have only been 625 cats ever minted.These cats are CCAT tokens, stored on the blockchain. However, this was before the ERC-721 token standard for NFTs.The ownership for each of these cats is stored on Ethereum. Being built on blockchain means that by design, these CryptoCats are inherently resistant to modification of ownership. A digital decentralised certificate of authenticity for your CryptoCat.</p>",
      "logo": "https://dashboard-assets.dappradar.com/document/41/cryptocats-dapp-games-ethereum-logo_08120026bc61c3e757943d4e2497f8e9.png",
      "website": "http://cryptocats.thetwentysix.io/",
      "chain": "ethereum",
      "category": "games"
    },
    {
      "id": "9297baf2-0eb3-41c5-865d-526247414f6f",
      "name": "YouCollect",
      "description": "Collect, sell and compete for your favorite unique",
      "fullDescription": "Collect, sell and compete for your favorite unique crypto currency tokens",
      "logo": "",
      "website": "http://www.youcollect.co/",
      "chain": "ethereum",
      "category": "games"
    },
    {
      "id": "50a673be-6052-4531-823a-0e80ff1d92aa",
      "name": "Crypto Sprites",
      "description": "Earn further income from your Crypto Kitties\t",
      "fullDescription": "Earn further income from your Crypto Kitties\t",
      "logo": "",
      "website": "https://www.CryptoSprites.com",
      "chain": "ethereum",
      "category": "games"
    },



    {
      "id": "c5951c10-7855-469c-8d2c-a36be896b5b0",
      "name": "CryptoSports",
      "description": "CryptoSports™ is the first fantasy sports and spor",
      "fullDescription": "CryptoSports™ is the first fantasy sports and sports gaming platform completely implemented on the blockchain. CryptoSports™ is based on an ownership model where participants buy and sell collectable Player Tokens representing real-world professional athletes in major league sports. A participant's ownership of Player Tokens is immutably recorded on the Ethereum blockchain. A participant can assemble a team using the Player Tokens they own and enter this team into fantasy sports contests to win Ξeth based on their team's performance in real world games.",
      "logo": "",
      "website": "http://www.cryptosports721.com?utm_medium=preferred&utm_campaign=launch",
      "chain": "ethereum",
      "category": "games"
    },
    {
      "id": "94f374a0-e1d1-4739-913f-f3e7dfeb479d",
      "name": "Cryptoplaces",
      "description": "CryptoPlaces is a game that lets anyone buy and ow",
      "fullDescription": "CryptoPlaces is a game that lets anyone buy and own Places as Smart Contracts on the Ethereum Blockchain. As soon as you acquire a smart contract, you take it's ownership and it automatically increases in price. Owners can post anything they like on the contract's wall.",
      "logo": "",
      "website": "https://www.cryptoplaces.io",
      "chain": "ethereum",
      "category": "games"
    },


    {
      "id": "51b737b7-a1ff-4a81-908a-73a860de82f7",
      "name": "CryptoCities.net",
      "description": "Discover, Collect & Trade Crypto Cities",
      "fullDescription": "Discover, Collect & Trade Crypto Cities",
      "logo": "",
      "website": "https://cryptocities.net/",
      "chain": "ethereum",
      "category": "games"
    },
    {
      "id": "6127a60c-ad5a-41a6-b099-e49d2d828aba",
      "name": "Crypto Tulips",
      "description": "Digital tulips on Ethereum Blockchain",
      "fullDescription": "Digital tulips on Ethereum Blockchain",
      "logo": "",
      "website": "https://cryptotulips.me/",
      "chain": "ethereum",
      "category": "games"
    },
    {
      "id": "8a663227-0901-4645-8908-b0434cebfe7b",
      "name": "Aethia.co",
      "description": "Ethergotchi",
      "fullDescription": "Ethergotchi",
      "logo": "",
      "website": "https://aethia.co/",
      "chain": "ethereum",
      "category": "games"
    },
    {
      "id": "fba4817f-a8b6-4ab7-959a-17c68bddd9f5",
      "name": "CryptoHorse",
      "description": "CryptoHorse ECOSYSTEM\nwww.CryptoHorse.ch is the fi",
      "fullDescription": "CryptoHorse ECOSYSTEM\nwww.CryptoHorse.ch is the first block chain platform in the world where you can buy, sell, collect, breed & race horses as well as develop their community.\nCryptoHorses are digital collectible horses which are created on Ethereum Blockchain. Each horse is unique not only in its appearance or colour but their genetic composition is different which shall be stored on the block chain. They have 9 different colours and 35 different attributes.\nThese CryptoHorses are not just collectible rather they can be bought and sold for Ethereum or bred to create new horses that have varying degree of traits of its parents. Depending on the traits they acquire from its parents, they can be sold or traded on Ethereum blockchain.\nEach CryptoHorse have a particular gender – it can either be a mare or a stallion.\nInitially there shall be 20,000 Gen-0 horses that will be created and stored on Ethereum block chain. There is no provision for creating new horses after the initial 20,000 Gen-0 horses are sold.\nEach of the 20,000 horse is unique and has a price depending on its colour and attribute. Some attributes are rare and some are common. Rarer the attributes, higher is the price.\nThe price of a horse is determined on the basis of following attributes:\n1. Generation 2. Appearance\n3. Colour 4. Name\n5. Special features 6. Speed\n7. Fertility",
      "logo": "",
      "website": "http://www.cryptohorse.ch/",
      "chain": "ethereum",
      "category": "games"
    },
    {
      "id": "e2d76f78-8a1d-4450-b387-1d0249f72185",
      "name": "Etherions",
      "description": "Collectible dragons with a battle system",
      "fullDescription": "Collectible dragons with a battle system",
      "logo": "",
      "website": "http://www.etherions.com/",
      "chain": "ethereum",
      "category": "games"
    },
    {
      "id": "68c5f77d-fe9b-4609-b35e-f813a5811bea",
      "name": "CryptoSpinners",
      "description": "Collect, Trade, and Battle Fidget Spinners on the ",
      "fullDescription": "Collect, Trade, and Battle Fidget Spinners on the Ethereum Blockchain",
      "logo": "",
      "website": "http://cryptospinners.org/",
      "chain": "ethereum",
      "category": "games"
    },
    {
      "id": "40739c5b-30c5-4bf1-a6e7-fd4a10500fca",
      "name": "CryptoCuddles",
      "description": "The CryptoKitties Battle Game",
      "fullDescription": "The CryptoKitties Battle Game",
      "logo": "",
      "website": "https://cryptocuddles.com",
      "chain": "ethereum",
      "category": "games"
    },



    {
      "id": "a9c68826-ff6c-410a-a101-be3240b24ef2",
      "name": "KimJongCrypto",
      "description": "Kim Jong Crypto is a blockchain collectible dApp w",
      "fullDescription": "Kim Jong Crypto is a blockchain collectible dApp where you can trade virtual erc-20 virtual images of the fearless leader of North Korea Kim Jong Un.",
      "logo": "",
      "website": "http://www.kimjongcrypto.com/",
      "chain": "ethereum",
      "category": "games"
    },


    {
      "id": "e6be7f27-e105-4cf5-9a47-39540006daeb",
      "name": "EmojiBlockchain",
      "description": "Collect and trade emoji on the Ethereum blockchain",
      "fullDescription": "Collect and trade emoji on the Ethereum blockchain",
      "logo": "",
      "website": "https://emojiblockchain.co/",
      "chain": "ethereum",
      "category": "games"
    },


    {
      "id": "77e92961-80fa-4e0c-a430-f4abc01e105d",
      "name": "EtherSpace",
      "description": "EtherSpace is a brand new kind of game that runs o",
      "fullDescription": "EtherSpace is a brand new kind of game that runs on blockchain technology. All celestial objects available on our site are stored on the Ethereum blockchain as ERC721 tokens. Each token is one-of-a-kind and represents a particular astronomical object. The price of each token increases with each transaction. When you buy a token, watch out: anyone can take it away from you by paying up to double what you paid.",
      "logo": "",
      "website": "http://etherspace.tech/",
      "chain": "ethereum",
      "category": "games"
    },
    {
      "id": "d32bc8ba-38fe-441c-a41b-2cab4199e3f8",
      "name": "CryptoMasterpieces",
      "description": "Buy and Trade One-of-a-Kind Collectible Artworks P",
      "fullDescription": "Buy and Trade One-of-a-Kind Collectible Artworks Powered by Blockchain Technology",
      "logo": "",
      "website": "http://www.cryptomasterpieces.com",
      "chain": "ethereum",
      "category": "games"
    },


    {
      "id": "f68765eb-c3ed-4620-91e6-b589d7c181b2",
      "name": "Crypto Mayor",
      "description": "A Crypto Collectible Game trading cities as the Ma",
      "fullDescription": "A Crypto Collectible Game trading cities as the Mayor. ",
      "logo": "",
      "website": "https://www.cryptomayor.io",
      "chain": "ethereum",
      "category": "games"
    },
    {
      "id": "1016b961-b027-4fa1-b70a-a7a86e9256c5",
      "name": "Crypto Politicians",
      "description": "",
      "fullDescription": "",
      "logo": "",
      "website": "https://cryptopoliticians.co",
      "chain": "ethereum",
      "category": "games"
    },
    {
      "id": "229351e6-3bba-42f3-bfc0-3e86970848cf",
      "name": "S0lar System For Sale",
      "description": "Buy and sell planets and moons in our solar system",
      "fullDescription": "Buy and sell planets and moons in our solar system. Increase or decrease the price, update the sales, and see if you can flip your favorite planet.",
      "logo": "",
      "website": "http://planets4sale.com/",
      "chain": "ethereum",
      "category": "games"
    },
    {
      "id": "ee124d43-035b-4e37-89d1-e5a3a12ba1d1",
      "name": "Ether Basketball",
      "description": "Purchase NBA teams on the blockchain",
      "fullDescription": "Purchase NBA teams on the blockchain",
      "logo": "",
      "website": "http://etherbasketball.co/",
      "chain": "ethereum",
      "category": "games"
    },
    {
      "id": "e035405e-bbc0-4a50-b6ef-9bec0babc745",
      "name": "Crypland",
      "description": "Crypland is a virtual land full of various assets ",
      "fullDescription": "Crypland is a virtual land full of various assets that you can own. Some assets are rare while some can be common. Each asset has a worth which determines how valuable it is.",
      "logo": "",
      "website": "https://crypland.com/",
      "chain": "ethereum",
      "category": "games"
    },
    {
      "id": "b06c8d70-f45d-4cc2-9a4b-653e1808fd69",
      "name": "CryptoHero",
      "description": "",
      "fullDescription": "",
      "logo": "",
      "website": "http://cryptohero.pro/",
      "chain": "ethereum",
      "category": "games"
    },
    {
      "id": "29764e73-f0fd-40a4-993c-9df7d0495a90",
      "name": "Ether#COLOR",
      "description": "the colorful ΞETH investing game",
      "fullDescription": "the colorful ΞETH investing game",
      "logo": "",
      "website": "https://ethercolors.co",
      "chain": "ethereum",
      "category": "games"
    },
    {
      "id": "533896f2-6232-41bb-aca8-96cf91223771",
      "name": "IAmCryptoRich",
      "description": "Exclusive platform for rich people.",
      "fullDescription": "Exclusive platform for rich people.",
      "logo": "",
      "website": "https://iamcryptorich.com/",
      "chain": "ethereum",
      "category": "games"
    },


    {
      "id": "7f3200f9-68de-407e-a368-556e1f16c0e3",
      "name": "50 Shades of Ether",
      "description": "the boring grey ΞETH investment game",
      "fullDescription": "the boring grey ΞETH investment game",
      "logo": "",
      "website": "http://50shades.ethercolors.co",
      "chain": "ethereum",
      "category": "games"
    },


    {
      "id": "854b5983-1d8b-4b38-9ac6-271ded6037ef",
      "name": "Crypto Colors",
      "description": "Trade your favourite colors!",
      "fullDescription": "Trade your favourite colors!",
      "logo": "",
      "website": "https://www.cryptocolors.xyz/",
      "chain": "ethereum",
      "category": "games"
    },
    {
      "id": "5e9ced6a-848f-4518-a8d6-4c26d872a5c2",
      "name": "BitGallery",
      "description": "Blockhain art gallery where you can purchase uniqu",
      "fullDescription": "Blockhain art gallery where you can purchase unique collectible tokens of world famous art items with proof of token ownership stored on the Ethereum blockchain.",
      "logo": "",
      "website": "http://www.bitgallery.co/",
      "chain": "ethereum",
      "category": "games"
    },
    {
      "id": "616f705d-9fea-48ba-9179-352c82519633",
      "name": "KingLovin",
      "description": "Become King or be Dethroned for a x2 return",
      "fullDescription": "Become King or be Dethroned for a x2 return",
      "logo": "",
      "website": "https://kinglovin.com",
      "chain": "ethereum",
      "category": "games"
    },
    {
      "id": "a9c872e3-7c4c-4a57-87d8-8a2c4cf1b180",
      "name": "EtherWaifus",
      "description": "Craft and trade beautiful arts on the Ethereum blockchain!",
      "fullDescription": "<p>Etherwaifu is a game where you collect craftable artworks. Each artwork has thousands of unique variations, and you can craft a new one by combining traits of other artworks you own.</p>\n<p>See the magic yourself! Click on the artworks below multiple times to see some variations of it.</p>",
      "logo": "https://dashboard-assets.dappradar.com/document/98/etherwaifus-dapp-games-ethereum-logo_453d037b037eb19f79a030d21a4ea9c5.png",
      "website": "https://etherwaifu.com",
      "chain": "ethereum",
      "category": "games"
    },
    {
      "id": "2f491988-b4bf-445e-9bf6-2d249caca819",
      "name": "CryptoMines.PRO",
      "description": "Blockchain game about investing and mining. Via Et",
      "fullDescription": "Blockchain game about investing and mining. Via Ethereum Smart Contract.",
      "logo": "",
      "website": "https://cryptomines.pro",
      "chain": "ethereum",
      "category": "games"
    },
    {
      "id": "79dc9440-1099-4de5-930f-87ecd4825718",
      "name": "CryptoTubers",
      "description": "Buy your favourite internet personalities!",
      "fullDescription": "Buy your favourite internet personalities!",
      "logo": "",
      "website": "https://cryptotubers.co/",
      "chain": "ethereum",
      "category": "games"
    },
    {
      "id": "41df56a4-cc4f-41b4-86b6-60980632e72b",
      "name": "CryptoEmoji",
      "description": "A Tycoon-style game built around the concept we co",
      "fullDescription": "A Tycoon-style game built around the concept we coined as #Emojinomics. In this game, the player must compete with other players to acquire resources (?, ?, ?), craft unique products consuming resources (??⚡? - “Do Androids Dream of Electric Sheep”), or HODL for a later opportunity.",
      "logo": "",
      "website": "http://www.cryptoemoji.io/",
      "chain": "ethereum",
      "category": "games"
    },
    {
      "id": "fbe12721-9242-4bed-8406-869eabcf3c5b",
      "name": "EtherPrincesses",
      "description": "Purchase your favorite Disney princesses on the bl",
      "fullDescription": "Purchase your favorite Disney princesses on the blockchain",
      "logo": "",
      "website": "http://etherprincesses.co/",
      "chain": "ethereum",
      "category": "games"
    },
    {
      "id": "4c84e973-2ef1-4da0-a696-2e3b52092a61",
      "name": "Treethereum",
      "description": "Grow a 3D generated tree",
      "fullDescription": "Grow a 3D generated tree",
      "logo": "",
      "website": "https://www.treethereum.com/",
      "chain": "ethereum",
      "category": "games"
    },
    {
      "id": "9cfc62c2-b92a-4427-86c8-d8396112a204",
      "name": "CryptoGit",
      "description": "Famous open source projects as Blockchain Smart Co",
      "fullDescription": "Famous open source projects as Blockchain Smart Contracts! Own tokens, make money and support maintainers!\n\nWhen you purchase a Card, the card is instantly re-listed for sale at a higher price!\n\nIf someone buys your card from you - you get paid up to double the amount you originally invested in ETH!\n\n4% of profits goes to project maintainers!",
      "logo": "",
      "website": "https://cryptogit.co",
      "chain": "ethereum",
      "category": "games"
    },
    {
      "id": "5ce9c714-1680-48ba-9ebc-4234c74fdde0",
      "name": "EtherEmojis",
      "description": "The original emoji game on the blockchain ",
      "fullDescription": "The original emoji game on the blockchain ",
      "logo": "",
      "website": "http://etheremojis.co/",
      "chain": "ethereum",
      "category": "games"
    },
    {
      "id": "d443c619-b582-4cb4-b58c-2e272d986d56",
      "name": "EtherMeals",
      "description": "Purchase your favorite DOG on the blockchain",
      "fullDescription": "Purchase your favorite DOG on the blockchain",
      "logo": "",
      "website": "http://ethermeals.co/",
      "chain": "ethereum",
      "category": "games"
    },
    {
      "id": "932ea514-78e3-43a9-bf59-0f8f3e87243d",
      "name": "CryptoSaga",
      "description": "CryptoSaga is a decentralized RPG",
      "fullDescription": "CryptoSaga is a decentralized RPG",
      "logo": "",
      "website": "https://CryptoSaga.io",
      "chain": "ethereum",
      "category": "games"
    },
    {
      "id": "87e39bda-0adb-4901-85da-61ff816efbdb",
      "name": "EtherMeta",
      "description": "The cryptogame where you can own your favorite cry",
      "fullDescription": "The cryptogame where you can own your favorite cryptogames.",
      "logo": "",
      "website": "http://ethermeta.co/",
      "chain": "ethereum",
      "category": "games"
    },
    {
      "id": "0987742a-7869-4261-a570-d4121af9e147",
      "name": "CryptoStamps",
      "description": "CryptoStamps is the first secured trading platform",
      "fullDescription": "CryptoStamps is the first secured trading platform integrated with the Ethereum blockchain, where people can Collect, Trade and Mine their digital stamps like traditional postal stamps on the blockchain. Each CryptoStamp is one-of-a-kind and 100% owned by you unless you get 2X profit and it cannot be replicated or destroyed",
      "logo": "",
      "website": "https://www.cryptostamps.co/",
      "chain": "ethereum",
      "category": "games"
    },
    {
      "id": "b38037aa-453d-4f46-ac69-c7983c68b1bf",
      "name": "Crypto Waifus",
      "description": "Buy, own, trade and touch your favorite anime char",
      "fullDescription": "Buy, own, trade and touch your favorite anime characters!",
      "logo": "",
      "website": "http://crypto-waifus.com/",
      "chain": "ethereum",
      "category": "games"
    },


    {
      "id": "500400d1-e92f-43f6-b49f-a265730ed487",
      "name": "MetaGame",
      "description": "Own your favorite Dapp",
      "fullDescription": "Own your favorite Dapp",
      "logo": "",
      "website": "https://meta.quazr.io",
      "chain": "ethereum",
      "category": "games"
    },
    {
      "id": "b0a5e618-b7a1-46be-a461-e67445d17a40",
      "name": "Rare Claims",
      "description": "Only 6 Tokens. 50% up on sale. 25% down every 5 ho",
      "fullDescription": "Only 6 Tokens. 50% up on sale. 25% down every 5 hours without a sale! = Self sustainable",
      "logo": "",
      "website": "https://rare.claims/",
      "chain": "ethereum",
      "category": "games"
    },
    {
      "id": "ec074079-2a86-42f3-81e6-77254eec1c0b",
      "name": "Puppychain",
      "description": "A blockchain based puppy game for the Chinese new ",
      "fullDescription": "A blockchain based puppy game for the Chinese new year of dog 2018",
      "logo": "",
      "website": "http://puppychain.co/",
      "chain": "ethereum",
      "category": "games"
    },
    {
      "id": "94d1bb77-18c4-41a6-b375-40b4efda3054",
      "name": "CryptoMovies",
      "description": "Your favorite movies on Ethereum Blockchain",
      "fullDescription": "Your favorite movies on Ethereum Blockchain",
      "logo": "",
      "website": "https://www.cryptomovies.co",
      "chain": "ethereum",
      "category": "games"
    },
    {
      "id": "9437cda8-2cca-4ce4-80e3-5e23ccf82e27",
      "name": "Candy Claims",
      "description": "Claim candy in this sweet self sustainable investm",
      "fullDescription": "Claim candy in this sweet self sustainable investment game",
      "logo": "",
      "website": "https://candy.claims",
      "chain": "ethereum",
      "category": "games"
    },
    {
      "id": "1ff73557-8e4e-4220-b76e-1958b9de1b1f",
      "name": "CryptoPizza",
      "description": "What is CryptoPizza?\nCryptoPizza is an Ethereum ga",
      "fullDescription": "What is CryptoPizza?\nCryptoPizza is an Ethereum game based on what 99.7% of the world population love the most, Pizza!",
      "logo": "",
      "website": "https://cryptopizza.io/",
      "chain": "ethereum",
      "category": "games"
    },


    {
      "id": "e00a42b1-d199-4f93-8fa5-4903775ff75f",
      "name": "Ether Estates",
      "description": "Become a Real Estate Mogul on the Ethereum Blockch",
      "fullDescription": "Become a Real Estate Mogul on the Ethereum Blockchain. ",
      "logo": "",
      "website": "https://etherestates.io",
      "chain": "ethereum",
      "category": "games"
    },
    {
      "id": "263544d9-4f1d-4a02-a24e-aa752ddc0cf4",
      "name": "CryptoCelebrity",
      "description": "A platform where you can buy digital celebrities.",
      "fullDescription": "A platform where you can buy digital celebrities.",
      "logo": "",
      "website": "http://cryptocelebrity.net/",
      "chain": "ethereum",
      "category": "games"
    },
    {
      "id": "706e7f9a-7ea7-45fc-9217-dade04a83438",
      "name": "CryptoMemes",
      "description": "CryptoMemes allows people to trade Memes on the bl",
      "fullDescription": "CryptoMemes allows people to trade Memes on the blockchain. Users can buy a meme like pepe, nyancat etc., and get profited when someone else buys them from the users.",
      "logo": "",
      "website": "http://cryptomemes.lol",
      "chain": "ethereum",
      "category": "games"
    },
    {
      "id": "7c36bfd7-a056-4606-9d16-94e6ef95782f",
      "name": "Crypto Burrito",
      "description": " ",
      "fullDescription": " ",
      "logo": "",
      "website": "http://cryptoburrito.co",
      "chain": "ethereum",
      "category": "games"
    },


    {
      "id": "c1bcb7bf-9a2a-40a5-9454-2b97aa890597",
      "name": "ETHMap",
      "description": "ETHMap displays a world map with 178 countries. Yo",
      "fullDescription": "ETHMap displays a world map with 178 countries. You can become owner of any country and sell it afterward !",
      "logo": "",
      "website": "https://willdn.github.io/ETHMap",
      "chain": "ethereum",
      "category": "games"
    },
    {
      "id": "3e6059ce-53b9-4c05-a090-8e04d5c7b39f",
      "name": "CryptoT",
      "description": "Hot Potato team ownership game with no comissions",
      "fullDescription": "Hot Potato team ownership game with no comissions",
      "logo": "",
      "website": "https://cryptot.co/",
      "chain": "ethereum",
      "category": "games"
    },
    {
      "id": "3524fedb-a2b4-4725-be8e-7be848c9994c",
      "name": "Social Media Market",
      "description": "Game where you purchase digital social media asset",
      "fullDescription": "Game where you purchase digital social media assets, leave a message, and make profit when the asset is purchased from you.",
      "logo": "",
      "website": "http://www.cryptosocialmedia.net/",
      "chain": "ethereum",
      "category": "games"
    },
    {
      "id": "6460dd2a-29b8-49ef-8f83-60827bf8cde6",
      "name": "9Nine",
      "description": "A slow game for slow days ...",
      "fullDescription": "A slow game for slow days ...",
      "logo": "",
      "website": "https://ni9.bid/",
      "chain": "ethereum",
      "category": "games"
    },
    {
      "id": "8e418aff-d860-447f-b409-310ea3830c2a",
      "name": "CryptoKiddyToys",
      "description": "Collectible crypto toys",
      "fullDescription": "Collectible crypto toys",
      "logo": "",
      "website": "https://cryptokiddytoys.store",
      "chain": "ethereum",
      "category": "games"
    },
    {
      "id": "7eb8e2d5-1cad-4a38-a441-b304f004eecb",
      "name": "Cryptoconsole",
      "description": " ",
      "fullDescription": " ",
      "logo": "",
      "website": "https://cryptoconsole.trade/",
      "chain": "ethereum",
      "category": "games"
    },
    {
      "id": "2e0ea2bd-31bb-42be-9939-cb8bfe2acf8b",
      "name": "CryptoHoroscope",
      "description": " ",
      "fullDescription": " ",
      "logo": "",
      "website": "https://cryptohoroscope.trade/",
      "chain": "ethereum",
      "category": "games"
    },
    {
      "id": "837902d3-3e49-4681-86f1-9f58b5c13e3b",
      "name": "CryptoPhones",
      "description": " ",
      "fullDescription": " ",
      "logo": "",
      "website": "https://cryptophones.trade",
      "chain": "ethereum",
      "category": "games"
    },
    {
      "id": "a93ed4e2-2fb5-485d-bcbf-0fc9c3d7c835",
      "name": "Ether Dragon Ball Z",
      "description": "Grab your favorite Dragon Ball Z hero on the Block",
      "fullDescription": "Grab your favorite Dragon Ball Z hero on the Blockchain. Earn 2x when your hero is purchased by other player and 10% commission from every sale of your hero in Tournament of Power if you are last owner before the tournament kicks start",
      "logo": "",
      "website": "https://etherdragonball.com",
      "chain": "ethereum",
      "category": "games"
    },
    {
      "id": "f9e8dbfa-6626-43b7-b67e-bad3b98bf796",
      "name": "EtherVillains",
      "description": "Bad ass collectibles with real powers.",
      "fullDescription": "Bad ass collectibles with real powers.",
      "logo": "",
      "website": "https://ethervillains.co",
      "chain": "ethereum",
      "category": "games"
    },
    {
      "id": "18f3d972-2466-4d16-9d87-f437139d594d",
      "name": "BOMBS.win",
      "description": "Better dont make it explode.",
      "fullDescription": "Better dont make it explode.",
      "logo": "",
      "website": "https://bombs.win/",
      "chain": "ethereum",
      "category": "games"
    },
    {
      "id": "6aa0cb2d-d945-4f35-ace8-e1d18a71b718",
      "name": "Crypto Kotaku",
      "description": "Buy Video Games on Blockchain",
      "fullDescription": "Buy Video Games on Blockchain",
      "logo": "",
      "website": "https://cryptokotaku.trade/",
      "chain": "ethereum",
      "category": "games"
    },
    {
      "id": "23c69401-82cb-4f11-8519-a95fc521d534",
      "name": "EtherAthletes.io",
      "description": "",
      "fullDescription": "",
      "logo": "",
      "website": "https://etherathletes.io/",
      "chain": "ethereum",
      "category": "games"
    },
    {
      "id": "cd1be647-adb4-42c3-b2ed-7d13679239da",
      "name": "CryptoSoccer",
      "description": "CryptoSoccer is an Ethereum game based on what 99.",
      "fullDescription": "CryptoSoccer is an Ethereum game based on what 99.7% of the world population love the most, Team!",
      "logo": "",
      "website": "https://soccer.4dapp.io/",
      "chain": "ethereum",
      "category": "games"
    },
    {
      "id": "ace02613-b0e0-4458-85b2-7841cc6746d4",
      "name": "CryptoWatches",
      "description": "CryptoWatches is an Ethereum game based on what 99",
      "fullDescription": "CryptoWatches is an Ethereum game based on what 99.7% of the world population love the most, Watches!",
      "logo": "",
      "website": "https://cryptowatches.trade/",
      "chain": "ethereum",
      "category": "games"
    },
    {
      "id": "217c92c0-4c7a-4913-a2e9-95b19921c78e",
      "name": "CryptoElections",
      "description": "CryptoElections is a game about leading the countr",
      "fullDescription": "CryptoElections is a game about leading the countries by running an election campaign in cities. The more electorate live the city — the more votes you get. Once you get the majority — you become a president. The aim is to become a president in as many countries as possible.\n\nPresident will get 1% commission fee from every transaction in his country.\n\nIf you are the mayor of the city and someone wants to beat you will get up to 2 times more you paid.",
      "logo": "",
      "website": "http://www.cryptoelections.com/",
      "chain": "ethereum",
      "category": "games"
    },
    {
      "id": "ec29ad87-89d1-4d39-9715-ee2c5cd881c9",
      "name": "EthPizzeria Online",
      "description": "You can buy, than change your pizza for two with p",
      "fullDescription": "You can buy, than change your pizza for two with price divided by 2",
      "logo": "",
      "website": "https://ethpizzeria.online/",
      "chain": "ethereum",
      "category": "games"
    },
    {
      "id": "bfa23631-3218-4556-ab0d-ffc33eff1457",
      "name": "KittyEthPics",
      "description": "Buy a kitty pics and change for TWO new. Be the re",
      "fullDescription": "Buy a kitty pics and change for TWO new. Be the recipient of the dividend (10%)",
      "logo": "",
      "website": "https://kittyethpics.store/",
      "chain": "ethereum",
      "category": "games"
    },
    {
      "id": "7373d1d9-a714-4363-b285-8049b9523619",
      "name": "HypeFork",
      "description": "307% profit machine!",
      "fullDescription": "307% profit machine!",
      "logo": "",
      "website": "http://hypefork.bid/",
      "chain": "ethereum",
      "category": "games"
    },
    {
      "id": "90fd96ec-a503-461c-ab9f-b2631d357446",
      "name": "Avocado's MMO Clicker",
      "description": "If you have played AdVenture Capitalist or Univers",
      "fullDescription": "If you have played AdVenture Capitalist or Universal Paperclips you will love Avocado's MMO Clicker.",
      "logo": "",
      "website": "https://avocadotoken.com/games/clicker",
      "chain": "ethereum",
      "category": "games"
    },
    {
      "id": "c19f2cd2-8590-4db8-bcef-351455ae3f4b",
      "name": "CryptoSportStars",
      "description": "Collect and trade star athlete Smart Contracts. Ea",
      "fullDescription": "Collect and trade star athlete Smart Contracts. Earn when someone is betting on the athlete you own.",
      "logo": "",
      "website": "http://cryptosportstars.co",
      "chain": "ethereum",
      "category": "games"
    },
    {
      "id": "f7e77f6f-0cf6-4b9b-bba1-20b4214e84e3",
      "name": "EtherIslands",
      "description": "EtherIslands is a decentralized islands war game c",
      "fullDescription": "EtherIslands is a decentralized islands war game created on the Ethereum Blockchain with smart contracts. Only here can you control islands and wage war on other players in hopes of obtaining treasure from their treasuries.",
      "logo": "",
      "website": "https://etherislands.com/",
      "chain": "ethereum",
      "category": "games"
    },


    {
      "id": "4e2261a1-51f8-4f18-bcb7-7265fe76d7ff",
      "name": "CryptoGods",
      "description": "Own CryptoGods and Mine God-Power-Coin (GPC).",
      "fullDescription": "Own CryptoGods and Mine God-Power-Coin (GPC).",
      "logo": "",
      "website": "http://cryptogods.trade",
      "chain": "ethereum",
      "category": "games"
    },
    {
      "id": "f12c8858-3058-4b21-8d78-9823e05bd317",
      "name": "Crypto Dynasty",
      "description": "Start you Chiese History Dynasty on CryptoDynasty!",
      "fullDescription": "Start you Chiese History Dynasty on CryptoDynasty!",
      "logo": "",
      "website": "https://cryptodynasty.online",
      "chain": "ethereum",
      "category": "games"
    },
    {
      "id": "a3080bba-dd08-4853-8b80-8075e21c908c",
      "name": "Triple",
      "description": "Triple Your ETH Investment",
      "fullDescription": "Triple Your ETH Investment",
      "logo": "",
      "website": "https://triple.live",
      "chain": "ethereum",
      "category": "games"
    },
    {
      "id": "6f70fb63-7e9c-4175-a9d8-0302a1da9ab7",
      "name": "AVStars.io",
      "description": "",
      "fullDescription": "",
      "logo": "",
      "website": "https://avstars.io/",
      "chain": "ethereum",
      "category": "games"
    },
    {
      "id": "b6f21baf-f105-4126-a104-c638ea2f8d10",
      "name": "TheNextBlock",
      "description": "The Next Block is a blockchain game, where player ",
      "fullDescription": "The Next Block is a blockchain game, where player predicts which miner will mine his transaction.\n\nPlayer can place 1 bet per block. If a player predicts the correct miner, he earns 1 point. The game lasts till someone gets to 3 points, winner gets 70% of prize pool, 20% will be collected to the next prize pool.  \n\nGame Rules:\nIf player doesn’t predict the correct block miner, he will lose all points or if other player wins the prize pool all other players points reduce to 0.\nPlayers bets are collected to the prize pool plus the 20% from the previous pool.\nPlayers can skip the blocks without losing points.",
      "logo": "",
      "website": "https://thenextblock.github.io/",
      "chain": "ethereum",
      "category": "games"
    },
    {
      "id": "a0849472-f903-4e31-97dc-8f6ff412bfaa",
      "name": "Ether Cities",
      "description": "Be mayor of the city on the blockchain",
      "fullDescription": "Be mayor of the city on the blockchain",
      "logo": "",
      "website": "https://ethercities.net/",
      "chain": "ethereum",
      "category": "games"
    },
    {
      "id": "ce15890e-1fd3-46a8-aa71-e2cfa2f48ca0",
      "name": "MyEtherCity",
      "description": "Build your own city on the Ethereum blockchain and",
      "fullDescription": "Build your own city on the Ethereum blockchain and turn it into a booming metropolis. Will you be good enough to become the strongest mayor on the Blockchain?",
      "logo": "",
      "website": "https://myethercity.com/",
      "chain": "ethereum",
      "category": "games"
    },
    {
      "id": "16ac7865-4091-4981-90aa-6aa712ad212c",
      "name": "Mobsquads",
      "description": "Collect and fight rival gangs on the blockchain fo",
      "fullDescription": "Collect and fight rival gangs on the blockchain for loot and bonuses.",
      "logo": "",
      "website": "https://mobsquads.io",
      "chain": "ethereum",
      "category": "games"
    },
    {
      "id": "f56524e6-cfaa-4314-9354-6ea0978781c9",
      "name": "Crypto Pepe Market",
      "description": "Buy and trade Pepe cards with crypto. Low dev fees",
      "fullDescription": "Buy and trade Pepe cards with crypto. Low dev fees, and a pricing structure so everyone get's a slice.",
      "logo": "",
      "website": "http://www.cryptopepe.net/",
      "chain": "ethereum",
      "category": "games"
    },
    {
      "id": "4aef46a1-76f0-4617-a9d4-47fb035deaf2",
      "name": "Turfpool",
      "description": "Land rush the crypto world!",
      "fullDescription": "Land rush the crypto world!",
      "logo": "",
      "website": "https://map.turfpool.com/",
      "chain": "ethereum",
      "category": "games"
    },
    {
      "id": "b526d590-2678-42db-9325-d9ef9b2d05df",
      "name": "EthereumButton",
      "description": "",
      "fullDescription": "",
      "logo": "",
      "website": "https://ethereumbutton.com",
      "chain": "ethereum",
      "category": "games"
    },
    {
      "id": "8fc627e9-3bf9-43af-b3ec-5f952e02f115",
      "name": "Ether's Ark",
      "description": "Ether's Ark allows you to adopt the cutest pets ar",
      "fullDescription": "Ether's Ark allows you to adopt the cutest pets around in order to save them and repopulate the Earth's species! \n\nJust go to the Marketplace to begin adopting pets. After each adoption they will automatically be put up for adoption again with an increased cost, ensuring these special creatures end up with the most caring owner and past owners are compensated for the care they gave. \n\nEvery once in a while pets may get frisky. Make sure to check the Mates page frequently to see if one of your own is looking for a mate because adopting that mate would then birth an entirely new species to the world!",
      "logo": "",
      "website": "https://ethersark.com",
      "chain": "ethereum",
      "category": "games"
    },


    {
      "id": "1384e857-a193-4d19-a337-aa6f6327b6de",
      "name": "EtherPaint",
      "description": "",
      "fullDescription": "",
      "logo": "",
      "website": "http://etherpaint.tk/",
      "chain": "ethereum",
      "category": "games"
    },
    {
      "id": "0da148d6-665d-4423-84c3-d5ed3f11b54d",
      "name": "EtherWorld",
      "description": "What is ETHWORLD?\nETHWORLD is a game built on Ethe",
      "fullDescription": "What is ETHWORLD?\nETHWORLD is a game built on Ethereum that lets you own a completely unique blockchain representation of countries around the world. \nAfter purchasing a country, you'll start earning rent and the market price will automatically increase. ",
      "logo": "",
      "website": "https://ethworld.fun/",
      "chain": "ethereum",
      "category": "games"
    },
    {
      "id": "998cc75d-12fa-4cae-a3c1-82f0ec97676d",
      "name": "Cryptogs",
      "description": "Play pogs on the blockchain! Whip out your slammer",
      "fullDescription": "Play pogs on the blockchain! Whip out your slammer and get rad. ",
      "logo": "",
      "website": "https://cryptogs.io",
      "chain": "ethereum",
      "category": "games"
    },
    {
      "id": "c4c32060-f4c3-4eb0-a281-9aed64936d09",
      "name": "CryptoCompanies",
      "description": "Buy Your Favorite Company Smart Contracts on Block",
      "fullDescription": "Buy Your Favorite Company Smart Contracts on Blockchain",
      "logo": "",
      "website": "https://cryptocompanies.io/",
      "chain": "ethereum",
      "category": "games"
    },
    {
      "id": "8d1a51d1-9a00-4b5a-bae8-9c15bb5125e4",
      "name": "CryptoAlchemy.io",
      "description": "It’s great to own a digital kitty, a celebrity, or",
      "fullDescription": "It’s great to own a digital kitty, a celebrity, or even a whole country. But is it enough to satisfy your ambitions? Do you want to really make a mark on the world? Are you eager to lay your hands on the very building blocks of creation?\n\nThis is your chance to create something truly great. CryptoAlchemy.io is an open platform for alchemical experiments that is based on the blockchain technology. It is available to anyone and very easy to use.",
      "logo": "",
      "website": "https://cryptoalchemy.io",
      "chain": "ethereum",
      "category": "games"
    },
    {
      "id": "48bd7313-e905-4429-9eb1-3f59fc812708",
      "name": "EthKing",
      "description": "Bid to become King of the Hill and win the pot!",
      "fullDescription": "Bid to become King of the Hill and win the pot!",
      "logo": "",
      "website": "https://ethking.co",
      "chain": "ethereum",
      "category": "games"
    },
    {
      "id": "46555175-f5f2-4092-a5d3-49d1a8d0e767",
      "name": "CryptoRentCar",
      "description": "",
      "fullDescription": "",
      "logo": "",
      "website": "https://cryptorentcar.org",
      "chain": "ethereum",
      "category": "games"
    },
    {
      "id": "4d9e2ba2-0122-48db-b36a-04308d81764d",
      "name": "Cryptopinions",
      "description": "Cryptopinions lets you make Eth putting your opini",
      "fullDescription": "Cryptopinions lets you make Eth putting your opinions on the blockchain! Register opinions to collect small dividends on every transaction, or sponsor opinions to get an immediate payout when someone else sponsors it.",
      "logo": "",
      "website": "http://cryptopinions.net",
      "chain": "ethereum",
      "category": "games"
    },
    {
      "id": "b1522d21-94a6-4528-8e1b-4849308ea2b2",
      "name": "CoinStacks",
      "description": "Buy Coin. Double your ether!",
      "fullDescription": "Buy Coin. Double your ether!",
      "logo": "",
      "website": "https://coinstacks.co",
      "chain": "ethereum",
      "category": "games"
    },
    {
      "id": "a3e66bb6-e39d-4425-81eb-7e5f55826f2a",
      "name": "Myhero9",
      "description": "Battle upgrade card game",
      "fullDescription": "Battle upgrade card game",
      "logo": "",
      "website": "http://www.myhero9.com/",
      "chain": "ethereum",
      "category": "games"
    },
    {
      "id": "1113e460-8c26-4947-8922-298e7ce18c01",
      "name": "CryptoCars",
      "description": "CryptoCars is an Ethereum based blockchain game wh",
      "fullDescription": "CryptoCars is an Ethereum based blockchain game where you can earn ETH based on supercar tokens that you can buy and sell.",
      "logo": "",
      "website": "https://cryptocars.cc/",
      "chain": "ethereum",
      "category": "games"
    },
    {
      "id": "1911be5d-3192-4bb0-a56e-6a344e207f9d",
      "name": "CryptoPlanet",
      "description": "CryptoPlanet is the first universe-themed blockcha",
      "fullDescription": "CryptoPlanet is the first universe-themed blockchain game in the world.The solar system planets are currently listed, such as Earth, Venus and Uranus.As a contract of intelligence for ethereum, each planet will be uniquely registered in the etheric layer.You can conquer any available planet in the universe. After you get the planet, anyone else can buy or conquer all of your planets, as long as they pay you the new price calculated by the smart contract.",
      "logo": "",
      "website": "http://cryptoplanet.fun/",
      "chain": "ethereum",
      "category": "games"
    },
    {
      "id": "f4bfed6a-4f4f-4565-9d7c-7e0640db9d4c",
      "name": "Ether Japanese Pornstars",
      "description": "Ether Japanese Pornstars is an Ethereum based bloc",
      "fullDescription": "Ether Japanese Pornstars is an Ethereum based blockchain game where you can earn ETH based on girl tokens that you can buy and sell. Each time a Smart Contract is sold the price automatically increases for the next buyer, meaning the contract increases in value with each transaction.",
      "logo": "",
      "website": "https://ether-japs.com/",
      "chain": "ethereum",
      "category": "games"
    },
    {
      "id": "a4643587-12df-42e3-9049-fec8ea3df2f1",
      "name": "Ether Universe",
      "description": "Buy Stars, Planets and Moons in this Universe! Som",
      "fullDescription": "Buy Stars, Planets and Moons in this Universe! Some items have to share fees to other items. All fees are shared in a long chain until the chain reaches it's end! If someone else buys the item you've bought, you will always make profit!",
      "logo": "",
      "website": "https://etherguy.gitlab.io/EtherUniverse/",
      "chain": "ethereum",
      "category": "games"
    },
    {
      "id": "a0e63ea9-142a-4363-a256-9ce00977ef91",
      "name": "Crypto 3 kingdom",
      "description": "Collect your fighters & compete with other players",
      "fullDescription": "Collect your fighters & compete with other players for World dominance",
      "logo": "",
      "website": "http://cryptosanguo.io/",
      "chain": "ethereum",
      "category": "games"
    },
    {
      "id": "3cf7b43a-3233-4328-b6fa-cd1178979a58",
      "name": "cryptohongkong",
      "description": "",
      "fullDescription": "",
      "logo": "",
      "website": "https://cryptohongkong.io",
      "chain": "ethereum",
      "category": "games"
    },
    {
      "id": "69cd0258-17bf-4e15-a542-d22df47fb473",
      "name": "Own the Day",
      "description": "Own the Day on the Blockchain! Collectibles with i",
      "fullDescription": "Own the Day on the Blockchain! Collectibles with increasing value!",
      "logo": "",
      "website": "https://www.owntheday.io",
      "chain": "ethereum",
      "category": "games"
    },
    {
      "id": "59f4e4e3-ee55-4f2a-84a3-7a998fab423b",
      "name": "CryptoJackpot",
      "description": "Fun and easy Jackpot game",
      "fullDescription": "Fun and easy Jackpot game",
      "logo": "",
      "website": "http://www.cryptojackpot.co/",
      "chain": "ethereum",
      "category": "games"
    },
    {
      "id": "6a6499fc-6437-49dc-83a5-abfeb8d313df",
      "name": "CryptoEmojis",
      "description": "An emojis collectibles marketplace",
      "fullDescription": "An emojis collectibles marketplace",
      "logo": "",
      "website": "https://cryptoemojis.co",
      "chain": "ethereum",
      "category": "games"
    },
    {
      "id": "fc5d8844-bf0b-4d1a-8a87-9c7d4bc218fd",
      "name": "Ethopia",
      "description": "A game based loosely on the civilization games of ",
      "fullDescription": "A game based loosely on the civilization games of the past. Raise your population, collect resources and build your kingdom with everything from houses to castles. Trade items on the marketplace, or claim the throne (and taxes) by building the most advanced kingdom.",
      "logo": "",
      "website": "http://ethopia.net/",
      "chain": "ethereum",
      "category": "games"
    },
    {
      "id": "8b67bb00-7f6a-4830-b54a-3c22563a0348",
      "name": "ETHERNAUTS.co",
      "description": "A game of space exploration, capitalism, and profi",
      "fullDescription": "A game of space exploration, capitalism, and profit.",
      "logo": "",
      "website": "http://ethernauts.co",
      "chain": "ethereum",
      "category": "games"
    },
    {
      "id": "3984f3e8-aa0c-4721-af8b-45360d33de3b",
      "name": "Crypto Poop Game",
      "description": "Try you luck at flushing the toilet to win Ethereu",
      "fullDescription": "Try you luck at flushing the toilet to win Ethereum! Purchase poops to increase your chances ",
      "logo": "",
      "website": "http://www.cryptopoop.net/",
      "chain": "ethereum",
      "category": "games"
    },
    {
      "id": "b88b4050-4b16-42d1-b171-9586ae9d845e",
      "name": "Ethergarden",
      "description": "The first Cryptogarden on the Ethereum blockchain.",
      "fullDescription": "The first Cryptogarden on the Ethereum blockchain.",
      "logo": "",
      "website": "https://ethergarden.io",
      "chain": "ethereum",
      "category": "games"
    },
    {
      "id": "f8e94860-acb5-44d7-99ce-d3350f6d3249",
      "name": "Crypto Rides",
      "description": "Buy Lambos, Teslas, Ferraris etc.. and profit!",
      "fullDescription": "Buy Lambos, Teslas, Ferraris etc.. and profit!",
      "logo": "",
      "website": "https://cryptorides.net/",
      "chain": "ethereum",
      "category": "games"
    },
    {
      "id": "16efbc0d-8a8d-4823-ada0-ebca4391e4b2",
      "name": "CityMayor",
      "description": "What is CityMayor? It's an application that mixes ",
      "fullDescription": "What is CityMayor? It's an application that mixes assets (cities) with fungible tokens (CityCoins). The cities can be collected and traded for different amounts of ether while the CityCoins can be exchanged like any other ERC-20 Ethereum tokens. By holding cities you will receive tokens that you will be able to trade on any exchanges that will support it.",
      "logo": "",
      "website": "https://www.citymayor.co/",
      "chain": "ethereum",
      "category": "games"
    },
    {
      "id": "87dd1cd8-eb55-49c4-ace0-dc633d8ceb1b",
      "name": "Floating Towers",
      "description": "Floating Towers – Only one chance to play, don’t m",
      "fullDescription": "Floating Towers – Only one chance to play, don’t miss it",
      "logo": "",
      "website": "http://floatingtowers.com/",
      "chain": "ethereum",
      "category": "games"
    },
    {
      "id": "7c4fed2f-d538-408e-82a7-42dfd31ba3e3",
      "name": "CryptoPornstars",
      "description": "Collect and trade your favorite pornstars on the E",
      "fullDescription": "Collect and trade your favorite pornstars on the Ethereum blockchain.",
      "logo": "",
      "website": "https://cryptopornstars.co/",
      "chain": "ethereum",
      "category": "games"
    },
    {
      "id": "a5e475f4-993a-4dcd-8dc3-9531a97abc08",
      "name": "CryptoNumismat",
      "description": "Become a true Blockchain Numismat!",
      "fullDescription": "Become a true Blockchain Numismat!",
      "logo": "",
      "website": "https://cryptonumismat.com/",
      "chain": "ethereum",
      "category": "games"
    },
    {
      "id": "5da48dcd-7cd5-4799-a26d-0189d234eba0",
      "name": "ETH.TOWN!",
      "description": "Become a realtor buying out floors for certain cry",
      "fullDescription": "Become a realtor buying out floors for certain crypto-companies in a crypto-business tower!",
      "logo": "",
      "website": "https://eth.town/",
      "chain": "ethereum",
      "category": "games"
    },
    {
      "id": "b522f739-1a5b-405b-a498-d918a2f765fd",
      "name": "CryptoLibraries",
      "description": "A decentralized application built on the Ethereum ",
      "fullDescription": "A decentralized application built on the Ethereum network to help developers build better software.",
      "logo": "",
      "website": "https://cryptolibraries.io/",
      "chain": "ethereum",
      "category": "games"
    },
    {
      "id": "6c0febfa-71ce-4209-8e85-7ffdd95c8f44",
      "name": "CryptoSolarSystem",
      "description": "CryptoSolarSystem is your first step to own the un",
      "fullDescription": "CryptoSolarSystem is your first step to own the universe on the Blockchain!",
      "logo": "",
      "website": "https://www.cryptosolarsystem.cc/",
      "chain": "ethereum",
      "category": "games"
    },
    {
      "id": "51aa2919-38a0-4be1-b1af-02ff2826b97a",
      "name": "Crypto Surprise",
      "description": "Crypto Surprise is a game of surprises. There are ",
      "fullDescription": "Crypto Surprise is a game of surprises. There are many different types of Surprise Bags you can own. Each time you buy a Surprise Bag, its price rises. If someone snatches it from you, you get rewarded the profit. Only the owner can see the item inside, every Surprise Bag is unique.",
      "logo": "",
      "website": "https://cryptosurprise.me/",
      "chain": "ethereum",
      "category": "games"
    },
    {
      "id": "1e6f73f4-48c9-47c0-9e03-68f9b96f64f8",
      "name": "Infect the World",
      "description": "Mutate viruses and infect people to earn Ether",
      "fullDescription": "Mutate viruses and infect people to earn Ether",
      "logo": "",
      "website": "https://infect-the-world.github.io/",
      "chain": "ethereum",
      "category": "games"
    },
    {
      "id": "e755b21b-dd7c-43d6-89c8-1652389926aa",
      "name": "Item Market",
      "description": "In this DApp players can play multiple games. When",
      "fullDescription": "In this DApp players can play multiple games. When a game starts, the timer begins. If the timer hits zero, then the last player who bought gets all money in the pot. If someone buys, he will pay a part to the previous owner and also add something to the jackpot. The winner wins the jackpot if the timer is over! Note that jackpots are per item and not globally. Players are also allowed to create their own games and even collect fees on there. ",
      "logo": "",
      "website": "http://itemmarket.surge.sh/",
      "chain": "ethereum",
      "category": "games"
    },
    {
      "id": "58ef233b-565d-476b-bc82-94d6d2d516c1",
      "name": "Economeme",
      "description": "A collectible meme game that let's you create, buy",
      "fullDescription": "A collectible meme game that let's you create, buy, and sell your own unique meme tokens",
      "logo": "",
      "website": "https://economeme.io",
      "chain": "ethereum",
      "category": "games"
    },
    {
      "id": "7e8aa951-c01a-41b1-a559-5f1791e69e21",
      "name": "EthPiranha",
      "description": "Collect & breed crypto piranhas",
      "fullDescription": "Collect & breed crypto piranhas",
      "logo": "",
      "website": "https://ethpiranha.fun",
      "chain": "ethereum",
      "category": "games"
    },
    {
      "id": "f3b97661-56ec-4686-afc5-d7d85f1a1308",
      "name": "Blockchain Cuties",
      "description": "An NFT collectible game with adventures!",
      "fullDescription": "<p>Cutest collectible game with adventures on 7 blockchains where you get to play with puppies, dragons, bear cubs, cats, and other real and fantasy creatures alike!</p>",
      "logo": "https://dashboard-assets.dappradar.com/document/233/blockchaincuties-dapp-games-ethereum-logo_5c912cd893fc827dc32f052fea38b9bd.png",
      "website": "https://blockchaincuties.com/",
      "chain": "ethereum",
      "category": "games"
    },
    {
      "id": "2f7cd153-0776-4ba4-8d86-1d9dfe730408",
      "name": "Humanity Cards",
      "description": "humanity.cards is a game where you can collect and",
      "fullDescription": "humanity.cards is a game where you can collect and trade people that made history. An incoming battle system will make it possible for you to fight with your favorite historical personality. Cards are distributed randomly to users, some cards are extremely rare.",
      "logo": "",
      "website": "http://humanity.cards/",
      "chain": "ethereum",
      "category": "games"
    },
    {
      "id": "809cbfd3-5726-46a5-9b1d-b1eb85bda3d5",
      "name": "CryptoPhoenixes",
      "description": "A Strategic Team Based Trading Game!",
      "fullDescription": "A Strategic Team Based Trading Game!",
      "logo": "",
      "website": "http://www.cryptophoenixes.fun/",
      "chain": "ethereum",
      "category": "games"
    },
    {
      "id": "923d930f-b348-41fa-8e49-b4826b9cde5b",
      "name": "CryptoConquest",
      "description": "At CryptoConquest you conquer territories and buil",
      "fullDescription": "At CryptoConquest you conquer territories and build your own empire. The map is divided by historic regions.  Currently only selected European territories are added but more are coming. At this stage it is a collectible game where in order to conquer you need to pay the current price - the previous owner gets his initial investment back + profit.\nIn the next iteration we are implementing a new smart contract that will use ownership data from current. Here you'll be able to complete challenges. For example: Become Napoleon - conquer all of France - and get an ETH reward for it. All transactions are taxed 3% that goes into the prize pool. 3% is developer cut.\nAfter that, there will also be added a 'smart' element to the game so that pure buying won't be enough to conquer, but some sort of skill will be needed as well to earn more. Happy conquering and have fun!",
      "logo": "",
      "website": "https://cryptoconquest.io/",
      "chain": "ethereum",
      "category": "games"
    },
    {
      "id": "9df22c46-a892-4b64-9e9d-2d55a45b4271",
      "name": "Ether Las Vegas",
      "description": "In Ether Las Vegas you try to win a jackpot in the",
      "fullDescription": "In Ether Las Vegas you try to win a jackpot in the casino. You do this by buying chips. If someone else buys your chips, you've already made profit (more than 25%), but your target is the jackpot which you reach if you are the last buyer of an item if the timer reaches zero. The timer is reset if someone buys. At that point the price also increases.",
      "logo": "",
      "website": "https://ethlasvegas.surge.sh",
      "chain": "ethereum",
      "category": "games"
    },
    {
      "id": "9555ef2f-d48a-4bee-ab70-d5218c6baacd",
      "name": "EthernalGo",
      "description": "Decentralized multiplayer Go Game with Gameplay! P",
      "fullDescription": "Decentralized multiplayer Go Game with Gameplay! Play Go - Win Ether",
      "logo": "",
      "website": "https://www.ethernalgo.com/",
      "chain": "ethereum",
      "category": "games"
    },
    {
      "id": "d4dacf9d-0ec7-4302-add3-c45271c72aaf",
      "name": "MoonCatRescue",
      "description": "We are undertaking an Insanely Cute Operation to the moon to save the MoonCats from imminent danger, and we need your help. Are you ready to help?",
      "fullDescription": "<p>Rescue the MoonCats from the moon and bring them to live on the Ethereum blockchain, where they will be safe and live fulfilling MoonCat lives. We have designed a spaceship, with the latest in litterbox technology, that can fit up to 25,600 MoonCats. If you choose to come along, then it will be up to you to scan for and rescue MoonCats to the safety of the Ethereum blockchain!</p>\n<p>There are over 4 billion unique MoonCats possible. However, only 25,600 MoonCats can be added to the contract. This combination of mining with procedural generation allows for a unique experience that cannot be predicted before the contract is launched. Rescuers have the power to choose whether they want specific MoonCats to become part of the contract or not.</p>",
      "logo": "https://dashboard-assets.dappradar.com/document/240/mooncatrescue-dapp-games-ethereum-logo_120f6b333aefc98410b662f3081cd5be.png",
      "website": "https://mooncatrescue.com/",
      "chain": "ethereum",
      "category": "games"
    },
    {
      "id": "7caa03c2-0002-48e4-83ea-e45bdbc93569",
      "name": "Etherdate",
      "description": "Just-for-fun collectible where users can memoriali",
      "fullDescription": "Just-for-fun collectible where users can memorialize dates that are important to them.",
      "logo": "",
      "website": "http://etherdate.co/",
      "chain": "ethereum",
      "category": "games"
    },
    {
      "id": "ee024f9f-02a3-492a-a71f-78d3f9c84251",
      "name": "Fishbank",
      "description": "Fishbank is an extremely addictive blockchain batt",
      "fullDescription": "Fishbank is an extremely addictive blockchain battle game running on Ethereum smart contracts. Players are collecting, fighting and growing crypto fish to dominate the “decentralized food chain” and get rewards. Every game asset is an ERC-721 token stored in the Ethereum network that can be sold or transferred just like any other cryptocurrency. \n\nThere are two major ways to get a crypto fish token – buy from other players on the market or try to catch a random one in the ocean for a fixed fee. Catching a crypto fish in Fishbank is almost like fishing in real life — you never know what you’ll get. Chances to get uncommon fish are hardcoded in the open sourced smart contracts. \n\nFish tokens can be sold directly to other players on the integrated marketplace, seller receives price in Ether on his Ethereum wallet. Players can temporary boosts characteristic of their crypto fish tokens with Modifiers those can be found in Chests or traded on the market. Chests can also be earned by inviting friends.\n\nThe most powerful creatures in game are Whales. Only 14 of them were minted for the game. There shall be approx. 30000 ETH spent on catching a fish tokens to give the new Whale a birth. \n\nFishbank team recognizes its mission as creating a solid motivation to educate a wide range of users on how to use cryptocurrency and digital wallets in fun and convenient way.",
      "logo": "",
      "website": "https://fishbank.io/",
      "chain": "ethereum",
      "category": "games"
    },
    {
      "id": "655cfe7a-89cc-490d-9e64-653fdf2c2bd5",
      "name": "BlockStates",
      "description": "Dominate the USA on Blockchain!\nBuy US States as S",
      "fullDescription": "Dominate the USA on Blockchain!\nBuy US States as Smart Contracts using blockchain technology and take over the USA on BlockStates.",
      "logo": "",
      "website": "https://www.blockstates.io/",
      "chain": "ethereum",
      "category": "games"
    },
    {
      "id": "3a9fed01-935a-4e1a-870f-5d6b9cdc2694",
      "name": "Eth10k",
      "description": "",
      "fullDescription": "",
      "logo": "",
      "website": "https://www.eth10k.io",
      "chain": "ethereum",
      "category": "games"
    },
    {
      "id": "42112359-a1b8-4b23-a475-82cfb6d68edd",
      "name": "Cryptoleaders",
      "description": "CryptoLeaders, where players collect and trade his",
      "fullDescription": "CryptoLeaders, where players collect and trade historical figures as smart contracts on the Ethereum blockchain.",
      "logo": "",
      "website": "https://cryptoleaders.io/",
      "chain": "ethereum",
      "category": "games"
    },
    {
      "id": "35808666-59a7-4191-aee0-c384403a3835",
      "name": "Crypto Racing League",
      "description": "Race rare, collectible cars stored on the Ethereum",
      "fullDescription": "Race rare, collectible cars stored on the Ethereum blockchain. Build your personalized race car together from hundreds of parts, race other players for glory and prizes, win and become the best Crypto Racer in the world!",
      "logo": "",
      "website": "https://cryptoracingleague.io/",
      "chain": "ethereum",
      "category": "games"
    },
    {
      "id": "2ebf47ec-287a-40c1-85b7-d8d6f8f63f1b",
      "name": "Crypto-twitch.tv",
      "description": "Crypto-twitch.tv is a crypto-collectible game wher",
      "fullDescription": "Crypto-twitch.tv is a crypto-collectible game where players can become the owners of their favorite streamers and emotes. Permanent and fully decentralized chat on the blockchain without moderators! Twitch emotes are enabled!",
      "logo": "",
      "website": "https://crypto-twitch.tv/",
      "chain": "ethereum",
      "category": "games"
    },
    {
      "id": "d8ba8f29-26c1-4dc1-8f82-833a8cb458ca",
      "name": "Last Flip Wins & Low Risk Bag",
      "description": "The First Flipping Game where the last owner wins",
      "fullDescription": "The First Flipping Game where the last owner wins",
      "logo": "",
      "website": "http://www.lastflipwins.co/",
      "chain": "ethereum",
      "category": "games"
    },
    {
      "id": "9ff3f79f-de5e-417f-a923-151568d926b0",
      "name": "Ethero",
      "description": "Ethero is an  game based on Ethereum. The backgrou",
      "fullDescription": "Ethero is an  game based on Ethereum. The background of the game is set in a heroic world in which players can hire or trade their own heroes. It also allows two heroes to work together to teach one apprentice(a whole new hero). Now we are testing it's PVP Battle and many other features are coming soon to make more fun.",
      "logo": "",
      "website": "http://ethero.one/",
      "chain": "ethereum",
      "category": "games"
    },
    {
      "id": "8da6f5d2-9a6e-49d5-b728-e492d733e8cb",
      "name": "BURNUP",
      "description": "",
      "fullDescription": "",
      "logo": "",
      "website": "https://burnup.io/?r=0xffD4c92F7aB9075E0FaAda86Dfa22784Bb4fe56c&",
      "chain": "ethereum",
      "category": "games"
    },


    {
      "id": "bf8f9c18-36e9-4420-bd67-8ab341138a3d",
      "name": "Circleramide",
      "description": "Spend ether to buy a block. Each row of blocks cos",
      "fullDescription": "Spend ether to buy a block. Each row of blocks costs more than the previous one by 25%. 98% ETH from the block goes to both blocks on the bottom 2% ETH from the block goes to fund of rewards and creators. Each 100th block receives a reward! Block #5000 will break JACKPOT and finish the game!",
      "logo": "",
      "website": "https://godstep.ru/",
      "chain": "ethereum",
      "category": "games"
    },
    {
      "id": "6c7671ef-13de-4d69-a90b-5a23db1830c0",
      "name": "WorldCup",
      "description": "",
      "fullDescription": "",
      "logo": "",
      "website": "https://2018worldcup.github.io/",
      "chain": "ethereum",
      "category": "games"
    },
    {
      "id": "16005237-a911-4d0c-9ebe-9b6fb6c2a5fa",
      "name": "CryptoBallers",
      "description": "Own your own Basketball team on the Ethereum Block",
      "fullDescription": "Own your own Basketball team on the Ethereum Blockchain",
      "logo": "",
      "website": "http://www.cryptoballers.me/",
      "chain": "ethereum",
      "category": "games"
    },
    {
      "id": "ffbcaa33-4907-4823-a53e-74653adcb1ba",
      "name": "Ethmoji Beta",
      "description": "Collect and create your own unique avatars",
      "fullDescription": "Collect and create your own unique avatars",
      "logo": "",
      "website": "https://ethmoji.io",
      "chain": "ethereum",
      "category": "games"
    },
    {
      "id": "3c8e5daa-c9c4-4bd5-a1ed-a053962fd655",
      "name": "BlockChina",
      "description": "Unify China on the Blockchain!",
      "fullDescription": "Unify China on the Blockchain!",
      "logo": "",
      "website": "https://www.blockchina.io/",
      "chain": "ethereum",
      "category": "games"
    },


    {
      "id": "fc5f2633-6117-48e9-8cbd-5d373ca2c851",
      "name": "Jockey Club",
      "description": "sell and buy Crypto Jockeys",
      "fullDescription": "sell and buy Crypto Jockeys",
      "logo": "",
      "website": "https://www.cryptohorse.ch/jockeyClub.html",
      "chain": "ethereum",
      "category": "games"
    },
    {
      "id": "53e61be0-66d3-4078-a673-2e8601ddb0e8",
      "name": "Axie Infinity",
      "description": "? Battle ✨ Collect ⟠ Earn // Freedom for Gamers.",
      "fullDescription": "<p>Axie Infinity is a Pokemon-inspired digital pet universe where players use their cute characters called Axies in various games. The Axie Infinity Universe highlights the benefits of blockchain technology through \"Free to Play to Earn\" gameplay and a player-owned economy.</p>",
      "logo": "https://dashboard-assets.dappradar.com/document/9495/axieinfinity-dapp-games-ronin-logo_1ec806d57fd80ab68d351658cb8d146a.png",
      "website": "https://axieinfinity.com/",
      "chain": "ethereum",
      "category": "games"
    },
    {
      "id": "216c0fc2-aaec-4507-8075-ca959d3b4a59",
      "name": "TrumpBingo",
      "description": "Guess the words from the next Trump's tweet and wi",
      "fullDescription": "Guess the words from the next Trump's tweet and win bids of the other players",
      "logo": "",
      "website": "https://trumpbingo.io/",
      "chain": "ethereum",
      "category": "games"
    },
    {
      "id": "aea6a899-89d7-4d35-a3d3-3aa0e1875b03",
      "name": "YTIcons",
      "description": "Buy, collect and sell your favorite YouTuber evolu",
      "fullDescription": "Buy, collect and sell your favorite YouTuber evolutive and unique cards !",
      "logo": "",
      "website": "https://yticons.co/home",
      "chain": "ethereum",
      "category": "games"
    },
    {
      "id": "c812327a-a561-4aa8-bf40-ebdcc0950de1",
      "name": "BitSoccer",
      "description": "Decentralized Soccer Simulation Game",
      "fullDescription": "Decentralized Soccer Simulation Game",
      "logo": "",
      "website": "http://www.bitsoccer.io/",
      "chain": "ethereum",
      "category": "games"
    },
    {
      "id": "404d6645-ea80-40bf-9d7d-0fd4a81f0024",
      "name": "CryptoPuppies",
      "description": "Collect and trade CryptoPuppies in one of the worl",
      "fullDescription": "Collect and trade CryptoPuppies in one of the world's blockchain games. Breed your rarest puppies to create A Man's best friend. The future is woof!",
      "logo": "",
      "website": "https://cryptopuppies.org/",
      "chain": "ethereum",
      "category": "games"
    },
    {
      "id": "e130f528-2dfd-4684-911d-69b68ad7347d",
      "name": "CryptoElements",
      "description": "Crypto Elements is a platform for collecting 100% ",
      "fullDescription": "Crypto Elements is a platform for collecting 100% unique and one of a kind digital chemical elements. Each of them is represented by only one ERC 721 token. It can not be destroyed or replicated, it is insured by logic behind Smart Contract deployed on Ethereum Blockchain.",
      "logo": "",
      "website": "https://cryptoelements.org/",
      "chain": "ethereum",
      "category": "games"
    },
    {
      "id": "59e1bfe6-d700-4884-beb9-9c8f407159f6",
      "name": "Podgar.IO",
      "description": "",
      "fullDescription": "",
      "logo": "",
      "website": "https://podgar.io/landing/",
      "chain": "ethereum",
      "category": "games"
    },
    {
      "id": "fdb72296-16b8-473c-ac2e-421202b988e5",
      "name": "Ether Goo - Idle Game",
      "description": "First Crypto Idle Game - Competitive Fun!",
      "fullDescription": "First Crypto Idle Game - Competitive Fun!",
      "logo": "",
      "website": "https://ethergoo.io/freekitty/0xffd4c92f7ab9075e0faada86dfa22784bb4fe56c",
      "chain": "ethereum",
      "category": "games"
    },
    {
      "id": "d671704a-389e-4b28-b6c0-197aaa4d7167",
      "name": "CryptoFamous",
      "description": "Mint a CryptoCollectible from your Twitter / Insta",
      "fullDescription": "Mint a CryptoCollectible from your Twitter / Instagram / YouTube.",
      "logo": "",
      "website": "https://cryptofamous.net/",
      "chain": "ethereum",
      "category": "games"
    },



    {
      "id": "7faab9c5-57b8-4d61-8b01-3e00744f6e09",
      "name": "Darkwinds",
      "description": "Darkwinds is an on-line trading card game that run",
      "fullDescription": "Darkwinds is an on-line trading card game that runs on top of the Ethereum network. More specifically, all Darkwinds cards are non-fungible tokens or cryptocollectibles, a new standard for virtual objects where players have perpetual rights to sell, trade and give away their items, both within and outside of the game's ecosystem. This is possible thanks to the same technology that makes cryptocurrency possible, as Darkwinds cards exist on the same Blockchain used by all Ethereum tokens.",
      "logo": "https://dashboard-assets.dappradar.com/document/283/darkwinds-dapp-games-eth-logo_848b1b70e053d6858f4ad1a368edfc02.png",
      "website": "http://playdarkwinds.com",
      "chain": "ethereum",
      "category": "games"
    },
    {
      "id": "b0575c04-4ab7-47e1-8f7d-02222944a459",
      "name": "CryptoBeauty",
      "description": "Collect and own the most beautiful women throughou",
      "fullDescription": "Collect and own the most beautiful women throughout the history\ndescription: It's for you to decide which ones are your favorite beauties from the history. Explore the collection and claim your ownership on your favorites, and even profit from within the game. Aim to be the most valuable and sophisticated owner!",
      "logo": "",
      "website": "http://cryptobeauty.dapp-collect.io/",
      "chain": "ethereum",
      "category": "games"
    },
    {
      "id": "ae3653eb-320b-49fa-bd33-647d1f2057ea",
      "name": "CryptoSpinners",
      "description": "Collect, Trade, and Battle Fidget Spinners on the ",
      "fullDescription": "Collect, Trade, and Battle Fidget Spinners on the Ethereum Blockchain",
      "logo": "",
      "website": "http://cryptospinners.org/",
      "chain": "ethereum",
      "category": "games"
    },
    {
      "id": "f862332d-135d-4670-a255-db6791d61a27",
      "name": "CryptoCuddles",
      "description": "The CryptoKitties Battle Game",
      "fullDescription": "The CryptoKitties Battle Game",
      "logo": "",
      "website": "https://cryptocuddles.com",
      "chain": "ethereum",
      "category": "games"
    },



    {
      "id": "919bcce2-299b-4123-9bf6-ab4f3f9a8da2",
      "name": "KimJongCrypto",
      "description": "Kim Jong Crypto is a blockchain collectible dApp w",
      "fullDescription": "Kim Jong Crypto is a blockchain collectible dApp where you can trade virtual erc-20 virtual images of the fearless leader of North Korea Kim Jong Un.",
      "logo": "",
      "website": "http://www.kimjongcrypto.com/",
      "chain": "ethereum",
      "category": "games"
    },


    {
      "id": "d3e99e84-5f06-4440-9eb1-310fa29153e6",
      "name": "EmojiBlockchain",
      "description": "Collect and trade emoji on the Ethereum blockchain",
      "fullDescription": "Collect and trade emoji on the Ethereum blockchain",
      "logo": "",
      "website": "https://emojiblockchain.co/",
      "chain": "ethereum",
      "category": "games"
    },


    {
      "id": "ea2ba7ba-e0a5-4545-98cd-9b5da00bd852",
      "name": "EtherSpace",
      "description": "EtherSpace is a brand new kind of game that runs o",
      "fullDescription": "EtherSpace is a brand new kind of game that runs on blockchain technology. All celestial objects available on our site are stored on the Ethereum blockchain as ERC721 tokens. Each token is one-of-a-kind and represents a particular astronomical object. The price of each token increases with each transaction. When you buy a token, watch out: anyone can take it away from you by paying up to double what you paid.",
      "logo": "",
      "website": "http://etherspace.tech/",
      "chain": "ethereum",
      "category": "games"
    },
    {
      "id": "ba73a2ad-3631-4735-9bd4-95e44bd2e3fb",
      "name": "CryptoMasterpieces",
      "description": "Buy and Trade One-of-a-Kind Collectible Artworks P",
      "fullDescription": "Buy and Trade One-of-a-Kind Collectible Artworks Powered by Blockchain Technology",
      "logo": "",
      "website": "http://www.cryptomasterpieces.com",
      "chain": "ethereum",
      "category": "games"
    },


    {
      "id": "568c1ceb-eeba-47fd-a446-60774040b907",
      "name": "Crypto Mayor",
      "description": "A Crypto Collectible Game trading cities as the Ma",
      "fullDescription": "A Crypto Collectible Game trading cities as the Mayor. ",
      "logo": "",
      "website": "https://www.cryptomayor.io",
      "chain": "ethereum",
      "category": "games"
    },
    {
      "id": "d3b00ea5-7547-4288-acae-d8a646982529",
      "name": "Crypto Politicians",
      "description": "",
      "fullDescription": "",
      "logo": "",
      "website": "https://cryptopoliticians.co",
      "chain": "ethereum",
      "category": "games"
    },
    {
      "id": "7f1dcaa1-35bc-4ff7-bb8e-30b3416c2459",
      "name": "S0lar System For Sale",
      "description": "Buy and sell planets and moons in our solar system",
      "fullDescription": "Buy and sell planets and moons in our solar system. Increase or decrease the price, update the sales, and see if you can flip your favorite planet.",
      "logo": "",
      "website": "http://planets4sale.com/",
      "chain": "ethereum",
      "category": "games"
    },
    {
      "id": "0c10bc01-0880-40cf-b773-aba14a16fa56",
      "name": "Ether Basketball",
      "description": "Purchase NBA teams on the blockchain",
      "fullDescription": "Purchase NBA teams on the blockchain",
      "logo": "",
      "website": "http://etherbasketball.co/",
      "chain": "ethereum",
      "category": "games"
    },
    {
      "id": "0fdefb22-0020-416e-ad7d-5367808ee370",
      "name": "Crypland",
      "description": "Crypland is a virtual land full of various assets ",
      "fullDescription": "Crypland is a virtual land full of various assets that you can own. Some assets are rare while some can be common. Each asset has a worth which determines how valuable it is.",
      "logo": "",
      "website": "https://crypland.com/",
      "chain": "ethereum",
      "category": "games"
    },
    {
      "id": "34ea20ab-1452-4069-b37c-eb41d8df9a9a",
      "name": "CryptoHero",
      "description": "",
      "fullDescription": "",
      "logo": "",
      "website": "http://cryptohero.pro/",
      "chain": "ethereum",
      "category": "games"
    },
    {
      "id": "f41ce22c-597e-4f22-a929-4beda99a6117",
      "name": "Ether#COLOR",
      "description": "the colorful ΞETH investing game",
      "fullDescription": "the colorful ΞETH investing game",
      "logo": "",
      "website": "https://ethercolors.co",
      "chain": "ethereum",
      "category": "games"
    },
    {
      "id": "4bc684cd-68c3-4f6d-9186-1358717397df",
      "name": "IAmCryptoRich",
      "description": "Exclusive platform for rich people.",
      "fullDescription": "Exclusive platform for rich people.",
      "logo": "",
      "website": "https://iamcryptorich.com/",
      "chain": "ethereum",
      "category": "games"
    },


    {
      "id": "d320aa97-62d4-4bc6-a6e1-b24d4221c011",
      "name": "50 Shades of Ether",
      "description": "the boring grey ΞETH investment game",
      "fullDescription": "the boring grey ΞETH investment game",
      "logo": "",
      "website": "http://50shades.ethercolors.co",
      "chain": "ethereum",
      "category": "games"
    },


    {
      "id": "c9b57741-e58a-45b5-ba3e-0a02191152f2",
      "name": "Crypto Colors",
      "description": "Trade your favourite colors!",
      "fullDescription": "Trade your favourite colors!",
      "logo": "",
      "website": "https://www.cryptocolors.xyz/",
      "chain": "ethereum",
      "category": "games"
    },
    {
      "id": "a1df2e83-7e19-4d94-8dc9-63f045dd9eb4",
      "name": "BitGallery",
      "description": "Blockhain art gallery where you can purchase uniqu",
      "fullDescription": "Blockhain art gallery where you can purchase unique collectible tokens of world famous art items with proof of token ownership stored on the Ethereum blockchain.",
      "logo": "",
      "website": "http://www.bitgallery.co/",
      "chain": "ethereum",
      "category": "games"
    },
    {
      "id": "d021a30d-144f-4cd6-a534-cbba538fb838",
      "name": "KingLovin",
      "description": "Become King or be Dethroned for a x2 return",
      "fullDescription": "Become King or be Dethroned for a x2 return",
      "logo": "",
      "website": "https://kinglovin.com",
      "chain": "ethereum",
      "category": "games"
    },
    {
      "id": "104cd9e1-01d8-4bb2-956d-cf9bee20e558",
      "name": "EtherWaifus",
      "description": "Craft and trade beautiful arts on the Ethereum blockchain!",
      "fullDescription": "<p>Etherwaifu is a game where you collect craftable artworks. Each artwork has thousands of unique variations, and you can craft a new one by combining traits of other artworks you own.</p>\n<p>See the magic yourself! Click on the artworks below multiple times to see some variations of it.</p>",
      "logo": "https://dashboard-assets.dappradar.com/document/98/etherwaifus-dapp-games-ethereum-logo_453d037b037eb19f79a030d21a4ea9c5.png",
      "website": "https://etherwaifu.com",
      "chain": "ethereum",
      "category": "games"
    },
    {
      "id": "70896e93-6a89-4da0-b215-aacffe618a25",
      "name": "CryptoMines.PRO",
      "description": "Blockchain game about investing and mining. Via Et",
      "fullDescription": "Blockchain game about investing and mining. Via Ethereum Smart Contract.",
      "logo": "",
      "website": "https://cryptomines.pro",
      "chain": "ethereum",
      "category": "games"
    },
    {
      "id": "82bc7705-e8c1-46e2-af4a-cb535917a7aa",
      "name": "CryptoTubers",
      "description": "Buy your favourite internet personalities!",
      "fullDescription": "Buy your favourite internet personalities!",
      "logo": "",
      "website": "https://cryptotubers.co/",
      "chain": "ethereum",
      "category": "games"
    },
    {
      "id": "316535a1-59e2-4bc3-a79b-0d6d41c889f1",
      "name": "CryptoEmoji",
      "description": "A Tycoon-style game built around the concept we co",
      "fullDescription": "A Tycoon-style game built around the concept we coined as #Emojinomics. In this game, the player must compete with other players to acquire resources (?, ?, ?), craft unique products consuming resources (??⚡? - “Do Androids Dream of Electric Sheep”), or HODL for a later opportunity.",
      "logo": "",
      "website": "http://www.cryptoemoji.io/",
      "chain": "ethereum",
      "category": "games"
    },
    {
      "id": "3d2c1e91-36ac-49ea-bc5b-99dba946fed0",
      "name": "EtherPrincesses",
      "description": "Purchase your favorite Disney princesses on the bl",
      "fullDescription": "Purchase your favorite Disney princesses on the blockchain",
      "logo": "",
      "website": "http://etherprincesses.co/",
      "chain": "ethereum",
      "category": "games"
    },
    {
      "id": "9e1a46df-f5a9-4729-a563-5174f49a5aba",
      "name": "Treethereum",
      "description": "Grow a 3D generated tree",
      "fullDescription": "Grow a 3D generated tree",
      "logo": "",
      "website": "https://www.treethereum.com/",
      "chain": "ethereum",
      "category": "games"
    },
    {
      "id": "29f47cf2-60f6-4348-8cd1-7534cc2306b5",
      "name": "CryptoGit",
      "description": "Famous open source projects as Blockchain Smart Co",
      "fullDescription": "Famous open source projects as Blockchain Smart Contracts! Own tokens, make money and support maintainers!\n\nWhen you purchase a Card, the card is instantly re-listed for sale at a higher price!\n\nIf someone buys your card from you - you get paid up to double the amount you originally invested in ETH!\n\n4% of profits goes to project maintainers!",
      "logo": "",
      "website": "https://cryptogit.co",
      "chain": "ethereum",
      "category": "games"
    },
    {
      "id": "f356679d-da3b-4a02-8310-3b7d3b2c9ab4",
      "name": "EtherEmojis",
      "description": "The original emoji game on the blockchain ",
      "fullDescription": "The original emoji game on the blockchain ",
      "logo": "",
      "website": "http://etheremojis.co/",
      "chain": "ethereum",
      "category": "games"
    },
    {
      "id": "d3c86b4e-850c-4ce9-8992-cf28d5a36aa9",
      "name": "EtherMeals",
      "description": "Purchase your favorite DOG on the blockchain",
      "fullDescription": "Purchase your favorite DOG on the blockchain",
      "logo": "",
      "website": "http://ethermeals.co/",
      "chain": "ethereum",
      "category": "games"
    },
    {
      "id": "44b8718f-97e4-4ccc-ad8e-3e5acbe6e3ad",
      "name": "CryptoSaga",
      "description": "CryptoSaga is a decentralized RPG",
      "fullDescription": "CryptoSaga is a decentralized RPG",
      "logo": "",
      "website": "https://CryptoSaga.io",
      "chain": "ethereum",
      "category": "games"
    },
    {
      "id": "0b6b0c06-75fd-45c5-afe7-df81e4d6802b",
      "name": "EtherMeta",
      "description": "The cryptogame where you can own your favorite cry",
      "fullDescription": "The cryptogame where you can own your favorite cryptogames.",
      "logo": "",
      "website": "http://ethermeta.co/",
      "chain": "ethereum",
      "category": "games"
    },
    {
      "id": "0aed20e1-6f71-4351-a69e-39c8cd85d51a",
      "name": "CryptoStamps",
      "description": "CryptoStamps is the first secured trading platform",
      "fullDescription": "CryptoStamps is the first secured trading platform integrated with the Ethereum blockchain, where people can Collect, Trade and Mine their digital stamps like traditional postal stamps on the blockchain. Each CryptoStamp is one-of-a-kind and 100% owned by you unless you get 2X profit and it cannot be replicated or destroyed",
      "logo": "",
      "website": "https://www.cryptostamps.co/",
      "chain": "ethereum",
      "category": "games"
    },
    {
      "id": "c5eceab4-3951-4bb7-9d22-f3821677abec",
      "name": "Crypto Waifus",
      "description": "Buy, own, trade and touch your favorite anime char",
      "fullDescription": "Buy, own, trade and touch your favorite anime characters!",
      "logo": "",
      "website": "http://crypto-waifus.com/",
      "chain": "ethereum",
      "category": "games"
    }
  ]