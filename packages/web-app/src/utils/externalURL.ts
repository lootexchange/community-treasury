export enum ExternalURL {
  discord,
  twitter,
  github,
}

export const externalURL = (externalURL: ExternalURL) => {
  switch (externalURL) {
    case ExternalURL.discord:
      return "https://discord.gg/HNq5bE3x5F";
    case ExternalURL.twitter:
      return "https://twitter.com/LootExchange";
    case ExternalURL.github:
      return "https://github.com/lootexchange";
  }
};
