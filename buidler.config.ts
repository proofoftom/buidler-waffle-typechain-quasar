import { BuidlerConfig, usePlugin } from '@nomiclabs/buidler/config'

usePlugin('@nomiclabs/buidler-ethers');

const config: BuidlerConfig = {
  solc: {
    version: '0.6.2'
  },
  defaultNetwork: 'buidlerevm'
}

module.exports = config;