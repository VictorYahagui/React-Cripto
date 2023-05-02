//Img
import BitconImg from '../assets/bitcon.png';
import EthereumImg from '../assets/ethereum.png';
import LitecoinImg from '../assets/litecoin.png';

type DataType = {
    id: number
    image: string,
    name: string,
    abbr: string,
    description: string,
}

export const currenciesData: DataType[] = [
    {
        id: 1,
        image: BitconImg,
        name: 'Bitcoin',
        abbr: 'BTC',
        description:
            'Digital currency in which a record of transactions is maintained.',
    },
    {
        id: 2,
        image: EthereumImg,
        name: 'Ethereum',
        abbr: 'ETH',
        description:
            'Blockchain technology to create and run decentralized digital applications.',
    },
    {
        id: 3,
        image: LitecoinImg,
        name: 'Litecoin',
        abbr: 'LTC',
        description:
            'Cryptocurrency that enables instant payments to anyone in the world.',
    },
];