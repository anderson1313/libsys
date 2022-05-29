import CryptoJS from 'crypto-js';
import { sessionCache  } from './storage';
const aseKey = '**_FXxx_1234_KEY'; //秘钥必须为：8/16/32位


/**
 * 加密存储临时数据并解析对象
 */
export default class ACrypto {
  // 加密
  static setSS(value = '', key ) {
    if (typeof key === 'string') {
      const stringify = JSON.stringify(value);
      const encrypt = CryptoJS.AES.encrypt(stringify, CryptoJS.enc.Utf8.parse(aseKey), {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
      }).toString();
      sessionCache.setItem(key, encrypt);
      return encrypt;
    }
  }
  // 解密
  static getSS(key = KEY) {
    const ssStr = sessionCache.getItem(key) || '';
    try {
      if (ssStr) {
        const decrypt = CryptoJS.AES.decrypt(ssStr, CryptoJS.enc.Utf8.parse(aseKey), {
          mode: CryptoJS.mode.ECB,
          padding: CryptoJS.pad.Pkcs7
        }).toString(CryptoJS.enc.Utf8);
        const parseStr = JSON.parse(decrypt);
        return parseStr;
      }
      return '';
    } catch (e) {
      return '';
    }
  }
}