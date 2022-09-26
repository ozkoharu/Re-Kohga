import React, { useEffect, useState } from 'react';
import { BaseButton } from '../../components/atoms/button/baseButton';
import Link from 'next/link';
import axios from 'axios';


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
                //数字か数字じゃないか
                //数字だったら
                if (isNaN(res.data.status) === false) {
                    setflag(false);
                } else {
                    setflag(true);
                }
                console.log('res', res.data.status);
                console.log('res判断', isNaN(res.data.status));
            })
            .catch((e) => {
                console.log(e);
            })
        console.log('ugoita');
    }

    return (
        <>
            <Link href='../CarMenu/'>
                <BaseButton onClick={onClick} isSubmit={false}>
                    車を使う
                </BaseButton>
            </Link>

            <BaseButton onClick={onkanri} isSubmit={false}>
                車管理Maneger
            </BaseButton>
        </>
    )
}
export default WelcomePage;
