import { createContext, useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import BuyNowModal from "../../../pages/catalog/detail/component/BuyNowModal";
import { getProductDetailRepo } from "../../../repo";

const CatalogDetailContext = createContext();

export const CatalogDetailContextProvider = ({ children }) => {
    const params = useParams();
    const [element, setElement] = useState(false);
    const [catalog, setCatalog] = useState({});

    const onGetProductDetail = async ({ id }) => {
        await getProductDetailRepo({ id: id }).then((res) => {
            setCatalog(res);
        });
    }

    const buyNow = () => {
        setElement(<BuyNowModal onClickOutside={() => setElement(false)} />);
    }

    useEffect(() => {
        window.scrollTo(0, 0);
        onGetProductDetail({ id: params.id });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <CatalogDetailContext.Provider value={{ element, catalog, buyNow }}>
            {children}
        </CatalogDetailContext.Provider>
    );
}

export const UseCatalogDetailContext = () => {
    return useContext(CatalogDetailContext);
}