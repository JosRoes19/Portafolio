//import { lazy } from "react";
import { BannerIndex } from './Banner/BannerIndex'
import { ContentIndex } from './ContentIndex/ContentIndex'
//ejemplo de importacion de un componente
// const BannnerCards = lazy(() => import('../../components/BannerCards/BannerCards'));

export const Index = () => {
    return(
        <>
            <BannerIndex/>
            <ContentIndex/>
        </>
    )
}

export default Index;