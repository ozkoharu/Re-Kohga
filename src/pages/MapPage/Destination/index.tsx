import Map from "../../../components/map/basemap";
import type { NextPage } from "next";
import { BaseHeader } from "../../../components/template/header/baseHeader";
import { BaseButton } from "../../../components/atoms/button/baseButton";
import { BaseFooter } from "../../../components/template/footer/basefooter";
import dynamic from "next/dynamic";
import Link from "next/link";
import { createContext, ReactText, useState } from "react";
import { LatLng } from "leaflet";
import axios from "axios";

//ここをクソデカSPAにしてtakatomoAPIのresを受け取って
//resの中身を表示

const takatomoUrl = 'http://saza.kohga.local:3000/api/notNotAstar';

export const LocationPoint = createContext({} as {
    point: LatLng[]
    setPoint: React.Dispatch<React.SetStateAction<LatLng[]>>
})


const onClickResetLocation = () => {
    //経路情報をリセット
}

const DynamicMap = dynamic(() =>
    import('../../../components/map/DestinationLook'), { ssr: false }
)

const Destination: NextPage = () => {
    const onClickPostLocation = () => {
        //たかともAPIにポスト
        console.log('takatomo', point);
        const postData = {
            "type": "watanabe",
            "data": point
        }
        axios.post(takatomoUrl, postData)
            .then(function (res) {
                console.log('res', res);
                //ここでPageをresに合わせて変更
                setPage(1);
            })
            .catch(e => {
                console.log(e);
            })
    }
    const [page, setPage] = useState<number>(0);
    const [point, setPoint] = useState<LatLng[]>([]);
    console.log('point', point);
    return (
        <>
            <LocationPoint.Provider value={{ point, setPoint }}>
                <BaseHeader>
                    <BaseButton onClick={onClickPostLocation} isSubmit={false}>各経路探索</BaseButton>
                    <BaseButton onClick={onClickResetLocation} isSubmit={false}>やり直し</BaseButton>
                    <Link href='../../CarMenu'>
                        <a>車メニューに戻る</a>
                    </Link>
                </BaseHeader>
                <DynamicMap />

                <BaseFooter />
            </LocationPoint.Provider>
        </>
    )
}
export default Destination;