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

export const gamesData = {
  "success": true,
  "chain": null,
  "category": "games",
  "range": "30d",
  "top": 100,
  "results": [
    {
      "dappId": 5314,
      "name": "Alien Worlds",
      "description": "Innovative Metaverse where everything is tokenized",
      "fullDescription": "<p>Alien Worlds</p>\n<p>What would you do, if you could create anything in the world?</p>\n<p>Join the Alien Worlds simulation of Earth’s economy using the Trilium (TLM) game token.</p>\n<p>Seek your fortune and thrive in the Trilium and NFT-based Social Metaverse.</p>\n<p>Get started by going through the Wormhole…</p>\n<p>Welcome to Alien Worlds!&nbsp;</p>\n<p>#buildingbetterworlds #thrive #Metaverse #NFTs #TLM</p>",
      "logo": "https://dashboard-assets.dappradar.com/document/5314/alienworlds-dapp-games-wax-logo_7600163693ac8760ff743d394a47b974.png",
      "link": "https://dappradar.com/binance-smart-chain/games/alien-worlds",
      "website": "https://alienworlds.io",
      "chains": [
        "wax",
      "binance-smart-chain"
      ],
  "categories": [
        "games"
      ],
"socialLinks": [
  {
    "title": "discord",
    "url": "https://discord.gg/alienworlds",
    "type": "discord"
  },
  {
    "title": "instagram",
    "url": "https://www.instagram.com/alienworlds.io/",
    "type": "instagram"
  },
  {
    "title": "medium",
    "url": "http://medium.com/@alienworlds",
    "type": "medium"
  },
  {
    "title": "reddit",
    "url": "https://www.reddit.com/r/AlienWorldsOfficial",
    "type": "reddit"
  },
  {
    "title": "telegram",
    "url": "https://t.me/AlienWorldsOffical",
    "type": "telegram"
  },
  {
    "title": "twitter",
    "url": "http://twitter.com/alienworlds",
    "type": "twitter"
  },
  {
    "title": "youtube",
    "url": "https://www.youtube.com/c/AlienWorlds",
    "type": "youtube"
  }
],
  "metrics": {
  "transactions": 378184090,
    "uaw": 408546,
      "volume": 3637401.06,
        "balance": 1651057.97
}
    },
{
  "dappId": 27978,
    "name": "Iskra",
      "description": "Iskra offers a premier destination for players, developers and investors to explore the thrill and opportunity of Web3 gaming alongside a vibrant community.",
        "fullDescription": "<p><strong>Iskra</strong> is a blockchain gaming hub that brings together gamers and game studios. Our platform allows gamers to explore and enjoy quality blockchain games and create their own community. Interested users will have the opportunity to explore new game projects for the first time through our Launchpad. Users can also freely trade in-game tokens and other in-game assets minted as non-fungible tokens (NFTs) outside the game.</p>\n<p>As a native token, <strong>ISK </strong>is used for all types of services provided within the Iskra ecosystem. ISK has three key utilities:&nbsp;</p>\n<p>&nbsp;&nbsp;(1) Exclusive currency to buy Pioneer NFTs: After the 10,000th Pioneer NFT is sold, all remaining Pioneer NFTs are only available for purchase with $ISK.</p>\n<p>&nbsp;&nbsp;(2) Governance token: Holders are entitled to propose and vote on initiatives that govern the Iskra platform.</p>\n<p>&nbsp;&nbsp;(3) Key currency: ISK serves all purposes in the Iskra platform. It can be exchanged with other assets and can be used as a form of payment for transaction fees and charges for a variety of other services in the Iskra ecosystem.</p>",
          "logo": "https://dashboard-assets.dappradar.com/document/27978/iskra-dapp-games-klaytn-logo_d68a98720bdbd90cf288b806113dacc9.png",
            "link": "https://dappradar.com/klaytn/games/iskra",
              "website": "https://iskra.world/",
                "chains": [
                  "klaytn",
                  "ethereum"
                ],
                  "categories": [
                    "games"
                  ],
                    "socialLinks": [
                      {
                        "title": "blog",
                        "url": "https://news.iskra.world/",
                        "type": "blog"
                      },
                      {
                        "title": "cmc",
                        "url": "https://coinmarketcap.com/currencies/iskra/",
                        "type": "cmc"
                      },
                      {
                        "title": "coingecko",
                        "url": "https://www.coingecko.com/en/coins/iskra-token",
                        "type": "coingecko"
                      },
                      {
                        "title": "discord",
                        "url": "https://discord.gg/iskraworld",
                        "type": "discord"
                      },
                      {
                        "title": "facebook",
                        "url": "https://www.facebook.com/iskraworldofficial",
                        "type": "facebook"
                      },
                      {
                        "title": "medium",
                        "url": "https://medium.com/@iskra.world",
                        "type": "medium"
                      },
                      {
                        "title": "telegram",
                        "url": "https://t.me/iskra_world_official",
                        "type": "telegram"
                      },
                      {
                        "title": "twitter",
                        "url": "https://twitter.com/iskra_world",
                        "type": "twitter"
                      },
                      {
                        "title": "youtube",
                        "url": "https://www.youtube.com/@IskraWorld/featured",
                        "type": "youtube"
                      }
                    ],
                      "metrics": {
    "transactions": 1070394,
      "uaw": 187389,
        "volume": 540863.79,
          "balance": 529373.46
  }
},
{
  "dappId": 37648,
    "name": "Hippo Dash by Gameta",
      "description": "A parkour game developed by Gameta",
        "fullDescription": "<p>Gameta is a multi-layered NFT gaming network aimed at bringing large scale Web2 users to Web3. The project currently offers 14 games including both hyper-casual and NFT social games. Since its launch, Gameta currently has 7 million-plus on-chain users on BNB Chain ranks among one of the most active projects on BNB Chain</p>",
          "logo": "https://dashboard-assets.dappradar.com/document/37612/hippodashbygameta-dapp-games-37612-logo_b427d5f68c9d7960d0cbeb914b61f159.png",
            "link": "https://dappradar.com/binance-smart-chain/games/hippo-dash-by-gameta",
              "website": "https://hippo-dash.com/",
                "chains": [
                  "binance-smart-chain"
                ],
                  "categories": [
                    "games"
                  ],
                    "socialLinks": [
                      {
                        "title": "twitter",
                        "url": "https://twitter.com/GametaHippo",
                        "type": "twitter"
                      }
                    ],
                      "metrics": {
    "transactions": 219569,
      "uaw": 176836,
        "volume": 11992.73,
          "balance": 8405.61
  }
},
{
  "dappId": 3803,
    "name": "Splinterlands",
      "description": "Splinterlands is a collectible trading card game",
        "fullDescription": "<p>Splinterlands is a collectible trading multiplayer card game with design that will make you think of a symbiosis between pokemon card games and World of Warcraft characters. The game has a developed storytelling based on a mystical world. Built on the Steem Blockchain to offer fast transactions and full transparency. Get in the game, conquer a world or solve quests.</p>",
          "logo": "https://dashboard-assets.dappradar.com/document/3803/splinterlands-dapp-games-hive-logo_ff940c64cd453c6cc0f6407fdd8bc77c.png",
            "link": "https://dappradar.com/wax/games/splinterlands",
              "website": "https://splinterlands.com/",
                "chains": [
                  "hive",
                  "wax"
                ],
                  "categories": [
                    "games"
                  ],
                    "socialLinks": [
                      {
                        "title": "discord",
                        "url": "https://discord.gg/CAFJRjY",
                        "type": "discord"
                      },
                      {
                        "title": "facebook",
                        "url": "https://www.facebook.com/officialsplinterlands/",
                        "type": "facebook"
                      },
                      {
                        "title": "instagram",
                        "url": "https://www.instagram.com/steemmonsters/",
                        "type": "instagram"
                      },
                      {
                        "title": "reddit",
                        "url": "https://www.reddit.com/r/OfficialSteemMonsters/",
                        "type": "reddit"
                      },
                      {
                        "title": "telegram",
                        "url": "https://t.me/splinterlands",
                        "type": "telegram"
                      },
                      {
                        "title": "twitter",
                        "url": "https://twitter.com/splinterlands",
                        "type": "twitter"
                      }
                    ],
                      "metrics": {
    "transactions": 20014032,
      "uaw": 133962,
        "volume": 10212.78,
          "balance": 17747.69
  }
},
{
  "dappId": 3388,
    "name": "Upland",
      "description": "Upland is the leading blockchain metaverse designed to rebuild the world, giving players and businesses a new way to play, earn real value, and connect.",
        "fullDescription": "<p>Upland is the leading blockchain metaverse based on the real world that brings together the thrill of earning NFTs and digital property holding fiat value with the enjoyment of game exploration and meeting fellow players. Backed by the highly-sustainable EOS blockchain, Upland has been recognized as one of Fast Company’s Next Big Things in Tech due to the platform's community-based commerce where players and businesses define gaming, earning, and connecting. Available on iOS, Android, and browsers, Upland captures the potential of Web 3.0 technology where virtual properties – based on real-world addresses and historic landmarks – become gamified hubs of activity that mesh digital communities with the real world.</p>",
          "logo": "https://dashboard-assets.dappradar.com/document/3388/upland-games-eos-logo_e09960a02373ce2a6c5b91dfca7d4bad.png",
            "link": "https://dappradar.com/eos/games/upland",
              "website": "https://upland.me/",
                "chains": [
                  "eos"
                ],
                  "categories": [
                    "games"
                  ],
                    "socialLinks": [
                      {
                        "title": "discord",
                        "url": "https://discover.upland.me/discord",
                        "type": "discord"
                      },
                      {
                        "title": "facebook",
                        "url": "https://www.facebook.com/uplandme/",
                        "type": "facebook"
                      },
                      {
                        "title": "medium",
                        "url": "https://medium.com/@upland",
                        "type": "medium"
                      },
                      {
                        "title": "telegram",
                        "url": "https://t.me/Upland",
                        "type": "telegram"
                      },
                      {
                        "title": "twitter",
                        "url": "https://twitter.com/UplandMe",
                        "type": "twitter"
                      },
                      {
                        "title": "youtube",
                        "url": "https://youtu.be/FrtlSOO0ZAQ",
                        "type": "youtube"
                      }
                    ],
                      "metrics": {
    "transactions": 6557743,
      "uaw": 121209,
        "volume": 0,
          "balance": 21334.15
  }
},
{
  "dappId": 8430,
    "name": "Farmers World",
      "description": "Farmers World is the first farming game to function on the NFTs platform",
        "fullDescription": "<p>Farmers World is the first farming game to function on the NFTs platform. Pick for yourself suitable tools, exploit various resources, buy land to build enormous farms, and enjoy the fascinating experiences of a farmer working in Farmers World’s Ecosystem.</p>",
          "logo": "https://dashboard-assets.dappradar.com/document/8430/farmersworld-dapp-games-wax-logo_3d4ce66580be868d5d1b89a411dcff01.png",
            "link": "https://dappradar.com/wax/games/farmers-world",
              "website": "https://farmersworld.io",
                "chains": [
                  "wax"
                ],
                  "categories": [
                    "games"
                  ],
                    "socialLinks": [
                      {
                        "title": "discord",
                        "url": "https://discord.gg/V2pdyGdB9V",
                        "type": "discord"
                      },
                      {
                        "title": "facebook",
                        "url": "https://fb.com/farmersworld.nft",
                        "type": "facebook"
                      },
                      {
                        "title": "medium",
                        "url": "https://farmersworld.medium.com",
                        "type": "medium"
                      },
                      {
                        "title": "telegram",
                        "url": "https://t.me/farmersworldofficial",
                        "type": "telegram"
                      },
                      {
                        "title": "twitter",
                        "url": "https://twitter.com/FarmersWorldNFT",
                        "type": "twitter"
                      }
                    ],
                      "metrics": {
    "transactions": 124645395,
      "uaw": 116598,
        "volume": 0,
          "balance": 0
  }
},
{
  "dappId": 14556,
    "name": "Benji Bananas",
      "description": "The Benji Bananas Membership Pass allows holders to receive rewards for playing the Benji Bananas game.",
        "fullDescription": "<p>Benji Bananas Membership Pass is your key to accessing the upcoming play-to-earn model within Benji Bananas . Ownership of a Benji Bananas Membership Pass NFT will enable its owners to earn special tokens when playing Benji Bananas and that will also allow those tokens to be swapped for ApeCoin.</p>\n<p>Benji Bananas is a free-to-play mobile game from Animoca Brands available for download on the App Store and Google Play. It is a popular action-adventure game (over 50 million downloads) in which players make Benji the monkey and his friends leap from vine to vine through the jungle collecting bananas to get upgrades, specials and power-ups.</p>",
          "logo": "https://dashboard-assets.dappradar.com/document/14556/benjibananas-dapp-games-ethereum-logo_ecf59a0a2e48a20421525f4eddef8539.png",
            "link": "https://dappradar.com/polygon/games/benji-bananas",
              "website": "https://benjibananas.com/",
                "chains": [
                  "ethereum",
                  "polygon"
                ],
                  "categories": [
                    "games"
                  ],
                    "socialLinks": [
                      {
                        "title": "medium",
                        "url": "https://animocabrands.medium.com/",
                        "type": "medium"
                      },
                      {
                        "title": "twitter",
                        "url": "https://twitter.com/BenjiBananas",
                        "type": "twitter"
                      }
                    ],
                      "metrics": {
    "transactions": 159863,
      "uaw": 88207,
        "volume": 0,
          "balance": 10900889.39
  }
},
{
  "dappId": 18280,
    "name": "SuperWalk",
      "description": "Web3\bLifestyle & Move-To-Earn project",
        "fullDescription": "<p>SuperWalk – A decentralized M2E with NFT shoes bridging real world to metaverse, where walkers and runners exercise, upgrade shoes and building a healthy community.</p>\n<p>SuperWalk team has a vision that we make building active and healthy habits easier around the world. By operating community-based running app ‘Proground’ for 9 months, SuperWalk team carried out R&amp;D on walking pattern recognition, GPS tracking and Vehicle Detection.</p>\n<p>In SuperWalk ecosystem, walkers and runners buy NFT shoes to start Pro Mode, earn $GRND by moving at the targeted speed and upgrade them to get more rewards. In addition, non-crypto users can access SuperWalk ecosystem by just downloading and earning a small amount of $WALK in Basic Mode.</p>\n<p>SuperWalk has a vision that holders use their NFT shoes on ZEPETO metaverse with 300 million users and get real sneakers from Kream, which is the fastest growing sneakers resell platform in East Asia. By integrating in-app exercise data, metaverse communities and tangible shoes rewards, SuperWalk will create a unique fitness ecosystem around the world.</p>",
          "logo": "https://dashboard-assets.dappradar.com/document/18280/superwalk-dapp-marketplaces-klaytn-logo_1edc4b93bafc3f9bbf5fb6aab080f0bf.png",
            "link": "https://dappradar.com/klaytn/games/superwalk",
              "website": "https://superwalk.io",
                "chains": [
                  "klaytn"
                ],
                  "categories": [
                    "games"
                  ],
                    "socialLinks": [
                      {
                        "title": "cmc",
                        "url": "https://coinmarketcap.com/ko/currencies/superwalk/",
                        "type": "cmc"
                      },
                      {
                        "title": "coingecko",
                        "url": "https://www.coingecko.com/en/coins/superwalk",
                        "type": "coingecko"
                      },
                      {
                        "title": "discord",
                        "url": "https://discord.gg/superwalk",
                        "type": "discord"
                      },
                      {
                        "title": "instagram",
                        "url": "https://www.instagram.com/superwalk.official/",
                        "type": "instagram"
                      },
                      {
                        "title": "medium",
                        "url": "https://medium.com/@SuperWalk",
                        "type": "medium"
                      },
                      {
                        "title": "twitter",
                        "url": "https://twitter.com/SuperWalk_",
                        "type": "twitter"
                      }
                    ],
                      "metrics": {
    "transactions": 3809144,
      "uaw": 77135,
        "volume": 0,
          "balance": 0
  }
},
{
  "dappId": 9495,
    "name": "Axie Infinity",
      "description": "? Battle ✨ Collect ⟠ Earn // Freedom for Gamers.",
        "fullDescription": "<p>Axie Infinity is a Pokemon-inspired digital pet universe where players use their cute characters called Axies in various games. The Axie Infinity Universe highlights the benefits of blockchain technology through \"Free to Play to Earn\" gameplay and a player-owned economy.</p>",
          "logo": "https://dashboard-assets.dappradar.com/document/9495/axieinfinity-dapp-games-ronin-logo_1ec806d57fd80ab68d351658cb8d146a.png",
            "link": "https://dappradar.com/ethereum/games/axie-infinity",
              "website": "https://axieinfinity.com/",
                "chains": [
                  "ethereum",
                  "ronin"
                ],
                  "categories": [
                    "games"
                  ],
                    "socialLinks": [
                      {
                        "title": "discord",
                        "url": "https://discord.gg/qT8vQjJ",
                        "type": "discord"
                      },
                      {
                        "title": "medium",
                        "url": "https://axie.substack.com/",
                        "type": "medium"
                      },
                      {
                        "title": "other",
                        "url": "https://www.youtube.com/watch?v=oMa8cc6YxSI",
                        "type": "other"
                      },
                      {
                        "title": "reddit",
                        "url": "https://www.reddit.com/r/AxieInfinity/",
                        "type": "reddit"
                      },
                      {
                        "title": "twitter",
                        "url": "https://twitter.com/AxieInfinity",
                        "type": "twitter"
                      }
                    ],
                      "metrics": {
    "transactions": 996271,
      "uaw": 74127,
        "volume": 48159606.92,
          "balance": 693177421.19
  }
},
{
  "dappId": 20949,
    "name": "Carrom Blitz",
      "description": "Carrom Blitz brings exciting multiplayer action to the classic Carrom gameplay - all for FREE",
        "fullDescription": "<p>Are you a master of Carrom trick shots? Quickly run the board with various shots to pot all your pieces before your opponents. Score big and win rewards in this twist on classic carrom.</p>\n<p>Featuring accurate gameplay, a classy look, and quirky twists, Carrom Blitz has something for everyone. Discover multiple tournament formats, weekly challenges, and leagues to connect with the community.</p>\n<p>If you're a fan of testing yourself competitively in skill-based games like Pool, Solitaire, and Darts, then you're going to love what Carrom Blitz has to offer!</p>\n<p>- Asynchronous gameplay and tournaments</p>\n<p>- Classic and precise mobile carrom gameplay</p>\n<p>- Trick shots earn bonus points</p>\n<p>- Win $RLY Prizes!</p>\n<p>- Bonus points for time &amp; accuracy</p>\n<p>- Skill-based Matchmaking</p>",
          "logo": "https://dashboard-assets.dappradar.com/document/20949/carromblitz-dapp-games-flow-logo_27ce5787f16345b854b02dde7d88459a.png",
            "link": "https://dappradar.com/flow/games/carrom-blitz",
              "website": "https://www.onjoyride.com/games/carrom-blitz",
                "chains": [
                  "flow"
                ],
                  "categories": [
                    "games"
                  ],
                    "socialLinks": [
                      {
                        "title": "blog",
                        "url": "https://www.onjoyride.com/blog",
                        "type": "blog"
                      },
                      {
                        "title": "discord",
                        "url": "http://discord.gg/joyride",
                        "type": "discord"
                      },
                      {
                        "title": "instagram",
                        "url": "https://www.instagram.com/onjoyride",
                        "type": "instagram"
                      },
                      {
                        "title": "twitter",
                        "url": "https://twitter.com/onjoyride/",
                        "type": "twitter"
                      }
                    ],
                      "metrics": {
    "transactions": 2253264,
      "uaw": 72781,
        "volume": 36897.75,
          "balance": 0
  }
},
{
  "dappId": 18031,
    "name": "Trickshot Blitz",
      "description": "Challenge other players to reach the highest score in a classic game of Trick Shot Pool. Play casually or wager to win $RLY!",
        "fullDescription": "<p>Sharpen your skills in practice mode or play competitive matches for fun and prizes. Learn trick shots for more impressive scores and a competitive edge.&nbsp;</p>\n<p>Get ready to experience Trickshot Blitz with a twist on classic mobile pool, a classy look, and quick and fun gameplay. If you're a fan of testing yourself competitively in skill-based games like Bingo, Solitaire, and Pool, then you're going to love what Trickshot Blitz has to offer!</p>\n<p>• Win $RLY Prizes!</p>\n<p>• Enjoy exciting pool action! • Show off your skills against real players!</p>\n<p>• Asynchronous gameplay and tournaments. • Play casually or wager $RLY!</p>\n<p>• Trick shots earn bonus points</p>\n<p>• Skill-based Matchmaking</p>",
          "logo": "https://dashboard-assets.dappradar.com/document/18031/trickshotblitz-dapp-games-flow-logo_e9b497563d8e25de6ae670b8de03a539.png",
            "link": "https://dappradar.com/flow/games/trickshot-blitz",
              "website": "https://www.onjoyride.com/games/trickshot-blitz",
                "chains": [
                  "flow"
                ],
                  "categories": [
                    "games"
                  ],
                    "socialLinks": [
                      {
                        "title": "discord",
                        "url": "http://discord.gg/joyride",
                        "type": "discord"
                      },
                      {
                        "title": "instagram",
                        "url": "https://www.instagram.com/onjoyride",
                        "type": "instagram"
                      },
                      {
                        "title": "twitter",
                        "url": "https://twitter.com/onjoyride/",
                        "type": "twitter"
                      }
                    ],
                      "metrics": {
    "transactions": 2025844,
      "uaw": 70509,
        "volume": 26380.15,
          "balance": 0
  }
},
{
  "dappId": 14795,
    "name": "Planet IX",
      "description": "Planet IX is an NFT-based strategy and play-to-earn game.  Players contribute to building a better planet by acquiring and cultivating land in the form of NFTs.",
        "fullDescription": "<p>Planet IX is an NFT-based strategy game, and your goal is to restore a fallen planet to its former green-blue glory while uncovering its mysteries. The story is continuously expanding into a huge and immersive sci-fi metaverse, and the narrative is tailored towards bringing awareness of humanity's impact on the world of today.</p>\n<p>The Planet IX map consists of 1.6 billion PIX, all being individual NFTs that you can collect. The PIX are acquired using our own ERC-20 utility token called IX Token (IXT) which was launched on November 20, 2021. Today, the game has a dedicated community with high engagement, with 550k+ unique players and 400+ million NFTs sold.</p>\n<p>As you progress in the game, you can form territories, develop new technology, raid other players, and gain ownership of in-game corporations with different functions and perks. Everything you collect have true ownership, and your mission is simple. Collect assets, use them wisely, and build the word of tomorrow.</p>",
          "logo": "https://dashboard-assets.dappradar.com/document/14795/planetix-dapp-games-matic-logo_a12be670cd2d0e9ef18b61adc2317169.png",
            "link": "https://dappradar.com/polygon/games/planet-ix",
              "website": "https://planetix.com/",
                "chains": [
                  "polygon"
                ],
                  "categories": [
                    "games"
                  ],
                    "socialLinks": [
                      {
                        "title": "blog",
                        "url": "https://blog.planetix.com/",
                        "type": "blog"
                      },
                      {
                        "title": "discord",
                        "url": "https://discord.com/invite/planetix",
                        "type": "discord"
                      },
                      {
                        "title": "instagram",
                        "url": "https://www.instagram.com/planet_ix_official/?hl=en",
                        "type": "instagram"
                      },
                      {
                        "title": "telegram",
                        "url": "https://t.me/planetixofficial",
                        "type": "telegram"
                      },
                      {
                        "title": "twitter",
                        "url": "https://twitter.com/Planetix0",
                        "type": "twitter"
                      },
                      {
                        "title": "youtube",
                        "url": "https://www.youtube.com/channel/UCONW07NMT43rti7_XRXuGMA",
                        "type": "youtube"
                      }
                    ],
                      "metrics": {
    "transactions": 2322841,
      "uaw": 59776,
        "volume": 1764129.02,
          "balance": 36025598.99
  }
},
{
  "dappId": 23389,
    "name": "PLAYZAP GAMES",
      "description": "A Skill-based competitive gaming platform focused on mainstream causal gamers, built on blockchain technology with a sustainable economy and powered by NFTs",
        "fullDescription": "<p>PlayZap Game is a skill-based competitive gaming platform focused on mainstream causal gamers, built on blockchain technology with a sustainable token economy and powered by NFTs. PlayZap is built on the principle of ´Free to Play. Skill to Earn´&nbsp;</p>\n<p></p>\n<p>The app is available on Appstore and Google PlayStore to download for free.&nbsp;</p>",
          "logo": "https://dashboard-assets.dappradar.com/document/23389/playzapgames-dapp-games-bsc-logo_88aa6b0662447560bdc3c7269d05c30b.png",
            "link": "https://dappradar.com/binance-smart-chain/games/playzap-games",
              "website": "https://www.playzap.games/",
                "chains": [
                  "binance-smart-chain"
                ],
                  "categories": [
                    "games"
                  ],
                    "socialLinks": [
                      {
                        "title": "discord",
                        "url": "https://discord.com/invite/YYPAyJpyqm",
                        "type": "discord"
                      },
                      {
                        "title": "medium",
                        "url": "https://medium.com/@playzap",
                        "type": "medium"
                      },
                      {
                        "title": "telegram",
                        "url": "https://t.me/PlayZapOfficial",
                        "type": "telegram"
                      },
                      {
                        "title": "twitter",
                        "url": "https://twitter.com/PlayZapGames",
                        "type": "twitter"
                      },
                      {
                        "title": "youtube",
                        "url": "https://www.youtube.com/channel/UC52lrYFa8EYHn7SJahlpoEw",
                        "type": "youtube"
                      }
                    ],
                      "metrics": {
    "transactions": 110974,
      "uaw": 54668,
        "volume": 2776.21,
          "balance": 867.08
  }
},
{
  "dappId": 29354,
    "name": "Lifeform",
      "description": "Embrace Your Digital Soul: Shape, Evolve and Thrive with Lifeform in the Boundless Web3 Universe.",
        "fullDescription": "<p>Lifeform is positioned as the open solution platform of Decentralized Identification that can bring the next billion new users into the web3 world. Specifically, Lifeform will enable them to come into the world of metaverse and web3 applications by simplifying the creation, usage, and management of virtual identities - their virtual human avatars. These ultra-high definition avatars can not only be used in all major web2 video-enabled collaboration systems such as Zoom, Google Meet, Microsoft Teams, Discord, TikTok, Instagram, etc., but also serve as the users’ logins for all dApps in the web3 environment, smoothly bridging the transition from web2 to web3 ecosystems for new users.</p>",
          "logo": "https://dashboard-assets.dappradar.com/document/29354/lifeform-dapp-other-bsc-logo_2b332dd5c7de081e983bdefb46d91e7e.png",
            "link": "https://dappradar.com/binance-smart-chain/games/lifeform",
              "website": "https://lifeform.cc/",
                "chains": [
                  "binance-smart-chain"
                ],
                  "categories": [
                    "games"
                  ],
                    "socialLinks": [
                      {
                        "title": "discord",
                        "url": "https://discord.gg/lifeformcc",
                        "type": "discord"
                      },
                      {
                        "title": "medium",
                        "url": "https://lifeform-official.medium.com/",
                        "type": "medium"
                      },
                      {
                        "title": "twitter",
                        "url": "https://twitter.com/Lifeformcc",
                        "type": "twitter"
                      }
                    ],
                      "metrics": {
    "transactions": 66261,
      "uaw": 51133,
        "volume": 0,
          "balance": 0
  }
},
{
  "dappId": 12162,
    "name": "Wombat Dungeon Master",
      "description": "Dungeon Master takes you to the other side of adventures! Control the dungeon, hide loot, reward the wombats and earn!",
        "fullDescription": "<p><strong>Multichain NFT staking</strong></p>\n<p>Earn reward with renowned NFT collections from Uplift, Womplay, .gems, Crypto Writer and many more on EOS and WAX!</p>\n<p><strong>Long seasons</strong></p>\n<p>No sprints or races for rewards. Play at your own pace for weeks!</p>\n<p><strong>Zero spend of resources with Wombat</strong></p>\n<p>Wombat covers up to 20 free actions per day on WAX and 10 actions on EOS — play without spending your CPU!</p>",
          "logo": "https://dashboard-assets.dappradar.com/document/12162/wombatdungeonmaster-dapp-games-eos-logo_7ef14cc48431397b8e4265afb69b1ffa.png",
            "link": "https://dappradar.com/eos/games/wombat-dungeon-master",
              "website": "https://dungeon.wombat.app",
                "chains": [
                  "eos",
                  "wax"
                ],
                  "categories": [
                    "games"
                  ],
                    "socialLinks": [
                      {
                        "title": "telegram",
                        "url": "https://t.me/DungeonMasterHelp",
                        "type": "telegram"
                      },
                      {
                        "title": "twitter",
                        "url": "https://twitter.com/WombatDungeon",
                        "type": "twitter"
                      }
                    ],
                      "metrics": {
    "transactions": 497637,
      "uaw": 41847,
        "volume": 5.42,
          "balance": 5.43
  }
},
{
  "dappId": 9001,
    "name": "SecondLive",
      "description": "SecondLive: Choose Life, Choose Space, Choose Friends.",
        "fullDescription": "<p>SecondLive: Choose Life, Choose Space, Choose Friends. Become the icon you desire and free roam in spaces such as exhibitions, &nbsp;dance floors, &nbsp;shopping malls, &nbsp;workpl</p>",
          "logo": "https://dashboard-assets.dappradar.com/document/9001/secondlive-dapp-games-bsc-logo_1aa7e51c7b68ccc8e44bd46766a88932.png",
            "link": "https://dappradar.com/binance-smart-chain/games/secondlive",
              "website": "https://secondlive.world/",
                "chains": [
                  "binance-smart-chain"
                ],
                  "categories": [
                    "games"
                  ],
                    "socialLinks": [
                      {
                        "title": "blog",
                        "url": "https://secondlive.world/viewspace?spaceid=18204",
                        "type": "blog"
                      },
                      {
                        "title": "discord",
                        "url": "https://discord.com/invite/Zw84wuacPA",
                        "type": "discord"
                      },
                      {
                        "title": "github",
                        "url": "https://github.com/SecondLive",
                        "type": "github"
                      },
                      {
                        "title": "medium",
                        "url": "https://medium.com/@SecondLiveReal",
                        "type": "medium"
                      },
                      {
                        "title": "telegram",
                        "url": "https://t.me/SecondLiveCommunity",
                        "type": "telegram"
                      },
                      {
                        "title": "twitter",
                        "url": "https://twitter.com/SecondLiveReal",
                        "type": "twitter"
                      },
                      {
                        "title": "youtube",
                        "url": "https://youtu.be/P8eKvLLUiNs",
                        "type": "youtube"
                      }
                    ],
                      "metrics": {
    "transactions": 552779,
      "uaw": 41281,
        "volume": 4650,
          "balance": 3934.55
  }
},
{
  "dappId": 18111,
    "name": "Meta Apes",
      "description": "Meta Apes is a free-to-play & play-to-earn MMO strategy game.",
        "fullDescription": "<p>Meta Apes is a <strong>free-to-play, play-and-earn MMO strategy game</strong> designed for mobile. It is set in a post-apocalyptic world, in which humanity has ended and a new era ruled by Apes has begun. Next on the agenda is space domination. Each player will have to work closely with his or her Gang to become the strongest Clan and win the ultimate race to space. &nbsp;&nbsp;Meta Apes is available on both Google Play (Android) &amp; App Store (iOS), and is in fact the first game to launch on BSC Application Sidechain (BAS).</p>",
          "logo": "https://dashboard-assets.dappradar.com/document/18111/metaapes-dapp-games-bsc-logo_9cc9e8d743063f8b8111f7a22b03b1a7.png",
            "link": "https://dappradar.com/binance-smart-chain/games/meta-apes",
              "website": "https://metaapesgame.com/",
                "chains": [
                  "binance-smart-chain"
                ],
                  "categories": [
                    "games"
                  ],
                    "socialLinks": [
                      {
                        "title": "discord",
                        "url": "https://discord.gg/qhtxG4BrtX",
                        "type": "discord"
                      },
                      {
                        "title": "instagram",
                        "url": "https://www.instagram.com/metaapesgame/",
                        "type": "instagram"
                      },
                      {
                        "title": "twitter",
                        "url": "https://twitter.com/MetaApesGame",
                        "type": "twitter"
                      }
                    ],
                      "metrics": {
    "transactions": 150679,
      "uaw": 38322,
        "volume": 1344819.48,
          "balance": 57113.63
  }
},
{
  "dappId": 9152,
    "name": "Arc8 by GAMEE",
      "description": "Mobile Games - Crypto Rewards",
        "fullDescription": "<p>Arc8 is a Play-to-Earn mobile gaming platform where arcade gaming meets crypto. Get to the top, crush your opponents and win GMEE tokens in multiple video games. Your success is only in your hands. Arc8 by GAMEE brings the blockchain experience to millions of gamers.</p>",
          "logo": "https://dashboard-assets.dappradar.com/document/9152/arc8bygamee-dapp-games-matic-logo_3d2f5b2e6334143a0d4983504cf2fa39.png",
            "link": "https://dappradar.com/polygon/games/arc8-by-gamee-1",
              "website": "https://www.gamee.com/",
                "chains": [
                  "polygon"
                ],
                  "categories": [
                    "games"
                  ],
                    "socialLinks": [
                      {
                        "title": "discord",
                        "url": "https://discord.gg/q7kf7NnFsU",
                        "type": "discord"
                      },
                      {
                        "title": "medium",
                        "url": "https://gamee.medium.com/",
                        "type": "medium"
                      },
                      {
                        "title": "telegram",
                        "url": "https://t.me/gameetoken",
                        "type": "telegram"
                      },
                      {
                        "title": "twitter",
                        "url": "https://twitter.com/ARC8App",
                        "type": "twitter"
                      }
                    ],
                      "metrics": {
    "transactions": 220882,
      "uaw": 35098,
        "volume": 0,
          "balance": 28819650.32
  }
},
{
  "dappId": 15535,
    "name": "Ultimate Champions",
      "description": "Ultimate Champions is an entirely free-to-play fantasy football game with officially licensed digital cards hosted as NFTs on the blockchain.",
        "fullDescription": "<p>In <strong>Ultimate Champions</strong>, we crafted an innovative experience where players can leverage their <strong>football knowledge </strong>to build the <strong>best possible team every week</strong> in order to earn rewards that hold long-term value in our <strong>open economy: </strong>Cards (NFTs) and Tokens (MGC/$CHAMP).</p>\n<p>We have always been passionate about video games and we love crafting a polished player experience.</p>\n<p>For the past 7 years we witnessed and studied the rise of blockchain technology and Web3 while developing video games at Ubisoft.</p>\n<p>In video games with traditional frameworks, players <strong>don't truly own their in-game assets. </strong>Game items have <strong>no value outside of the game </strong>and when a player stops playing a particular game, all the time and money invested in that game is lost forever. The game items are stuck in the game's ecosystem forever.</p>\n<p>By leveraging the capabilities of blockchain and NFTs, we can solve these problems and give players <strong>true ownership</strong> <strong>over the assets</strong> they earn or purchase in the game. Game items are NFTs and therefore have value in cryptocurrency, inside and outside of the game.</p>\n<p>The next generation of games is play-to-earn!</p>\n<p>We want to build a <strong>fantasy sports platform</strong> for a <strong>mainstream audience </strong>and leverage our free-to-play expertise to make a <strong>fun game</strong>, that is very accessible and easy to onboard on. Our ambition is to bring play-to-earn games to the masses.</p>\n<p>We plan to focus on <strong>football</strong> first and build an accessible <strong>cross-league</strong> fantasy football game.</p>\n<p>Once we're done building a fantasy football game we are proud of, we will expand our eco-system with additional fantasy sports.</p>",
          "logo": "https://dashboard-assets.dappradar.com/document/15535/ultimatechampions-dapp-games-matic-logo_2e8103f70c7d7ffbd9294c5e958bd5d5.png",
            "link": "https://dappradar.com/ethereum/games/ultimate-champions",
              "website": "https://beta.ultimate-champions.com/",
                "chains": [
                  "polygon",
                  "ethereum",
                  "binance-smart-chain"
                ],
                  "categories": [
                    "games"
                  ],
                    "socialLinks": [
                      {
                        "title": "blog",
                        "url": "https://whitepaper.ultimate-champions.com/",
                        "type": "blog"
                      },
                      {
                        "title": "discord",
                        "url": "https://discord.gg/6V7drqvpyK",
                        "type": "discord"
                      },
                      {
                        "title": "instagram",
                        "url": "https://www.instagram.com/ultichamps/",
                        "type": "instagram"
                      },
                      {
                        "title": "medium",
                        "url": "https://medium.com/@ultimatechampions",
                        "type": "medium"
                      },
                      {
                        "title": "telegram",
                        "url": "https://t.me/ultimatechampions",
                        "type": "telegram"
                      },
                      {
                        "title": "twitter",
                        "url": "https://twitter.com/UltiChamps",
                        "type": "twitter"
                      },
                      {
                        "title": "youtube",
                        "url": "https://www.youtube.com/channel/UCw6FwO8esxtdqbWIvQBrxPQ/videos",
                        "type": "youtube"
                      }
                    ],
                      "metrics": {
    "transactions": 262174,
      "uaw": 32690,
        "volume": 0,
          "balance": 1308.26
  }
},
{
  "dappId": 35591,
    "name": "Meta Merge",
      "description": "A universe combining AIGC, NFTs, DeFi and Gaming",
        "fullDescription": "<p>A universe combining AIGC, NFTs, DeFi and Gaming.Capture your favorite pets, defeat enemies, mint NFTs, and embark on your adventure in the world of monsters in Meta Merge!</p>",
          "logo": "https://dashboard-assets.dappradar.com/document/35591/metamerge-dapp-games-bsc-logo_954178fb9bcfe00cf3dd5f7a5976f78a.png",
            "link": "https://dappradar.com/binance-smart-chain/games/meta-merge",
              "website": "http://metamerge.xyz",
                "chains": [
                  "binance-smart-chain"
                ],
                  "categories": [
                    "games"
                  ],
                    "socialLinks": [
                      {
                        "title": "discord",
                        "url": "https://discord.com/ultiverse",
                        "type": "discord"
                      },
                      {
                        "title": "twitter",
                        "url": "https://twitter.com/MetaMerge_xyz",
                        "type": "twitter"
                      },
                      {
                        "title": "youtube",
                        "url": "https://www.youtube.com/@MetaMerge",
                        "type": "youtube"
                      }
                    ],
                      "metrics": {
    "transactions": 406869,
      "uaw": 30664,
        "volume": 0,
          "balance": 0
  }
},
{
  "dappId": 14612,
    "name": "Sunflower Land",
      "description": "Plant, Chop, Mine, Craft & Collect at Sunflower Land.\n\nThe MetaVerse game with endless resources.",
        "fullDescription": "<p>Stranded on a deserted island, you must scavenge the land to gather seeds, minerals and resources in order to farm and grow your empire. Spend only a few minutes a day tending to your farm, completing daily quests, expanding your land, discovering new islands &amp; trading with players.</p>\n<p>From the gold you mine, to the sunflower seeds you plant, everything is an identifiable resource on the Polygon Blockchain. There are thousands of unique in-game resources that are tradeable amongst players! Each week there are rare SFTs that you can craft with a limited supply - Make sure you collect the in-game resources so you don't miss out.</p>\n<p>Sunflower Land is a Blockchain-first game. Every tree you chop, radish pie you eat or experience you gain is saved to the Blockchain. You own your Bumpkin character and can grow and cherish them in a vibrant community.</p>\n<p>Sunflower Land was built by a team of passionate people who love building community driven projects. Come join the community of 60+ open source developers and 200+ artists today!</p>",
          "logo": "https://dashboard-assets.dappradar.com/document/14612/sunflowerland-dapp-games-matic-logo_65e0d31d95d2f52d8f79867bdc5ea60e.png",
            "link": "https://dappradar.com/polygon/games/sunflower-land",
              "website": "https://sunflower-land.com",
                "chains": [
                  "polygon"
                ],
                  "categories": [
                    "games"
                  ],
                    "socialLinks": [
                      {
                        "title": "discord",
                        "url": "https://discord.com/invite/sunflowerland",
                        "type": "discord"
                      },
                      {
                        "title": "twitter",
                        "url": "https://twitter.com/0xSunflowerLand",
                        "type": "twitter"
                      },
                      {
                        "title": "youtube",
                        "url": "https://www.youtube.com/channel/UCA08g3x6EGPPZE_4093q3PQ",
                        "type": "youtube"
                      }
                    ],
                      "metrics": {
    "transactions": 568347,
      "uaw": 29670,
        "volume": 45927.76,
          "balance": 2028.01
  }
},
{
  "dappId": 6249,
    "name": "MOBOX: NFT Farmer",
      "description": "Yield Farm on the GO and watch your MOMO NFTs GROW.",
        "fullDescription": "<p><strong>Next Generation Gaming : Free to Play to Earn (F2P2E)</strong></p>\n<p>‌</p>\n<p>Gaming should be fun. &nbsp;Rather than having to think about every single penny you spend and taking up all your time, wouldn’t it be great to play to earn?</p>\n<p>‌</p>\n<p>MOBOX has built a unique infrastructure that builds on the growing <strong>DeFi ecosystem and combines it with Gaming</strong> through unique NFTs. &nbsp;Using Liquidity Pools, Yield Farming, and NFTs, the GameFi infrastructure will not just find the <strong>best yield strategies for users but also generate unique NFTs</strong> that can be used across a multitude of games. &nbsp;This gives MOBOX users the unique ability to <strong>play for free and to earn</strong> in one singular process.</p>\n<p>‌</p>\n<p>Imagine a series of games where you don’t actually spend your hard earned money to purchase in-game resources or heroes, but rather a saving’s account where the more you save the more resources you earn and the more heroes you can summon.</p>\n<p>‌</p>\n<p>By providing liquidity to certain CRATES (pools), &nbsp;CRATE contracts will automatically deliver the best yield for users by utilizing optimal yield farming strategies.</p>",
          "logo": "https://dashboard-assets.dappradar.com/document/6249/momonftfarmer-dapp-games-bsc-logo_e3ce265bd34e836a14f5e033254d24b5.png",
            "link": "https://dappradar.com/binance-smart-chain/games/mobox-nft-farmer",
              "website": "http://www.mobox.io",
                "chains": [
                  "binance-smart-chain"
                ],
                  "categories": [
                    "games"
                  ],
                    "socialLinks": [
                      {
                        "title": "discord",
                        "url": "https://discord.gg/Y7YHd7qtph",
                        "type": "discord"
                      },
                      {
                        "title": "facebook",
                        "url": "https://www.facebook.com/MOBOX-Offical-113631857020083/",
                        "type": "facebook"
                      },
                      {
                        "title": "medium",
                        "url": "https://mbox.medium.com/",
                        "type": "medium"
                      },
                      {
                        "title": "reddit",
                        "url": "https://www.reddit.com/r/Mobox/",
                        "type": "reddit"
                      },
                      {
                        "title": "twitter",
                        "url": "https://twitter.com/MOBOX_Official",
                        "type": "twitter"
                      }
                    ],
                      "metrics": {
    "transactions": 417822,
      "uaw": 28045,
        "volume": 1534433.77,
          "balance": 26796531.78
  }
},
{
  "dappId": 25939,
    "name": "Yuliverse",
      "description": "Move and earn now with Yuliverse!\nInspired by Pokemon Go & Tinder.",
        "fullDescription": "<p>Yuliverse is the World’s very First Parallel Reality Gaming Metaverse on BSC chain, Inspired by Pokemon Go &amp; Tinder. Growing new and meaningful friendships at the same time earning in Yuliverse with ease, by just moving around in your neighbourhood!</p>",
          "logo": "https://dashboard-assets.dappradar.com/document/25939/yuliverse-dapp-social-bsc-logo_c0da9ac7ff68b355a3060ff62ef6c84e.png",
            "link": "https://dappradar.com/binance-smart-chain/games/yuliverse",
              "website": "https://www.yuliverse.com/",
                "chains": [
                  "binance-smart-chain"
                ],
                  "categories": [
                    "games"
                  ],
                    "socialLinks": [
                      {
                        "title": "discord",
                        "url": "https://discord.gg/yuliverseofficial",
                        "type": "discord"
                      },
                      {
                        "title": "medium",
                        "url": "https://medium.com/@yuliverseofficial",
                        "type": "medium"
                      },
                      {
                        "title": "twitter",
                        "url": "https://twitter.com/TheYuliverse",
                        "type": "twitter"
                      }
                    ],
                      "metrics": {
    "transactions": 269915,
      "uaw": 27815,
        "volume": 0,
          "balance": 0
  }
},
{
  "dappId": 30927,
    "name": "motoDEX",
      "description": "MotoDEX is a Blockchain Game, in which users participate in motorcycle races, \ndevelop their riders and improve high-speed tracks.",
        "fullDescription": "<p>White paper: https://docs.openbisea.com/motodex/</p>\n<p>MotoDEX is a NFT game, competition of multi-level racing on motorcycles on high-speed tracks with unlimited opportunities for players.</p>\n<p>motoDEX is a project that is developing by leaps and bounds. The game has made a splash in the NFT market due to its obvious advantages:?</p>\n<ol>\n  <li>1.Ease of character selection and intuitive gameplay. An uncomplicated plot, combined with the drive of high-speed racing and colorful locations, rivets fans of the classic genre of racing simulators to the screens.</li>\n  <li>2.Protection of financial transactions with smart contacts. The algorithm automatically generates, monitors and updates data about the funds at the disposal of the players. The rejection of the human factor in favor of blockchain technology guarantees users honesty and transparency of payments.</li>\n  <li>3.Fair discrimination. The automatic price increase for new characters provides trailblazer motoDEX buyers with smart contract-level benefits. The project guarantees investors, who enter the game at the start of the project, an advantage in monetizing game progress.</li>\n  <li>4.Game economy that stimulates the growth of prices for NFT objects. The condition for the increase in the cost of tracks and characters after each new sale, laid down in the algorithm, ensures a stable increase in the value of in-game items.</li>\n  <li>5.High liquidity with the possibility of obtaining super-profits. At the start of the project, players have a chance to increase their investment in gameplay.</li>\n</ol>",
          "logo": "https://dashboard-assets.dappradar.com/document/30927/motodex-dapp-games-aurora-logo_9fc42a38e10cde705d67a9b7bf4982f1.png",
            "link": "https://dappradar.com/aurora/games/motodex",
              "website": "https://motodex.openbisea.com?chain=aurora",
                "chains": [
                  "aurora",
                  "near",
                  "polygon"
                ],
                  "categories": [
                    "games"
                  ],
                    "socialLinks": [
                      {
                        "title": "medium",
                        "url": "https://medium.com/@openbisea_studios",
                        "type": "medium"
                      },
                      {
                        "title": "telegram",
                        "url": "https://t.me/openbisea_en",
                        "type": "telegram"
                      },
                      {
                        "title": "twitter",
                        "url": "https://twitter.com/openbisea",
                        "type": "twitter"
                      }
                    ],
                      "metrics": {
    "transactions": 26215,
      "uaw": 25870,
        "volume": 125374.83,
          "balance": 272.45
  }
},
{
  "dappId": 6969,
    "name": "Nine Chronicles",
      "description": "100% decentralized, open source RPG powered by the players ?‍♀️?‍♂️",
        "fullDescription": "<p><strong>How will you explore the Nine Realms?</strong>&nbsp;</p>\n<p>Nine Chronicles is a fantasy MMORPG, set in a vast fantasy world powered by groundbreaking technology that gives players the freedom to play how they want: exploring, crafting, mining or governing in a uniquely moddable, open-source adventure. Conquer dangerous dungeons to gather rare resources for trade; specialize in crafting the finest equipment; or pass legislation with the support of other players to inhabit this realm as you see fit.</p>\n<p><strong>Face an ancient evil</strong></p>\n<p>The corrupted spawn of the world tree Yggdrasil is running rampant across the realms. You must decide how you will stop their spread of chaos throughout the lands. Use all of the resources at your disposal to overpower the evil that’s ravaging the world.</p>\n<p><strong>A neverending world in the hands of its players</strong></p>\n<p><strong>Perpetual World: </strong>Govern the world together in a game that cannot be shut down, ever, because the data and the logic live in a blockchain network — instead of the company, the gamers run the world together with no forced updates or changes without community approval.&nbsp;</p>\n<p><strong>Infinite moddability: </strong>Nine Chronicles is one of the first massively multiplayer games to fully support mods and give players the tools to utilize them in an open-source format.</p>\n<p><strong>How to play Nine Chronicles?</strong></p>\n<ol>\n  <li>Please enter your email on http://nine-chronicles.com</li>\n  <li>You can get your invitation code. The installer is downloaded automatically.</li>\n  <li>Run the game launcher and after the account creation, activate your account using this invitation code.</li>\n</ol>",
          "logo": "https://dashboard-assets.dappradar.com/document/6969/ninechronicles-dapp-games-other-logo_6e103a509120cdc229c0795cd6ba19df.png",
            "link": "https://dappradar.com/other/games/nine-chronicles",
              "website": "https://nine-chronicles.com",
                "chains": [
                  "other"
                ],
                  "categories": [
                    "games"
                  ],
                    "socialLinks": [
                      {
                        "title": "blog",
                        "url": "https://nine-chronicles.com/",
                        "type": "blog"
                      },
                      {
                        "title": "discord",
                        "url": "https://discord.com/invite/fg6dPk3",
                        "type": "discord"
                      },
                      {
                        "title": "facebook",
                        "url": "https://fb.com/NineChronicles",
                        "type": "facebook"
                      },
                      {
                        "title": "instagram",
                        "url": "https://www.instagram.com/NineChronicles/",
                        "type": "instagram"
                      },
                      {
                        "title": "medium",
                        "url": "https://ninechronicles.medium.com/",
                        "type": "medium"
                      },
                      {
                        "title": "twitter",
                        "url": "https://twitter.com/NineChronicles",
                        "type": "twitter"
                      },
                      {
                        "title": "youtube",
                        "url": "https://www.youtube.com/channel/UCCRjtl54jhfZLzCXqfXc4-A",
                        "type": "youtube"
                      }
                    ],
                      "metrics": {
    "transactions": 13875827,
      "uaw": 23016,
        "volume": 179844.37,
          "balance": 0
  }
},
{
  "dappId": 8948,
    "name": "DeFi Kingdoms",
      "description": "A cross-chain fantasy RPG game with beautiful pixel art, tokenized resources, and Hero NFTs integrated with DeFi protocols.",
        "fullDescription": "<p><strong>DeFi Kingdoms</strong> is a game, DEX, liquidity pool opportunity, market of rare utility driven NFTs, and it all plays out in the nostalgic form of fantasy pixel art.<strong> </strong>DeFi Kingdoms blends the appeal of decentralized finance and the current rise of Play-to-Earn economics. Its Crystalvale realm is live on DFK Chain -- an Avalanche Subnet -- and the Serendale realm has relaunched on Klaytn.</p>\n<p>The<strong> JEWEL token</strong> is used to as an Ecosystem token across chains, which can be staked as a governance and fee distribution token so holders will have a say in the growth and evolution of the project. It is also the native gas token on DFK Chain. <strong>CRYSTAL</strong> and <strong>JADE</strong> are the Power Tokens on the Crystalvale and Serendale realms, respectively, and can be used to purchase and mint NFTs and for other in-game activities.</p>\n<p><strong>Collectable Hero NFTs</strong> have multiple utility cases, and can be sent on quests to earn in-game items for crafting or early unlocking of pool rewards. Level them up to increase their stats for combat in coming phases including PvP and PvE. A limited supply of lands will be able to be developed and used for resource gathering and NFT equipment crafting.</p>",
          "logo": "https://dashboard-assets.dappradar.com/document/8948/defikingdoms-dapp-games-harmony-logo_e166b2bffec91ca758918ea392771ae0.png",
            "link": "https://dappradar.com/harmony/games/defi-kingdoms",
              "website": "https://defikingdoms.com",
                "chains": [
                  "harmony",
                  "avalanche",
                  "defikingdoms",
                  "klaytn"
                ],
                  "categories": [
                    "games"
                  ],
                    "socialLinks": [
                      {
                        "title": "discord",
                        "url": "https://discord.gg/defikingdoms",
                        "type": "discord"
                      },
                      {
                        "title": "github",
                        "url": "https://github.com/DefiKingdoms",
                        "type": "github"
                      },
                      {
                        "title": "instagram",
                        "url": "https://www.instagram.com/defikingdoms",
                        "type": "instagram"
                      },
                      {
                        "title": "medium",
                        "url": "https://medium.com/defi-kingdoms-official",
                        "type": "medium"
                      },
                      {
                        "title": "reddit",
                        "url": "https://www.reddit.com/r/DefiKingdoms/",
                        "type": "reddit"
                      },
                      {
                        "title": "telegram",
                        "url": "https://t.me/defikingdoms",
                        "type": "telegram"
                      },
                      {
                        "title": "tiktok",
                        "url": "https://www.tiktok.com/@defikingdoms",
                        "type": "tiktok"
                      },
                      {
                        "title": "twitter",
                        "url": "https://twitter.com/DefiKingdoms",
                        "type": "twitter"
                      },
                      {
                        "title": "youtube",
                        "url": "https://www.youtube.com/defikingdoms",
                        "type": "youtube"
                      }
                    ],
                      "metrics": {
    "transactions": 11989705,
      "uaw": 22987,
        "volume": 4531761.45,
          "balance": 41811702.769999996
  }
},
{
  "dappId": 16824,
    "name": "Playbite",
      "description": "Play fun games, win cool prizes",
        "fullDescription": "<p>Playbite is a community-driven mobile games platform where users can play, hang out, compete, and win real prizes!</p>",
          "logo": "https://dashboard-assets.dappradar.com/document/16824/playbite-dapp-games-matic-logo_a9b174d454739dff464c0d6db2726cdd.png",
            "link": "https://dappradar.com/polygon/games/playbite",
              "website": "https://playbite.com",
                "chains": [
                  "polygon"
                ],
                  "categories": [
                    "games"
                  ],
                    "socialLinks": [
                      {
                        "title": "discord",
                        "url": "https://discord.gg/playbite",
                        "type": "discord"
                      },
                      {
                        "title": "facebook",
                        "url": "https://www.facebook.com/playbite",
                        "type": "facebook"
                      },
                      {
                        "title": "instagram",
                        "url": "https://www.instagram.com/getplaybite",
                        "type": "instagram"
                      },
                      {
                        "title": "tiktok",
                        "url": "https://www.tiktok.com/@playbite",
                        "type": "tiktok"
                      },
                      {
                        "title": "twitter",
                        "url": "https://www.twitter.com/getplaybite",
                        "type": "twitter"
                      }
                    ],
                      "metrics": {
    "transactions": 49200,
      "uaw": 22813,
        "volume": 0,
          "balance": 0
  }
},
{
  "dappId": 11314,
    "name": "PlayMining",
      "description": "PlayMining is a Play to Earn NFT game platform where you can play various free games. You can earn DEAPcoin(DEP) as you play games.",
        "fullDescription": "<p>What is PlayMining? PlayMining is a Play to Earn NFT game platform where you can play various free games. You can earn DEAPcoin(DEP) as you play games, with which you can trade exclusive Anime/Manga NFTs! The main usage of the utility token DEAPcoin (ERC-20) is used in NFT Marketplace by DEP to purchase NFTs (ERC-721) to enhance gameplay within the platform. The platform aims to address a problem to IPs / copyrights for the secondary market transaction of individual artwork. The portion of the sales will be rewarded as royalty to the original creators eternally.</p>",
          "logo": "https://dashboard-assets.dappradar.com/document/11314/playmining-dapp-games-dea-logo_a208e889184587de87b7e9e5716fd8ee.png",
            "link": "https://dappradar.com/dep/games/playmining-2",
              "website": "https://playmining.com/?rid=TZrMQf5D",
                "chains": [
                  "dep"
                ],
                  "categories": [
                    "games"
                  ],
                    "socialLinks": [],
                      "metrics": {
    "transactions": 828058,
      "uaw": 19319,
        "volume": 0,
          "balance": 0
  }
},
{
  "dappId": 19869,
    "name": "PlayEmber",
      "description": "The simplest on-ramp for Mobile Game Users and Mobile Game Studios. Supercharge any mobile Web2 game to Web3 within an hour!",
        "fullDescription": "<p>At playEmber we’re all about taking that initial ember of an idea and making it into a roaring hit of a game! With years of knowledge in the hyper casual and casual gaming space we're in a perfect position to slingshot games to millions of players and keep them profitable.</p>\n<p>With Ember Coin our Web3 arm to the business: Utilising our 100 Million Downloads to date and our mobile gaming expertise, we will add a Play &amp; Earn element to our mobile games along with allowing external F2P game studios the tech to join the P&amp;E EmberCoin ecosystem.</p>",
          "logo": "https://dashboard-assets.dappradar.com/document/19869/playember-dapp-games-near-logo_819633139e3de6b7497d17b59feed6c9.png",
            "link": "https://dappradar.com/near/games/playember",
              "website": "https://playember.com/",
                "chains": [
                  "near"
                ],
                  "categories": [
                    "games"
                  ],
                    "socialLinks": [],
                      "metrics": {
    "transactions": 21071,
      "uaw": 18788,
        "volume": 771.4,
          "balance": 1693.22
  }
},
{
  "dappId": 14696,
    "name": "Tap Fantasy",
      "description": "Tap Fantasy is an MMORPG building the biggest play2earn on Solana and BSC. It’s the metaverse version of the famous TapTap Fantasy with over 20 million users.",
        "fullDescription": "<p>Tap Fantasy is a MMORPG blockchain game developed by HTML 5. Players can interact with Tap Fantasy directly on the web page or wallet, and they can start playing immediately. It has both AXIE's PLAY TO EARN module and Roblox's DESIGN TO EARN developer module.</p>\n<p>Third-party game developers can design and create gameplay modules using TP’s no-code map editor. Game designers earn 50% commission from GOLD COINS that players consume in third-party gameplay modules.</p>\n<p>Designers can also MINT their own designed NFT profile pictures, wallpaper, buildings, character skin appearances, and sell them to players in the market.</p>\n<p>After several years of accumulation, we now have more than 200 ACG characters, plus our partners in Japan also have plenty of animation resources to join the world of the Metaverse.</p>",
          "logo": "https://dashboard-assets.dappradar.com/document/14696/tapfantasy-dapp-games-bsc-logo_249ad805b7d64c63971496328a42a44b.png",
            "link": "https://dappradar.com/binance-smart-chain/games/tap-fantasy",
              "website": "https://tapfantasy.io/",
                "chains": [
                  "binance-smart-chain",
                  "solana"
                ],
                  "categories": [
                    "games"
                  ],
                    "socialLinks": [
                      {
                        "title": "discord",
                        "url": "http://discord.gg/tapfantasy",
                        "type": "discord"
                      },
                      {
                        "title": "github",
                        "url": "https://github.com/tapfantasy/",
                        "type": "github"
                      },
                      {
                        "title": "medium",
                        "url": "https://medium.com/tapfantasy",
                        "type": "medium"
                      },
                      {
                        "title": "telegram",
                        "url": "https://t.me/tap_fantasy",
                        "type": "telegram"
                      },
                      {
                        "title": "tiktok",
                        "url": "https://www.tiktok.com/@tapfantasyofficial?lang=en",
                        "type": "tiktok"
                      },
                      {
                        "title": "twitter",
                        "url": "https://twitter.com/tapfantasy2021",
                        "type": "twitter"
                      }
                    ],
                      "metrics": {
    "transactions": 191381,
      "uaw": 15975,
        "volume": 318971.49,
          "balance": 433162.5
  }
},
{
  "dappId": 33376,
    "name": "FanCraze",
      "description": "Creating the metaverse for cricket! Join to own, collect, & play with officially-licensed ICC digital moments and player cards.",
        "fullDescription": "<p>Own, collect, play, and earn with officially licensed digital moments &amp; player cards. Fans can play &nbsp;games to win huge cash prizes, exclusive merchandise, autographed &nbsp;memorabilia, special match tickets, and other real-world goodies.</p>",
          "logo": "https://dashboard-assets.dappradar.com/document/33376/fancraze-dapp-games-flow-logo_996d28b857a4d72d2b918a7c767f1c49.png",
            "link": "https://dappradar.com/flow/games/fancraze",
              "website": "https://www.fancraze.com",
                "chains": [
                  "flow"
                ],
                  "categories": [
                    "games"
                  ],
                    "socialLinks": [
                      {
                        "title": "discord",
                        "url": "https://discord.com/invite/Wx327SMf88",
                        "type": "discord"
                      },
                      {
                        "title": "instagram",
                        "url": "https://www.instagram.com/0xfancraze",
                        "type": "instagram"
                      },
                      {
                        "title": "twitter",
                        "url": "https://twitter.com/0xFanCraze",
                        "type": "twitter"
                      },
                      {
                        "title": "youtube",
                        "url": "https://www.youtube.com/c/0xFanCraze",
                        "type": "youtube"
                      }
                    ],
                      "metrics": {
    "transactions": 2222095,
      "uaw": 15118,
        "volume": 0,
          "balance": 0
  }
},
{
  "dappId": 18336,
    "name": "Summoners Arena",
      "description": "Summoners Arena Idle is the franchise flagship where players collect, upgrade, evolve Heroes, and forge Items to compete in different game modes.",
        "fullDescription": "<p>Summoners Arena, which centers on the antique lore of Summonia and its Heroes, is set out to be a multi-game universe of various genres made into a franchise supported by Onechain Technology (backed by Onesoft - a gaming project that is ranked in the top 2 SEA and top 16 worldwide according to App Annie in 2021).</p>\n<p>Summoners Arena Idle RPG - the first game is the franchise flagship where players collect, upgrade, evolve Heroes, and forge Items to compete in different game modes.</p>\n<p>Summoners Arena is backed by top VCs in the crypto space such as Pantera, Coinbase Ventures, Spartan Group, Coin98 Ventures, etc.</p>\n<p>The game is now available to download on:</p>\n<ul>\n  <li>Apple Store</li>\n  <li>Google Play</li>\n</ul>",
          "logo": "https://dashboard-assets.dappradar.com/document/18336/summonersarena-dapp-games-bsc-logo_7079af6b895f978df650c25b53167bd6.png",
            "link": "https://dappradar.com/binance-smart-chain/games/summoners-arena",
              "website": "https://summonersarena.io/",
                "chains": [
                  "binance-smart-chain"
                ],
                  "categories": [
                    "games"
                  ],
                    "socialLinks": [
                      {
                        "title": "blog",
                        "url": "https://summonersarena.substack.com/",
                        "type": "blog"
                      },
                      {
                        "title": "discord",
                        "url": "https://discord.gg/summonersarena",
                        "type": "discord"
                      },
                      {
                        "title": "facebook",
                        "url": "https://www.facebook.com/SummonersArena.io",
                        "type": "facebook"
                      },
                      {
                        "title": "telegram",
                        "url": "https://t.me/SummonersArena_ANN",
                        "type": "telegram"
                      },
                      {
                        "title": "twitter",
                        "url": "https://twitter.com/SummonersArena",
                        "type": "twitter"
                      },
                      {
                        "title": "youtube",
                        "url": "https://www.youtube.com/channel/UCX3KLUC4nFdeGkdPbPtlGCQ",
                        "type": "youtube"
                      }
                    ],
                      "metrics": {
    "transactions": 20105,
      "uaw": 15002,
        "volume": 281800.99,
          "balance": 23948.92
  }
},
{
  "dappId": 18983,
    "name": "Midas Miner",
      "description": "Midas Miner is the No.1 Gold mining game on Binance Smart Chain. You can dig a lot of exclusive rewards in this game",
        "fullDescription": "<p>What is Midas Miner?</p>\n<p>Midas Miner is the No.1 Gold mining game on Binance Smart Chain. It is a play-to-earn game where everyone can earn tokens through playing the game, collecting NFT items and training characters to sell on the marketplace. You ‌can dig a lot of exclusive rewards in this game!</p>\n<p>With extremely special features to help players join the game easily as well as find a huge source of profit from the game. Like Midas's hand, every place gamers touch, gold will be spawned.</p>\n<p><strong>Game Features</strong></p>\n<ul>\n  <li>Players can use tokens to buy their favorite characters, which have different stats and strengths</li>\n  <li>They can also purchase Power Up Items</li>\n  <li>Hiring mode allows players to rent characters in packages of days, weeks, and months</li>\n  <li>The map will be updated continuously to increase the player's experience</li>\n  <li>Top Miner will be indexed weekly - monthly to receive special rewards</li>\n</ul>\n<p><strong>Marketplace</strong></p>\n<p>NFT Assets (Characters, Items) will be able to trade on our marketplace. These trade will have a <strong>5% tax cost</strong> for using the marketplace in any of their forms and will be returned to the Game Treasury Pool.</p>\n<p>(The marketplace will not launch at the game launch. It will be in the next phase of our roadmap.)</p>\n<p><strong>Rewards</strong></p>\n<ul>\n  <li>There will be 2 random rewards you can earn from each game: <strong>$MMI, $USDT</strong></li>\n  <li>Character 1*: <strong>ROI in 28 days</strong></li>\n  <li>Character 2*: <strong>ROI in 22 days</strong></li>\n  <li>Character 3*: <strong>ROI in 17 days&nbsp;</strong></li>\n  <li>Character 4*: <strong>ROI in 12 days</strong></li>\n</ul>",
          "logo": "https://dashboard-assets.dappradar.com/document/18983/midasminer-dapp-games-bsc-logo_2b2460afa877942a4fc36466747dc08f.png",
            "link": "https://dappradar.com/binance-smart-chain/games/midas-miner",
              "website": "https://www.midasminer.io/",
                "chains": [
                  "binance-smart-chain"
                ],
                  "categories": [
                    "games"
                  ],
                    "socialLinks": [
                      {
                        "title": "telegram",
                        "url": "https://t.me/MidasMinerOfficial",
                        "type": "telegram"
                      },
                      {
                        "title": "twitter",
                        "url": "https://twitter.com/MidasMiner",
                        "type": "twitter"
                      }
                    ],
                      "metrics": {
    "transactions": 19784,
      "uaw": 13376,
        "volume": 309817.23,
          "balance": 3431586.41
  }
},
{
  "dappId": 25136,
    "name": "Oath of Peak",
      "description": "Oath of Peak is a Massively Multiplayer Online Role-Playing Game that uses blockchain to facilitate players' participation in the economic side of gameplay.",
        "fullDescription": "<p>Oath of Peak&nbsp;is a fantasy&nbsp;Xianxia&nbsp;MMORPG set in an extraordinary oriental world. In this world, players navigate their way through the unknowns as skilled vagrants, wandering around and meeting new companions. Referencing the Chinese classic,&nbsp;Classic of Mountains and Seas,&nbsp;the game features an ancient world teeming with magnificent mountains and rivers, vast grasslands, and extravagant palaces. A fantasy encounter awaits you at every corner, and one might just be the highlight of your adventure! The thousands of monsters and pets play an important role in this world. You will be there with them right from the beginning: breeding, nurturing, grooming, and going on adventures together. And you will fight alongside them, frolic with them, and forge long-lasting relationships, even in the absence of a common language.&nbsp;</p>\n<p><strong>Spirit Beast Sealing System: </strong>Countless Spirit Beasts live in the world of Oath of Peak. Seal and recruit them into your combat team! Don’t be surprised if you see mythical creatures from the Classic of Mountains and Seas, such as Qilin, Zhujiuyin, Baize, and Qiongqi.&nbsp;</p>\n<p><strong>Spirit Beast Breeding System: </strong>Collect and breed new generations of Spirit Beasts&nbsp;by yourself or with your friends. The offspring inherit attributes of their parents in a randomized fashion, giving rise to a total of 256 permutations.&nbsp;</p>\n<p><strong>Spirit Beast Possession System: </strong>Seal Spirit Beasts&nbsp;and gain full possession of their skills and characteristics. Use them in dungeons or critical stages. Each of them provides different advantages, so choose them wisely!&nbsp;</p>\n<p><strong>Kun Raising System: </strong>An all-new Kun raising system. Whoever raises the largest Kun will be named the Kun Master! Accelerate your Kun’s growth by leveling up and showering them with gifts. Collect tons of benefits to enhance your combat skills!</p>",
          "logo": "https://dashboard-assets.dappradar.com/document/25136/oathofpeak-dapp-games-matic-logo_34c4f87a1a2adb7aaffd55fd0e7da911.png",
            "link": "https://dappradar.com/polygon/games/oath-of-peak",
              "website": "https://yeehagames.com/game/oathofpeak/event",
                "chains": [
                  "polygon"
                ],
                  "categories": [
                    "games"
                  ],
                    "socialLinks": [
                      {
                        "title": "facebook",
                        "url": "https://www.facebook.com/people/Oath-of-Peak/100084213596392/",
                        "type": "facebook"
                      },
                      {
                        "title": "twitter",
                        "url": "https://twitter.com/OathOfPeak",
                        "type": "twitter"
                      },
                      {
                        "title": "youtube",
                        "url": "https://www.youtube.com/@oathofpeak1703",
                        "type": "youtube"
                      }
                    ],
                      "metrics": {
    "transactions": 39327,
      "uaw": 11963,
        "volume": 19741.86,
          "balance": 9.8
  }
},
{
  "dappId": 3029,
    "name": "PROSPECTORS",
      "description": "Massive Multiplayer Online Real-Time Economic Strategy Game. MINE GOLD - BUILD YOUR WORLD",
        "fullDescription": "<p>Prospectors is the first and the most complex multiplayer online game fully built on blockchain, with NFT usage. Real Time Economic Strategy with fully user-generated economy. Prices for in-game goods and services are determined based on supply and demand, making the Prospectors economy equivalent to an economy during the Gold Rush. This virtual reality feels more and more real with every gold ingot you find, every coin you earn, and every new business you build. Plunge into 19th century Gold Rush now!</p>",
          "logo": "https://dashboard-assets.dappradar.com/document/3029/prospectors-dapp-games-wax-logo_041250c7fe716884abfaf1a1b868a019.png",
            "link": "https://dappradar.com/wax/games/prospectors",
              "website": "https://prospectors.io",
                "chains": [
                  "wax",
                  "eos"
                ],
                  "categories": [
                    "games"
                  ],
                    "socialLinks": [
                      {
                        "title": "facebook",
                        "url": "https://www.facebook.com/prospectors.io/",
                        "type": "facebook"
                      },
                      {
                        "title": "medium",
                        "url": "https://medium.com/@prospectorsgame",
                        "type": "medium"
                      },
                      {
                        "title": "reddit",
                        "url": "https://www.reddit.com/r/Prospectorsio",
                        "type": "reddit"
                      },
                      {
                        "title": "telegram",
                        "url": "https://t.me/prospectorsgame",
                        "type": "telegram"
                      },
                      {
                        "title": "twitter",
                        "url": "https://twitter.com/prospectorsgame",
                        "type": "twitter"
                      }
                    ],
                      "metrics": {
    "transactions": 1851089,
      "uaw": 10963,
        "volume": 36762,
          "balance": 6260297.08
  }
},
{
  "dappId": 15123,
    "name": "Genopets",
      "description": "The world's first Move-to-Earn NFT Game.",
        "fullDescription": "<p>It’s time to step up your game. Genopets is the world’s first free-to-play Move-to-Earn mobile RPG that gamifies your real-life daily activity. Genopets makes it fun and rewarding to live an active lifestyle, as it pioneers the way for FitnessFi. Summon your Genopet — your digital familiar — imbued with your personality and created in your likeness from the start. Bank your steps to earn rewards and evolve your Genopet as you fight to save the Genoverse. Built on Solana, Genopets allows you to earn while both hitting your fitness goals and increasing the value and rarity of your Genopet. Take care of your Genopet by taking care of yourself. As you evolve, it evolves.</p>",
          "logo": "https://dashboard-assets.dappradar.com/document/15123/genopets-dapp-games-bsc-logo_caa83b40e021a5bd857e219b38db840d.png",
            "link": "https://dappradar.com/solana/games/genopets",
              "website": "https://mainframe.genopets.me",
                "chains": [
                  "binance-smart-chain",
                  "solana"
                ],
                  "categories": [
                    "games"
                  ],
                    "socialLinks": [
                      {
                        "title": "discord",
                        "url": "https://discord.com/invite/genopets",
                        "type": "discord"
                      },
                      {
                        "title": "facebook",
                        "url": "https://www.facebook.com/Genopets.me/",
                        "type": "facebook"
                      },
                      {
                        "title": "instagram",
                        "url": "https://www.instagram.com/genopets/",
                        "type": "instagram"
                      },
                      {
                        "title": "medium",
                        "url": "https://medium.com/@genopets",
                        "type": "medium"
                      },
                      {
                        "title": "reddit",
                        "url": "https://www.reddit.com/r/genopets/",
                        "type": "reddit"
                      },
                      {
                        "title": "telegram",
                        "url": "https://t.me/GenopetsAnnouncements",
                        "type": "telegram"
                      },
                      {
                        "title": "twitter",
                        "url": "https://twitter.com/genopets",
                        "type": "twitter"
                      },
                      {
                        "title": "youtube",
                        "url": "https://www.youtube.com/genopets",
                        "type": "youtube"
                      }
                    ],
                      "metrics": {
    "transactions": 425195,
      "uaw": 9790,
        "volume": 34330.63,
          "balance": 949.36
  }
},
{
  "dappId": 14038,
    "name": "Tiny World",
      "description": "Tiny World is a diverse trading game universe based on historical legends from across the globe. It combines P2E and DAO governance with quality gameplay.",
        "fullDescription": "<p>Tiny World is a diverse trading game universe based on historical legends from across the globe. It combines Play-to-earn and effective DAO governance with quality gameplay. Tiny World has a complete product matrix including; Tiny Games (Tiny Kingdom, Tiny Dungeons, etc.), Tiny Farm (combine cool NFT heroes with DeFi to produce a seamless GameFi experience).</p>",
          "logo": "https://dashboard-assets.dappradar.com/document/14038/tinyworld-dapp-games-bsc-logo_22e5ec45173aebb67cfe558499b308f4.png",
            "link": "https://dappradar.com/binance-smart-chain/games/tiny-world",
              "website": "https://app.tinyworlds.io",
                "chains": [
                  "binance-smart-chain"
                ],
                  "categories": [
                    "games"
                  ],
                    "socialLinks": [
                      {
                        "title": "discord",
                        "url": "https://discord.gg/jXTRTz7B7N",
                        "type": "discord"
                      },
                      {
                        "title": "facebook",
                        "url": "https://www.facebook.com/profile.php?id=100084746766065",
                        "type": "facebook"
                      },
                      {
                        "title": "medium",
                        "url": "https://medium.com/@tinyworld.gamefi",
                        "type": "medium"
                      },
                      {
                        "title": "telegram",
                        "url": "https://t.me/tinyworld_en",
                        "type": "telegram"
                      },
                      {
                        "title": "twitter",
                        "url": "https://twitter.com/tinyworldgamefi",
                        "type": "twitter"
                      },
                      {
                        "title": "youtube",
                        "url": "https://www.youtube.com/channel/UCmm9JeIkqes3sS6NZ2YGA0w",
                        "type": "youtube"
                      }
                    ],
                      "metrics": {
    "transactions": 107086,
      "uaw": 9008,
        "volume": 535785.22,
          "balance": 1038936.5
  }
},
{
  "dappId": 7937,
    "name": "Taco",
      "description": "Gaming, Utility & DeFi. Taco is the ultimate Web3 project on the WAX Blockchain.",
        "fullDescription": "<p>Gaming, Utility &amp; DeFi. Taco is the ultimate Web3 project on the WAX Blockchain, combining a smart wallet app for crypto, an NFT-based P2E gaming platform and its own metaverse, the Taco Universe.</p>",
          "logo": "https://dashboard-assets.dappradar.com/document/7937/taco-dapp-other-wax-logo_45d109f731c72b8ed26e24ec590bd2ec.png",
            "link": "https://dappradar.com/wax/games/taco",
              "website": "https://tacocrypto.io",
                "chains": [
                  "wax"
                ],
                  "categories": [
                    "games"
                  ],
                    "socialLinks": [
                      {
                        "title": "discord",
                        "url": "https://discord.gg/U2jadcEQe3",
                        "type": "discord"
                      },
                      {
                        "title": "facebook",
                        "url": "https://www.facebook.com/tacowax/",
                        "type": "facebook"
                      },
                      {
                        "title": "instagram",
                        "url": "https://www.instagram.com/taco.wax/",
                        "type": "instagram"
                      },
                      {
                        "title": "medium",
                        "url": "https://medium.com/@taco.wax",
                        "type": "medium"
                      },
                      {
                        "title": "telegram",
                        "url": "https://t.me/tacowax",
                        "type": "telegram"
                      },
                      {
                        "title": "twitter",
                        "url": "https://twitter.com/tacowax",
                        "type": "twitter"
                      }
                    ],
                      "metrics": {
    "transactions": 1402453,
      "uaw": 8968,
        "volume": 249978.45,
          "balance": 0
  }
},
{
  "dappId": 663,
    "name": "Gods Unchained",
      "description": "Gods Unchained is a triple-A quality game on the blockchain",
        "fullDescription": "<p>Gods Unchained is a triple-A quality game on the blockchain, backed by investors such as Coinbase. The exclusive first season sale of cards is live - unbox yours now.</p>",
          "logo": "https://dashboard-assets.dappradar.com/document/663/godsunchained-dapp-games-eth-logo_53b818a059679d652a67acec7f53bf48.png",
            "link": "https://dappradar.com/immutablex/games/gods-unchained",
              "website": "https://godsunchained.com/",
                "chains": [
                  "ethereum",
                  "immutablex"
                ],
                  "categories": [
                    "games"
                  ],
                    "socialLinks": [
                      {
                        "title": "discord",
                        "url": "https://discord.gg/DKGr2pW",
                        "type": "discord"
                      },
                      {
                        "title": "reddit",
                        "url": "https://reddit.com/r/godsunchained",
                        "type": "reddit"
                      },
                      {
                        "title": "twitter",
                        "url": "https://twitter.com/godsunchained",
                        "type": "twitter"
                      }
                    ],
                      "metrics": {
    "transactions": 326991,
      "uaw": 8554,
        "volume": 19346976.38,
          "balance": 6825.29
  }
},
{
  "dappId": 38221,
    "name": "MODragon",
      "description": "MODragon NFTs introduce a mesmerizing world of six elements and showcasing the unparalleled interoperability of these NFTs.",
        "fullDescription": "<p><strong>About MODragon NFT</strong></p>\n<p></p>\n<p>MODragon NFTs introduce a mesmerizing world of six elements: Fire, Water, Wood, Earth, Light, and Dark. As the Genesis Dragon Egg hatches in the airdrop, a realm of possibilities opens. Embrace the chance to obtain a premium multi-element dragon and unlock the thrilling gameplay of battling, fusion, and nurturing. Witness the magic unfold as unique multi-element dragons, including coveted four-element rarities, emerge, showcasing the unparalleled interoperability of these NFTs. Embark on an enchanting journey like no other!</p>",
          "logo": "https://dashboard-assets.dappradar.com/document/38131/modragon-dapp-games-38131-logo_365fdabbad42c4597b67301db940afb9.png",
            "link": "https://dappradar.com/arbitrum/games/modragon",
              "website": "https://www.mobox.io/dragonmo/",
                "chains": [
                  "arbitrum"
                ],
                  "categories": [
                    "games"
                  ],
                    "socialLinks": [
                      {
                        "title": "twitter",
                        "url": "https://twitter.com/MOBOX_Official",
                        "type": "twitter"
                      },
                      {
                        "title": "youtube",
                        "url": "https://www.youtube.com/@mobox1312",
                        "type": "youtube"
                      }
                    ],
                      "metrics": {
    "transactions": 158953,
      "uaw": 8271,
        "volume": 10725590.22,
          "balance": 0
  }
},
{
  "dappId": 1549,
    "name": "The Sandbox",
      "description": "Play, Create, Own, and Govern a virtual world made by players. \n\nCreate your Avatar now and enter the Metaverse!",
        "fullDescription": "<p>A Decentralized Gaming Platform Made By Players Take your creative freedom to the next level &amp; monetize it in the blockchain! Play, Create &amp; Earn!&nbsp;</p>\n<p>The Sandbox is the prime metaverse location that has been fueling the recent growth of virtual real-estate demand, having partnered with major IPs and brands including The Walking Dead, Atari, Rollercoaster Tycoon, Care Bears, The Smurfs, Shaun the Sheep, and Binance.&nbsp;</p>\n<p>Building on existing The Sandbox IP that has more than 40 million global installs on mobile, The Sandbox metaverse offers players and creators a decentralized and intuitive platform to create immersive 3D worlds and game experiences and to safely store, trade, and monetize their creations. For more information, please visit <u>www.sandbox.game</u> and follow the regular updates on <u>Twitter</u>, <u>Medium</u> and <u>Discord</u>.</p>",
          "logo": "https://dashboard-assets.dappradar.com/document/1549/thesandbox-dapp-games-eth-logo_599758faff1fae65fe4ee675dc616799.png",
            "link": "https://dappradar.com/polygon/games/the-sandbox",
              "website": "https://www.sandbox.game/",
                "chains": [
                  "ethereum",
                  "polygon"
                ],
                  "categories": [
                    "games"
                  ],
                    "socialLinks": [
                      {
                        "title": "discord",
                        "url": "https://discordapp.com/invite/vAe4zvY",
                        "type": "discord"
                      },
                      {
                        "title": "facebook",
                        "url": "https://www.facebook.com/TheSandboxGame/",
                        "type": "facebook"
                      },
                      {
                        "title": "instagram",
                        "url": "https://www.instagram.com/thesandboxgame/",
                        "type": "instagram"
                      },
                      {
                        "title": "medium",
                        "url": "https://medium.com/sandbox-game",
                        "type": "medium"
                      },
                      {
                        "title": "twitter",
                        "url": "https://twitter.com/thesandboxgame",
                        "type": "twitter"
                      },
                      {
                        "title": "youtube",
                        "url": "https://youtu.be/XRnUXQyVANE",
                        "type": "youtube"
                      }
                    ],
                      "metrics": {
    "transactions": 4868,
      "uaw": 6836,
        "volume": 7164362.1,
          "balance": 46405308.56
  }
},
{
  "dappId": 32605,
    "name": "Planet Mojo",
      "description": "Planet Mojo is an ecosystem of interconnected games built by game industry veterans.",
        "fullDescription": "<p>Planet Mojo is an ecosystem of interconnected games built by Mystic Moose and set inside a mysterious alien planet with an evolving narrative. Players compete with customized teams of fantastical creatures in a suite of eSports, PvP games. The long-term goal is to create a sustainable and growing catalog of games for the next generation of gamers, empowering players by allowing them to own their in-game assets and have a say in the project’s future direction.</p>",
          "logo": "https://dashboard-assets.dappradar.com/document/32605/planetmojo-dapp-games-matic-logo_936f9d5395d2a4b3bb346e19242830b3.png",
            "link": "https://dappradar.com/polygon/games/planet-mojo",
              "website": "https://www.planetmojo.io/",
                "chains": [
                  "polygon"
                ],
                  "categories": [
                    "games"
                  ],
                    "socialLinks": [
                      {
                        "title": "discord",
                        "url": "https://discord.com/invite/PlanetMojo",
                        "type": "discord"
                      },
                      {
                        "title": "medium",
                        "url": "https://medium.com/planet-mojo-blog",
                        "type": "medium"
                      },
                      {
                        "title": "twitter",
                        "url": "https://twitter.com/weareplanetmojo",
                        "type": "twitter"
                      },
                      {
                        "title": "youtube",
                        "url": "https://www.youtube.com/channel/UCgWNdYSWAGRMRHNuP05UKcA",
                        "type": "youtube"
                      }
                    ],
                      "metrics": {
    "transactions": 7961,
      "uaw": 6043,
        "volume": 0,
          "balance": 0
  }
},
{
  "dappId": 31490,
    "name": "DeHeroGame",
      "description": "DeHeroGame is a blockchain game published by MixMarvel with a global heroic fight as the background, and it was first released on Rangers Protocol.",
        "fullDescription": "<p>DeHeroGame pioneers GameFi 2.0 through NFT adventures in a multi-universe. It pivots on TCG playability and is the latest iteration of “Staking Card Game”. DeHeroGame is the first gaming application on Rangers Mainnet, which supports ultimate decentralization, thrilling gaming experience, asset cross-chain, super low gas fee, and Web2-friendly solutions. The story of DeHeroGame takes place in a universe of countless parallel time-spaces, where hero protagonists have left wonderful legends. Everyone in their time-space may not have expected that one day the boundaries will collide and they will mingle in unimaginable chaos and unite to restore peace. To protect the tranquility of the universe, ancient sages created a time-space balancer, which has the most sophisticated structure ever. The Guild of Heroes is the divine guardian of the balancer. No one knows exactly where the balancer is stored. But legends agree that the balancer is kept in the \"Still Clock Tower\" known as the \"Center of the Universe\". One day, a mysterious storm started to form around the balancer, causing time-space cracks until the balancer stopped operating… The Guild of Heroes arises in times of crisis, summoning heroes from all parallel time-spaces to unite and discover the saving source of the balancer through boundless adventures.</p>",
          "logo": "https://dashboard-assets.dappradar.com/document/31490/deherogame-dapp-games-rangers-logo_d29b184278e78775de6ee71312c771ec.png",
            "link": "https://dappradar.com/rangers/games/deherogame-3",
              "website": "https://www.dehero.co/",
                "chains": [
                  "rangers",
                  "binance-smart-chain"
                ],
                  "categories": [
                    "games"
                  ],
                    "socialLinks": [
                      {
                        "title": "cmc",
                        "url": "https://coinmarketcap.com/currencies/deherogame/",
                        "type": "cmc"
                      },
                      {
                        "title": "coingecko",
                        "url": "https://www.coingecko.com/en/coins/deherogame-amazing-token",
                        "type": "coingecko"
                      },
                      {
                        "title": "discord",
                        "url": "https://discord.com/invite/dehero-official",
                        "type": "discord"
                      },
                      {
                        "title": "medium",
                        "url": "https://medium.com/@DeHero_official",
                        "type": "medium"
                      },
                      {
                        "title": "telegram",
                        "url": "https://t.me/deherogame_announcement",
                        "type": "telegram"
                      },
                      {
                        "title": "twitter",
                        "url": "https://twitter.com/DeHero_official",
                        "type": "twitter"
                      }
                    ],
                      "metrics": {
    "transactions": 973331,
      "uaw": 5835,
        "volume": 41540.29,
          "balance": 756.48
  }
},
{
  "dappId": 30197,
    "name": "Hunters On-Chain by BoomLand",
      "description": "Join the hunt in Hunters On-Chain by BoomLand! Battle players and mobs in action-packed RPG gameplay. Free-to-play with thrilling game modes. Ready to hunt?",
        "fullDescription": "<p><strong>Hunters On-Chain by BoomLand is a Free-To-Play action RPG game where players compete against each other and the environment in various game modes to see who comes out on top.</strong></p>\n<p>----</p>\n<p><strong>ABOUT BoomLand:</strong></p>\n<p>----</p>\n<p><strong>BoomLand</strong> is a Blockchain game developer and publisher with its own NFT marketplace and decentralized ecosystem. &nbsp;Their mission is to push the mass adoption of Web3 gaming by targeting and onboarding traditional Web2 players. The studio is led by veterans of the Mobile gaming industry, responsible for publishing over <strong>200 games</strong>, generating more than<strong> 1.5 Billion downloads to date</strong>.</p>\n<p><strong>BoomLand </strong>games are known for the seamless onboarding of new players by removing the need to learn complex concepts like wallet creation, gas fees, crypto exchanges, and token swaps. In BoomLand, all you need to do is to have fun.</p>\n<p>----</p>\n<p><strong>Hunters On-Chain </strong>is the Web3 version of the hugely successful mobile game Hunt Royale with over<strong> seven million </strong>installs on the AppStore and Google Play.</p>\n<p>Hunt Royale was released on March 2021, and in January 2022, the team felt that despite its already huge success, the game had the potential to go so much higher. Thus, came the idea of tokenization.</p>\n<p>Because of the existing architecture of the game mechanics, it appeared natural that Hunt Royale's future was on Web3.</p>",
          "logo": "https://dashboard-assets.dappradar.com/document/30197/huntersonchainbyboomland-dapp-games-matic-logo_6a82691b83d9e56864e6eb3264c3d3ae.png",
            "link": "https://dappradar.com/polygon/games/hunters-on-chain-by-boomland",
              "website": "https://boomland.io",
                "chains": [
                  "polygon"
                ],
                  "categories": [
                    "games"
                  ],
                    "socialLinks": [
                      {
                        "title": "discord",
                        "url": "https://discord.gg/boomland",
                        "type": "discord"
                      },
                      {
                        "title": "telegram",
                        "url": "https://t.me/BoomlandChat",
                        "type": "telegram"
                      },
                      {
                        "title": "twitter",
                        "url": "https://twitter.com/BoomLandGames",
                        "type": "twitter"
                      },
                      {
                        "title": "youtube",
                        "url": "https://www.youtube.com/@BoomLandGames",
                        "type": "youtube"
                      }
                    ],
                      "metrics": {
    "transactions": 36814,
      "uaw": 5829,
        "volume": 0,
          "balance": 0.79
  }
},
{
  "dappId": 19943,
    "name": "MetaJuice on IMVU",
      "description": "IMVU is the world’s largest 3D social metaverse platform, and has been building its community for over 18 years.",
        "fullDescription": "<p>IMVU is the world’s largest 3D social metaverse platform, and has been building its community for over 18 years totaling nearly 350,000,000 in user registrations today. On mobile, IMVU is a global Top 4 grossing social app and has nearly 1,000,000 daily active users with over 200,000 active creators and earners on the platform. Underpinning this social metaverse is a high-velocity, comprehensive economy for its community. We have now launched NFTs on the IMVU platform so that our users can enjoy the full benefits of web3 digital assets.</p>",
          "logo": "https://dashboard-assets.dappradar.com/document/19943/imvu-dapp-collectibles-immutablex-logo_ef10fba9fe577ccd2ac954b4a05d2895.png",
            "link": "https://dappradar.com/immutablex/games/metajuice-on-imvu",
              "website": "https://imvu.com",
                "chains": [
                  "immutablex",
                  "polygon"
                ],
                  "categories": [
                    "games"
                  ],
                    "socialLinks": [
                      {
                        "title": "facebook",
                        "url": "https://www.facebook.com/IMVU/",
                        "type": "facebook"
                      },
                      {
                        "title": "twitter",
                        "url": "https://twitter.com/themetajuice",
                        "type": "twitter"
                      },
                      {
                        "title": "youtube",
                        "url": "https://www.youtube.com/@themetajuice",
                        "type": "youtube"
                      }
                    ],
                      "metrics": {
    "transactions": 7534,
      "uaw": 5505,
        "volume": 0,
          "balance": 0
  }
},
{
  "dappId": 36816,
    "name": "Pomerium",
      "description": "Pomerium is a web3 gaming studio with independent in-house development teams as well as its original content",
        "fullDescription": "<p>Pomerium is aiming to establish a solid long-term ecosystem in web3 gaming and provide various services facilitating the user experience via in-house development teams with its original content</p>",
          "logo": "https://dashboard-assets.dappradar.com/document/36816/pomerium-dapp-marketplaces-36816-logo_c183dca5fe1d25ae5ba4c979a62369de.png",
            "link": "https://dappradar.com/binance-smart-chain/games/pomerium",
              "website": "https://pomerium.space/",
                "chains": [
                  "binance-smart-chain"
                ],
                  "categories": [
                    "games"
                  ],
                    "socialLinks": [
                      {
                        "title": "discord",
                        "url": "https://discord.gg/pomerium",
                        "type": "discord"
                      },
                      {
                        "title": "medium",
                        "url": "https://medium.com/pomerium",
                        "type": "medium"
                      },
                      {
                        "title": "telegram",
                        "url": "https://t.me/pomerium_official",
                        "type": "telegram"
                      },
                      {
                        "title": "twitter",
                        "url": "https://twitter.com/Pomerium_space",
                        "type": "twitter"
                      },
                      {
                        "title": "youtube",
                        "url": "https://www.youtube.com/@pomerium",
                        "type": "youtube"
                      }
                    ],
                      "metrics": {
    "transactions": 7716,
      "uaw": 5163,
        "volume": 0,
          "balance": 9.92
  }
},
{
  "dappId": 10021,
    "name": "Citizen Conflict",
      "description": "Is a F2P Hero Shooter game designed to merge the best of both worlds -  the Esports game modes and bring large-scale gameplay to the MMO open world.",
        "fullDescription": "<p><strong>Citizen Conflict - is a free-to-play shooter game designed to merge the best of both worlds - to deliver the competitive heat symptomatic of the esports game modes as well as to bring large-scale gameplay on the MMO open world map. The game doesn’t fall short on an immersive storyline, which finds three antagonistic syndicates and captivating heroes waging an endless war for dominance. To scale its futuristic dystopian design to the top, Citizen Conflict will brim over with tons of futuristic vehicles, aircraft, guns, and uncanny equipment.</strong></p>",
          "logo": "https://dashboard-assets.dappradar.com/document/10021/citizenconflict-dapp-games-10021-logo_eabee7d60b6fd2dbe623d0d1d1e46104.png",
            "link": "https://dappradar.com/binance-smart-chain/games/citizen-conflict",
              "website": "https://citizenconflict.com/home",
                "chains": [
                  "binance-smart-chain",
                  "polygon"
                ],
                  "categories": [
                    "games"
                  ],
                    "socialLinks": [
                      {
                        "title": "discord",
                        "url": "https://discord.com/invite/qorpogamestudio",
                        "type": "discord"
                      },
                      {
                        "title": "instagram",
                        "url": "https://www.instagram.com/citizenconflict/",
                        "type": "instagram"
                      },
                      {
                        "title": "telegram",
                        "url": "https://t.me/citizenconflictnews",
                        "type": "telegram"
                      },
                      {
                        "title": "twitter",
                        "url": "https://twitter.com/CitizenConflict",
                        "type": "twitter"
                      },
                      {
                        "title": "youtube",
                        "url": "https://www.youtube.com/@QORPOGameStudio",
                        "type": "youtube"
                      }
                    ],
                      "metrics": {
    "transactions": 104370,
      "uaw": 5016,
        "volume": 6.8,
          "balance": 184.59
  }
},
{
  "dappId": 14290,
    "name": "Realm NFT",
      "description": "Realm is a strategic Play-2-Earn resource management game on the Wax blockchain where you utilize your NFT Leaders to save the world!",
        "fullDescription": "<p>Realm is a resource management game where you strategically utilize your NFT leaders to save the world from devastation. Players will collect resources, unlock regions, earn RLM Tokens, level up their realm and much more. The core game revolves around a not so distant and not so fictional future where the world is in turmoil due to war, famine, disease and meteors. The current leaders are failing and have lost control. A secret organization known as Realm is assembling a team to return the world to order. Players will be able to strategically build their Realm team with the ultimate objective of restoring order in each region. This will not be easy and it will require a lot of strategy from the player to choose when and where to utilize each leader to employ their unique strengths. Built by a team of crypto enthusiast developers with a combined development experience of 30+ years and leveraging the power of the WAX blockchain, Realm allows players to collect, trade and upgrade their NFT leaders which will create a rich game and community experience.</p>",
          "logo": "https://dashboard-assets.dappradar.com/document/14290/realm-dapp-games-wax-logo_bbb3d96db3ae898ee2ed17e3b5123e48.png",
            "link": "https://dappradar.com/wax/games/realm-nft",
              "website": "https://realmnft.io",
                "chains": [
                  "wax"
                ],
                  "categories": [
                    "games"
                  ],
                    "socialLinks": [
                      {
                        "title": "discord",
                        "url": "https://discord.gg/pGvjVPJybg",
                        "type": "discord"
                      },
                      {
                        "title": "facebook",
                        "url": "https://www.facebook.com/RealmNFT",
                        "type": "facebook"
                      },
                      {
                        "title": "instagram",
                        "url": "https://www.instagram.com/realmnftio/",
                        "type": "instagram"
                      },
                      {
                        "title": "telegram",
                        "url": "https://t.me/+GYPmxR9nOaBjODE1",
                        "type": "telegram"
                      },
                      {
                        "title": "twitter",
                        "url": "https://twitter.com/RealmNft",
                        "type": "twitter"
                      },
                      {
                        "title": "youtube",
                        "url": "https://www.youtube.com/channel/UCIXHE8c0EMA-P3GduhnZVFw",
                        "type": "youtube"
                      }
                    ],
                      "metrics": {
    "transactions": 150280,
      "uaw": 4772,
        "volume": 21892.38,
          "balance": 0
  }
},
{
  "dappId": 15817,
    "name": "MiningNetwork",
      "description": "This is a new and unique model in the gaming sector, which will radically change the GameFee sector. It is a completely different tokenomics in a game built fro",
        "fullDescription": "<p>Mining network is a game on WAX blockchain. It combines FreeToPlay and PlayToEarn models. Every new user gets a free NFT to play and earn immediately after registering in the game.</p>\n<p>Mining Networks is a game with a revolutionary economic model that has never been used in the blockchain. The point is that the amount of extracted game resources is not equal to the issued number of tokens. The number of game resources will increase as the number of players increases and their game assets improve. The issue of game tokens will decrease constantly. This solution will ensure a constant increase in the token's price and save the community from negative phenomena such as excessive inflation. The essence of the Mining Networks is to get the maximum amount of game resources and at the best time to exchange it for a game token.</p>",
          "logo": "https://dashboard-assets.dappradar.com/document/15817/miningnetwork-dapp-games-wax-logo_74987c6b716fdd9c2e1369910721dcf9.png",
            "link": "https://dappradar.com/wax/games/miningnetwork",
              "website": "https://miningnetwork.io/",
                "chains": [
                  "wax"
                ],
                  "categories": [
                    "games"
                  ],
                    "socialLinks": [
                      {
                        "title": "discord",
                        "url": "https://discord.gg/wspa3NxE",
                        "type": "discord"
                      },
                      {
                        "title": "telegram",
                        "url": "https://t.me/miningnetwork_nft",
                        "type": "telegram"
                      },
                      {
                        "title": "twitter",
                        "url": "https://twitter.com/MiningNetwork_1",
                        "type": "twitter"
                      }
                    ],
                      "metrics": {
    "transactions": 215576,
      "uaw": 4152,
        "volume": 0,
          "balance": 0
  }
},
{
  "dappId": 10545,
    "name": "Ninneko",
      "description": "Ninneko is the leading edge of NFT game that combines Idle RPG gameplay and Breeding system.",
        "fullDescription": "<p>Ninneko is an enchanting NFT role-playing game on the Binance Smart Chain in which players can earn by nurturing Ninneko, building lineups to defeat enemies through PvP/PvE battles and campaign.</p>\n<p>Players will be immersed in a mysterious village in the deep forests and chilled out spending hours raising Ninneko, which is known as ninbyō (忍猫), are adorable Ninja Cat.</p>",
          "logo": "https://dashboard-assets.dappradar.com/document/10545/ninneko-dapp-games-bsc-logo_312e748e353a9f1bae79b9f0cfe24061.png",
            "link": "https://dappradar.com/binance-smart-chain/games/ninneko",
              "website": "https://ninneko.com/",
                "chains": [
                  "binance-smart-chain"
                ],
                  "categories": [
                    "games"
                  ],
                    "socialLinks": [
                      {
                        "title": "facebook",
                        "url": "https://www.facebook.com/ninnekogame/",
                        "type": "facebook"
                      },
                      {
                        "title": "telegram",
                        "url": "https://t.me/ninnekogame",
                        "type": "telegram"
                      },
                      {
                        "title": "twitter",
                        "url": "https://twitter.com/ninnekogame",
                        "type": "twitter"
                      }
                    ],
                      "metrics": {
    "transactions": 9500,
      "uaw": 4066,
        "volume": 0,
          "balance": 1180.51
  }
},
{
  "dappId": 17332,
    "name": "CPL",
      "description": "Virtual Games, Real Rewards\nCPL is a trading simulation game where you can learn and earn crypto",
        "fullDescription": "<p>CPL is a blockchain based trading game built on Polygon &amp; BNB chain. As part of trading game, you will be given virtual tokens to buy and sell crypto currencies i.e. Bitcoin, ETH, BNB etc. Participants who make maximum profit will be awarded with real tokens as prize at the end of each game. If you are someone who is trading or wanting to trade crypto currencies, its the best platform for you to see how effective your trading strategies. are. You can learn, improvise and earn fantastic rewards.</p>",
          "logo": "https://dashboard-assets.dappradar.com/document/17332/cpl-dapp-games-matic-logo_8c5b68b84185d91903112c27c38b55a6.png",
            "link": "https://dappradar.com/polygon/games/cpl",
              "website": "https://cplcrypto.com",
                "chains": [
                  "polygon",
                  "binance-smart-chain",
                  "klaytn"
                ],
                  "categories": [
                    "games"
                  ],
                    "socialLinks": [
                      {
                        "title": "twitter",
                        "url": "https://twitter.com/cpl_crypto",
                        "type": "twitter"
                      },
                      {
                        "title": "youtube",
                        "url": "https://www.youtube.com/channel/UChshiudo_eqVbqRsftYf7xw",
                        "type": "youtube"
                      }
                    ],
                      "metrics": {
    "transactions": 22211,
      "uaw": 4013,
        "volume": 7039.54,
          "balance": 3139.78
  }
},
{
  "dappId": 19595,
    "name": "Treasure DAO",
      "description": "Treasure is the decentralized video game console connecting games and communities together through imagination, $MAGIC, and NFTs.",
        "fullDescription": "<p>Treasure’s ambition is to build the ‘decentralized game console’ connecting games and communities together through bottom-up driven IP and infrastructure, unified through a common set of composable resources. Underpinning the Treasure ecosystem is $MAGIC - a fair launch token which powers key infrastructure and acts as a reserve asset across partner ‘game cartridges’.</p>",
          "logo": "https://dashboard-assets.dappradar.com/document/18467/treasuredao-dapp-games-other-logo_b1063c3a21f4b51886f7e41fc455ccbd.png",
            "link": "https://dappradar.com/ethereum/games/treasure-dao",
              "website": "https://treasure.lol",
                "chains": [
                  "arbitrum",
                  "ethereum"
                ],
                  "categories": [
                    "games"
                  ],
                    "socialLinks": [
                      {
                        "title": "discord",
                        "url": "https://discord.gg/treasuredao",
                        "type": "discord"
                      },
                      {
                        "title": "twitter",
                        "url": "https://twitter.com/treasure_dao",
                        "type": "twitter"
                      }
                    ],
                      "metrics": {
    "transactions": 63110,
      "uaw": 3864,
        "volume": 432855.11,
          "balance": 26651330.65
  }
},
{
  "dappId": 14534,
    "name": "The Dustland",
      "description": "Dustland is the latest game in OliveX’s fitness metaverse that rewards players in real life for running and cycling.",
        "fullDescription": "<p>Dustland is the latest game in OliveX’s fitness metaverse that rewards players in real life for running and cycling. This ecosystem is designed from the ground-up to be cross-chain compatible utilising DOSE utility token. NFTs in this collection provide access to the Dustland world, collectables, and gameplay experiences for Dustland runners, riders and fitness enthusiasts of all types.</p>",
          "logo": "https://dashboard-assets.dappradar.com/document/14534/thedustland-dapp-collectibles-matic-logo_dc8523dd6d63cf4d9d20738465ec8d46.png",
            "link": "https://dappradar.com/polygon/games/the-dustland",
              "website": "https://www.thedustland.com/",
                "chains": [
                  "polygon",
                  "ethereum"
                ],
                  "categories": [
                    "games"
                  ],
                    "socialLinks": [
                      {
                        "title": "discord",
                        "url": "https://discord.com/invite/FCu44nvbxz",
                        "type": "discord"
                      },
                      {
                        "title": "facebook",
                        "url": "https://www.facebook.com/dustlandrunner/",
                        "type": "facebook"
                      },
                      {
                        "title": "instagram",
                        "url": "https://www.instagram.com/dosetoken/",
                        "type": "instagram"
                      },
                      {
                        "title": "medium",
                        "url": "https://medium.com/@DOSEToken",
                        "type": "medium"
                      },
                      {
                        "title": "telegram",
                        "url": "https://t.me/dose_community",
                        "type": "telegram"
                      },
                      {
                        "title": "twitter",
                        "url": "https://twitter.com/the_dustland",
                        "type": "twitter"
                      },
                      {
                        "title": "youtube",
                        "url": "https://www.youtube.com/channel/UCRekf9p7CKrWYbUIY7VU5Bw",
                        "type": "youtube"
                      }
                    ],
                      "metrics": {
    "transactions": 48261,
      "uaw": 3701,
        "volume": 0.09,
          "balance": 1265.72
  }
},
{
  "dappId": 15631,
    "name": "Era7: Game of Truth",
      "description": "Era7: Game of Truth is a metaverse-style TCG, which has been created by a team of core blockchain technicians and members of casual game development companies.",
        "fullDescription": "<p>Era7: Game of Truth is a metaverse-style TCG, developed on the Binance Smart Chain (BSC), which has been created by a team of core blockchain technicians and members of well-known casual game development companies.</p>\n<p>This is an addictive yet state-of-the-art card-trading game that uses a ground-breaking new gaming method. With the perfect combination of fighting and strategy, this game becomes thrillingly immersive and is split up into separate three-minute games.</p>\n<p>Players can combine the cards in their own card library in different ways to ensure that their deck is as strong as possible. They can play either PVE or PVP by deploying and placing cards. Different cards have different effects, and whether we’re talking about Common or Legendary cards, players will be keen to collect them all. Players will be tasked not only to watch their own deck but also to carefully observe the movements and positioning of their opponents. This provides the player with an incentive to practice and develop their in-game skills over time while receiving fantastic brain training akin to that received by chess players. Only, this training is manifested in skilfully using heroes to ride thousands out to the battlefield.</p>\n<p>Of course, in addition to the game being fun, each one of the player’s cards has its own value. Players can obtain high-value cards by collecting, fighting, trading, summoning or synthesizing certain cards. This is also one of the biggest charms of GameFi when compared with traditional games. Era7 will continuously update the game’s content, adding new cards, playing methods and battle passes to meet the continuous needs of players while generating revenue across the board. Early players of Era7 will enjoy dividends from the ecosystem. We have a reward mechanism in place for inviting friends and sharing the game. Era7 provides a whole host of profit models for individuals and organizations from a variety of backgrounds and vertical markets.</p>",
          "logo": "https://dashboard-assets.dappradar.com/document/15631/era7gameoftruth-dapp-games-bsc-logo_f8c8cc7ed553bea50d85c3287825fbda.png",
            "link": "https://dappradar.com/binance-smart-chain/games/era7-game-of-truth",
              "website": "https://www.era7.io",
                "chains": [
                  "binance-smart-chain"
                ],
                  "categories": [
                    "games"
                  ],
                    "socialLinks": [
                      {
                        "title": "discord",
                        "url": "https://discord.com/invite/jtFRzTv5Zw",
                        "type": "discord"
                      },
                      {
                        "title": "facebook",
                        "url": "https://www.facebook.com/groups/era7official",
                        "type": "facebook"
                      },
                      {
                        "title": "telegram",
                        "url": "https://t.me/Era7_Official",
                        "type": "telegram"
                      },
                      {
                        "title": "twitter",
                        "url": "https://twitter.com/Era7_official",
                        "type": "twitter"
                      }
                    ],
                      "metrics": {
    "transactions": 13887,
      "uaw": 3692,
        "volume": 21830.48,
          "balance": 1587224.46
  }
},
{
  "dappId": 16376,
    "name": "DracooMaster",
      "description": "A strategic roguelike deck-building game.",
        "fullDescription": "<p>A strategic roguelike deck-building game. Dracoo's card arrangement achieves the limitless possibilities of real-time multiplayer online competitive games in your adventure to the Sacred Peak.</p>",
          "logo": "https://dashboard-assets.dappradar.com/document/16376/dracoomaster-dapp-games-bsc-logo_84b8d7f52d03a81a2394cc3a0b89f6ad.png",
            "link": "https://dappradar.com/binance-smart-chain/games/dracoomaster-2",
              "website": "https://world.dracoomaster.com/",
                "chains": [
                  "binance-smart-chain"
                ],
                  "categories": [
                    "games"
                  ],
                    "socialLinks": [
                      {
                        "title": "discord",
                        "url": "https://discord.com/invite/dracooworld",
                        "type": "discord"
                      },
                      {
                        "title": "facebook",
                        "url": "https://business.facebook.com/DracooMaster-109958111471068/",
                        "type": "facebook"
                      },
                      {
                        "title": "instagram",
                        "url": "https://www.instagram.com/accounts/login/?next=/dracoomaster/",
                        "type": "instagram"
                      },
                      {
                        "title": "medium",
                        "url": "https://medium.com/@Dracoo_Master",
                        "type": "medium"
                      },
                      {
                        "title": "telegram",
                        "url": "https://t.me/DracooMasterOfficial",
                        "type": "telegram"
                      },
                      {
                        "title": "tiktok",
                        "url": "https://www.tiktok.com/@dracoomaster_official?lang=en",
                        "type": "tiktok"
                      },
                      {
                        "title": "twitter",
                        "url": "https://twitter.com/Dracoo_Master",
                        "type": "twitter"
                      },
                      {
                        "title": "youtube",
                        "url": "https://www.youtube.com/channel/UC682aHoh8rJPjgzERX80xiw",
                        "type": "youtube"
                      }
                    ],
                      "metrics": {
    "transactions": 87860,
      "uaw": 3661,
        "volume": 4059.41,
          "balance": 641562.61
  }
},
{
  "dappId": 34360,
    "name": "Aurora 2048",
      "description": "2048 is a popular puzzle game that has been adapted for play on the Aurora blockchain.",
        "fullDescription": "<p>The game is simple, yet addictive, and challenges players to combine numbered tiles in order to reach the elusive 2048 tile.</p>\n<p>The game is played on a 4x4 grid, and each tile on the grid displays a number that is a power of 2 (starting with 2 and doubling each time). The objective of the game is to slide the tiles around the grid in order to combine tiles with the same number, creating a new tile with twice the value of the original. The game ends when there are no more moves left to make. But the player can reach the maximum known record.&nbsp;</p>\n<p>2048 WORLD RECORD: <strong>3,866,052 POINTS &amp; 131072 TILE</strong></p>",
          "logo": "https://dashboard-assets.dappradar.com/document/34360/aurora2048-dapp-games-aurora-logo_d0896319782b41ea137a9614a98c3806.png",
            "link": "https://dappradar.com/aurora/games/aurora-2048",
              "website": "https://twenty48.app/",
                "chains": [
                  "aurora"
                ],
                  "categories": [
                    "games"
                  ],
                    "socialLinks": [],
                      "metrics": {
    "transactions": 8156,
      "uaw": 3467,
        "volume": 0,
          "balance": 0
  }
},
{
  "dappId": 18265,
    "name": "Hero Blaze : Three Kingdoms",
      "description": "Hero Blaze: Three Kingdoms is a BNB Chain based casual RPG mobile game integrated with P2E.",
        "fullDescription": "<p>Hero Blaze: Three Kingdoms is a BNB Chain based casual RPG mobile game integrated with P2E.</p>\n<p>We have applied the latest trend in casual RPG while leveraging the successful Hero Blaze's IP. It is the first collaboration with NFT platform and metaverse game KLAYMETA, and we have successfully adopted P2E(Play to earn) in the casual RPG genre.</p>\n<p>Enjoy the story of the Three Kingdoms, collect hundreds of generals, and train them through various general training systems such as general summon, general combination, general promotion, equipment upgrade, research, and more in Hero Blaze: Three Kingdoms.</p>\n<p>Through trained generals, you can form the strongest team through general skills, team combination, and formation effects to compete with other players in different battles using your own strategy.</p>\n<p>Play casually through easy controls, enjoy fast growth and action-packed battles without repetitive gameplay through an Idle system!</p>",
          "logo": "https://dashboard-assets.dappradar.com/document/18265/heroblazethreekingdoms-dapp-games-bsc-logo_daa28d3306fad625a3b69d0451d36697.png",
            "link": "https://dappradar.com/binance-smart-chain/games/hero-blaze-three-kingdoms",
              "website": "https://heroblaze3kd.io/",
                "chains": [
                  "binance-smart-chain"
                ],
                  "categories": [
                    "games"
                  ],
                    "socialLinks": [
                      {
                        "title": "blog",
                        "url": "https://cafe.naver.com/mudolrebirth",
                        "type": "blog"
                      },
                      {
                        "title": "facebook",
                        "url": "https://www.facebook.com/mudolrebirth",
                        "type": "facebook"
                      },
                      {
                        "title": "github",
                        "url": "https://github.com/KlayMeta/mudol-contract",
                        "type": "github"
                      },
                      {
                        "title": "medium",
                        "url": "https://heroblaze3kd.medium.com/",
                        "type": "medium"
                      },
                      {
                        "title": "telegram",
                        "url": "https://t.me/HeroBlaze3kd",
                        "type": "telegram"
                      },
                      {
                        "title": "twitter",
                        "url": "https://twitter.com/HeroBlaze3kd",
                        "type": "twitter"
                      }
                    ],
                      "metrics": {
    "transactions": 16350,
      "uaw": 3362,
        "volume": 274814.54,
          "balance": 4441262.22
  }
},
{
  "dappId": 29204,
    "name": "WordleAurora",
      "description": "wordle game on Aurora chain",
        "fullDescription": "<p>Revolutionary 5 words game on the Aurora chain! Compete against other players to become the top Wordle master. Think of the best 5 words combination and submit your entry. The player with the highest score on our leaderboard will be crowned the Wordle champion. So, what are you waiting for? Join us and start playing now!</p>",
          "logo": "https://dashboard-assets.dappradar.com/document/29204/wordleaurora-dapp-games-aurora-logo_82e94ef9998e77ef6df6571a694c7d53.png",
            "link": "https://dappradar.com/aurora/games/wordleaurora",
              "website": "https://wordleaurora.com/",
                "chains": [
                  "aurora"
                ],
                  "categories": [
                    "games"
                  ],
                    "socialLinks": [],
                      "metrics": {
    "transactions": 5374,
      "uaw": 3343,
        "volume": 0,
          "balance": 0
  }
},
{
  "dappId": 19774,
    "name": "One World Nation",
      "description": "Earn stablecoin rewards by creating your fantasy crypto portfolio with Cryptonite NFTs",
        "fullDescription": "<p><strong>One World Nation</strong> is a global gaming platform that features a flagship game called <strong>Crypto Fantasy</strong>. This fantasy crypto portfolio game allows players to earn stablecoin rewards with NFTs called <strong>Cryptonites</strong>, which are based on real-world crypto tokens like BTC, ETH, BNB, SOL, and more.</p>\n<p>Each token has a limited collection of Genesis NFTs that players can breed to create additional NFTs. These NFTs can be traded freely on the platform's marketplace or lent to other players for <strong>daily passive income</strong>.</p>\n<p>In Crypto Fantasy, players can create a 5-a-side team with power-ups such as Knights and Defenders. The game allows players to become a master of the turbulent crypto markets by getting ranked based on the performances of their fantasy crypto portfolio in real matches.</p>\n<p>The platform also features other games like <strong>Prediction</strong>, <strong>Raffle Rewards</strong>, and <strong>Slot Machine</strong>, where players can <strong>win up to $3,500 USDC daily</strong>.</p>",
          "logo": "https://dashboard-assets.dappradar.com/document/19774/oneworldnation-dapp-games-matic-logo_0d5d7a9faee97b91d1d70d6eff1c0d2b.png",
            "link": "https://dappradar.com/polygon/games/one-world-nation",
              "website": "https://www.oneworldnation.game/",
                "chains": [
                  "polygon"
                ],
                  "categories": [
                    "games"
                  ],
                    "socialLinks": [
                      {
                        "title": "discord",
                        "url": "https://discord.gg/kgrNHKN7uj",
                        "type": "discord"
                      },
                      {
                        "title": "instagram",
                        "url": "https://www.instagram.com/owncryptoverse/",
                        "type": "instagram"
                      },
                      {
                        "title": "medium",
                        "url": "https://medium.com/one-world-nation",
                        "type": "medium"
                      },
                      {
                        "title": "telegram",
                        "url": "https://t.me/OWNcryptoverse",
                        "type": "telegram"
                      },
                      {
                        "title": "twitter",
                        "url": "https://twitter.com/cryptoverseown",
                        "type": "twitter"
                      },
                      {
                        "title": "youtube",
                        "url": "https://www.youtube.com/@owncryptoverse",
                        "type": "youtube"
                      }
                    ],
                      "metrics": {
    "transactions": 4754,
      "uaw": 3246,
        "volume": 19394.6,
          "balance": 279.59
  }
},
{
  "dappId": 18569,
    "name": "Monsterra",
      "description": "Monsterra is a free-to-play-to-earn \bmulti-chain inspired by the Axie Infinity game's pet world and the gameplay in Clash of Clan or Boom Beach of Supercell.",
        "fullDescription": "<p>Monsterra is a free-to-play-to-earn multi-chain game inspired by the Axie Infinity game's pet world and the gameplay in Clash of Clan or Boom Beach of Supercell. &nbsp;</p>\n<p>&nbsp;&nbsp;</p>\n<p>The game sets foot in a fictional world and revolves around farming, property building, and battling with other lands with the magical creatures named Mongen. The revolutionized design of Monsterra is a combination of free-to-play and free-to-earn models which allows millions of gaming enthusiasts to enjoy fun and have a high-profit stream with no prior investment. &nbsp;</p>\n<p>&nbsp;Product roadmap:</p>\n<p>- Adventure Mode: 05/2022&nbsp;</p>\n<p>- Battlefront Mode: 06/2022&nbsp;</p>\n<p>- Boss challenge Mode: 08/2022</p>\n<p>- Arena Mode: 09/2022</p>\n<p>&nbsp;Remarkable Milestones:</p>\n<p>- Fundraising of $2M led by Hashed ($600K), Huobi Ventures, Shima Capital, Salad Ventures and more than 50 partners globally;&nbsp;</p>\n<p>- Mystery Box Sale on Binance NFT Marketplace on Feb 7 with 20,000 boxes were sold out in 10s. Followed by another hit of quick sellout for 900 boxes on GameFi, Metverse Starter within 1 hour.</p>\n<p>- Special NFT Trading Promotion Campaign &amp; Rank Top 3 of Trading Volume on Binance NFT.</p>\n<p>- Top 1 Monsterra NFT gainers on Binance NFT</p>",
          "logo": "https://dashboard-assets.dappradar.com/document/18569/monsterra-dapp-games-bsc-logo_41776ead9778bafa2be8070079352f45.png",
            "link": "https://dappradar.com/avalanche/games/monsterra",
              "website": "https://monsterra.io/",
                "chains": [
                  "binance-smart-chain",
                  "avalanche",
                  "oec"
                ],
                  "categories": [
                    "games"
                  ],
                    "socialLinks": [
                      {
                        "title": "facebook",
                        "url": "https://www.facebook.com/MonsterraNFTGame/",
                        "type": "facebook"
                      },
                      {
                        "title": "tiktok",
                        "url": "https://www.tiktok.com/@monsterra_nftgame",
                        "type": "tiktok"
                      },
                      {
                        "title": "twitter",
                        "url": "https://twitter.com/Monsterra_P2E",
                        "type": "twitter"
                      },
                      {
                        "title": "youtube",
                        "url": "https://www.youtube.com/MonsterraNFTGame",
                        "type": "youtube"
                      }
                    ],
                      "metrics": {
    "transactions": 58564,
      "uaw": 3143,
        "volume": 31893.45,
          "balance": 94582.02
  }
},
{
  "dappId": 18730,
    "name": "DEFY",
      "description": "DEFY Labs is the company behind DEFY, a move-and-earn mobile game built on the Polygon blockchain.",
        "fullDescription": "<p>DEFY is a play to earn NFT Blockchain mobile game. Immersing players (Operatives) in a metaverse that bridges the virtual and physical worlds, DEFY fuses hyper casual code breaking gameplay, learn-to-earn elements, real world exploration and AR adventures.</p>\n<p>DEFY’s in-game economy has been designed with scale and longevity in mind. A dual currency model is combined with an extensive set of customisable tradable game assets as well as multiple incentive mechanisms that can be leveraged by the players who are willing to put in the effort.</p>\n<p>DEFY will launch with both premium and free-to-play user pathways, which will greatly enhance user acquisition and retention. An innovative graduation scholarship model aims to revolutionise the pathway to flexible work freedom for P2E players.</p>\n<p>DEFY taps into pop culture to create a rich Player vs Environment (PvE) narrative that has operatives joining a revolutionary hacker organisation with the mission of keeping the metaverse open and out of the control of the evil tech oligarchy, Future Systems. As the game evolves, factions and Player vs Player (PvP) elements will add to the longevity of the game and complexity of the peer-to-peer economy.</p>",
          "logo": "https://dashboard-assets.dappradar.com/document/18730/defy-dapp-games-matic-logo_e2a487b60ab59cd1d2e3ba75c3322432.png",
            "link": "https://dappradar.com/polygon/games/defy",
              "website": "https://defydisrupt.io",
                "chains": [
                  "polygon"
                ],
                  "categories": [
                    "games"
                  ],
                    "socialLinks": [
                      {
                        "title": "discord",
                        "url": "https://discord.gg/WzPZESaUBX",
                        "type": "discord"
                      },
                      {
                        "title": "medium",
                        "url": "https://medium.com/defy-labs",
                        "type": "medium"
                      },
                      {
                        "title": "twitter",
                        "url": "https://twitter.com/defydisrupt",
                        "type": "twitter"
                      },
                      {
                        "title": "youtube",
                        "url": "https://www.youtube.com/channel/UCyfxNtZ81Y9_1gmHKk6PMPQ",
                        "type": "youtube"
                      }
                    ],
                      "metrics": {
    "transactions": 21308,
      "uaw": 2983,
        "volume": 0,
          "balance": 0
  }
},
{
  "dappId": 21739,
    "name": "BurgerCities",
      "description": "BurgerCities is a one-stop Play&Earn MetaFi platform based on BNB Chain",
        "fullDescription": "<p><strong>BurgerCities is a one-stop MetaFi platform with a wide range of features, including its native token BURGER, a Decentralized Exchange (DEX), and Non-Fungible Tokens (NFT) which are made up of Heroes, Props, and Lands. Users can participate in daily activities like socializing, and playing games, as well as experience DeFi and NFT features with their own avatars like trading, staking, NFT exhibitions, etc. BurgerCities “evolved” from Burgerswap, a DeFi product that was already available on BNB Chain. It integrates DeFi and NFT into a larger metaverse scene to produce a uniform and standardized Web3 metaverse. BurgerCities aims to create a unified and standardized metaverse world of Web3 via integrating DeFi, NFT to the wider Metaverse. In this world, users could carry out daily events such as sociality, gaming, etc. Meanwhile, they could experience DeFi and NFT functions with their own avatars such as trade, bet, NFT exhibitions or Gamefi, etc.</strong></p>",
          "logo": "https://dashboard-assets.dappradar.com/document/21739/burgercities-dapp-games-bsc-logo_ad1db7d62171775d2c61c7fbc8ae60b2.png",
            "link": "https://dappradar.com/binance-smart-chain/games/burgercities-1",
              "website": "https://burgercities.org/",
                "chains": [
                  "binance-smart-chain"
                ],
                  "categories": [
                    "games"
                  ],
                    "socialLinks": [
                      {
                        "title": "discord",
                        "url": "https://discord.com/invite/burgerofficial",
                        "type": "discord"
                      },
                      {
                        "title": "medium",
                        "url": "https://burgercities.medium.com/",
                        "type": "medium"
                      },
                      {
                        "title": "telegram",
                        "url": "https://t.me/burgercities",
                        "type": "telegram"
                      },
                      {
                        "title": "twitter",
                        "url": "https://twitter.com/burger_cities",
                        "type": "twitter"
                      },
                      {
                        "title": "youtube",
                        "url": "https://www.youtube.com/channel/UCgAz8lcuZ7eTI4oPnxRQh-g",
                        "type": "youtube"
                      }
                    ],
                      "metrics": {
    "transactions": 65061,
      "uaw": 2845,
        "volume": 174378.13,
          "balance": 410735.91
  }
},
{
  "dappId": 16542,
    "name": "Crypture World",
      "description": "Collect Cryptures and build your adventure team. Earn resources and NFTs used for crafting, alchemy, farming and battles. Login now to claim a free starter kit!",
        "fullDescription": "<p>Crypture World is an NFT game developed by an experienced team on the WAX Blockchain.&nbsp;</p>\n<p>Collecting Cryptures, materials, and in-game resources presents a unique way of play-to-earn mechanics. Take part in adventures, brew potions, farm fruits on lands, and evolve Cryptures to build the strongest team for battles! Build and level up your Headquarters and unlock exciting new regions.&nbsp;</p>\n<p>What's the hold up? Quick, open some eggs and commence your journey in Crypture World!</p>",
          "logo": "https://dashboard-assets.dappradar.com/document/16542/cryptureworld-dapp-games-wax-logo_4ecce00d87b511fb35110d70927043c4.png",
            "link": "https://dappradar.com/wax/games/crypture-world",
              "website": "https://cryptureworld.com",
                "chains": [
                  "wax"
                ],
                  "categories": [
                    "games"
                  ],
                    "socialLinks": [
                      {
                        "title": "discord",
                        "url": "https://discord.com/invite/F2kg3h3wFF",
                        "type": "discord"
                      },
                      {
                        "title": "telegram",
                        "url": "https://t.me/cryptureworld",
                        "type": "telegram"
                      },
                      {
                        "title": "twitter",
                        "url": "https://twitter.com/CryptureW",
                        "type": "twitter"
                      },
                      {
                        "title": "youtube",
                        "url": "https://www.youtube.com/channel/UCTEC6Y1RK7T0Swl92JeZeZw",
                        "type": "youtube"
                      }
                    ],
                      "metrics": {
    "transactions": 19532,
      "uaw": 2784,
        "volume": 0,
          "balance": 0
  }
},
{
  "dappId": 14449,
    "name": "Crypto Unicorns",
      "description": "Crypto Unicorns is a playful Farming and Unicorn Breeding Game built on the blockchain.",
        "fullDescription": "<p>Crypto Unicorns is a playful Farming and Unicorn Breeding Game built on the blockchain. Gameplay centers around awesome Unicorn and Land NFTs, which players utilize in a fun farming simulation, as well as many other planned activities including Unicorn Jousting, Racing, and Team Battling.</p>",
          "logo": "https://dashboard-assets.dappradar.com/document/14449/cryptounicorns-dapp-games-matic-logo_fcdc3f62e04f4bca31764528604e315a.png",
            "link": "https://dappradar.com/polygon/games/crypto-unicorns",
              "website": "https://www.cryptounicorns.fun",
                "chains": [
                  "polygon"
                ],
                  "categories": [
                    "games"
                  ],
                    "socialLinks": [
                      {
                        "title": "discord",
                        "url": "https://discord.gg/cryptounicorns",
                        "type": "discord"
                      },
                      {
                        "title": "facebook",
                        "url": "https://www.facebook.com/cryptounicorns.fun",
                        "type": "facebook"
                      },
                      {
                        "title": "twitter",
                        "url": "https://twitter.com/crypto_unicorns",
                        "type": "twitter"
                      }
                    ],
                      "metrics": {
    "transactions": 110078,
      "uaw": 2624,
        "volume": 90399.58,
          "balance": 87271.89
  }
},
{
  "dappId": 19803,
    "name": "Ultiverse",
      "description": "Ultiverse builds the social gaming metaverse, connecting the Web3 to an immersive, fully VR compatible virtual world, and finally creates a unique MetaFi.",
        "fullDescription": "<p>Ultiverse builds the social gaming metaverse, connecting the Web3 to an immersive, fully VR compatible virtual world, and finally creates a unique MetaFi.</p>\n<p>Ethereum</p>\n<p>Electric Sheep is a collection of 7,000 Cyberpunk based NFTs. The genesis NFT PFP avatar collection of the Ultiverse. Genesis holders will also be eligible to airdrops and utilities such as:</p>\n<p>Airdrop of Governance Token on Binance Chain</p>\n<p>Land Deed</p>\n<p>1:1 Unique Avatar in Game</p>\n<p>Special access to Projects by Partners</p>\n<p>Whitelist and Discounts</p>\n<p>Many more</p>\n<p>Join our discord to find out how to be eligible for them!</p>",
          "logo": "https://dashboard-assets.dappradar.com/document/19803/ultiverse-dapp-games-ethereum-logo_5e85bd73dc7523f8dce97b9b09aa72e7.png",
            "link": "https://dappradar.com/ethereum/games/ultiverse",
              "website": "https://www.ultiverse.io",
                "chains": [
                  "ethereum",
                  "binance-smart-chain"
                ],
                  "categories": [
                    "games"
                  ],
                    "socialLinks": [
                      {
                        "title": "twitter",
                        "url": "https://twitter.com/UltiverseDAO",
                        "type": "twitter"
                      },
                      {
                        "title": "youtube",
                        "url": "https://www.youtube.com/c/Ultiverse",
                        "type": "youtube"
                      }
                    ],
                      "metrics": {
    "transactions": 45280,
      "uaw": 2549,
        "volume": 0,
          "balance": 0
  }
},
{
  "dappId": 31424,
    "name": "AQUA FARM",
      "description": "A Collect & Battle P2E Game.",
        "fullDescription": "<p>Aqua Farm is a Collect &amp; Battle P2E Game. Players will embark on Guardian to navigate the vast ocean with their Aree to explore, survive and fight through various adventures and quests in order to take back PODO from invaders to restore peace. It supports both mobile platforms iOS and Android.</p>",
          "logo": "https://dashboard-assets.dappradar.com/document/31424/aquafarm-dapp-games-matic-logo_df27af651407464142e8dc7c40c66872.png",
            "link": "https://dappradar.com/polygon/games/aqua-farm",
              "website": "https://playaquafarm.io/",
                "chains": [
                  "polygon"
                ],
                  "categories": [
                    "games"
                  ],
                    "socialLinks": [
                      {
                        "title": "cmc",
                        "url": "https://coinmarketcap.com/currencies/aree-shards/",
                        "type": "cmc"
                      },
                      {
                        "title": "coingecko",
                        "url": "https://www.coingecko.com/en/coins/aree-shards",
                        "type": "coingecko"
                      },
                      {
                        "title": "discord",
                        "url": "https://discord.gg/marslabs",
                        "type": "discord"
                      },
                      {
                        "title": "facebook",
                        "url": "https://www.facebook.com/playaquafarm",
                        "type": "facebook"
                      },
                      {
                        "title": "medium",
                        "url": "https://medium.com/@aquafarm.tmn",
                        "type": "medium"
                      },
                      {
                        "title": "telegram",
                        "url": "https://t.me/aquafarmchat",
                        "type": "telegram"
                      },
                      {
                        "title": "twitter",
                        "url": "https://twitter.com/aqua_farm",
                        "type": "twitter"
                      },
                      {
                        "title": "youtube",
                        "url": "https://www.youtube.com/@aqua_farm",
                        "type": "youtube"
                      }
                    ],
                      "metrics": {
    "transactions": 25634,
      "uaw": 2524,
        "volume": 0,
          "balance": 0
  }
},
{
  "dappId": 13189,
    "name": "Galactic Arena",
      "description": "Welcome to THE GALACTIC ARENA!",
        "fullDescription": "<p>This is the battlefield that everyone has been waiting for! It doesn't matter where your NFT comes from, In this NFTverse, you can bring your favorite heroes along with you! Take part in THE CARNIVAL, then make wagers on PvP battles in REAL TIME! Prizes include BNB, BUSD, GAN! Get on top of the Leaderboard and earn extra rewards!</p>",
          "logo": "https://dashboard-assets.dappradar.com/document/13189/galacticarenathenftverse-dapp-games-bsc-logo_18c424320d55c89cf9a6d66d990e9ad4.png",
            "link": "https://dappradar.com/binance-smart-chain/games/galactic-arena",
              "website": "https://galacticarena.io/",
                "chains": [
                  "binance-smart-chain"
                ],
                  "categories": [
                    "games"
                  ],
                    "socialLinks": [
                      {
                        "title": "discord",
                        "url": "https://discord.com/invite/HHzARxXy",
                        "type": "discord"
                      },
                      {
                        "title": "facebook",
                        "url": "https://www.facebook.com/TheNFTverse/",
                        "type": "facebook"
                      },
                      {
                        "title": "github",
                        "url": "https://github.com/thenftverse/smartcontracts",
                        "type": "github"
                      },
                      {
                        "title": "reddit",
                        "url": "https://reddit.com/r/GalacticArena",
                        "type": "reddit"
                      },
                      {
                        "title": "telegram",
                        "url": "https://t.me/theNFTverse",
                        "type": "telegram"
                      },
                      {
                        "title": "twitter",
                        "url": "https://twitter.com/GANFTverseBSC",
                        "type": "twitter"
                      },
                      {
                        "title": "youtube",
                        "url": "https://www.youtube.com/channel/UCix8fzfJQ0rt93HGOjXEDmQ",
                        "type": "youtube"
                      }
                    ],
                      "metrics": {
    "transactions": 338,
      "uaw": 2485,
        "volume": 960145.5,
          "balance": 75047353.54
  }
},
{
  "dappId": 8839,
    "name": "BinaryX",
      "description": "Decentralized play-and-earn GameFi & IGO platform \n(Play CyberChess now)",
        "fullDescription": "<p>BinaryX ($BNX) is the Governance Token for the BinaryX ecosystem, which includes the DAO and all products &amp; games utilizing $BNX. BinaryX began as a decentralized derivative trading system. Recognizing the burgeoning popularity of GameFi and interest in the metaverse games, the team gradually evolved into developing decentralized video games and is now fully transitioning to be a GameFi platform offering IGO services to bridge Web2 developers to Web3. &nbsp;Some of the services provided by BinaryX includes infrastructural support, a DAO governance system, and community building to scale promising gamefi projects and bring more innovation to the blockchain gaming sector.</p>",
          "logo": "https://dashboard-assets.dappradar.com/document/8839/binaryx-dapp-games-bsc-logo_2b8f701979206ba12af699a274e4c4b9.png",
            "link": "https://dappradar.com/binance-smart-chain/games/binaryx",
              "website": "http://www.binaryx.pro",
                "chains": [
                  "binance-smart-chain"
                ],
                  "categories": [
                    "games"
                  ],
                    "socialLinks": [
                      {
                        "title": "medium",
                        "url": "https://bit.ly/3NyH9JN",
                        "type": "medium"
                      },
                      {
                        "title": "telegram",
                        "url": "https://bit.ly/3WkiwVc",
                        "type": "telegram"
                      },
                      {
                        "title": "twitter",
                        "url": "https://bit.ly/3UlsOTn",
                        "type": "twitter"
                      }
                    ],
                      "metrics": {
    "transactions": 12230,
      "uaw": 2449,
        "volume": 17930.21,
          "balance": 362183203
  }
},
{
  "dappId": 13581,
    "name": "Castles the NFT Game",
      "description": "Castles is an NFT game about building wealth, influence and glory. Craft, collect lands, earn and grow your kingdom! Join our free to play mode!",
        "fullDescription": "<p><strong>Castles is an NFT game about building wealth, influence and glory.</strong></p>\n<ul>\n  <li>Earn Tokens</li>\n  <li>Free to Play Expansion</li>\n  <li>Craft NFTs</li>\n  <li>Merge Lands</li>\n  <li>Build a Kingdom!</li>\n  <li>Limited Time Events!</li>\n  <li>Dungeons &amp; Heroes!</li>\n  <li>A top game on the Wax blockchain</li>\n</ul>\n<p>White paper available on the website.</p>",
          "logo": "https://dashboard-assets.dappradar.com/document/13581/castlesthenftgame-dapp-games-wax-logo_7df4e1efb44f93b0d3faa6dcdbad619b.png",
            "link": "https://dappradar.com/wax/games/castles-the-nft-game",
              "website": "https://castlesnft.io",
                "chains": [
                  "wax"
                ],
                  "categories": [
                    "games"
                  ],
                    "socialLinks": [
                      {
                        "title": "discord",
                        "url": "https://discord.gg/rvKutJ9kTU",
                        "type": "discord"
                      },
                      {
                        "title": "medium",
                        "url": "https://medium.com/@metasourcegames",
                        "type": "medium"
                      },
                      {
                        "title": "telegram",
                        "url": "https://t.me/castlesnft",
                        "type": "telegram"
                      },
                      {
                        "title": "twitter",
                        "url": "https://twitter.com/castlesnft",
                        "type": "twitter"
                      },
                      {
                        "title": "youtube",
                        "url": "https://www.youtube.com/channel/UCbLd4voW_HfNOV61SvMEjLw",
                        "type": "youtube"
                      }
                    ],
                      "metrics": {
    "transactions": 303732,
      "uaw": 2434,
        "volume": 1287.18,
          "balance": 0
  }
},
{
  "dappId": 36197,
    "name": "DegenPirates",
      "description": "DegenPirates is a P2E sci-fi battleship game which is 100% built on Polygon. The target is to take down enemy ships to earn rewards.",
        "fullDescription": "<p>DegenPirates is an on-chain, P2E sci-fi version of a classic battleship built on Polygon. The target is to take down enemy ships to earn rewards. The game enables players to earn up to x2 to x200 their $MATIC.</p>\n<p></p>\n<p>The game is 100% decentralized, immutable, verifiable and trustless</p>\n<p>- Token flow is handled by a public EVM smart contract</p>\n<p>- Result randomness is generated by Chainlink automation solution</p>\n<p>- All results are stored on-chain</p>",
          "logo": "https://dashboard-assets.dappradar.com/document/36197/degenpirates-dapp-games-matic-logo_0ad0e0f09ca184b9f9c83423495710e4.png",
            "link": "https://dappradar.com/polygon/games/degenpirates",
              "website": "https://degenpirates.gg/?utm_source=dappradar&utm_medium=listing",
                "chains": [
                  "polygon"
                ],
                  "categories": [
                    "games"
                  ],
                    "socialLinks": [
                      {
                        "title": "discord",
                        "url": "https://discord.gg/DCMAwWge5h",
                        "type": "discord"
                      },
                      {
                        "title": "twitter",
                        "url": "https://twitter.com/DegenPirates_gg",
                        "type": "twitter"
                      }
                    ],
                      "metrics": {
    "transactions": 21992,
      "uaw": 2383,
        "volume": 15567.16,
          "balance": 1968.09
  }
},
{
  "dappId": 12297,
    "name": "Elfin Games",
      "description": "Elfin Kingdom Games is a decentralized gaming ecosystem on Binance Smart Chain built for gaming and metaverse projects that wish to power their games in Web3.",
        "fullDescription": "<p><strong>Elfin Kingdom Games is a decentralized gaming ecosystem on Binance Smart Chain built for gaming and metaverse projects that wish to power their games in Web3.</strong></p>\n<p></p>\n<p><strong>As a gaming metaverse where each player can create their adventure and players will be able to be part of a community, Elfin Kingdom is a social network, a multiple games hub, and a blockchain e-sports aggregator.</strong></p>\n<p></p>\n<p><strong>Every project in the Elfin ecosystem makes use of $ELFIN in their respective universes.</strong></p>",
          "logo": "https://dashboard-assets.dappradar.com/document/12297/elfingames-dapp-games-12297-logo_df36482f85461168d17afd2d01a0267e.png",
            "link": "https://dappradar.com/binance-smart-chain/games/elfin-games",
              "website": "https://elfin.games",
                "chains": [
                  "binance-smart-chain"
                ],
                  "categories": [
                    "games"
                  ],
                    "socialLinks": [
                      {
                        "title": "discord",
                        "url": "https://discord.gg/elfingames",
                        "type": "discord"
                      },
                      {
                        "title": "medium",
                        "url": "https://medium.com/@elfingames",
                        "type": "medium"
                      },
                      {
                        "title": "telegram",
                        "url": "https://t.me/ElfinKDM",
                        "type": "telegram"
                      },
                      {
                        "title": "twitter",
                        "url": "https://twitter.com/elfingames",
                        "type": "twitter"
                      }
                    ],
                      "metrics": {
    "transactions": 5033,
      "uaw": 2341,
        "volume": 520.38,
          "balance": 68323.64
  }
},
{
  "dappId": 10308,
    "name": "NFT Panda: World of Fantasy",
      "description": "NFT Panda: World of Fantasy is RPG game on WAX Blockchain where fantasy heroes of Panda live and fight for the freedom of their lands and earn tokens.",
        "fullDescription": "<p><strong>NFT Panda: World of Fantasy</strong> is a world where fantasy heroes of Panda live and fight for the freedom of their lands. Your mission is to become a hero who will reunite Elgard’s lands and who will bring them back to their past prosperity. NFT Panda: WoF is a <strong>unique Gamers-Centric Tokenomics Model</strong> which is primarily aimed at the realization of the <strong>TRUE Play-to-Earn</strong> mechanism.</p>",
          "logo": "https://dashboard-assets.dappradar.com/document/10308/nftpandaworldoffantasy-dapp-games-wax-logo_e31964cd2ba701b43d3ef21cb66741eb.png",
            "link": "https://dappradar.com/wax/games/nft-panda-world-of-fantasy",
              "website": "https://game.nftpanda.space/",
                "chains": [
                  "wax"
                ],
                  "categories": [
                    "games"
                  ],
                    "socialLinks": [
                      {
                        "title": "blog",
                        "url": "https://nftpanda.space/",
                        "type": "blog"
                      },
                      {
                        "title": "discord",
                        "url": "https://t.co/7go05j9x2h?amp=1",
                        "type": "discord"
                      },
                      {
                        "title": "medium",
                        "url": "https://t.co/qQrN0ZHbWl?amp=1",
                        "type": "medium"
                      },
                      {
                        "title": "twitter",
                        "url": "https://twitter.com/NftPanda",
                        "type": "twitter"
                      }
                    ],
                      "metrics": {
    "transactions": 257133,
      "uaw": 2340,
        "volume": 5171.46,
          "balance": 0
  }
},
{
  "dappId": 23861,
    "name": "Town Star",
      "description": "Town Star is a PlayAndEarn town strategy game by Gala Games, where players build, grow and craft the most productive town possible.",
        "fullDescription": "<p>Town Star is a PlayAndEarn town strategy game by Gala Games, where players build, grow and craft the most productive town possible.</p>",
          "logo": "https://dashboard-assets.dappradar.com/document/23861/townstar-dapp-games-ethereum-logo_a7191a37296a2a63a7b4d9a88f7dd660.png",
            "link": "https://dappradar.com/ethereum/games/town-star",
              "website": "https://townstar.com/",
                "chains": [
                  "ethereum"
                ],
                  "categories": [
                    "games"
                  ],
                    "socialLinks": [
                      {
                        "title": "discord",
                        "url": "https://galagames.chat/",
                        "type": "discord"
                      },
                      {
                        "title": "twitter",
                        "url": "https://twitter.com/TownStarGame",
                        "type": "twitter"
                      }
                    ],
                      "metrics": {
    "transactions": 9581,
      "uaw": 2278,
        "volume": 5156,
          "balance": 144556.88
  }
},
{
  "dappId": 9357,
    "name": "MarsColony",
      "description": "MarsColony is a multi-planet colonization metaverse with unique NFT-land ownership, Defi-based liquidity mining, and is based on vintage space colonization game",
        "fullDescription": "<p>MarsColony is a colonization framework for meta and web3 society that combines Gamify with NFT ownership, a DeFi-based economy, DAO governance, guilds, and inter-blockchain colonies.</p>\n<p>MarsColony is the second biggest Gamefi project on the Harmony blockchain.</p>\n<p>Now we’re expanding to a new universe on the Polygon chain, and are opening up to new players.</p>\n<p>Don't miss your chance to become a creator of a new world!</p>",
          "logo": "https://dashboard-assets.dappradar.com/document/9357/marscolony-dapp-games-bsc-logo_d70d91355e209aae652457ed3b78a4c9.png",
            "link": "https://dappradar.com/binance-smart-chain/games/marscolony",
              "website": "https://polygon.marscolony.io",
                "chains": [
                  "binance-smart-chain",
                  "harmony",
                  "polygon"
                ],
                  "categories": [
                    "games"
                  ],
                    "socialLinks": [
                      {
                        "title": "blog",
                        "url": "https://people.marscolony.io",
                        "type": "blog"
                      },
                      {
                        "title": "discord",
                        "url": "https://discord.gg/B2BC95HSwc",
                        "type": "discord"
                      },
                      {
                        "title": "twitter",
                        "url": "https://twitter.com/marscolonyio",
                        "type": "twitter"
                      }
                    ],
                      "metrics": {
    "transactions": 38465,
      "uaw": 2261,
        "volume": 0,
          "balance": 0
  }
},
{
  "dappId": 29611,
    "name": "MAGE WARS",
      "description": "Mage Wars is an economic investment game built on a decentralized smart contract by Binance Smart Chain. Build a Tower, Hire Mages, Fight in the Arena, and Win!",
        "fullDescription": "<p><strong>Mage Wars is an economic investment game built on a decentralized smart contract by Binance Smart Chain.</strong></p>\n<p></p>\n<p><strong>You build your Guilds and summon Mages to your Tower.</strong></p>\n<p><strong>Mages for you, with the help of spells, will collect Mana every hour, which you can exchange for Runes or BNB.</strong></p>\n<p></p>\n<p><strong>Join an exciting journey and participate in the Arena, where you can fight in a challenging battle with your opponents.</strong></p>\n<p></p>\n<p><strong>Build a Tower, hire Mages, fight in the Arena, and gain infinite wealth for yourself and your mages.</strong></p>",
          "logo": "https://dashboard-assets.dappradar.com/document/29611/magewars-dapp-games-bsc-logo_a21d8e964e2c0dab46d65ad45bd9a620.png",
            "link": "https://dappradar.com/binance-smart-chain/games/mage-wars",
              "website": "https://magewars.io/",
                "chains": [
                  "binance-smart-chain"
                ],
                  "categories": [
                    "games"
                  ],
                    "socialLinks": [
                      {
                        "title": "facebook",
                        "url": "https://t.me/magewars_chat",
                        "type": "facebook"
                      },
                      {
                        "title": "twitter",
                        "url": "https://twitter.com/magewars_io",
                        "type": "twitter"
                      }
                    ],
                      "metrics": {
    "transactions": 76202,
      "uaw": 2097,
        "volume": 833621.76,
          "balance": 541115.03
  }
},
{
  "dappId": 6740,
    "name": "Crazy Defense Heroes",
      "description": "Play to Earn TOWER Tokens every day!\nCrazy Defense Heroes is a tower defense mobile game combining free-to-play with play-to-earn.",
        "fullDescription": "<p><strong>The new Play-to-Earn \"Daily Star Chest\" Event is NOW live in Crazy Defense Heroes mobile game.</strong></p>\n<p>Crazy Defense Heroes mobile game is the basis of an upcoming tower defense blockchain game which utilises non-fungible tokens and the TOWER ERC-20. The game will be a tower defense game bringing to blockchain the key elements from the mobile games Crazy Defense Heroes and Crazy Kings. TOWER will be used as the key currency in the game, to purchase items such as game card NFTs, or to pay for game or tournament entry fees.</p>",
          "logo": "https://dashboard-assets.dappradar.com/document/6740/crazydefenseheroes-dapp-games-ethereum-logo_a45b213eda37cec0d4182012d6eff7fc.png",
            "link": "https://dappradar.com/binance-smart-chain/games/crazy-defense-heroes",
              "website": "https://crazydefenseheroes.com/",
                "chains": [
                  "ethereum",
                  "polygon",
                  "binance-smart-chain"
                ],
                  "categories": [
                    "games"
                  ],
                    "socialLinks": [
                      {
                        "title": "discord",
                        "url": "https://discord.gg/crazydefenseheroes",
                        "type": "discord"
                      },
                      {
                        "title": "facebook",
                        "url": "https://www.facebook.com/TowerTokenAB",
                        "type": "facebook"
                      },
                      {
                        "title": "telegram",
                        "url": "https://t.me/TowerToken",
                        "type": "telegram"
                      },
                      {
                        "title": "twitter",
                        "url": "https://twitter.com/TowerToken",
                        "type": "twitter"
                      }
                    ],
                      "metrics": {
    "transactions": 46690,
      "uaw": 2086,
        "volume": 8762.61,
          "balance": 37909811.22
  }
},
{
  "dappId": 21864,
    "name": "IguVerse",
      "description": "IguVerse is Introducing Blockchain to Millions of Users in Gamified Way.",
        "fullDescription": "<p><strong>IguVerse</strong> is a Web3 application that connects the worlds of <strong>crypto</strong> and <strong>social media</strong> to let pet owners and pet lovers from all over the world <strong>earn rewards</strong> with their <strong>social media activities</strong>.</p>\n<p>In the past, pet lovers had <strong>no ability to monetise</strong> their social media <strong>without having a big following</strong> while their data has been being sold and bought with <strong>little oversight</strong> from them. Our app <strong>challenges</strong> this standard — now <strong>everyone can earn </strong>by doing simple tasks they <strong>love doing anyway</strong>!</p>\n<p>IguVerse is even more than just activities on social media. We prioritize our <strong>socialize-to-earn </strong>mode, where users complete tasks on social networks to get rewards but also include <strong>move-to-earn </strong>and <strong>play-to-earn</strong> mechanics that make your gaming experience more <strong>diverse</strong>. While move-to-earn motivates users to lead a healthy lifestyle by <strong>walking </strong>their real or virtual pet, play-to-earn lets them have fun in <strong>a classic arcade game</strong>. In addition to this wide variety of mechanics, we provide access to <strong>an integrated DEX</strong> (decentralized exchange) and <strong>a marketplace</strong>, where users can trade their coins and NFTs.</p>\n<p>To enter our game, you need to adopt <strong>a virtual pet </strong>— an NFT pet you can create with <strong>your own design</strong> in mind! Our NFTs 2.0, as we call them, set <strong>a new standard</strong> by utilizing <strong>AI</strong> (artificial intelligence) to process <strong>unique </strong>user input and create NFTs based on it.</p>",
          "logo": "https://dashboard-assets.dappradar.com/document/21864/iguverse-dapp-games-bsc-logo_b4b9854f1f51103a201a08578ffe7a29.png",
            "link": "https://dappradar.com/binance-smart-chain/games/iguverse",
              "website": "https://iguverse.com",
                "chains": [
                  "binance-smart-chain"
                ],
                  "categories": [
                    "games"
                  ],
                    "socialLinks": [
                      {
                        "title": "discord",
                        "url": "https://discord.com/invite/iguverse",
                        "type": "discord"
                      },
                      {
                        "title": "instagram",
                        "url": "https://instagram.com/iguverse",
                        "type": "instagram"
                      },
                      {
                        "title": "medium",
                        "url": "https://medium.com/@iguverse",
                        "type": "medium"
                      },
                      {
                        "title": "reddit",
                        "url": "https://www.reddit.com/r/iguverse_official/",
                        "type": "reddit"
                      },
                      {
                        "title": "telegram",
                        "url": "https://t.me/Iguverse",
                        "type": "telegram"
                      },
                      {
                        "title": "tiktok",
                        "url": "https://www.tiktok.com/@iguverse",
                        "type": "tiktok"
                      },
                      {
                        "title": "twitter",
                        "url": "https://twitter.com/iguverse",
                        "type": "twitter"
                      },
                      {
                        "title": "youtube",
                        "url": "https://www.youtube.com/@IguVerse",
                        "type": "youtube"
                      }
                    ],
                      "metrics": {
    "transactions": 7179,
      "uaw": 2082,
        "volume": 510.01,
          "balance": 10.71
  }
},
{
  "dappId": 14995,
    "name": "NiftyKicks Factory",
      "description": "Nifty Kicks is the first of its kind factory-building P2E game on the Wax blockchain. Built from the ground up with the community in mind.",
        "fullDescription": "<p>Nifty Kicks is the first of its kind factory-building P2E game on the Wax blockchain. Built from the ground up with the community in mind, it has a robust tokenomics model that we think will be fun and rewarding for a long time. Initially centered around sneakers, the factories and equipment you set up, will produce raw materials that will allow you to grow your factory, produce sneakers or sell those materials or NFT's for wax. But that’s not all, we have great vision for growth. The metaverse Nifty Kicks is in a dangerous place filled with competition. Who knows the dangers that lurk and threaten the existence of your factory, and the safety of your sneaker shipments.&nbsp;</p>\n<p>We have partnered with several up-and-coming and established projects, to create a metaverse ecosystem of cross-gaming and cross-utilization for your NFT's and tokens. What this boils down to is more utility for your NFT's across multiple projects. But it's not just about the NFT themselves, these collaborations will range from the integration of game mechanics between niftykicks and another project to niftykicks becoming the main supplier of elements/assets. &nbsp;Which brings us to our final point, while we love sneakers and sneaker culture, your nifty kicks CEO is already hard at work trying to build a conglomerate that will take us beyond sneakers, and in essence create a true factory for the metaverse.</p>",
          "logo": "https://dashboard-assets.dappradar.com/document/14995/niftykicksfactory-dapp-games-wax-logo_ce43aa2bcc685bc0398b788921342185.png",
            "link": "https://dappradar.com/wax/games/niftykicks-factory",
              "website": "https://niftykicks.io",
                "chains": [
                  "wax"
                ],
                  "categories": [
                    "games"
                  ],
                    "socialLinks": [
                      {
                        "title": "discord",
                        "url": "https://discord.gg/niftykicksfactroy",
                        "type": "discord"
                      },
                      {
                        "title": "twitter",
                        "url": "https://twitter.com/niftykicksio",
                        "type": "twitter"
                      },
                      {
                        "title": "youtube",
                        "url": "https://www.youtube.com/channel/UCfntr3YLGZCtYyGeOcFBYWQ",
                        "type": "youtube"
                      }
                    ],
                      "metrics": {
    "transactions": 617530,
      "uaw": 2054,
        "volume": 0,
          "balance": 0
  }
},
{
  "dappId": 10219,
    "name": "Thetan Arena",
      "description": "A play to earn PvP MOBA mobile game! Team up, Fight & Earn!",
        "fullDescription": "<p>Thetan Arena's gameplay is designed to combine your personal skills and teamwork. Challenge yourself with various game modes: from classic MOBA tower rush to battle royale, coming with monthly updates and attractive rewards. Moreover, Thetan Arena introduces to you a brand-new play to earn system, allowing you to earn cryptocurrency by playing and trading Heroes on the marketplace</p>",
          "logo": "https://dashboard-assets.dappradar.com/document/10219/thetanarena-dapp-games-bsc-logo_66348c7c9fc015f983d314d5e781806f.png",
            "link": "https://dappradar.com/binance-smart-chain/games/thetan-arena",
              "website": "https://marketplace.thetanarena.com",
                "chains": [
                  "binance-smart-chain"
                ],
                  "categories": [
                    "games"
                  ],
                    "socialLinks": [
                      {
                        "title": "discord",
                        "url": "https://t.co/FCePAo8zq9?amp=1",
                        "type": "discord"
                      },
                      {
                        "title": "facebook",
                        "url": "https://www.facebook.com/thetanarena",
                        "type": "facebook"
                      },
                      {
                        "title": "telegram",
                        "url": "https://t.me/thetanarenalinks",
                        "type": "telegram"
                      },
                      {
                        "title": "twitter",
                        "url": "https://twitter.com/thetanarena",
                        "type": "twitter"
                      }
                    ],
                      "metrics": {
    "transactions": 15372,
      "uaw": 2040,
        "volume": 9712.06,
          "balance": 197772.37
  }
},
{
  "dappId": 5824,
    "name": "Aavegotchi",
      "description": "DeFi-staked Crypto Collectibles.\nCollect, compete, and combine your Aavegotchis for the ultimate gamified DeFi experience!",
        "fullDescription": "<p>Aavegotchi is a community owned NFT Gaming protocol enabling true asset ownership for gamers. The protocol, built on Polygon, unlocks the potential of community driven game development. It also enables traditional game studios and developers to build and create fun engaging experiences for one of web3’s largest and most passionate communities.</p>\n<p></p>\n<p>Aavegotchis are the world’s first DeFi-backed NFTs. Each Aavegotchi is a playable NFT endowed with a uniquely generated set of traits, brought to life with interest-generating tokens known as Spirit Force. Just like the original Tamagotchi introduced the world to digital pets, Aavegotchi introduces the world to blockchain pets.</p>\n<p></p>\n<p>These cute, ghostly NFTs call Pixelcraft Studios’ (the game dev studio behind Aavegotchi) flagship game, the Gotchiverse, their home. Players can use Aavegotchis as in-game avatars within the Gotchiverse to explore, build, battle, and socialize.</p>",
          "logo": "https://dashboard-assets.dappradar.com/document/5824/aavegotchi-dapp-defi-matic-logo_32fb708d448fe4795d994cbb3a41d366.png",
            "link": "https://dappradar.com/polygon/games/aavegotchi",
              "website": "https://aavegotchi.com/",
                "chains": [
                  "polygon"
                ],
                  "categories": [
                    "games"
                  ],
                    "socialLinks": [
                      {
                        "title": "discord",
                        "url": "https://discord.com/invite/rttCTkZ",
                        "type": "discord"
                      },
                      {
                        "title": "github",
                        "url": "https://github.com/aavegotchi",
                        "type": "github"
                      },
                      {
                        "title": "medium",
                        "url": "https://medium.com/@aavegotchi",
                        "type": "medium"
                      },
                      {
                        "title": "telegram",
                        "url": "https://t.me/aavegotchi",
                        "type": "telegram"
                      },
                      {
                        "title": "twitter",
                        "url": "https://twitter.com/aavegotchi",
                        "type": "twitter"
                      }
                    ],
                      "metrics": {
    "transactions": 352468,
      "uaw": 2039,
        "volume": 111308.72,
          "balance": 266798.22
  }
},
{
  "dappId": 28377,
    "name": "Cross The Ages",
      "description": "A Collectible Card Game set in a dystopian clash of worlds! ✨ \nBased on 7 fantasy and sci-fi novels. ?",
        "fullDescription": "<p>Cross The Ages (CTA) is a mobile-first trading card game set in a dystopian world and based on seven fantasy and science fiction novels.</p>\n<p></p>\n<p>The free-to-read Cross The Ages novels will be released incrementally over the coming years. Gameplay will evolve in alignment with the books. The first novel is already published and can be read at</p>\n<p>.</p>\n<p>Each Cross The Ages book comes with a corresponding set of 365 digital cards with varying levels of scarcity.</p>\n<p>Cross The Ages makes it possible to collect digital cards with capability for physical activation.</p>\n<p>With digital NFT ownership, players can track ownership history and collect Cross The Ages cards without risk of damage or theft. Cross The Ages will allow players to convert their NFT into a real-world off-chain asset.</p>\n<p></p>\n<p>CTA's digital scarcity will underpin a valuable in-game economy where players can buy, sell, trade, rent and mint non-fungible tokens.</p>",
          "logo": "https://dashboard-assets.dappradar.com/document/28377/crosstheages-dapp-games-immutablex-logo_30cd17fc0199e4897c6942d00704d157.png",
            "link": "https://dappradar.com/immutablex/games/cross-the-ages",
              "website": "https://www.crosstheages.com/",
                "chains": [
                  "immutablex"
                ],
                  "categories": [
                    "games"
                  ],
                    "socialLinks": [
                      {
                        "title": "discord",
                        "url": "https://discord.gg/crosstheages",
                        "type": "discord"
                      },
                      {
                        "title": "instagram",
                        "url": "https://instagram.com/crosstheages",
                        "type": "instagram"
                      },
                      {
                        "title": "medium",
                        "url": "https://medium.com/cross-the-ages",
                        "type": "medium"
                      },
                      {
                        "title": "telegram",
                        "url": "https://t.me/crosstheages",
                        "type": "telegram"
                      },
                      {
                        "title": "twitter",
                        "url": "https://twitter.com/CrossTheAges",
                        "type": "twitter"
                      },
                      {
                        "title": "youtube",
                        "url": "https://www.youtube.com/channel/UClAY7c4yKUg_ZweqCKp5DPg",
                        "type": "youtube"
                      }
                    ],
                      "metrics": {
    "transactions": 31707,
      "uaw": 1921,
        "volume": 992976.99,
          "balance": 0
  }
},
{
  "dappId": 11520,
    "name": "Xpansion",
      "description": "Xpansion is a decentralized 4x strategy game set in the near future powered by NFTs.",
        "fullDescription": "<p>Xpansion is a decentralized 4x strategy game set in the near future. Faced with a dying world, the remnants of Earths’ population have launched expedition waves to settle the habitable worlds surrounding nearby stars.</p>",
          "logo": "https://dashboard-assets.dappradar.com/document/11520/xpansion-dapp-games-wax-logo_ebddb8ef39fc54fc42636e01680f563e.png",
            "link": "https://dappradar.com/wax/games/xpansion",
              "website": "https://xpsgame.io/",
                "chains": [
                  "wax",
                  "binance-smart-chain"
                ],
                  "categories": [
                    "games"
                  ],
                    "socialLinks": [
                      {
                        "title": "twitter",
                        "url": "https://twitter.com/xpsgame",
                        "type": "twitter"
                      },
                      {
                        "title": "youtube",
                        "url": "https://www.youtube.com/channel/UCiKTVCfPV0vJSi9Ee7VDqJw",
                        "type": "youtube"
                      }
                    ],
                      "metrics": {
    "transactions": 142276,
      "uaw": 1857,
        "volume": 1031.74,
          "balance": 204.82
  }
},
{
  "dappId": 20726,
    "name": "MEEET",
      "description": "MEEET is a social simulation game based on blockchain technology.",
        "fullDescription": "<p>MEEET is the world's first blockchain social game, a simulation game that combines Gaming + Social + Play2earn.</p>\n<p>The product has built-in functions such as Wallet, Marketing, Transfer and Trade.</p>",
          "logo": "https://dashboard-assets.dappradar.com/document/20726/meeet-dapp-games-bsc-logo_760523ec40a04b759f7b05c21ff5e449.png",
            "link": "https://dappradar.com/binance-smart-chain/games/meeet",
              "website": "https://www.meeet.xyz/",
                "chains": [
                  "binance-smart-chain"
                ],
                  "categories": [
                    "games"
                  ],
                    "socialLinks": [
                      {
                        "title": "discord",
                        "url": "https://discord.gg/meeetofficial",
                        "type": "discord"
                      },
                      {
                        "title": "medium",
                        "url": "https://medium.com/@MEEET",
                        "type": "medium"
                      },
                      {
                        "title": "telegram",
                        "url": "https://t.me/Meeet_Official",
                        "type": "telegram"
                      },
                      {
                        "title": "twitter",
                        "url": "https://twitter.com/MeeetOfficial",
                        "type": "twitter"
                      }
                    ],
                      "metrics": {
    "transactions": 32652,
      "uaw": 1856,
        "volume": 0,
          "balance": 0
  }
},
{
  "dappId": 7291,
    "name": "CryptoBlades",
      "description": "Join the amazing community and forge weapons to fight against your enemies! Gain skill and NFT's for your in-game activity.",
        "fullDescription": "<p><strong>The premier NFT crafting, play to earn game launched in May of 2021</strong></p>\n<p>CryptoBlades is a play-to-earn NFT RPG developed by Riveted Games. The game revolves around the acquisition of legendary Blades and the powerful Heroes who wield them. Players may participate in combat using their assets to earn SKILL tokens. &nbsp;Assets are player-owned NFTs minted to the ERC-721 standard, and may be traded on the proprietary marketplace. CryptoBlades utilizes a play-to-earn model by distributing SKILL through gameplay, and giving value to player NFTs by increasing their use through future features.</p>",
          "logo": "https://dashboard-assets.dappradar.com/document/7291/cryptoblades-dapp-games-bsc-logo_ff5f6dda2d1d548406e8d0b8011133be.png",
            "link": "https://dappradar.com/polygon/games/cryptoblades",
              "website": "https://app.cryptoblades.io/",
                "chains": [
                  "binance-smart-chain",
                  "oec",
                  "polygon",
                  "heco",
                  "avalanche",
                  "aurora",
                  "skale"
                ],
                  "categories": [
                    "games"
                  ],
                    "socialLinks": [
                      {
                        "title": "discord",
                        "url": "https://discord.gg/cryptoblades",
                        "type": "discord"
                      },
                      {
                        "title": "facebook",
                        "url": "https://www.facebook.com/OfficialCryptoBlades/",
                        "type": "facebook"
                      },
                      {
                        "title": "medium",
                        "url": "https://cryptoblades.medium.com/cryptoblades-an-nft-crafting-rpg-where-you-play-to-earn-f138214f9bd3",
                        "type": "medium"
                      },
                      {
                        "title": "reddit",
                        "url": "https://www.reddit.com/r/CryptoBlades/",
                        "type": "reddit"
                      },
                      {
                        "title": "telegram",
                        "url": "https://t.me/CryptoBlades_General",
                        "type": "telegram"
                      },
                      {
                        "title": "twitter",
                        "url": "https://twitter.com/cryptoblades",
                        "type": "twitter"
                      },
                      {
                        "title": "youtube",
                        "url": "https://www.youtube.com/channel/UC1JWOcOxNDJSTbl0NbgNIAw",
                        "type": "youtube"
                      }
                    ],
                      "metrics": {
    "transactions": 13668,
      "uaw": 1799,
        "volume": 2863.8,
          "balance": 35625.55
  }
},
{
  "dappId": 38588,
    "name": "Warsaken",
      "description": "Warsaken is a military-themed collectible trading card game with various mode of gameplay and play-and-earn feature.",
        "fullDescription": "<p>Warsaken is a military-themed trading card game. Warsaken is a game-first project which has been in development and playtesting for years, and is currently available on the WAX Blockchain and coming soon to other blockchains. There are multiple modes of gameplay including Warsaken Standard, Warsaken Blitz, and Warsaken Cabal. NFT holders can claim daily Loot, which can be used to purchase Loot Packs, Wheel Spins, and more.</p>",
          "logo": "https://dashboard-assets.dappradar.com/document/38485/warsaken-dapp-games-38485-logo_201d70baa2886bfb9e281a06a5f626bd.png",
            "link": "https://dappradar.com/wax/games/warsaken",
              "website": "https://www.warsaken.cards/",
                "chains": [
                  "wax"
                ],
                  "categories": [
                    "games"
                  ],
                    "socialLinks": [
                      {
                        "title": "blog",
                        "url": "https://www.warsaken.com/",
                        "type": "blog"
                      },
                      {
                        "title": "discord",
                        "url": "https://discord.gg/warsaken",
                        "type": "discord"
                      },
                      {
                        "title": "facebook",
                        "url": "https://www.facebook.com/thewarsaken",
                        "type": "facebook"
                      },
                      {
                        "title": "instagram",
                        "url": "https://www.instagram.com/thewarsaken/",
                        "type": "instagram"
                      },
                      {
                        "title": "twitter",
                        "url": "https://twitter.com/TheWarsaken",
                        "type": "twitter"
                      },
                      {
                        "title": "youtube",
                        "url": "https://www.youtube.com/warsaken",
                        "type": "youtube"
                      }
                    ],
                      "metrics": {
    "transactions": 106688,
      "uaw": 1766,
        "volume": 47882.95,
          "balance": 0
  }
},
{
  "dappId": 34154,
    "name": "MetaStrikers",
      "description": "The P2E & PvP Football Strategic Game on Polygon with a heart. Join the revolution, play, and contribute to a greater cause.",
        "fullDescription": "<p>Introducing MetaStrikers, a new GameFi platform that combines the excitement of soccer with blockchain technology. MetaStrikers allows players to collect, trade, and battle with unique digital collectible soccer players known as Strikers.</p>\n<p>Players can acquire Strikers by opening packs or participating in quests and tournaments. Each Striker has its own unique set of attributes, abilities, and techniques that can be upgraded through gameplay. Players can enhance their Strikers by fusing them together or using special items, increasing their rarity and power.</p>\n<p>In addition to the collectible aspect, MetaStrikers offers a competitive gameplay experience. Players can battle with their Strikers against other players in real-time matches, earning rewards and climbing the leaderboard.</p>\n<p>At MetaStrikers, we believe in the power of blockchain technology to create a fairer and more transparent gaming experience. We are committed to developing a platform that provides a fun and engaging experience for players while also promoting social responsibility through our charity contributions.</p>\n<p>Join us on our mission to revolutionize the gaming industry and make a positive impact on the world.</p>",
          "logo": "https://dashboard-assets.dappradar.com/document/34154/metastrikers-dapp-games-34154-logo_ab9b6d6eb433f7fa9280efe65fd49135.png",
            "link": "https://dappradar.com/polygon/games/metastrikers",
              "website": "https://metastrikers.xyz",
                "chains": [
                  "polygon"
                ],
                  "categories": [
                    "games"
                  ],
                    "socialLinks": [
                      {
                        "title": "discord",
                        "url": "https://discord.gg/Rejux37r",
                        "type": "discord"
                      },
                      {
                        "title": "medium",
                        "url": "https://medium.com/@MetaStrikersGLB",
                        "type": "medium"
                      },
                      {
                        "title": "twitter",
                        "url": "https://twitter.com/MetaStrikersGLB",
                        "type": "twitter"
                      },
                      {
                        "title": "youtube",
                        "url": "https://www.youtube.com/@MetaStrikersGLB",
                        "type": "youtube"
                      }
                    ],
                      "metrics": {
    "transactions": 17452,
      "uaw": 1634,
        "volume": 752318.46,
          "balance": 0
  }
},
{
  "dappId": 35199,
    "name": "Terracore",
      "description": "TerraCore is a Strategy Idle Game on the #HIVE blockchai. Can you build a thriving community and defend it from the dangers of TerraCore?",
        "fullDescription": "<p>In TerraCore, the world has been left in ruins by the Great Upheaval, a catastrophic event that has destroyed much of the planet's infrastructure and depleted its natural resources.</p>\n<p>&nbsp;As a citizen in this post-apocalyptic world, you must fight for a better future by collecting $SCRAP, the new currency that emerged after the disaster.</p>\n<p>But collecting $SCRAP won't be easy. You'll have to scavenge the planet's surface for valuable remnants of the past, fight other scavengers, and defend your own stash from raiders. With enough $SCRAP, you can upgrade your character, gather resources more efficiently, and expand your community to new worlds.</p>\n<p>With skill, cunning, and a bit of luck, you can establish a prosperous community in TerraCore and build a new future for humanity. Will you rise to the challenge and lead your community to greatness?&nbsp;</p>\n<p>The fate of TerraCore is in your hands.</p>",
          "logo": "https://dashboard-assets.dappradar.com/document/35199/terracore-dapp-games-hive-logo_022f2b18bbaae56a43a8da9c9c449949.png",
            "link": "https://dappradar.com/hive/games/terracore",
              "website": "https://www.terracoregame.com/",
                "chains": [
                  "hive"
                ],
                  "categories": [
                    "games"
                  ],
                    "socialLinks": [
                      {
                        "title": "blog",
                        "url": "https://peakd.com/@terracore",
                        "type": "blog"
                      },
                      {
                        "title": "discord",
                        "url": "https://discord.com/invite/dgJU6RqMv4",
                        "type": "discord"
                      },
                      {
                        "title": "twitter",
                        "url": "https://twitter.com/terracoregame",
                        "type": "twitter"
                      }
                    ],
                      "metrics": {
    "transactions": 556439,
      "uaw": 1616,
        "volume": 10442.74,
          "balance": 5986.5
  }
},
{
  "dappId": 8769,
    "name": "StarCrazy",
      "description": "Welcome to Project StarCrazy, the highly anticipated crypto/NFT gaming project by GameFantasy!",
        "fullDescription": "<p><strong>What is StarCrazy?</strong></p>\n<p>StarCrazy is the latest blockchain Play-to-Earn game built on the &nbsp;IoTeX platform. IoTeX has 5 second transaction finality and transaction costs in fractions of a cent. &nbsp;This makes StarCrazy one of the more player friendly Play-to- Earn games on the online game market.</p>\n<p>Players buy and sell Starz (NFTs) and can fuse them for a chance to create more valuable characters. Assign your Starz to mine to earn GFT or GFS tokens. You can also stake your GFT tokens in a liquidity pool for yet another way to earn.</p>\n<p>GFT is the utility token of StarCrazy, the Play-to-Earn game. All auctioning, trading, and fusing activities within StarCrazy are conducted using GFT. This will also be true for the coming “arena battle” and social interactment features.</p>\n<p>StarCrazy’s tokenomics are very player-centric. Players control in-game direction with the GFS governance token. 100% of GFS tokens are earned by players. &nbsp;None are owned by the team.</p>\n<p>The total token supply is capped at 30 million each for both $GFT and $GFS.</p>",
          "logo": "https://dashboard-assets.dappradar.com/document/8769/linkstar-dapp-games-iotex-logo_837d20cd981a456d1bffc661a32ceb20.png",
            "link": "https://dappradar.com/iotex/games/starcrazy",
              "website": "https://starcrazy.com/",
                "chains": [
                  "iotex"
                ],
                  "categories": [
                    "games"
                  ],
                    "socialLinks": [
                      {
                        "title": "discord",
                        "url": "https://discord.com/invite/4aFrCk9zPY",
                        "type": "discord"
                      },
                      {
                        "title": "telegram",
                        "url": "https://t.me/GameFantasyToken",
                        "type": "telegram"
                      },
                      {
                        "title": "twitter",
                        "url": "https://twitter.com/starcrazygame",
                        "type": "twitter"
                      }
                    ],
                      "metrics": {
    "transactions": 112816,
      "uaw": 1535,
        "volume": 35588.21,
          "balance": 152699.35
  }
},
{
  "dappId": 17237,
    "name": "Rise of Elves",
      "description": "Rise of Elves is a network-based multiplayer one-on-one blockchain battle game",
        "fullDescription": "<p>Rise of Elves is a decentralized real-time casual development game based on Blockchain technology. We have created a vast world for players to freely cultivate their Elves to explore and adventure as they please.</p>\n<p>In this world, players can evolve their Elves with NFTs by pairing them with different attributes. Create more Elves with unique appearances and powerful abilities, and experience the fun of collecting and developing your characters to reach their full potential!</p>\n<p>This is a deep development game that combines multiple elements such as collection, training, evolution, combat, and level up. Play to Earn brings players entertainment and a new way of life.</p>\n<p></p>",
          "logo": "https://dashboard-assets.dappradar.com/document/17237/riseofelves-dapp-games-matic-logo_0bcd7eefae080bca3d70d72b1f7e201e.png",
            "link": "https://dappradar.com/polygon/games/rise-of-elves",
              "website": "https://rise-of-elves.mooneen.com/",
                "chains": [
                  "polygon"
                ],
                  "categories": [
                    "games"
                  ],
                    "socialLinks": [
                      {
                        "title": "discord",
                        "url": "https://discord.gg/rise-of-elves",
                        "type": "discord"
                      },
                      {
                        "title": "facebook",
                        "url": "https://www.facebook.com/rise.of.elves/?ref=page_internal",
                        "type": "facebook"
                      },
                      {
                        "title": "medium",
                        "url": "https://medium.com/@rise-of-elves",
                        "type": "medium"
                      },
                      {
                        "title": "reddit",
                        "url": "https://www.reddit.com/user/rise-of-elves/",
                        "type": "reddit"
                      },
                      {
                        "title": "telegram",
                        "url": "https://t.me/rise_of_elves_channel",
                        "type": "telegram"
                      },
                      {
                        "title": "tiktok",
                        "url": "https://www.tiktok.com/@rise_of_elves",
                        "type": "tiktok"
                      },
                      {
                        "title": "twitter",
                        "url": "https://twitter.com/rise_of_elves",
                        "type": "twitter"
                      },
                      {
                        "title": "youtube",
                        "url": "https://www.youtube.com/channel/UCYzCDaCPRl4-STeH64HAnyQ",
                        "type": "youtube"
                      }
                    ],
                      "metrics": {
    "transactions": 18180,
      "uaw": 1475,
        "volume": 20477.7,
          "balance": 38243.66
  }
},
{
  "dappId": 2151,
    "name": "Crypto Dynasty (EOS)",
      "description": "Play-to-Earn with Crypto Dynasty",
        "fullDescription": "加密三国是一款放置养成类交易游戏，玩家利用闲置时间挂机养成，从游戏交易中收获乐趣，并赚取收益。\nCrypto Dynasty is an idle trading game, where players use their free time to idle and profit from trading.",
          "logo": "https://dashboard-assets.dappradar.com/document/2151/cryptodynastyeos-dapp-games-eos-logo_545b8f311a4c6dc9bf8077ecde8e8c92.png",
            "link": "https://dappradar.com/eos/games/crypto-dynasty-eos",
              "website": "https://eos.cryptodynasty.one/",
                "chains": [
                  "eos"
                ],
                  "categories": [
                    "games"
                  ],
                    "socialLinks": [
                      {
                        "title": "discord",
                        "url": "https://discord.gg/yZB3wAV",
                        "type": "discord"
                      },
                      {
                        "title": "medium",
                        "url": "https://medium.com/@cryptodynastygame",
                        "type": "medium"
                      },
                      {
                        "title": "telegram",
                        "url": "https://t.me/eossanguo",
                        "type": "telegram"
                      },
                      {
                        "title": "twitter",
                        "url": "https://twitter.com/cryptodynasty_",
                        "type": "twitter"
                      }
                    ],
                      "metrics": {
    "transactions": 256867,
      "uaw": 1474,
        "volume": 3579.85,
          "balance": 6382.01
  }
},
{
  "dappId": 18657,
    "name": "Defira",
      "description": "Defira is a blockchain metaverse—the Defiraverse, exploring exploring novel and engaging gameplay experiences by fusing DeFi and GameFi.",
        "fullDescription": "<p>Explore Defira, a fantasy world driven by the invisible and decentralized hands of finance. Starting as a humble merchant, work up the ranks to become the ruler of a vast empire.</p>\n<p>Along the way, you must use your business and tactical acumen to deal with challenges such as allocating scarce resources and protecting yourself from dangerous enemies, including other players.</p>\n<p>However, you are not alone. Enlist the services of unique and powerful heroes and make your mark on this world!</p>",
          "logo": "https://dashboard-assets.dappradar.com/document/18657/defira-dapp-games-harmony-logo_5486ab33a3e24db36a6d0322e56c31cf.png",
            "link": "https://dappradar.com/harmony/games/defira",
              "website": "https://defira.com/",
                "chains": [
                  "harmony",
                  "cronos"
                ],
                  "categories": [
                    "games"
                  ],
                    "socialLinks": [
                      {
                        "title": "discord",
                        "url": "https://defira.com/discord",
                        "type": "discord"
                      },
                      {
                        "title": "twitter",
                        "url": "https://twitter.com/Defiraverse",
                        "type": "twitter"
                      },
                      {
                        "title": "youtube",
                        "url": "https://www.youtube.com/channel/UCewXhg6F5OpGmQjeAy6XShA",
                        "type": "youtube"
                      }
                    ],
                      "metrics": {
    "transactions": 27565,
      "uaw": 1454,
        "volume": 0,
          "balance": 0
  }
},
{
  "dappId": 20787,
    "name": "DESPERADO B218",
      "description": "Web3 gaming with ecosystem\nJoin us to discover your role: Holder, Trader, and Player",
        "fullDescription": "<p><strong>5 vs. 5 Strategic Team Battle</strong></p>\n<p>- In DESPERADO B218, you will form a team of five heroes and face the rift walkers. Emerge victorious against the rift walkers. Claim victories, climb the ranks and you shall be rewarded handsomely.</p>\n<p>- Strategically manage your mana. In DESPERADO B218, mana plays a crucial part in battle. How you use each hero’s skill every turn with the mana at hand could change the tide of battle. More heroes will join you through scouting and spirit links.</p>\n<p><strong>Heroes</strong></p>\n<p>- Diverse and charming characters reside within the world of 'DESPERADO B218: The Scars of Exos'.</p>\n<p>- Each hero has their own unique looks, Grades, Stats, and Skills. Epic and Legend Tier heroes have a chance of obtaining a ‘Unique Skill’. A hero’s Star Grade and Stats can also be upgraded.</p>\n<p>- If a hero has the Charisma stat, it can be used to recruit additional heroes through the ‘Scout’ system.</p>\n<p>- And if desired, specific parts of each hero's hair, body, and weapon can be customized to create a unique look.</p>\n<p><strong>Battle Rules</strong></p>\n<p>- Each user battles by forming a team of 5 heroes.</p>\n<p>- The battle consists of rounds and turns.</p>\n<p>- Each user will take turns in order, and whoever manages to defeat all opposing heroes, win.</p>\n<p>- Each hero has Health Slots, and a hero will fall once all of their Health Slots have been depleted.</p>\n<p>- A hero’s Health Slot will deplete in relation to the damage they receive.</p>\n<p><strong>DAO</strong></p>\n<p>- DAO is the decentralized organization for 'DESPERADO B218: The Scars of Exos', where they can contribute to determining the game’s roadmap.</p>\n<p>- Once DAO gets officially established, users will be able to directly impact the management and the development of the game or vote with tokens to directly influence the game’s future.</p>",
          "logo": "https://dashboard-assets.dappradar.com/document/20787/desperadob218-dapp-games-matic-logo_601011e4c870ffa6a2516e59f9e7469a.png",
            "link": "https://dappradar.com/polygon/games/desperado-b218",
              "website": "https://luxon.games",
                "chains": [
                  "polygon"
                ],
                  "categories": [
                    "games"
                  ],
                    "socialLinks": [
                      {
                        "title": "discord",
                        "url": "http://discord.gg/8qwjfsgZJ8",
                        "type": "discord"
                      },
                      {
                        "title": "medium",
                        "url": "https://medium.com/@LUXON",
                        "type": "medium"
                      },
                      {
                        "title": "twitter",
                        "url": "https://twitter.com/DesperadoB218",
                        "type": "twitter"
                      }
                    ],
                      "metrics": {
    "transactions": 2441,
      "uaw": 1390,
        "volume": 0,
          "balance": 0
  }
},
{
  "dappId": 5286,
    "name": "R-PLANET",
      "description": "Real-Time Military Strategy NFT game",
        "fullDescription": "<p><strong>Real-Time Military Strategy NFT game</strong></p>\n<p>R-Planet game is the first full-fledged strategy game on the market in which you can conveniently and effortlessly <strong>use NFTs </strong>to have different benefits and gain your aims.</p>\n<p>Choose a faction, build your base, mine the resources, train an army of robots, fight to survive, and win unique gifts!</p>\n<p>It is a <strong>Play-for-Fun, Free-to-Play, and Play-and-Earn </strong>game.</p>",
          "logo": "https://dashboard-assets.dappradar.com/document/5286/rplanet-dapp-games-wax-logo_e0481710a977c4b22fd6570ef84392a2.png",
            "link": "https://dappradar.com/wax/games/r-planet",
              "website": "http://rplanet.io",
                "chains": [
                  "wax"
                ],
                  "categories": [
                    "games"
                  ],
                    "socialLinks": [
                      {
                        "title": "discord",
                        "url": "https://discord.gg/r-planet-official",
                        "type": "discord"
                      },
                      {
                        "title": "medium",
                        "url": "https://rplanet.medium.com",
                        "type": "medium"
                      },
                      {
                        "title": "telegram",
                        "url": "https://t.me/rplanetio",
                        "type": "telegram"
                      },
                      {
                        "title": "twitter",
                        "url": "https://twitter.com/RPLANETio",
                        "type": "twitter"
                      }
                    ],
                      "metrics": {
    "transactions": 35201,
      "uaw": 1335,
        "volume": 193.59,
          "balance": 0
  }
},
{
  "dappId": 11134,
    "name": "Colonize Mars",
      "description": "Colonize Mars is the only simulation game where your actions can help humanity build a new life on the Red Planet.",
        "fullDescription": "<p><strong>Collect</strong></p>\n<p>Collect cards which represent vehicles, equipment, buildings, and astronauts. All items are custom designed by our team of architects and engineers, informed by real aerospace technology.</p>\n<p><strong>Strategize</strong></p>\n<p>Use your collection to generate resources that are useful to building a self-sustaining colony on Mars. &nbsp;React quickly and skillfully to manage hazards that affect resource production.</p>\n<p><strong>Explore</strong></p>\n<p>Navigate a 3d map generated from high-resolution photos of the Mars surface. Find scientific evidence around the map to produce rare discovery NFTs and mine for resources.</p>\n<p><strong>Earn</strong></p>\n<p>Track your rank amongst other players. Compete to be the top earner, top collector, and more!</p>",
          "logo": "https://dashboard-assets.dappradar.com/document/11134/colonizemars-dapp-games-wax-logo_8960ddd09bb18ab7f9c4e05c5bb06e22.png",
            "link": "https://dappradar.com/wax/games/colonize-mars",
              "website": "https://colonizemars.com/",
                "chains": [
                  "wax",
                  "binance-smart-chain"
                ],
                  "categories": [
                    "games"
                  ],
                    "socialLinks": [
                      {
                        "title": "discord",
                        "url": "https://discord.gg/colonize-mars",
                        "type": "discord"
                      },
                      {
                        "title": "twitter",
                        "url": "https://twitter.com/ColonizeMarsNFT",
                        "type": "twitter"
                      }
                    ],
                      "metrics": {
    "transactions": 37244,
      "uaw": 1214,
        "volume": 21284.65,
          "balance": 0
  }
},
{
  "dappId": 6980,
    "name": "Voxies",
      "description": "Voxies are cute, lovable and collectible 3d voxel buddies, that live and play on the Ethereum blockchain.",
        "fullDescription": "<p>Voxies are cute, lovable and collectible 3d voxel buddies, that live and play on the Ethereum blockchain. There are only 10,000 Voxies in existence and no two Voxies are identical. Lots of random properties and fun traits make each Voxie cute, unique and sometimes rare!</p>\n<p>Voxies are not just a collectible but are also the first and only NFT to be fully integrated with a playable RPG turn-based tactical game. Bring your owned Voxies to life in Voxie Tactics as you collect, battle, and earn rewards in the Voxiverse. VOXEL tokens are awarded for ownership of Voxies and are used as the currency in Voxie Tactics and on the secondary Voxie marketplace.</p>",
          "logo": "https://dashboard-assets.dappradar.com/document/6980/voxies-dapp-games-ethereum-logo_957732b68ca621c3e51b6d23790a20ef.png",
            "link": "https://dappradar.com/polygon/games/voxies",
              "website": "https://voxies.io",
                "chains": [
                  "ethereum",
                  "polygon"
                ],
                  "categories": [
                    "games"
                  ],
                    "socialLinks": [
                      {
                        "title": "discord",
                        "url": "http://discord.gg/q8Swd7vPDc",
                        "type": "discord"
                      },
                      {
                        "title": "medium",
                        "url": "https://voxiesnft.medium.com/",
                        "type": "medium"
                      },
                      {
                        "title": "twitter",
                        "url": "https://twitter.com/VoxiesNFT",
                        "type": "twitter"
                      }
                    ],
                      "metrics": {
    "transactions": 15546,
      "uaw": 1212,
        "volume": 0,
          "balance": 111.17
  }
},
{
  "dappId": 32757,
    "name": "LABRADO",
      "description": "LBRD is a Strategic Investment Game called P2E3.0 that allows you to skip the Ponzi and focus on social interactivity and fun⚔️?",
        "fullDescription": "<p>Labrado is a Play-to-Earn (P2E) game where players strategize together to reclaim mines of Labrado Crystals from the Evil God Gargantua. Players power up through NFT upgrades and communicate with one another to fight Gargantua's army and restore peace to the world.</p>",
          "logo": "https://dashboard-assets.dappradar.com/document/32757/labrado-dapp-games-bsc-logo_b332b9c47a7ad4f5dca205f8dded0352.png",
            "link": "https://dappradar.com/binance-smart-chain/games/labrado",
              "website": "https://lbrd.xyz/",
                "chains": [
                  "binance-smart-chain",
                  "thundercore"
                ],
                  "categories": [
                    "games"
                  ],
                    "socialLinks": [
                      {
                        "title": "discord",
                        "url": "https://discord.com/invite/lbrdofficial",
                        "type": "discord"
                      },
                      {
                        "title": "medium",
                        "url": "https://medium.com/@lbrdofficial",
                        "type": "medium"
                      },
                      {
                        "title": "telegram",
                        "url": "https://t.me/lbrdofficialgroup",
                        "type": "telegram"
                      },
                      {
                        "title": "twitter",
                        "url": "https://twitter.com/lbrdofficial",
                        "type": "twitter"
                      }
                    ],
                      "metrics": {
    "transactions": 4489,
      "uaw": 1183,
        "volume": 43045.69,
          "balance": 0
  }
},
{
  "dappId": 17707,
    "name": "THE RED VILLAGE",
      "description": "The first dark-fantasy ecosystem in web3 gaming. Tournament mode is currently live and playable in open beta, and a AAA-rated MMORPG is under development.",
        "fullDescription": "<p>The Red Village is a multiplayer dark-fantasy ecosystem, that uses NFT 'Champions' across two distinct game modes: Tournaments (currently live, in Beta), and Darklands (an open world MMORPG, currently under development in a multi-year partnership with Sydney's Blowfish Studios (a subsidiary of global blockchain giant Animoca Brands)).</p>\n<p>There are five classes of Champion in The Red Village; the Barbarian, Wizard, Druid, Ranger, and Paladin. Each Champion is completely unique with its own distinct name, skills, attributes, and characteristics. There will only ever be 28,000 of these Pureblood Champions in The Red Village ecosystem spanning across four distinct Bloodlines; Genesis (R1-R3 genotype), Mystic (R4-6), Warlord (R7-R9) and Lionheart (R10-12).</p>\n<p>Using their fearsome NFT Champions, players can fight for honour and glory in famed Red Village PvP tournaments in front of the malevolent Blood Queen. Victorious players earn real financial rewards, or even their opponent's NFT.&nbsp;</p>\n<p>Those daring enough can also team up with other NFT communities to wage war in large-scale Faction fights, which take place in custom-built, epic arenas, themed for each community.</p>\n<p>Later, players may brave a trip to the lair of the Bloodwraith Gaa'gore, where they can Summon new and deadly Halfblood Champions. By studying and learning their Champions' attributes, they can breed for better skills and more powerful warriors. Future game modes include Seasons, where stats can be reset, and player controlled Tournaments.</p>",
          "logo": "https://dashboard-assets.dappradar.com/document/17707/theredvillage-dapp-games-matic-logo_0c4a254a9b80d84e2f1a34055c81891c.png",
            "link": "https://dappradar.com/polygon/games/the-red-village",
              "website": "https://www.theredvillage.com",
                "chains": [
                  "polygon"
                ],
                  "categories": [
                    "games"
                  ],
                    "socialLinks": [
                      {
                        "title": "discord",
                        "url": "https://discord.gg/theredvillage",
                        "type": "discord"
                      },
                      {
                        "title": "github",
                        "url": "https://the-red-village.gitbook.io/the-red-village/",
                        "type": "github"
                      },
                      {
                        "title": "medium",
                        "url": "https://theredvillage.medium.com/",
                        "type": "medium"
                      },
                      {
                        "title": "twitter",
                        "url": "https://theredvillage.com/tournaments",
                        "type": "twitter"
                      },
                      {
                        "title": "youtube",
                        "url": "https://www.youtube.com/channel/UCo3R8iGZrLgQMuVy1SBN49w",
                        "type": "youtube"
                      }
                    ],
                      "metrics": {
    "transactions": 34008,
      "uaw": 1174,
        "volume": 37740.42,
          "balance": 18199.72
  }
},
{
  "dappId": 19017,
    "name": "Outer Ring MMO",
      "description": "Inside this MMORPG videogame, you will hunt for legendary NFT loot, take part in huge PvP and PvE battles, and collect epic weapons, gear, and spaceships.",
        "fullDescription": "<p>Outer Ring MMO is a science fiction MMORPG(Massively Multiplayer Online Role-Playing Game) &nbsp;with tokenized economy. The universe created within the game is based on the Outer Ring Saga, a novel where 5 species, divided into 4 different factions, fight for the control of planets and resources.</p>\n<p>The videogame has its own Player Driven Economy, meaning that all assets are either generated from the player´s work or created by them. Using blockchain technology to convert all kinds of items and assets into fungible or non-fungible tokens (NFTs). As a result, players become the true owners of these objects and can generate value for their time invested by selling with them.</p>",
          "logo": "https://dashboard-assets.dappradar.com/document/19017/outerringmmo-dapp-games-bsc-logo_87925c94a759c2ab1d6cb0b57ec48a35.png",
            "link": "https://dappradar.com/binance-smart-chain/games/outer-ring-mmo",
              "website": "https://outerringmmo.com/download-tech-demo/",
                "chains": [
                  "binance-smart-chain"
                ],
                  "categories": [
                    "games"
                  ],
                    "socialLinks": [
                      {
                        "title": "discord",
                        "url": "https://discord.gg/outerringmmo",
                        "type": "discord"
                      },
                      {
                        "title": "instagram",
                        "url": "https://www.instagram.com/outerringmmo/",
                        "type": "instagram"
                      },
                      {
                        "title": "telegram",
                        "url": "https://t.me/outerringofficialeng",
                        "type": "telegram"
                      },
                      {
                        "title": "twitter",
                        "url": "https://twitter.com/OuterRingMMO",
                        "type": "twitter"
                      },
                      {
                        "title": "youtube",
                        "url": "https://www.youtube.com/c/OuterRingMMO",
                        "type": "youtube"
                      }
                    ],
                      "metrics": {
    "transactions": 198,
      "uaw": 1169,
        "volume": 3046676.21,
          "balance": 1249147.56
  }
},
{
  "dappId": 12787,
    "name": "Million on Mars",
      "description": "Real Strategy and Crafting on your Own Mars Settlement. Play & Own.",
        "fullDescription": "<p>In this web-based Play &amp; Own game, you’ve just landed on Mars, and life looks very different than on planet Earth. Scavenge resources on real Mars terrain, develop land, and trade in a player-owned economy. It’s your exploration story. Craft, strategize, and earn your way there.</p>",
          "logo": "https://dashboard-assets.dappradar.com/document/12787/milliononmarslandrush-dapp-games-wax-logo_812569b7b51a075f4d27bde749c4cf1d.png",
            "link": "https://dappradar.com/wax/games/million-on-mars",
              "website": "https://milliononmars.io",
                "chains": [
                  "wax"
                ],
                  "categories": [
                    "games"
                  ],
                    "socialLinks": [
                      {
                        "title": "discord",
                        "url": "https://milliononmars.com/discord",
                        "type": "discord"
                      },
                      {
                        "title": "github",
                        "url": "https://github.com/MillionOnMars",
                        "type": "github"
                      },
                      {
                        "title": "twitter",
                        "url": "https://twitter.com/MilliononMars",
                        "type": "twitter"
                      },
                      {
                        "title": "youtube",
                        "url": "https://www.youtube.com/c/MilliononMars",
                        "type": "youtube"
                      }
                    ],
                      "metrics": {
    "transactions": 8328,
      "uaw": 1155,
        "volume": 189.98,
          "balance": 0
  }
},
{
  "dappId": 27600,
    "name": "AVATARA",
      "description": "AVATARA is F2P top-end action MMORPG.\nThe game boasts a P2E system completed within ecosystem, providing a new, higher level of entertainment like never before.",
        "fullDescription": "<p>AVATARA is a top-end action MMORPG where one can enjoy the God’s powers in your character. (Avatar: NFT)</p>\n<p>Users sign-up for a guild in the AVATARA universe, grow their characters, participate in battles and wars to earn rare items and utility tokens.</p>\n<p>In addition, items and avatars (NFT), and even characters can be freely traded among users in the game.</p>\n<p>Previously unguaranteed in WEB2 MMORPGs, this is returning the ownership of items and characters back to the users. Although we have just begun, the AVATARA team plans to expand beyond our platform and into the vast WEB3 world.</p>\n<p>We focus on the fun of ‘possible embodiments’. We believe that a game that ‘provides entertainment through real embodiments’, rather than merely ‘overlaying’ blockchain/NFT technologies, is the catalyst of bringing WEB2 users to WEB3.</p>\n<p>The AVATARA development team is made up of members with over 10 years of experience in the Korean game market. They have been able to show solid teamwork as the ‘original’ team who had developed and serviced games for years.</p>\n<p>Ranked top 8th place in mobile game sales with their astonishing and entertaining gameplay, the ‘RohanM’ development team have been preparing a 3 years worth update roadmap based on a blockchain economy system with high completion.</p>\n<p>AVATARA’s NFT, AVATAR refers to one that acts as a representative of God who had been given God’s powers. Journey the world as the God’s representative with forcible powers. AVATAR can be summoned through the MINT page, and the rank and appearance is selected randomly. In addition, each AVATAR can be freely transferred/purchased/sold within the game.</p>",
          "logo": "https://dashboard-assets.dappradar.com/document/27600/avatara-dapp-games-klaytn-logo_dd0a11ea1681018ce6b23b8916e734d1.png",
            "link": "https://dappradar.com/klaytn/games/avatara",
              "website": "https://game.avatara.online",
                "chains": [
                  "klaytn"
                ],
                  "categories": [
                    "games"
                  ],
                    "socialLinks": [
                      {
                        "title": "discord",
                        "url": "https://discord.gg/avatara",
                        "type": "discord"
                      },
                      {
                        "title": "medium",
                        "url": "https://medium.com/avatara-main",
                        "type": "medium"
                      },
                      {
                        "title": "twitter",
                        "url": "https://twitter.com/Avatara_main",
                        "type": "twitter"
                      }
                    ],
                      "metrics": {
    "transactions": 2702,
      "uaw": 1143,
        "volume": 0,
          "balance": 0
  }
}
  ]
}

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