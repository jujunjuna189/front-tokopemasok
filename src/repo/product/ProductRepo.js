import { AssetProductProduct1, AssetProductProduct2, AssetProductProduct3, AssetProductProduct4, AssetProductProduct5 } from "../../assets"

export const getProductRepo = async () => {
    return [
        {
            id: 1,
            title: 'Ayam Kampung Jago /Kg',
            price: 50000,
            status: 'Tersedia',
            sell: '+380',
            path: AssetProductProduct1,
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries',
        },
        {
            id: 2,
            title: 'Ayam Broiler /Kg',
            price: 28000,
            status: 'Tersedia',
            sell: '+290',
            path: AssetProductProduct2,
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries',
        },
        {
            id: 3,
            title: 'Ayam Pejantan /Kg',
            price: 25000,
            status: 'Tersedia',
            sell: '+330',
            path: AssetProductProduct3,
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries',
        },
        {
            id: 4,
            title: 'Ayam Kampung Betina /Kg',
            price: 26000,
            status: 'Tersedia',
            sell: '+390',
            path: AssetProductProduct4,
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries',
        },
        {
            id: 5,
            title: 'Ayam Petelur /Kg',
            price: 34000,
            status: 'Tersedia',
            sell: '+550',
            path: AssetProductProduct5,
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries',
        },
    ]
}

export const getProductDetailRepo = async ({ id }) => {
    const product = await getProductRepo().then((res) => {
        return res.filter((x) => x.id === parseInt(id));
    });
    return product[0] ?? {};
}