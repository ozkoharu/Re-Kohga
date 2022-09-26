import React from 'react';
import { BaseButton } from '../../components/atoms/button/baseButton';
import Link from 'next/link';

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
    //ここでクリックをおしたときに星くんに車確保のお願いをする
    //msgを送信してそのreturnをみてポップアップを出したり出さなかったりする

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
