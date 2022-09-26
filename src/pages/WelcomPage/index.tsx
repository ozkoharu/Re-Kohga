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
const onClick = () => {
    const [flag, setflag] = useState(false);
    axios.get(dummyUrl)
        .then((res) => {
            if (isNaN(res.data) === false) {
                setflag(true);
                console.log('res', res.data);
            } else {
                setflag(false);
            }
        })
        .catch((e) => {
            console.log(e);
        })
    console.log('ugoita');
}

const onkanri = () => {

}

const WelcomePage = () => {

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
