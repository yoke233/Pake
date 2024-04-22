import { PakeCliOptions } from './types.js';

export const DEFAULT_PAKE_OPTIONS: PakeCliOptions = {
  icon: '',
  height: 900,
  width: 1600,
  fullscreen: false,
  resizable: true,
  transparent: false,
  userAgent: '',
  showMenu: false,
  showSystemTray: false,
  multiArch: false,
  targets: 'deb',
  iterCopyFile: false,
  systemTrayIcon: '',
  debug: false,
  inject: [],
  safeDomain: [],
};

// Just for cli development
export const DEFAULT_DEV_PAKE_OPTIONS: PakeCliOptions & { url: string } = {
  ...DEFAULT_PAKE_OPTIONS,
  url: 'https://xiaoin.com.cn/home/index?sharerUserId=1782356704164331521',
  name: 'Xiaoin',
  safeDomain: ['xiaoin.com.cn'],
  transparent: true,
};
