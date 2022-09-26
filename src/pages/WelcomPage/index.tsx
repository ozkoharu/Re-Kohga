import React, { useEffect, useState } from 'react';
import { BaseButton } from '../../components/atoms/button/baseButton';
import Link from 'next/link';
import axios from 'axios';
import { isNumber } from 'util';
import CarMenu from '../CarMenu';


//dummyApi
const dummyUrl = 'http://saza.kohga.local:3000/dummyApi';


const PopupTrue = () => {
    //成功した時のポップアップウィンドウを出す
}
const PopupFalse = () => {
    //失敗した時にポップアップを出す
}

const axiosPost = () => {
    //星くんにPOSTをとばしてmsgを受信する
    //車が確保できたらPopup
}


const onkanri = () => {

}

const WelcomePage = () => {
    const [flag, setflag] = useState(false);

    const onClick = async () => {
        await axios.get(dummyUrl)
            .then(function (res) {
                //星くんここ適当なメッセージ返して
                if (res.data.status === 'msg') {
                    //setflag(false);
                } else {
                    //setflag(true);
                }
                console.log('res', res.data.status);

            })
            .catch((e) => {
                console.log(e);
            })
    }

    if (flag) {
        return (
            <CarMenu />
        )

    } else {
        return (
            <>

                <BaseButton onClick={onClick} isSubmit={false}>
                    車を使う
                </BaseButton>


                <BaseButton onClick={onkanri} isSubmit={false}>
                    車管理Maneger
                </BaseButton>
            </>
        )
    }

}
export default WelcomePage;
