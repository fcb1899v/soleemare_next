import { NextPage } from 'next'
import styles from '../styles/HomeFeature.module.css'
import bg from 'public/images/shikkui.jpg'
import HomeFeatureContent from './HomeFeatureContent'

const titles = [
  '自家農園の柑橘を贅沢に使用',
  '心を込めた手作りスイーツ',
  'こだわりの厳選素材',
]

const images = [
  [
    "../images/farm1.jpg",
    "../images/farm2.jpg" ,   
  ],
  [
    "../images/sfogliatella1.jpg",
    "../images/crust.jpg" ,   
  ],
  [
    "../images/cream.jpg",
    "../images/lard.jpg",   
  ],
]

const message = [
  [
    '　当店のスフォリアテッラは、爽やかな酸味と芳醇な香りが特徴の自家農園のこだわりレモンを贅沢に使用しています。',
    '　収穫したての新鮮なレモンは特に香りが強く、収穫している私の心をいつも幸せな気持ちにさせてくれます。',
  ],
  [
    '　当店のスフォリアテッラは、ひとつひとつ心を込めて手作りしています。',
    '　スフォリアテッラの生地作りの工程は、繊細な技術が必要なため、量産が難しいと言われています。',
  ],
  [
    '　当店のスフォリアテッラは、自家農園のレモン果汁を牛乳にたっぷり混ぜて作るイタリア伝統のフレッシュチーズ「リコッタチーズ」を使用しています。',
    '　当店のスフォリアテッラは、独特のパリパリ食感を実現するために国産無添加ラードを使用しています。',
  ],
];

const messages = [
  [
    [
      '　自家農園のレモンのフレッシュ果汁を使用した手作りリコッタチーズと自家製レモンピールが混ぜ込んだクリームが贅沢に入っていて、自家農園のこだわりレモンを存分に味わうことができます。'
    ],
    [
      '　農薬については、収穫期の散布は避け、半年前ごろに1度しか散布していません。また、防カビ剤、防腐剤、ワックスなどのポストハーベスト農薬は全く使用していません。'
    ]
  ],
  [
    [
      '　レモンの収穫から始まり、生地やクリームの原材料の仕込み、生地作り、焼成、パッケージまでの全工程を一貫生産しています。'
    ],
    [
      '　何度も試作を重ねながら、生地作りの技術を習得し、また、生地の原材料や厚み、焼成温度および焼成時間を試行錯誤することで、独特のパリパリ食感と香り高い風味を実現しました。'
    ]
  ],
  [
    [
      '　リコッタチーズに、自家製レモンピール、北海道産てんさい糖、イタリア産セモリナ小麦粉、オーガニックシナモンなどの厳選素材を加えて、スフォリアテッラ用のレモンクリームが完成します。',
      '　リコッタチーズの特徴は、さっぱりとした口当たりと自然なミルクの甘さで、高タンパク・低脂肪・低カロリーな上、カルシウムやカリウム、ビタミンなどが含まれています。',
    ],
    [
      '　鮮度のよい国産豚脂を平釜で時間をかけてゆっくりと炊き上げた無添加ラードの鼻から抜ける香ばしくも甘い香りと特有のコクのあるうまみは格別です。',
      '　ラードが体に良くないイメージがあるかもしれませんが、実は、トランス脂肪酸フリーで、成長期の子どもに不足しがちなビタミンAやビタミンEを多く含んでいます。また、カロリーも植物油と比較してほとんど差はありません。'
    ]
  ],
];

const HomeFeature: NextPage = () => {
  const feature_contents = [];
  for (var i = 0; i < titles.length; i++) {
    var num: string = `../images/${i + 1}.png`;
    feature_contents.push(
      <HomeFeatureContent
        num={num}
        title={titles[i]}
        image1={images[i][0]}
        image2={images[i][1]}
        message1={message[i][0]}
        messages1={messages[i][0]}
        message2={message[i][1]}
        messages2={messages[i][1]}
        key={`homefeature_${i}`}
      />
    )
  }
  return (
    <section id="features" className={styles.features}>
      <div className={styles.features_title}>
        <h2>当店のこだわり</h2>  
      </div>
      {feature_contents}
    </section>
  );
};

export default HomeFeature

// '最強力粉とは強力粉の中でも最もたんぱく質を多く含む小麦粉です。灰分が高いため小麦の風味が強く、また、スフォリアテッラの特徴である表面のパリパリ感を生み出すことができます。'
// 'てんさい糖とは、イタリアで主流のてんさい（ビート・砂糖大根）が原料の砂糖です。腸内環境を整える天然のオリゴ糖が含まれているため、血糖値の上昇を緩やかにし、身体を温める効果が期待できます。'
// 'イタリアが発祥地のリコッタチーズは、チーズ製造時に出るホエイを煮詰めて固めたフレッシュチーズです。高タンパク・低脂肪・低カロリーな上、カルシウムやカリウム、ビタミンなどが含んでおり、さっぱりとした口当たりと自然なミルク甘さが特徴です。'
