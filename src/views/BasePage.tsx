import * as React from 'react';
import Header from '../organisms/Header';
import ArticleList, { Article } from '../organisms/ArticleList';
import ProfileSection from '../molecules/ProfileSection';

type Props = React.Props<HTMLImageElement> & {}

type State = {}

const style = {
}

class BasePage extends React.Component<Props, State> {
    render() {
        const articles = [
            new Article("https://c.s-microsoft.com/ja-jp/CMSImages/SurfaceHome_HL_Hero_Panel_1_V3_En-us.jpg?version=af7d3fc0-b3b7-3c35-2959-dfa69333d656", "オールスクリーンのデザインも。iPhoneで最も長いバッテリー駆動時間も。最も速いパフォーマンスも。耐水性能と防沫性能も。スタジオ品質の写真と4Kビデオも。より高い安全性をもたらすFace IDも。新しいiPhone XRへ。それは、鮮やかなアップグレードです。"),
            new Article("https://www.apple.com//v/iphone-xr/d/images/overview/design_film_medium.jpg", "Liquid Retina、登場。iPhone XRの新しいディスプレイは、業界の中で最も先進的なLCDです。画期的なバックライトの設計により、スクリーンを隅々に広げることができました。現実の世界に近い色が、一つの美しいエッジから別の美しいエッジまでをフルに使って映し出されます。"),
            new Article("https://www.apple.com//jp/music/images/overview/apps_medium_2x.jpg", "pple Musicで、あなたのコンテンツを多くの人に届けましょう。公開のための様々な方法を紹介します。MusicKit、RSSフィード、ウィジェット、ブランドのガイドライン、バッジアートなど、いろいろなツールやリソースも用意しました。"),
        ]

        return (
            <div style={ style }>
                <Header />
                <div style={{ margin: "0 auto", width: "800px"}}>
                    <div style={{ float: "left" }}>
                        <ArticleList articles={ articles }/>
                    </div>
                    <div style={{ float: "left" }}>
                        <ProfileSection imageUrl="https://pbs.twimg.com/profile_images/1106480002751557633/XxsF79lo_bigger.png" name="nagamy"/>
                    </div>
                    <div style={{ clear: "both" }}></div>
                </div>
            </div>
        );
    }
}

export default BasePage;