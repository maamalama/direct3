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

    constructor (id: string, name: string, description?: string, fullDescription?: string, logo?: string, website?: string, chain?: string) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.fullDescription = fullDescription;
        this.logo = logo;
        this.website = website;
        this.chain = chain;
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