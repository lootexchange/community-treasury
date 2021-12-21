export enum ExternalURL {
  discord,
  twitter,
  github,
}

export const externalURL = (externalURL: ExternalURL) => {
  switch (externalURL) {
    case ExternalURL.discord:
      return "https://discord.gg/baXP2YPM";
    case ExternalURL.twitter:
      return "https://twitter.com/lootproject";
    case ExternalURL.github:
      return "https://github.com/lootexchange/community-treasury";
  }
};
