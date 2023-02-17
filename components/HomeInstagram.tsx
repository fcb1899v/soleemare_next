import { NextPage } from 'next';
import Link from 'next/link';
import axios from 'axios';
import React, { useState, useEffect } from 'react'
import {Card, CardMedia } from "@mui/material";
import styles from '../styles/HomeInfo.module.css'
import SNSLink from './SNSLink';

async function getInstaItems(): Promise<[]> {
  try {
    const userId = process.env.NEXT_PUBLIC_INSTA_ID;
    const token = process.env.NEXT_PUBLIC_INSTA_TOKEN;
    const instaUrl = `https://graph.facebook.com/v15.0/${userId}?fields=media.limit(10){id,caption,media_url,thumbnail_url,timestamp,media_type,permalink,like_count}&access_token=${token}`;
    const response: any = await axios.get<[]>(instaUrl);
    console.log(response.data["media"]["data"])
    return response.data["media"]["data"];
  } catch (error) {
    console.error(error);
    return []
  }
}

const HomeInstagram: NextPage = () => {
  const [instaItems, setInstaItems] = useState<[] |[]>([]);
  useEffect(() => {
    (async () => {
      const instaItems: [] = await getInstaItems();
      setInstaItems(instaItems);
    })();
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.border__yellow}>
        <div className={styles.box}>
          <SNSLink href="https://www.instagram.com/soleemare_dolce" src="../sns/instagram_b.svg" alt="Instagram"/>
          <div className={styles.insta} >
            <div className={(instaItems.length == 0) ? styles.insta_box_none: styles.insta_box}>
              <div className={(instaItems.length == 0) ? styles.insta_name_none: styles.insta_name}>
                <img src="../images/soleemare_logo.png" alt="Sole e Mare"/>
                <p>@soleemare_dolce</p>
                <div className={styles.insta_logo}>
                  <Link href="https://www.instagram.com/soleemare_dolce">
                    <img src="../sns/instagram_logo.png" alt="Instagram"/>
                  </Link>
                </div>
              </div>
              {
                instaItems.map((item: any, i: number) => (
                  <a key={i} href={item["permalink"]} className={styles.insta_link}>
                    <Card className={styles.insta_container}>
                      <CardMedia
                        className={styles.insta_image}
                        image={(item["media_type"] == "VIDEO") ? item["thumbnail_url"]: item["media_url"]}
                        title="refrigerator"
                      />
                      <div className={styles.insta_like}>♥ {item["like_count"]}</div>
                    </Card>
                  </a>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeInstagram

