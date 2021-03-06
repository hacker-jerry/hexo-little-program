import { useState, useEffect, useRef } from 'react';
import Taro from '@tarojs/taro';
import {
  View,
  Image,
  OpenData,
  Text,
  Button,
  OfficialAccount,
} from '@tarojs/components';
import Icon from '@/components/icon';
import List from '@/components/list';
import Donate from '@/components/donate';
import { get } from '@/apis/request';
import { webUrl, motto } from '../../../config.json';
import styles from './my.module.scss';

const My = () => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [mottoText, setMottoText] = useState<string>(motto.default);
  const [motion, setMotion] = useState<[number, number]>([0, 0]);
  const bgRef = useRef<HTMLInputElement | null>(null);
  const bannerRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    fetchMotto();
    // banner3d();
  }, []);

  useEffect(() => {
    if (
      motion[0] < -100 ||
      motion[0] > 100 ||
      motion[1] < -100 ||
      motion[1] > 100
    )
      return;
    if (bgRef.current) {
      bgRef.current.style.transform = `translateX(${motion[0] / 9}px)`;
    }
    if (bannerRef.current) {
      bannerRef.current.style.transform = `translate(${-motion[0] / 9}px, ${
        -motion[1] / 9
      }px)`;
    }
  }, [motion]);

  const banner3d = () => {
    Taro.startDeviceMotionListening({
      success: () => {
        Taro.onDeviceMotionChange((res: any) => {
          const { beta, gamma } = res;
          setMotion([gamma, beta]);
        });
      },
      interval: 'ui',
    });
  };

  const fetchMotto = () => {
    get(motto.api, {}, {}, false)
      .then((res: string) => setMottoText(res))
      .catch();
  };

  return (
    <>
      <OfficialAccount className={styles.officialAccount} />
      <View className={styles.my}>
        <View className={styles.userWrapper}>
          <Image
            className={styles.backgroundImage}
            src='https://pic.izhaoo.com/20210320231053.jpg'
            ref={bgRef}
          />
          <View className={styles.user}>
            <View className={styles.avatar}>
              <OpenData type='userAvatarUrl' lang='zh_CN' />
            </View>
            <View className={styles.userContent}>
              <View className={styles.nickname}>
                <OpenData type='userNickName' lang='zh_CN' defaultText='??????' />
              </View>
              <Text className={styles.motto}>{mottoText}</Text>
            </View>
          </View>
        </View>
        <View className={styles.tabnav} ref={bannerRef}>
          <View
            className={styles.tabnavItem}
            onClick={() => Taro.navigateTo({ url: `/pages/history/history` })}
          >
            <Icon type='image' name='tag' size={30} />
            <Text className={styles.text}>??????</Text>
          </View>
          <view className={styles.divide} />
          <View
            className={styles.tabnavItem}
            onClick={() => Taro.navigateTo({ url: `/pages/like/like` })}
          >
            <Icon type='image' name='like' size={30} />
            <Text className={styles.text}>??????</Text>
          </View>
          <view className={styles.divide} />
          <View
            className={styles.tabnavItem}
            onClick={() => {
              setModalVisible(true);
            }}
          >
            <Icon type='image' name='reward' size={30} />
            <Text className={styles.text}>??????</Text>
          </View>
          <view className={styles.divide} />
          <Button
            className={styles.tabnavItem}
            openType='share'
            style={{
              padding: 0,
              backgroundColor: '#ffffff',
              lineHeight: '1em',
            }}
          >
            <Icon type='image' name='share' size={30} />
            <Text className={styles.text}>??????</Text>
          </Button>
        </View>
        <View className={styles.listWrapper}>
          {/* <List title='????????????' icon='moon' rightChildren={<ColorSwitch />} /> */}
          <List
            title='????????????'
            icon='message'
            arrow
            onClick={() => Taro.navigateTo({ url: `/pages/comment/comment` })}
          />
          <List
            title='????????????'
            icon='time'
            arrow
            onClick={() => Taro.navigateTo({ url: `/pages/history/history` })}
          />
          <List
            title='????????????'
            icon='cloud'
            arrow
            onClick={() =>
              Taro.setClipboardData({
                data: webUrl,
              })
            }
          />
          <List
            title='????????????'
            icon='experiment'
            arrow
            onClick={() =>
              Taro.navigateTo({ url: `/pages/laboratory/laboratory` })
            }
          />
          <List
            title='????????????'
            icon='info-circle'
            arrow
            onClick={() => Taro.navigateTo({ url: `/pages/about/about` })}
          />
        </View>
      </View>
      <Donate visible={modalVisible} setVisible={setModalVisible} />
    </>
  );
};

export default My;
