import React from 'react';
import { BaseButton } from '../../components/atoms/button/baseButton';
import Link from 'next/link';

const onCikcNewRoot = () => {
    //新規ルート作成ボタン押されたとき
}

const onClickExistRoot = () => {
    //既存ルート選択ボタンが押されたとき
}

const onClickCarWatch = () => {
    //車を確認するをおしたとき
}

const onClickEnd = () => {
    //車を解放
}

const CarMenu = () => {
    return (
        <>
            <Link href='../MapPage/Destination'>
                <BaseButton onClick={onCikcNewRoot} isSubmit={false}>
                    新規ルート作成
                </BaseButton>
            </Link>
            <div>
                <BaseButton onClick={onClickExistRoot} isSubmit={false} >
                    既存ルート選択
                </BaseButton>
            </div>
            <div>
                <Link href='../CarWatch/'>
                    <BaseButton onClick={onClickCarWatch} isSubmit={false} >
                        車の現在地確認
                    </BaseButton>
                </Link>
            </div>
            <div>
                <BaseButton onClick={onClickEnd} isSubmit={false}>
                    車を解放エクステンション
                </BaseButton>
            </div>
        </>
    )
}
export default CarMenu;