import { BuidlerConfig, usePlugin } from '@nomiclabs/buidler/config';

usePlugin('@nomiclabs/buidler-waffle');
usePlugin('buidler-typechain');

const config: BuidlerConfig = {
  solc: {
    version: '0.6.2'
  },
  defaultNetwork: 'buidlerevm',
  paths: {
    artifacts: 'src/artifacts'
  },
  typechain: {
    outDir: 'src/types',
    target: 'ethers'
  }
}

export default config;