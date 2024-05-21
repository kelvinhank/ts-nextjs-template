import { FaColumns } from 'react-icons/fa';
import {
  FaCircleQuestion,
  FaLaptop,
  FaUser,
  FaXTwitter,
} from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';

export const LOGIN_COOKIE_KEY = 'isLoggedIn';

export const ITEM_PER_PAGE = 15;

export const NFT_PER_SHOW_PC = 40;

export const NFT_PER_SHOW_MOBILE = 16;

export const RANK_BADGE_COLOR = ['', '#EDB900', '#A1A1A1', '#ED8000'];

export const SEASON_INFO: {
  [key: string]: {
    bgBottom: string;
    icon: string;
    iconActive: string;
    bg: string;
  };
} = {
  spring: {
    bgBottom: 'bg-accent-opacity',
    icon: '/images/spring.svg',
    iconActive: '/images/spring-active.svg',
    bg: '/images/bg-banner-spring.png',
  },
  summer: {
    bgBottom: 'bg-accent2-opacity',
    icon: '/images/winter.svg',
    iconActive: '/images/winter-active.svg',
    bg: '/images/bg-banner-winter.png',
  },
  autumn: {
    bgBottom: 'bg-accent-opacity',
    icon: '/images/spring.svg',
    iconActive: '/images/spring-active.svg',
    bg: '/images/bg-banner-spring.png',
  },
  winter: {
    bgBottom: 'bg-accent2-opacity',
    icon: '/images/winter.svg',
    iconActive: '/images/winter-active.svg',
    bg: '/images/bg-banner-winter.png',
  },
};

export const LANGUAGE = ['en', 'ja'];

export const DEFAULT_LANG = 'ja';

/**
 * @dev see https://walletconnect.com/explorer
 */
export const WALLET_CONNECT_WALLET_ID = {
  METAMASK: 'c57ca95b47569778a828d19178114f4db188b89b763c899ba0be274e97267d96',
};
export const OASYS_WALLET_URL = 'https://www.oasys-wallet.com/';

export const TICKET_IMAGE_DEFAULT = '/images/ticket.gif';

export const componentPositions = ['top', 'bottom', 'left', 'right'] as const;
export const componentShapes = ['circle', 'square'] as const;
export const componentSizes = ['lg', 'md', 'sm', 'xs'] as const;
export const componentStatuses = [
  'info',
  'success',
  'warning',
  'error',
] as const;
export const brandColors = [
  'neutral',
  'primary',
  'secondary',
  'accent',
] as const;
export const componentColors = [
  ...brandColors,
  'ghost',
  ...componentStatuses,
] as const;
export const bgColors = [
  'base-100',
  'base-200',
  'base-300',
  'neutral',
] as const;

export const defaultTheme = 'light';
export const STATUS = ['all', 'requested', 'paid', 'pending', 'rejected'];
export const STATUS_BADGE_COLOR = {
  requested: 'yellow',
  paid: 'green',
  pending: 'orange',
  rejected: 'red',
};

export const ACCOUNT_TYPE = ['normal', 'checking'];

export const filterMappingNFT: {
  key: string;
  value: {
    time_or_price: string;
    expensive_or_cheap: string;
    new_drops_show_on_top: boolean;
  };
}[] = [
  // {
  //   key: 'pickup',
  //   value: {
  //     time_or_price: 'time',
  //     expensive_or_cheap: 'expensive',
  //     new_drops_show_on_top: true,
  //   },
  // },
  {
    key: 'recently_created',
    value: {
      time_or_price: 'time',
      expensive_or_cheap: 'expensive',
      new_drops_show_on_top: false,
    },
  },
  {
    key: 'price_high_to_low',
    value: {
      time_or_price: 'price',
      expensive_or_cheap: 'expensive',
      new_drops_show_on_top: false,
    },
  },
  {
    key: 'price_low_to_high',
    value: {
      time_or_price: 'price',
      expensive_or_cheap: 'cheap',
      new_drops_show_on_top: false,
    },
  },
];

export const menuAccount = ({ address }: { address: string }) => [
  {
    title: 'my_item',
    link: `/user/${address}`,
    icon: FaUser,
    roles: ['illustrator', 'member'],
    target: '',
  },
  {
    title: 'dashboard',
    link: '/dashboard/revenues',
    icon: FaColumns,
    roles: ['illustrator'],
    target: '',
  },
  {
    title: 'help_guide',
    link: `${process.env.NEXT_PUBLIC_HELP_GUIDE}`,
    icon: FaCircleQuestion,
    roles: ['illustrator', 'member'],
    target: 'blank',
  },
  {
    title: 'inquiry',
    link: `${process.env.NEXT_PUBLIC_DISCORD_LINK}`,
    icon: MdEmail,
    roles: ['illustrator', 'member'],
    target: 'blank',
  },
];

export const getSocialMetadata = (
  data?: Record<string, any>,
  isOnlyTwitterName?: boolean
) => {
  let twitter_url = data?.twitter_url || null;
  if (isOnlyTwitterName) {
    twitter_url = data?.twitterName
      ? `https://twitter.com/${data?.twitterName?.replace(/[＠@]/g, '')}`
      : null;
  }

  return [
    {
      name: 'twitter',
      url: twitter_url,
      icon: FaXTwitter,
    },
    {
      name: 'website',
      url: data?.web_url || data?.homepageUrl,
      icon: FaLaptop,
    },
  ];
};
