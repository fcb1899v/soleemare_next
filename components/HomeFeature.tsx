import { NextPage } from 'next'
import styles from '../styles/HomeFeature.module.css'
import bg from 'public/images/shikkui.jpg'
import HomeFeatureContent from './HomeFeatureContent'


const feature_message1 = [
  '　当店のスフォリアテッラは、爽やかな酸味と芳醇な香りが特徴の自家農園のこだわりレモンを贅沢に使用しています。',
  '　収穫したての新鮮なレモンは特に香りが強く、収穫している私の心をいつも幸せな気持ちにさせてくれます。',
];
const feature_messages1 = [
  [
    '　自家農園のレモンのフレッシュ果汁を使用した手作りリコッタチーズと自家製レモンピールが混ぜ込んだクリームが贅沢に入っていて、自家農園のこだわりレモンを存分に味わうことができます。'
  ],
  [
    '　農薬については、収穫期の散布は避け、半年前ごろに1度しか散布していません。また、防カビ剤、防腐剤、ワックスなどのポストハーベスト農薬は全く使用していません。'
  ]
];

const feature_message2 = [
  '　当店のスフォリアテッラは、ひとつひとつ心を込めて手作りしています。',
  '　スフォリアテッラの生地作りの工程は、繊細な技術が必要なため、量産が難しいとされています。',
];
const feature_messages2 = [
  [
    '　レモンの収穫から始まり、生地やクリームの原材料の仕込み、生地作り、焼成、パッケージまでの全工程を一貫生産しています。'
  ],
  [
    '　何度も試作を重ねながら、生地作りの技術を習得し、また、生地の原材料や厚み、焼成温度および焼成時間を試行錯誤することで、独特のパリパリ食感と香り高い風味を実現しました。'
  ]
];

const feature_message3 = [
  '　当店のスフォリアテッラは、イタリア伝統のフレッシュチーズ「リコッタチーズ」を使用しています。',
  '　当店のスフォリアテッラは、独特のパリパリ食感を実現するために国産無添加ラードを使用しています。',
];
const feature_messages3 = [
  [
    '　自家農園のレモン果汁を牛乳にたっぷり混ぜて作るリコッタチーズに、自家製レモンピール、北海道産てんさい糖、イタリア産セモリナ小麦粉、オーガニックシナモンなどの厳選素材を加えて、スフォリアテッラ用のレモンクリームが完成します。',
    '　リコッタチーズの特徴、さっぱりとした口当たりと自然なミルクの甘さで、高タンパク・低脂肪・低カロリーな上、カルシウムやカリウム、ビタミンなどが含まれています。',

  ],
  [
    '　鮮度のよい国産豚脂を平釜で時間をかけてゆっくりと炊き上げた無添加ラードの鼻から抜ける香ばしくも甘い香りと特有のコクのあるうまみは格別です。',
    '　ラードが体に良くないイメージがあるかもしれませんが、実は、トランス脂肪酸フリーで、成長期の子どもに不足しがちなビタミンAやビタミンEを多く含んでいます。また、カロリーも植物油と比較してほとんど差はありません。'
  ]
];

const HomeFeature: NextPage = () => {
  return (
    <div id="features" className={styles.features} style={{backgroundImage: `linear-gradient(rgba(244, 245, 240, 0.6),rgba(244, 245, 240, 0.6)), url(${bg.src})`, height: '100%'}}>
      <div className={styles.features_title}>
        <h2>当店のこだわり</h2>  
      </div>
        <HomeFeatureContent
          num="../images/1.png"
          title='自家農園のレモンを贅沢に使用'
          image1="../images/farm1.jpg"
          image2="../images/farm2.jpg"
          message1={feature_message1[0]}
          messages1={feature_messages1[0]}
          message2={feature_message1[1]}
          messages2={feature_messages1[1]}
        />
        <HomeFeatureContent
          num="../images/2.png"
          title='心を込めた手作りスイーツ'
          image1="../images/sfogliatella1.jpg"
          image2="../images/crust.jpg"
          message1={feature_message2[0]}
          messages1={feature_messages2[0]}
          message2={feature_message2[1]}
          messages2={feature_messages2[1]}
        />
        <HomeFeatureContent
          num="../images/3.png"
          title='こだわりの厳選素材'
          image1="../images/cream.jpg"
          image2="../images/lard.jpg"
          message1={feature_message3[0]}
          messages1={feature_messages3[0]}
          message2={feature_message3[1]}
          messages2={feature_messages3[1]}
        />
      {/* <div className={styles.contents} >
        <HomeFeatureMaterial
          title='最強力粉とは？'
          image="../images/farina.jpg"
          message='　強力粉の中でも最もたんぱく質を多く含む小麦粉です。灰分が高いため小麦の風味が強く、また、スフォリアテッラの特徴である表面のパリパリ感を生み出すことができます。'
        />
        <HomeFeatureMaterial
          title='てんさい糖とは？'
          image="../images/sugar.jpeg"
          message='　イタリアでは主流のてんさい（ビート・砂糖大根）が原料の砂糖です。腸内環境を整える天然のオリゴ糖が含まれているため、血糖値の上昇を緩やかにし、身体を温める効果が期待できます。'
        />
        <HomeFeatureMaterial
          title='リコッタチーズとは？'
          image="../images/ricotta.jpg"
          message='　イタリアが発祥地のリコッタチーズは、チーズ製造時に出るホエイを煮詰めて固めたフレッシュチーズです。高タンパク・低脂肪・低カロリーな上、カルシウムやカリウム、ビタミンなどが含んでおり、さっぱりとした口当たりと自然なミルク甘さが特徴です。'
        />
      </div> */}  
    </div>
  );
};

export default HomeFeature