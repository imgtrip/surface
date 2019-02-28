import {showPost, sitemaps} from '../service/link'

export const NODE_AUTH_TOKEN = process.env.NODE_AUTH_TOKEN
export const JWT_AUTH_KEY = process.env.JWT_SECRET
export const DEV = process.env.NODE_ENV !== 'production'
export const PRODUCTION_API_HOST = 'https://x.imgtrip.com'
export const PER_PAGE = 18
export const PER_MAP_PAGE = 100
export const LIST_PER_PAGE = 10
export const JWT_COOKIE_NAME = '_j'
export const JWT_COOKIE_NAME_V1 = 'x_token'
export const JWT_COOKIE_EXPIRES = 365
export const TOKEN_COOKIE_NAME = '_t'
export const TOKEN_COOKIE_EXPIRES = 1 / 24
export const TOKEN_UPDATE_SECONDS = 20
export const ADMIN_USER_IDS = [1]
export const ARROW_SWITCH_NOTIFIED = 'a_s_n'
export const SCREEN_RESOLUTION = 's_r'
export const BIND_FINGERPRINT = 'b_f'
export const CDN = 'https://s.imgtrip.com/'
export const APP_DOMAIN = 'imgtrip.com'
export const APP_FULL_DOMAIN = 'www.imgtrip.com'
export const STAGING_APP_DOMAIN = 'staging.imgtrip.com'
export const AD = {
  lrs_cpc: {
    url: DEV ? 'http://localhost:3000/article' : 'https://www.imgtrip.com/article',
    id: '__x__l',
    container_id: '__x__p',
    min_valid: 100,
    min_invalid: 999,
    max_valid: 1000,
    max_invalid: 9999,
  },
}
export const APP_HOME = 'https://www.imgtrip.com'
export const APP_NAME = '旅图网'
export const APP_LOGO = '//s0.imgtrip.com/s/rectangle-160.png'
export const ICP = '蜀ICP备16032292号-5'
export const IMAGE_LOADING = '/static/loading.svg'
export const VERIFICATION_CODE_RESEND_SECONDS = 120
export const VERIFICATION_CODE_LENGTH = 6
export const ABOUT_POST_ID = 1
export const AGREEMENT_URL = '/p/2'
export const GA_TRACKING_ID = ''
export const SITE_NAME = '旅图网'
export const SITE_TITLE = '旅图网 - 喜欢的图,在旅图'
export const SITE_SLOGON = '喜欢的图，在旅图'
export const SITE_DESCRIPTION = '旅图网imgtrip.com专注提供图片服务。集图片展示、下载、归类、用户评论等功能。旅图网一直致力于让用户更方便，容易的找到自己喜欢的图。喜欢的图，在旅图！'
export const SITE_KEYWORDS = '旅图,imgtrip,旅图网,imgtrip.com,图片,壁纸,精美图片,精美壁纸,高清壁纸,高清图片,好看的图片,电脑壁纸,桌面壁纸,image,img'

export const SITE_IMAGE = '//s0.imgtrip.com/s/rectangle-320.png'
export const SITE_ICO = '//s0.imgtrip.com/s/imgtrip.ico'
export const GOOGLE_SITE_VERIFICATION = '2BIbhwRvhRM1gRHnzIjQeYTY84gNawGC9zQWieh5TF8'
export const BAIDU_SITE_VERIFICATION = 'epDuTcLtTQ'
export const VISITOR_MAX_VIEW_IMAGE_PAGE = 5
export const VISITOR_MAX_VIEW_ALBUM_PAGE = 3
export const VISITOR_MAX_VIEW_ALBUM_IMAGE_PAGE = 3
export const REMOVE_TAG_TIMER_SECONDS = 3

export const IMAGE_SIZES = {
  SMALL: '!s',
  ORIGIN: '!o',
}
export const DOWNLOAD_SIZES = [
  {name: '原图', value: {height: undefined, width: undefined}},
  {name: '1920*1080', value: {height: 1920, width: 1080}},
  {name: '1600*900', value: {height: 1600, width: 900}},
  {name: '1440*900', value: {height: 1440, width: 900}},
  {name: '1536*864', value: {height: 1536, width: 864}},
  {name: '1366*768', value: {height: 1366, width: 768}},
  {name: '1280*720', value: {height: 1280, width: 720}},
]

export const FOOTER_LINKS = [
  {
    name: `©${APP_DOMAIN} ${APP_NAME}`,
    url: '/',
  },
  {
    name: ICP,
    url: 'http://www.miitbeian.gov.cn',
  },
  {
    name: '服务条款',
    url: AGREEMENT_URL,
  },
  {
    name: '关于旅图网',
    url: showPost(ABOUT_POST_ID),
  },
  {
    name: '网站地图',
    url: sitemaps.index,
  },
]

export const SCORES = {
  UPDATE_IMAGE_NAME: 0,
  CREATE_IMAGE_TAG: 0,
  REMOVE_IMAGE_TAG: 100,
  DOWNLOAD_IMAGE: 10,
}


